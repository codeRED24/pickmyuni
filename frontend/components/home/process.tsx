import Image from "next/image";

const steps = [
  {
    number: 1,
    title: "STEP 1",
    description:
      "Search Your Desired Course\nBrowse a wide range of courses tailored for your learning goals",
    icon: "/s1.svg",
    position: "left",
  },
  {
    number: 2,
    title: "STEP 2",
    description:
      "View Course Details Compare course features, reviews, and select the best fit for you.",
    icon: "/s2.svg",
    position: "right",
  },
  {
    number: 3,
    title: "STEP 3",
    description:
      "Enroll Online Simple and secure online enrollment within minutes.",
    icon: "/s3.svg",
    position: "left",
  },
  {
    number: 4,
    title: "STEP 4",
    description:
      "Start Learning Access your course material and start learning anytime, anywhere.",
    icon: "/s4.svg",
    position: "right",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-16">
          <span className="text-blue-800">Our Process 4 Simple</span>{" "}
          <span className="text-orange-500">Steps</span>
        </h2>

        {/* Mobile Timeline (visible only on small screens) */}
        <div className="md:hidden relative mx-auto w-full">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative pl-12">
                {/* Timeline Dot */}
                <div className="absolute left-4 top-6 w-4 h-4 bg-orange-500 rounded-full transform -translate-x-1/2 z-10"></div>

                <div className="flex flex-col">
                  <h3 className="text-blue-800 font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-base md:text-xl font-extralight mb-4">
                    {step.description}
                  </p>
                  <div className="flex justify-center">
                    <Image
                      src={step.icon || "/placeholder.svg"}
                      alt={`Step ${step.number}`}
                      width={200}
                      height={152}
                      className="mx-auto"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Timeline (hidden on small screens) */}
        <div className="hidden md:block relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

          <div className="space-y-16 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-orange-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {step.position === "right" ? (
                    <>
                      <div className="flex flex-col md:pr-12 text-right">
                        <div className="flex flex-col items-end">
                          <h3 className="text-blue-800 font-bold mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 text-xl font-extralight max-w-md">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-start ml-10">
                        <Image
                          src={step.icon || "/placeholder.svg"}
                          alt={`Step ${step.number}`}
                          width={282}
                          height={214}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-end mr-10">
                        <Image
                          src={step.icon || "/placeholder.svg"}
                          alt={`Step ${step.number}`}
                          width={282}
                          height={214}
                        />
                      </div>
                      <div className="md:pl-12">
                        <div className="flex flex-col">
                          <h3 className="text-blue-800 font-bold mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 text-xl font-extralight max-w-md">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
