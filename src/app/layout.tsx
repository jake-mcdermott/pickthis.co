import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PickThis.co",
  description: "Simplify your decisions with the best products in every category.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">{children}</body>
    </html>
  );
}
