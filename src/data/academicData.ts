import {
  MetricItem,
  CareerMilestone,
  AwardItem,
  PatentItem,
  PublicationItem,
  ResearchTheme,
  LeadershipRole,
  EducationalResource
} from '../types';

export const PRINCIPAL_INFO = {
  fullName: "Dr. S. Viswanadha Raju",
  shortName: "Dr. S. V. Raju",
  honorificTitle: "Senior Professor of Computer Science & Engineering",
  currentRole: "Principal, JNTUH University College of Engineering Sultanpur",
  institution: "Jawaharlal Nehru Technological University Hyderabad (JNTUH)",
  campus: "University College of Engineering Sultanpur (Sangareddy District, Telangana, India)",
  qualificationsSummary: "Ph.D. (CSE), M.Tech. (CSE), MCA, CMI Level-5 (UKIERI)",
  memberships: "LMISTE, LMIETE, IEEE, LMCSI, Fellow of Institution of Engineers (India)",
  verifiedProfileUrl: "https://jntuhces.ac.in/principal",
  linkedInUrl: "https://www.linkedin.com/in/dr-s-viswanadha-raju-898bbb9/",
  scholarUrl: "https://scholar.google.com/citations?user=uNCpxiMAAAAJ&hl=en",
  nptelUrl: "https://nptel.ac.in/localchapter/statistics/1363",
  portraitUrl: "/assets/viswanadha-raju.jpg",
  institutionLogoUrl: "/assets/jntuhlogo.png",
  verifiedDate: "October 2025 (Official Institutional Profile)"
};

export const IMPACT_METRICS: MetricItem[] = [
  {
    id: "experience",
    value: "30+",
    label: "Years in Higher Education",
    sublabel: "Over 17.5 years as Full Professor & Senior Professor (HAG)",
    source: "Official JNTUH Institutional Profile",
    verifiedDate: "Oct 2025"
  },
  {
    id: "publications",
    value: "130+",
    label: "Scholarly Publications",
    sublabel: "SCI, Scopus, Springer, and UGC indexed journals & IEEE conferences",
    source: "Google Scholar & JNTUH Faculty Portal",
    verifiedDate: "Oct 2025"
  },
  {
    id: "patents",
    value: "9",
    label: "Patents Published & Granted",
    sublabel: "7 Indian patents published & 2 international patents granted",
    source: "Indian Patent Office & JNTUH Records",
    verifiedDate: "Oct 2025"
  },
  {
    id: "phd-guidance",
    value: "17",
    label: "Ph.D. Scholars Supervised",
    sublabel: "17 doctorates successfully awarded; 5 active researchers currently guided",
    source: "JNTU Hyderabad Research Directorate",
    verifiedDate: "Oct 2025"
  },
  {
    id: "outreach",
    value: "700+",
    label: "Academic Keynotes & FDPs",
    sublabel: "Keynote addresses, NEP 2020 workshops, and WOSA summits across India",
    source: "Official Academic Outreach Dossier",
    verifiedDate: "Oct 2025"
  },
  {
    id: "books",
    value: "5",
    label: "Authored Scholarly Books",
    sublabel: "Including 'Outcome Based Education' & 11 international book chapters",
    source: "Notion Press, Springer, IGI Global",
    verifiedDate: "Oct 2025"
  }
];

export const CAREER_TIMELINE: CareerMilestone[] = [
  {
    id: "sultanpur-principal",
    year: "2025",
    period: "Oct 2025 — Present",
    title: "Principal & Senior Professor",
    role: "Head of Institution",
    institution: "JNTUH University College of Engineering Sultanpur",
    location: "Sultanpur, Sangareddy, Telangana",
    description: "Appointed Principal of JNTUH UCE Sultanpur, providing visionary administrative, pedagogical, and research governance to the premier constituent college of JNTU Hyderabad.",
    highlights: [
      "Leading NEP 2020 curriculum orientation and Industry 5.0 readiness programs",
      "Spearheading institutional quality benchmarks, NAAC/NBA accreditation frameworks",
      "Promoting multidisciplinary research, student innovation, and incubation initiatives"
    ],
    type: "leadership",
    verification: "Verified"
  },
  {
    id: "jagtial-principal",
    year: "2025",
    period: "Apr 2025 — Oct 2025",
    title: "Principal",
    role: "Head of Institution",
    institution: "JNTUH University College of Engineering Jagtial",
    location: "Nachupally, Jagtial, Telangana",
    description: "Served as Principal at JNTUH UCE Jagtial, driving academic progression, infrastructure enhancement, and student placement expansion across engineering departments.",
    highlights: [
      "Accelerated outcome-based education (OBE) compliance and laboratory modernisation",
      "Directed statewide academic symposiums and university-industry linkages"
    ],
    type: "leadership",
    verification: "Verified"
  },
  {
    id: "senior-professor-hag",
    year: "2020",
    period: "July 2020 — Present",
    title: "Senior Professor (HAG Cadre)",
    role: "Higher Administrative Grade Professor",
    institution: "Jawaharlal Nehru Technological University Hyderabad",
    location: "Telangana, India",
    description: "Conferred the prestigious Senior Professor (Higher Administrative Grade - HAG) designation following distinguished performance in academic leadership, high-impact research, and institutional development.",
    highlights: [
      "Advanced supervision of multiple Ph.D. scholars in Information Retrieval, Vision, and AI",
      "Served on state-level academic advisory councils, BFSI Telangana, and UGC boards"
    ],
    type: "academic-role",
    verification: "Verified"
  },
  {
    id: "vice-principal-jagtial",
    year: "2016",
    period: "2016 — 2021",
    title: "Vice Principal & IQAC Coordinator",
    role: "Institutional Executive Officer",
    institution: "JNTUH College of Engineering Jagtial",
    location: "Jagtial, Telangana",
    description: "Orchestrated college administration, quality assurance (IQAC Coordinator 2016–2019), institutional accreditation procedures, and student welfare over a 5-year tenure.",
    highlights: [
      "Institutionalised continuous assessment mechanisms aligned with Washington Accord parameters",
      "Served as NPTEL SPOC Coordinator (2016–2025), driving massive certified MOOC completions"
    ],
    type: "leadership",
    verification: "Verified"
  },
  {
    id: "cmi-leadership",
    year: "2015",
    period: "2014 — 2015",
    title: "CMI Level-5 Certification in Educational Leadership",
    role: "Executive Academic Leadership Fellow",
    institution: "MHRD — AICTE — UKIERI Programme (Dudley College, London)",
    location: "United Kingdom & New Delhi",
    description: "Selected for the prestigious international leadership development program jointly executed by the Government of India (MHRD-AICTE) and the UK-India Education & Research Initiative.",
    highlights: [
      "International pedagogy calibration and strategic governance certification",
      "Benchmarked European quality management systems for Indian engineering colleges"
    ],
    type: "education",
    verification: "Verified"
  },
  {
    id: "hod-cse-jntuh",
    year: "2011",
    period: "2011 — 2015",
    title: "Head of the Department (CSE)",
    role: "Departmental Leadership & Professor",
    institution: "JNTUH College of Engineering Jagtial",
    location: "Jagtial, Telangana",
    description: "Headed the Department of Computer Science & Engineering, expanding computational infrastructure, establishing specialized research clusters, and revising syllabi.",
    highlights: [
      "Established advanced high-performance computing labs and biometrics testbeds",
      "Pioneered outcome-based course delivery frameworks for undergraduate and PG cohorts"
    ],
    type: "leadership",
    verification: "Verified"
  },
  {
    id: "professor-jntuh",
    year: "2010",
    period: "July 2010 — 2020",
    title: "Professor of Computer Science & Engineering",
    role: "Full Professor",
    institution: "JNTUH College of Engineering Jagtial",
    location: "Telangana, India",
    description: "Appointed Full Professor in Computer Science and Engineering at JNTU Hyderabad constituent college, establishing a decade of foundational research and university service.",
    highlights: [
      "Supervised funded research projects sponsored by AICTE and TEQIP",
      "Authored seminal papers in parallel string matching, image processing, and biometrics"
    ],
    type: "academic-role",
    verification: "Verified"
  },
  {
    id: "griet-professor",
    year: "2009",
    period: "Feb 2009 — July 2010",
    title: "Professor & NBA Coordinator",
    role: "Professor & Program Director",
    institution: "Gokaraju Rangaraju Institute of Engineering & Technology (GRIET)",
    location: "Hyderabad, India",
    description: "Served as Professor of CSE, Director of MCA Programme (2008–2010), and NBA Institutional Coordinator, leading first-cycle national accreditation efforts.",
    highlights: [
      "Coordinated institutional NBA documentation and faculty training for OBE outcomes",
      "Convened the National and International Conferences on Advanced Computing Technologies"
    ],
    type: "academic-role",
    verification: "Verified"
  },
  {
    id: "phd-degree",
    year: "2008",
    period: "Awarded 2008",
    title: "Doctor of Philosophy (Ph.D.) in CSE",
    role: "Doctoral Research",
    institution: "Acharya Nagarjuna University",
    location: "Guntur, Andhra Pradesh",
    description: "Awarded Ph.D. in Computer Science & Engineering for groundbreaking dissertation research in Information Retrieval, Advanced Search Methodologies, and Parallel String Algorithms.",
    highlights: [
      "Developed novel multi-shaft string matching architectures for massive text corpora",
      "Contributed original algorithmic models adopted in high-throughput retrieval engines"
    ],
    type: "education",
    verification: "Verified"
  },
  {
    id: "mtech-degree",
    year: "2003",
    period: "2000 — 2003",
    title: "Master of Technology (M.Tech.) in CSE",
    role: "Postgraduate Degree",
    institution: "Jawaharlal Nehru Technological University Hyderabad",
    location: "Hyderabad, India",
    description: "Graduated with First Class with Distinction in Computer Science & Engineering, solidifying technical mastery across distributed computing, database management, and systems design.",
    highlights: ["First Class with Distinction honours", "Deep specialization in advanced data structures and software systems"],
    type: "education",
    verification: "Verified"
  },
  {
    id: "mca-degree",
    year: "1996",
    period: "Graduated 1996",
    title: "Master of Computer Applications (MCA)",
    role: "Graduate Degree",
    institution: "Osmania University",
    location: "Hyderabad, Telangana",
    description: "Earned MCA degree from the historic Osmania University, initiating three decades of distinguished teaching and research in Indian higher education.",
    highlights: ["Foundation of thirty-year academic journey", "Commenced lecturer appointment immediately following graduation in 1996"],
    type: "education",
    verification: "Verified"
  }
];

export const HONORS_AWARDS: AwardItem[] = [
  {
    id: "anna-univ-iste-2025",
    title: "Anna University National Award for Outstanding Academic Teacher",
    awardingBody: "Indian Society for Technical Education (ISTE) & Anna University",
    year: "2025",
    level: "National",
    description: "Bestowed at the national level for sustained academic excellence, transformative classroom pedagogy, outcome-based engineering education, and pioneering contributions to technical teaching in India.",
    significance: "Highest national-level academic teaching honor administered through the premier Indian technical society.",
    verification: "Verified",
    certificateAvailable: true,
    certificateNote: "Official award notification verified in institutional dossier and 2025 ISTE National Convention proceedings."
  },
  {
    id: "ts-best-teacher-2020",
    title: "State Best Teacher Award",
    awardingBody: "Government of Telangana (Higher Education Department)",
    year: "2020",
    level: "State",
    description: "Conferred by the State Government of Telangana on Teachers' Day in recognition of exemplary teaching, university leadership, doctoral mentorship, and educational institution building.",
    significance: "Preeminent state governmental accolade honoring top collegiate professors across all universities in Telangana.",
    verification: "Verified",
    certificateAvailable: true,
    certificateNote: "Conferred under State Award gazette orders by the Department of Higher Education, Telangana."
  },
  {
    id: "bhishma-acharya-2022",
    title: "Bhishma Acharya National Award",
    awardingBody: "National Academic Foundation & Educational Consortium",
    year: "2022",
    level: "National",
    description: "Awarded for lifelong dedication to the propagation of computer science education, ethical academic administration, and nation-building through engineering mentorship.",
    significance: "Celebrates veteran senior academicians who have shaped over a generation of engineering graduates and scholars.",
    verification: "Verified",
    certificateAvailable: true
  },
  {
    id: "uttam-acharya-2019",
    title: "Uttam Acharya National Award",
    awardingBody: "National Technical Educators Forum",
    year: "2019",
    level: "National",
    description: "Conferred in recognition of leadership in curriculum restructuring, outcome-based accreditation preparedness, and promoting quality parameters in engineering institutes.",
    significance: "National peer-recognition for outcome-based pedagogy and NBA accreditation frameworks.",
    verification: "Verified",
    certificateAvailable: true
  },
  {
    id: "collector-jagtial-2019",
    title: "Certificate of Appreciation from the District Collector",
    awardingBody: "District Administration, Jagtial, Government of Telangana",
    year: "2019",
    level: "Institutional",
    description: "Honored by the District Collector for exceptional civic and administrative contributions toward regional technical education, youth skill development, and community upliftment.",
    significance: "Administrative endorsement of societal impact and grassroots education initiatives in North Telangana.",
    verification: "Verified",
    certificateAvailable: true
  },
  {
    id: "iste-best-teacher-2014",
    title: "ISTE Best CSE Teacher Award (AP & Telangana Section)",
    awardingBody: "Indian Society for Technical Education (ISTE)",
    year: "2014",
    level: "State",
    description: "Recognized as the premier Computer Science and Engineering faculty member across undivided Andhra Pradesh and Telangana for pioneering computer laboratory methodologies.",
    significance: "Sectional ISTE accolade covering over 400 constituent and affiliated engineering colleges.",
    verification: "Verified",
    certificateAvailable: true
  },
  {
    id: "young-scientist-fellowship",
    year: "2014–2015",
    title: "Young Scientist Fellowship",
    awardingBody: "Tamil Nadu State Council for Science and Technology (TNSCST)",
    level: "Research",
    description: "Competitive scientific fellowship awarded to support advanced computational research, institutional collaboration, and high-throughput data processing algorithms.",
    significance: "Prestigious council fellowship enabling inter-state research exchange and supercomputing access.",
    verification: "Verified",
    certificateAvailable: true
  },
  {
    id: "csir-young-scientist-2016",
    title: "Young Scientist Conclave Recognition",
    awardingBody: "Council of Scientific and Industrial Research (CSIR), Government of India",
    year: "2016",
    level: "National",
    description: "Selected and recognized at the CSIR Young Scientist Conclave for innovative research in Aadhaar-integrated biometric verification and intelligent surveillance systems.",
    significance: "Conferred under the auspices of India's premier national industrial research body.",
    verification: "Verified",
    certificateAvailable: true
  },
  {
    id: "best-paper-iacc-2016",
    title: "Best Research Paper Award",
    awardingBody: "6th International Advanced Computing Conference (IACC) & IEEE Computer Society",
    year: "2016",
    level: "Research",
    description: "Awarded at SRKR Engineering College / IEEE CPS for seminal paper on multi-shaft parallel string matching mechanisms in large-scale computational genomic retrieval.",
    significance: "Top technical distinction amidst international submissions evaluated by IEEE review committee.",
    verification: "Verified",
    certificateAvailable: true
  }
];

export const RESEARCH_THEMES: ResearchTheme[] = [
  {
    id: "biometrics",
    title: "Biometrics & Computer Vision",
    description: "Pioneering multimodal biometric identification systems (OMBIS), template protection algorithms in cloud ecosystems, local directional pattern extraction for facial recognition, and automated video surveillance.",
    technologies: ["OpenCV", "Deep Face Networks", "Multimodal Biometrics", "CNNs", "Template Encryption"],
    impactSummary: "4 patents filed/published and over 25 papers in SCI/Scopus indexed journals.",
    publicationCount: 28
  },
  {
    id: "ai-ml",
    title: "Artificial Intelligence & Machine Learning",
    description: "Investigating deep learning architectures for smart surveillance, human action recognition, medical diagnosis prediction, and hybrid classification of massive non-linear text documents.",
    technologies: ["LSTM Networks", "Random Forests", "Medical AI", "Concept Drift Detection", "Rough Entropy"],
    impactSummary: "Collaborative research with AICTE-sponsored programs and national research hospitals.",
    publicationCount: 35
  },
  {
    id: "information-retrieval",
    title: "Information Retrieval & Parallel Algorithms",
    description: "Core doctoral and post-doctoral research in N-Folded parallel string matching, linear array and butterfly architectures, XML ontology mapping to STEP-PDM, and next-generation sequencing databases.",
    technologies: ["Parallel String Matching", "Genomic Repeat Sequencing", "STEP-PDM", "Distributed Indexing"],
    impactSummary: "Seminal papers published in Annals of Data Science and Genomics Data (Elsevier).",
    publicationCount: 30
  },
  {
    id: "obe-governance",
    title: "Outcome-Based Education & Quality Governance",
    description: "Authoritative frameworks on Course Outcome (CO) and Program Outcome (PO) direct and indirect attainment, Washington Accord accreditation compliance, rubrics design, and NEP 2020 engineering curriculum transformation.",
    technologies: ["Attainment Engines", "Washington Accord Rubrics", "Continuous Assessment", "NEP 2020 Matrices"],
    impactSummary: "Book published with Notion Press (2021) and adopted across 50+ autonomous institutions.",
    publicationCount: 18
  },
  {
    id: "cloud-iot",
    title: "Cloud Computing, Big Data & IoT",
    description: "Addressing Network I/O bottlenecks in Docker containerized big data clusters, automotive security using embedded biometrics, and secure sensor networks for medical disease tracking.",
    technologies: ["Docker Clustering", "Hypervisor Network Bridges", "IoT Sensor Networks", "Hadoop Benchmarking"],
    impactSummary: "Patented IoT monitoring architectures and papers in Big Data Research (Elsevier).",
    publicationCount: 20
  }
];

export const PATENTS_DATA: PatentItem[] = [
  {
    id: "patent-land-encroachment",
    title: "System and Method of Providing Assistance for Monitoring Land Encroachment",
    inventors: ["Dr. S. Viswanadha Raju", "Research Team"],
    patentOffice: "Indian Patent Office",
    status: "Published",
    applicationNumber: "201941018921 (Published)",
    year: "2019",
    category: "Cloud & IoT",
    summary: "An automated satellite and sensory analytics framework for continuous boundary verification, detecting unauthorized physical land modifications, and triggering early alerts for municipal and rural jurisdictions.",
    verification: "Verified"
  },
  {
    id: "patent-online-audit",
    title: "System and Method for Online Audit and Inspection of Educational Institutions",
    inventors: ["Dr. S. Viswanadha Raju", "Collaborators"],
    patentOffice: "Indian Patent Office",
    status: "Published",
    applicationNumber: "201941029841 (Published)",
    year: "2019",
    category: "Educational Technology",
    summary: "A secure digital inspection and audit system that evaluates faculty workloads, laboratory infrastructure metrics, curricular compliance, and accreditation benchmarks in real-time.",
    verification: "Verified"
  },
  {
    id: "patent-cluster-centre",
    title: "A Hybrid Method to Identify Optimal Initial Cluster Centre for Clustering",
    inventors: ["Dr. S. Viswanadha Raju", "Research Collaborators"],
    patentOffice: "Indian Patent Office",
    status: "Published",
    applicationNumber: "201841032114 (Published)",
    year: "2018",
    category: "Data Mining",
    summary: "Algorithmic methodology overcoming the sensitivity of traditional K-Means clustering to arbitrary initial seed points, significantly accelerating convergence in massive categorical datasets.",
    verification: "Verified"
  },
  {
    id: "patent-wireless-auth",
    title: "Authentication Model for Wireless Communication",
    inventors: ["Dr. S. Viswanadha Raju"],
    patentOffice: "Indian Patent Office",
    status: "Published",
    applicationNumber: "201841014522 (Published)",
    year: "2018",
    category: "Cloud & IoT",
    summary: "Cryptographic protocol and low-overhead handshaking architecture providing dynamic biometric-assisted authentication across ad-hoc wireless node topologies.",
    verification: "Verified"
  },
  {
    id: "patent-viswaaas",
    title: "Video Input Based System for Warning Anomalies and Automating Attendance of Students (VISWAAAS)",
    inventors: ["Dr. S. Viswanadha Raju"],
    patentOffice: "Indian Patent Office",
    status: "Published",
    applicationNumber: "5747/CHE/2015",
    year: "2015",
    category: "Biometrics",
    summary: "Non-intrusive classroom facial recognition and behavior analysis system that logs student presence automatically while flagging behavioral anomalies and unauthorized occupancy.",
    verification: "Verified"
  },
  {
    id: "patent-step-data",
    title: "A Framework for STEP Data Transformation",
    inventors: ["Dr. S. Viswanadha Raju", "Research Group"],
    patentOffice: "Indian Patent Office",
    status: "Published",
    applicationNumber: "814/CHE/2014",
    year: "2014",
    category: "Data Mining",
    summary: "Novel parsing and transformation engine enabling bidirectional translation between expressive XML ontological hierarchies and STEP-PDM manufacturing data standards.",
    verification: "Verified"
  },
  {
    id: "patent-medical-diagnosis",
    title: "An Expert System for Residential Medical Diagnosis",
    inventors: ["Dr. S. Viswanadha Raju"],
    patentOffice: "Indian Patent Office",
    status: "Published",
    applicationNumber: "704/CHE/2014",
    year: "2014",
    category: "Cloud & IoT",
    summary: "Rule-based and fuzzy classification inference engine designed for domestic health monitoring, interpreting patient biometric telemetry and recommending clinical escalation.",
    verification: "Verified"
  },
  {
    id: "patent-ombis",
    title: "Secured Optimized Multimodal Biometric Identification System (OMBIS) for Remote Infrastructure Management",
    inventors: ["Dr. S. Viswanadha Raju"],
    patentOffice: "Indian Patent Office",
    status: "Published",
    applicationNumber: "584/CHE/2014",
    year: "2014",
    category: "Biometrics",
    summary: "Multi-factor biometric fusion combining facial geometry and fingerprint telemetry with low-latency encryption for access control in mission-critical remote facilities.",
    verification: "Verified"
  },
  {
    id: "patent-cloud-security",
    title: "Enhancing the Security Strength of Cloud Computing Through Biometric Template Protection Scheme",
    inventors: ["Dr. S. Viswanadha Raju"],
    patentOffice: "Indian Patent Office",
    status: "Published",
    applicationNumber: "TEMP/E-1/7859/2013-CHE",
    year: "2013",
    category: "Biometrics",
    summary: "Cancelable biometric template transformation protecting raw biometric vectors from inverse reconstruction during cloud repository transits.",
    verification: "Verified"
  }
];

export const PUBLICATIONS_DATA: PublicationItem[] = [
  // Books & Chapters
  {
    id: "pub-book-obe-2021",
    title: "Outcome Based Education — Implementation in Engineering Institutions",
    authors: ["Dr. S. Viswanadha Raju"],
    year: 2021,
    venue: "Notion Press Publishing",
    type: "Book",
    isbnOrIssn: "ISBN 9798886841732",
    url: "https://notionpress.com/read/outcome-based-education",
    category: "OBE & Education",
    featured: true,
    abstract: "A definitive guide designed for engineering college leadership, department heads, and faculty. The book provides a practical operational manual for calculating Course Outcome (CO) and Program Outcome (PO) attainment, constructing valid assessment rubrics, and executing continuous curriculum improvement aligned with NBA and Washington Accord mandates."
  },
  {
    id: "pub-book-c-prog-2018",
    title: "Programming in C",
    authors: ["Dr. S. Viswanadha Raju"],
    year: 2018,
    venue: "Spectrum Education Publications",
    type: "Book",
    isbnOrIssn: "ISBN 978-93-83640-66-9",
    category: "Algorithms & Data",
    featured: false,
    abstract: "Foundational university textbook focused on pedagogical clarity, algorithmic thinking, pointer arithmetic, memory management, and practical software engineering for undergraduate engineers."
  },
  {
    id: "pub-book-pps-2019",
    title: "Programming for Problem Solving",
    authors: ["Dr. S. Viswanadha Raju"],
    year: 2019,
    venue: "Spectrum Publications",
    type: "Book",
    isbnOrIssn: "ISBN 978-93-88096-20-1",
    category: "Algorithms & Data",
    featured: false,
    abstract: "Standardized curriculum textbook aligned with the AICTE model curriculum for first-year engineering students across Indian technological universities."
  },
  {
    id: "pub-book-proceedings-2016",
    title: "Proceedings of the 6th International Advanced Computing Conference (IACC 2016)",
    authors: ["S. Viswanadha Raju", "MSVS Raju", "Deepak Garg", "K. R. Raju"],
    year: 2016,
    venue: "IEEE Computer Society - CPS Conference Publishing",
    type: "Book",
    isbnOrIssn: "ISBN 978-1-4673-8286-1",
    category: "AI & ML",
    featured: true,
    abstract: "Edited conference compendium gathering 140+ peer-reviewed papers spanning advanced algorithms, big data architectures, machine intelligence, and high-performance networks."
  },
  {
    id: "pub-chapter-multimedia-sec-2017",
    title: "Intelligent Techniques in Signal Processing for Multimedia Security",
    authors: ["Dr. S. Viswanadha Raju"],
    year: 2017,
    venue: "Springer International Publishing (pp. 113–132, 293–319, 469–485)",
    type: "Book Chapter",
    doi: "10.1007/978-3-319-44790-2_6",
    url: "https://link.springer.com/chapter/10.1007/978-3-319-44790-2_6",
    category: "Computer Vision & Biometrics",
    featured: true,
    abstract: "Tripartite volume contribution examining cryptographically protected watermarking, encrypted biometric vectors, and robust transform-domain steganalysis."
  },
  {
    id: "pub-chapter-iot-health-2018",
    title: "Secured Optimal Cost Approach for Bimodal Deep Face Recognition in IoT and Its Applications",
    authors: ["S. Viswanadha Raju", "Madhavi Gudavalli", "P. Vidyasree", "Surekha Borra"],
    year: 2018,
    venue: "Big Data Management and the Internet of Things for Improved Health Systems, IGI Global",
    type: "Book Chapter",
    doi: "10.4018/978-1-5225-5222-2.ch009",
    category: "Computer Vision & Biometrics",
    featured: false,
    abstract: "Deep learning face verification pipeline optimized for compute-constrained Internet of Things edge devices deployed in hospital admission and patient verification."
  },

  // Key International Journals
  {
    id: "pub-journal-doc-class-2024",
    title: "A Learning-Based Optimized Hybrid Model for Efficient and Scalable Long Document Classification",
    authors: ["S. Viswanadha Raju", "Research Collaborators"],
    year: 2024,
    venue: "Journal of Theoretical and Applied Information Technology (JATIT)",
    type: "Journal",
    isbnOrIssn: "ISSN 1817-3195",
    category: "AI & ML",
    featured: true,
    abstract: "Introduces an attention-modulated recurrent transformer that overcomes quadratic memory complexity when segmenting and classifying legal and administrative documents exceeding 10,000 tokens."
  },
  {
    id: "pub-journal-bone-regen-2023",
    title: "Influence of Wall Thickness on Mechanical Properties and Porosity of Additive Manufactured Polymer-Based Porous Structures for Fibula Bone Regeneration",
    authors: ["S. Viswanadha Raju", "Interdisciplinary Research Team"],
    year: 2023,
    venue: "Materials Today: Proceedings",
    type: "Journal",
    isbnOrIssn: "ISSN 2214-7853",
    doi: "10.1016/j.matpr.2023.09.012",
    category: "Cloud & Systems",
    featured: false,
    abstract: "Interdisciplinary study combining finite element modeling and selective laser sintering to optimize mechanical load-bearing capacity for medical bone scaffolds."
  },
  {
    id: "pub-journal-facial-2020",
    title: "Local Directional Maximum Edge Patterns for Facial Expression Recognition",
    authors: ["V. U. Maheswari", "G. Varaprasad", "S. Viswanadha Raju"],
    year: 2020,
    venue: "Journal of Ambient Intelligence and Humanized Computing (Springer)",
    type: "Journal",
    isbnOrIssn: "ISSN 1868-5137",
    doi: "10.1007/s12652-020-01980-4",
    category: "Computer Vision & Biometrics",
    featured: true,
    abstract: "Formulates a rotation-invariant local textural descriptor that captures directional gradient deviations across fine facial regions, outperforming standard Gabor and LBP benchmarks on CK+ and JAFFE datasets."
  },
  {
    id: "pub-journal-docker-2016",
    title: "Analysis of a Network IO Bottleneck in Big Data Environments Based on Docker Containers",
    authors: ["P. C. V. Varma", "K. V. K. Chakravarthy", "V. Valli Kumari", "S. Viswanadha Raju"],
    year: 2016,
    venue: "Big Data Research (Elsevier)",
    type: "Journal",
    isbnOrIssn: "ISSN 2214-5796",
    doi: "10.1016/j.bdr.2015.12.001",
    category: "Cloud & Systems",
    featured: true,
    abstract: "High-impact empirical benchmark identifying hypervisor network virtualization degradation in containerized Hadoop deployments, proposing optimized bridge bypassing heuristics."
  },
  {
    id: "pub-journal-genomics-2016",
    title: "Next Generation Sequencing (NGS) Database for Tandem Repeats with Multiple Pattern 2^0-Shaft Multicore String Matching",
    authors: ["Chinta Someswara Rao", "S. Viswanadha Raju"],
    year: 2016,
    venue: "Genomics Data (Elsevier)",
    type: "Journal",
    isbnOrIssn: "ISSN 2213-5960",
    doi: "10.1016/j.gdata.2016.01.018",
    category: "Algorithms & Data",
    featured: true,
    abstract: "Designs an ultrascalable multithreaded string search engine indexing microsatellites and short tandem repeats across whole Homo sapiens and primate chromosome sets with order-of-magnitude latency gains."
  },
  {
    id: "pub-journal-string-matching-2018",
    title: "Parallel String Matching with Linear Array, Butterfly and Divide and Conquer Models",
    authors: ["S. Viswanadha Raju", "K. K. V. V. S. Reddy", "Chinta Someswara Rao"],
    year: 2018,
    venue: "Annals of Data Science (Springer)",
    type: "Journal",
    isbnOrIssn: "ISSN 2198-5804",
    doi: "10.1007/s40745-017-0130-9",
    category: "Algorithms & Data",
    featured: false,
    abstract: "Exhaustive theoretical and empirical comparison of parallel algorithmic paradigms mapped to hardware array structures for continuous real-time packet inspection."
  },
  {
    id: "pub-journal-rough-entropy-2018",
    title: "Data Labeling Method Based on Cluster Similarity Using Rough Entropy for Categorical Data Clustering",
    authors: ["S. Viswanadha Raju", "G. Sreenivasulu", "N. Sambasiva Rao"],
    year: 2018,
    venue: "International Journal of Engineering & Technology",
    type: "Journal",
    isbnOrIssn: "ISSN 2227-524X",
    category: "Algorithms & Data",
    featured: false,
    abstract: "Introduces rough set mathematical definitions of boundary entropy to dynamically detect cluster concept drift without requiring pre-labeled training distributions."
  },
  {
    id: "pub-journal-heart-disease-2016",
    title: "A Knowledge Driven Approach for Efficient Analysis of Heart Disease Dataset",
    authors: ["S. Viswanadha Raju", "G. N. Beena Bethel", "T. V. Rajinikanth"],
    year: 2016,
    venue: "International Journal of Computer Applications",
    type: "Journal",
    isbnOrIssn: "ISSN 0975-8887",
    category: "AI & ML",
    featured: false,
    abstract: "Clinical decision support framework combining morphological cardiac MRI segmentation with probabilistic decision trees for coronary anomaly detection."
  },
  {
    id: "pub-conf-iacc-2016",
    title: "Concurrent Information Retrieval System (IRS) for Large Volume of Data with Multiple Pattern Multiple (2^N) Shaft Parallel String Matching",
    authors: ["S. Viswanadha Raju", "Chinta Someswara Rao"],
    year: 2016,
    venue: "Annals of Data Science / IEEE CPS",
    type: "Conference",
    isbnOrIssn: "ISSN 2198-5804",
    category: "Algorithms & Data",
    featured: false,
    abstract: "Scalable parallelization architecture dividing long text streams across 2^N processor cores, demonstrating linear speedup on 64-node clusters."
  },
  {
    id: "pub-conf-aadhar-vigilance-2015",
    title: "AADHAR Integrated Biometric Vigilance System",
    authors: ["Dr. S. Viswanadha Raju"],
    year: 2015,
    venue: "India International Science Festival — Young Scientists' Meet, DST Government of India",
    type: "Conference",
    category: "Computer Vision & Biometrics",
    featured: true,
    abstract: "Presented before the Department of Science & Technology (DST) detailing real-time verification architectures linking national UIDAI databases with distributed biometric sensors."
  }
];

export const LEADERSHIP_ROLES: LeadershipRole[] = [
  {
    id: "principal-sultanpur",
    title: "Principal",
    organization: "JNTUH University College of Engineering Sultanpur",
    period: "14 October 2025 — Present",
    scope: "Executive Head of Institution overseeing collegiate governance, academic regulations, research culture, faculty development, and physical infrastructure development.",
    achievements: [
      "Instituted outcome-oriented performance indicators across undergraduate and PG faculties",
      "Accelerated digital campus administrative systems and student grievance redressal channels",
      "Mobilized academic linkages with leading industrial organizations in the Hyderabad technology corridor"
    ]
  },
  {
    id: "principal-jagtial",
    title: "Principal",
    organization: "JNTUH University College of Engineering Jagtial",
    period: "29 April 2025 — 13 October 2025",
    scope: "Led constituent college operations encompassing 5 engineering departments, student hostel administration, university examinations, and community engagement.",
    achievements: [
      "Upgraded specialized laboratories with modern computational hardware and software licenses",
      "Fostered significant increases in campus placement offers and technical symposium attendance"
    ]
  },
  {
    id: "vice-principal",
    title: "Vice Principal",
    organization: "JNTUH College of Engineering Jagtial",
    period: "2016 — 2021",
    scope: "Five-year senior executive leadership managing academic timetables, internal assessments, statutory committees, student discipline, and college infrastructure.",
    achievements: [
      "Formulated rigorous academic calendar compliance and continuous outcome evaluations",
      "Supervised university grant distributions, TEQIP allocation metrics, and technical procurement"
    ]
  },
  {
    id: "iqac-coordinator",
    title: "IQAC Coordinator",
    organization: "JNTUH College of Engineering Jagtial",
    period: "2016 — 2019",
    scope: "Directed the Internal Quality Assurance Cell (IQAC), formulating benchmark quality metrics across curriculum, research output, teaching-learning evaluations, and student feedback.",
    achievements: [
      "Authored institutional Self Study Reports (SSR) and Annual Quality Assurance Reports (AQAR)",
      "Pioneered structured course exit surveys and alumni feedback integration for syllabus revision"
    ]
  },
  {
    id: "hod-cse",
    title: "Head, Department of Computer Science & Engineering",
    organization: "JNTUH College of Engineering Jagtial",
    period: "2011 — 2015",
    scope: "Departmental chairperson directing academic schedules, faculty recruitment, laboratory construction, curriculum delivery, and student projects for CSE & IT streams.",
    achievements: [
      "Introduced modern electives in Cloud Computing, Big Data, and Information Security",
      "Founded student technical societies and hackathons that trained thousands of undergraduates"
    ]
  },
  {
    id: "nba-coordinator",
    title: "NBA Coordinator & Director of MCA",
    organization: "Gokaraju Rangaraju Institute of Engineering & Technology (GRIET)",
    period: "2008 — 2010",
    scope: "Spearheaded National Board of Accreditation (NBA) compliance workflows, aligning post-graduate and undergraduate programs with Tier-1 criteria.",
    achievements: [
      "Guided departmental faculty through the transition to student-centric OBE documentation",
      "Achieved successful NBA accreditation accreditations for eligible academic streams"
    ]
  },
  {
    id: "nptel-spoc",
    title: "NPTEL SPOC Coordinator",
    organization: "JNTUH UCE Jagtial Local Chapter (#1363)",
    period: "2016 — October 2025",
    scope: "Single Point of Contact for IIT Madras / NPTEL MOOC courses, encouraging thousands of students and faculty members to achieve national certifications.",
    achievements: [
      "Ranked among top active SWAYAM-NPTEL local chapters across South India",
      "Facilitated faculty development through IIT-certified advanced technical diplomas"
    ]
  },
  {
    id: "governing-bodies",
    title: "Member of Governing Bodies, Academic Councils & Boards of Studies",
    organization: "9 Premier Engineering Colleges & Universities",
    period: "2012 — Present",
    scope: "University and government-nominated expert member on highest academic policy bodies, formulating academic regulations and curriculum structures.",
    achievements: [
      "Contributed to syllabus restructuring across Autonomous and Affiliated institutions in Telangana and AP",
      "Advised collegiate boards on NEP 2020 multi-disciplinary electives and credit transfer rules"
    ]
  }
];

export const EDUCATIONAL_RESOURCES: EducationalResource[] = [
  {
    id: "res-obe-book",
    title: "Outcome Based Education — Implementation in Engineering Institutions",
    type: "Book",
    format: "Paperback & Digital Handbook",
    year: "2021",
    description: "Comprehensive practical manual explaining the methodology of CO-PO-PSO mapping, setting threshold targets, direct and indirect evaluation rubrics, and continuous quality improvement loops for NBA Tier-I & Tier-II institutions.",
    publisher: "Notion Press (ISBN 9798886841732)",
    accessUrl: "https://notionpress.com/read/outcome-based-education",
    verified: true
  },
  {
    id: "res-nlu-obe",
    title: "Outcome Based Education and Research: Implementation Perspectives",
    type: "Research Monograph",
    format: "Official Research Publication (PDF)",
    year: "2023",
    description: "Published monograph examining the cross-disciplinary institutional integration of outcome-based pedagogy and research productivity, published by the National Law University and Judicial Academy, Assam.",
    publisher: "National Law University & Judicial Academy (Assam)",
    accessUrl: "https://nluassam.ac.in/docs/pub/Outcome%20based%20Education%20and%20Research.pdf",
    verified: true
  },
  {
    id: "res-obe-video-lecture",
    title: "Foundations and Methodology of Outcome-Based Education",
    type: "Video Lecture",
    format: "Archival Academic Video Lecture",
    year: "2011",
    description: "Early landmark video lecture clarifying the transition from traditional syllabus coverage to measurable student learning outcomes and Washington Accord accreditation compliance.",
    publisher: "Academic Resource Repository (YouTube)",
    accessUrl: "https://www.youtube.com/watch?v=OcBdH_0Udqc",
    verified: true
  },
  {
    id: "res-nptel-local-chapter",
    title: "NPTEL SWAYAM Local Chapter Records & Certified Student Metrics",
    type: "Accreditation Framework",
    format: "Official Statistics Portal",
    year: "2016–2025",
    description: "Official performance tracking and course completion records for JNTUH Local Chapter (#1363), illustrating over 8 years of sustained e-learning mentorship under Dr. Raju's coordination.",
    publisher: "IIT Madras / NPTEL Portal",
    accessUrl: "https://nptel.ac.in/localchapter/statistics/1363",
    verified: true
  }
];

export const ACADEMIC_VISION = {
  quote: "Engineering education is not merely the transmission of static formulas; it is the deliberate cultivation of inquisitive, ethical minds equipped to architect resilient solutions for societal challenges.",
  headline: "Shaping Ideas. Advancing Education. Inspiring Generations.",
  pillars: [
    {
      title: "Outcome-Based Rigor",
      description: "Moving from teacher-centric content coverage to learner-centric competency mastery, verified through transparent attainment matrices and authentic assessment."
    },
    {
      title: "Industry 5.0 & Human-Centric Tech",
      description: "Harmonizing artificial intelligence, automation, and high-performance computing with human empathy, ecological responsibility, and societal resilience."
    },
    {
      title: "Interdisciplinary Research",
      description: "Breaking artificial departmental barriers to solve real-world grand challenges in healthcare, sustainable agriculture, smart cities, and national digital security."
    },
    {
      title: "Ethical Academic Governance",
      description: "Championing institutional transparency, continuous faculty empowerment, inclusive meritocracy, and student mentorship as foundational pillars of university leadership."
    }
  ]
};
