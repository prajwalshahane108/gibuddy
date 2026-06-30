'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Eye, EyeOff, Shield, BarChart3, Users, Zap,
  ArrowLeft, CheckCircle, Mail, Lock, KeyRound
} from 'lucide-react';

function LeftPanel() {
  return (
    <div
      className="hidden lg:flex w-1/2 flex-col justify-between p-10 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f766e 0%, #134e4a 100%)' }}
    >
      {/* decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #14b8a6, transparent)' }} />
      <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #14b8a6, transparent)' }} />

      {/* Logo */}
      <div className="flex items-center gap-3 relative z-10">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: 'rgba(255,255,255,0.15)' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12s2-6 6-6 6 6 6 6 2 6 6 6 6-6 6-6" />
            <path d="M2 12h4M18 12h4" />
          </svg>
        </div>
        <span style={{ fontSize:20, fontWeight:800, color:'white', letterSpacing:'-0.3px' }}>GI Buddy</span>
        <span className="ml-1 px-2 py-0.5 rounded-full text-xs font-semibold"
          style={{ background:'rgba(255,255,255,0.15)', color:'rgba(255,255,255,0.9)', border:'1px solid rgba(255,255,255,0.2)' }}>
          Admin
        </span>
      </div>

      {/* Main copy */}
      <div className="flex-1 flex flex-col justify-center relative z-10 mt-12">
        <h1 style={{ fontSize:32, fontWeight:800, color:'white', lineHeight:1.2, marginBottom:16 }}>
          Complete Visibility Into Your Platform
        </h1>
        <p style={{ fontSize:15, color:'rgba(255,255,255,0.7)', lineHeight:1.6, marginBottom:40 }}>
          Monitor users, manage AI recommendations, review dietician queues, and keep your gut health platform running smoothly.
        </p>

        <div className="flex flex-col gap-3">
          {[
            { icon: <BarChart3 size={18} />, title:'Platform Analytics', desc:'Real-time KPIs, user trends, and subscription metrics' },
            { icon: <Users size={18} />,     title:'User Management',    desc:'Full visibility into patient profiles, conditions, and plans' },
            { icon: <Zap size={18} />,       title:'AI Oversight',       desc:'Monitor AI recommendations, confidence scores, and failures' },
          ].map((card, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-2xl"
              style={{ background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.12)' }}>
              <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background:'rgba(255,255,255,0.15)', color:'white' }}>
                {card.icon}
              </div>
              <div>
                <div style={{ fontSize:14, fontWeight:700, color:'white', marginBottom:2 }}>{card.title}</div>
                <div style={{ fontSize:12, color:'rgba(255,255,255,0.65)' }}>{card.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 relative z-10"
        style={{ fontSize:12, color:'rgba(255,255,255,0.45)' }}>
        <Shield size={13} />
        <span>HIPAA Compliant · SOC 2 Certified · 256-bit Encryption</span>
      </div>
    </div>
  );
}

function InputField({ label, type='text', value, onChange, placeholder, rightEl }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label style={{ fontSize:11, fontWeight:700, color:'#334155', textTransform:'uppercase', letterSpacing:'0.06em' }}>
        {label}
      </label>
      <div className="relative flex items-center">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full"
          style={{
            padding:'10px 14px',
            paddingRight: rightEl ? 44 : 14,
            border:'1.5px solid #e8edf2',
            borderRadius:10,
            fontSize:14,
            color:'#0f172a',
            background:'#fff',
            outline:'none',
            transition:'border-color 0.15s',
            fontFamily:'inherit',
          }}
          onFocus={e => e.target.style.borderColor = '#0d9488'}
          onBlur={e => e.target.style.borderColor = '#e8edf2'}
        />
        {rightEl && (
          <div className="absolute right-3">{rightEl}</div>
        )}
      </div>
    </div>
  );
}

function LoginView({ onLogin, onForgot }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); onLogin(); }, 1200);
  };

  const toggle = (
    <button type="button" onClick={() => setShowPw(v => !v)}
      style={{ color:'#94a3b8', background:'none', border:'none', cursor:'pointer', padding:0, display:'flex' }}>
      {showPw ? <EyeOff size={17} /> : <Eye size={17} />}
    </button>
  );

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <h2 style={{ fontSize:26, fontWeight:800, color:'#0f172a', marginBottom:6 }}>Welcome back</h2>
        <p style={{ fontSize:14, color:'#64748b' }}>Sign in to your admin account</p>
      </div>

      <InputField
        label="Email Address"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="admin@gibuddy.com"
      />
      <InputField
        label="Password"
        type={showPw ? 'text' : 'password'}
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Enter your password"
        rightEl={toggle}
      />

      <div className="flex justify-end">
        <button type="button" onClick={onForgot}
          style={{ fontSize:13, color:'#0d9488', fontWeight:600, background:'none', border:'none', cursor:'pointer', padding:0 }}>
          Forgot your password?
        </button>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2"
        style={{
          padding:'12px 24px',
          background: loading ? '#0f766e' : '#0d9488',
          color:'white',
          borderRadius:10,
          fontSize:15,
          fontWeight:700,
          border:'none',
          cursor: loading ? 'wait' : 'pointer',
          transition:'background 0.15s',
          fontFamily:'inherit',
        }}
      >
        {loading ? (
          <>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
              style={{ animation:'spin 0.7s linear infinite' }}>
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
            Signing in…
          </>
        ) : 'Sign In'}
      </button>

      <style>{`@keyframes spin { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }`}</style>
    </form>
  );
}

function OTPView({ onVerify, onBack }) {
  const [digits, setDigits] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);

  const handleChange = (i, val) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...digits];
    next[i] = val;
    setDigits(next);
    if (val && i < 5) document.getElementById(`otp-${i + 1}`)?.focus();
  };

  const handleKey = (i, e) => {
    if (e.key === 'Backspace' && !digits[i] && i > 0)
      document.getElementById(`otp-${i - 1}`)?.focus();
  };

  const handleVerify = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); onVerify(); }, 1000);
  };

  return (
    <form onSubmit={handleVerify} className="flex flex-col gap-6">
      <div>
        <button type="button" onClick={onBack} className="flex items-center gap-1.5 mb-4"
          style={{ fontSize:13, color:'#64748b', background:'none', border:'none', cursor:'pointer', padding:0, fontFamily:'inherit' }}>
          <ArrowLeft size={14} /> Back to login
        </button>
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
          style={{ background:'#f0fdfa' }}>
          <KeyRound size={22} style={{ color:'#0d9488' }} />
        </div>
        <h2 style={{ fontSize:26, fontWeight:800, color:'#0f172a', marginBottom:6 }}>Verify your identity</h2>
        <p style={{ fontSize:14, color:'#64748b' }}>Enter the 6-digit code sent to admin@gibuddy.com</p>
      </div>

      <div className="flex gap-2">
        {digits.map((d, i) => (
          <input
            key={i}
            id={`otp-${i}`}
            maxLength={1}
            value={d}
            onChange={e => handleChange(i, e.target.value)}
            onKeyDown={e => handleKey(i, e)}
            className="flex-1 text-center"
            style={{
              height:52,
              border:'1.5px solid #e8edf2',
              borderRadius:10,
              fontSize:20,
              fontWeight:700,
              color:'#0f172a',
              background:'#fff',
              outline:'none',
              fontFamily:'inherit',
              transition:'border-color 0.15s',
            }}
            onFocus={e => e.target.style.borderColor = '#0d9488'}
            onBlur={e => e.target.style.borderColor = '#e8edf2'}
          />
        ))}
      </div>

      <button type="submit" disabled={loading} className="w-full"
        style={{
          padding:'12px 24px', background:'#0d9488', color:'white',
          borderRadius:10, fontSize:15, fontWeight:700, border:'none',
          cursor: loading ? 'wait' : 'pointer', fontFamily:'inherit',
        }}>
        {loading ? 'Verifying…' : 'Verify Code'}
      </button>
      <p style={{ fontSize:13, color:'#64748b', textAlign:'center' }}>
        Didn&apos;t receive a code?{' '}
        <button type="button" style={{ color:'#0d9488', fontWeight:600, background:'none', border:'none', cursor:'pointer', fontFamily:'inherit' }}>
          Resend
        </button>
      </p>
    </form>
  );
}

function ForgotView({ onBack, onSent }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); onSent(); }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <button type="button" onClick={onBack} className="flex items-center gap-1.5 mb-4"
          style={{ fontSize:13, color:'#64748b', background:'none', border:'none', cursor:'pointer', padding:0, fontFamily:'inherit' }}>
          <ArrowLeft size={14} /> Back to login
        </button>
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
          style={{ background:'#f0fdfa' }}>
          <Mail size={22} style={{ color:'#0d9488' }} />
        </div>
        <h2 style={{ fontSize:26, fontWeight:800, color:'#0f172a', marginBottom:6 }}>Reset your password</h2>
        <p style={{ fontSize:14, color:'#64748b' }}>Enter your email and we&apos;ll send you a reset link</p>
      </div>
      <InputField label="Email Address" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="admin@gibuddy.com" />
      <button type="submit" disabled={loading} className="w-full"
        style={{ padding:'12px 24px', background:'#0d9488', color:'white', borderRadius:10, fontSize:15, fontWeight:700, border:'none', cursor: loading ? 'wait' : 'pointer', fontFamily:'inherit' }}>
        {loading ? 'Sending…' : 'Send Reset Link'}
      </button>
    </form>
  );
}

function ResetSentView({ onBack }) {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background:'#f0fdfa' }}>
        <CheckCircle size={32} style={{ color:'#0d9488' }} />
      </div>
      <div>
        <h2 style={{ fontSize:26, fontWeight:800, color:'#0f172a', marginBottom:8 }}>Check your email</h2>
        <p style={{ fontSize:14, color:'#64748b', lineHeight:1.6 }}>
          We&apos;ve sent a password reset link to your email address. The link will expire in 15 minutes.
        </p>
      </div>
      <button onClick={onBack} className="w-full"
        style={{ padding:'12px 24px', background:'#0d9488', color:'white', borderRadius:10, fontSize:15, fontWeight:700, border:'none', cursor:'pointer', fontFamily:'inherit' }}>
        Back to Sign In
      </button>
    </div>
  );
}

function ResetPasswordView({ onReset, onBack }) {
  const [pw, setPw] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); onReset(); }, 1000);
  };

  const toggle = (
    <button type="button" onClick={() => setShowPw(v => !v)}
      style={{ color:'#94a3b8', background:'none', border:'none', cursor:'pointer', padding:0, display:'flex' }}>
      {showPw ? <EyeOff size={17} /> : <Eye size={17} />}
    </button>
  );

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <button type="button" onClick={onBack} className="flex items-center gap-1.5 mb-4"
          style={{ fontSize:13, color:'#64748b', background:'none', border:'none', cursor:'pointer', padding:0, fontFamily:'inherit' }}>
          <ArrowLeft size={14} /> Back to login
        </button>
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background:'#f0fdfa' }}>
          <Lock size={22} style={{ color:'#0d9488' }} />
        </div>
        <h2 style={{ fontSize:26, fontWeight:800, color:'#0f172a', marginBottom:6 }}>Set new password</h2>
        <p style={{ fontSize:14, color:'#64748b' }}>Choose a strong password for your admin account</p>
      </div>
      <InputField label="New Password" type={showPw ? 'text' : 'password'} value={pw} onChange={e => setPw(e.target.value)} placeholder="Minimum 8 characters" rightEl={toggle} />
      <InputField label="Confirm Password" type={showPw ? 'text' : 'password'} value={confirm} onChange={e => setConfirm(e.target.value)} placeholder="Repeat new password" />
      <button type="submit" disabled={loading} className="w-full"
        style={{ padding:'12px 24px', background:'#0d9488', color:'white', borderRadius:10, fontSize:15, fontWeight:700, border:'none', cursor: loading ? 'wait' : 'pointer', fontFamily:'inherit' }}>
        {loading ? 'Updating…' : 'Update Password'}
      </button>
    </form>
  );
}

function ResetDoneView({ onLogin }) {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background:'#dcfce7' }}>
        <CheckCircle size={32} style={{ color:'#16a34a' }} />
      </div>
      <div>
        <h2 style={{ fontSize:26, fontWeight:800, color:'#0f172a', marginBottom:8 }}>Password updated!</h2>
        <p style={{ fontSize:14, color:'#64748b', lineHeight:1.6 }}>
          Your admin password has been successfully updated. You can now sign in with your new password.
        </p>
      </div>
      <button onClick={onLogin} className="w-full"
        style={{ padding:'12px 24px', background:'#0d9488', color:'white', borderRadius:10, fontSize:15, fontWeight:700, border:'none', cursor:'pointer', fontFamily:'inherit' }}>
        Sign In Now
      </button>
    </div>
  );
}

export default function AuthPage() {
  const router = useRouter();
  const [view, setView] = useState('login');

  const handleLogin = () => {
    if (typeof window !== 'undefined') localStorage.setItem('gi_admin_auth', '1');
    router.push('/admin');
  };
  const handleOTP   = () => {
    if (typeof window !== 'undefined') localStorage.setItem('gi_admin_auth', '1');
    router.push('/admin');
  };

  const views = {
    login:      <LoginView       onLogin={handleLogin}         onForgot={() => setView('forgot')} />,
    otp:        <OTPView         onVerify={handleOTP}          onBack={() => setView('login')}     />,
    forgot:     <ForgotView      onBack={() => setView('login')} onSent={() => setView('reset-sent')} />,
    'reset-sent': <ResetSentView onBack={() => setView('login')}                                    />,
    'reset-pw': <ResetPasswordView onReset={() => setView('reset-done')} onBack={() => setView('login')} />,
    'reset-done': <ResetDoneView onLogin={() => setView('login')}                                   />,
  };

  return (
    <div className="flex h-full min-h-screen">
      <LeftPanel />

      {/* Right Panel */}
      <div className="flex flex-1 items-center justify-center bg-white p-8 lg:p-14">
        <div className="w-full max-w-sm animate-fade-in">
          {views[view]}
          <p className="mt-8 text-center" style={{ fontSize:11, color:'#94a3b8' }}>
            GI Buddy Admin Console v2.4.1 · © 2024 DSHG Sonic
          </p>
        </div>
      </div>
    </div>
  );
}
