import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: "GI Buddy Admin",
  description: "GI Buddy Administration Console",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${jetbrainsMono.variable} h-full`}>
      <body className="h-full">{children}</body>
    </html>
  );
}
