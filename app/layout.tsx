import type { Metadata } from 'next';
import './styles/reset.css';
import './styles/global.css';

export const metadata: Metadata = {
  title: 'Speech Contents Demo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
