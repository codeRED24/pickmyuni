import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import TestimonialsSection from "./home/testimonials";
import ContactFormWrapper from "@/components/form/contact-form-wrapper";

const whatWeDoData = [
  {
    title: "University & Course Comparisons",
    description:
      "We make it easy to compare universities and courses across Australia, so you can find the perfect fit for your goals and budget.",
    url: "https://pickmyuni-bucket.s3.ap-southeast-2.amazonaws.com/static/university_course_icon.webp",
  },
  {
    title: "Verified Student Reviews",
    description:
      "Get real opinions and experiences from current and past students, giving you a genuine look at life on campus.",
    url: "https://pickmyuni-bucket.s3.ap-southeast-2.amazonaws.com/static/verified_student_icon.webp",
  },
  {
    title: "Scholarship Opportunities",
    description:
      "Explore scholarships that match your situation, helping you fund your studies and achieve your dreams.",
    url: "https://pickmyuni-bucket.s3.ap-southeast-2.amazonaws.com/static/scholarships_opportunities_icon.webp",
  },
  {
    title: "QnA Support",
    description:
      "Have questions? Our expert team is here to answer them and guide you at every step.",
    url: "https://pickmyuni-bucket.s3.ap-southeast-2.amazonaws.com/static/qna_support_icon.webp",
  },
  {
    title: "Transfer Service",
    description:
      "Already studying but thinking of switching courses or universities? We specialise in helping students transfer seamlessly and find the right institution for their future.",
    url: "https://pickmyuni-bucket.s3.ap-southeast-2.amazonaws.com/static/transfer_service_icon.webp",
  },
  {
    title: "Visa Services",
    description:
      "No matter where you are in your education journey, PickMyUni is your reliable partner every step of the way.",
    url: "https://pickmyuni-bucket.s3.ap-southeast-2.amazonaws.com/static/visa_services.webp",
  },
];

const trustReasons = [
  {
    icon: "https://pickmyuni-bucket.s3.ap-southeast-2.amazonaws.com/static/power_track_icon.webp",
    title: "Proven Track Record",
    description:
      "We've helped thousands of students make informed choices, from first-year study plans to transferring to the perfect course.",
  },
  {
    icon: "https://pickmyuni-bucket.s3.ap-southeast-2.amazonaws.com/static/accurate_relaible_icon.webp",
    title: "Accurate and Reliable Data",
    description:
      "Our information is gathered directly from university websites and official government resources—no guesswork, just real facts.",
  },
  {
    icon: "https://pickmyuni-bucket.s3.ap-southeast-2.amazonaws.com/static/experience_team.webp",
    title: "Experienced Team",
    description:
      "Our advisors bring decades of experience in student support and university pathways, offering insights and answers you can rely on.",
  },
  {
    icon: "https://pickmyuni-bucket.s3.ap-southeast-2.amazonaws.com/static/student_first_approch_icon.webp",
    title: "Student-First Approach",
    description:
      "We’re not here to push one university over another. We’re here to help you find the right fit for you.",
  },
  {
    icon: "https://pickmyuni-bucket.s3.ap-southeast-2.amazonaws.com/static/transparent_support_icon.webp",
    title: "Transparent Support",
    description:
      "From course comparisons to visa advice, we’re upfront and honest about every step of the process—no hidden surprises.*",
  },
];

const AchievementsSection = () => (
  <section className="bg-brand-primary py-20 w-full">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-white text-4xl font-semibold mb-10">
        Achievements & Impact
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
        <div className="flex flex-col items-center">
          <div className="flex items-end">
            <span className="w-2 h-8 bg-[#5B7EA6] mr-1"></span>
            <span className="w-2 h-12 bg-[#FF8C22]"></span>
            <span className="text-3xl font-bold text-[#FF8C22] ml-2">500+</span>
          </div>
          <span className="text-white mt-2 text-base">Student Reviews</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-end">
            <span className="w-2 h-8 bg-[#5B7EA6] mr-1"></span>
            <span className="w-2 h-12 bg-[#FF8C22]"></span>
            <span className="text-3xl font-bold text-[#FF8C22] ml-2">100+</span>
          </div>
          <span className="text-white mt-2 text-base">
            Universities Covered
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-end">
            <span className="w-2 h-8 bg-[#5B7EA6] mr-1"></span>
            <span className="w-2 h-12 bg-[#FF8C22]"></span>
            <span className="text-3xl font-bold text-[#FF8C22] ml-2">200+</span>
          </div>
          <span className="text-white mt-2 text-base">
            Scholarship Listings
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-end">
            <span className="w-2 h-8 bg-[#5B7EA6] mr-1"></span>
            <span className="w-2 h-12 bg-[#FF8C22]"></span>
            <span className="text-3xl font-bold text-[#FF8C22] ml-2">250+</span>
          </div>
          <span className="text-white mt-2 text-base">Student Transfers</span>
        </div>
      </div>
    </div>
  </section>
);

const ReadyToFindSection = () => (
  <section className="bg-[#FAF4F0] py-20 w-full">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-8">
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#335B82] mb-2">
          Ready to Find Your{" "}
          <span className="text-[#FF8C22]">Perfect University?</span>
        </h2>
        <p className="text-gray-700 mb-5 max-w-lg">
          With PickMyUni, you can explore trusted comparisons, read verified
          student reviews, and discover the right scholarships and courses for
          your goals. Take the first step towards your dream university today.
        </p>
        <Link href="/compare" passHref legacyBehavior>
          <a>
            <button className="bg-[#FF8C22] hover:bg-[#e67613] text-white font-semibold py-2 px-5 rounded transition-colors">
              Start Comparing Now
            </button>
          </a>
        </Link>
      </div>
      <div className="flex-1 flex justify-center">
        <Image
          src="/graduate.svg"
          alt="Graduate Illustration"
          width={180}
          height={180}
          className="object-contain"
        />
      </div>
    </div>
  </section>
);

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 lg:h-96">
        <Image
          src="https://pickmyuni-bucket.s3.ap-southeast-2.amazonaws.com/static/about_us_banner_desktop.webp"
          alt="Library with books on shelves"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto pb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Find the Perfect University for Your Future{" "}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex flex-col gap-2 py-20">
          <h2 className="text-4xl font-semibold  text-brand-primary">
            About PickMyUni{" "}
          </h2>
          <p className="text-gray-600 text-lg mb-2">
            Australia’s trusted platform for comparing universities, courses,
            and scholarships, designed to help you find the right fit for your
            future. Join thousands of students using PickMyUni to make confident
            decisions about their education.
          </p>
          <Link href={"/university"}>
            <Button variant={"secondary"}>Explore Universities</Button>
          </Link>
        </div>

        {/* Who we are Section */}
        <section className="my-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/3">
              <h2 className="text-4xl font-semibold text-brand-primary mb-4">
                Who We Are
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                PickMyUni is your trusted Australian-based platform dedicated to
                helping domestic and international students make the best
                decisions for their education. We provide easy-to-use university
                comparisons, real student reviews, and detailed information
                about courses, fees, scholarships, and more.
              </p>
              <p className="text-gray-600 mt-4 text-lg">
                Our team also specialises in university transfer services to
                help students switch to their ideal course or institution with
                confidence. And for international students, we provide reliable
                visa services to make studying in Australia smooth and
                hassle-free. At PickMyUni, it’s all about putting students
                first—always.
              </p>
            </div>
            <div className="md:w-1/3">
              <Image
                src="https://pickmyuni-bucket.s3.ap-southeast-2.amazonaws.com/static/who_we_are.webp"
                alt="Graduate looking at an audience"
                width={500}
                height={350}
                className="object-cover w-full"
              />
            </div>
          </div>
        </section>

        {/* our mission section */}
        <section className="my-32">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <Card className="sm:w-1/2 p-6 border-0 shadow-sm bg-[#F6F6F7]">
              <CardContent className="pt-6">
                <Image
                  src="https://pickmyuni-bucket.s3.ap-southeast-2.amazonaws.com/static/mission_icon.webp"
                  alt="Icon"
                  width={90}
                  height={90}
                />
                <h4 className="font-semibold text-4xl text-brand-primary  mb-3">
                  Our Mission
                </h4>
                <p className="text-gray-600 text-lg">
                  At PickMyUni, our mission is to provide you with the best
                  university search experience. We strive to make the process of
                  comparing universities and choosing the right fit for your
                  future as easy and stress-free as possible.
                </p>
              </CardContent>
            </Card>
            <Card className="sm:w-1/2 p-6 border-0 shadow-sm bg-[#F6F6F7]">
              <CardContent className="pt-6">
                <Image
                  src={
                    "https://pickmyuni-bucket.s3.ap-southeast-2.amazonaws.com/static/vision_icon.webp"
                  }
                  alt="Icon"
                  width={90}
                  height={90}
                />
                <h4 className="font-semibold text-4xl text-brand-primary mb-3">
                  Our Vision
                </h4>
                <p className="text-gray-600 text-lg">
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
            <h2 className="text-center text-4xl font-semibold mb-4 text-brand-primary">
              What We Do
            </h2>
            <p className="text-center text-gray-600 text-lg">
              At PickMyUni, we’re committed to providing students with
              everything they need to make the best decisions for their future.
              Here’s how we help:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeDoData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 bg-[#F6F6F7] rounded-xl p-6 items-start shadow-sm hover:shadow-md transition-shadow"
              >
                <Image src={item.url} alt="Icon" width={70} height={70} />
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
          <h2 className="text-center font-base text-lg text-gray-600 italic mb-12">
            No matter where you are in your education journey, PickMyUni is your
            reliable partner every step of the way.
          </h2>
        </section>

        {/* our expertise section */}
        <section className="my-20">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-2/3">
              <h2 className="text-4xl font-semibold text-brand-primary mb-4">
                Our Expertise &{" "}
                <span className="text-brand-secondary">Experience</span>
              </h2>
              <p className="text-gray-600 text-lg font-normal mb-4">
                We’re more than just a comparison tool—we’re a team of education
                experts, data specialists, and advisors dedicated to making your
                university journey as smooth as possible.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 text-lg">
                <li>
                  <span className="text-brand-primary font-bold">9+ Years</span>{" "}
                  of experience in education Consulting
                </li>
                <li>
                  <span className="text-brand-primary font-bold">10,000+</span>{" "}
                  course comparisons to date
                </li>
                <li>
                  <span className="text-brand-primary font-bold">
                    Real-time data
                  </span>{" "}
                  from universities and government sources
                </li>
                <li>
                  <span className="text-brand-primary font-bold">500+ </span>
                  student stories
                </li>
                <li>
                  <span className="text-brand-primary font-bold">
                    Trusted support
                  </span>{" "}
                  for both domestic and international students
                </li>
              </ul>
              <p className="text-gray-600 mt-4 text-lg">
                Each university has its own eligibility criteria, and your
                application may depend on your previous academic performance,
                the availability of seats, and the university’s credit transfer
                policies.
              </p>
            </div>
            <div className="md:w-1/3">
              <Image
                src="https://pickmyuni-bucket.s3.ap-southeast-2.amazonaws.com/static/who_we_are.webp"
                alt="Graduate looking at an audience"
                width={500}
                height={350}
                className="object-cover w-full"
              />
            </div>
          </div>
        </section>
      </div>
      {/* why trust pickmyuni section */}
      <section className="bg-brand-secondary py-12 px-2 md:px-0">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Why Trust PickMyUni?
          </h2>
          <p className="text-white mb-8">
            Here’s why students across Australia and around the world trust
            PickMyUni:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {trustReasons.slice(0, 3).map((reason, idx) => (
              <div
                key={reason.title}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start text-left min-h-[180px]"
              >
                <Image
                  src={reason.icon}
                  alt={reason.title}
                  width={70}
                  height={70}
                  className="mb-4"
                />
                <h3 className="font-semibold text-lg text-blue-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-700 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 max-w-3xl mx-auto">
            {trustReasons.slice(3).map((reason, idx) => (
              <div
                key={reason.title}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start text-left min-h-[180px]"
              >
                <Image
                  src={reason.icon}
                  alt={reason.title}
                  width={70}
                  height={70}
                  className="mb-4"
                />
                <h3 className="font-semibold text-lg text-blue-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-700 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
          <p className="text-white italic mt-4">
            At PickMyUni, we’re all about helping you make the best choice for
            your future—because your future matters.
          </p>
        </div>
      </section>

      <TestimonialsSection />
      <div className="bg-brand-primary">
        <hr className="max-w-6xl mx-auto" />
      </div>
      {/*achievements section */}
      <AchievementsSection />
      <ReadyToFindSection />

      <section className="container mx-auto py-20 w-full">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-brand-primary text-4xl font-semibold ">
            Have <span className="text-brand-secondary">Questions?</span>
          </h2>
          <p className="text-gray-700 my-2">
            We’d love to hear from you. Reach out to our team or drop your
            question below!
          </p>
        </div>
        <div className="container mx-auto mt-8">
          <ContactFormWrapper />
        </div>
      </section>
    </div>
  );
}
