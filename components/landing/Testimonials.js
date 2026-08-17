// Placeholder voices — generic attributions only, no real people or clinicians.
const QUOTES = [
  {
    quote: 'Eating out used to mean guessing. Now I check the dish first and order without the dread.',
    name: 'Amara M.', initials: 'A M',
  },
  {
    quote: 'The prep planner kept the week before my colonoscopy in order. I stopped rereading the instruction sheet at midnight.',
    name: 'Daniel K.', initials: 'D K',
  },
  {
    quote: 'The grocery list comes from the plan, so my shopping takes ten minutes and nothing in the trolley surprises me.',
    name: 'Sofia R.', initials: 'S R',
  },
];

export default function Testimonials() {
  return (
    <section aria-labelledby="voices-h" style={{ maxWidth: 1200, margin: '0 auto', padding: '88px 24px' }}>
      <h2 id="voices-h" style={{
        margin: 0, fontSize: 34, fontWeight: 800, letterSpacing: '-0.02em', color: '#0f172a',
      }}>
        From members
      </h2>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20, marginTop: 36,
      }}>
        {QUOTES.map(q => (
          <figure key={q.name} style={{
            margin: 0, background: '#fff', border: '1px solid #e8edf2', borderRadius: 14,
            boxShadow: '0 1px 4px rgba(0,0,0,0.04)', padding: 24,
          }}>
            <blockquote style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: '#475569' }}>
              {q.quote}
            </blockquote>
            <figcaption style={{
              display: 'flex', alignItems: 'center', gap: 12,
              marginTop: 20, paddingTop: 18, borderTop: '1px solid #f1f5f9',
            }}>
              <span style={{
                width: 36, height: 36, borderRadius: '50%', background: '#f0fdfa', color: '#0f766e',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 13, fontWeight: 700,
              }}>
                {q.initials}
              </span>
              <span>
                <span style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#0f172a' }}>{q.name}</span>
                <span style={{ display: 'block', fontSize: 12, color: '#94a3b8' }}>Member since 2025</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
