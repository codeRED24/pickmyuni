import { Card, CardContent } from "@/components/ui/card";

export default function PrApplicationSteps() {
  const steps = [
    {
      number: 1,
      title: "Choose a PR-listed course",
      description: "aligned with your skills and career goals.",
      position: "right",
    },
    {
      number: 2,
      title: "Apply for a Temporary Graduate Visa (Subclass 485)",
      description: "to gain relevant work experience.",
      position: "left",
    },
    {
      number: 3,
      title: "Meet the Australian study requirement",
      description:
        "(minimum of 2 years of study in a CRICOS registered course).",
      position: "right",
    },
    {
      number: 4,
      title: "Apply for PR through the General Skilled Migration (GSM) program",
      description: "if your occupation is on the skilled occupation list.",
      position: "left",
    },
    {
      number: 5,
      title: "Choose a PR-listed course",
      description: "aligned with your skills and career goals.",
      position: "right",
    },
  ];

  return (
    <div className="bg-orange-50 py-24">
      <div className="container w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-h1 text-blue-800 leading-tight px-4">
            How to Apply for PR After Completing{" "}
            <span className="text-orange-500">Your Course?</span>
          </h1>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connecting Line - Hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-orange-200 transform -translate-x-1/2 z-10"></div>

          {/* Mobile Connecting Line - Hidden on desktop */}
          <div className="lg:hidden absolute left-1/2 top-0 bottom-0 w-0.5 bg-orange-200 transform -translate-x-1/2 z-0"></div>

          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative flex flex-col lg:flex-row items-center justify-center"
              >
                {/* Desktop Layout */}
                <div className="hidden lg:flex w-full items-center">
                  {step.position === "left" ? (
                    <>
                      {/* Content on left */}
                      <div className="w-5/12 pr-8">
                        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 ml-auto max-w-md">
                          <CardContent className="p-6 text-left">
                            <h3 className="text-h2 text-gray-900 leading-tight">
                              {step.title}{" "}
                              <span className="text-gray-900 font-light">
                                {step.description}
                              </span>
                            </h3>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Circle in center */}
                      <div className="w-2/12 flex justify-center">
                        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg z-10 relative">
                          <span className="text-white font-bold text-2xl">
                            {step.number}
                          </span>
                        </div>
                      </div>

                      {/* Empty space on right */}
                      <div className="w-5/12"></div>
                    </>
                  ) : (
                    <>
                      {/* Empty space on left */}
                      <div className="w-5/12"></div>

                      {/* Circle in center */}
                      <div className="w-2/12 flex justify-center">
                        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg z-10 relative">
                          <span className="text-white font-bold text-2xl">
                            {step.number}
                          </span>
                        </div>
                      </div>

                      {/* Content on right */}
                      <div className="w-5/12 pl-8">
                        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 mr-auto max-w-md">
                          <CardContent className="p-6 text-left">
                            <h3 className="text-h2 text-gray-900 leading-tight">
                              {step.title}{" "}
                              <span className="text-gray-900 font-light">
                                {step.description}
                              </span>
                            </h3>
                          </CardContent>
                        </Card>
                      </div>
                    </>
                  )}
                </div>

                {/* Mobile/Tablet Layout */}

                <div className="flex lg:hidden flex-col items-center text-center max-w-md mx-auto">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg mb-4">
                    <span className="text-white font-bold text-xl sm:text-2xl">
                      {step.number}
                    </span>
                  </div>
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
                    <CardContent className="p-4 sm:p-6">
                      <h3 className="font-semibold text-gray-800 text-base sm:text-lg mb-2 leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
