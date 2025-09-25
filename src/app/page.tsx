import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-white-200 flex items-center justify-center">
      <Link href="/login">Login</Link>
    </main>
  );
}
