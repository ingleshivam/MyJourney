import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Divine Odyssey ",
  description:
    "The Divine Odyssey - Traversing through temples, tales, and timeless traditions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">{children}</body>
    </html>
  );
}
