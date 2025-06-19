import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seed...");

  // Seed Countries
  console.log("📍 Seeding countries...");
  const countries = await Promise.all([
    prisma.country.upsert({
      where: { slug: "australia" },
      update: {},
      create: {
        name: "Australia",
        slug: "australia",
        score: 100,
        banner_img: "/images/countries/australia-banner.jpg",
        img1: "/images/countries/australia-1.jpg",
        img2: "/images/countries/australia-2.jpg",
      },
    }),
    prisma.country.upsert({
      where: { slug: "canada" },
      update: {},
      create: {
        name: "Canada",
        slug: "canada",
        score: 95,
        banner_img: "/images/countries/canada-banner.jpg",
        img1: "/images/countries/canada-1.jpg",
        img2: "/images/countries/canada-2.jpg",
      },
    }),
    prisma.country.upsert({
      where: { slug: "usa" },
      update: {},
      create: {
        name: "United States",
        slug: "usa",
        score: 98,
        banner_img: "/images/countries/usa-banner.jpg",
        img1: "/images/countries/usa-1.jpg",
        img2: "/images/countries/usa-2.jpg",
      },
    }),
    prisma.country.upsert({
      where: { slug: "uk" },
      update: {},
      create: {
        name: "United Kingdom",
        slug: "uk",
        score: 92,
        banner_img: "/images/countries/uk-banner.jpg",
        img1: "/images/countries/uk-1.jpg",
        img2: "/images/countries/uk-2.jpg",
      },
    }),
  ]);

  // Seed States
  console.log("🏛️ Seeding states...");
  const states = await Promise.all([
    // Australia States
    prisma.state.upsert({
      where: { slug: "new-south-wales" },
      update: {},
      create: {
        name: "New South Wales",
        slug: "new-south-wales",
        score: 95,
        banner_img: "/images/states/nsw-banner.jpg",
        img1: "/images/states/nsw-1.jpg",
        img2: "/images/states/nsw-2.jpg",
      },
    }),
    prisma.state.upsert({
      where: { slug: "victoria" },
      update: {},
      create: {
        name: "Victoria",
        slug: "victoria",
        score: 90,
        banner_img: "/images/states/vic-banner.jpg",
        img1: "/images/states/vic-1.jpg",
        img2: "/images/states/vic-2.jpg",
      },
    }),
    prisma.state.upsert({
      where: { slug: "queensland" },
      update: {},
      create: {
        name: "Queensland",
        slug: "queensland",
        score: 88,
        banner_img: "/images/states/qld-banner.jpg",
        img1: "/images/states/qld-1.jpg",
        img2: "/images/states/qld-2.jpg",
      },
    }),
    // Canada States/Provinces
    prisma.state.upsert({
      where: { slug: "ontario" },
      update: {},
      create: {
        name: "Ontario",
        slug: "ontario",
        score: 94,
        banner_img: "/images/states/ontario-banner.jpg",
        img1: "/images/states/ontario-1.jpg",
        img2: "/images/states/ontario-2.jpg",
      },
    }),
    prisma.state.upsert({
      where: { slug: "british-columbia" },
      update: {},
      create: {
        name: "British Columbia",
        slug: "british-columbia",
        score: 91,
        banner_img: "/images/states/bc-banner.jpg",
        img1: "/images/states/bc-1.jpg",
        img2: "/images/states/bc-2.jpg",
      },
    }),
  ]);

  // Seed Cities
  console.log("🏙️ Seeding cities...");
  const cities = await Promise.all([
    // Australian Cities
    prisma.city.upsert({
      where: { slug: "sydney" },
      update: {},
      create: {
        name: "Sydney",
        slug: "sydney",
        score: 100,
        banner_img: "/images/cities/sydney-banner.jpg",
        img1: "/images/cities/sydney-1.jpg",
        img2: "/images/cities/sydney-2.jpg",
        state_id: states.find((s) => s.slug === "new-south-wales")?.id,
        country_id: countries.find((c) => c.slug === "australia")?.id,
        content:
          "Sydney is Australia's largest city and a popular destination for international students.",
      },
    }),
    prisma.city.upsert({
      where: { slug: "melbourne" },
      update: {},
      create: {
        name: "Melbourne",
        slug: "melbourne",
        score: 95,
        banner_img: "/images/cities/melbourne-banner.jpg",
        img1: "/images/cities/melbourne-1.jpg",
        img2: "/images/cities/melbourne-2.jpg",
        state_id: states.find((s) => s.slug === "victoria")?.id,
        country_id: countries.find((c) => c.slug === "australia")?.id,
        content:
          "Melbourne is known for its cultural diversity and world-class universities.",
      },
    }),
    prisma.city.upsert({
      where: { slug: "brisbane" },
      update: {},
      create: {
        name: "Brisbane",
        slug: "brisbane",
        score: 88,
        banner_img: "/images/cities/brisbane-banner.jpg",
        img1: "/images/cities/brisbane-1.jpg",
        img2: "/images/cities/brisbane-2.jpg",
        state_id: states.find((s) => s.slug === "queensland")?.id,
        country_id: countries.find((c) => c.slug === "australia")?.id,
        content:
          "Brisbane offers a subtropical climate and excellent educational opportunities.",
      },
    }),
    // Canadian Cities
    prisma.city.upsert({
      where: { slug: "toronto" },
      update: {},
      create: {
        name: "Toronto",
        slug: "toronto",
        score: 96,
        banner_img: "/images/cities/toronto-banner.jpg",
        img1: "/images/cities/toronto-1.jpg",
        img2: "/images/cities/toronto-2.jpg",
        state_id: states.find((s) => s.slug === "ontario")?.id,
        country_id: countries.find((c) => c.slug === "canada")?.id,
        content:
          "Toronto is Canada's largest city and a major hub for international education.",
      },
    }),
    prisma.city.upsert({
      where: { slug: "vancouver" },
      update: {},
      create: {
        name: "Vancouver",
        slug: "vancouver",
        score: 93,
        banner_img: "/images/cities/vancouver-banner.jpg",
        img1: "/images/cities/vancouver-1.jpg",
        img2: "/images/cities/vancouver-2.jpg",
        state_id: states.find((s) => s.slug === "british-columbia")?.id,
        country_id: countries.find((c) => c.slug === "canada")?.id,
        content:
          "Vancouver combines natural beauty with world-class educational institutions.",
      },
    }),
  ]);

  // Seed Streams
  console.log("📚 Seeding streams...");
  const streams = await Promise.all([
    prisma.stream.upsert({
      where: { slug: "engineering" },
      update: {},
      create: {
        name: "Engineering",
        slug: "engineering",
        score: 100,
        banner_img: "/images/streams/engineering-banner.jpg",
        img1: "/images/streams/engineering-1.jpg",
        img2: "/images/streams/engineering-2.jpg",
      },
    }),
    prisma.stream.upsert({
      where: { slug: "business-management" },
      update: {},
      create: {
        name: "Business & Management",
        slug: "business-management",
        score: 95,
        banner_img: "/images/streams/business-banner.jpg",
        img1: "/images/streams/business-1.jpg",
        img2: "/images/streams/business-2.jpg",
      },
    }),
    prisma.stream.upsert({
      where: { slug: "computer-science" },
      update: {},
      create: {
        name: "Computer Science",
        slug: "computer-science",
        score: 98,
        banner_img: "/images/streams/cs-banner.jpg",
        img1: "/images/streams/cs-1.jpg",
        img2: "/images/streams/cs-2.jpg",
      },
    }),
    prisma.stream.upsert({
      where: { slug: "healthcare-medicine" },
      update: {},
      create: {
        name: "Healthcare & Medicine",
        slug: "healthcare-medicine",
        score: 92,
        banner_img: "/images/streams/medicine-banner.jpg",
        img1: "/images/streams/medicine-1.jpg",
        img2: "/images/streams/medicine-2.jpg",
      },
    }),
    prisma.stream.upsert({
      where: { slug: "arts-humanities" },
      update: {},
      create: {
        name: "Arts & Humanities",
        slug: "arts-humanities",
        score: 85,
        banner_img: "/images/streams/arts-banner.jpg",
        img1: "/images/streams/arts-1.jpg",
        img2: "/images/streams/arts-2.jpg",
      },
    }),
  ]);

  // Seed Courses
  console.log("🎓 Seeding courses...");
  const courses = await Promise.all([
    // Engineering Courses
    prisma.courses.upsert({
      where: { id: 1 },
      update: {},
      create: {
        course_name: "Bachelor of Engineering (Software)",
        duration_in_months: 48,
        rating: 4.5,
        score: 95,
        streamId: streams.find((s) => s.slug === "engineering")?.id || 1,
        banner_img: "/images/courses/software-eng-banner.jpg",
        img1: "/images/courses/software-eng-1.jpg",
        img2: "/images/courses/software-eng-2.jpg",
        meta_desc:
          "Comprehensive software engineering program covering modern development practices.",
        og_img: "/images/courses/software-eng-og.jpg",
      },
    }),
    prisma.courses.upsert({
      where: { id: 2 },
      update: {},
      create: {
        course_name: "Master of Business Administration",
        duration_in_months: 24,
        rating: 4.3,
        score: 90,
        streamId:
          streams.find((s) => s.slug === "business-management")?.id || 2,
        banner_img: "/images/courses/mba-banner.jpg",
        img1: "/images/courses/mba-1.jpg",
        img2: "/images/courses/mba-2.jpg",
        meta_desc: "World-class MBA program for future business leaders.",
        og_img: "/images/courses/mba-og.jpg",
      },
    }),
    prisma.courses.upsert({
      where: { id: 3 },
      update: {},
      create: {
        course_name: "Master of Computer Science",
        duration_in_months: 24,
        rating: 4.6,
        score: 98,
        streamId: streams.find((s) => s.slug === "computer-science")?.id || 3,
        banner_img: "/images/courses/mcs-banner.jpg",
        img1: "/images/courses/mcs-1.jpg",
        img2: "/images/courses/mcs-2.jpg",
        meta_desc:
          "Advanced computer science program with cutting-edge research opportunities.",
        og_img: "/images/courses/mcs-og.jpg",
      },
    }),
    prisma.courses.upsert({
      where: { id: 4 },
      update: {},
      create: {
        course_name: "Bachelor of Nursing",
        duration_in_months: 36,
        rating: 4.2,
        score: 88,
        streamId:
          streams.find((s) => s.slug === "healthcare-medicine")?.id || 4,
        banner_img: "/images/courses/nursing-banner.jpg",
        img1: "/images/courses/nursing-1.jpg",
        img2: "/images/courses/nursing-2.jpg",
        meta_desc:
          "Comprehensive nursing program preparing healthcare professionals.",
        og_img: "/images/courses/nursing-og.jpg",
      },
    }),
  ]);

  // Seed Colleges
  console.log("🏫 Seeding colleges...");
  const colleges = await Promise.all([
    // Australia - 20 colleges
    prisma.colleges.upsert({
      where: { slug: "university-of-sydney" },
      update: {},
      create: {
        college_name: "University of Sydney",
        address: "Camperdown NSW 2006, Australia",
        location: "Sydney, NSW",
        established: new Date("1850-01-01"),
        email: "info@sydney.edu.au",
        contact: "+61 2 9351 2222",
        logo_url: "/images/colleges/usyd-logo.png",
        bg_url: "/images/colleges/usyd-bg.jpg",
        media_url: JSON.stringify({
          videos: ["/videos/usyd-tour.mp4"],
          gallery: [
            "/images/colleges/usyd-1.jpg",
            "/images/colleges/usyd-2.jpg",
          ],
        }),
        rating: 4.5,
        score: 98,
        intake_start_date: new Date("2025-02-01"),
        pr_pathway: true,
        slug: "university-of-sydney",
        total_students: 73000,
        acceptance_rate: 0.3,
        international_student_rate: 0.47,
        brochure_url: "/brochures/usyd-brochure.pdf",
        avg_fees_in_aud: 45000,
        search_names: "USYD, Sydney University, University of Sydney",
        streamId: streams.find((s) => s.slug === "engineering")?.id || 1,
        cityId: cities.find((c) => c.slug === "sydney")?.id || 1,
        stateId: states.find((s) => s.slug === "new-south-wales")?.id || 1,
        countryId: countries.find((c) => c.slug === "australia")?.id || 1,
        meta_desc:
          "Australia's first university, established in 1850, offering world-class education.",
        og_img: "/images/colleges/usyd-og.jpg",
      },
    }),
    prisma.colleges.upsert({
      where: { slug: "university-of-melbourne" },
      update: {},
      create: {
        college_name: "University of Melbourne",
        address: "Parkville VIC 3010, Australia",
        location: "Melbourne, VIC",
        established: new Date("1853-01-01"),
        email: "info@unimelb.edu.au",
        contact: "+61 3 8344 4000",
        logo_url: "/images/colleges/unimelb-logo.png",
        bg_url: "/images/colleges/unimelb-bg.jpg",
        media_url: JSON.stringify({
          videos: ["/videos/unimelb-tour.mp4"],
          gallery: [
            "/images/colleges/unimelb-1.jpg",
            "/images/colleges/unimelb-2.jpg",
          ],
        }),
        rating: 4.6,
        score: 100,
        intake_start_date: new Date("2025-03-01"),
        pr_pathway: true,
        slug: "university-of-melbourne",
        total_students: 68000,
        acceptance_rate: 0.25,
        international_student_rate: 0.42,
        brochure_url: "/brochures/unimelb-brochure.pdf",
        avg_fees_in_aud: 48000,
        search_names: "UniMelb, Melbourne University, University of Melbourne",
        streamId: streams.find((s) => s.slug === "computer-science")?.id || 3,
        cityId: cities.find((c) => c.slug === "melbourne")?.id || 2,
        stateId: states.find((s) => s.slug === "victoria")?.id || 2,
        countryId: countries.find((c) => c.slug === "australia")?.id || 1,
        meta_desc:
          "Leading research university in Melbourne, consistently ranked among the world's best.",
        og_img: "/images/colleges/unimelb-og.jpg",
      },
    }),
    prisma.colleges.upsert({
      where: { slug: "australian-national-university" },
      update: {},
      create: {
        college_name: "Australian National University",
        address: "Acton ACT 2601, Australia",
        location: "Canberra, ACT",
        established: new Date("1946-08-01"),
        email: "info@anu.edu.au",
        contact: "+61 2 6125 5111",
        logo_url: "/images/colleges/anu-logo.png",
        bg_url: "/images/colleges/anu-bg.jpg",
        media_url: JSON.stringify({
          videos: ["/videos/anu-tour.mp4"],
          gallery: ["/images/colleges/anu-1.jpg", "/images/colleges/anu-2.jpg"],
        }),
        rating: 4.4,
        score: 95,
        intake_start_date: new Date("2025-02-01"),
        pr_pathway: true,
        slug: "australian-national-university",
        total_students: 25000,
        acceptance_rate: 0.35,
        international_student_rate: 0.42,
        brochure_url: "/brochures/anu-brochure.pdf",
        avg_fees_in_aud: 47000,
        search_names: "ANU, Australian National University",
        streamId: streams.find((s) => s.slug === "arts-humanities")?.id || 5,
        cityId: cities.find((c) => c.slug === "sydney")?.id || 1,
        stateId: states.find((s) => s.slug === "new-south-wales")?.id || 1,
        countryId: countries.find((c) => c.slug === "australia")?.id || 1,
        meta_desc:
          "Australia's leading research university located in the nation's capital.",
        og_img: "/images/colleges/anu-og.jpg",
      },
    }),
    prisma.colleges.upsert({
      where: { slug: "university-of-queensland" },
      update: {},
      create: {
        college_name: "University of Queensland",
        address: "St Lucia QLD 4072, Australia",
        location: "Brisbane, QLD",
        established: new Date("1909-12-10"),
        email: "info@uq.edu.au",
        contact: "+61 7 3365 1111",
        logo_url: "/images/colleges/uq-logo.png",
        bg_url: "/images/colleges/uq-bg.jpg",
        media_url: JSON.stringify({
          videos: ["/videos/uq-tour.mp4"],
          gallery: ["/images/colleges/uq-1.jpg", "/images/colleges/uq-2.jpg"],
        }),
        rating: 4.3,
        score: 92,
        intake_start_date: new Date("2025-02-01"),
        pr_pathway: true,
        slug: "university-of-queensland",
        total_students: 53000,
        acceptance_rate: 0.38,
        international_student_rate: 0.38,
        brochure_url: "/brochures/uq-brochure.pdf",
        avg_fees_in_aud: 43000,
        search_names: "UQ, University of Queensland",
        streamId:
          streams.find((s) => s.slug === "healthcare-medicine")?.id || 4,
        cityId: cities.find((c) => c.slug === "brisbane")?.id || 3,
        stateId: states.find((s) => s.slug === "queensland")?.id || 3,
        countryId: countries.find((c) => c.slug === "australia")?.id || 1,
        meta_desc:
          "One of Australia's premier research universities in Brisbane.",
        og_img: "/images/colleges/uq-og.jpg",
      },
    }),
    prisma.colleges.upsert({
      where: { slug: "monash-university" },
      update: {},
      create: {
        college_name: "Monash University",
        address: "Clayton VIC 3800, Australia",
        location: "Melbourne, VIC",
        established: new Date("1958-03-01"),
        email: "info@monash.edu",
        contact: "+61 3 9905 4000",
        logo_url: "/images/colleges/monash-logo.png",
        bg_url: "/images/colleges/monash-bg.jpg",
        media_url: JSON.stringify({
          videos: ["/videos/monash-tour.mp4"],
          gallery: [
            "/images/colleges/monash-1.jpg",
            "/images/colleges/monash-2.jpg",
          ],
        }),
        rating: 4.2,
        score: 89,
        intake_start_date: new Date("2025-03-01"),
        pr_pathway: true,
        slug: "monash-university",
        total_students: 80000,
        acceptance_rate: 0.4,
        international_student_rate: 0.44,
        brochure_url: "/brochures/monash-brochure.pdf",
        avg_fees_in_aud: 44000,
        search_names: "Monash, Monash University",
        streamId:
          streams.find((s) => s.slug === "business-management")?.id || 2,
        cityId: cities.find((c) => c.slug === "melbourne")?.id || 2,
        stateId: states.find((s) => s.slug === "victoria")?.id || 2,
        countryId: countries.find((c) => c.slug === "australia")?.id || 1,
        meta_desc:
          "Global university with campuses worldwide, strong in research and innovation.",
        og_img: "/images/colleges/monash-og.jpg",
      },
    }),
    prisma.colleges.upsert({
      where: { slug: "university-of-new-south-wales" },
      update: {},
      create: {
        college_name: "University of New South Wales",
        address: "Kensington NSW 2052, Australia",
        location: "Sydney, NSW",
        established: new Date("1949-03-01"),
        email: "info@unsw.edu.au",
        contact: "+61 2 9385 1000",
        logo_url: "/images/colleges/unsw-logo.png",
        bg_url: "/images/colleges/unsw-bg.jpg",
        media_url: JSON.stringify({
          videos: ["/videos/unsw-tour.mp4"],
          gallery: [
            "/images/colleges/unsw-1.jpg",
            "/images/colleges/unsw-2.jpg",
          ],
        }),
        rating: 4.4,
        score: 94,
        intake_start_date: new Date("2025-02-01"),
        pr_pathway: true,
        slug: "university-of-new-south-wales",
        total_students: 65000,
        acceptance_rate: 0.32,
        international_student_rate: 0.46,
        brochure_url: "/brochures/unsw-brochure.pdf",
        avg_fees_in_aud: 46000,
        search_names: "UNSW, University of New South Wales",
        streamId: streams.find((s) => s.slug === "engineering")?.id || 1,
        cityId: cities.find((c) => c.slug === "sydney")?.id || 1,
        stateId: states.find((s) => s.slug === "new-south-wales")?.id || 1,
        countryId: countries.find((c) => c.slug === "australia")?.id || 1,
        meta_desc:
          "Leading Australian university known for innovation and excellence.",
        og_img: "/images/colleges/unsw-og.jpg",
      },
    }),
    prisma.colleges.upsert({
      where: { slug: "university-of-western-australia" },
      update: {},
      create: {
        college_name: "University of Western Australia",
        address: "35 Stirling Hwy, Crawley WA 6009, Australia",
        location: "Perth, WA",
        established: new Date("1911-02-16"),
        email: "info@uwa.edu.au",
        contact: "+61 8 6488 6000",
        logo_url: "/images/colleges/uwa-logo.png",
        bg_url: "/images/colleges/uwa-bg.jpg",
        media_url: JSON.stringify({
          videos: ["/videos/uwa-tour.mp4"],
          gallery: ["/images/colleges/uwa-1.jpg", "/images/colleges/uwa-2.jpg"],
        }),
        rating: 4.1,
        score: 87,
        intake_start_date: new Date("2025-02-01"),
        pr_pathway: true,
        slug: "university-of-western-australia",
        total_students: 25000,
        acceptance_rate: 0.42,
        international_student_rate: 0.35,
        brochure_url: "/brochures/uwa-brochure.pdf",
        avg_fees_in_aud: 42000,
        search_names: "UWA, University of Western Australia",
        streamId:
          streams.find((s) => s.slug === "healthcare-medicine")?.id || 4,
        cityId: cities.find((c) => c.slug === "sydney")?.id || 1,
        stateId: states.find((s) => s.slug === "new-south-wales")?.id || 1,
        countryId: countries.find((c) => c.slug === "australia")?.id || 1,
        meta_desc:
          "Historic university in Perth with beautiful campus and strong research focus.",
        og_img: "/images/colleges/uwa-og.jpg",
      },
    }),

    // Canada - 15 colleges
    prisma.colleges.upsert({
      where: { slug: "university-of-toronto" },
      update: {},
      create: {
        college_name: "University of Toronto",
        address: "27 King's College Cir, Toronto, ON M5S 1A1, Canada",
        location: "Toronto, ON",
        established: new Date("1827-01-01"),
        email: "info@utoronto.ca",
        contact: "+1 416-978-2011",
        logo_url: "/images/colleges/uoft-logo.png",
        bg_url: "/images/colleges/uoft-bg.jpg",
        media_url: JSON.stringify({
          videos: ["/videos/uoft-tour.mp4"],
          gallery: [
            "/images/colleges/uoft-1.jpg",
            "/images/colleges/uoft-2.jpg",
          ],
        }),
        rating: 4.4,
        score: 96,
        intake_start_date: new Date("2025-09-01"),
        pr_pathway: true,
        slug: "university-of-toronto",
        total_students: 97000,
        acceptance_rate: 0.43,
        international_student_rate: 0.25,
        brochure_url: "/brochures/uoft-brochure.pdf",
        avg_fees_in_aud: 65000,
        search_names: "UofT, U of T, Toronto University, University of Toronto",
        streamId:
          streams.find((s) => s.slug === "business-management")?.id || 2,
        cityId: cities.find((c) => c.slug === "toronto")?.id || 4,
        stateId: states.find((s) => s.slug === "ontario")?.id || 4,
        countryId: countries.find((c) => c.slug === "canada")?.id || 2,
        meta_desc:
          "Canada's top university, offering exceptional academic programs and research opportunities.",
        og_img: "/images/colleges/uoft-og.jpg",
      },
    }),
    prisma.colleges.upsert({
      where: { slug: "university-of-british-columbia" },
      update: {},
      create: {
        college_name: "University of British Columbia",
        address: "2329 West Mall, Vancouver, BC V6T 1Z4, Canada",
        location: "Vancouver, BC",
        established: new Date("1908-04-01"),
        email: "info@ubc.ca",
        contact: "+1 604-822-2211",
        logo_url: "/images/colleges/ubc-logo.png",
        bg_url: "/images/colleges/ubc-bg.jpg",
        media_url: JSON.stringify({
          videos: ["/videos/ubc-tour.mp4"],
          gallery: ["/images/colleges/ubc-1.jpg", "/images/colleges/ubc-2.jpg"],
        }),
        rating: 4.3,
        score: 93,
        intake_start_date: new Date("2025-09-01"),
        pr_pathway: true,
        slug: "university-of-british-columbia",
        total_students: 68000,
        acceptance_rate: 0.52,
        international_student_rate: 0.31,
        brochure_url: "/brochures/ubc-brochure.pdf",
        avg_fees_in_aud: 62000,
        search_names: "UBC, University of British Columbia",
        streamId: streams.find((s) => s.slug === "computer-science")?.id || 3,
        cityId: cities.find((c) => c.slug === "vancouver")?.id || 5,
        stateId: states.find((s) => s.slug === "british-columbia")?.id || 5,
        countryId: countries.find((c) => c.slug === "canada")?.id || 2,
        meta_desc:
          "Top Canadian university with stunning campus and world-class research.",
        og_img: "/images/colleges/ubc-og.jpg",
      },
    }),
    prisma.colleges.upsert({
      where: { slug: "mcgill-university" },
      update: {},
      create: {
        college_name: "McGill University",
        address: "845 Sherbrooke St W, Montreal, QC H3A 0G4, Canada",
        location: "Montreal, QC",
        established: new Date("1821-03-31"),
        email: "info@mcgill.ca",
        contact: "+1 514-398-4455",
        logo_url: "/images/colleges/mcgill-logo.png",
        bg_url: "/images/colleges/mcgill-bg.jpg",
        media_url: JSON.stringify({
          videos: ["/videos/mcgill-tour.mp4"],
          gallery: [
            "/images/colleges/mcgill-1.jpg",
            "/images/colleges/mcgill-2.jpg",
          ],
        }),
        rating: 4.2,
        score: 91,
        intake_start_date: new Date("2025-09-01"),
        pr_pathway: true,
        slug: "mcgill-university",
        total_students: 40000,
        acceptance_rate: 0.46,
        international_student_rate: 0.3,
        brochure_url: "/brochures/mcgill-brochure.pdf",
        avg_fees_in_aud: 58000,
        search_names: "McGill, McGill University",
        streamId:
          streams.find((s) => s.slug === "healthcare-medicine")?.id || 4,
        cityId: cities.find((c) => c.slug === "toronto")?.id || 4,
        stateId: states.find((s) => s.slug === "ontario")?.id || 4,
        countryId: countries.find((c) => c.slug === "canada")?.id || 2,
        meta_desc:
          "Prestigious Canadian university known for medical and research excellence.",
        og_img: "/images/colleges/mcgill-og.jpg",
      },
    }),
    prisma.colleges.upsert({
      where: { slug: "university-of-waterloo" },
      update: {},
      create: {
        college_name: "University of Waterloo",
        address: "200 University Ave W, Waterloo, ON N2L 3G1, Canada",
        location: "Waterloo, ON",
        established: new Date("1957-07-01"),
        email: "info@uwaterloo.ca",
        contact: "+1 519-888-4567",
        logo_url: "/images/colleges/waterloo-logo.png",
        bg_url: "/images/colleges/waterloo-bg.jpg",
        media_url: JSON.stringify({
          videos: ["/videos/waterloo-tour.mp4"],
          gallery: [
            "/images/colleges/waterloo-1.jpg",
            "/images/colleges/waterloo-2.jpg",
          ],
        }),
        rating: 4.1,
        score: 88,
        intake_start_date: new Date("2025-09-01"),
        pr_pathway: true,
        slug: "university-of-waterloo",
        total_students: 42000,
        acceptance_rate: 0.53,
        international_student_rate: 0.28,
        brochure_url: "/brochures/waterloo-brochure.pdf",
        avg_fees_in_aud: 60000,
        search_names: "UW, Waterloo, University of Waterloo",
        streamId: streams.find((s) => s.slug === "computer-science")?.id || 3,
        cityId: cities.find((c) => c.slug === "toronto")?.id || 4,
        stateId: states.find((s) => s.slug === "ontario")?.id || 4,
        countryId: countries.find((c) => c.slug === "canada")?.id || 2,
        meta_desc: "Leading Canadian university for technology and innovation.",
        og_img: "/images/colleges/waterloo-og.jpg",
      },
    }),
    prisma.colleges.upsert({
      where: { slug: "york-university" },
      update: {},
      create: {
        college_name: "York University",
        address: "4700 Keele St, Toronto, ON M3J 1P3, Canada",
        location: "Toronto, ON",
        established: new Date("1959-03-26"),
        email: "info@yorku.ca",
        contact: "+1 416-736-2100",
        logo_url: "/images/colleges/york-logo.png",
        bg_url: "/images/colleges/york-bg.jpg",
        media_url: JSON.stringify({
          videos: ["/videos/york-tour.mp4"],
          gallery: [
            "/images/colleges/york-1.jpg",
            "/images/colleges/york-2.jpg",
          ],
        }),
        rating: 3.9,
        score: 82,
        intake_start_date: new Date("2025-09-01"),
        pr_pathway: true,
        slug: "york-university",
        total_students: 55000,
        acceptance_rate: 0.62,
        international_student_rate: 0.24,
        brochure_url: "/brochures/york-brochure.pdf",
        avg_fees_in_aud: 55000,
        search_names: "York, York University",
        streamId:
          streams.find((s) => s.slug === "business-management")?.id || 2,
        cityId: cities.find((c) => c.slug === "toronto")?.id || 4,
        stateId: states.find((s) => s.slug === "ontario")?.id || 4,
        countryId: countries.find((c) => c.slug === "canada")?.id || 2,
        meta_desc:
          "Comprehensive Canadian university with diverse academic programs.",
        og_img: "/images/colleges/york-og.jpg",
      },
    }),

    // USA - 10 colleges
    prisma.colleges.upsert({
      where: { slug: "harvard-university" },
      update: {},
      create: {
        college_name: "Harvard University",
        address: "Massachusetts Ave, Cambridge, MA 02138, USA",
        location: "Cambridge, MA",
        established: new Date("1636-09-08"),
        email: "info@harvard.edu",
        contact: "+1 617-495-1000",
        logo_url: "/images/colleges/harvard-logo.png",
        bg_url: "/images/colleges/harvard-bg.jpg",
        media_url: JSON.stringify({
          videos: ["/videos/harvard-tour.mp4"],
          gallery: [
            "/images/colleges/harvard-1.jpg",
            "/images/colleges/harvard-2.jpg",
          ],
        }),
        rating: 4.8,
        score: 100,
        intake_start_date: new Date("2025-08-01"),
        pr_pathway: false,
        slug: "harvard-university",
        total_students: 23000,
        acceptance_rate: 0.05,
        international_student_rate: 0.25,
        brochure_url: "/brochures/harvard-brochure.pdf",
        avg_fees_in_aud: 85000,
        search_names: "Harvard, Harvard University",
        streamId:
          streams.find((s) => s.slug === "business-management")?.id || 2,
        cityId: cities.find((c) => c.slug === "toronto")?.id || 4,
        stateId: states.find((s) => s.slug === "ontario")?.id || 4,
        countryId: countries.find((c) => c.slug === "canada")?.id || 2,
        meta_desc:
          "World's most prestigious university with unmatched academic excellence.",
        og_img: "/images/colleges/harvard-og.jpg",
      },
    }),
    prisma.colleges.upsert({
      where: { slug: "massachusetts-institute-of-technology" },
      update: {},
      create: {
        college_name: "Massachusetts Institute of Technology",
        address: "77 Massachusetts Ave, Cambridge, MA 02139, USA",
        location: "Cambridge, MA",
        established: new Date("1861-04-10"),
        email: "info@mit.edu",
        contact: "+1 617-253-1000",
        logo_url: "/images/colleges/mit-logo.png",
        bg_url: "/images/colleges/mit-bg.jpg",
        media_url: JSON.stringify({
          videos: ["/videos/mit-tour.mp4"],
          gallery: ["/images/colleges/mit-1.jpg", "/images/colleges/mit-2.jpg"],
        }),
        rating: 4.7,
        score: 99,
        intake_start_date: new Date("2025-08-01"),
        pr_pathway: false,
        slug: "massachusetts-institute-of-technology",
        total_students: 11500,
        acceptance_rate: 0.07,
        international_student_rate: 0.34,
        brochure_url: "/brochures/mit-brochure.pdf",
        avg_fees_in_aud: 82000,
        search_names: "MIT, Massachusetts Institute of Technology",
        streamId: streams.find((s) => s.slug === "engineering")?.id || 1,
        cityId: cities.find((c) => c.slug === "toronto")?.id || 4,
        stateId: states.find((s) => s.slug === "ontario")?.id || 4,
        countryId: countries.find((c) => c.slug === "canada")?.id || 2,
        meta_desc:
          "Leading technology and engineering university with cutting-edge research.",
        og_img: "/images/colleges/mit-og.jpg",
      },
    }),
    prisma.colleges.upsert({
      where: { slug: "stanford-university" },
      update: {},
      create: {
        college_name: "Stanford University",
        address: "450 Serra Mall, Stanford, CA 94305, USA",
        location: "Stanford, CA",
        established: new Date("1885-10-01"),
        email: "info@stanford.edu",
        contact: "+1 650-723-2300",
        logo_url: "/images/colleges/stanford-logo.png",
        bg_url: "/images/colleges/stanford-bg.jpg",
        media_url: JSON.stringify({
          videos: ["/videos/stanford-tour.mp4"],
          gallery: [
            "/images/colleges/stanford-1.jpg",
            "/images/colleges/stanford-2.jpg",
          ],
        }),
        rating: 4.6,
        score: 97,
        intake_start_date: new Date("2025-08-01"),
        pr_pathway: false,
        slug: "stanford-university",
        total_students: 17000,
        acceptance_rate: 0.04,
        international_student_rate: 0.23,
        brochure_url: "/brochures/stanford-brochure.pdf",
        avg_fees_in_aud: 80000,
        search_names: "Stanford, Stanford University",
        streamId: streams.find((s) => s.slug === "computer-science")?.id || 3,
        cityId: cities.find((c) => c.slug === "toronto")?.id || 4,
        stateId: states.find((s) => s.slug === "ontario")?.id || 4,
        countryId: countries.find((c) => c.slug === "canada")?.id || 2,
        meta_desc:
          "Premier university in Silicon Valley known for innovation and entrepreneurship.",
        og_img: "/images/colleges/stanford-og.jpg",
      },
    }),

    // UK - 5 colleges
    prisma.colleges.upsert({
      where: { slug: "university-of-oxford" },
      update: {},
      create: {
        college_name: "University of Oxford",
        address: "Wellington Square, Oxford OX1 2JD, UK",
        location: "Oxford, England",
        established: new Date("1096-01-01"),
        email: "info@ox.ac.uk",
        contact: "+44 1865 270000",
        logo_url: "/images/colleges/oxford-logo.png",
        bg_url: "/images/colleges/oxford-bg.jpg",
        media_url: JSON.stringify({
          videos: ["/videos/oxford-tour.mp4"],
          gallery: [
            "/images/colleges/oxford-1.jpg",
            "/images/colleges/oxford-2.jpg",
          ],
        }),
        rating: 4.7,
        score: 98,
        intake_start_date: new Date("2025-10-01"),
        pr_pathway: false,
        slug: "university-of-oxford",
        total_students: 24000,
        acceptance_rate: 0.17,
        international_student_rate: 0.45,
        brochure_url: "/brochures/oxford-brochure.pdf",
        avg_fees_in_aud: 55000,
        search_names: "Oxford, University of Oxford, Oxford University",
        streamId: streams.find((s) => s.slug === "arts-humanities")?.id || 5,
        cityId: cities.find((c) => c.slug === "toronto")?.id || 4,
        stateId: states.find((s) => s.slug === "ontario")?.id || 4,
        countryId: countries.find((c) => c.slug === "uk")?.id || 4,
        meta_desc:
          "World's oldest English-speaking university with centuries of academic excellence.",
        og_img: "/images/colleges/oxford-og.jpg",
      },
    }),
    prisma.colleges.upsert({
      where: { slug: "university-of-cambridge" },
      update: {},
      create: {
        college_name: "University of Cambridge",
        address: "The Old Schools, Trinity Ln, Cambridge CB2 1TN, UK",
        location: "Cambridge, England",
        established: new Date("1209-01-01"),
        email: "info@cam.ac.uk",
        contact: "+44 1223 337733",
        logo_url: "/images/colleges/cambridge-logo.png",
        bg_url: "/images/colleges/cambridge-bg.jpg",
        media_url: JSON.stringify({
          videos: ["/videos/cambridge-tour.mp4"],
          gallery: [
            "/images/colleges/cambridge-1.jpg",
            "/images/colleges/cambridge-2.jpg",
          ],
        }),
        rating: 4.6,
        score: 97,
        intake_start_date: new Date("2025-10-01"),
        pr_pathway: false,
        slug: "university-of-cambridge",
        total_students: 24000,
        acceptance_rate: 0.21,
        international_student_rate: 0.39,
        brochure_url: "/brochures/cambridge-brochure.pdf",
        avg_fees_in_aud: 53000,
        search_names:
          "Cambridge, University of Cambridge, Cambridge University",
        streamId: streams.find((s) => s.slug === "computer-science")?.id || 3,
        cityId: cities.find((c) => c.slug === "toronto")?.id || 4,
        stateId: states.find((s) => s.slug === "ontario")?.id || 4,
        countryId: countries.find((c) => c.slug === "uk")?.id || 4,
        meta_desc:
          "Historic university renowned for groundbreaking research and Nobel laureates.",
        og_img: "/images/colleges/cambridge-og.jpg",
      },
    }),
  ]);

  // Seed CollegesCourses
  console.log("📖 Seeding college courses...");
  await Promise.all([
    prisma.collegesCourses.create({
      data: {
        name: "Bachelor of Engineering (Software) at University of Sydney",
        duration_in_months: 48,
        tution_fees: 45000,
        hostel_fees: 15000,
        one_time_fees: 2000,
        other_fees: JSON.stringify({
          application_fee: 150,
          student_services: 350,
          health_insurance: 600,
        }),
        score: 95,
        college_id:
          colleges.find((c) => c.slug === "university-of-sydney")?.id || 1,
        course_id:
          courses.find((c) => c.course_name.includes("Software"))?.id || 1,
        streamId: streams.find((s) => s.slug === "engineering")?.id || 1,
        meta_desc:
          "Software Engineering program at University of Sydney with industry connections.",
        og_img: "/images/college-courses/usyd-software-eng-og.jpg",
      },
    }),
    prisma.collegesCourses.create({
      data: {
        name: "Master of Computer Science at University of Melbourne",
        duration_in_months: 24,
        tution_fees: 48000,
        hostel_fees: 16000,
        one_time_fees: 2500,
        other_fees: JSON.stringify({
          application_fee: 200,
          student_services: 400,
          health_insurance: 650,
        }),
        score: 98,
        college_id:
          colleges.find((c) => c.slug === "university-of-melbourne")?.id || 2,
        course_id:
          courses.find((c) => c.course_name.includes("Computer Science"))?.id ||
          3,
        streamId: streams.find((s) => s.slug === "computer-science")?.id || 3,
        meta_desc:
          "Advanced Computer Science Masters program at University of Melbourne.",
        og_img: "/images/college-courses/unimelb-cs-og.jpg",
      },
    }),
    prisma.collegesCourses.create({
      data: {
        name: "Master of Business Administration at University of Toronto",
        duration_in_months: 24,
        tution_fees: 65000,
        hostel_fees: 18000,
        one_time_fees: 3000,
        other_fees: JSON.stringify({
          application_fee: 250,
          student_services: 500,
          health_insurance: 800,
        }),
        score: 92,
        college_id:
          colleges.find((c) => c.slug === "university-of-toronto")?.id || 3,
        course_id: courses.find((c) => c.course_name.includes("MBA"))?.id || 2,
        streamId:
          streams.find((s) => s.slug === "business-management")?.id || 2,
        meta_desc:
          "World-renowned MBA program at University of Toronto's Rotman School.",
        og_img: "/images/college-courses/uoft-mba-og.jpg",
      },
    }),
  ]);

  // Seed CollegewiseContent
  console.log("📄 Seeding college content...");
  await Promise.all([
    prisma.collegewiseContent.create({
      data: {
        title: "University of Sydney Campus Life",
        content:
          "Experience vibrant campus life at Australia's first university. Our Sydney campus offers state-of-the-art facilities, diverse student communities, and endless opportunities for personal and academic growth.",
        silos: "info",
        score: 90,
        banner_img: "/images/content/usyd-campus-banner.jpg",
        img1: "/images/content/usyd-campus-1.jpg",
        img2: "/images/content/usyd-campus-2.jpg",
        meta_desc:
          "Discover campus life at University of Sydney with modern facilities and vibrant community.",
        og_img: "/images/content/usyd-campus-og.jpg",
        college_id:
          colleges.find((c) => c.slug === "university-of-sydney")?.id || 1,
      },
    }),
    prisma.collegewiseContent.create({
      data: {
        title: "Engineering Courses at University of Sydney",
        content:
          "Our engineering programs combine theoretical knowledge with practical experience. Students work on real-world projects and gain industry exposure through internships and partnerships.",
        silos: "course",
        score: 95,
        banner_img: "/images/content/usyd-engineering-banner.jpg",
        img1: "/images/content/usyd-engineering-1.jpg",
        img2: "/images/content/usyd-engineering-2.jpg",
        meta_desc:
          "Explore engineering courses at University of Sydney with hands-on learning.",
        og_img: "/images/content/usyd-engineering-og.jpg",
        college_id:
          colleges.find((c) => c.slug === "university-of-sydney")?.id || 1,
      },
    }),
  ]);

  // Seed Articles
  console.log("📰 Seeding articles...");
  await Promise.all([
    prisma.articles.create({
      data: {
        title:
          "Top 10 Universities in Australia for International Students 2025",
        content:
          "Australia continues to be a top destination for international students. Here are the best universities offering world-class education, excellent facilities, and strong industry connections.",
        silos: "news",
        score: 95,
        banner_img: "/images/articles/top-unis-australia-banner.jpg",
        img1: "/images/articles/top-unis-australia-1.jpg",
        img2: "/images/articles/top-unis-australia-2.jpg",
        meta_desc:
          "Discover the top 10 universities in Australia for international students in 2025.",
        og_img: "/images/articles/top-unis-australia-og.jpg",
      },
    }),
    prisma.articles.create({
      data: {
        title: "Complete Guide to Student Visa Requirements for Australia",
        content:
          "Planning to study in Australia? This comprehensive guide covers everything you need to know about student visa requirements, documentation, and application process.",
        silos: "blog",
        score: 88,
        banner_img: "/images/articles/visa-guide-banner.jpg",
        img1: "/images/articles/visa-guide-1.jpg",
        img2: "/images/articles/visa-guide-2.jpg",
        meta_desc:
          "Complete guide to Australian student visa requirements and application process.",
        og_img: "/images/articles/visa-guide-og.jpg",
      },
    }),
    prisma.articles.create({
      data: {
        title:
          "Engineering Career Prospects in Canada for International Graduates",
        content:
          "Canada offers excellent career opportunities for engineering graduates. Learn about job markets, salary expectations, and pathways to permanent residency.",
        silos: "course",
        score: 92,
        banner_img: "/images/articles/engineering-canada-banner.jpg",
        img1: "/images/articles/engineering-canada-1.jpg",
        img2: "/images/articles/engineering-canada-2.jpg",
        meta_desc:
          "Explore engineering career prospects in Canada for international graduates.",
        og_img: "/images/articles/engineering-canada-og.jpg",
      },
    }),
  ]);

  console.log("✅ Database seeded successfully!");
  console.log(`
📊 Seeded:
- ${countries.length} Countries
- ${states.length} States  
- ${cities.length} Cities
- ${streams.length} Streams
- ${courses.length} Courses
- ${colleges.length} Colleges
- College Courses relationships
- College content
- Sample articles
  `);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Error seeding database:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
