import {
  ChartNoAxesCombined,
  CircleDollarSign,
  FileTextIcon,
  GraduationCapIcon,
} from "lucide-react";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import { Metadata } from "next";

interface CityData {
  city: {
    id: number;
    name: string;
    slug: string;
    content: string;
    banner_img: string;
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
    // console.error("Error fetching city:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const parts = id.split("-");
  const cityid = parts.pop();

  if (!cityid || isNaN(Number(cityid))) {
    return {
      title: "City Not Found | PickMyUni",
      description:
        "The requested city could not be found. Explore other cities and universities in Australia.",
    };
  }

  const city = await fetchCity(Number(cityid));

  if (!city) {
    return {
      title: "City Not Found | PickMyUni",
      description:
        "The requested city could not be found. Explore other cities and universities in Australia.",
    };
  }

  return {
    title: `Best Universities in ${city.city.name} | PickMyUni - Study in ${city.city.name}`,
    description: `Discover top universities in ${city.city.name}, Australia. Get enrolled in the best higher education institutions and explore study opportunities in ${city.city.name}.`,
    keywords: [
      `universities in ${city.city.name}`,
      `${city.city.name} universities`,
      `study in ${city.city.name}`,
      "higher education Australia",
      "international students",
      "university admission",
      "Australian education",
    ],
    openGraph: {
      title: `Best Universities in ${city.city.name} | PickMyUni`,
      description: `Discover top universities in ${city.city.name}. Get enrolled in the best higher education institutions.`,
      type: "website",
      images: city.city.banner_img ? [{ url: city.city.banner_img }] : [],
    },
  };
}

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
            src={
              city.city.banner_img ||
              "https://pickmyuni-bucket.s3.ap-southeast-2.amazonaws.com/static/transfer_banner.webp"
            }
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
        <div className="bg-brand-primary py-24">
          <div className="container flex flex-col lg:flex-row-reverse items-center gap-8">
            <div className="flex-1">
              <h2 className="text-h1 text-white  leading-tight">
                How FindMyUni Helps You Get
                <span className="text-brand-secondary"> Admitted</span>
              </h2>
              <p className="text-body text-white mb-4">
                At FindMyUni, we make it easy for international students to
                discover, compare, and apply to the best universities in
                Melbourne Victoria. Our platform offers:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* High employability */}
                <div className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-md">
                  <div className="flex-shrink-0 w-10 h-10  flex items-center justify-center">
                    <ChartNoAxesCombined className="text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-gray-600">
                      Personalized university recommendation
                    </p>
                  </div>
                </div>

                {/* Strong migration pathway */}
                <div className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-md">
                  <div className="flex-shrink-0 w-10 h-10  flex items-center justify-center">
                    <FileTextIcon className="text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-gray-600">
                      Application and visa guidance
                    </p>
                  </div>
                </div>

                {/* Quality education */}
                <div className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-md">
                  <div className="flex-shrink-0 w-10 h-10  flex items-center justify-center">
                    <GraduationCapIcon className="text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-gray-600">
                      Expert counselling and student support
                    </p>
                  </div>
                </div>

                {/* Competitive salary */}
                <div className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-md">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                    <CircleDollarSign className="text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-gray-600">
                      Access to scholarships and funding opportunities
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-md">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                    <CircleDollarSign className="text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-gray-600">
                      Course and University Transfer Assistance
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-body text-white">
                <p>
                  Whether you're looking to explore the complete list of
                  universities in Melbourne or need help identifying the best
                  university in Melbourne for your field, we’re here to simplify
                  the process for you.
                </p>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="relative">
                <Image
                  src="https://pickmyuni-bucket.s3.ap-southeast-2.amazonaws.com/static/pr_path3.webp"
                  alt="Graduate student celebrating"
                  width={400}
                  height={500}
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* faqs section */}
        <div></div>
      </div>
    </>
  );
}
