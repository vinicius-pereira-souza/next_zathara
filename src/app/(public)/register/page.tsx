import { RegisterForm } from "@/app/ui/form";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full max-w-[479px] text-center">
      <h1 className="text-gray-900 text-3xl font-bold mb-2 text-left">
        Register
      </h1>
      <h2 className="text-gray-500 mb-5 text-left">
        Welcome! Please enter your details.
      </h2>
      <RegisterForm />
      <span className="text-gray-500 mt-4 block">
        Already a user?{" "}
        <Link href="/login" className="text-blue-600">
          enter your email
        </Link>
      </span>
    </div>
  );
}
