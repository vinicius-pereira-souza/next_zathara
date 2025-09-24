import { LoginForm } from "@/app/ui/form";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full max-w-[479px] text-center">
      <h1 className="text-gray-900 text-3xl font-bold mb-2 text-left">Login</h1>
      <h2 className="text-gray-500 mb-5 text-left">
        Welcome back! Please enter your details.
      </h2>
      <LoginForm />
      <span className="text-gray-500 mt-4 block">
        Not a user yet?{" "}
        <Link href="/register" className="text-blue-600">
          Create an account
        </Link>
      </span>
    </div>
  );
}
