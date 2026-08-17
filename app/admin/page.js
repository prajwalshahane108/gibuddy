'use client';
import { useState, useEffect, useSyncExternalStore } from 'react';
import { useRouter } from 'next/navigation';
import {
  LayoutDashboard, Users, Leaf, CreditCard, Zap, ScanLine,
  Utensils, ShoppingCart, Activity, ClipboardCheck, AlertTriangle,
  Bell, Settings, LogOut, Search, ChevronRight, ChevronDown,
  TrendingUp, TrendingDown, Minus, X, ExternalLink, Check,
  Eye, MoreHorizontal, RefreshCw, Filter, Download, Plus,
  Circle, CheckCircle, XCircle, Clock, Mail, Phone,
  Star, ArrowUpRight, BarChart2, PieChart, Calendar,
  Toggle, Shield, Key, Database, Cpu, Globe
} from 'lucide-react';
import {
  users, aiEvents, scanEvents, mealPlans, groceryLists,
  colonoscopy, reviewQueue, failedRequests, notifications,
  activityFeed, kpis, chartData
} from '@/lib/data';
import { getStatusBadge, getDirectionBadge, getPlanBadge } from '@/lib/utils';

/* ─── tiny UI helpers ─── */

function Pill({ bg, text, children, size = 'sm' }) {
  return (
    <span style={{
      background: bg, color: text,
      padding: size === 'xs' ? '2px 7px' : '3px 9px',
      borderRadius: 20,
      fontSize: size === 'xs' ? 10 : 11,
      fontWeight: 600,
      whiteSpace: 'nowrap',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
    }}>
      {children}
    </span>
  );
}

function Avatar({ initials, size = 32, bg = '#f0fdfa', color = '#0f766e' }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: bg, color, display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      fontSize: size * 0.35, fontWeight: 700, flexShrink: 0,
    }}>
      {initials}
    </div>
  );
}

function Card({ children, style }) {
  return (
    <div style={{
      background: '#fff', borderRadius: 14,
      border: '1px solid #e8edf2',
      boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
      ...style
    }}>
      {children}
    </div>
  );
}

function StatusPill({ status }) {
  const s = getStatusBadge(status);
  return <Pill bg={s.bg} text={s.text}>{s.label}</Pill>;
}

function ActionBtn({ onClick, color = '#0d9488', children }) {
  return (
    <button onClick={onClick} style={{
      padding: '6px 14px', background: color,
      color: 'white', border: 'none', borderRadius: 8,
      fontSize: 12, fontWeight: 600, cursor: 'pointer',
      fontFamily: 'inherit',
    }}>
      {children}
    </button>
  );
}

function OutlineBtn({ onClick, children }) {
  return (
    <button onClick={onClick} style={{
      padding: '6px 14px', background: 'transparent',
      color: '#64748b', border: '1.5px solid #e8edf2',
      borderRadius: 8, fontSize: 12, fontWeight: 600,
      cursor: 'pointer', fontFamily: 'inherit',
    }}>
      {children}
    </button>
  );
}

function SearchInput({ value, onChange, placeholder = 'Search…' }) {
  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      <Search size={15} style={{ position: 'absolute', left: 11, color: '#94a3b8', pointerEvents: 'none' }} />
      <input
        value={value} onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          paddingLeft: 34, paddingRight: 12, paddingTop: 8, paddingBottom: 8,
          border: '1.5px solid #e8edf2', borderRadius: 9,
          fontSize: 13, color: '#0f172a', background: '#fff',
          outline: 'none', width: 220, fontFamily: 'inherit',
        }}
        onFocus={e => e.target.style.borderColor = '#0d9488'}
        onBlur={e => e.target.style.borderColor = '#e8edf2'}
      />
    </div>
  );
}

function SelectFilter({ value, onChange, options }) {
  return (
    <select
      value={value} onChange={e => onChange(e.target.value)}
      style={{
        padding: '7px 28px 7px 10px', border: '1.5px solid #e8edf2',
        borderRadius: 9, fontSize: 12, color: '#475569',
        background: '#fff', outline: 'none', cursor: 'pointer',
        fontFamily: 'inherit', appearance: 'none',
      }}
    >
      {options.map(o => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </select>
  );
}

function Th({ children, style }) {
  return (
    <th style={{
      padding: '10px 16px', textAlign: 'left',
      fontSize: 10, fontWeight: 700, color: '#64748b',
      textTransform: 'uppercase', letterSpacing: '0.06em',
      background: '#f8fafc', whiteSpace: 'nowrap', ...style
    }}>
      {children}
    </th>
  );
}

function Td({ children, style }) {
  return (
    <td style={{ padding: '13px 16px', borderTop: '1px solid #f1f5f9', ...style }}>
      {children}
    </td>
  );
}

function IconBtn({ onClick, title, children }) {
  return (
    <button onClick={onClick} title={title} style={{
      width: 30, height: 30, display: 'flex', alignItems: 'center',
      justifyContent: 'center', border: 'none', borderRadius: 7,
      background: 'transparent', cursor: 'pointer', color: '#64748b',
      transition: 'background 0.1s',
    }}
      onMouseEnter={e => e.currentTarget.style.background = '#f1f5f9'}
      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
    >
      {children}
    </button>
  );
}

/* ─── Sidebar ─── */

const NAV = [
  {
    group: 'OVERVIEW', items: [
      { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    ]
  },
  {
    group: 'USERS', items: [
      { id: 'users', label: 'User Management', icon: Users },
      { id: 'profiles', label: 'Diet Profiles', icon: Leaf },
      { id: 'subscriptions', label: 'Subscriptions', icon: CreditCard },
    ]
  },
  {
    group: 'ACTIVITY', items: [
      { id: 'ai', label: 'AI Recommendations', icon: Zap },
      { id: 'ocr', label: 'OCR / Scan Activity', icon: ScanLine },
      { id: 'meals', label: 'Meal Plans', icon: Utensils },
      { id: 'grocery', label: 'Grocery Lists', icon: ShoppingCart },
      { id: 'colon', label: 'Colonoscopy Prep', icon: Activity },
    ]
  },
  {
    group: 'DIETICIAN', items: [
      { id: 'review', label: 'Review Queue', icon: ClipboardCheck, badge: 3 },
    ]
  },
  {
    group: 'SYSTEM', items: [
      { id: 'failed', label: 'Failed Requests', icon: AlertTriangle, badge: 4 },
      { id: 'notifications', label: 'Notifications', icon: Bell },
      { id: 'settings', label: 'Settings', icon: Settings },
    ]
  },
];

function Sidebar({ currentPage, setCurrentPage, onLogout }) {
  return (
    <aside style={{
      width: 240, flexShrink: 0, background: '#fff',
      borderRight: '1px solid #e8edf2', display: 'flex', flexDirection: 'column',
      height: '100vh', overflowY: 'auto',
    }}>
      {/* Logo */}
      <div style={{ padding: '20px 20px 16px', borderBottom: '1px solid #f1f5f9' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'linear-gradient(135deg, #0d9488, #0f766e)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s2-6 6-6 6 6 6 6 2 6 6 6 6-6 6-6" /><path d="M2 12h4M18 12h4" />
            </svg>
          </div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.3px' }}>GI Buddy</div>
            <div style={{ fontSize: 10, fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Admin Console</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '12px 12px' }}>
        {NAV.map(group => (
          <div key={group.group} style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 9.5, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '0 8px', marginBottom: 4 }}>
              {group.group}
            </div>
            {group.items.map(item => {
              const Icon = item.icon;
              const active = currentPage === item.id;
              return (
                <button key={item.id} onClick={() => setCurrentPage(item.id)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', gap: 10,
                    padding: '8px 10px', borderRadius: 9, border: 'none', cursor: 'pointer',
                    background: active ? '#f0fdfa' : 'transparent',
                    color: active ? '#0d9488' : '#475569',
                    marginBottom: 1, textAlign: 'left', fontFamily: 'inherit',
                    transition: 'all 0.1s',
                  }}
                  onMouseEnter={e => { if (!active) { e.currentTarget.style.background = '#f8fafc'; e.currentTarget.style.color = '#334155'; } }}
                  onMouseLeave={e => { if (!active) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#475569'; } }}
                >
                  <Icon size={15} style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: 13, fontWeight: active ? 600 : 500, flex: 1 }}>{item.label}</span>
                  {item.badge && (
                    <span style={{
                      minWidth: 18, height: 18, borderRadius: 9,
                      background: item.id === 'review' ? '#0d9488' : '#dc2626',
                      color: 'white', fontSize: 10, fontWeight: 700,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 5px',
                    }}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </nav>

      {/* User info */}
      <div style={{ padding: '12px 16px', borderTop: '1px solid #f1f5f9' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <Avatar initials="AD" size={34} bg="#0d9488" color="white" />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Admin User</div>
            <div style={{ fontSize: 11, color: '#94a3b8' }}>Super Admin</div>
          </div>
        </div>
        <button onClick={onLogout} style={{
          width: '100%', display: 'flex', alignItems: 'center', gap: 8,
          padding: '7px 10px', borderRadius: 8, border: 'none', cursor: 'pointer',
          background: 'transparent', color: '#64748b', fontFamily: 'inherit',
          fontSize: 12, fontWeight: 500,
        }}
          onMouseEnter={e => { e.currentTarget.style.background = '#fee2e2'; e.currentTarget.style.color = '#dc2626'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#64748b'; }}
        >
          <LogOut size={14} /> Sign Out
        </button>
      </div>
    </aside>
  );
}

/* ─── Topbar ─── */

const PAGE_TITLES = {
  dashboard: 'Dashboard', users: 'User Management', profiles: 'Diet Profiles',
  subscriptions: 'Subscriptions', ai: 'AI Recommendations', ocr: 'OCR / Scan Activity',
  meals: 'Meal Plans', grocery: 'Grocery Lists', colon: 'Colonoscopy Prep',
  review: 'Review Queue', failed: 'Failed Requests', notifications: 'Notifications',
  settings: 'Settings',
};

function Topbar({ currentPage }) {
  const [search, setSearch] = useState('');
  return (
    <header style={{
      height: 60, background: '#fff', borderBottom: '1px solid #e8edf2',
      display: 'flex', alignItems: 'center', gap: 16,
      padding: '0 24px', flexShrink: 0,
    }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 17, fontWeight: 700, color: '#0f172a' }}>{PAGE_TITLES[currentPage]}</div>
      </div>
      <SearchInput value={search} onChange={setSearch} placeholder="Search users, plans…" />
      <button style={{
        width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: '1.5px solid #e8edf2', borderRadius: 9, background: '#fff', cursor: 'pointer',
      }}>
        <Bell size={16} color="#64748b" />
      </button>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8, padding: '6px 10px',
        border: '1.5px solid #e8edf2', borderRadius: 9, cursor: 'pointer',
      }}>
        <Avatar initials="AD" size={26} bg="#0d9488" color="white" />
        <span style={{ fontSize: 13, fontWeight: 600, color: '#0f172a' }}>Admin</span>
        <ChevronDown size={13} color="#94a3b8" />
      </div>
    </header>
  );
}

/* ─── Dashboard ─── */

function KPICard({ title, value, sub, icon: Icon, color, trend }) {
  return (
    <Card style={{ padding: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: '#64748b', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{title}</div>
          <div style={{ fontSize: 28, fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>{value}</div>
          {sub && <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 6 }}>{sub}</div>}
        </div>
        <div style={{
          width: 44, height: 44, borderRadius: 12,
          background: `${color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Icon size={20} color={color} />
        </div>
      </div>
      {trend && (
        <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: 5 }}>
          {trend > 0
            ? <TrendingUp size={13} color="#16a34a" />
            : <TrendingDown size={13} color="#dc2626" />}
          <span style={{ fontSize: 12, fontWeight: 600, color: trend > 0 ? '#16a34a' : '#dc2626' }}>
            {Math.abs(trend)}%
          </span>
          <span style={{ fontSize: 12, color: '#94a3b8' }}>vs last week</span>
        </div>
      )}
    </Card>
  );
}

function MiniBarChart({ data }) {
  const max = Math.max(...data.map(d => d.active));
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 80, width: '100%' }}>
      {data.map((d, i) => {
        const activeH = Math.max(6, (d.active / max) * 60);
        const newH    = Math.max(3, (d.new    / max) * 60);
        return (
          <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
            <div style={{ width: '100%', display: 'flex', alignItems: 'flex-end', gap: 2, height: 68 }}>
              <div style={{ flex: 2, height: activeH, background: '#0d9488', borderRadius: 3, opacity: 0.85 }} />
              <div style={{ flex: 1, height: newH,    background: '#ccfbf1', borderRadius: 2 }} />
            </div>
            <span style={{ fontSize: 10, color: '#94a3b8', whiteSpace: 'nowrap' }}>{d.day}</span>
          </div>
        );
      })}
    </div>
  );
}


function DonutChart({ data }) {
  const total = data.reduce((s, d) => s + d.count, 0);
  const r = 45, cx = 60, cy = 60, circ = 2 * Math.PI * r;

  // Pre-compute each arc's length and its rotation offset so the render pass stays pure.
  const segments = data.reduce((acc, d) => {
    const dash = (d.count / total) * circ;
    const offset = acc.length ? acc[acc.length - 1].offset + acc[acc.length - 1].dash : 0;
    return [...acc, { color: d.color, dash, offset }];
  }, []);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      <svg width={120} height={120} viewBox="0 0 120 120">
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#f1f5f9" strokeWidth={18} />
        {segments.map((s, i) => (
          <circle key={i} cx={cx} cy={cy} r={r}
            fill="none" stroke={s.color} strokeWidth={18}
            strokeDasharray={`${s.dash} ${circ - s.dash}`}
            strokeDashoffset={-s.offset}
            style={{ transform: 'rotate(-90deg)', transformOrigin: '60px 60px' }}
          />
        ))}
        <text x={cx} y={cy - 4} textAnchor="middle" style={{ fontSize: 20, fontWeight: 800, fill: '#0f172a', fontFamily: 'inherit' }}>{total}</text>
        <text x={cx} y={cy + 12} textAnchor="middle" style={{ fontSize: 9, fill: '#94a3b8', fontFamily: 'inherit' }}>TOTAL</text>
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {data.map((d, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: 2, background: d.color, flexShrink: 0 }} />
            <span style={{ fontSize: 12, color: '#475569' }}>{d.name}</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#0f172a', marginLeft: 'auto' }}>{d.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        <KPICard title="Total Users" value={kpis.totalUsers} sub="3 new this week" icon={Users} color="#0d9488" trend={21} />
        <KPICard title="Active Subscriptions" value={kpis.activeSubscriptions} sub="8 premium · 1 basic" icon={CreditCard} color="#7c3aed" trend={12} />
        <KPICard title="Pending Reviews" value={kpis.pendingReviews} sub="1 urgent" icon={ClipboardCheck} color="#f59e0b" trend={-5} />
        <KPICard title="Failed Requests" value={kpis.failedRequests} sub="Last 24 hours" icon={AlertTriangle} color="#dc2626" trend={-33} />
      </div>

      {/* Charts row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 16 }}>
        <Card style={{ padding: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#0f172a' }}>User Activity</div>
              <div style={{ fontSize: 12, color: '#94a3b8' }}>Active users and new sign-ups this week</div>
            </div>
            <div style={{ display: 'flex', gap: 12, fontSize: 11 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ width: 8, height: 8, borderRadius: 2, background: '#0d9488', display: 'inline-block' }} />
                <span style={{ color: '#64748b' }}>Active</span>
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ width: 8, height: 8, borderRadius: 2, background: '#ccfbf1', display: 'inline-block' }} />
                <span style={{ color: '#64748b' }}>New</span>
              </span>
            </div>
          </div>
          <MiniBarChart data={chartData.userActivity} />
        </Card>

        <Card style={{ padding: 20 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#0f172a', marginBottom: 4 }}>Plan Breakdown</div>
          <div style={{ fontSize: 12, color: '#94a3b8', marginBottom: 20 }}>Subscription distribution</div>
          <DonutChart data={chartData.planBreakdown} />
        </Card>
      </div>

      {/* Stats + Activity */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {/* Quick Stats */}
        <Card style={{ padding: 20 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#0f172a', marginBottom: 16 }}>Platform Stats Today</div>
          {[
            { label: 'AI Recommendations Generated', value: kpis.aiCallsToday, icon: Zap, color: '#0d9488' },
            { label: 'OCR Scans Processed', value: kpis.scansToday, icon: ScanLine, color: '#7c3aed' },
            { label: 'Total Revenue (MTD)', value: `$${kpis.totalRevenue.toLocaleString()}`, icon: CreditCard, color: '#16a34a' },
            { label: 'New Users This Week', value: kpis.newUsersThisWeek, icon: Users, color: '#0ea5e9' },
          ].map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '10px 0', borderTop: i > 0 ? '1px solid #f1f5f9' : 'none',
              }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: `${s.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={16} color={s.color} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, color: '#64748b' }}>{s.label}</div>
                </div>
                <div style={{ fontSize: 20, fontWeight: 800, color: '#0f172a' }}>{s.value}</div>
              </div>
            );
          })}
        </Card>

        {/* Activity Feed */}
        <Card style={{ padding: 20 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#0f172a', marginBottom: 16 }}>Recent Activity</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {activityFeed.map((item, i) => (
              <div key={item.id} style={{
                display: 'flex', gap: 12,
                padding: '10px 0',
                borderTop: i > 0 ? '1px solid #f1f5f9' : 'none',
              }}>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: '#f0fdfa', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Circle size={8} fill="#0d9488" stroke="none" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12, color: '#334155', lineHeight: 1.5 }}>{item.text}</div>
                  <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 3 }}>{item.time}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

/* ─── Users Page ─── */

function UsersPage({ onOpenDrawer }) {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [planFilter, setPlanFilter] = useState('all');

  const filtered = users.filter(u => {
    const matchSearch = !search || u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()) || u.cond.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'all' || u.status === statusFilter;
    const matchPlan = planFilter === 'all' || u.plan === planFilter;
    return matchSearch && matchStatus && matchPlan;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Card>
        {/* Filters */}
        <div style={{ padding: '16px 20px', borderBottom: '1px solid #f1f5f9', display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
          <SearchInput value={search} onChange={setSearch} placeholder="Search by name, email, condition…" />
          <SelectFilter value={statusFilter} onChange={setStatusFilter} options={[
            { value: 'all', label: 'All Statuses' },
            { value: 'active', label: 'Active' }, { value: 'trial', label: 'Trial' },
            { value: 'paused', label: 'Paused' }, { value: 'expired', label: 'Expired' },
          ]} />
          <SelectFilter value={planFilter} onChange={setPlanFilter} options={[
            { value: 'all', label: 'All Plans' },
            { value: 'premium', label: 'Premium' }, { value: 'basic', label: 'Basic' },
          ]} />
          <div style={{ marginLeft: 'auto', fontSize: 12, color: '#94a3b8' }}>
            {filtered.length} of {users.length} users
          </div>
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <Th>User</Th>
                <Th>Condition</Th>
                <Th>Plan</Th>
                <Th>Status</Th>
                <Th>Renewal</Th>
                <Th>Last Active</Th>
                <Th>Direction</Th>
                <Th></Th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(u => {
                const dir = getDirectionBadge(u.direction);
                const plan = getPlanBadge(u.plan);
                return (
                  <tr key={u.id}
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#f8fafc'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    onClick={() => onOpenDrawer('user', u)}
                  >
                    <Td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <Avatar initials={u.avatar} size={34} />
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 600, color: '#0f172a' }}>{u.name}</div>
                          <div style={{ fontSize: 11, color: '#94a3b8', fontFamily: 'monospace' }}>{u.email}</div>
                        </div>
                      </div>
                    </Td>
                    <Td>
                      <span style={{ fontSize: 12, fontWeight: 600, color: '#334155', background: '#f1f5f9', padding: '3px 9px', borderRadius: 6 }}>{u.cond}</span>
                    </Td>
                    <Td><Pill bg={plan.bg} text={plan.text}>{plan.label}</Pill></Td>
                    <Td><StatusPill status={u.status} /></Td>
                    <Td><span style={{ fontSize: 12, color: '#475569', fontFamily: 'monospace' }}>{u.renewal || '—'}</span></Td>
                    <Td><span style={{ fontSize: 12, color: '#64748b' }}>{u.lastActive}</span></Td>
                    <Td>
                      <span style={{ fontSize: 12, fontWeight: 600, color: dir.color, display: 'flex', alignItems: 'center', gap: 4 }}>
                        {dir.icon} {dir.label}
                      </span>
                    </Td>
                    <Td>
                      <IconBtn onClick={e => { e.stopPropagation(); onOpenDrawer('user', u); }} title="View details">
                        <Eye size={14} />
                      </IconBtn>
                    </Td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

/* ─── Diet Profiles ─── */

function ProfilesPage({ onOpenDrawer }) {
  const [search, setSearch] = useState('');
  const [condFilter, setCondFilter] = useState('all');

  const conditions = ['all', ...Array.from(new Set(users.map(u => u.cond)))];
  const filtered = users.filter(u =>
    (!search || u.name.toLowerCase().includes(search.toLowerCase())) &&
    (condFilter === 'all' || u.cond === condFilter)
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <SearchInput value={search} onChange={setSearch} placeholder="Search profiles…" />
        <SelectFilter value={condFilter} onChange={setCondFilter}
          options={conditions.map(c => ({ value: c, label: c === 'all' ? 'All Conditions' : c }))} />
        <span style={{ fontSize: 12, color: '#94a3b8' }}>{filtered.length} profiles</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 14 }}>
        {filtered.map(u => {
          const dir = getDirectionBadge(u.direction);
          const plan = getPlanBadge(u.plan);
          return (
            <Card key={u.id} style={{ padding: 18, cursor: 'pointer', transition: 'box-shadow 0.15s' }}
              onClick={() => onOpenDrawer('user', u)}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <Avatar initials={u.avatar} size={40} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#0f172a' }}>{u.name}</div>
                  <div style={{ fontSize: 11, color: '#94a3b8', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{u.email}</div>
                </div>
                <Pill bg={plan.bg} text={plan.text}>{plan.label}</Pill>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#334155', background: '#f1f5f9', padding: '3px 9px', borderRadius: 6 }}>{u.cond}</span>
                <span style={{ fontSize: 12, color: dir.color, fontWeight: 600 }}>{dir.icon} {dir.label}</span>
              </div>

              {u.allergies.length > 0 && (
                <div style={{ marginBottom: 8 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 5 }}>Allergies</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                    {u.allergies.map(a => <Pill key={a} bg="#fee2e2" text="#dc2626" size="xs">{a}</Pill>)}
                  </div>
                </div>
              )}

              <div>
                <div style={{ fontSize: 10, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 5 }}>Preferences</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                  {u.prefs.map(p => <Pill key={p} bg="#f0fdfa" text="#0f766e" size="xs">{p}</Pill>)}
                </div>
              </div>

              <div style={{ marginTop: 12, paddingTop: 10, borderTop: '1px solid #f1f5f9', fontSize: 11, color: '#94a3b8' }}>
                Last active {u.lastActive}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Subscriptions ─── */

function SubscriptionsPage() {
  const [statusFilter, setStatusFilter] = useState('all');
  const filtered = users.filter(u => statusFilter === 'all' || u.status === statusFilter);
  const revenue = { premium: 49.99, basic: 19.99 };

  return (
    <Card>
      <div style={{ padding: '16px 20px', borderBottom: '1px solid #f1f5f9', display: 'flex', gap: 10, alignItems: 'center' }}>
        <SelectFilter value={statusFilter} onChange={setStatusFilter} options={[
          { value: 'all', label: 'All Statuses' }, { value: 'active', label: 'Active' },
          { value: 'trial', label: 'Trial' }, { value: 'paused', label: 'Paused' }, { value: 'expired', label: 'Expired' },
        ]} />
        <div style={{ marginLeft: 'auto', fontSize: 12, color: '#94a3b8' }}>{filtered.length} subscriptions</div>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <Th>User</Th><Th>Plan</Th><Th>Status</Th><Th>Trial End</Th>
            <Th>Renewal</Th><Th>Revenue</Th><Th>Provider</Th><Th>Subscription ID</Th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(u => {
            const plan = getPlanBadge(u.plan);
            return (
              <tr key={u.id}
                onMouseEnter={e => e.currentTarget.style.background = '#f8fafc'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <Td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Avatar initials={u.avatar} size={30} />
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: '#0f172a' }}>{u.name}</div>
                      <div style={{ fontSize: 11, color: '#94a3b8' }}>{u.email}</div>
                    </div>
                  </div>
                </Td>
                <Td><Pill bg={plan.bg} text={plan.text}>{plan.label}</Pill></Td>
                <Td><StatusPill status={u.status} /></Td>
                <Td><span style={{ fontSize: 12, color: '#475569' }}>{u.trialEnd || '—'}</span></Td>
                <Td><span style={{ fontSize: 12, color: '#475569' }}>{u.renewal || '—'}</span></Td>
                <Td>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>
                    {u.status === 'expired' ? '—' : `$${revenue[u.plan]}/mo`}
                  </span>
                </Td>
                <Td><span style={{ fontSize: 12, color: '#64748b' }}>{u.provider}</span></Td>
                <Td>
                  <span className="font-mono" style={{ fontSize: 11, color: '#94a3b8' }}>{u.subId}</span>
                </Td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}

/* ─── AI Recommendations ─── */

function AIPage({ onOpenDrawer }) {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filtered = aiEvents.filter(e =>
    (!search || e.userName.toLowerCase().includes(search.toLowerCase()) || e.type.toLowerCase().includes(search.toLowerCase())) &&
    (statusFilter === 'all' || e.status === statusFilter)
  );

  return (
    <Card>
      <div style={{ padding: '16px 20px', borderBottom: '1px solid #f1f5f9', display: 'flex', gap: 10, alignItems: 'center' }}>
        <SearchInput value={search} onChange={setSearch} placeholder="Search events…" />
        <SelectFilter value={statusFilter} onChange={setStatusFilter} options={[
          { value: 'all', label: 'All Statuses' }, { value: 'completed', label: 'Completed' },
          { value: 'processing', label: 'Processing' }, { value: 'failed', label: 'Failed' },
        ]} />
        <div style={{ marginLeft: 'auto', fontSize: 12, color: '#94a3b8' }}>{filtered.length} events</div>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <Th>Event ID</Th><Th>User</Th><Th>Type</Th><Th>Model</Th>
            <Th>Tokens</Th><Th>Latency</Th><Th>Confidence</Th><Th>Status</Th><Th>Created</Th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(e => (
            <tr key={e.id}
              onMouseEnter={el => el.currentTarget.style.background = '#f8fafc'}
              onMouseLeave={el => el.currentTarget.style.background = 'transparent'}
            >
              <Td><span className="font-mono" style={{ fontSize: 11, color: '#94a3b8' }}>{e.id}</span></Td>
              <Td>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Avatar initials={e.userName.split(' ').map(n => n[0]).join('')} size={28} />
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#334155' }}>{e.userName}</span>
                </div>
              </Td>
              <Td>
                <span style={{ fontSize: 12, fontWeight: 600, color: '#0f172a', background: '#f0fdfa', padding: '3px 8px', borderRadius: 6 }}>{e.type}</span>
              </Td>
              <Td>
                <span style={{ fontSize: 12, color: '#475569', background: '#f1f5f9', padding: '3px 8px', borderRadius: 6 }}>{e.model}</span>
              </Td>
              <Td><span style={{ fontSize: 12, color: '#475569' }}>{e.tokens > 0 ? e.tokens.toLocaleString() : '—'}</span></Td>
              <Td><span style={{ fontSize: 12, color: '#475569' }}>{e.latency > 0 ? `${e.latency}s` : '—'}</span></Td>
              <Td>
                {e.confidence > 0 ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ flex: 1, height: 4, background: '#f1f5f9', borderRadius: 2, overflow: 'hidden', width: 60 }}>
                      <div style={{ height: '100%', width: `${e.confidence}%`, background: e.confidence >= 90 ? '#16a34a' : e.confidence >= 75 ? '#f59e0b' : '#dc2626', borderRadius: 2 }} />
                    </div>
                    <span style={{ fontSize: 11, color: '#64748b', fontWeight: 600 }}>{e.confidence}%</span>
                  </div>
                ) : <span style={{ color: '#94a3b8' }}>—</span>}
              </Td>
              <Td><StatusPill status={e.status} /></Td>
              <Td><span style={{ fontSize: 11, color: '#94a3b8' }}>{e.created}</span></Td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

/* ─── OCR / Scan ─── */

function OCRPage() {
  const [search, setSearch] = useState('');
  const filtered = scanEvents.filter(e =>
    !search || e.userName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Card>
      <div style={{ padding: '16px 20px', borderBottom: '1px solid #f1f5f9', display: 'flex', gap: 10, alignItems: 'center' }}>
        <SearchInput value={search} onChange={setSearch} placeholder="Search scans…" />
        <div style={{ marginLeft: 'auto', fontSize: 12, color: '#94a3b8' }}>{filtered.length} scans</div>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <Th>Scan ID</Th><Th>User</Th><Th>Scan Type</Th><Th>Result</Th>
            <Th>Confidence</Th><Th>Action</Th><Th>Items</Th><Th>Timestamp</Th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(e => {
            const actionColors = { Flagged: '#dc2626', Approved: '#16a34a', Review: '#f59e0b' };
            const actionBg = { Flagged: '#fee2e2', Approved: '#dcfce7', Review: '#fef9c3' };
            return (
              <tr key={e.id}
                onMouseEnter={el => el.currentTarget.style.background = '#f8fafc'}
                onMouseLeave={el => el.currentTarget.style.background = 'transparent'}
              >
                <Td><span className="font-mono" style={{ fontSize: 11, color: '#94a3b8' }}>{e.id}</span></Td>
                <Td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Avatar initials={e.userName.split(' ').map(n => n[0]).join('')} size={28} />
                    <span style={{ fontSize: 12, fontWeight: 600, color: '#334155' }}>{e.userName}</span>
                  </div>
                </Td>
                <Td><span style={{ fontSize: 12, color: '#475569', background: '#f1f5f9', padding: '3px 8px', borderRadius: 6 }}>{e.type}</span></Td>
                <Td><span style={{ fontSize: 12, color: '#334155' }}>{e.result}</span></Td>
                <Td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ width: 50, height: 4, background: '#f1f5f9', borderRadius: 2, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${e.confidence}%`, background: '#0d9488', borderRadius: 2 }} />
                    </div>
                    <span style={{ fontSize: 11, color: '#64748b' }}>{e.confidence}%</span>
                  </div>
                </Td>
                <Td>
                  <Pill bg={actionBg[e.action] || '#f1f5f9'} text={actionColors[e.action] || '#64748b'}>{e.action}</Pill>
                </Td>
                <Td><span style={{ fontSize: 12, color: '#475569' }}>{e.items}</span></Td>
                <Td><span style={{ fontSize: 11, color: '#94a3b8' }}>{e.timestamp}</span></Td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}

/* ─── Meal Plans ─── */

function MealsPage({ onOpenDrawer }) {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const filtered = mealPlans.filter(m =>
    (!search || m.userName.toLowerCase().includes(search.toLowerCase()) || m.name.toLowerCase().includes(search.toLowerCase())) &&
    (statusFilter === 'all' || m.status === statusFilter)
  );

  return (
    <Card>
      <div style={{ padding: '16px 20px', borderBottom: '1px solid #f1f5f9', display: 'flex', gap: 10, alignItems: 'center' }}>
        <SearchInput value={search} onChange={setSearch} placeholder="Search meal plans…" />
        <SelectFilter value={statusFilter} onChange={setStatusFilter} options={[
          { value: 'all', label: 'All Statuses' }, { value: 'active', label: 'Active' },
          { value: 'pending', label: 'Pending' }, { value: 'paused', label: 'Paused' },
        ]} />
        <div style={{ marginLeft: 'auto', fontSize: 12, color: '#94a3b8' }}>{filtered.length} plans</div>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <Th>Plan ID</Th><Th>User</Th><Th>Plan Name</Th><Th>Status</Th>
            <Th>Meals</Th><Th>Calories</Th><Th>Adherence</Th><Th>Dietician</Th><Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(m => (
            <tr key={m.id}
              style={{ cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.style.background = '#f8fafc'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              onClick={() => onOpenDrawer('meal', m)}
            >
              <Td><span className="font-mono" style={{ fontSize: 11, color: '#94a3b8' }}>{m.id}</span></Td>
              <Td>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Avatar initials={m.userName.split(' ').map(n => n[0]).join('')} size={28} />
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#334155' }}>{m.userName}</span>
                </div>
              </Td>
              <Td><span style={{ fontSize: 13, fontWeight: 600, color: '#0f172a' }}>{m.name}</span></Td>
              <Td><StatusPill status={m.status} /></Td>
              <Td><span style={{ fontSize: 12, color: '#475569' }}>{m.meals}</span></Td>
              <Td><span style={{ fontSize: 12, color: '#475569' }}>{m.calories} kcal</span></Td>
              <Td>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 60, height: 5, background: '#f1f5f9', borderRadius: 3, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${m.adherence}%`, background: m.adherence >= 80 ? '#16a34a' : m.adherence >= 60 ? '#f59e0b' : '#dc2626', borderRadius: 3 }} />
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 600, color: '#64748b' }}>{m.adherence}%</span>
                </div>
              </Td>
              <Td>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <span style={{ fontSize: 12, color: '#475569' }}>{m.dietician}</span>
                  {m.reviewed
                    ? <CheckCircle size={13} color="#16a34a" />
                    : <Clock size={13} color="#f59e0b" />}
                </div>
              </Td>
              <Td>
                <IconBtn onClick={e => { e.stopPropagation(); onOpenDrawer('meal', m); }} title="View details">
                  <Eye size={14} />
                </IconBtn>
              </Td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

/* ─── Grocery Lists ─── */

function GroceryPage({ onOpenDrawer }) {
  const [search, setSearch] = useState('');
  const filtered = groceryLists.filter(g =>
    !search || g.userName.toLowerCase().includes(search.toLowerCase()) || g.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', gap: 10 }}>
        <SearchInput value={search} onChange={setSearch} placeholder="Search grocery lists…" />
        <span style={{ fontSize: 12, color: '#94a3b8', alignSelf: 'center' }}>{filtered.length} lists</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 14 }}>
        {filtered.map(g => (
          <Card key={g.id} style={{ padding: 18, cursor: 'pointer', transition: 'box-shadow 0.15s' }}
            onClick={() => onOpenDrawer('grocery', g)}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)'}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#0f172a', marginBottom: 2 }}>{g.name}</div>
                <div style={{ fontSize: 11, color: '#94a3b8' }}>{g.userName}</div>
              </div>
              <StatusPill status={g.status} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
              {[
                { label: 'Items', value: g.items },
                { label: 'Est. Cost', value: `$${g.cost.toFixed(2)}` },
                { label: 'Store', value: g.store },
                { label: 'Generated', value: g.generated },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#334155' }}>{s.value}</div>
                </div>
              ))}
            </div>
            <div style={{ paddingTop: 10, borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="font-mono" style={{ fontSize: 10, color: '#94a3b8' }}>{g.id}</span>
              <button onClick={e => { e.stopPropagation(); onOpenDrawer('grocery', g); }}
                style={{ fontSize: 12, fontWeight: 600, color: '#0d9488', background: 'none', border: 'none', cursor: 'pointer' }}>
                View List →
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ─── Colonoscopy Prep ─── */

function ColonPage({ onOpenDrawer }) {
  return (
    <Card>
      <div style={{ padding: '16px 20px', borderBottom: '1px solid #f1f5f9' }}>
        <span style={{ fontSize: 12, color: '#94a3b8' }}>{colonoscopy.length} procedures tracked</span>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <Th>Patient</Th><Th>Procedure Date</Th><Th>Status</Th>
            <Th>Prep Phase</Th><Th>Clear Diet</Th><Th>Solution</Th><Th>Cleared</Th>
            <Th>GI Physician</Th><Th>Facility</Th><Th></Th>
          </tr>
        </thead>
        <tbody>
          {colonoscopy.map(c => (
            <tr key={c.id}
              style={{ cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.style.background = '#f8fafc'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              onClick={() => onOpenDrawer('colon', c)}
            >
              <Td>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Avatar initials={c.userName.split(' ').map(n => n[0]).join('')} size={30} />
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#0f172a' }}>{c.userName}</span>
                </div>
              </Td>
              <Td><span style={{ fontSize: 12, color: '#475569' }}>{c.schedDate}</span></Td>
              <Td><StatusPill status={c.status} /></Td>
              <Td>
                <Pill
                  bg={c.prepPhase === 'active' ? '#fef9c3' : c.prepPhase === 'done' ? '#dcfce7' : '#f1f5f9'}
                  text={c.prepPhase === 'active' ? '#ca8a04' : c.prepPhase === 'done' ? '#16a34a' : '#64748b'}
                >
                  {c.prepPhase}
                </Pill>
              </Td>
              {[c.clearDiet, c.solutionTaken, c.cleared].map((v, i) => (
                <Td key={i}>
                  {v ? <CheckCircle size={16} color="#16a34a" /> : <Circle size={16} color="#e2e8f0" />}
                </Td>
              ))}
              <Td><span style={{ fontSize: 12, color: '#475569' }}>{c.gi}</span></Td>
              <Td><span style={{ fontSize: 12, color: '#475569' }}>{c.facility}</span></Td>
              <Td>
                <IconBtn onClick={e => { e.stopPropagation(); onOpenDrawer('colon', c); }} title="View timeline">
                  <Eye size={14} />
                </IconBtn>
              </Td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

/* ─── Review Queue ─── */

function ReviewPage({ onOpenDrawer }) {
  const priorityOrder = { urgent: 0, high: 1, medium: 2, low: 3 };
  const sorted = [...reviewQueue].sort((a, b) => (priorityOrder[a.priority] ?? 4) - (priorityOrder[b.priority] ?? 4));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {sorted.map(r => {
        const pr = getStatusBadge(r.priority);
        const st = getStatusBadge(r.status);
        return (
          <Card key={r.id} style={{ padding: 20, cursor: 'pointer', transition: 'box-shadow 0.15s', borderLeft: `4px solid ${r.priority === 'urgent' ? '#dc2626' : r.priority === 'high' ? '#ea580c' : r.priority === 'medium' ? '#f59e0b' : '#0d9488'}` }}
            onClick={() => onOpenDrawer('review', r)}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)'}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Avatar initials={r.userName.split(' ').map(n => n[0]).join('')} size={36} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#0f172a' }}>{r.userName}</div>
                  <div style={{ fontSize: 12, color: '#64748b' }}>{r.type}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <Pill bg={pr.bg} text={pr.text}>{pr.label}</Pill>
                <Pill bg={st.bg} text={st.text}>{st.label}</Pill>
              </div>
            </div>
            <div style={{ fontSize: 13, color: '#475569', lineHeight: 1.5, marginBottom: 12, background: '#f8fafc', padding: '8px 12px', borderRadius: 8 }}>
              {r.notes}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 11, color: '#94a3b8' }}>Submitted: {r.submitted}</span>
              {r.status === 'pending' && (
                <div style={{ display: 'flex', gap: 8 }} onClick={e => e.stopPropagation()}>
                  <ActionBtn color="#16a34a"><CheckCircle size={12} style={{ display: 'inline', marginRight: 5 }} />Approve</ActionBtn>
                  <ActionBtn color="#dc2626"><XCircle size={12} style={{ display: 'inline', marginRight: 5 }} />Reject</ActionBtn>
                  <OutlineBtn>Assign</OutlineBtn>
                </div>
              )}
              {r.status === 'in-review' && (
                <span style={{ fontSize: 12, color: '#0ea5e9', fontWeight: 600 }}>Assigned to {r.dietician}</span>
              )}
              {r.status === 'approved' && (
                <span style={{ fontSize: 12, color: '#16a34a', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                  <CheckCircle size={13} /> Approved by {r.dietician}
                </span>
              )}
            </div>
          </Card>
        );
      })}
    </div>
  );
}

/* ─── Failed Requests ─── */

function FailedPage({ onOpenDrawer }) {
  const [search, setSearch] = useState('');
  const [catFilter, setCatFilter] = useState('all');
  const categories = ['all', ...Array.from(new Set(failedRequests.map(f => f.category)))];

  const filtered = failedRequests.filter(f =>
    (!search || f.endpoint.includes(search) || f.userName.toLowerCase().includes(search.toLowerCase())) &&
    (catFilter === 'all' || f.category === catFilter)
  );

  return (
    <Card>
      <div style={{ padding: '16px 20px', borderBottom: '1px solid #f1f5f9', display: 'flex', gap: 10, alignItems: 'center' }}>
        <SearchInput value={search} onChange={setSearch} placeholder="Search endpoint, user…" />
        <SelectFilter value={catFilter} onChange={setCatFilter}
          options={categories.map(c => ({ value: c, label: c === 'all' ? 'All Categories' : c }))} />
        <div style={{ marginLeft: 'auto', fontSize: 12, color: '#94a3b8' }}>{filtered.filter(f => !f.resolved).length} unresolved</div>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <Th>ID</Th><Th>Endpoint</Th><Th>Method</Th><Th>Status</Th>
            <Th>Error</Th><Th>User</Th><Th>Retries</Th><Th>Timestamp</Th><Th>Resolved</Th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(f => (
            <tr key={f.id}
              style={{ cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.style.background = '#f8fafc'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              onClick={() => onOpenDrawer('failed', f)}
            >
              <Td><span className="font-mono" style={{ fontSize: 11, color: '#94a3b8' }}>{f.id}</span></Td>
              <Td>
                <span className="font-mono" style={{ fontSize: 11, color: '#334155', background: '#f1f5f9', padding: '2px 7px', borderRadius: 5 }}>
                  {f.endpoint}
                </span>
              </Td>
              <Td>
                <span style={{ fontSize: 11, fontWeight: 700, color: f.method === 'GET' ? '#0ea5e9' : '#7c3aed', background: f.method === 'GET' ? '#e0f2fe' : '#ede9fe', padding: '2px 7px', borderRadius: 5 }}>
                  {f.method}
                </span>
              </Td>
              <Td>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#dc2626', background: '#fee2e2', padding: '2px 8px', borderRadius: 5 }}>
                  {f.status}
                </span>
              </Td>
              <Td>
                <span style={{ fontSize: 11, color: '#475569', maxWidth: 200, display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {f.error}
                </span>
              </Td>
              <Td><span style={{ fontSize: 12, color: '#475569' }}>{f.userName}</span></Td>
              <Td>
                <span style={{ fontSize: 12, fontWeight: 600, color: f.retries >= 3 ? '#dc2626' : '#f59e0b' }}>{f.retries}×</span>
              </Td>
              <Td><span style={{ fontSize: 11, color: '#94a3b8' }}>{f.timestamp}</span></Td>
              <Td>
                {f.resolved
                  ? <CheckCircle size={15} color="#16a34a" />
                  : <XCircle size={15} color="#dc2626" />}
              </Td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

/* ─── Notifications ─── */

function NotificationsPage() {
  const typeColors = {
    system: { bg: '#f1f5f9', text: '#64748b' },
    alert: { bg: '#fee2e2', text: '#dc2626' },
    user: { bg: '#f0fdfa', text: '#0d9488' },
    dietician: { bg: '#ede9fe', text: '#7c3aed' },
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 12, color: '#94a3b8' }}>{notifications.length} notifications</span>
        <ActionBtn>+ New Notification</ActionBtn>
      </div>
      {notifications.map(n => {
        const tc = typeColors[n.type] || typeColors.system;
        return (
          <Card key={n.id} style={{ padding: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1 }}>
                <Pill bg={tc.bg} text={tc.text}>{n.type}</Pill>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#0f172a' }}>{n.title}</div>
              </div>
              <StatusPill status={n.status} />
            </div>
            <div style={{ fontSize: 13, color: '#475569', lineHeight: 1.6, marginBottom: 12 }}>{n.body}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 11, color: '#94a3b8', borderTop: '1px solid #f1f5f9', paddingTop: 10 }}>
              <div style={{ display: 'flex', gap: 16 }}>
                <span>Recipients: <strong style={{ color: '#475569' }}>{n.recipients}</strong></span>
                <span>Channel: <strong style={{ color: '#475569' }}>{n.channel}</strong></span>
              </div>
              <span>{n.sent}</span>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

/* ─── Settings ─── */

function ToggleSwitch({ checked, onChange }) {
  return (
    <div onClick={() => onChange(!checked)}
      style={{
        width: 40, height: 22, borderRadius: 11, cursor: 'pointer',
        background: checked ? '#0d9488' : '#e2e8f0', position: 'relative', transition: 'background 0.2s',
      }}>
      <div style={{
        width: 16, height: 16, borderRadius: '50%', background: '#fff',
        position: 'absolute', top: 3, left: checked ? 21 : 3,
        transition: 'left 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
      }} />
    </div>
  );
}

function SettingsPage() {
  const [features, setFeatures] = useState({
    aiRecommendations: true, ocrScanning: true, dieticianReview: true,
    colonoscopyPrep: true, pushNotifications: true, emailNotifications: true,
    maintenanceMode: false, betaFeatures: false,
  });

  const toggle = key => setFeatures(f => ({ ...f, [key]: !f[key] }));

  const featureList = [
    { key: 'aiRecommendations', label: 'AI Recommendations', desc: 'Enable AI-powered meal and supplement suggestions' },
    { key: 'ocrScanning', label: 'OCR / Food Scanning', desc: 'Allow users to scan food labels and menus' },
    { key: 'dieticianReview', label: 'Dietician Review Queue', desc: 'Route AI suggestions through dietician approval' },
    { key: 'colonoscopyPrep', label: 'Colonoscopy Prep', desc: 'Enable colonoscopy preparation tracking module' },
    { key: 'pushNotifications', label: 'Push Notifications', desc: 'Send real-time push notifications to users' },
    { key: 'emailNotifications', label: 'Email Notifications', desc: 'Send automated email alerts and reminders' },
    { key: 'maintenanceMode', label: 'Maintenance Mode', desc: 'Put platform in maintenance mode (all users see maintenance page)' },
    { key: 'betaFeatures', label: 'Beta Features', desc: 'Enable experimental features for testing' },
  ];

  const apiLimits = [
    { label: 'AI Requests / User / Day', value: 50 },
    { label: 'OCR Scans / User / Day', value: 20 },
    { label: 'Max Meal Plans / User', value: 10 },
    { label: 'Session Timeout (mins)', value: 60 },
  ];

  const roles = [
    { role: 'Super Admin', perms: ['Full Access'], color: '#dc2626' },
    { role: 'Admin', perms: ['User Mgmt', 'Reports', 'Notifications'], color: '#7c3aed' },
    { role: 'Dietician', perms: ['Review Queue', 'Meal Plans', 'Read Users'], color: '#0d9488' },
    { role: 'Support', perms: ['Read Users', 'Read Subscriptions'], color: '#0ea5e9' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* Feature Flags */}
      <Card style={{ padding: 0 }}>
        <div style={{ padding: '16px 20px', borderBottom: '1px solid #f1f5f9' }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#0f172a' }}>Feature Flags</div>
          <div style={{ fontSize: 12, color: '#94a3b8' }}>Enable or disable platform features in real time</div>
        </div>
        {featureList.map((f, i) => (
          <div key={f.key} style={{
            padding: '14px 20px',
            borderTop: i > 0 ? '1px solid #f1f5f9' : 'none',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#0f172a', marginBottom: 2 }}>{f.label}</div>
              <div style={{ fontSize: 12, color: '#94a3b8' }}>{f.desc}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 12, color: features[f.key] ? '#0d9488' : '#94a3b8', fontWeight: 600 }}>
                {features[f.key] ? 'Enabled' : 'Disabled'}
              </span>
              <ToggleSwitch checked={features[f.key]} onChange={() => toggle(f.key)} />
            </div>
          </div>
        ))}
      </Card>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        {/* API Limits */}
        <Card style={{ padding: 0 }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid #f1f5f9' }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#0f172a' }}>API Rate Limits</div>
            <div style={{ fontSize: 12, color: '#94a3b8' }}>Per-user throttle configuration</div>
          </div>
          {apiLimits.map((l, i) => (
            <div key={i} style={{ padding: '12px 20px', borderTop: i > 0 ? '1px solid #f1f5f9' : 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 13, color: '#334155' }}>{l.label}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <input type="number" defaultValue={l.value}
                  style={{ width: 60, padding: '4px 8px', border: '1.5px solid #e8edf2', borderRadius: 7, fontSize: 13, fontWeight: 700, textAlign: 'center', color: '#0f172a', outline: 'none', fontFamily: 'inherit' }}
                  onFocus={e => e.target.style.borderColor = '#0d9488'}
                  onBlur={e => e.target.style.borderColor = '#e8edf2'}
                />
              </div>
            </div>
          ))}
        </Card>

        {/* Roles */}
        <Card style={{ padding: 0 }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid #f1f5f9' }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#0f172a' }}>Role Permissions</div>
            <div style={{ fontSize: 12, color: '#94a3b8' }}>Access levels by admin role</div>
          </div>
          {roles.map((r, i) => (
            <div key={i} style={{ padding: '12px 20px', borderTop: i > 0 ? '1px solid #f1f5f9' : 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: r.color, flexShrink: 0 }} />
                <span style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>{r.role}</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, paddingLeft: 14 }}>
                {r.perms.map(p => (
                  <span key={p} style={{ fontSize: 10, fontWeight: 600, color: r.color, background: `${r.color}12`, padding: '2px 8px', borderRadius: 20 }}>
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}

/* ─── Drawers ─── */

function DrawerOverlay({ children, onClose }) {
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 50,
      background: 'rgba(15,23,42,0.4)', display: 'flex',
      justifyContent: 'flex-end',
    }} onClick={onClose}>
      <div style={{
        width: 480, height: '100%', background: '#fff',
        boxShadow: '-8px 0 32px rgba(0,0,0,0.12)',
        overflowY: 'auto',
      }} className="animate-slide-in" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

function DrawerHeader({ title, sub, onClose }) {
  return (
    <div style={{ padding: '20px 24px', borderBottom: '1px solid #e8edf2', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
      <div>
        <div style={{ fontSize: 16, fontWeight: 800, color: '#0f172a' }}>{title}</div>
        {sub && <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 2 }}>{sub}</div>}
      </div>
      <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', padding: 4 }}>
        <X size={18} />
      </button>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div style={{ display: 'flex', gap: 12, padding: '8px 0', borderTop: '1px solid #f1f5f9' }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', width: 120, flexShrink: 0, paddingTop: 1 }}>{label}</div>
      <div style={{ fontSize: 13, color: '#334155', flex: 1 }}>{value}</div>
    </div>
  );
}

function UserDrawer({ user: u, onClose }) {
  const plan = getPlanBadge(u.plan);
  const dir = getDirectionBadge(u.direction);
  return (
    <DrawerOverlay onClose={onClose}>
      <DrawerHeader title={u.name} sub={u.id} onClose={onClose} />
      <div style={{ padding: 24 }}>
        {/* Profile header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20, padding: 16, background: '#f8fafc', borderRadius: 12 }}>
          <Avatar initials={u.avatar} size={52} />
          <div>
            <div style={{ fontSize: 16, fontWeight: 800, color: '#0f172a' }}>{u.name}</div>
            <div style={{ fontSize: 12, color: '#64748b', marginBottom: 8 }}>{u.email}</div>
            <div style={{ display: 'flex', gap: 6 }}>
              <StatusPill status={u.status} />
              <Pill bg={plan.bg} text={plan.text}>{plan.label}</Pill>
            </div>
          </div>
        </div>

        {/* Health Profile */}
        <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a', marginBottom: 10 }}>Health Profile</div>
        <InfoRow label="Condition" value={<span style={{ fontWeight: 700, color: '#0f172a' }}>{u.cond}</span>} />
        <InfoRow label="Goals" value={u.goals} />
        <InfoRow label="Direction" value={<span style={{ color: dir.color, fontWeight: 600 }}>{dir.icon} {dir.label}</span>} />
        <InfoRow label="Last Active" value={u.lastActive} />
        <InfoRow label="Joined" value={u.joined} />

        {/* Allergies */}
        {u.allergies.length > 0 && <>
          <div style={{ marginTop: 20, marginBottom: 8, fontSize: 13, fontWeight: 700, color: '#0f172a' }}>Allergies & Intolerances</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {u.allergies.map(a => <Pill key={a} bg="#fee2e2" text="#dc2626">{a}</Pill>)}
          </div>
        </>}

        {/* Preferences */}
        <div style={{ marginTop: 16, marginBottom: 8, fontSize: 13, fontWeight: 700, color: '#0f172a' }}>Dietary Preferences</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {u.prefs.map(p => <Pill key={p} bg="#f0fdfa" text="#0f766e">{p}</Pill>)}
        </div>

        {/* Subscription */}
        <div style={{ marginTop: 20, fontSize: 13, fontWeight: 700, color: '#0f172a', marginBottom: 10 }}>Subscription Details</div>
        <InfoRow label="Plan" value={<Pill bg={plan.bg} text={plan.text}>{plan.label}</Pill>} />
        <InfoRow label="Trial Start" value={u.trialStart || '—'} />
        <InfoRow label="Trial End" value={u.trialEnd || '—'} />
        <InfoRow label="Renewal" value={u.renewal || '—'} />
        <InfoRow label="Provider" value={u.provider} />
        <InfoRow label="Customer ID" value={<span className="font-mono" style={{ fontSize: 12, color: '#64748b' }}>{u.custId}</span>} />
        <InfoRow label="Subscription ID" value={<span className="font-mono" style={{ fontSize: 12, color: '#64748b' }}>{u.subId}</span>} />

        {/* Contact */}
        <div style={{ marginTop: 20, fontSize: 13, fontWeight: 700, color: '#0f172a', marginBottom: 10 }}>Contact</div>
        <InfoRow label="Phone" value={u.phone} />
        <InfoRow label="Email" value={u.email} />

        {/* Actions */}
        <div style={{ marginTop: 24, display: 'flex', gap: 10 }}>
          <ActionBtn>Edit Profile</ActionBtn>
          <OutlineBtn>Suspend</OutlineBtn>
          <OutlineBtn>Reset Password</OutlineBtn>
        </div>
      </div>
    </DrawerOverlay>
  );
}

function MealDrawer({ plan: m, onClose }) {
  return (
    <DrawerOverlay onClose={onClose}>
      <DrawerHeader title={m.name} sub={m.id} onClose={onClose} />
      <div style={{ padding: 24 }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
          <StatusPill status={m.status} />
          {m.reviewed ? <Pill bg="#dcfce7" text="#16a34a">Reviewed</Pill> : <Pill bg="#fef9c3" text="#ca8a04">Needs Review</Pill>}
        </div>

        <InfoRow label="Patient" value={m.userName} />
        <InfoRow label="Dietician" value={m.dietician} />
        <InfoRow label="Start Date" value={m.startDate} />
        <InfoRow label="End Date" value={m.endDate} />
        <InfoRow label="Total Meals" value={m.meals} />
        <InfoRow label="Target Calories" value={`${m.calories} kcal/day`} />
        <InfoRow label="Adherence" value={
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ flex: 1, height: 6, background: '#f1f5f9', borderRadius: 3, overflow: 'hidden', maxWidth: 120 }}>
              <div style={{ height: '100%', width: `${m.adherence}%`, background: m.adherence >= 80 ? '#16a34a' : '#f59e0b', borderRadius: 3 }} />
            </div>
            <span style={{ fontWeight: 700, color: m.adherence >= 80 ? '#16a34a' : '#f59e0b' }}>{m.adherence}%</span>
          </div>
        } />

        <div style={{ marginTop: 24, display: 'flex', gap: 10 }}>
          <ActionBtn>Mark Reviewed</ActionBtn>
          <OutlineBtn>Edit Plan</OutlineBtn>
          <OutlineBtn>Download PDF</OutlineBtn>
        </div>
      </div>
    </DrawerOverlay>
  );
}

function GroceryDrawer({ list: g, onClose }) {
  return (
    <DrawerOverlay onClose={onClose}>
      <DrawerHeader title={g.name} sub={g.id} onClose={onClose} />
      <div style={{ padding: 24 }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
          <StatusPill status={g.status} />
        </div>
        <InfoRow label="Patient" value={g.userName} />
        <InfoRow label="Store" value={g.store} />
        <InfoRow label="Items" value={`${g.items} items`} />
        <InfoRow label="Est. Cost" value={`$${g.cost.toFixed(2)}`} />
        <InfoRow label="Generated" value={g.generated} />

        <div style={{ marginTop: 20, padding: 16, background: '#f8fafc', borderRadius: 10 }}>
          <div style={{ fontSize: 12, color: '#94a3b8', marginBottom: 8 }}>Sample items from this list would appear here with quantities and categories.</div>
          {['Fresh produce (8 items)', 'Proteins & legumes (6 items)', 'Grains & starches (5 items)', 'Condiments & oils (4 items)', 'Beverages (3 items)', 'Supplements (2 items)'].map(cat => (
            <div key={cat} style={{ padding: '6px 0', borderBottom: '1px solid #e8edf2', fontSize: 13, color: '#475569', display: 'flex', alignItems: 'center', gap: 8 }}>
              <Circle size={6} fill="#0d9488" stroke="none" /> {cat}
            </div>
          ))}
        </div>

        <div style={{ marginTop: 24, display: 'flex', gap: 10 }}>
          <ActionBtn>Share with Patient</ActionBtn>
          <OutlineBtn>Edit List</OutlineBtn>
          <OutlineBtn>Export</OutlineBtn>
        </div>
      </div>
    </DrawerOverlay>
  );
}

function ColonDrawer({ prep: c, onClose }) {
  const steps = [
    { label: 'Clear liquid diet starts', done: c.clearDiet, date: c.prepDay.split('-')[0].trim() },
    { label: 'Prep solution taken (PM)', done: c.solutionTaken, date: c.prepDay.split('-')[0].trim() },
    { label: 'Prep solution taken (AM)', done: c.cleared, date: c.prepDay.split('-')[1]?.trim() },
    { label: 'Bowel prep complete', done: c.cleared, date: c.prepDay.split('-')[1]?.trim() },
    { label: 'Procedure', done: c.status === 'completed', date: c.schedDate },
  ];

  return (
    <DrawerOverlay onClose={onClose}>
      <DrawerHeader title={`${c.userName}'s Colonoscopy Prep`} sub={c.id} onClose={onClose} />
      <div style={{ padding: 24 }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
          <StatusPill status={c.status} />
        </div>
        <InfoRow label="Procedure Date" value={c.schedDate} />
        <InfoRow label="Prep Days" value={c.prepDay} />
        <InfoRow label="GI Physician" value={c.gi} />
        <InfoRow label="Facility" value={c.facility} />
        <InfoRow label="Notes" value={c.notes} />

        <div style={{ marginTop: 24, fontSize: 13, fontWeight: 700, color: '#0f172a', marginBottom: 12 }}>Prep Timeline</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, paddingBottom: i < steps.length - 1 ? 16 : 0, position: 'relative' }}>
              {i < steps.length - 1 && (
                <div style={{ position: 'absolute', left: 11, top: 24, bottom: 0, width: 2, background: '#e8edf2' }} />
              )}
              <div style={{
                width: 24, height: 24, borderRadius: '50%', flexShrink: 0, zIndex: 1,
                background: s.done ? '#0d9488' : '#f1f5f9',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {s.done ? <Check size={12} color="white" strokeWidth={3} /> : <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#cbd5e1' }} />}
              </div>
              <div style={{ paddingTop: 2 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: s.done ? '#0f172a' : '#94a3b8' }}>{s.label}</div>
                <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 2 }}>{s.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DrawerOverlay>
  );
}

function FailedDrawer({ req: f, onClose }) {
  return (
    <DrawerOverlay onClose={onClose}>
      <DrawerHeader title="Failed Request Detail" sub={f.id} onClose={onClose} />
      <div style={{ padding: 24 }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
          <Pill bg="#fee2e2" text="#dc2626">{f.status} Error</Pill>
          <Pill bg="#f1f5f9" text="#64748b">{f.category}</Pill>
          {f.resolved ? <Pill bg="#dcfce7" text="#16a34a">Resolved</Pill> : <Pill bg="#fee2e2" text="#dc2626">Unresolved</Pill>}
        </div>

        <InfoRow label="Endpoint" value={<span className="font-mono" style={{ fontSize: 12 }}>{f.endpoint}</span>} />
        <InfoRow label="Method" value={f.method} />
        <InfoRow label="HTTP Status" value={<span style={{ fontWeight: 700, color: '#dc2626' }}>{f.status}</span>} />
        <InfoRow label="User" value={f.userName} />
        <InfoRow label="Timestamp" value={f.timestamp} />
        <InfoRow label="Retry Count" value={`${f.retries} of 3`} />

        <div style={{ marginTop: 16, marginBottom: 8, fontSize: 13, fontWeight: 700, color: '#0f172a' }}>Error Message</div>
        <div style={{ background: '#fee2e2', border: '1px solid #fca5a5', borderRadius: 8, padding: 12 }}>
          <span className="font-mono" style={{ fontSize: 12, color: '#991b1b' }}>{f.error}</span>
        </div>

        <div style={{ marginTop: 16, marginBottom: 8, fontSize: 13, fontWeight: 700, color: '#0f172a' }}>Suggested Actions</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {f.status === 500 && <div style={{ fontSize: 12, color: '#475569', display: 'flex', gap: 8 }}><ArrowUpRight size={13} color="#0d9488" style={{ flexShrink: 0, marginTop: 1 }} />Check service health and logs for this endpoint</div>}
          {f.status === 503 && <div style={{ fontSize: 12, color: '#475569', display: 'flex', gap: 8 }}><ArrowUpRight size={13} color="#0d9488" style={{ flexShrink: 0, marginTop: 1 }} />External service may be down — check status page</div>}
          {f.status === 429 && <div style={{ fontSize: 12, color: '#475569', display: 'flex', gap: 8 }}><ArrowUpRight size={13} color="#0d9488" style={{ flexShrink: 0, marginTop: 1 }} />Rate limit hit — consider upgrading API plan or throttling requests</div>}
          <div style={{ fontSize: 12, color: '#475569', display: 'flex', gap: 8 }}><ArrowUpRight size={13} color="#0d9488" style={{ flexShrink: 0, marginTop: 1 }} />Notify affected user: {f.userName}</div>
        </div>

        {!f.resolved && (
          <div style={{ marginTop: 24, display: 'flex', gap: 10 }}>
            <ActionBtn color="#16a34a"><Check size={12} style={{ display: 'inline', marginRight: 5 }} />Mark Resolved</ActionBtn>
            <OutlineBtn>Retry Request</OutlineBtn>
          </div>
        )}
      </div>
    </DrawerOverlay>
  );
}

function ReviewDrawer({ item: r, onClose }) {
  const pr = getStatusBadge(r.priority);
  const st = getStatusBadge(r.status);
  return (
    <DrawerOverlay onClose={onClose}>
      <DrawerHeader title={r.type} sub={r.id} onClose={onClose} />
      <div style={{ padding: 24 }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
          <Pill bg={pr.bg} text={pr.text}>{pr.label}</Pill>
          <Pill bg={st.bg} text={st.text}>{st.label}</Pill>
        </div>

        <InfoRow label="Patient" value={r.userName} />
        <InfoRow label="User ID" value={<span className="font-mono" style={{ fontSize: 12 }}>{r.userId}</span>} />
        <InfoRow label="Submitted" value={r.submitted} />
        {r.dietician && <InfoRow label="Assigned To" value={r.dietician} />}
        {r.plan && <InfoRow label="Linked Plan" value={<span className="font-mono" style={{ fontSize: 12 }}>{r.plan}</span>} />}

        <div style={{ marginTop: 16, marginBottom: 8, fontSize: 13, fontWeight: 700, color: '#0f172a' }}>Notes</div>
        <div style={{ background: '#f8fafc', border: '1px solid #e8edf2', borderRadius: 8, padding: 12, fontSize: 13, color: '#475569', lineHeight: 1.6 }}>
          {r.notes}
        </div>

        {r.status === 'pending' && (
          <div style={{ marginTop: 24, display: 'flex', gap: 10 }}>
            <ActionBtn color="#16a34a"><CheckCircle size={12} style={{ display: 'inline', marginRight: 5 }} />Approve</ActionBtn>
            <ActionBtn color="#dc2626"><XCircle size={12} style={{ display: 'inline', marginRight: 5 }} />Reject</ActionBtn>
            <OutlineBtn>Assign to Dietician</OutlineBtn>
          </div>
        )}
      </div>
    </DrawerOverlay>
  );
}

/* ─── Main AdminPage ─── */

/* Auth lives in localStorage only, so there is nothing to subscribe to. */
const subscribeToAuth = () => () => {};

export default function AdminPage() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [drawer, setDrawer] = useState(null);
  const [drawerData, setDrawerData] = useState(null);
  // `null` while rendering on the server / hydrating, boolean once on the client.
  const authed = useSyncExternalStore(
    subscribeToAuth,
    () => Boolean(localStorage.getItem('gi_admin_auth')),
    () => null,
  );

  useEffect(() => {
    if (authed === false) router.replace('/signin');
  }, [authed, router]);

  if (!authed) {
    return (
      <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', background: '#f6f8fa' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', border: '3px solid #e8edf2', borderTopColor: '#0d9488', animation: 'spin 0.7s linear infinite' }} />
          <span style={{ fontSize: 13, color: '#94a3b8' }}>Loading…</span>
          <style>{`@keyframes spin { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }`}</style>
        </div>
      </div>
    );
  }

  const openDrawer = (type, data) => { setDrawer(type); setDrawerData(data); };
  const closeDrawer = () => { setDrawer(null); setDrawerData(null); };
  const handleLogout = () => {
    if (typeof window !== 'undefined') localStorage.removeItem('gi_admin_auth');
    router.replace('/signin');
  };

  const pages = {
    dashboard: <DashboardPage />,
    users: <UsersPage onOpenDrawer={openDrawer} />,
    profiles: <ProfilesPage onOpenDrawer={openDrawer} />,
    subscriptions: <SubscriptionsPage />,
    ai: <AIPage onOpenDrawer={openDrawer} />,
    ocr: <OCRPage />,
    meals: <MealsPage onOpenDrawer={openDrawer} />,
    grocery: <GroceryPage onOpenDrawer={openDrawer} />,
    colon: <ColonPage onOpenDrawer={openDrawer} />,
    review: <ReviewPage onOpenDrawer={openDrawer} />,
    failed: <FailedPage onOpenDrawer={openDrawer} />,
    notifications: <NotificationsPage />,
    settings: <SettingsPage />,
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} onLogout={handleLogout} />

      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
        <Topbar currentPage={currentPage} />
        <main style={{ flex: 1, overflowY: 'auto', padding: 24, background: '#f6f8fa' }}>
          <div className="animate-fade-in" key={currentPage}>
            {pages[currentPage]}
          </div>
        </main>
      </div>

      {/* Drawers */}
      {drawer === 'user' && <UserDrawer user={drawerData} onClose={closeDrawer} />}
      {drawer === 'meal' && <MealDrawer plan={drawerData} onClose={closeDrawer} />}
      {drawer === 'grocery' && <GroceryDrawer list={drawerData} onClose={closeDrawer} />}
      {drawer === 'colon' && <ColonDrawer prep={drawerData} onClose={closeDrawer} />}
      {drawer === 'failed' && <FailedDrawer req={drawerData} onClose={closeDrawer} />}
      {drawer === 'review' && <ReviewDrawer item={drawerData} onClose={closeDrawer} />}
    </div>
  );
}
