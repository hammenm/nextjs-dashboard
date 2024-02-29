import '@/app/ui/global.css';
import { inter } from "@/app/ui/fonts";

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
