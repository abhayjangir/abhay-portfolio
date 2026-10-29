export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  isConfigured: boolean; // Controls whether link is shown or kept hidden per instructions
}

export interface MetricItem {
  id: string;
  value: string;
  suffix?: string;
  label: string;
  description: string;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    isPrimary?: boolean;
    tag?: string;
  }[];
}

export interface ExperienceRole {
  role: string;
  type: string;
  period: string;
  isCurrent?: boolean;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface ExperienceCompany {
  company: string;
  location: string;
  progressionNote?: string;
  roles: ExperienceRole[];
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  tagline: string;
  description: string;
  reportedResult: {
    metric: string;
    context: string;
    disclaimer?: string;
  };
  technologies: string[];
  category: string;
  architecture: {
    frontend?: string;
    backend?: string;
    dataProcessing?: string;
    visualization?: string;
  };
  myContributions: string[];
  links?: {
    githubUrl?: string;
    liveUrl?: string;
  };
}

export interface ApproachPillar {
  number: string;
  title: string;
  summary: string;
  details: string[];
  icon: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  highlights: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    monogram: string;
    title: string;
    specialization: string;
    location: string;
    email: string;
    phone: string;
    resumeUrl: string;
    resumeFilename: string;
    summary: string;
    technologiesLine: string[];
  };
  socials: Record<string, SocialLink>;
  metrics: MetricItem[];
  about: {
    heading: string;
    lead: string;
    paragraphs: string[];
    principles: { title: string; desc: string }[];
  };
  skillCategories: SkillCategory[];
  experience: ExperienceCompany[];
  projects: ProjectCaseStudy[];
  engineeringApproach: ApproachPillar[];
  education: EducationItem[];
}

export const PORTFOLIO_DATA: PortfolioData = {
  personal: {
    name: "Abhay Jangir",
    monogram: "AJ",
    title: "Software Development Engineer | Full-Stack Developer",
    specialization: "React.js, JavaScript, TypeScript",
    location: "Gurugram, India",
    email: "abhayjangir65@gmail.com",
    phone: "+91 9460233480",
    resumeUrl: "/Abhay_Jangir_Resume.pdf",
    resumeFilename: "Abhay_Jangir_Resume.pdf",
    summary:
      "Software Development Engineer with professional experience building production web applications using React.js, JavaScript, Django, Python, and REST APIs. Experienced in end-to-end feature delivery, frontend–backend integration, production debugging, and business-process automation. Delivered 15+ full-stack features and implemented 30+ REST API endpoints, with measurable improvements to operational workflows. Focused on building scalable, responsive, and maintainable frontend experiences for product-driven applications.",
    technologiesLine: [
      "React.js",
      "TypeScript",
      "Next.js",
      "Python",
      "Django",
    ],
  },
  socials: {
    github: {
      name: "GitHub",
      url: "https://github.com/abhayjangir",
      icon: "Github",
      isConfigured: false, // Update to true once personal profile link is verified
    },
    linkedin: {
      name: "LinkedIn",
      url: "https://linkedin.com/in/abhay-jangir",
      icon: "Linkedin",
      isConfigured: false, // Update to true once personal profile link is verified
    },
    email: {
      name: "Email",
      url: "mailto:abhayjangir65@gmail.com",
      icon: "Mail",
      isConfigured: true,
    },
    phone: {
      name: "Phone",
      url: "tel:+919460233480",
      icon: "Phone",
      isConfigured: true,
    },
  },
  metrics: [
    {
      id: "features",
      value: "15+",
      label: "Full-Stack Features Delivered",
      description: "Owned end-to-end across React.js and Django/Python stacks in production.",
      highlight: true,
    },
    {
      id: "endpoints",
      value: "30+",
      label: "REST API Endpoints",
      description: "Designed and implemented with Django REST Framework for core business workflows.",
      highlight: true,
    },
    {
      id: "accounts-reduction",
      value: "40–50%",
      label: "Reduction in Accounts Processing Effort",
      description: "Automated manual operational pipelines, drastically reducing team overhead.",
      highlight: false,
    },
    {
      id: "radiology-reduction",
      value: "~10%",
      label: "Reduction in Radiology Task Review Time",
      description: "Streamlined medical imaging workflows and DICOM/PACS task turnaround.",
      highlight: false,
    },
  ],
  about: {
    heading: "Engineering with purpose.",
    lead: "Building production software that connects user interfaces with robust backend architectures to solve tangible operational challenges.",
    paragraphs: [
      "I am a Software Development Engineer with hands-on production experience designing, building, and deploying web applications using React.js on the frontend and Django/Python on the backend.",
      "My work centers on the end-to-end feature lifecycle: architecting clean REST API contracts, connecting responsive frontend components, diagnosing and resolving complex production issues, and eliminating manual operational bottlenecks.",
      "In healthcare IT, I develop software workflows supporting DICOM and PACS medical imaging, with working exposure to HL7/FHIR healthcare interoperability standards. Additionally, I supported IT implementation for India's Digital Personal Data Protection (DPDP) Act 2023, collaborating closely with Business Operations to author technical documentation and process-flow architectures across four critical business lines for executive and Data Protection Officer review.",
      "I believe the best software is built by engineers who understand both the user's immediate experience and the business problem behind every specification.",
    ],
    principles: [
      {
        title: "Build for usability",
        desc: "Design responsive, frictionless interfaces that serve the user's intent with clarity and speed.",
      },
      {
        title: "Keep systems maintainable",
        desc: "Write modular, strongly typed code and clean architectural boundaries that teams can extend with confidence.",
      },
      {
        title: "Solve the actual problem",
        desc: "Focus on real-world business requirements and operational value rather than speculative complexity.",
      },
      {
        title: "Measure outcomes where possible",
        desc: "Evaluate technical solutions through measurable workflow efficiency, error reductions, and performance.",
      },
    ],
  },
  skillCategories: [
    {
      title: "Languages",
      description: "Core programming and scripting languages for frontend, backend, and data logic.",
      icon: "Code2",
      skills: [
        { name: "TypeScript", isPrimary: true, tag: "Primary" },
        { name: "JavaScript (ES6+)", isPrimary: true, tag: "Primary" },
        { name: "Python", isPrimary: true, tag: "Primary" },
        { name: "SQL", isPrimary: false },
      ],
    },
    {
      title: "Frontend Engineering",
      description: "Building responsive, accessible, component-driven client architectures.",
      icon: "Layout",
      skills: [
        { name: "React.js", isPrimary: true, tag: "Specialization" },
        { name: "Next.js", isPrimary: true, tag: "Core" },
        { name: "Tailwind CSS", isPrimary: true },
        { name: "Redux", isPrimary: false },
        { name: "HTML5 / Semantic Web", isPrimary: false },
        { name: "CSS3 / Modern Layouts", isPrimary: false },
      ],
    },
    {
      title: "Backend & REST APIs",
      description: "Designing reliable endpoints, business logic, and server integrations.",
      icon: "Server",
      skills: [
        { name: "Django", isPrimary: true, tag: "Core" },
        { name: "Django REST Framework", isPrimary: true, tag: "Core" },
        { name: "FastAPI", isPrimary: true },
        { name: "Node.js", isPrimary: false },
        { name: "REST API Design", isPrimary: true },
      ],
    },
    {
      title: "Databases",
      description: "Relational and document storage design, querying, and schema management.",
      icon: "Database",
      skills: [
        { name: "PostgreSQL", isPrimary: true },
        { name: "MySQL", isPrimary: true },
        { name: "MongoDB", isPrimary: false },
      ],
    },
    {
      title: "Cloud, DevOps & Tools",
      description: "Version control, containerization, and modern deployment environments.",
      icon: "Terminal",
      skills: [
        { name: "Git", isPrimary: true },
        { name: "GitHub", isPrimary: true },
        { name: "Docker", isPrimary: false },
        { name: "CI/CD Pipelines", isPrimary: false },
        { name: "AWS", isPrimary: false },
      ],
    },
    {
      title: "Healthcare Integration",
      description: "Specialized clinical IT standards and medical imaging communication.",
      icon: "Activity",
      skills: [
        { name: "DICOM", isPrimary: true, tag: "Domain" },
        { name: "PACS", isPrimary: true, tag: "Domain" },
        { name: "HL7 / FHIR Exposure", isPrimary: false },
      ],
    },
    {
      title: "Compliance & Technical Documentation",
      description: "Regulatory data privacy implementation and formal process architecture.",
      icon: "ShieldCheck",
      skills: [
        { name: "DPDP Act 2023 Implementation Support", isPrimary: true, tag: "Regulatory" },
        { name: "Technical Documentation", isPrimary: false },
        { name: "Process Workflows", isPrimary: false },
      ],
    },
    {
      title: "Data & Analytics",
      description: "Distributed data pipelines and analytical reporting visualization.",
      icon: "BarChart3",
      skills: [
        { name: "Apache Spark", isPrimary: true },
        { name: "Power BI", isPrimary: true },
      ],
    },
  ],
  experience: [
    {
      company: "U4RAD Technologies Pvt. Ltd.",
      location: "Gurugram, India",
      progressionNote: "Promoted to SDE within 4 months based on engineering ownership and feature delivery",
      roles: [
        {
          role: "Software Development Engineer",
          type: "Full-Time",
          period: "May 2026 – Present",
          isCurrent: true,
          summary:
            "Sole engineer owning end-to-end delivery of a major application workstream spanning requirements analysis, full-stack implementation, frontend–backend integrations, testing, and production deployment support.",
          achievements: [
            "Delivered 15+ production full-stack features using React.js on the frontend and Django/Python on the backend.",
            "Designed, documented, and deployed 30+ robust REST API endpoints using Django REST Framework.",
            "Engineered business-process automation that reduced the Accounts team's manual processing effort by approximately 40–50%.",
            "Optimized radiology review workflows, achieving an approximate 10% reduction in task review time for medical imaging specialists.",
            "Diagnosed and resolved 10+ production issues per month, ensuring high system uptime and rapid regression turnaround.",
            "Supported India DPDP Act 2023 implementation from the IT side, collaborating with Business Operations to draft technical and process-flow documentation across 4 business lines for leadership and DPO review.",
            "Engineered application features interfacing with DICOM/PACS medical imaging workflows, with direct exposure to HL7/FHIR healthcare standards.",
          ],
          technologies: [
            "React.js",
            "JavaScript",
            "Django",
            "Django REST Framework",
            "Python",
            "PostgreSQL",
            "DICOM / PACS",
            "DPDP Act 2023",
          ],
        },
        {
          role: "Software Engineer Trainee",
          type: "Full-Time",
          period: "January 2026 – April 2026",
          isCurrent: false,
          summary:
            "Contributed to production web application development, frontend integrations, and healthcare imaging workflows before fast-track promotion to SDE.",
          achievements: [
            "Contributed to production web application development using React.js and Django.",
            "Supported core application features and DICOM/PACS medical imaging workflows.",
            "Demonstrated engineering autonomy and rapid delivery velocity, earning promotion to Software Development Engineer within four months.",
          ],
          technologies: [
            "React.js",
            "JavaScript",
            "Python",
            "Django",
            "REST APIs",
            "DICOM / PACS",
          ],
        },
      ],
    },
  ],
  projects: [
    {
      id: "heart-disease-prediction",
      title: "Heart Disease Prediction System",
      tagline: "Next.js Frontend & FastAPI/Python Machine Learning Pipeline",
      description:
        "Built a responsive Next.js frontend integrated with a FastAPI/Python backend for an evaluation-tested heart disease prediction application.",
      reportedResult: {
        metric: "92% Accuracy",
        context: "Reported evaluation accuracy in test benchmarks",
        disclaimer: "Metric represents the reported evaluation accuracy in experimental testing; not a guarantee of medical reliability.",
      },
      technologies: ["Next.js", "FastAPI", "Python", "TypeScript", "REST APIs", "Tailwind CSS"],
      category: "Full-Stack & Applied Machine Learning",
      architecture: {
        frontend: "Next.js dynamic client with real-time risk parameter validation, accessible responsive UI forms, and asynchronous prediction visualization.",
        backend: "FastAPI server exposing typed REST endpoints for model inference, payload schema verification, and low-latency prediction responses.",
      },
      myContributions: [
        "Architected the Next.js frontend user interface with modular input components and client-side validation.",
        "Integrated the frontend with the Python/FastAPI backend via strongly typed REST API contracts.",
        "Created intuitive visualization of prediction results and risk indicators based on API inference responses.",
        "Documented API integration specifications and end-to-end prediction data flow.",
      ],
      links: {
        // Placeholders: these remain hidden or configured once live URLs exist
        githubUrl: undefined,
        liveUrl: undefined,
      },
    },
    {
      id: "crop-yield-prediction",
      title: "Real-Time Crop Yield Prediction",
      tagline: "Distributed Data Processing Pipeline & Power BI Telemetry",
      description:
        "Developed a real-time crop yield prediction solution utilizing Apache Spark for distributed data processing and Power BI for interactive visualization.",
      reportedResult: {
        metric: "Distributed Stream",
        context: "Real-time data aggregation via Apache Spark pipeline",
      },
      technologies: ["Apache Spark", "Power BI", "Python", "Data Processing", "ETL Pipelines"],
      category: "Big Data & Business Intelligence",
      architecture: {
        dataProcessing: "Apache Spark distributed engine ingesting multi-variable agricultural datasets, performing transformations and aggregated metrics computation.",
        visualization: "Interactive Power BI executive dashboards surfacing regional yield projections, historical comparison, and actionable indicators.",
      },
      myContributions: [
        "Built data transformation and aggregation workflows leveraging Apache Spark distributed computing.",
        "Organized real-time agricultural data pipelines for structured query and reporting consumption.",
        "Designed comprehensive Power BI visualization dashboards to present complex predictive yields to operational stakeholders.",
      ],
      links: {
        githubUrl: undefined,
        liveUrl: undefined,
      },
    },
  ],
  engineeringApproach: [
    {
      number: "01",
      title: "Understand the problem",
      summary: "Translate requirements into clear, actionable implementation tasks.",
      details: [
        "Clarify business expectations, domain boundaries, and user friction points before writing code.",
        "Break complex requests into decoupled, manageable engineering deliverables with clear acceptance criteria.",
      ],
      icon: "Compass",
    },
    {
      number: "02",
      title: "Build maintainable interfaces",
      summary: "Create responsive, reusable UI components with a consistent design system.",
      details: [
        "Develop modular React/Next.js components with strict TypeScript types, clean prop contracts, and accessible semantic HTML.",
        "Establish design tokens, consistent spacing systems, and responsive layouts across all viewports.",
      ],
      icon: "Layers",
    },
    {
      number: "03",
      title: "Connect systems reliably",
      summary: "Integrate frontend applications with APIs and backend services.",
      details: [
        "Design robust REST API contracts with predictable error handling, status codes, and input validation.",
        "Implement clean client-side data fetching, resilient states (loading, error, empty), and optimistic updates.",
      ],
      icon: "GitBranch",
    },
    {
      number: "04",
      title: "Improve through debugging",
      summary: "Investigate production issues, validate fixes, and refine workflows.",
      details: [
        "Diagnose production anomalies methodically using network traces, application logs, and reproducible test cases.",
        "Refine operational pipelines to systematically eliminate root causes and automate recurring manual overhead.",
      ],
      icon: "Wrench",
    },
  ],
  education: [
    {
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      institution: "Chandigarh University",
      location: "Punjab, India",
      period: "2021 – 2025",
      gpa: "7.45 / 10",
      highlights: [
        "Rigorous coursework in Data Structures & Algorithms, Database Management Systems, Computer Networks, and Object-Oriented Software Engineering.",
        "Applied software engineering projects focusing on full-stack web architectures, distributed systems, and modern API standards.",
      ],
    },
  ],
};

