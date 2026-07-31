const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export async function onRequestGet(context) {
  const value = await context.env.MESSAGE_KV.get("announcement");
  return new Response(JSON.stringify({ message: value || "" }), {
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders,
    },
  });
}

export async function onRequestPost(context) {
  const { password, message } = await context.request.json();
  const adminPassword = context.env.ADMIN_PASSWORD || "admin123";

  if (password !== adminPassword) {
    return new Response(JSON.stringify({ error: "パスワードが正しくありません" }), {
      status: 403,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  }

  await context.env.MESSAGE_KV.put("announcement", message);
  return new Response(JSON.stringify({ success: true }), {
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders,
    },
  });
}

