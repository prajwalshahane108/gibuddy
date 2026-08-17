'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import { WarningIcon } from '@/components/landing/icons';

// Shared shell for /privacy-policy and /terms-and-conditions: gradient page
// header, sticky table of contents rail, and the prose card beside it.
export default function LegalLayout({ title, updated, sections, active, children }) {
  const [tocOpen, setTocOpen] = useState(true);

  // The TOC starts collapsed on narrow screens, where it sits above the prose.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const sync = () => setTocOpen(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  const [current, setCurrent] = useState(1);

  return (
    <div style={{ minHeight: '100vh', background: '#f6f8fa' }}>
      <Navbar prefix="/" />

      <main>
        <section style={{
          position: 'relative', overflow: 'hidden',
          background: 'linear-gradient(135deg,#0f766e 0%,#134e4a 100%)',
        }}>
          <div aria-hidden="true" style={{
            position: 'absolute', top: -160, right: -100, width: 420, height: 420, borderRadius: '50%',
            background: 'radial-gradient(circle,#14b8a6,transparent)', opacity: 0.1,
          }} />
          <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '56px 24px' }}>
            <h1 style={{ margin: 0, fontSize: 36, fontWeight: 800, letterSpacing: '-0.02em', color: '#fff' }}>
              {title}
            </h1>
            <p style={{
              margin: '10px 0 0', fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: '#ccfbf1',
            }}>
              Last updated: {updated}
            </p>
          </div>
        </section>

        <div className="lp-legal-grid" style={{
          maxWidth: 1200, margin: '0 auto', padding: '48px 24px 88px',
          display: 'grid', gap: 40, alignItems: 'start',
        }}>
          <aside className="lp-toc" style={{ top: 88 }}>
            <details
              open={tocOpen}
              onToggle={e => setTocOpen(e.currentTarget.open)}
              style={{
                background: '#fff', border: '1px solid #e8edf2', borderRadius: 14,
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)', padding: '18px 20px',
              }}
            >
              <summary className="lp-summary" style={{
                fontSize: 12, fontWeight: 700, color: '#0f172a',
                letterSpacing: '0.04em', textTransform: 'uppercase', listStyle: 'none',
              }}>
                On this page
              </summary>
              <nav aria-label="Table of contents" style={{ display: 'grid', gap: 9, marginTop: 14 }}>
                {sections.map((label, i) => {
                  const n = i + 1;
                  return (
                    <a
                      key={n} href={`#s${n}`} className="lp-toc-link"
                      onClick={() => setCurrent(n)}
                      style={{
                        fontSize: 13, lineHeight: 1.4,
                        fontWeight: current === n ? 700 : 500,
                        color: current === n ? '#0d9488' : '#64748b',
                      }}
                    >
                      {n}. {label}
                    </a>
                  );
                })}
              </nav>
            </details>
          </aside>

          <article style={{
            background: '#fff', border: '1px solid #e8edf2', borderRadius: 14,
            boxShadow: '0 1px 4px rgba(0,0,0,0.04)', padding: 40,
          }}>
            {/* TODO: this document is an unreviewed template — replace with the
                version cleared by legal counsel before launch. */}
            <div style={{
              display: 'flex', gap: 12, alignItems: 'flex-start', background: '#fef9c3',
              borderRadius: 12, padding: '14px 16px', marginBottom: 32,
            }}>
              <WarningIcon size={17} stroke="#ca8a04" style={{ flex: 'none', marginTop: 2 }} />
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: '#854d0e' }}>
                This document is a template. It must be reviewed by qualified legal counsel before launch.
                TODO: replace with the reviewed {active === 'terms' ? 'terms' : 'policy'}, the real company
                entity and contact details.
              </p>
            </div>

            <div style={{ maxWidth: '72ch' }}>{children}</div>
          </article>
        </div>
      </main>

      <Footer prefix="/" active={active} />
    </div>
  );
}
