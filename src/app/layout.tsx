import { inter } from "@/app/ui/fonts";
import "./globals.css";

export const metadata = {
  title: "Next Admin",
  description: "Authentication Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative min-h-screen bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}
