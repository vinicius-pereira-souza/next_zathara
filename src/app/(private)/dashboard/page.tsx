import Title from "@/app/ui/title";

export default function Dashboard() {
  return (
    <div>
      <Title text="Dashboard" />
      <div className="bg-white rounded-lg shadow-lg py-7 px-6 text-gray-500 text-base">
        <h2 className="text-gray-900 text-xl font-semibold mb-3">Welcome!</h2>
        <p>Here’s a quick overview of your workspace.</p>
      </div>
    </div>
  );
}
