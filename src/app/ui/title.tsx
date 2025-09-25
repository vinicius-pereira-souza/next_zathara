export default function Title({ text }: { text: string }) {
  return (
    <>
      <h1 className="text-2xl font-extrabold text-gray-900 mb-6">{text}</h1>
    </>
  );
}
