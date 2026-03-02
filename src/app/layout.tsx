import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ContactHub",
  description: "Manage your customer relationships and track sales leads",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
