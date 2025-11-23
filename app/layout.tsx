import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/components/main/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sankalp Space",
  description: "This is the Portfolio Website of Sankalp Shrivastavw",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const menuItems = [
  //   { label: 'Home', ariaLabel: 'Go to home page', link: '#home' },
  //   { label: 'About', ariaLabel: 'Learn about us', link: '#about' },
  //   { label: 'Projects', ariaLabel: 'View our projects', link: '#projects' },
  //   { label: 'Skills', ariaLabel: 'View our skills', link: '#skills' },
  //   { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
  // ];

  // const socialItems = [
  //   { label: 'Twitter', link: 'https://twitter.com' },
  //   { label: 'GitHub', link: 'https://github.com' },
  //   { label: 'LinkedIn', link: 'https://linkedin.com' }
  // ];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        
        {children}
        <Footer/>
      </body>
    </html>
  );
}
