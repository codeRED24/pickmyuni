import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const prcourses = [
  {
    fieldOfStudy: "Engineering",
    courseExamples:
      "Civil, Electrical, Mechanical, Software, Telecommunications",
    occupation:
      "Civil Engineer, Electrical Engineer, Mechanical Engineer, Software Engineer, Telecommunications Engineer",
    visaPathway: "Subclass 189, 190, 491",
  },
  {
    fieldOfStudy: "Health Sciences",
    courseExamples:
      "Nursing, Physiotherapy, Dentistry, Pharmacy, Occupational Therapy",
    occupation:
      "Registered Nurse, Physiotherapist, Dentist, Pharmacist, Occupational Therapist",
    visaPathway: "Subclass 189, 190, 491",
  },
  {
    fieldOfStudy: "Information Technology",
    courseExamples:
      "Software Development, Cyber Security, IT Business Analysis, Data Science",
    occupation:
      "Software Engineer, Systems Analyst, Data Analyst, Cybersecurity Analyst",
    visaPathway: "Subclass 189, 190, 491",
  },
  {
    fieldOfStudy: "Education",
    courseExamples:
      "Early Childhood, Secondary Teaching, Special Needs, Educational Leadership",
    occupation:
      "Early Childhood Teacher, Secondary Teacher, Special Needs Teacher, Educational Administrator",
    visaPathway: "Subclass 189, 190, 491",
  },
  {
    fieldOfStudy: "Accounting and Finance",
    courseExamples: "Accounting, Financial Planning, Auditing, Taxation",
    occupation: "Accountant, Financial Planner, Auditor, Tax Advisor",
    visaPathway: "Subclass 189, 190, 491",
  },
  {
    fieldOfStudy: "Trade",
    courseExamples: "Automotive Engineering, Electrical, Plumbing, Welding",
    occupation: "Electrician, Plumber, Welder, Automotive Technician",
    visaPathway: "Subclass 189, 190, 491",
  },
  {
    fieldOfStudy: "Agriculture and Environmental Science",
    courseExamples:
      "Agronomy, Environmental Science, Agricultural Management, Forestry",
    occupation:
      "Agronomist, Environmental Consultant, Agricultural Consultant, Forester",
    visaPathway: "Subclass 189, 190, 491",
  },
  {
    fieldOfStudy: "Construction and Built Environment",
    courseExamples:
      "Construction Project Management, Civil Construction, Urban Planning, Building Surveying",
    occupation:
      "Construction Manager, Civil Engineer, Urban Planner, Building Surveyor",
    visaPathway: "Subclass 189, 190, 491",
  },
  {
    fieldOfStudy: "Hospitality and Tourism",
    courseExamples: "Hotel Management, Culinary Arts, Event Management",
    occupation: "Chef, Hotel Manager, Event Coordinator",
    visaPathway: "Subclass 189, 190, 491",
  },
  {
    fieldOfStudy: "Social Work and Community Services",
    courseExamples: "Social Work, Welfare Services, Community Development",
    occupation: "Social Worker, Welfare Worker, Community Worker",
    visaPathway: "Subclass 189, 190, 491",
  },
  {
    fieldOfStudy: "Medical Science",
    courseExamples:
      "Medical Laboratory Science, Biomedical Science, Pathology, Genetics",
    occupation:
      "Medical Laboratory Scientist, Biotechnologist, Pathologist, Geneticist",
    visaPathway: "Subclass 189, 190, 491",
  },
  {
    fieldOfStudy: "Architecture and Design",
    courseExamples:
      "Architecture, Landscape Architecture, Interior Design, Urban Design",
    occupation:
      "Architect, Urban Planner, Interior Designer, Landscape Architect",
    visaPathway: "Subclass 189, 190, 491",
  },
  {
    fieldOfStudy: "Law and Legal Studies",
    courseExamples: "Law, Legal Studies, Criminal Justice",
    occupation: "Solicitor, Barrister, Legal Advisor",
    visaPathway: "Subclass 189, 190, 491",
  },
  {
    fieldOfStudy: "Creative Arts and Design",
    courseExamples:
      "Graphic Design, Fashion Design, Fine Arts, Film Production",
    occupation: "Graphic Designer, Fashion Designer, Animator, Film Producer",
    visaPathway: "Subclass 189, 190, 491",
  },
  {
    fieldOfStudy: "Science and Technology",
    courseExamples:
      "Biotechnology, Chemistry, Physics, Environmental Technology",
    occupation:
      "Biotechnologist, Chemist, Physicist, Environmental Technologist",
    visaPathway: "Subclass 189, 190, 491",
  },
  {
    fieldOfStudy: "Sports and Recreation",
    courseExamples: "Sports Management, Physical Education, Fitness Coaching",
    occupation: "Sports Coach, Physical Education Teacher, Recreation Manager",
    visaPathway: "Subclass 189, 190, 491",
  },
  {
    fieldOfStudy: "Hospital and Healthcare Management",
    courseExamples:
      "Health Administration, Public Health, Health Services Management",
    occupation: "Health Administrator, Public Health Manager",
    visaPathway: "Subclass 189, 190, 491",
  },
  {
    fieldOfStudy: "Dentistry and Oral Health",
    courseExamples: "Dentistry, Dental Surgery, Dental Technology",
    occupation: "Dentist, Dental Technician",
    visaPathway: "Subclass 189, 190, 491",
  },
];

function PRCoursesTable() {
  return (
    <div className="bg-background">
      <Table>
        <TableHeader>
          <TableRow className="text-white">
            <TableHead className="text-h3 bg-blue-800 border-x-2 border-white">
              Field of Study
            </TableHead>
            <TableHead className="text-h3 bg-blue-800 border-x-2 border-white">
              Course Examples
            </TableHead>
            <TableHead className="text-h3 bg-blue-800 border-x-2 border-white">
              Occupation
            </TableHead>
            <TableHead className="text-h3 bg-orange-500 border-x-2 border-white">
              Visa Pathway
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {prcourses.map((course, index) => (
            <TableRow
              className={`text-h4 leading-tight ${
                index % 2 === 0 ? "bg-[#F9F9F9]" : "bg-[#F0F0F0]"
              }`}
              key={index}
            >
              <TableCell className="border-x-2 border-white">
                {course.fieldOfStudy}
              </TableCell>
              <TableCell className="border-x-2 border-white">
                {course.courseExamples}
              </TableCell>
              <TableCell className="border-x-2 border-white">
                {course.occupation}
              </TableCell>
              <TableCell className="border-x-2 border-white">
                {course.visaPathway}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export { PRCoursesTable };
