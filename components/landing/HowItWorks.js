const STEPS = [
  {
    n: '01', title: 'Build your diet profile',
    body: 'Your conditions, diet type, dietary preference and allergies. Everything GI Buddy generates is measured against this.',
  },
  {
    n: '02', title: 'Ask about any food',
    body: 'Type the dish, photograph the plate or the nutrition label, say it out loud, or scan the barcode.',
  },
  {
    n: '03', title: 'Get a plan you can shop',
    body: 'A meal plan, the grocery list it generates, recipes tuned to your profile, and daily suggestions.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" style={{ background: '#fff', borderTop: '1px solid #e8edf2', borderBottom: '1px solid #e8edf2' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '88px 24px' }}>
        <h2 style={{ margin: 0, fontSize: 34, fontWeight: 800, letterSpacing: '-0.02em', color: '#0f172a' }}>
          How it works
        </h2>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
          gap: 32, marginTop: 40, position: 'relative',
        }}>
          {STEPS.map(s => (
            <div key={s.n}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 20, fontWeight: 600, color: '#0d9488' }}>
                  {s.n}
                </span>
                <span style={{ flex: 1, height: 1, background: '#f1f5f9' }} />
              </div>
              <h3 style={{ margin: '18px 0 0', fontSize: 19, fontWeight: 800, letterSpacing: '-0.02em', color: '#0f172a' }}>
                {s.title}
              </h3>
              <p style={{ margin: '8px 0 0', fontSize: 14, lineHeight: 1.6, color: '#475569' }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
