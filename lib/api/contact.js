/**
 * Submits the landing-page contact form.
 * Throws an Error with a user-facing message when the request fails.
 */
export async function sendContactMessage({ name, email, subject, message }) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, subject, message }),
  });

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    throw new Error(data?.error || 'Could not send your message. Please try again.');
  }

  return data;
}
