import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-brand-primary text-white relative overflow-hidden">
      <Image
        src="https://pickmyuni-bucket.s3.ap-southeast-2.amazonaws.com/static/home_banner.webp"
        alt="University campus"
        fill
        priority
        className="object-cover"
        fetchPriority="high"
      />
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="z-10 py-10">
            <h1 className="font-anton text-4xl sm:text-[53px] sm:leading-[60px] mb-4 max-w-screen-sm">
              TRANSFER TO A BETTER UNI IN AUSTRALIA -{" "}
              <span className="text-yellow-400">
                HASSLE-FREE, AFFORDABLE, FAST.
              </span>
            </h1>
            <p className="font-plus_jakarta text-sm leading-6 sm:text-lg sm:leading-9 mb-6">
              Struggling with high fees or course dissatisfaction? <br />
              We&apos;ll help you transfer to the right university.
            </p>
            <Link href="/compare">
              <Button
                className="flex items-center"
                variant={"secondary"}
                size={"lg"}
              >
                Compare University
                <Image
                  src="/logo-button.svg"
                  alt="Icon"
                  width={50}
                  height={50}
                  className="-ml-2 w-12 h-12"
                  priority
                />
              </Button>
            </Link>
          </div>
          <div className="relative pt-16">
            <Image
              src="https://pickmyuni-bucket.s3.ap-southeast-2.amazonaws.com/static/student_image.webp"
              alt="Student with card"
              width={450}
              height={800}
              className="relative z-10"
              priority
              quality={55}
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
