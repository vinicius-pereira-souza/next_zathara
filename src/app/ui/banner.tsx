import { getBanner } from "@/lib/data";
import Image from "next/image";

export default async function Banner() {
  const photo = await getBanner();

  return (
    <div className="flex-1 min-h-screen hidden lg:block">
      {photo ? (
        <Image
          src={photo.urls.regular}
          alt={photo.alt_description || "Unsplash"}
          width={1080}
          height={720}
          className="object-cover min-h-screen w-full flex-1"
          blurDataURL={photo.urls.small}
          placeholder="blur"
        />
      ) : (
        <div className="min-h-screen w-full flex-1 flex items-center justify-center bg-blue-500 text-white font-bold">
          <h2 className="text-2xl font-bold mb-4">Welcome to Zathara</h2>
          <p className="text-gray-600">
            Here you can create your account or log in to access exclusive
            content. Enjoy a safe and personalized experience while browsing our
            secure pages.
          </p>
        </div>
      )}
    </div>
  );
}
