import { ShieldIcon, WarningIcon, ActivityIcon, ChatIcon } from '@/components/landing/icons';

const POINTS = [
  {
    icon: ShieldIcon, lead: 'Scoped to GI health and nutrition.',
    rest: ' Off-topic questions are politely declined.',
  },
  {
    icon: WarningIcon, lead: 'It never diagnoses.',
    rest: ' No conditions, no symptoms interpreted as a verdict.',
  },
  {
    icon: ActivityIcon, lead: 'It never replaces your doctor.',
    rest: ' Clinical decisions stay with your care team.',
  },
];

const TRANSCRIPT = [
  { from: 'user', text: 'Can I have coffee the morning before my colonoscopy?' },
  {
    from: 'bot',
    text: "Black coffee is usually allowed during the clear-liquid phase, but milk and creamer are not. Your clinic's instructions take priority — check the sheet they gave you, or ask them directly.",
  },
  { from: 'user', text: "What's a gentle lunch during an IBS flare?" },
  {
    from: 'bot',
    text: 'A small portion of white rice with poached chicken and peeled courgette is low FODMAP and easy to tolerate. I can add it to your plan and update the grocery list.',
  },
];

export default function Assistant() {
  return (
    <section aria-labelledby="chat-h" style={{
      maxWidth: 1200, margin: '0 auto', padding: '88px 24px',
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 56, alignItems: 'center',
    }}>
      <div>
        <span style={{
          display: 'inline-block', background: '#ede9fe', color: '#6d28d9',
          borderRadius: 20, padding: '5px 11px', fontSize: 11, fontWeight: 600,
        }}>
          AI Assistant
        </span>
        <h2 id="chat-h" style={{
          margin: '16px 0 0', fontSize: 32, fontWeight: 800, letterSpacing: '-0.02em', color: '#0f172a',
        }}>
          Ask questions in plain language
        </h2>
        <p style={{ margin: '12px 0 0', maxWidth: '52ch', fontSize: 16, lineHeight: 1.6, color: '#475569' }}>
          The assistant covers diet, nutrition, IBS, Crohn&apos;s, ulcerative colitis, colonoscopy prep and
          healthy food choices — and is honest about where it stops.
        </p>

        <ul style={{ listStyle: 'none', margin: '26px 0 0', padding: 0, display: 'grid', gap: 14 }}>
          {POINTS.map(({ icon: Icon, lead, rest }) => (
            <li key={lead} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{
                width: 28, height: 28, borderRadius: 9, background: '#f0fdfa',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none',
              }}>
                <Icon size={14} stroke="#0d9488" />
              </span>
              <span style={{ fontSize: 14, lineHeight: 1.6, color: '#475569' }}>
                <strong style={{ color: '#0f172a', fontWeight: 700 }}>{lead}</strong>{rest}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div style={{
        background: '#fff', border: '1px solid #e8edf2', borderRadius: 14,
        boxShadow: '0 1px 4px rgba(0,0,0,0.04)', padding: 22,
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          paddingBottom: 16, borderBottom: '1px solid #f1f5f9',
        }}>
          <span style={{
            width: 32, height: 32, borderRadius: 10,
            background: 'linear-gradient(135deg,#0f766e 0%,#134e4a 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <ChatIcon size={15} stroke="#ccfbf1" />
          </span>
          <span style={{ fontSize: 14, fontWeight: 700, color: '#0f172a' }}>GI Buddy Assistant</span>
        </div>

        <div style={{ display: 'grid', gap: 12, marginTop: 16 }}>
          {TRANSCRIPT.map((m, i) => (
            <div key={i} style={m.from === 'user' ? {
              justifySelf: 'end', maxWidth: '82%', background: '#f0fdfa',
              border: '1px solid #ccfbf1', borderRadius: 14, padding: '12px 14px',
              fontSize: 13, lineHeight: 1.6, color: '#0f172a',
            } : {
              justifySelf: 'start', maxWidth: '88%', background: '#f8fafc',
              border: '1px solid #e8edf2', borderRadius: 14, padding: '12px 14px',
              fontSize: 13, lineHeight: 1.6, color: '#475569',
            }}>
              {m.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
