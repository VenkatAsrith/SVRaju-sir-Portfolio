export interface CarouselSlide {
  id: string;
  image: string;
  category: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  venue: string;
  year: string;
  dignitaries: string;
  highlights: string[];
}

export const HERO_CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    id: "orientation-ceremony",
    image: "/assets/carousel/orientation-ceremony.png",
    category: "Academic Governance & Institutional Leadership",
    badge: "Principal & Senior Professor",
    title: "Welcoming B.Tech First-Year Students & Parents",
    subtitle: "Orientation Programme · JNTUH University College of Engineering Sultanpur",
    description: "Presiding over the grand B.Tech First-Year Orientation Ceremony at JNTUH UCE Sultanpur alongside senior district police authorities, academic administrators, and faculty leaders, inspiring the next generation of engineers.",
    venue: "Auditorium, JNTUH UCE Sultanpur, Sangareddy",
    year: "Academic Year 2024–2025",
    dignitaries: "Presided alongside Civil Police Leadership, Deans, HODs & Student Families",
    highlights: ["First-Year Induction", "NEP 2020 Framework", "Outcome-Based Education"]
  },
  {
    id: "keynote-auditorium",
    image: "/assets/carousel/keynote-auditorium.jpg",
    category: "Keynote Addresses & Scholarly Conclaves",
    badge: "700+ Invited Addresses",
    title: "Inspiring Hundreds in Grand Academic Conclaves",
    subtitle: "Keynote Address on Advanced Computing & Emerging Technologies",
    description: "Delivering an authoritative keynote address before an amphitheater of hundreds of engineering scholars and faculty members, elucidating algorithmic paradigms, quantum computing frontiers, and multidisciplinary research.",
    venue: "Grand Convention Conclave · Chennayyagunta, AP",
    year: "National Technical Convention",
    dignitaries: "Keynote Speaker before 600+ Students, Scholars & Engineering Educators",
    highlights: ["Quantum Technology & AI", "Algorithm Optimization", "Doctoral Mentorship"]
  },
  {
    id: "lamp-lighting-chaitanya",
    image: "/assets/carousel/lamp-lighting-chaitanya.jpg",
    category: "Chief Guest & Conclave Inauguration",
    badge: "Chief Guest Inauguration",
    title: "Inaugural Jyoti Prajwalana at Sri Chaitanya Institute",
    subtitle: "Inauguration Ceremony · UGC Autonomous Institution, Khammam",
    description: "Lighting the auspicious ceremonial lamp (Jyoti Prajwalana) as Chief Guest to inaugurate the academic conclave at Sri Chaitanya Institute of Technology & Research, inspiring faculty and undergraduate scholars toward academic excellence.",
    venue: "Sri Chaitanya Institute of Technology & Research · Khammam",
    year: "National Academic Conclave",
    dignitaries: "Joined by Institute Chairman, Directors, UGC Autonomous Board & Faculty",
    highlights: ["Auspicious Lamp Lighting", "Chief Guest Address", "Autonomous Curriculum Vision"]
  },
  {
    id: "national-conference-felicitation",
    image: "/assets/carousel/national-conference-felicitation.png",
    category: "Distinguished Honors & National Summits",
    badge: "Chief Guest & Keynote Speaker",
    title: "Conferred Ceremonial Felicitation at National Conference",
    subtitle: "Two-Day National Conference on Life Sciences & Computational Intelligence (NCBR)",
    description: "Conferred the traditional ceremonial shawl (angavastram) and framed portrait honor by conference chairs and senior researchers in recognition of pioneering research at the intersection of computational algorithms and biological sciences.",
    venue: "National Conference NCBR Conclave",
    year: "National Research Summit",
    dignitaries: "Felicitated by Conference Conveners, Academic Directors & Senior Faculty",
    highlights: ["Computational Biology & AI", "Interdisciplinary Research", "Academic Lifetime Honor"]
  },
  {
    id: "nss-community-outreach",
    image: "/assets/carousel/nss-community-outreach.jpg",
    category: "Social Responsibility & Community Outreach",
    badge: "NSS Institutional Patron",
    title: "Distributing Educational Resources to Rural Students",
    subtitle: "National Service Scheme (NSS) Outreach · JNTUH UCE Sultanpur",
    description: "Leading hands-on social responsibility initiatives through the National Service Scheme (NSS) of JNTUH UCE Sultanpur, personally distributing essential textbooks, notebooks, and learning materials to empower underprivileged rural school children.",
    venue: "Rural Primary & High School Outreach Camp · Sangareddy",
    year: "NSS Community Service Drive",
    dignitaries: "Led with NSS Officers, College Administrators, Faculty & Student Volunteers",
    highlights: ["Free Book Distribution", "Rural Child Empowerment", "NSS Social Leadership"]
  },
  {
    id: "iste-national-award",
    image: "/assets/carousel/iste-national-award.jpg",
    category: "Prestigious National Recognition",
    badge: "ISTE National Awardee",
    title: "ISTE National Award for Pedagogical Excellence",
    subtitle: "9th ISTE AP Section Annual Convention & Awards Function",
    description: "Honored with the prestigious Indian Society for Technical Education (ISTE) Award for exemplary pedagogical leadership, transformative curriculum innovations, and inspiring technical educators nationwide.",
    venue: "AITAM Campus · Annual Convention & Awards Function",
    year: "ISTE National Convention",
    dignitaries: "Conferred by National ISTE Executive Council, Vice-Chancellors & Deans",
    highlights: ["National Pedagogical Award", "Technical Teacher Mentorship", "OBE Accreditation"]
  },
  {
    id: "delegation-governance",
    image: "/assets/carousel/delegation-governance.jpg",
    category: "Institutional Governance & Stakeholder Conclave",
    badge: "Principal & Institutional Head",
    title: "High-Level Stakeholder & Civil Governance Conclave",
    subtitle: "Campus Infrastructure & Academic Expansion Delegation",
    description: "Engaging in strategic institutional discussions with public leaders, civil administration, and senior university colleagues on campus infrastructure development, green campus initiatives, and academic program expansion.",
    venue: "Campus Grounds · Institutional Governance Meeting",
    year: "Administrative Leadership",
    dignitaries: "Conferring with Public Representatives, Senior Professors & Administrative Leaders",
    highlights: ["Infrastructure Governance", "Community Relations", "Green Campus Initiatives"]
  },
  {
    id: "malla-reddy-guest-honor",
    image: "/assets/carousel/malla-reddy-guest-honor.jpg",
    category: "University Governance & Research Dissemination",
    badge: "Distinguished Guest of Honor",
    title: "Chief Guest & Academic Release at Malla Reddy University",
    subtitle: "University Conclave & Research Proceedings Release Ceremony",
    description: "Felicitated with ceremonial stole and memento by university executive leadership during the grand release of advanced research monographs and proceedings, championing doctoral research ecosystems.",
    venue: "Auditorium, Malla Reddy University",
    year: "Higher Education Leadership Summit",
    dignitaries: "Felicitated by Vice-Chancellor, University Deans & Director of Research",
    highlights: ["Research Proceedings Release", "Higher Education Governance", "Doctoral Ecosystems"]
  }
];
