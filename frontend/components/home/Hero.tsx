import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      className="bg-brand-primary text-white relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://pickmyuni-bucket.s3.ap-southeast-2.amazonaws.com/static/home_banner.webp)",
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="z-10 py-10">
            <h1 className="font-anton text-4xl md:text-6xl mb-4">
              TRANSFER TO A BETTER UNI <br />
              IN AUSTRALIA -{" "}
              <span className="text-yellow-400">HASSLE-FREE,</span> <br />
              <span className="text-yellow-400">AFFORDABLE, FAST.</span>
            </h1>
            <p className="font-plus_jakarta text-lg mb-6">
              Struggling with high fees or course dissatisfaction? <br />
              We&apos;ll help you transfer to the right university.
            </p>
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
                className="ml-2"
              />
            </Button>
          </div>
          <div className="relative pt-16">
            <Image
              src="https://pickmyuni-bucket.s3.ap-southeast-2.amazonaws.com/static/student_image.webp"
              alt="Student with card"
              width={450}
              height={800}
              className="relative z-10"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
