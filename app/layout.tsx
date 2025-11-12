import "./globals.css";
import Navbar from "@/components/Navbar";

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
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
