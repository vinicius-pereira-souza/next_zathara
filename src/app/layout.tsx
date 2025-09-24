import { poppins } from "@/ui/fonts";
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
      <body
        className={`${poppins.className}relative min-h-screen bg-light-grey`}
      >
        {children}
      </body>
    </html>
  );
}
