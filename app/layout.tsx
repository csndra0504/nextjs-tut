import '@/app/ui/global.css';
import { aleo } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${aleo.className} antialiased`}>{children}</body>
    </html>
  );
}
