// The landing/legal designs ship their own inline SVG set rather than
// lucide-react, so the paths are kept verbatim here and shared across sections.

function Svg({ size = 18, stroke = 'currentColor', strokeWidth = 2, style, children }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth={strokeWidth}
      strokeLinecap="round" strokeLinejoin="round"
      style={style} aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function SparkleIcon(props) {
  return <Svg {...props}><path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" /></Svg>;
}

export function ShieldIcon(props) {
  return <Svg {...props}><path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6l8-3z" /></Svg>;
}

export function UtensilsIcon(props) {
  return (
    <Svg {...props}>
      <path d="M4 3v6a3 3 0 0 0 6 0V3" /><path d="M7 12v9" /><path d="M17 3v18" />
    </Svg>
  );
}

export function LeafIcon(props) {
  return (
    <Svg {...props}>
      <path d="M4 20c0-9 6-14 16-14 0 10-5 15-14 15H4z" /><path d="M5 19c4-5 8-7 12-8" />
    </Svg>
  );
}

export function ActivityIcon(props) {
  return <Svg {...props}><path d="M3 12h4l3 8 4-16 3 8h4" /></Svg>;
}

export function BellIcon(props) {
  return (
    <Svg {...props}>
      <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6" /><path d="M10 19a2 2 0 0 0 4 0" />
    </Svg>
  );
}

export function CartIcon(props) {
  return (
    <Svg {...props}>
      <circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" />
      <path d="M3 4h2l2.5 11h11L21 7H6" />
    </Svg>
  );
}

export function ChatIcon(props) {
  return <Svg {...props}><path d="M3 12a9 9 0 1 1 4 7.5L3 21l1.5-4A9 9 0 0 1 3 12z" /></Svg>;
}

export function LockIcon(props) {
  return (
    <Svg {...props}>
      <rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </Svg>
  );
}

export function CheckIcon(props) {
  return <Svg {...props}><path d="M5 13l4 4L19 7" /></Svg>;
}

export function CameraIcon(props) {
  return (
    <Svg {...props}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <circle cx="12" cy="13.5" r="3.5" /><path d="M8 7l1.5-3h5L16 7" />
    </Svg>
  );
}

export function MicIcon(props) {
  return (
    <Svg {...props}>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0" /><path d="M12 18v3" />
    </Svg>
  );
}

export function ScanIcon(props) {
  return (
    <Svg {...props}>
      <path d="M4 8V6a2 2 0 0 1 2-2h2" /><path d="M16 4h2a2 2 0 0 1 2 2v2" />
      <path d="M20 16v2a2 2 0 0 1-2 2h-2" /><path d="M8 20H6a2 2 0 0 1-2-2v-2" />
      <path d="M6 12h12" />
    </Svg>
  );
}

export function WarningIcon(props) {
  return (
    <Svg {...props}>
      <path d="M12 4l9 16H3l9-16z" /><path d="M12 10v4" /><path d="M12 17h.01" />
    </Svg>
  );
}

export function ChevronIcon(props) {
  return <Svg {...props}><path d="M6 9l6 6 6-6" /></Svg>;
}

export function MailIcon(props) {
  return (
    <Svg {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" />
    </Svg>
  );
}

export function PhoneIcon(props) {
  return (
    <Svg {...props}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z" />
    </Svg>
  );
}

export function PinIcon(props) {
  return (
    <Svg {...props}>
      <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" />
    </Svg>
  );
}
