import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Student from "@/public/student-laptop.svg";
import { DollarSign, RefreshCw, Globe, FileText } from "lucide-react";

const costData = [
  {
    currentUni: "University of Sydney",
    currentCourse: "MBA",
    currentFee: "$42,000",
    suggestedUni: "Western Sydney University",
    suggestedCourse: "MBA",
    suggestedFee: "$32,000",
    savings: "$10,000",
  },
  {
    currentUni: "University of Melbourne",
    currentCourse: "Engineering",
    currentFee: "$45,000",
    suggestedUni: "RMIT University",
    suggestedCourse: "Engineering",
    suggestedFee: "$38,000",
    savings: "$7,000",
  },
  {
    currentUni: "Australian National University",
    currentCourse: "Computer Science",
    currentFee: "$40,000",
    suggestedUni: "University of Technology Sydney",
    suggestedCourse: "Computer Science",
    suggestedFee: "$35,000",
    savings: "$5,000",
  },
  {
    currentUni: "Monash University",
    currentCourse: "Business",
    currentFee: "$38,000",
    suggestedUni: "Deakin University",
    suggestedCourse: "Business",
    suggestedFee: "$32,000",
    savings: "$6,000",
  },
  {
    currentUni: "University of Queensland",
    currentCourse: "Medicine",
    currentFee: "$50,000",
    suggestedUni: "Griffith University",
    suggestedCourse: "Medicine",
    suggestedFee: "$42,000",
    savings: "$8,000",
  },
];

const benefits = [
  {
    title: "Save on Tuition Fees",
    description:
      "Our experts help you find universities with similar accreditation but significantly lower tuition fees.",
    icon: <DollarSign />,
  },
  {
    title: "Easy Credit Transfer Process",
    description:
      "We handle all paperwork and negotiations to ensure maximum credits transfer from your current institution.",
    icon: <RefreshCw />,
  },
  {
    title: "PR Pathway Courses",
    description:
      "We identify courses that qualify for post-study work visas and permanent residency pathways.",
    icon: <Globe />,
  },
  {
    title: "Expert Visa Support",
    description:
      "Our registered migration agents provide end-to-end visa assistance for your transfer process.",
    icon: <FileText />,
  },
];

export default function CostComparisonSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold mb-2">
                <span className="text-blue-800">Compare Your Uni</span>{" "}
                <span className="text-orange-500">Costs</span>
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                tincidunt placerat mollis, in interdum est non.
              </p>
            </div>
            <Button>See more savings</Button>
          </div>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th
                    colSpan={3}
                    className="bg-blue-100 p-4 text-left text-blue-800 font-medium border-b border-gray-200 w-1/2"
                  >
                    CURRENT UNIVERSITIES COST PER YEAR
                  </th>
                  <th
                    colSpan={4}
                    className="bg-orange-100 p-4 text-left text-orange-500 font-medium border-b border-gray-200 w-1/2"
                  >
                    UNIVERSITIES SUGGESTION FOR COST SAVING
                  </th>
                </tr>
                <tr className="bg-gray-50">
                  <th className="p-4 text-left text-gray-600 border-b border-gray-200">
                    Current Uni
                  </th>
                  <th className="p-4 text-left text-gray-600 border-b border-gray-200">
                    Course
                  </th>
                  <th className="p-4 text-left text-gray-600 border-b border-gray-200">
                    Course Fee
                  </th>
                  <th className="p-4 text-left text-gray-600 border-b border-gray-200">
                    Suggested Uni
                  </th>
                  <th className="p-4 text-left text-gray-600 border-b border-gray-200">
                    Course
                  </th>
                  <th className="p-4 text-left text-gray-600 border-b border-gray-200">
                    Course Fee
                  </th>
                  <th className="p-4 text-left text-green-600 font-bold border-b border-gray-200">
                    Savings
                  </th>
                </tr>
              </thead>
              <tbody>
                {costData.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="p-4 border-t">{row.currentUni}</td>
                    <td className="p-4 border-t">{row.currentCourse}</td>
                    <td className="p-4 border-t">{row.currentFee}</td>
                    <td className="p-4 border-t">{row.suggestedUni}</td>
                    <td className="p-4 border-t">{row.suggestedCourse}</td>
                    <td className="p-4 border-t">{row.suggestedFee}</td>
                    <td className="p-4 border-t text-green-600 font-bold">
                      {row.savings}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src={Student}
                alt="Student with laptop"
                width={400}
                height={300}
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-blue-800">Why Choose</span>{" "}
              <span className="text-orange-500">PickMyUni</span>
            </h2>
            <p className="text-gray-600 mb-8">
              We&apos;re here to help you find the best university for your and
              save money on education in Australia.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index}>
                  <div className="flex items-start">
                    <div className="mr-4 bg-gray-100 p-2 rounded-full">
                      {benefit.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-blue-800">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                    <ChevronRight className="text-orange-500" />
                  </div>
                  {index < benefits.length - 1 && (
                    <div className="border-t border-gray-200 my-4"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 mb-16 bg-[#FAF4F0] rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-blue-800 mb-2">
              Check Eligibility for Admission
            </h3>
          </div>
          <div className="mt-4 md:mt-0 max-h-10 flex items-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Check Now
            </Button>
            <Image
              src="/logo.svg"
              alt="Graduation cap"
              width={150}
              height={150}
              className="ml-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
