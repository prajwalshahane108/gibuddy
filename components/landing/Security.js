import Link from 'next/link';
import { LockIcon, ShieldIcon, CheckIcon, LeafIcon, WarningIcon } from '@/components/landing/icons';

const CARDS = [
  {
    icon: LockIcon, tint: '#f0fdfa', color: '#0d9488', strokeWidth: 2,
    title: 'Encrypted end to end of the trip',
    body: '256-bit encryption in transit and at rest.',
  },
  {
    icon: ShieldIcon, tint: '#e0f2fe', color: '#0ea5e9', strokeWidth: 2,
    title: 'HIPAA-aligned handling',
    body: 'Health data is treated as health data, not analytics.',
  },
  {
    icon: CheckIcon, tint: '#dcfce7', color: '#16a34a', strokeWidth: 2.5,
    title: 'SOC 2 controls',
    body: 'Access is limited, logged and reviewed.',
  },
  {
    icon: LeafIcon, tint: '#ede9fe', color: '#7c3aed', strokeWidth: 2,
    title: 'Your data is never sold',
    body: 'Export or delete it whenever you want.',
  },
];

export function Security() {
  return (
    <section aria-labelledby="privacy-h" style={{
      background: '#fff', borderTop: '1px solid #e8edf2', borderBottom: '1px solid #e8edf2',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '88px 24px' }}>
        <h2 id="privacy-h" style={{
          margin: 0, fontSize: 34, fontWeight: 800, letterSpacing: '-0.02em', color: '#0f172a',
        }}>
          Privacy and security
        </h2>
        <p style={{ margin: '12px 0 0', maxWidth: '60ch', fontSize: 16, lineHeight: 1.6, color: '#475569' }}>
          Your diet profile is health information. It is handled that way.
        </p>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20, marginTop: 36,
        }}>
          {CARDS.map(({ icon: Icon, ...c }) => (
            <article key={c.title} style={{
              background: '#f8fafc', border: '1px solid #f1f5f9', borderRadius: 14, padding: 22,
            }}>
              <span style={{
                width: 36, height: 36, borderRadius: 12, background: c.tint,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon size={17} stroke={c.color} strokeWidth={c.strokeWidth} />
              </span>
              <h3 style={{
                margin: '14px 0 0', fontSize: 15, fontWeight: 800, letterSpacing: '-0.02em', color: '#0f172a',
              }}>
                {c.title}
              </h3>
              <p style={{ margin: '6px 0 0', fontSize: 13, lineHeight: 1.6, color: '#475569' }}>{c.body}</p>
            </article>
          ))}
        </div>

        <p style={{ margin: '22px 0 0', fontSize: 13, color: '#64748b' }}>
          Full detail is in the{' '}
          <Link href="/privacy-policy" className="lp-a" style={{ fontWeight: 600 }}>Privacy Policy</Link>.
        </p>
      </div>
    </section>
  );
}

export function Disclaimer() {
  return (
    <section aria-label="Medical disclaimer" style={{ background: '#f8fafc' }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '32px 24px',
        display: 'flex', gap: 14, alignItems: 'flex-start',
      }}>
        <WarningIcon size={18} stroke="#ca8a04" style={{ flex: 'none', marginTop: 2 }} />
        <p style={{ margin: 0, maxWidth: '100ch', fontSize: 13, lineHeight: 1.7, color: '#64748b' }}>
          GI Buddy provides general dietary information. It is not a medical device, it does not diagnose or
          treat any condition, and it is not a substitute for professional medical advice. Always follow your
          physician&apos;s instructions, especially for colonoscopy preparation. See the{' '}
          <Link href="/terms-and-conditions" className="lp-a" style={{ fontWeight: 600 }}>
            Terms &amp; Conditions
          </Link>.
        </p>
      </div>
    </section>
  );
}
