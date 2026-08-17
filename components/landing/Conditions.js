import { ActivityIcon, LeafIcon, UtensilsIcon, BellIcon } from '@/components/landing/icons';

const CARDS = [
  {
    icon: ActivityIcon, tint: '#f0fdfa', color: '#0d9488',
    title: 'IBS',
    body: 'Flags common trigger ingredients before you eat and suggests low-FODMAP swaps you can actually find.',
    pill: 'Trigger-aware checks', pillBg: '#f0fdfa', pillFg: '#0f766e',
  },
  {
    icon: LeafIcon, tint: '#e0f2fe', color: '#0ea5e9',
    title: "Crohn's disease",
    body: 'Keeps meal plans gentle on the gut and explains why a dish may be harder to tolerate right now.',
    pill: 'Gentle meal plans', pillBg: '#e0f2fe', pillFg: '#0369a1',
  },
  {
    icon: UtensilsIcon, tint: '#ede9fe', color: '#7c3aed',
    title: 'Ulcerative colitis',
    body: 'Checks dishes and labels against your allergies and preferences, then offers a safer version of the same meal.',
    pill: 'Safer alternatives', pillBg: '#ede9fe', pillFg: '#6d28d9',
  },
  {
    icon: BellIcon, tint: '#dcfce7', color: '#16a34a',
    title: 'Colonoscopy prep',
    body: 'Turns your procedure date and prep medication into step-by-step instructions with timed reminders.',
    pill: 'Step-by-step prep', pillBg: '#dcfce7', pillFg: '#15803d',
  },
];

export default function Conditions() {
  return (
    <section id="conditions" style={{ maxWidth: 1200, margin: '0 auto', padding: '88px 24px' }}>
      <h2 style={{ margin: 0, fontSize: 34, fontWeight: 800, letterSpacing: '-0.02em', color: '#0f172a' }}>
        Conditions we support
      </h2>
      <p style={{ margin: '12px 0 0', maxWidth: '60ch', fontSize: 16, lineHeight: 1.6, color: '#475569' }}>
        Your profile tells GI Buddy what to watch for, so every answer is shaped by your condition rather
        than general nutrition advice.
      </p>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: 20, marginTop: 36,
      }}>
        {CARDS.map(({ icon: Icon, ...c }) => (
          <article key={c.title} className="lp-card" style={{
            background: '#fff', border: '1px solid #e8edf2', borderRadius: 14,
            boxShadow: '0 1px 4px rgba(0,0,0,0.04)', padding: 24,
          }}>
            <span style={{
              width: 40, height: 40, borderRadius: 12, background: c.tint,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Icon size={19} stroke={c.color} />
            </span>
            <h3 style={{ margin: '16px 0 0', fontSize: 17, fontWeight: 800, letterSpacing: '-0.02em', color: '#0f172a' }}>
              {c.title}
            </h3>
            <p style={{ margin: '8px 0 0', fontSize: 14, lineHeight: 1.6, color: '#475569' }}>{c.body}</p>
            <span style={{
              display: 'inline-block', marginTop: 14, background: c.pillBg, color: c.pillFg,
              borderRadius: 20, padding: '5px 11px', fontSize: 11, fontWeight: 600,
            }}>
              {c.pill}
            </span>
          </article>
        ))}
      </div>

      <p style={{ margin: '26px 0 0', fontSize: 13, color: '#64748b' }}>
        Not sure which applies to you? Your care team is the right place to start.
      </p>
    </section>
  );
}
