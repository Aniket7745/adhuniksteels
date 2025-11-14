import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "My Website",
  description: "Modern website with global navigation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-neutral-900 dark:bg-black dark:text-neutral-100 transition-colors duration-200">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="min-h-[70vh]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
