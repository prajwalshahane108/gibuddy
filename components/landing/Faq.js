'use client';

import { useState } from 'react';
import { ChevronIcon } from '@/components/landing/icons';

const ITEMS = [
  {
    q: 'Which conditions are supported?',
    a: "IBS, Crohn's disease and ulcerative colitis, plus colonoscopy preparation. You can select more than one in your diet profile, along with your diet type, preferences and allergies.",
  },
  {
    q: 'How does the photo and barcode check work?',
    a: 'Photograph the dish or its nutrition label, or scan the product barcode. GI Buddy reads what it can identify, compares it with your profile, and tells you what stands out and why.',
  },
  {
    q: 'Is my health data private?',
    a: 'Your data is encrypted in transit and at rest, handled under HIPAA-aligned practices and SOC 2 controls, and never sold. Content is sent to third-party AI providers to generate recommendations; the Privacy Policy names the processors involved.',
  },
  {
    q: 'Does it replace my doctor or dietitian?',
    a: 'No. GI Buddy offers general dietary guidance and never diagnoses. Treatment decisions, medication and clinical advice stay with your care team.',
  },
  {
    q: 'Can I use it while prepping for a colonoscopy?',
    a: "Yes. Add your procedure date and time, prep medication and prep type, and the planner lays out the steps with reminders. Your clinic's instructions always take priority over anything here.",
  },
  {
    q: "What's the difference between Free and Premium?",
    a: 'Free covers your diet profile, food checks and recommendation history. Premium adds meal plans, grocery lists, recipes, Cuisine Explorer, daily suggestions, the AI Assistant and the prep planner, at $9.99 monthly or $89.99 yearly.',
  },
  {
    q: 'Can I cancel any time?',
    a: 'Yes. Billing runs through Stripe with auto-renew on by default, and you can turn it off or cancel from your account at any point.',
  },
  {
    q: 'How accurate is the AI?',
    a: 'Guidance is AI-generated and can be wrong, particularly with unclear photos or incomplete labels. Treat it as a starting point and confirm anything important with your care team.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" style={{ maxWidth: 1200, margin: '0 auto', padding: '88px 24px' }}>
      <h2 style={{ margin: 0, fontSize: 34, fontWeight: 800, letterSpacing: '-0.02em', color: '#0f172a' }}>
        Questions
      </h2>

      {/* Spans the full 1200px container; only the answer text keeps a
          readable measure. */}
      <div style={{
        marginTop: 32, background: '#fff', border: '1px solid #e8edf2',
        borderRadius: 14, boxShadow: '0 1px 4px rgba(0,0,0,0.04)', padding: '8px 28px',
      }}>
        {ITEMS.map((item, i) => (
          <div key={item.q} style={i < ITEMS.length - 1 ? { borderBottom: '1px solid #f1f5f9' } : undefined}>
            <button
              type="button"
              onClick={() => setOpen(o => (o === i ? -1 : i))}
              aria-expanded={open === i}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                gap: 16, padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer',
                textAlign: 'left', fontFamily: 'inherit',
              }}
            >
              <span style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', letterSpacing: '-0.01em' }}>
                {item.q}
              </span>
              <ChevronIcon size={17} stroke="#94a3b8" style={{
                flex: 'none', transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
              }} />
            </button>
            {open === i && (
              <p style={{
                margin: 0, padding: '0 0 20px', maxWidth: '85ch',
                fontSize: 14, lineHeight: 1.7, color: '#475569',
              }}>
                {item.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
