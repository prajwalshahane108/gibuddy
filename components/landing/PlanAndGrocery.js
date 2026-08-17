import { CheckIcon } from '@/components/landing/icons';

const DAYS = [
  { day: 'MON', meals: 'Oat porridge · Rice bowl with chicken · Baked cod, carrots' },
  { day: 'TUE', meals: 'Lactose-free yoghurt · Quinoa salad · Turkey with courgette' },
  { day: 'WED', meals: 'Scrambled eggs · Rice noodle soup · Roast chicken, potatoes' },
];

const BULLETS = [
  'The grocery list builds itself from the plan you keep.',
  'Check items off as you shop, or edit and delete them.',
  'Ask for a recipe for any meal on the plan.',
];

export default function PlanAndGrocery() {
  return (
    <section aria-labelledby="plan-h" style={{
      maxWidth: 1200, margin: '0 auto', padding: '88px 24px',
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 56, alignItems: 'center',
    }}>
      <div style={{ display: 'grid', gap: 16, order: 2 }}>
        <div style={{
          background: '#fff', border: '1px solid #e8edf2', borderRadius: 14,
          boxShadow: '0 1px 4px rgba(0,0,0,0.04)', padding: 22,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
            <h3 style={{ margin: 0, fontSize: 15, fontWeight: 800, letterSpacing: '-0.02em', color: '#0f172a' }}>
              Your 3-day plan
            </h3>
            <span style={{
              background: '#f0fdfa', color: '#0f766e', borderRadius: 20, padding: '5px 11px',
              fontSize: 11, fontWeight: 600,
            }}>
              Low FODMAP
            </span>
          </div>

          <div style={{
            marginTop: 16, display: 'grid', gap: 1, background: '#f1f5f9',
            borderRadius: 10, overflow: 'hidden',
          }}>
            {DAYS.map(d => (
              <div key={d.day} style={{
                display: 'grid', gridTemplateColumns: '70px 1fr', gap: 12,
                background: '#fff', padding: '12px 14px',
              }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#94a3b8' }}>
                  {d.day}
                </span>
                <span style={{ fontSize: 13, color: '#475569' }}>{d.meals}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ order: 1 }}>
        <span style={{
          display: 'inline-block', background: '#e0f2fe', color: '#0369a1',
          borderRadius: 20, padding: '5px 11px', fontSize: 11, fontWeight: 600,
        }}>
          Plans and shopping
        </span>
        <h2 id="plan-h" style={{
          margin: '16px 0 0', fontSize: 32, fontWeight: 800, letterSpacing: '-0.02em', color: '#0f172a',
        }}>
          A plan, and the list that comes with it
        </h2>
        <p style={{ margin: '12px 0 0', maxWidth: '52ch', fontSize: 16, lineHeight: 1.6, color: '#475569' }}>
          Meal plans are generated against your diet profile, so the food on them is already checked.
          If a plan doesn&apos;t suit your week, regenerate it.
        </p>
        <ul style={{ listStyle: 'none', margin: '24px 0 0', padding: 0, display: 'grid', gap: 12 }}>
          {BULLETS.map(b => (
            <li key={b} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <CheckIcon size={16} stroke="#16a34a" strokeWidth={2.5} style={{ flex: 'none', marginTop: 2 }} />
              <span style={{ fontSize: 14, lineHeight: 1.6, color: '#475569' }}>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
