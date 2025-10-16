import Banner from "@/app/ui/banner";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      <Banner />
      <main className="flex-1 flex items-center justify-center flex-col text-left">
        {children}
      </main>
    </div>
  );
}
