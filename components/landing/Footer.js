import Link from 'next/link';

const COL_TITLE = {
  margin: 0, fontSize: 12, fontWeight: 700, color: '#0f172a',
  letterSpacing: '0.04em', textTransform: 'uppercase',
};

const LINK = { fontSize: 13, color: '#475569' };

// `active` marks the current legal page's own link in the Legal column.
export default function Footer({ prefix = '', active }) {
  return (
    <footer style={{ background: '#fff', borderTop: '1px solid #e8edf2' }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '56px 24px 0',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 40,
      }}>
        <div style={{ maxWidth: '34ch' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{
              width: 28, height: 28, borderRadius: 9,
              background: 'linear-gradient(135deg,#0f766e 0%,#134e4a 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontWeight: 800, fontSize: 13, letterSpacing: '-0.5px',
            }}>G</span>
            <span style={{ fontSize: 16, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.3px' }}>GI Buddy</span>
          </div>
          <p style={{ margin: '14px 0 0', fontSize: 13, lineHeight: 1.6, color: '#475569' }}>
            An AI gut-health and diet companion for people living with GI conditions.
          </p>
          <p style={{ margin: '12px 0 0', fontSize: 12, color: '#94a3b8' }}>
            HIPAA Compliant · SOC 2 Certified · 256-bit Encryption
          </p>
        </div>

        <div>
          <h2 style={COL_TITLE}>Product</h2>
          <div style={{ display: 'grid', gap: 10, marginTop: 14 }}>
            <Link href={`${prefix}#features`}   className="lp-footer-link" style={LINK}>Features</Link>
            <Link href={`${prefix}#how`}        className="lp-footer-link" style={LINK}>How it works</Link>
            <Link href={`${prefix}#conditions`} className="lp-footer-link" style={LINK}>Conditions</Link>
            <Link href={`${prefix}#download`}   className="lp-footer-link" style={LINK}>Download</Link>
            <Link href={`${prefix}#faq`}        className="lp-footer-link" style={LINK}>FAQ</Link>
          </div>
        </div>

        <div>
          <h2 style={COL_TITLE}>Company</h2>
          <div style={{ display: 'grid', gap: 10, marginTop: 14 }}>
            {/* TODO: point these at real pages once they exist. */}
            <Link href={`${prefix}#about`}   className="lp-footer-link" style={LINK}>About</Link>
            <Link href={`${prefix}#contact`} className="lp-footer-link" style={LINK}>Contact</Link>
            <Link href={`${prefix}#careers`} className="lp-footer-link" style={LINK}>Careers</Link>
          </div>
        </div>

        <div>
          <h2 style={COL_TITLE}>Legal</h2>
          <div style={{ display: 'grid', gap: 10, marginTop: 14 }}>
            <Link href="/privacy-policy" className="lp-footer-link"
              style={active === 'privacy' ? { fontSize: 13, color: '#0d9488', fontWeight: 600 } : LINK}>
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="lp-footer-link"
              style={active === 'terms' ? { fontSize: 13, color: '#0d9488', fontWeight: 600 } : LINK}>
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>

      <div style={{
        maxWidth: 1200, margin: '40px auto 0', padding: 24, borderTop: '1px solid #e8edf2',
        display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', justifyContent: 'space-between',
      }}>
        <span style={{ fontSize: 12, color: '#94a3b8' }}>© 2026 DSHG Sonic. All rights reserved.</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center' }}>
          <Link href="/privacy-policy" className="lp-footer-link" style={{ fontSize: 12, color: '#64748b' }}>
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="lp-footer-link" style={{ fontSize: 12, color: '#64748b' }}>
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
