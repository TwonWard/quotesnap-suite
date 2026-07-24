import "./globals.css";
export const metadata = { title: "QuoteSnap - Instant Quote Calculators", description: "Instant Quote Calculators for Local Services - Pressure Washing, Detailing, and more" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}
