const INITIAL_REVIEWS = [
    {
        "id": "review:1736521200000",
        "nickname": "千春さん",
        "profile": "女性/50代/主婦",
        "stars": 5,
        "date": "2025/1/11",
        "comment": "今回で3回目の施術でした。\nいつもありがとうございます…\nしっかり学ばれ資格を持った方の施術なので痛みの原因や改善方法等のアドバイスも頂けてとても心強く思っております。\nその日の体調によって施術はお任せしております。\nそれだけ信頼しているとも言えます。\nこれからも定期的に通って心身ともにリラックス出来たらと思います。\nこれからも宜しくお願いします。",
        "reply": "千春さん様\nたくさんの整骨院がある中、当整骨院を選んで頂きありがとうございました^_^ \n口コミのご投稿ありがとうございます。\n\nいつもご利用いただきありがとうございます！\nその日の体調によってお身体の辛さは変わってきますので、お話を伺った上でお任せいただき嬉しいです。\n今後ともよろしくお願いします！\n\n今後も、適切な施術やアドバイスをご提供できるように努力してまいりますのでよろしくお願いします。\nまたのご来院、心よりお待ちしております。",
        "isDeleted": false
    },
    {
        "id": "review:1733756400000",
        "nickname": "あっこさん",
        "profile": "女性/50代/主婦",
        "date": "2024/12/10",
        "stars": 5,
        "comment": "首の凝りがひどくて行きました。\n全身のマッサージでお願いしましたが、先生の言うとおり首と上半身だけのマッサージでお願いした方がいい気がしました。\nあっという間の30分でしたがとってもリラックスできました。\nまたよろしくお願いします。",
        "reply": "あっこさん様、ご来院ありがとうございました！首の凝りが少しでも楽になったのであれば幸いです。またお疲れが溜まる前にぜひメンテナンスにお越しくださいね。",
        "isDeleted": false
    }
];

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function onRequestOptions() {
    return new Response(null, {
        status: 204,
        headers: corsHeaders,
    });
}

export async function onRequest(context) {
    const { request, env } = context;
    const { MESSAGE_KV } = env;

    if (request.method === 'OPTIONS') {
        return new Response(null, {
            status: 204,
            headers: corsHeaders
        });
    }

    if (request.method === 'GET') {
        const list = await MESSAGE_KV.list({ prefix: 'review:' });
        
        // If KV is empty, seed it with initial reviews (first time setup)
        if (list.keys.length === 0) {
            for (const r of INITIAL_REVIEWS) {
                await MESSAGE_KV.put(r.id, JSON.stringify(r));
            }
            return new Response(JSON.stringify(INITIAL_REVIEWS), {
                headers: { 
                    'Content-Type': 'application/json',
                    ...corsHeaders
                }
            });
        }

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
        reviews.sort((a, b) => {
            const timeA = parseInt(a.id.split(':')[1]);
            const timeB = parseInt(b.id.split(':')[1]);
            return timeB - timeA;
        });
        
        return new Response(JSON.stringify(reviews), {
            headers: { 
                'Content-Type': 'application/json',
                ...corsHeaders
            }
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
            headers: { 
                'Content-Type': 'application/json',
                ...corsHeaders
            }
        });
    }

    if (request.method === 'PATCH') {
        // For admin reply or soft delete
        const body = await request.json();
        const password = request.headers.get('Authorization');
        const adminPassword = env.ADMIN_PASSWORD || 'admin123';

        if (password !== adminPassword) {
            return new Response('Unauthorized', { 
                status: 401,
                headers: corsHeaders
            });
        }

        const existing = await MESSAGE_KV.get(body.id);
        if (!existing) {
            return new Response('Not Found', { 
                status: 404,
                headers: corsHeaders
            });
        }

        const review = JSON.parse(existing);
        if (body.action === 'reply') {
            review.reply = body.reply;
        } else if (body.action === 'delete') {
            review.isDeleted = true;
        }

        await MESSAGE_KV.put(body.id, JSON.stringify(review));
        return new Response(JSON.stringify({ success: true }), {
            headers: { 
                'Content-Type': 'application/json',
                ...corsHeaders
            }
        });
    }

    return new Response('Method Not Allowed', { 
        status: 405,
        headers: corsHeaders
    });
}

