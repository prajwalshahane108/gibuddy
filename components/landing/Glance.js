const STATS = [
  { n: '4',    label: 'ways to ask about a food',            note: 'Text, photo, voice, barcode' },
  { n: '3',    label: 'GI conditions supported',             note: "IBS, Crohn's, ulcerative colitis" },
  { n: '7',    label: 'day meal plans, regenerated on demand', note: 'With a grocery list attached' },
  { n: '24/7', label: 'prep reminders and instructions',     note: 'For colonoscopy preparation' },
];

export default function Glance() {
  return (
    <section aria-label="At a glance" style={{ background: '#fff', borderBottom: '1px solid #e8edf2' }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '32px 24px',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 28,
      }}>
        {STATS.map(s => (
          <div key={s.label}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 26, fontWeight: 600, color: '#0d9488' }}>
              {s.n}
            </div>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#475569', marginTop: 4 }}>{s.label}</div>
            <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 2 }}>{s.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
