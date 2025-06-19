import Image from "next/image";
import { Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

export default function ComaprisonComponent() {
  const benefits = [
    {
      title: "Find the Best Fit for Your Goals",
      description:
        "Choose a university that aligns with your goals and future prospects.",
    },
    {
      title: "Understand Tuition Fees & Costs",
      description:
        "Compare university fees, tuition, scholarships & living costs to budget smartly.",
    },
    {
      title: "Check Course Quality & Recognition",
      description: "Pick accredited programs with strong industry recognition.",
    },
    {
      title: "Explore Post-Graduation Opportunities",
      description: "Find universities with top placements & industry links.",
    },
    {
      title: "Assess Campus Life & Student Support",
      description: "Ensure a welcoming campus with great support services.",
    },
    {
      title: "Location & Lifestyle Considerations",
      description:
        "City, coast, or countryside—choose what suits your lifestyle.",
    },
    {
      title: "Visa & PR Pathways",
      description: "Explore visa options and permanent residency pathways.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 lg:h-96">
        <Image
          src="/compare.svg"
          alt="Library with books on shelves"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Compare Universities in Australia
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">
            Find the Best{" "}
            <span className="text-orange-500">University for You</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Whether it&apos;s a change in career interests, difficulty with the
            current course, or a desire to move to a better suited university,
            switching University in Australia is possible—but the process can be
            confusing. That&apos;s where PickMyUni comes in! Choosing the right
            university is a big decision, we&apos;re here to make it easier.
            Compare universities and find the best fit for your budget,
            preferred courses, career goals, and lifestyle.
          </p>
        </div>

        {/* Comparison Form */}
        <div className="p-6 md:p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* First University */}
            <div className="space-y-4">
              <div className="relative">
                <Input
                  placeholder="Enter name of university"
                  className="pl-4 pr-10 h-12"
                />
                <Search className="absolute right-3 top-3 h-6 w-6 text-gray-400" />
              </div>
              <Select>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select Course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="medicine">Medicine</SelectItem>
                  <SelectItem value="arts">Arts</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Second University */}
            <div className="space-y-4">
              <div className="relative">
                <Input
                  placeholder="Enter name of university"
                  className="pl-4 pr-10 h-12"
                />
                <Search className="absolute right-3 top-3 h-6 w-6 text-gray-400" />
              </div>
              <Select>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select Course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="medicine">Medicine</SelectItem>
                  <SelectItem value="arts">Arts</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <Button variant="outline" className="h-12 px-6">
              <Plus className="w-4 h-4 mr-2" />
              Add Up To 2 More Uni
            </Button>
            <Button className="h-12 px-8 bg-blue-600 hover:bg-blue-700">
              Compare Now
            </Button>
          </div>
        </div>

        <hr className="border-gray-200 mt-8 mb-16" />

        {/* Key Benefits Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-blue-600 mb-12">
            Key Benefits of Comparing Universities
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            return (
              <Card key={index} className="p-6 border-0 shadow-sm">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-full mb-4">
                    <Image
                      src={`/benefit${index + 1}.svg`}
                      width={70}
                      height={70}
                      alt="Icon"
                      loading="lazy"
                      quality={25}
                    />
                  </div>
                  <h4 className="font-bold text-blue-600 mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      <section className="mt-16 bg-orange-500">
        <div className="container mx-auto px-4 py-12 lg:py-16 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Compare. Choose. Succeed
          </h1>
          <Button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-md font-medium flex items-center">
            Start Your University Search Today!{" "}
            <Image
              src="/logo-button.svg"
              alt="Icon"
              width={40}
              height={40}
              className="ml-2"
            />
          </Button>
        </div>
      </section>
    </div>
  );
}
