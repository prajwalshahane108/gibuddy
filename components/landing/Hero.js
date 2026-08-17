import Link from 'next/link';
import { SparkleIcon, ShieldIcon, UtensilsIcon, LeafIcon } from '@/components/landing/icons';

const GLASS = {
  background: 'rgba(255,255,255,0.08)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: 16,
};

const CAPS = {
  fontSize: 11, fontWeight: 600, color: '#94a3b8',
  letterSpacing: '0.04em', textTransform: 'uppercase',
};

const PROFILE_TAGS = ['IBS', 'Low FODMAP', 'No dairy', 'Peanut allergy'];

export default function Hero() {
  return (
    <section style={{
      position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(135deg,#0f766e 0%,#134e4a 100%)',
    }}>
      <div aria-hidden="true" style={{
        position: 'absolute', top: -180, left: -140, width: 520, height: 520, borderRadius: '50%',
        background: 'radial-gradient(circle,#14b8a6,transparent)', opacity: 0.1,
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: -220, right: -120, width: 560, height: 560, borderRadius: '50%',
        background: 'radial-gradient(circle,#14b8a6,transparent)', opacity: 0.1,
      }} />

      <div style={{
        position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '96px 24px 100px',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 64, alignItems: 'center',
      }}>
        <div className="lp-fade-up">
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 20, padding: '6px 13px',
            fontSize: 11, fontWeight: 600, color: '#ccfbf1', letterSpacing: '0.01em',
          }}>
            <SparkleIcon size={13} stroke="#14b8a6" />
            AI gut-health companion
          </span>

          <h1 style={{
            margin: '20px 0 0', fontSize: 52, lineHeight: 1.06, fontWeight: 800,
            letterSpacing: '-0.02em', color: '#fff', textWrap: 'pretty',
          }}>
            Eat with confidence, even with a sensitive gut.
          </h1>
          <p style={{
            margin: '20px 0 0', maxWidth: '52ch', fontSize: 17, lineHeight: 1.6,
            color: '#ccfbf1', textWrap: 'pretty',
          }}>
            GI Buddy checks any food against your own diet profile and plans your meals around IBS,
            Crohn&apos;s disease, ulcerative colitis, or an upcoming colonoscopy prep.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 32 }}>
            <Link href="#download" className="lp-btn-hero" style={{
              display: 'inline-flex', alignItems: 'center', background: '#0d9488', color: '#fff',
              fontSize: 14, fontWeight: 600, padding: '13px 22px', borderRadius: 10,
            }}>
              Get the app
            </Link>
            <Link href="#how" className="lp-btn-ghost" style={{
              display: 'inline-flex', alignItems: 'center', color: '#fff',
              fontSize: 14, fontWeight: 600, padding: '13px 22px', borderRadius: 10,
              border: '1.5px solid rgba(255,255,255,0.22)',
            }}>
              See how it works
            </Link>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginTop: 34 }}>
            <ShieldIcon size={15} stroke="#14b8a6" />
            <span style={{ fontSize: 12, fontWeight: 600, color: '#ccfbf1', letterSpacing: '0.01em' }}>
              HIPAA Compliant · SOC 2 Certified · 256-bit Encryption
            </span>
          </div>
        </div>

        <div style={{ position: 'relative', display: 'grid', gap: 14, justifyItems: 'stretch' }}>
          <div style={{ ...GLASS, padding: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{
                  width: 38, height: 38, borderRadius: 12, background: 'rgba(255,255,255,0.10)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <UtensilsIcon size={18} stroke="#ccfbf1" />
                </span>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', letterSpacing: '-0.01em' }}>
                    Grilled chicken bowl
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#94a3b8' }}>
                    checked 2 min ago
                  </div>
                </div>
              </div>
              <span style={{
                background: '#dcfce7', color: '#16a34a', borderRadius: 20, padding: '5px 11px',
                fontSize: 11, fontWeight: 600, whiteSpace: 'nowrap',
              }}>
                Safe for IBS
              </span>
            </div>
            <p style={{ margin: '16px 0 0', fontSize: 13, lineHeight: 1.6, color: '#ccfbf1' }}>
              Low FODMAP as prepared. The garlic oil in the dressing is the only item worth swapping.
            </p>
          </div>

          <div style={{ ...GLASS, padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{
              width: 36, height: 36, borderRadius: 12, background: 'rgba(255,255,255,0.10)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <LeafIcon size={17} stroke="#ccfbf1" />
            </span>
            <div>
              <div style={CAPS}>Safer alternative</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginTop: 3 }}>
                Garlic-infused olive oil dressing
              </div>
            </div>
          </div>

          <div style={{ ...GLASS, padding: '18px 20px' }}>
            <div style={CAPS}>Your diet profile</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
              {PROFILE_TAGS.map(tag => (
                <span key={tag} style={{
                  background: 'rgba(255,255,255,0.10)', borderRadius: 20, padding: '5px 11px',
                  fontSize: 11, fontWeight: 600, color: '#ccfbf1',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
