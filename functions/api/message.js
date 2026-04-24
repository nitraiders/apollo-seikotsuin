export async function onRequestGet(context) {
  const value = await context.env.MESSAGE_KV.get("announcement");
  return new Response(JSON.stringify({ message: value || "" }), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function onRequestPost(context) {
  const { password, message } = await context.request.json();
  const adminPassword = context.env.ADMIN_PASSWORD || "admin123";

  if (password !== adminPassword) {
    return new Response(JSON.stringify({ error: "パスワードが正しくありません" }), {
      status: 403,
      headers: { "Content-Type": "application/json" },
    });
  }

  await context.env.MESSAGE_KV.put("announcement", message);
  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
  });
}
