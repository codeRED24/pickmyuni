import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DollarSign, RefreshCw, Globe, FileText, Link } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import CheckEligibility from "@/components/home/CheckEligibility";

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
    icon: <DollarSign />,
  },
  {
    title: "Easy Credit Transfer Process",
    icon: <RefreshCw />,
  },
  {
    title: "PR Pathway Courses",
    icon: <Globe />,
  },
  {
    title: "Expert Visa Support",
    icon: <FileText />,
  },
];

export default function CostComparisonSection() {
  return (
    <>
      <section className="bg-brand-secondary py-16">
        <div className="container mx-auto mb-12">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold mb-2">
                <span className="text-white">Compare Your Uni Costs</span>{" "}
              </h2>
            </div>
            <Button className="hidden md:block">See more savings</Button>
          </div>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th
                    colSpan={3}
                    className="bg-blue-100 p-4 text-left text-brand-primary font-medium border-b border-gray-200 w-1/2"
                  >
                    CURRENT UNIVERSITIES COST PER YEAR
                  </th>
                  <th
                    colSpan={4}
                    className="bg-orange-100 p-4 text-left text-brand-secondary font-medium border-b border-gray-200 w-1/2"
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
          <div className="min-w-screen sm:hidden flex justify-center mt-8">
            <Link href="/compare">
              <Button className="">See more savings</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="flex flex-col container mt-10">
        <div className="flex flex-col md:flex-row items-center gap-12 mt-12 justify-center">
          <div className="relative w-full md:w-1/3">
            <Image
              src={
                "https://pickmyuni-bucket.s3.ap-southeast-2.amazonaws.com/static/why_choose_us_image.webp"
              }
              alt="Student with laptop"
              width={0}
              height={0}
              sizes="(max-width: 768px) 300px, (max-width: 1024px) 350px, 400px"
              className="w-full h-auto max-w-sm mx-auto md:max-w-none"
            />
          </div>
          <div className="flex flex-col md:w-2/3">
            <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
              <span className="text-brand-primary">Why Choose</span>{" "}
              <br className="md:hidden" />
              <span className="text-brand-secondary">PickMyUni</span>
            </h2>
            <p className="text-brand-primary mb-8 font-normal text-center md:text-left">
              We’ve helped{" "}
              <span className="font-bold">1000+ international students</span>{" "}
              successfully transfer and save money on education in Australia.”
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index}>
                  <Card className="flex items-start">
                    <CardContent className="flex gap-2">
                      <div className="text-brand-secondary">{benefit.icon}</div>
                      <h3 className="font-bold text-brand-primary">
                        {benefit.title}
                      </h3>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
        <CheckEligibility />
      </section>
    </>
  );
}
