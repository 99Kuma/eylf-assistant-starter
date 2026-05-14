import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EYLF Assistant",
  description: "AI documentation assistant for ECTs and educators",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
