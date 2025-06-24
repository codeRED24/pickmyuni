import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DollarSign, RefreshCw, Globe, FileText } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CheckEligibility from "@/components/home/CheckEligibility";
import CitiesSection from "@/components/home/cities";
import Link from "next/link";

const costData = [
  {
    currentUni: "University of Sydney",
    currentCourse: "MBA",
    currentFee: "AUD 57,200",
    suggestedUni: "UBSS",
    suggestedCourse: "MBA",
    suggestedFee: "AUD 28,728",
    savings: "AUD 28,472",
  },
  {
    currentUni: "University of Melbourne",
    currentCourse: "Master of IT",
    currentFee: "AUD 58,976",
    suggestedUni: "Apex Institute of Higher Education",
    suggestedCourse: "Master of IT",
    suggestedFee: "AUD 31,400",
    savings: "AUD 27,576",
  },
  {
    currentUni: "The University of Melbourne",
    currentCourse: "Master of Early Childhood",
    currentFee: "AUD 126,751",
    suggestedUni: "Southern Cross University",
    suggestedCourse: "Master of Early Childhood",
    suggestedFee: "AUD 50,000",
    savings: "AUD 76,751",
  },
  {
    currentUni: "Deakin University",
    currentCourse: "Master of Engineering",
    currentFee: "AUD 92,216",
    suggestedUni: "Southern Cross University",
    suggestedCourse: "Master of Engineering",
    suggestedFee: "AUD 50,000",
    savings: "AUD 42,216",
  },
  {
    currentUni: "Southern Cross Education Institute",
    currentCourse: "Bachelor of Community Services",
    currentFee: "AUD 94,800",
    suggestedUni: "Acknowledge Education",
    suggestedCourse: "Bachelor of Community Services",
    suggestedFee: "AUD 54,200",
    savings: "AUD 40,600",
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
          <div className="flex flex-row justify-center md:justify-between">
            <h2 className="text-3xl font-bold mb-2 text-center md:text-start text-white">
              Compare Your Uni Costs
            </h2>
            <Link href="/compare">
              <Button className="hidden md:block">See more savings</Button>
            </Link>
          </div>

          <div className="mt-8 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead
                    colSpan={3}
                    className="text-h3 bg-blue-100 text-brand-primary border-x-2 border-b-2 border-[#FF882E] text-center"
                  >
                    CURRENT UNIVERSITIES COST PER YEAR
                  </TableHead>
                  <TableHead
                    colSpan={4}
                    className="text-h3 bg-orange-100 text-brand-secondary border-x-2 border-b-2 border-[#FF882E] text-center"
                  >
                    UNIVERSITIES SUGGESTION FOR COST SAVING
                  </TableHead>
                </TableRow>
                <TableRow>
                  <TableHead className="text-h4 bg-blue-100 text-gray-600 border-x-2 border-[#ff882e]">
                    Current Uni
                  </TableHead>
                  <TableHead className="text-h4 bg-blue-100 text-gray-600 border-x-2 border-[#ff882e]">
                    Course
                  </TableHead>
                  <TableHead className="text-h4 bg-blue-100 text-gray-600 border-x-2 border-[#ff882e]">
                    Course Fee
                  </TableHead>
                  <TableHead className="text-h4 bg-orange-100 text-gray-600 border-x-2 border-[#ff882e]">
                    Suggested Uni
                  </TableHead>
                  <TableHead className="text-h4 bg-orange-100 text-gray-600 border-x-2 border-[#ff882e]">
                    Course
                  </TableHead>
                  <TableHead className="text-h4 bg-orange-100 text-gray-600 border-x-2 border-[#ff882e]">
                    Course Fee
                  </TableHead>
                  <TableHead className="text-h4 bg-orange-100 text-green-600 font-bold border-x-2 border-[#ff882e]">
                    Savings
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {costData.map((row, index) => (
                  <TableRow
                    key={index}
                    className={`text-h4 hover:bg-gray-50 leading-tight ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <TableCell className="border-x-2 border-[#ff882e]">
                      {row.currentUni}
                    </TableCell>
                    <TableCell className="border-x-2 border-[#ff882e]">
                      {row.currentCourse}
                    </TableCell>
                    <TableCell className="border-x-2 border-[#ff882e]">
                      {row.currentFee}
                    </TableCell>
                    <TableCell className="border-x-2 border-[#ff882e]">
                      {row.suggestedUni}
                    </TableCell>
                    <TableCell className="border-x-2 border-[#ff882e]">
                      {row.suggestedCourse}
                    </TableCell>
                    <TableCell className="border-x-2 border-[#ff882e]">
                      {row.suggestedFee}
                    </TableCell>
                    <TableCell className="border-x-2 border-[#ff882e] text-green-600 font-bold">
                      {row.savings}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex justify-center items-center mt-8">
            <Link href="/compare">
              <Button className="md:hidden">See more savings</Button>
            </Link>
          </div>
        </div>
      </section>

      <CitiesSection />

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
