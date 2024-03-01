import '@/app/ui/global.css';
import { inter } from "@/app/ui/fonts";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gradient-to-tl from-fuchsia-800 via-orange-400 to-blue-200`}>
        {children}
      </body>
    </html>
  );
}
