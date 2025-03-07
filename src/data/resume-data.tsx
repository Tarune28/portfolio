import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import washu from "../images/logos/washu1.png";
import mams from "../images/logos/mams.png";
import profile from "../images/logos/headshot.jpeg";
import { DescriptionIcon } from "@/components/icons/DescriptionIcon";

export const RESUME_DATA = {
  name: "Tarun Eswar",
  initials: "TE",
  location: "Massachusetts, USA",
  locationLink: "https://www.google.com/maps/place/Massachusetts",
  about: "CS + Applied Math at WashU",
  summary:
    "Hi, I’m Tarun, a current student at the Washington University in St. Louis, primarily interested in computer science and applied  math. So far, I’ve explored the real-world applications of these fields through projects, research, and internships. For more details, check out my resume located in the header. In my free time, I often write creative pieces.",
  tutoringSummary: "Hi, I’m Tarun, a current student at Washington University in St. Louis. Throughout my time there, I’ve enjoyed math and computer science, and now I hope to help high school students achieve their full potential in these areas. With a strong background in mathematics, computer science, and engineering, my services range from AP to college-level classes. A more detailed overview of my services can be found below. ",
  tutoringServices: [
    "Algebra",
    "Geometry",
    "AP Pre-Calc",
    "AP Calculus",
    "Calculus III",
    "AP Statistics",
    "AP CSA",
    "Discrete Math"
  ],
  tutoringContact: "If you’re interested in learning more, feel free to contact me at e.tarun@wustl.edu. We will pencil in one free trial session and progress from there. If you require help in a subject related to either math or computer science that’s not listed above, feel free to reach out--I'd be happy to let you know if I can help!",
  avatarUrl: "/headshot.jpeg",
  tutoringAvatar: "/headshot.jpeg",
  personalWebsiteUrl: "https://www.taruneswar.com/headshot.jpeg",
  contact: {
    email: "e.tarun@wustl.edu",
    // tel: "+19784939450",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Tarune28",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tarun-eswar-b10150233/",
        icon: LinkedInIcon,
      },
      {
        name: "Resume",
        url: "/resume.pdf",
        icon: DescriptionIcon,
      }
      
    ],
    tutoring: {
      name: "Tarun",
      url: "/tutoring",
    },
  },
  education: [
    {
      school: "Washington University in St. Louis",
      image: washu,
      degree: "Bachelor's Degree in Computer Science + Applied Math",
      coursework: "Calculus III, Discrete Math, Introduction to Hardware Engineering, Data Structures and Algorithms",
      gpa: "4.0",
      start: "2024",
      end: "(2027)",
    },
    {
      school: "Worcester Polytechnic Institute",
      image: mams,
      degree: "Computer Science",
      coursework: "Object-Oriented Design, Systems Design, Calculus I-III, Applied Statistics",
      gpa: "4.0",
      start: "2023",
      end: "2024",
    },
  ],
  additional: [
     {
      company: "Staples",
      link: "https://www.staples.com/",
      badges: ["Shrewsbury, MA"],
      title: "Retail Associate",
      start: "Oct 2023",
      end: "Present",
      description: "Trained and worked at the Shrewsbury location as a cashier aimed at improving the customer experience. Served as a janitor, re-stocker for freight, and more in addition to cashiering."
    },
    {
      company: "365toJapan",
      link: "https://365tojapan.com/",
      badges: ["Self-Employed"],
      title: "Founder, Author, Developer",
      start: "Sep 2019",
      end: "Jun 2024",
      description:
        "Created weekly Japanese blogs (cultural, learning, research); worked with Northeastern lecturer Brett Murphy Hunt as an editor; reached 4000+ global reads and created a successful community haiku contest; developed the platform from scratch with a MERN stack.",
    },
    
  ],
  work: [
    {
      company: "Rakuten",
      link: "https://sixthsense.rakuten.com/platform/cognitive-ai",
      badges: ["Remote"],
      title: "Software Engineering Learning Intern",
      start: "Jun 2023",
      end: "Aug 2023",
      description:
        // "Leveraged LLMs in building out new capabilities for GenerativeAI in both the front and back-end; focused on the Cognitive Engine front-end with typescript, redux, and tailwind.",

        "Co-developed a QA chatbot (LLMs) to answer company legal questions (95% coverage) with Tiger Team andused quantization methods to optimize Llama2 and Vicuna and store embeddings in a ChromaDB vector. Achieved accurate results with response of ~2.5 seconds (12GB GPU tunneling) and created Django QA model API (Express) with dashboard (React) and JWT / Rakuten legal recommendations to protect documents. Contributed KPI UI feature components for a production B2B product (Cognitive AIOps) on a three-stage testing workflow with proprietary component libraries. Worked with Redux, Typescript, and Vue framework."
    },
    {
      company: "Tufts Financial Group",
      link: "https://www.tuftsfinancialgroup.org/",
      badges: ["Medford, MA"],
      title: "Web Developer",
      start: "Sep 2023",
      end: "Jan 2023",
      description:
        "Collaborated with club executives to revamp web app and SEO capabilities for the club (50+ members). Improved page interactions by 10% and created a more accessible layout and UX for all audiences. Managed minor budget provided by the team for various improvement tasks on the web application.",
    },
    {
      company: "Rakuten SixthSense",
      link: "https://sixthsense.rakuten.com/platform/cognitive-ai",
      badges: ["Remote"],
      title: "Software Engineering Learning Intern",
      start: "Jun 2022",
      end: "Aug 2022",
      description:
        "Worked on the front and backend for 6th sense—a monitoring platform produced as a B2B model for other developers to track the performance vitals of their projects; functioned as a full stack developer using vue.js, node.js, and Elastic Cloud to provide better capabilities to local test acceleration and incident management of applications.",
    },

    

  ],
  skills: [
    "ReactJS",
    "NodeJS",
    "LaTeX",
    "Java",
    "C/C++",
    "HTML/CSS",
    "Linux/Apache/etc.",
    "MySQL",
    "Firebase Technologies",
    "MongoDB",
    "ElasticDB",
    "Tensorflow"
  ],
  projects: [
    {
      title: "MAMS SISO",
      techStack: ["ReactJS", "NodeJS", "ExpressJS", "MySQL", "Raspberry Pi", "Firebase", "+ more"],
      description: "A production-level [direct access restricted] digital student attendance system",
      link: {
        label: "mass-academy-sign-in-system.web.app",
        href: "https://mass-academy-sign-in-system.web.app/",
      },
      production: true,
    },
    {
      title: "ProjX Careers",
      techStack: ["Firebase", "ExpressJS", "ReactJS", "NodeJS", "Ant-Design"],
      description: "Kickstarting careers through tailored project recommendations",
      link: {
        label: "projx-hbp.web.app",
        href: "https://projx-hbp.web.app/",
      },
      production: false,
    },
    {
      title: "WPI Roadmap",
      techStack: ["Firebase", "ExpressJS", "ReactJS", "NodeJS", "Ant-Design"],
      description: "Plan your academic success at WPI (2024 WPI GoatHacks Winner)",
      link: {
        label: "roadmap-wpi.web.app",
        href: "https://roadmap-wpi.web.app",
      },
      production: false,
    },
    {
      title: "WashU Course Planner",
      techStack: ["ReactJS", "NodeJS", "ExpressJS", "Primsa", "MUI"],
      description: "Helping students plan their WashU academic journey",
      link: {
        label: "washu-course-planner.web.app",
        href: "https://github.com/dscwashu/washu-course-planner",
      },
      production: false,
    },
    {
      title: "MFLogP - Dynamics Lab",
      techStack: ["Python", "Flask", "OpenCV", "Chemparse"],
      description: "An interactive way to use the Molecular Formula-LogP model",
      link: {
        label: "mflogp.wpi.edu",
        href: "https://mflogp.wpi.edu/",
      },
      production: false,
    },
    // {
    //   title: "Trify",
    //   techStack: ["Flutter", "Dart", "Location Services", "Routing"],
    //   description: "Accelerating electrification of transportation",
    //   link: {
    //     label: "trify.us",
    //     href: "https://trify.us/",
    //   },
    // },

    {
      title: "Modeling TRS MRI",
      techStack: ["Python", "Tensorflow", "ResNet", "OpenCV", "GradCam", "Flask"],
      description: "A deep learning model to predict OCD from fMRI scans",
      link: {
        label: "arXiv",
        href: "https://arxiv.org/abs/2306.12435v2",
      },
      production: true,
    },
    // {
    //   title: "TriggerCalc",
    //   techStack: ["ReactJS", "NodeJS", "Bootstrap", "Git"],
    //   description: "A calculator to help women struggling with infertility/pregnancy process",
    //   link: {
    //     label: "triggercalc.com",
    //     href: "https://triggercalc.com/",
    //   },
    // }
  ],
  honors: [
    {
      title: "WPI GoatHacks Competition",
      description: "Collaborated with a team of 4 and won the 2024 WPI GoatHacks Hackathon. Created the WPI Roadmap app to help students plan their academic success at WPI.",
      link: {
        label: "WPI Hackathon",
        href: "https://hack.wpi.edu/index.html",
      },
    },
    {
      title: "Scholastic Arts & Writing Awards",
      description: "Placed in the top 0.05% of poetry entries for poetry. Published piece and recognized as a national gold medalist / NSPP semifinalist nominee. Invited to the 100th Ceremony at Carnegie Hall.",
      link: {
        label: "award",
        href: "https://www.artandwriting.org/gallery/640423",
      },
    },
    {
      title: "Top 60 Japan News & Blogs for 2023",
      // awards: ["USA Finalist (Top 6%)"],
      description: "Awarded for the 365toJapan blog as a top 60 blog for Japan news and culture which was based on activity metrics, community engagement, and content quality.",
      link: {
        label: "ranking",
        href: "https://blog.feedspot.com/japan_blogs/",
      },
    },
  ],
  certificates: [
    {
      title: "Japanse Language Proficiency Test N5",
      awardee: ["The Japan Foundation"],
      description: "Intermediate Japanese Language Proficiency",
    },
    {
      title: "The Seal of Biliteracy in Japanese & English",
      awardee: ["The State of Massachusetts"],
      description:
        "Awarded for proficiency in Japanese and English",
    },
  ],
} as const;
