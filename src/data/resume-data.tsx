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

export const RESUME_DATA = {
  name: "Tarun Eswar",
  initials: "TE",
  location: "Massachusetts, USA",
  locationLink: "https://www.google.com/maps/place/Massachusetts",
  about: "Incoming Freshman at Washington University STL",
  summary:
    "I am a senior at the Massachusetts Academy of Math & Science and next year I’ll be matriculating to WashU in STL. I’m primarily interested in computer science and finance, and so far, I’ve explored the real-world applications of these fields. Aside from these interests, you can find me working on poetry, journalism articles, op-eds, journalism articles (check out 365toJapan.com!).",
  avatarUrl: "https://media.licdn.com/dms/image/D5603AQGMGKatTrYgvQ/profile-displayphoto-shrink_200_200/0/1699991688518?e=1713398400&v=beta&t=ZjvJcMuGhequzZO0QRkAJ1Ka2HHtKJvkeb-x4RA8Hbg",
  personalWebsiteUrl: "https://charlestang.dev",
  contact: {
    email: "teswar@wpi.edu",
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
      degree: "Bachelor's Degree in Computer Science",
      coursework: "TBD",
      gpa: null,
      start: "2024",
      end: "(2028)",
    },
    {
      school: "Massachusetts Academy of Math and Science",
      image: mams,
      degree: "High School Diploma and Dual Enrollment @ WPI",
      coursework:
        "Calculus, Discrete Math, Algorithms, Systems Programming Concepts, Accelerated Object Oriented Programming, Intermediate Japanese I",
      gpa: "4.0",
      start: "2020",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Staples",
      link: "https://www.staples.com/",
      badges: ["In-Person"],
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
      start: "2019",
      end: "Present",
      description:
        "Created weekly Japanese blogs (cultural, learning, research); worked with Northeastern lecturer Brett Murphy Hunt as an editor; reached 4000+ global reads and created a successful community haiku contest; developed the platform from scratch with a MERN stack.",
      
    },
    {
      company: "Rakuten",
      link: "https://sixthsense.rakuten.com/platform/cognitive-ai",
      badges: ["In-Person"],
      title: "Software Engineering Learning Intern",
      start: "Jun 2023",
      end: "Aug 2024",
      description:
        "Leveraged LLMs in building out new capabilities for GenerativeAI in both the front and back-end; focused on the Cognitive Engine front-end with typescript, redux, and tailwind.",
    },
    {
      company: "Tufts Financial Group",
      link: "https://www.tuftsfinancialgroup.org/",
      badges: ["Remote"],
      title: "Web Developer",
      start: "Sep 2023",
      end: "Jan 2023",
      description:
        "Pitched improvements to TFG; revamped TFG’s application with improved SEO and design creating a 17% increase in activity metrics; led weekly update meetings with executive members of the organization.",
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
        label: "projx-hbp.web.app",
        href: "https://projx-hbp.web.app/",
      },
    },
    {
      title: "ProjX",
      techStack: ["Firebase", "ExpressJS", "ReactJS", "NodeJS", "Ant-Design"],
      description: "Kickstarting careers through tailored project recommendations",
      link: {
        label: "roadmap-wpi.web.app",
        href: "https://roadmap-wpi.web.app",
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
    {
      title: "TriggerCalc",
      techStack: ["ReactJS", "NodeJS", "Bootstrap", "Git"],
      description: "A calculator to help women struggling with infertility/pregnancy process",
      link: {
        label: "triggercalc.com",
        href: "https://triggercalc.com/",
      },
    }
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
