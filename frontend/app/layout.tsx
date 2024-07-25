import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";


export const metadata: Metadata = {
  title: "Naz Indian Restaurant",
  description: "Naz Indian Restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#fafaed]">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
