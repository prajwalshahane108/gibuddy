import Image from 'next/image';
import { CheckIcon, SparkleIcon, BellIcon } from '@/components/landing/icons';

// TODO: replace with the real store listings once the apps are published.
const APP_STORE_URL = '#';
const PLAY_STORE_URL = '#';

const POINTS = [
  { icon: SparkleIcon, text: 'Check a food in seconds, wherever you are — the camera and microphone are right there.' },
  { icon: BellIcon,    text: 'Prep reminders and daily suggestions arrive as notifications on your phone.' },
  { icon: CheckIcon,   text: 'Your profile, plans and history stay in sync across every device you sign in on.' },
];

// The official store badges (public/appstore.png, public/playstore.png) are
// ~518x169, so 160x52 keeps their aspect ratio exactly.
const BADGE_W = 160;
const BADGE_H = 52;

export default function AppDownload() {
  return (
    <section id="download" style={{
      background: '#fff', borderTop: '1px solid #e8edf2', borderBottom: '1px solid #e8edf2',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '88px 24px',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 56, alignItems: 'center',
      }}>
        <div>
          <span style={{
            display: 'inline-block', background: '#f0fdfa', color: '#0f766e',
            borderRadius: 20, padding: '5px 11px', fontSize: 11, fontWeight: 600,
          }}>
            Download
          </span>
          <h2 style={{
            margin: '16px 0 0', fontSize: 34, fontWeight: 800, letterSpacing: '-0.02em', color: '#0f172a',
          }}>
            Get GI Buddy on your phone
          </h2>
          <p style={{ margin: '12px 0 0', maxWidth: '52ch', fontSize: 16, lineHeight: 1.6, color: '#475569' }}>
            Free to start. Install the app, build your diet profile once, and every check, plan and reminder
            follows you from there.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 32 }}>
            <a href={APP_STORE_URL} className="lp-store-badge" aria-label="Download GI Buddy on the App Store">
              <Image
                src="/appstore.png" alt="Download on the App Store"
                width={BADGE_W} height={BADGE_H}
                style={{ display: 'block', width: BADGE_W, height: 'auto' }}
              />
            </a>
            <a href={PLAY_STORE_URL} className="lp-store-badge" aria-label="Get GI Buddy on Google Play">
              <Image
                src="/playstore.png" alt="Get it on Google Play"
                width={BADGE_W} height={BADGE_H}
                style={{ display: 'block', width: BADGE_W, height: 'auto' }}
              />
            </a>
          </div>

          <p style={{ margin: '20px 0 0', fontSize: 13, color: '#64748b' }}>
            Available for iPhone and Android. Premium unlocks plans and prep support, and can be cancelled any time.
          </p>
        </div>

        <div style={{
          background: '#f8fafc', border: '1px solid #e8edf2', borderRadius: 14, padding: 28,
        }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 18 }}>
            {POINTS.map(({ icon: Icon, text }) => (
              <li key={text} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <span style={{
                  width: 36, height: 36, borderRadius: 12, background: '#f0fdfa',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none',
                }}>
                  <Icon size={17} stroke="#0d9488" />
                </span>
                <span style={{ fontSize: 14, lineHeight: 1.6, color: '#475569' }}>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
