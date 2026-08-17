'use client';

import { useState } from 'react';
import Link from 'next/link';

const LINKS = [
  { href: '#features',   label: 'Features' },
  { href: '#how',        label: 'How it works' },
  { href: '#conditions', label: 'Conditions' },
  { href: '#download',   label: 'Download' },
  { href: '#faq',        label: 'FAQ' },
  { href: '#contact',    label: 'Contact' },
];

// `prefix` lets the legal pages point the same anchors back at the landing page.
export default function Navbar({ prefix = '' }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(255,255,255,0.86)', backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #e8edf2',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
      }}>
        <Link href={prefix || '#top'} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{
            width: 32, height: 32, borderRadius: 10,
            background: 'linear-gradient(135deg,#0f766e 0%,#134e4a 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontWeight: 800, fontSize: 15, letterSpacing: '-0.5px',
          }}>G</span>
          <span style={{ fontSize: 17, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.3px', whiteSpace: 'nowrap' }}>
            GI Buddy
          </span>
        </Link>

        <nav aria-label="Sections" className="lp-desktop-nav" style={{ gap: 26, alignItems: 'center' }}>
          {LINKS.map(l => (
            <Link key={l.href} href={`${prefix}${l.href}`} className="lp-nav-link"
              style={{ fontSize: 13, fontWeight: 600, color: '#475569' }}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <button
            type="button" onClick={() => setMobileOpen(o => !o)}
            aria-label="Open menu" aria-expanded={mobileOpen}
            className="lp-burger"
            style={{
              flexDirection: 'column', gap: 4, padding: 9, background: '#fff',
              border: '1.5px solid #e8edf2', borderRadius: 9, cursor: 'pointer',
            }}
          >
            <span style={{ display: 'block', width: 16, height: 1.5, background: '#475569' }} />
            <span style={{ display: 'block', width: 16, height: 1.5, background: '#475569' }} />
            <span style={{ display: 'block', width: 16, height: 1.5, background: '#475569' }} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav aria-label="Mobile" style={{
          borderTop: '1px solid #e8edf2', background: '#fff',
          padding: '12px 24px 20px', display: 'grid', gap: 2,
        }}>
          {LINKS.map(l => (
            <Link key={l.href} href={`${prefix}${l.href}`} onClick={() => setMobileOpen(false)}
              className="lp-nav-link" style={{ fontSize: 14, fontWeight: 600, color: '#475569', padding: '10px 0' }}>
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
