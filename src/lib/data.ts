"use server";

type UnsplashPhoto = {
  id: string;
  alt_description: string | null;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
};

export async function getBanner(): Promise<UnsplashPhoto> {
  const data = await fetch(
    "https://api.unsplash.com/photos/random?query=city",
    {
      headers: {
        Authorization: `Client-ID ${process.env.NEXT_PUBLIC_ACCESS_KEY}`,
      },
    },
  );

  if (!data.ok) {
    throw new Error("Erro ao buscar a imagem do Unsplash");
  }

  const res = await data.json();

  return res;
}
