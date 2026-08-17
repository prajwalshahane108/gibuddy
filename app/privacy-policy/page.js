import Link from 'next/link';
import LegalLayout from '@/components/landing/LegalLayout';
import {
  LEGAL_LEAD, LEGAL_P, LEGAL_H2, LEGAL_STRONG, LEGAL_LI,
} from '@/components/landing/legalStyles';

export const metadata = {
  title: 'Privacy Policy — GI Buddy',
  description: 'What GI Buddy collects, why, who processes it, and the choices you have.',
};

const SECTIONS = [
  'Introduction and scope',
  'Information we collect',
  'How we use it',
  'AI processing',
  'Legal basis and consent',
  'Sharing and processors',
  'Data retention',
  'Security measures',
  'Your rights',
  "Children's privacy",
  'International transfers',
  'Cookies and local storage',
  'Changes to this policy',
  'Contact us',
];

const COLLECTED = [
  ['Account information', 'name, email address and authentication details.'],
  ['Diet profile', 'your conditions and diseases, diet type, dietary preference and allergies. This is health information and is treated as such.'],
  ['Food photos and voice recordings', 'images of dishes and nutrition labels, and audio you record when asking by voice.'],
  ['Barcode scans', 'the product codes you scan and the products they resolve to.'],
  ['Chat messages', 'what you send to the GI Buddy AI Assistant and the replies it returns.'],
  ['Colonoscopy prep details', 'procedure date and time, prep medication, prep type and prep status.'],
  ['Usage data', 'device type, app version, feature usage and diagnostic logs.'],
  ['Payment data', 'handled by Stripe. We receive subscription status and the last four digits of your card; we never store full card numbers.'],
];

export default function Page() {
  return (
    <LegalLayout
      title="Privacy Policy" updated="17 August 2026"
      sections={SECTIONS} active="privacy"
    >
      <p style={LEGAL_LEAD}>
        GI Buddy is operated by DSHG Sonic. This policy explains what we collect when you use the GI Buddy
        app, why we collect it, who processes it on our behalf, and the choices you have.
      </p>

      <h2 id="s1" style={LEGAL_H2}>1. Introduction and scope</h2>
      <p style={LEGAL_P}>
        This policy covers the GI Buddy mobile and web apps, this website, and our support channels. It does
        not cover third-party services you choose to connect, or the practices of your clinic or care provider.
      </p>

      <h2 id="s2" style={LEGAL_H2}>2. Information we collect</h2>
      <p style={LEGAL_P}>We collect only what the product needs to work:</p>
      <ul style={{ margin: '12px 0 0', paddingLeft: 20, display: 'grid', gap: 8 }}>
        {COLLECTED.map(([lead, rest]) => (
          <li key={lead} style={LEGAL_LI}>
            <strong style={LEGAL_STRONG}>{lead}</strong> — {rest}
          </li>
        ))}
      </ul>

      <h2 id="s3" style={LEGAL_H2}>3. How we use it</h2>
      <p style={LEGAL_P}>
        To check foods against your profile, generate meal plans, grocery lists, recipes and daily
        suggestions, run the AI Assistant, keep your recommendation history searchable, send prep reminders,
        provide support, manage your subscription, and keep the service secure and reliable. We do not sell
        your data and do not use your health information for advertising.
      </p>

      <h2 id="s4" style={LEGAL_H2}>4. AI processing</h2>
      <p style={LEGAL_P}>
        To generate recommendations, relevant content — your diet profile attributes, the food you ask about,
        photos, transcribed voice input and chat messages — is sent to third-party AI providers acting as our
        processors. Output is AI-generated and may be incomplete or wrong; it is general dietary information,
        not medical advice.
      </p>

      <h2 id="s5" style={LEGAL_H2}>5. Legal basis and consent</h2>
      <p style={LEGAL_P}>
        Where required, we process health information on the basis of your explicit consent, which you give
        when you create your diet profile and can withdraw at any time. We also rely on performance of our
        contract with you, our legitimate interests in operating and securing the service, and legal
        obligations.
      </p>

      <h2 id="s6" style={LEGAL_H2}>6. Sharing and third-party processors</h2>
      <p style={LEGAL_P}>
        We share data only with processors that help us run GI Buddy: our AI provider (recommendation
        generation), Stripe (payments and subscriptions), our hosting and infrastructure provider, and our
        transactional email provider. Each is bound by contract to process data only on our instructions. We
        may also disclose data where legally required.
      </p>

      <h2 id="s7" style={LEGAL_H2}>7. Data retention</h2>
      <p style={LEGAL_P}>
        We keep your account and diet profile while your account is active. Recommendation history, photos and
        voice recordings are retained so you can revisit past checks, and can be deleted individually. When you
        delete your account, we delete or anonymise your data within a reasonable period, except where we must
        retain records for legal or billing reasons.
      </p>

      <h2 id="s8" style={LEGAL_H2}>8. Security measures</h2>
      <p style={LEGAL_P}>
        Data is encrypted in transit and at rest using 256-bit encryption. Access is role-based, limited to
        staff who need it, logged and reviewed. We operate HIPAA-aligned handling practices and SOC 2 controls.
        No system is perfectly secure, so we also ask you to protect your own credentials.
      </p>

      <h2 id="s9" style={LEGAL_H2}>9. Your rights</h2>
      <p style={LEGAL_P}>
        Depending on where you live, you may access your data, correct it, export it, delete it, restrict or
        object to certain processing, and withdraw consent. You can do most of this in the app; otherwise
        contact us using the details below and we will respond within the period required by law.
      </p>

      <h2 id="s10" style={LEGAL_H2}>10. Children&apos;s privacy</h2>
      <p style={LEGAL_P}>
        GI Buddy is intended for people aged 18 and over, or for minors with the consent and supervision of a
        parent or guardian. We do not knowingly collect data from children without that consent; if we learn we
        have, we delete it.
      </p>

      <h2 id="s11" style={LEGAL_H2}>11. International transfers</h2>
      <p style={LEGAL_P}>
        Our processors may store or process data in countries other than yours. Where that happens, we rely on
        appropriate safeguards such as standard contractual clauses.
      </p>

      <h2 id="s12" style={LEGAL_H2}>12. Cookies and local storage</h2>
      <p style={LEGAL_P}>
        We use cookies and local storage to keep you signed in, remember preferences and understand how the
        product is used. You can clear them in your browser or device settings; some features will stop working
        if you do.
      </p>

      <h2 id="s13" style={LEGAL_H2}>13. Changes to this policy</h2>
      <p style={LEGAL_P}>
        If we make material changes we will update the date at the top of this page and notify you in the app
        or by email before the changes take effect.
      </p>

      <h2 id="s14" style={LEGAL_H2}>14. Contact us</h2>
      <p style={LEGAL_P}>TODO: replace with the real contact details.</p>
      <div style={{ margin: '14px 0 0', display: 'grid', gap: 8 }}>
        <span style={LEGAL_LI}>
          Email <a href="mailto:gibuddy356@gmail.com" className="lp-a" style={{ fontWeight: 600 }}>
            gibuddy356@gmail.com
          </a>
        </span>
        <span style={LEGAL_LI}>
          Phone <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 14, color: '#0f172a' }}>
            ---------------------
          </span>
        </span>
        <span style={LEGAL_LI}>---------------------</span>
      </div>
      <p style={{ margin: '24px 0 0', fontSize: 14, lineHeight: 1.7, color: '#64748b' }}>
        See also the{' '}
        <Link href="/terms-and-conditions" className="lp-a" style={{ fontWeight: 600 }}>
          Terms &amp; Conditions
        </Link>.
      </p>
    </LegalLayout>
  );
}
