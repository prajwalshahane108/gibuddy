import {
  SparkleIcon, ActivityIcon, UtensilsIcon, CartIcon, LeafIcon,
  ShieldIcon, BellIcon, ChatIcon, LockIcon, CheckIcon,
} from '@/components/landing/icons';

const CARDS = [
  {
    icon: SparkleIcon, tint: '#f0fdfa', color: '#0d9488', title: 'AI food check',
    body: 'Ask in four ways and get a clear verdict with the reasoning behind it, plus safer alternatives.',
  },
  {
    icon: ActivityIcon, tint: '#e0f2fe', color: '#0ea5e9', title: 'Diet Profile',
    body: 'Conditions, diet type, dietary preference and allergies in one place. Edit it any time.',
  },
  {
    icon: UtensilsIcon, tint: '#ede9fe', color: '#7c3aed', title: 'AI meal plans',
    body: "Gut-friendly plans built from your profile. Regenerate whenever a plan doesn't fit your week.",
  },
  {
    icon: CartIcon, tint: '#dcfce7', color: '#16a34a', title: 'Grocery lists',
    body: 'Generated straight from your meal plan. Check items off, edit them, delete what you already have.',
  },
  {
    icon: LeafIcon, tint: '#f0fdfa', color: '#0d9488', title: 'Recipes',
    body: 'Generate a recipe tuned to your condition and preferences, not a generic search result.',
  },
  {
    icon: ShieldIcon, tint: '#e0f2fe', color: '#0ea5e9', title: 'Cuisine Explorer',
    body: 'Browse a cuisine and see the condition-safe dishes inside it, including gluten-free variants.',
  },
  {
    icon: BellIcon, tint: '#ede9fe', color: '#7c3aed', title: 'Daily suggestions',
    body: "A short today's feed: what to eat, what to prepare, what to keep an eye on.",
  },
  {
    icon: ChatIcon, tint: '#dcfce7', color: '#16a34a', title: 'GI Buddy AI Assistant',
    body: 'Chat about diet, nutrition and GI conditions. Scoped to GI health, and it says so when a question is out of scope.',
  },
  {
    icon: LockIcon, tint: '#f0fdfa', color: '#0d9488', title: 'Colonoscopy Prep Planner',
    body: 'Procedure date and time, prep medication and prep type, with instructions, reminders and prep-cleared status.',
  },
];

export default function Features() {
  return (
    <section id="features" style={{ maxWidth: 1200, margin: '0 auto', padding: '88px 24px' }}>
      <h2 style={{ margin: 0, fontSize: 34, fontWeight: 800, letterSpacing: '-0.02em', color: '#0f172a' }}>
        Everything in GI Buddy
      </h2>
      <p style={{ margin: '12px 0 0', maxWidth: '60ch', fontSize: 16, lineHeight: 1.6, color: '#475569' }}>
        Nine tools that share one profile, so they never contradict each other.
      </p>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20, marginTop: 36,
      }}>
        {CARDS.map(({ icon: Icon, ...c }) => (
          <article key={c.title} className="lp-card" style={{
            background: '#fff', border: '1px solid #e8edf2', borderRadius: 14,
            boxShadow: '0 1px 4px rgba(0,0,0,0.04)', padding: 24,
          }}>
            <span style={{
              width: 38, height: 38, borderRadius: 12, background: c.tint,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Icon size={18} stroke={c.color} />
            </span>
            <h3 style={{ margin: '16px 0 0', fontSize: 16, fontWeight: 800, letterSpacing: '-0.02em', color: '#0f172a' }}>
              {c.title}
            </h3>
            <p style={{ margin: '8px 0 0', fontSize: 14, lineHeight: 1.6, color: '#475569' }}>{c.body}</p>
          </article>
        ))}
      </div>

      <div style={{
        display: 'flex', alignItems: 'center', gap: 10, marginTop: 20, padding: '14px 18px',
        background: '#f8fafc', border: '1px solid #f1f5f9', borderRadius: 12,
      }}>
        <CheckIcon size={15} stroke="#94a3b8" />
        <span style={{ fontSize: 13, color: '#64748b' }}>
          Every check is saved to your recommendation history and stays searchable.
        </span>
      </div>
    </section>
  );
}
