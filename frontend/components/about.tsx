import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const whatWeDoData = [
  {
    title: "University & Course Comparisons",
    description:
      "We make it easy to compare universities and courses across Australia, so you can find the perfect fit for your goals and budget.",
  },
  {
    title: "Verified Student Reviews",
    description:
      "Get real opinions and experiences from current and past students, giving you a genuine look at life on campus.",
  },
  {
    title: "Scholarship Opportunities",
    description:
      "Explore scholarships that match your situation, helping you fund your studies and achieve your dreams.",
  },
  {
    title: "QnA Support",
    description:
      "Have questions? Our expert team is here to answer them and guide you at every step.",
  },
  {
    title: "Transfer Service",
    description:
      "Already studying but thinking of switching courses or universities? We specialise in helping students transfer seamlessly and find the right institution for their future.",
  },
  {
    title: "Visa Services",
    description:
      "No matter where you are in your education journey, PickMyUni is your reliable partner every step of the way.",
  },
];

export default function AboutPage() {
  return (
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
          <div className="container mx-auto px-4 pb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Find the Perfect University for Your Future{" "}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-primary">
            About PickMyUni{" "}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Australia’s trusted platform for comparing universities, courses,
            and scholarships, designed to help you find the right fit for your
            future. Join thousands of students using PickMyUni to make confident
            decisions about their education.
          </p>
          <Button variant={"secondary"}>Explore Universities</Button>
        </div>

        {/* Who we are Section */}
        <section className="mt-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">
                Who We Are
              </h2>
              <p className="text-gray-600 mb-4">
                PickMyUni is your trusted Australian-based platform dedicated to
                helping domestic and international students make the best
                decisions for their education. We provide easy-to-use university
                comparisons, real student reviews, and detailed information
                about courses, fees, scholarships, and more.
              </p>
              <p className="text-gray-600 mt-6">
                Our team also specialises in university transfer services to
                help students switch to their ideal course or institution with
                confidence. And for international students, we provide reliable
                visa services to make studying in Australia smooth and
                hassle-free. At PickMyUni, it’s all about putting students
                first—always.
              </p>
            </div>
            <div className="md:w-1/3">
              {/* <Image
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
                alt="Graduate looking at an audience"
                width={500}
                height={350}
                className="rounded-lg shadow-lg object-cover w-full"
              /> */}
            </div>
          </div>
        </section>

        {/* our mission section */}
        <section className="mt-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <Card className="text-center p-6 border-0 shadow-sm bg-[#F6F6F7]">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image
                    src="/logo-button.svg"
                    alt="Icon"
                    width={40}
                    height={40}
                    className="ml-2"
                  />
                </div>
                <h4 className="font-semibold text-blue-600 mb-3">
                  Our Mission
                </h4>
                <p className="text-gray-600 text-sm">
                  At PickMyUni, our mission is to provide you with the best
                  university search experience. We strive to make the process of
                  comparing universities and choosing the right fit for your
                  future as easy and stress-free as possible.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-0 shadow-sm bg-[#F6F6F7]">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image
                    src="/logo-button.svg"
                    alt="Icon"
                    width={40}
                    height={40}
                    className="ml-2"
                  />
                </div>
                <h4 className="font-semibold text-blue-600 mb-3">Our Vision</h4>
                <p className="text-gray-600 text-sm">
                  At PickMyUni, our vision is to become the go-to platform for
                  students looking to find the perfect university for their
                  future. We believe that every student deserves access to the
                  best university experience, and we are committed to making it
                  easy and stress-free.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* what we do section */}
        <section className="mt-20 flex flex-col gap-12">
          <div className="">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-6 text-brand-primary">
              What We Do
            </h2>
            <p className="text-center text-gray-600 text-lg leading-relaxed">
              At PickMyUni, we’re committed to providing students with
              everything they need to make the best decisions for their future.
              Here’s how we help:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeDoData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 bg-gray-50 rounded-xl p-6 items-start shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center rounded-full bg-brand-secondary text-white font-bold text-lg">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-brand-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <h2 className="text-center font-base text-lg text-gray-600 italic mb-12">
        No matter where you are in your education journey, PickMyUni is your
        reliable partner every step of the way.
      </h2>
    </div>
  );
}
