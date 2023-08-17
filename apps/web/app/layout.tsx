import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Link href="/docs">Docs</Link>
        {children}
      </body>
    </html>
  );
}
