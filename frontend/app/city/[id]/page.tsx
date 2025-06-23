import Image from "next/image";
import { notFound, redirect } from "next/navigation";

interface CityData {
  city: {
    id: number;
    name: string;
    slug: string;
    content: string;
  };
}

async function fetchCity(id: number): Promise<CityData | null> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/city/${id}`,
      {
        cache: "force-cache", // Cache the response for better performance
      }
    );

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`Failed to fetch city: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching city:", error);
    return null;
  }
}

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }): Promise<Metadata> {
//   const { id } = await params;

//   const parts = id.split("-");
//   const cityid = parts.pop();

//   if (!cityid || isNaN(Number(cityid))) {
//     return {
//       title: "City Not Found",
//     };
//   }

//   const city = await fetchCity(Number(cityid));

//   if (!city) {
//     return {
//       title: "City Not Found",
//     };
//   }

//   return {
//     title: `Best Universities in ${city.city.name} | PickMyUni`,
//     description: `Discover top universities in ${city.city.name}. Get enrolled in the best higher education institutions and explore study opportunities.`,
//     keywords: [
//       `universities in ${city.city.name}`,
//       "higher education",
//       "study abroad",
//       "university admission",
//     ],
//     openGraph: {
//       title: `Best Universities in ${city.city.name}`,
//       description: `Discover top universities in ${city.city.name}. Get enrolled in the best higher education institutions.`,
//       type: "website",
//     },
//   };
// }

// Generate static paths for popular cities at build time
// export async function generateStaticParams() {
//   try {
//     // You might want to fetch popular cities from your API
//     // For now, this returns an empty array which means all pages will be generated on-demand
//     return [];
//   } catch (error) {
//     console.error("Error generating static params:", error);
//     return [];
//   }
// }

export default async function PrPath({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Split into slug and id
  const parts = id.split("-");
  const cityid = parts.pop(); // last part is ID
  const slug = parts.join("-"); // rest is slug

  if (!cityid || isNaN(Number(cityid))) {
    notFound();
  }

  const city = await fetchCity(Number(cityid));

  if (!city) {
    notFound();
  }

  console.log({ city });
  console.log({ slug });

  // If the slug is incorrect, redirect to correct URL
  if (city.city.slug && slug !== city.city.slug) {
    redirect(`/city/${city.city.slug}-${city.city.id}`);
  }

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative h-64 md:h-80 lg:h-96">
          <Image
            src="/globe.png"
            alt="Library with books on shelves"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto pb-8">
              <h1 className="max-w-[850px] text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Get Enrolled in the Best Universities in {city.city.name}
              </h1>
            </div>
          </div>
        </div>
        <div className="container mx-auto my-20">
          {city.city.content && (
            <div
              className=" prose max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: city.city.content }}
            />
          )}
        </div>
      </div>
    </>
  );
}
