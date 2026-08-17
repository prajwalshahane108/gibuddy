'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MailIcon, PhoneIcon, PinIcon, CheckIcon, WarningIcon } from '@/components/landing/icons';
import { sendContactMessage } from '@/lib/api/contact';

const EMPTY = { name: '', email: '', subject: 'General', message: '', consent: false };

const CAPS = {
  display: 'block', fontSize: 11, fontWeight: 600, color: '#94a3b8',
  letterSpacing: '0.04em', textTransform: 'uppercase',
};

const LABEL = { fontSize: 12, fontWeight: 600, color: '#475569' };
const ERROR = { fontSize: 12, color: '#dc2626' };

const inputStyle = (invalid) => ({
  width: '100%', padding: '10px 12px',
  border: `1.5px solid ${invalid ? '#dc2626' : '#e8edf2'}`, borderRadius: 9,
  fontFamily: 'inherit', fontSize: 13, color: '#0f172a', background: '#fff', outline: 'none',
});

const iconTile = {
  width: 40, height: 40, borderRadius: 12, background: '#fff', border: '1px solid #ccfbf1',
  display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none',
};

export default function ContactSection() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const field = (key) => (e) => {
    const value = key === 'consent' ? e.target.checked : e.target.value;
    setForm(f => ({ ...f, [key]: value }));
    setErrors(prev => ({ ...prev, [key]: '' }));
    setSubmitError('');
  };

  const submit = async (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim())) next.email = 'Please enter a valid email address.';
    if (form.message.trim().length < 10) next.message = 'Please add a little more detail (10 characters or more).';
    if (!form.consent) next.consent = 'Please agree before sending.';
    if (Object.keys(next).length) { setErrors(next); return; }

    setErrors({});
    setSubmitError('');
    setSubmitting(true);
    try {
      await sendContactMessage({
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject,
        message: form.message.trim(),
      });
      setSent(true);
    } catch (error) {
      setSubmitError(error?.message || 'Could not send your message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" style={{ background: '#f0fdfa', borderTop: '1px solid #ccfbf1' }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '88px 24px',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 56, alignItems: 'start',
      }}>
        <div>
          <h2 style={{ margin: 0, fontSize: 34, fontWeight: 800, letterSpacing: '-0.02em', color: '#0f172a' }}>
            Talk to us
          </h2>
          <p style={{ margin: '12px 0 0', maxWidth: '48ch', fontSize: 16, lineHeight: 1.6, color: '#475569' }}>
            Questions about the app, your subscription, or working with us — send a note and a person will read it.
          </p>

          {/* TODO: replace with the real support email, phone and address. */}
          <div style={{ display: 'grid', gap: 16, marginTop: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={iconTile}><MailIcon size={17} stroke="#0d9488" /></span>
              <span>
                <span style={CAPS}>Email</span>
                <a href="mailto:gibuddy356@gmail.com" className="lp-a" style={{ fontSize: 14, fontWeight: 600 }}>
                  gibuddy356@gmail.com
                </a>
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={iconTile}><PhoneIcon size={17} stroke="#0d9488" /></span>
              <span>
                <span style={CAPS}>Phone</span>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 14, color: '#0f172a' }}>
                  ---------------------
                </span>
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={iconTile}><PinIcon size={17} stroke="#0d9488" /></span>
              <span>
                <span style={CAPS}>Address</span>
                <span style={{ fontSize: 14, color: '#0f172a' }}>---------------------</span>
              </span>
            </div>
          </div>

          <p style={{ margin: '24px 0 0', fontSize: 13, color: '#64748b' }}>
            We usually reply within 1 business day.
          </p>
        </div>

        <div style={{
          background: '#fff', border: '1px solid #e8edf2', borderRadius: 14,
          boxShadow: '0 1px 4px rgba(0,0,0,0.04)', padding: 28,
        }}>
          {sent ? (
            <div style={{ display: 'grid', gap: 12, justifyItems: 'start' }}>
              <span style={{
                width: 40, height: 40, borderRadius: 12, background: '#dcfce7',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <CheckIcon size={19} stroke="#16a34a" strokeWidth={2.5} />
              </span>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, letterSpacing: '-0.02em', color: '#0f172a' }}>
                Message sent
              </h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: '#475569' }}>
                Thank you. We usually reply within 1 business day.
              </p>
              <button
                type="button" className="lp-btn-outline"
                onClick={() => { setSent(false); setForm(EMPTY); setSubmitError(''); }}
                style={{
                  marginTop: 6, background: 'transparent', border: '1.5px solid #e8edf2', borderRadius: 9,
                  padding: '10px 16px', fontFamily: 'inherit', fontSize: 13, fontWeight: 600,
                  color: '#64748b', cursor: 'pointer',
                }}
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate style={{ display: 'grid', gap: 16 }}>
              <div style={{ display: 'grid', gap: 6 }}>
                <label htmlFor="c-name" style={LABEL}>Name</label>
                <input
                  id="c-name" type="text" value={form.name} onChange={field('name')}
                  placeholder="Your name" style={inputStyle(errors.name)}
                />
                {errors.name && <span style={ERROR}>{errors.name}</span>}
              </div>

              <div style={{ display: 'grid', gap: 6 }}>
                <label htmlFor="c-email" style={LABEL}>Email</label>
                <input
                  id="c-email" type="email" value={form.email} onChange={field('email')}
                  placeholder="you@example.com" style={inputStyle(errors.email)}
                />
                {errors.email && <span style={ERROR}>{errors.email}</span>}
              </div>

              <div style={{ display: 'grid', gap: 6 }}>
                <label htmlFor="c-subject" style={LABEL}>Subject</label>
                <select
                  id="c-subject" value={form.subject} onChange={field('subject')}
                  style={inputStyle(false)}
                >
                  <option value="General">General</option>
                  <option value="Billing">Billing</option>
                  <option value="Technical support">Technical support</option>
                  <option value="Partnership">Partnership</option>
                </select>
              </div>

              <div style={{ display: 'grid', gap: 6 }}>
                <label htmlFor="c-message" style={LABEL}>Message</label>
                <textarea
                  id="c-message" rows={5} value={form.message} onChange={field('message')}
                  placeholder="How can we help?"
                  style={{ ...inputStyle(errors.message), lineHeight: 1.6, resize: 'vertical' }}
                />
                {errors.message && <span style={ERROR}>{errors.message}</span>}
              </div>

              <div style={{ display: 'grid', gap: 6 }}>
                <label style={{
                  display: 'flex', gap: 10, alignItems: 'flex-start',
                  fontSize: 12, lineHeight: 1.6, color: '#475569', cursor: 'pointer',
                }}>
                  <input
                    type="checkbox" checked={form.consent} onChange={field('consent')}
                    style={{ marginTop: 2, width: 15, height: 15, accentColor: '#0d9488', flex: 'none' }}
                  />
                  <span>
                    I agree that GI Buddy may use these details to answer my message, as described in the{' '}
                    <Link href="/privacy-policy" className="lp-a" style={{ fontWeight: 600 }}>Privacy Policy</Link>.
                  </span>
                </label>
                {errors.consent && <span style={ERROR}>{errors.consent}</span>}
              </div>

              {submitError && (
                <div style={{
                  display: 'flex', gap: 10, alignItems: 'flex-start', background: '#fee2e2',
                  borderRadius: 9, padding: '11px 13px',
                }}>
                  <WarningIcon size={15} stroke="#dc2626" style={{ flex: 'none', marginTop: 1 }} />
                  <span style={{ fontSize: 12, lineHeight: 1.6, color: '#991b1b' }}>{submitError}</span>
                </div>
              )}

              <button type="submit" disabled={submitting} className="lp-btn-primary" style={{
                justifySelf: 'start', background: '#0d9488', color: '#fff', border: 'none',
                borderRadius: 10, padding: '12px 20px', fontFamily: 'inherit',
                fontSize: 13, fontWeight: 600, cursor: submitting ? 'progress' : 'pointer',
                opacity: submitting ? 0.7 : 1,
              }}>
                {submitting ? 'Sending…' : 'Send message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
