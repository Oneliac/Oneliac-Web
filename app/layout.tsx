import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "oneliac Healthcare | Privacy-Preserving AI",
  description: "oneliac is a Decentralized medical analysis without data leaks. Keep patient data private, verify eligibility instantly, and enable federated learning via zero-knowledge proofs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
