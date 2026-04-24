export async function onRequest(context) {
    const { request, env } = context;
    const { MESSAGE_KV } = env;

    if (request.method === 'GET') {
        const list = await MESSAGE_KV.list({ prefix: 'review:' });
        const reviews = [];
        for (const key of list.keys) {
            const val = await MESSAGE_KV.get(key.name);
            if (val) {
                const review = JSON.parse(val);
                if (!review.isDeleted) {
                    reviews.push(review);
                }
            }
        }
        // Sort by date descending (assuming id is timestamp)
        reviews.sort((a, b) => b.id.split(':')[1] - a.id.split(':')[1]);
        return new Response(JSON.stringify(reviews), {
            headers: { 'Content-Type': 'application/json' }
        });
    }

    if (request.method === 'POST') {
        const body = await request.json();
        const id = `review:${Date.now()}`;
        const newReview = {
            id,
            nickname: body.nickname,
            profile: body.profile,
            stars: body.stars,
            date: new Date().toLocaleDateString('ja-JP'),
            comment: body.comment,
            reply: '',
            isDeleted: false
        };
        await MESSAGE_KV.put(id, JSON.stringify(newReview));
        return new Response(JSON.stringify({ success: true, review: newReview }), {
            headers: { 'Content-Type': 'application/json' }
        });
    }

    if (request.method === 'PATCH') {
        // For admin reply or soft delete
        const body = await request.json();
        const password = request.headers.get('Authorization');
        const adminPassword = env.ADMIN_PASSWORD || 'admin123';

        if (password !== adminPassword) {
            return new Response('Unauthorized', { status: 401 });
        }

        const existing = await MESSAGE_KV.get(body.id);
        if (!existing) return new Response('Not Found', { status: 404 });

        const review = JSON.parse(existing);
        if (body.action === 'reply') {
            review.reply = body.reply;
        } else if (body.action === 'delete') {
            review.isDeleted = true;
        }

        await MESSAGE_KV.put(body.id, JSON.stringify(review));
        return new Response(JSON.stringify({ success: true }));
    }

    return new Response('Method Not Allowed', { status: 405 });
}
