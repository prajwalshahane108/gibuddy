// Shared prose styles for the two legal pages. Kept out of LegalLayout.js so
// the server-rendered pages don't import them across the client boundary.

export const LEGAL_LEAD = { margin: 0, fontSize: 15, lineHeight: 1.7, color: '#475569' };

export const LEGAL_P = { margin: '10px 0 0', fontSize: 15, lineHeight: 1.7, color: '#475569' };

export const LEGAL_H2 = {
  margin: '36px 0 0', fontSize: 20, fontWeight: 700, color: '#0f172a',
  letterSpacing: '-0.02em', scrollMarginTop: 88,
};

export const LEGAL_STRONG = { color: '#0f172a', fontWeight: 700 };

export const LEGAL_LI = { fontSize: 15, lineHeight: 1.7, color: '#475569' };
