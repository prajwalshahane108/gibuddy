import { CheckIcon, BellIcon } from '@/components/landing/icons';

const CAPS = {
  fontSize: 11, fontWeight: 600, color: '#94a3b8',
  letterSpacing: '0.04em', textTransform: 'uppercase',
};

const TIMELINE = [
  { when: '-3 DAYS', what: 'Move to a low-residue diet. GI Buddy adjusts your meal plan automatically.' },
  { when: '-1 DAY',  what: 'Clear liquids only. First dose of prep medication in the evening.' },
  { when: 'DAY 0',   what: 'Second dose early, then nothing by mouth as instructed.' },
];

export default function PrepSpotlight() {
  return (
    <section aria-labelledby="prep-h" style={{
      background: '#f0fdfa', borderTop: '1px solid #ccfbf1', borderBottom: '1px solid #ccfbf1',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '88px 24px',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 56, alignItems: 'center',
      }}>
        <div>
          <span style={{
            display: 'inline-block', background: '#ccfbf1', color: '#0f766e',
            borderRadius: 20, padding: '5px 11px', fontSize: 11, fontWeight: 600,
          }}>
            Colonoscopy prep
          </span>
          <h2 id="prep-h" style={{
            margin: '16px 0 0', fontSize: 32, fontWeight: 800, letterSpacing: '-0.02em', color: '#0f172a',
          }}>
            Prep, one step at a time
          </h2>
          <p style={{ margin: '12px 0 0', maxWidth: '52ch', fontSize: 16, lineHeight: 1.6, color: '#475569' }}>
            Enter your procedure details once. GI Buddy turns them into the order of things — what to stop
            eating, when to take your prep medication, and what to expect next — and reminds you at each step.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 32 }}>
            <span style={{
              display: 'flex', alignItems: 'center', gap: 9, background: '#fff',
              border: '1px solid #ccfbf1', borderRadius: 20, padding: '8px 14px',
              fontSize: 12, fontWeight: 600, color: '#0f766e',
            }}>
              <CheckIcon size={14} stroke="#16a34a" strokeWidth={2.5} />
              Prep cleared
            </span>
            <span style={{ flex: 1, height: 1, background: '#ccfbf1', minWidth: 24 }} />
            <span style={{
              display: 'flex', alignItems: 'center', gap: 9, background: '#fff',
              border: '1px solid #ccfbf1', borderRadius: 20, padding: '8px 14px',
              fontSize: 12, fontWeight: 600, color: '#64748b',
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#0d9488' }} />
              Procedure
            </span>
          </div>

          <p style={{ margin: '20px 0 0', fontSize: 13, color: '#64748b' }}>
            Always follow the instructions your physician gave you. GI Buddy keeps them in order; it
            doesn&apos;t change them.
          </p>
        </div>

        <div style={{
          background: '#fff', border: '1px solid #e8edf2', borderRadius: 14,
          boxShadow: '0 1px 4px rgba(0,0,0,0.04)', padding: 24,
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <div style={CAPS}>Procedure</div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 15, color: '#0f172a', marginTop: 6 }}>
                12 Sep 2026 · 09:30
              </div>
            </div>
            <div>
              <div style={CAPS}>Prep type</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#0f172a', marginTop: 6 }}>Split dose</div>
            </div>
            <div>
              <div style={CAPS}>Medication</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#0f172a', marginTop: 6 }}>As prescribed</div>
            </div>
            <div>
              <div style={CAPS}>Status</div>
              <div style={{ marginTop: 6 }}>
                <span style={{
                  background: '#fef9c3', color: '#ca8a04', borderRadius: 20, padding: '5px 11px',
                  fontSize: 11, fontWeight: 600,
                }}>
                  In progress
                </span>
              </div>
            </div>
          </div>

          <div style={{
            marginTop: 20, paddingTop: 18, borderTop: '1px solid #f1f5f9',
            display: 'grid', gap: 14,
          }}>
            {TIMELINE.map(t => (
              <div key={t.when} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{
                  fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#0d9488',
                  width: 52, flex: 'none', marginTop: 2,
                }}>
                  {t.when}
                </span>
                <span style={{ fontSize: 13, lineHeight: 1.6, color: '#475569' }}>{t.what}</span>
              </div>
            ))}
          </div>

          <div style={{
            display: 'flex', alignItems: 'center', gap: 10, marginTop: 18,
            paddingTop: 16, borderTop: '1px solid #f1f5f9',
          }}>
            <BellIcon size={15} stroke="#0d9488" />
            <span style={{ fontSize: 12, color: '#64748b' }}>Reminders at each step, on your phone</span>
          </div>
        </div>
      </div>
    </section>
  );
}
