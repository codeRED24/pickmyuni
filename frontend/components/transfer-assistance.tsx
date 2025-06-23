import Image from "next/image";

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
    name: "Get Your Student Visa Updated",
    Description:
      "If you’re an international student, you may need to update your visa details after transferring.",
  },
];

const faqData = [
  { question: "How do I transfer to another university in Australia?" },
  { question: "Can you transfer from one university to another in Australia?" },
  { question: "What is a good GPA to have to transfer?" },
  { question: "Can I transfer colleges in my 2nd year?" },
  { question: "Can I change universities after my 1st year?" },
  { question: "Can international students change colleges in Australia?" },
  { question: "Which universities in Australia accept credit transfers?" },
  { question: "Can you change universities after getting a student visa?" },
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
      "Our advisors assist in finding the best university and course that match your academic and career goals.",
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
          sizes="100vw"
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
                quality={75}
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
                you the flexibility to move if your current institution isn’t
                the right fit. You may choose to transfer due to various
                reasons, such as a change in academic interests, relocation, or
                a preference for a different university environment. Some of the
                top universities in Australia that accept transfer students
                include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>The University of Melbourne</li>
                <li>The University of Sydney</li>
                <li>Monash University</li>
                <li>The University of Queensland</li>
                <li>The University of New South Wales (UNSW)</li>
                <li>RMIT University</li>
                <li>Deakin University</li>
              </ul>
            </div>
            <div className="md:w-1/3">
              <Image
                src="https://pickmyuni-bucket.s3.ap-southeast-2.amazonaws.com/static/transfer_2.webp"
                alt="Sydney Opera House at sunset"
                width={500}
                height={350}
                className="rounded-lg shadow-lg object-cover w-full"
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
                quality={75}
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
                    Ensure your new university qualifies for a streamlined
                    student visa; otherwise, you may need to cancel and reapply.
                  </span>
                </p>
                <p>
                  <span className="font-bold text-brand-primary">
                    2. Check Visa Implications:
                  </span>{" "}
                  <span className="text-gray-600">
                    Discuss your transfer plans to understand policies,
                    requirements, and next steps.
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
                quality={75}
                loading="lazy"
              />
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
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={75}
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
        <section className="mt-20 text-center bg-gray-50 py-12 rounded-lg">
          <h2 className="text-3xl font-bold text-brand-primary">
            Start Your Course Transfer{" "}
            <span className="text-brand-secondary">Today!</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            If you&apos;re considering transferring universities in Australia,
            PickMyUni is here to help you take the next step with confidence.
            Our dedicated team will ensure your course transfer process is
            hassle-free, allowing you to focus on your education and future.
          </p>
          <button className="mt-8 px-8 py-3 bg-white border-2 border-orange-500 text-brand-secondary font-semibold rounded-lg hover:bg-brand-secondary hover:text-white transition-colors">
            Get in touch with us today and make your university transfer journey
            smooth and successful!
          </button>
        </section>

        {/* FAQ Section */}
        <section className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-brand-primary mb-10">
            FAQs on University and Course Transfers in{" "}
            <span className="text-brand-secondary">Australia</span>
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <div className="flex justify-between items-center cursor-pointer">
                  <h3 className="text-lg text-gray-700">{faq.question}</h3>
                  <span className="text-2xl text-gray-500 font-light">+</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
