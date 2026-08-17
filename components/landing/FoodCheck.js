'use client';

import { useState } from 'react';
import { SparkleIcon, CameraIcon, MicIcon, ScanIcon, CheckIcon } from '@/components/landing/icons';

const TABS = {
  type: {
    icon: SparkleIcon, tab: 'Type it',
    copy: 'Write the dish the way you would say it — "grilled chicken sandwich" — and get a verdict with the reasoning behind it.',
    label: 'Typed question', input: 'grilled chicken sandwich',
    food: 'Grilled chicken sandwich', verdict: 'Check the bun',
    pillBg: '#fef9c3', pillFg: '#ca8a04',
    reason: 'The grilled chicken itself is fine. The wheat bun is the part worth swapping if gluten is a trigger for you.',
  },
  photo: {
    icon: CameraIcon, tab: 'Snap it',
    copy: 'Photograph the plate or the nutrition label. GI Buddy reads what it can identify and works from your profile.',
    label: 'Photo of a label', input: 'label-photo.jpg · 2 items flagged',
    food: 'Instant noodle cup', verdict: 'Not recommended',
    pillBg: '#fee2e2', pillFg: '#dc2626',
    reason: 'Onion and garlic powder are high in FODMAPs and appear early in the ingredient list.',
  },
  voice: {
    icon: MicIcon, tab: 'Say it',
    copy: 'Say it out loud when your hands are busy — cooking, shopping, or sitting in a restaurant.',
    label: 'Voice note, 4s', input: '"Is Greek yoghurt okay for me today?"',
    food: 'Greek yoghurt, plain', verdict: 'Small portion',
    pillBg: '#fef9c3', pillFg: '#ca8a04',
    reason: 'Lactose is limited but present. A lactose-free version keeps the protein without the risk.',
  },
  scan: {
    icon: ScanIcon, tab: 'Scan it',
    copy: 'Scan the barcode in the shop and know before it goes in the trolley.',
    label: 'Barcode scan', input: '0 000000 000000',
    food: 'Gluten-free oat crackers', verdict: 'Safe for IBS',
    pillBg: '#dcfce7', pillFg: '#16a34a',
    reason: 'No wheat, no high-FODMAP sweeteners, and nothing on your allergy list.',
  },
};

const CAPS = {
  fontSize: 11, fontWeight: 600, color: '#94a3b8',
  letterSpacing: '0.04em', textTransform: 'uppercase',
};

export default function FoodCheck() {
  const [tab, setTab] = useState('type');
  const t = TABS[tab];

  return (
    <section aria-labelledby="ask-h" style={{
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
            Food check
          </span>
          <h2 id="ask-h" style={{
            margin: '16px 0 0', fontSize: 32, fontWeight: 800, letterSpacing: '-0.02em', color: '#0f172a',
          }}>
            Four ways to ask
          </h2>
          <p style={{ margin: '12px 0 0', maxWidth: '52ch', fontSize: 16, lineHeight: 1.6, color: '#475569' }}>
            However you meet a food — a menu, a plate, a packet — there is a way to check it in a few seconds.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 28 }} role="tablist" aria-label="Input modes">
            {Object.entries(TABS).map(([key, { icon: Icon, tab: label }]) => {
              const active = key === tab;
              return (
                <button
                  key={key} type="button" role="tab" aria-selected={active}
                  onClick={() => setTab(key)}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 14px',
                    borderRadius: 10, border: '1.5px solid #e8edf2',
                    background: active ? '#f0fdfa' : '#ffffff',
                    color: active ? '#0f766e' : '#64748b',
                    fontFamily: 'inherit', fontSize: 13, fontWeight: 600, cursor: 'pointer',
                  }}
                >
                  <Icon size={15} />
                  {label}
                </button>
              );
            })}
          </div>

          <p style={{ margin: '20px 0 0', fontSize: 14, lineHeight: 1.6, color: '#475569', minHeight: 44 }}>
            {t.copy}
          </p>
        </div>

        <div style={{ background: '#f8fafc', border: '1px solid #e8edf2', borderRadius: 14, padding: 24 }}>
          <div style={{
            background: '#fff', border: '1px solid #e8edf2', borderRadius: 14,
            boxShadow: '0 1px 4px rgba(0,0,0,0.04)', padding: 20,
          }}>
            <div style={CAPS}>{t.label}</div>
            <div style={{
              marginTop: 12, padding: '12px 14px', background: '#f8fafc',
              border: '1.5px solid #e8edf2', borderRadius: 9, fontSize: 13, color: '#475569',
            }}>
              {t.input}
            </div>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
              marginTop: 18, paddingTop: 16, borderTop: '1px solid #f1f5f9',
            }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: '#0f172a' }}>{t.food}</span>
              <span style={{
                background: t.pillBg, color: t.pillFg, borderRadius: 20, padding: '5px 11px',
                fontSize: 11, fontWeight: 600, whiteSpace: 'nowrap',
              }}>
                {t.verdict}
              </span>
            </div>
            <p style={{ margin: '10px 0 0', fontSize: 13, lineHeight: 1.6, color: '#475569' }}>{t.reason}</p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 14 }}>
            <CheckIcon size={14} stroke="#94a3b8" />
            <span style={{ fontSize: 12, color: '#64748b' }}>Saved to your recommendation history</span>
          </div>
        </div>
      </div>
    </section>
  );
}
