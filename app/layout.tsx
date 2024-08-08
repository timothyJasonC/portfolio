import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '600'] });

export const metadata: Metadata = {
  title: "Timothy's Portfolio",
  description: "Modern & Minimalist Portfolio",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
