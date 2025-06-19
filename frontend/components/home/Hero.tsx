import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="bg-blue-800 text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="z-10 ">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              TRANSFER TO A BETTER UNI <br />
              IN AUSTRALIA -{" "}
              <span className="text-yellow-400">HASSLE-FREE,</span> <br />
              <span className="text-yellow-400">AFFORDABLE, FAST.</span>
            </h1>
            <p className="text-lg mb-6">
              Struggling with high fees or course dissatisfaction? <br />
              We&apos;ll help you transfer to the right university.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium flex items-center">
              Compare University
              <Image
                src="/logo-button.svg"
                alt="Icon"
                width={40}
                height={40}
                className="ml-2"
              />
            </Button>
          </div>
          <div className="relative pt-16 flex flex-col items-end pr-10">
            <div className="">
              <Image
                src="/hero-text.svg"
                alt="Student with card"
                width={150}
                height={100}
                className="relative z-10"
              />
              <Image
                src="/hero.svg"
                alt="Student with card"
                width={400}
                height={500}
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-0 bottom-0">
          <Image src="/hero-left.png" alt="Clock" width={170} height={235} />
        </div>
        <div className="absolute right-72 bottom-0">
          <Image src="/globe.png" alt="Clock" width={900} height={450} />
        </div>
        <div className="absolute right-0 bottom-0">
          <Image
            src="/hero-right.svg"
            alt="Notebook"
            width={170}
            height={235}
          />
        </div>
      </div>
    </section>
  );
}
