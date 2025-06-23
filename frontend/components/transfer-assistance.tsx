import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/radix-accordion";
import GetInTouch from "./GetInTouch";

const howToTransferData = [
  {
    name: "Check Transfer Policies",
    Description:
      "Each university has different requirements for accepting transfer students. Visit their official website to understand their policies.",
  },
  {
    name: "Assess Credit Transfer Eligibility",
    Description:
      "If you've already completed some units, check if they can be credited to your new course.",
  },
  {
    name: "Meet Academic Requirements",
    Description:
      "Universities typically assess your previous academic performance to determine eligibility.",
  },
  {
    name: "Prepare Supporting Documents",
    Description:
      "These may include academic transcripts, a statement of purpose, and letters of recommendation.",
  },
  {
    name: "Apply Through the University",
    Description:
      "Submit your application directly to the university through their admissions portal.",
  },
  {
    name: "Get Your Student Visa Updated (If Required)",
    Description:
      "If you’re an international student, you may need to update your visa details after transferring.",
  },
];

const faqData = [
  {
    question: "How do I transfer to another university in Australia?",
    answer: (
      <div>
        <p className="mb-3">
          Transferring to another university in Australia involves a few key
          steps:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>
            Research and shortlist universities that offer your desired course
          </li>
          <li>Check their transfer policies and credit recognition process</li>
          <li>Apply for admission and submit your academic transcripts</li>
          <li>
            If accepted, obtain a new Confirmation of Enrolment (CoE) (for
            international students)
          </li>
          <li>
            If you're on a student visa, inform the Department of Home Affairs
            about your transfer
          </li>
        </ul>
        <p className="font-medium">
          Our platform simplifies the transfer process by helping you find the
          right course and guiding you through each step.
        </p>
      </div>
    ),
  },
  {
    question: "Can you transfer from one university to another in Australia?",
    answer: (
      <div>
        <p>
          <strong>Yes</strong>, you can transfer from one university to another
          in Australia, provided you meet the eligibility criteria of your new
          institution.
        </p>
        <p className="mt-2">
          Each university has different transfer policies, so it's important to
          check:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Credit transfer options</li>
          <li>Entry requirements</li>
          <li>Visa implications (for international students)</li>
        </ul>
      </div>
    ),
  },
  {
    question: "What is a good GPA to have to transfer?",
    answer: (
      <div>
        <p className="mb-3">
          A good GPA for transfer depends on the university and course you're
          applying for. Generally:
        </p>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-brand-primary font-bold">•</span>
            <span>
              <strong>Competitive programs</strong> (e.g., medicine, law) may
              require a GPA of{" "}
              <strong className="text-brand-primary">6.0+</strong> (on a 7-point
              scale)
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-brand-primary font-bold">•</span>
            <span>
              <strong>General courses</strong> usually require a GPA of at least{" "}
              <strong className="text-brand-primary">4.0–5.0</strong>
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-brand-primary font-bold">•</span>
            <span>
              Some universities may consider students with{" "}
              <strong>lower GPAs</strong> based on work experience, portfolios,
              or other achievements
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    question: "Can I transfer colleges in my 2nd year?",
    answer: (
      <div>
        <p>
          <strong>Yes</strong>, many students transfer in their second year. If
          your new university offers credit transfer, you may be able to
          continue without losing much study time. Some courses have
          restrictions on transferring mid-program, so it's best to check with
          both your current and future institutions.
        </p>
      </div>
    ),
  },
  {
    question: "Can I change universities after my 1st year?",
    answer: (
      <div>
        <p>
          <strong>Absolutely!</strong> Changing universities after the first
          year is common, especially if you find a better-suited program or
          institution. You’ll need to apply for a transfer, check credit
          recognition, and ensure your visa (if applicable) allows the move.
        </p>
      </div>
    ),
  },
  {
    question: "Can international students change colleges in Australia?",
    answer: (
      <div>
        <p>
          Yes, international students can change colleges, but they must meet
          student visa requirements. If you have completed less than six months
          in your current program, you may need a release letter from your
          current institution. It's also important to ensure that your new
          course is CRICOS-registered.
        </p>
      </div>
    ),
  },
  {
    question: "Which universities in Australia accept credit transfers?",
    answer: (
      <div>
        <p className="mb-3">
          Most Australian universities accept credit transfers, but it depends
          on your previous studies, course structure, and institution
          agreements.
        </p>
        <p className="mb-2">
          <strong>
            Popular universities known for flexible credit transfer policies
            include:
          </strong>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 bg-brand-primary rounded-full"></span>
            <span>The University of Melbourne</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 bg-brand-primary rounded-full"></span>
            <span>Monash University</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 bg-brand-primary rounded-full"></span>
            <span>The University of Sydney</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 bg-brand-primary rounded-full"></span>
            <span>The Australian National University (ANU)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 bg-brand-primary rounded-full"></span>
            <span>The University of Queensland</span>
          </div>
        </div>
        <p className="font-medium">
          Our platform helps you check credit eligibility and transfer options.
        </p>
      </div>
    ),
  },
  {
    question: "Can you change universities after getting a student visa?",
    answer: (
      <div>
        <p>
          <strong>Yes</strong>, you can change universities after getting a
          student visa, but there are conditions:
        </p>
        <div className="mt-3 space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
              1
            </span>
            <span>
              If you haven't completed <strong>six months of study</strong> in
              your primary course, you may need a{" "}
              <strong>release letter</strong>
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
              2
            </span>
            <span>
              Your new course must be of the{" "}
              <strong>same or higher AQF level</strong> to avoid visa issues
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6  rounded-full flex items-center justify-center text-sm font-bold">
              3
            </span>
            <span>
              You must <strong>inform the Department of Home Affairs</strong>{" "}
              about the change
            </span>
          </div>
        </div>
      </div>
    ),
  },
];

const courseTransferHelp = [
  {
    title: "Assessing Eligibility:",
    description:
      "We help you understand the requirements for transferring universities and ensure a smooth application process.",
  },
  {
    title: "Choosing the Right University:",
    description:
      "Our advisors assist in finding the best university and course that match your academic and career goals.",
  },
  {
    title: "Application Assistance:",
    description:
      "We guide you in preparing and submitting all necessary documents for your transfer application.",
  },
  {
    title: "Credit Transfer Guidance:",
    description:
      "If eligible, we help you maximize the credits you've already earned so you don't have to start from scratch.",
  },
  {
    title: "Visa and Compliance Support:",
    description:
      "For international students, we ensure your visa status remains valid during and after the course transfer.",
  },
];

export default function TransferAssistance() {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] text-white">
        <Image
          src="https://pickmyuni-bucket.s3.ap-southeast-2.amazonaws.com/static/transfer_banner.webp"
          alt="University campus background"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto pb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              University and Course Transfer​ <br />
              Assistance in Australia{" "}
            </h1>
          </div>
        </div>
      </section>

      <main className="container mx-auto py-16 text-lg">
        <p className="text-gray-600">
          At PickMyUni, we understand that your academic journey is not always
          straightforward. Whether you wish to explore a new field of study,
          face challenges with your current program, or have other personal
          reasons, transferring universities in Australia can be a game-changer.
          Our expert team is here to guide you through every step of the course
          transfer process, making your transition smooth and stress-free.
        </p>

        {/* Why Transfer University? Section */}
        <section className="mt-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">
                Why Transfer{" "}
                <span className="text-brand-secondary">University?</span>
              </h2>
              <p className="text-gray-600 mb-4">
                Transferring to a university can happen due to academic or
                financial reasons. Students choose to transfer to a university
                for various reasons, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>A change in career interests or academic goals</li>
                <li>Better course options at another institution</li>
                <li>Financial Considerations</li>
                <li>Personal circumstances or relocation</li>
                <li>
                  Unsatisfactory academic experience at the current university
                </li>
              </ul>
              <p className="text-gray-600 mt-6">
                Regardless of the reason, PickMyUni provides personalized
                assistance to ensure your course transfer aligns with your
                aspirations.
              </p>
            </div>
            <div className="md:w-1/3">
              <Image
                src="https://pickmyuni-bucket.s3.ap-southeast-2.amazonaws.com/static/transfer_1.webp"
                alt="Graduate looking at an audience"
                width={750}
                height={420}
                className="rounded-lg shadow-lg object-cover w-full"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Universities Accept Transfer Section */}
        <section className="mt-20">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">
                Universities Accept Transfer &{" "}
                <span className="text-brand-secondary">Course Transfer</span>
              </h2>
              <p className="text-gray-600 mb-4">
                Many universities in Australia accept transfer students, giving
                you the flexibility to move if your current institution isn't
                the right fit. You may choose to transfer due to various
                reasons, such as a change in academic interests, relocation, or
                a preference for a different university environment. Some of the
                top universities in Australia that accept transfer students
                include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>The University of Melbourne</li>
                <li>The University of Sydney</li>
                <li>Monash Course Transfer</li>
                <li>The University of Queensland</li>
                <li>The University of New South Wales (UNSW)</li>
                <li>The University of New South Wales (UNSW)</li>
                <li>RMIT University</li>
                <li>Course Transfer Deakin University</li>
              </ul>
            </div>
            <div className="md:w-1/3">
              <Image
                src="https://pickmyuni-bucket.s3.ap-southeast-2.amazonaws.com/static/transfer_2.webp"
                alt="Sydney Opera House at sunset"
                width={500}
                height={350}
                className="rounded-lg shadow-lg object-cover w-full"
                loading="lazy"
              />
            </div>
          </div>
          <p className="text-center text-gray-600 mt-8 ">
            Each university has its own eligibility criteria, and your
            application may depend on your previous academic performance, the
            availability of seats, and the university’s credit transfer
            policies.
          </p>
        </section>

        {/* How to Transfer Section */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-brand-primary">
            How to Transfer from University{" "}
            <span className="text-brand-secondary">to University</span>?
          </h2>
          <p className="mt-4  mx-auto text-gray-600">
            If you are looking for how to transfer from one university to
            another in Australia, follow these essential steps:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-left">
            {howToTransferData.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 bg-gray-50 rounded-xl p-6 items-start shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-brand-secondary text-white font-bold text-lg">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-brand-primary mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.Description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How We Help with University Transfer Section */}
        <section className="mt-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-brand-primary mb-6">
                How We Help with University{" "}
                <span className="text-brand-secondary">Transfer?</span>
              </h2>
              <div className="space-y-4">
                <p>
                  <span className="font-bold text-brand-primary">
                    1. Meet with Your Student Advisor:
                  </span>{" "}
                  <span className="text-gray-600">
                    Discuss your transfer plans to understand policies,
                    requirements, and next steps.
                  </span>
                </p>
                <p>
                  <span className="font-bold text-brand-primary">
                    2. Check Visa Implications:
                  </span>{" "}
                  <span className="text-gray-600">
                    Ensure your new university qualifies for a streamlined
                    student visa; otherwise, you may need to cancel and reapply.
                  </span>
                </p>
                <p>
                  <span className="font-bold text-brand-primary">
                    3. Plan Financially:
                  </span>{" "}
                  <span className="text-gray-600">
                    Compare tuition fees and review deadlines to avoid
                    unexpected costs.
                  </span>
                </p>
                <p>
                  <span className="font-bold text-brand-primary">
                    4. Choose Wisely:
                  </span>{" "}
                  <span className="text-gray-600">
                    Research universities and programs to ensure they align with
                    your academic and career goals.
                  </span>
                </p>
                <p>
                  <span className="font-bold text-brand-primary">
                    5. Start the Transfer Process Early:
                  </span>{" "}
                  <span className="text-gray-600">
                    Acting promptly helps streamline the transition.
                  </span>
                </p>
                <p>
                  <span className="font-bold text-brand-primary">
                    6. Update Your Visa:
                  </span>{" "}
                  <span className="text-gray-600">
                    Submit your electronic Confirmation of Enrolment (eCoE) to
                    the Department of Home Affairs.
                  </span>
                </p>
              </div>
              <p className="text-gray-600  mt-6">
                Following these steps will ensure a smooth transfer to your new
                university in Australia. Stay informed and plan ahead for a
                hassle-free transition. Good luck!
              </p>
            </div>
            <div className="md:w-1/3">
              <Image
                src="https://pickmyuni-bucket.s3.ap-southeast-2.amazonaws.com/static/transfer_3.webp"
                alt="Student with an advisor"
                width={500}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Course Transfers Within the Same University Section */}
        <section className="mt-20">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">
                Course Transfers Within the{" "}
                <span className="text-brand-secondary">Same University</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Sometimes, students realize that their initial course choice
                isn't the best fit. Australian universities allow students to
                change their courses within the same institution, provided they
                meet the eligibility criteria.
              </p>

              <h3 className="text-xl font-bold text-brand-primary mb-4">
                How to Change Your Course?
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-brand-secondary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-primary mb-1">
                      Consult Your Academic Advisor
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Discuss your interest in switching courses and understand
                      the process.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-brand-secondary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-primary mb-1">
                      Check Eligibility & Course Prerequisites
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Some courses have specific entry requirements that you
                      must meet.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-brand-secondary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-primary mb-1">
                      Apply for an Internal Transfer
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Universities usually have a formal application process for
                      course transfers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-brand-secondary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-primary mb-1">
                      Credit Transfer Assessment
                    </h4>
                    <p className="text-gray-600 text-sm">
                      If you've completed relevant subjects, you may receive
                      credits for your new course.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-brand-secondary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-primary mb-1">
                      Confirm Your New Enrollment
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Once approved, complete any necessary formalities to
                      finalize your course transfer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Help with Course Transfer Section */}
        <section className="mt-20">
          <div className="flex flex-col md:flex-row items-center gap-12 mt-12">
            <div className="md:w-1/3">
              <Image
                src="https://pickmyuni-bucket.s3.ap-southeast-2.amazonaws.com/static/transfer_4.webp"
                alt="Graduation cap on books"
                width={500}
                height={400}
                className="rounded-lg w-full"
                loading="lazy"
              />
            </div>
            <div className="md:w-2/3 space-y-4">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">
                How We Help with Course{" "}
                <span className="text-brand-secondary">Transfer?</span>
              </h2>
              <p className="text-gray-600">
                Navigating the course transfer process can be overwhelming, but
                with PickMyUni, you get expert support in:
              </p>
              {courseTransferHelp.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-2.5 h-2.5 bg-brand-secondary rounded-full mt-1.5 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <span className="font-semibold text-brand-primary">
                      {item.title}
                    </span>{" "}
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 py-12">
          <h2 className="text-3xl font-bold text-brand-primary">
            Start Your Course Transfer{" "}
            <span className="text-brand-secondary">Today!</span>
          </h2>
          <p className="mt-4 text-gray-600">
            If you&apos;re considering transferring universities in Australia,
            PickMyUni is here to help you take the next step with confidence.
            Our dedicated team will ensure your course transfer process is
            hassle-free, allowing you to focus on your education and future.
          </p>

          <GetInTouch />
        </section>

        {/* FAQ Section */}
        <section className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-brand-primary mb-10">
            FAQs on University and Course Transfers in{" "}
            <span className="text-brand-secondary">Australia</span>
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-gray-800 hover:text-brand-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>
    </div>
  );
}
