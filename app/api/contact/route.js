const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const name = String(body?.name || '').trim();
  const email = String(body?.email || '').trim();
  const subject = String(body?.subject || 'General').trim();
  const message = String(body?.message || '').trim();

  if (!name || !EMAIL_RE.test(email) || message.length < 10) {
    return Response.json({ error: 'Please fill in all fields correctly.' }, { status: 400 });
  }

  // TODO: forward to the real inbox / CRM. For now the submission is only logged.
  console.log('[contact]', { name, email, subject, message });

  return Response.json({ ok: true });
}
