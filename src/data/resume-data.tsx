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
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import washu from "../images/logos/washu1.png";
import mams from "../images/logos/mams.png";
import profile from "../images/logos/headshot.jpeg";

export const RESUME_DATA = {
  name: "Tarun Eswar",
  initials: "TE",
  location: "Massachusetts, USA",
  locationLink: "https://www.google.com/maps/place/Massachusetts",
  about: "Computer Science + Econ at WashU",
  summary:
    "I am a freshman at the Washington University in St. Louis, primarily interested in computer science and economics. So far, I’ve explored the real-world applications of these fields through projects, research, and internships. In my free time, I often work on poetry/blogging (check out 365toJapan.com!).",
  avatarUrl: "https://media.licdn.com/dms/image/v2/D4E03AQFZd2n_1CkDKA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1713739995438?e=1731542400&v=beta&t=9GKhYrB9GB78KszeV5olwncurOV599SJbIayZDTXn5M",
  personalWebsiteUrl: "https://taruneswar.com",
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
    ],
  },
  education: [
    {
      school: "Washington University in Saint Louis",
      image: washu,
      degree: "Bachelor's Degree in CS + Econ",
      coursework: "TBD",
      gpa: null,
      start: "2024",
      end: "(2028)",
    },
    {
      school: "Worcester Polytechnic Institute",
      image: mams,
      degree: "Computer Science",
      coursework:
        "Calculus, Discrete Math, Algorithms, Systems Programming Concepts, Accelerated Object Oriented Programming, Intermediate Japanese I",
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
      badges: ["Banglore, IN"],
      title: "Software Engineering Learning Intern",
      start: "Jun 2023",
      end: "Aug 2024",
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
      end: "Aug 2023",
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
      techStack: ["ReactJS", "NodeJS", "ExpressJS", "MySQL", "Raspberry Pi", "Firebase"],
      description: "A production-level digital student attendance system",
      link: {
        label: "mams-siso.wpi.edu",
        href: "https://mams-siso.wpi.edu",
      },
    },
    {
      title: "ProjX",
      techStack: ["Firebase", "ExpressJS", "ReactJS", "NodeJS", "Ant-Design"],
      description: "Kickstarting careers through tailored project recommendations",
      link: {
        label: "projx-hbp.web.app",
        href: "https://projx-hbp.web.app/",
      },
    },
    {
      title: "WPI Roadmap",
      techStack: ["Firebase", "ExpressJS", "ReactJS", "NodeJS", "Ant-Design"],
      description: "Plan your academic success at WPI (2024 WPI GoatHacks Winner)",
      link: {
        label: "roadmap-wpi.web.app",
        href: "https://roadmap-wpi.web.app",
      },
    },
    {
      title: "MFLogP - Dynamics Lab",
      techStack: ["Python", "Flask", "OpenCV", "Chemparse"],
      description: "An interactive way to use the Molecular Formula-LogP model",
      link: {
        label: "mflogp.wpi.edu",
        href: "https://mflogp.wpi.edu/",
      },
    },

    {
      title: "Modeling T1 Resting-State MRI Variants",
      techStack: ["Python", "Tensorflow", "ResNet", "OpenCV", "GradCam", "Flask"],
      description: "A deep learning model to predict OCD from fMRI scans",
      link: {
        label: "arXiv",
        href: "https://arxiv.org/abs/2306.12435v2",
      },
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
