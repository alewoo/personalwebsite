import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "alex wang",
  logo: "/pfp2.jpg",
  email: "alexwang2023@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "home",
    url: "/",
  },
  {
    title: "about",
    url: "/about",
  },
  {
    title: "projects",
    url: "/projects",
  },
  // {
  //   title: "blog",
  //   url: "/blog",
  // },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/alewoo",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/alexwang-/",
    icon: "mdi:linkedin",
    external: true,
  },
  {
    title: "Twitter",
    url: "https://www.twitter.com/imalexwang",
    icon: "mdi:twitter",
    external: true,
  },
  {
    title: "SubStack",
    url: "https://imalexwang.substack.com/",
    icon: "mdi:blog",
    external: true,
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "alex wang",
    description: "building tools that empower the next generation",
    image: identity.logo,
  },
  role: "cs @ georgia tech | director of ship it @ startup exchange | building the future",
  description: "designer turned developer.",
  socialLinks: socialLinks,
  links: [
    {
      title: "about",
      url: "/about",
    },
    {
      title: "projects",
      url: "/projects",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "about",
    description: "cs student at georgia tech",
    image: identity.logo,
  },
  subtitle: "my story",
  about: {
    description: `
hi, i'm alex, a 20 y/o cs student at georgia tech who discovered his love for building at 16 — starting with a graphic design community that grew to 1.5k members during covid.

that spark for creation led me down an unconventional path: from releasing a rap album with 10k+ streams at 17, to leading my varsity squash team to become the #1 public high school team in the nation, to immersing myself in chinese culture through study abroad at 19.

these diverse experiences taught me one thing: whether it's building communities, creating music, or leading teams, i'm driven by the desire to innovate and make an impact. now, as a software engineer and entrepreneur, i channel this creative energy into building tools that solve meaningful problems.

i value doing the right thing, being a good human, and fostering genuine relationships. through cs, design, and creativity, i aim to build a better world — redefining the boundaries of what's possible.`,
    image_l: {
      url: "/pic2.jpg",
      alt: "Left Picture",
    },
    image_m: {
      url: "/IMG_8828.JPG",
      // url: "/SU24 Maker Venture Photo 2.jpg",
      alt: "Middle Picture",
    },
    image_r: {
      url: "/IMG_3610.jpg",
      // url: "/SU24 Maker Venture Photo 2.jpg",
      alt: "Right Picture",
    },
  },
  timeline: {
    items: [
      {
        year: "2024",
        title: "director of ship it @ startup exchange",
        description:
          "leading georgia tech's premier startup organization to foster innovation across campus.",
      },
      {
        year: "2024",
        title: "founder & software engineer @ unpackd",
        description:
          "building full-stack AI-driven educational platform revolutionizing the way people learn.",
      },
      {
        year: "2024",
        title: "study abroad in china",
        description:
          "immersed in chinese culture and language while exploring new perspectives.",
      },
      {
        year: "2024",
        title: "founding fellow @ catalyst xl",
        description:
          "4-week startup cohort diving deep into venture building and startup strategy.",
      },
      {
        year: "2024",
        title: "software engineer intern @ driving forward",
        description:
          "developed generative ai chatbot to handle healthcare inquiries using python and NLP models.",
      },
      {
        year: "2023",
        title: "software engineer intern @ develop for good",
        description: "refactored nonprofit web app's backend to C#.",
      },
      // {
      //   year: "2023",
      //   title: "#1 public high school squash team",
      //   description:
      //     "led and captained varsity squash team to become the top public high school team in the nation.",
      // },
      // {
      //   year: "2022",
      //   title: "woo szn by ale woo",
      //   description:
      //     "released rap album reaching 10k+ streams, exploring music production and creativity.",
      // },
      {
        year: "2020",
        title: "founder @ design center",
        description:
          "built and scaled a graphic design community to 1.5k members during covid.",
      },
    ],
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "projects",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "check out what I've been working on",
  projects: [
    {
      title: "codebase rag chatbot",
      skills: "python · langchain · pinecone · groq",
      description:
        "an ai-powered chatbot that allows users to query and interact with codebases using natural language, built with pinecone for vector search and groq's llm for intelligent responses.",
      image: "/project5.png",
      year: "nov 2024",
      url: "https://github.com/alewoo/codebase-rag-streamlit",
    },
    {
      title: "bank customer churn predictor",
      skills: "python · scikit-learn · pandas · matplotlib",
      description:
        "a machine learning model using Python and scikit-learn to predict bank customer churn rates based on customer data and behavior patterns.",
      image: "/project1.png",
      year: "oct 2024",
      url: "https://github.com/alewoo/BankChurnPredictor",
    },
    {
      title: "honeycomb",
      skills: "react · typescript · next.js · firebase · mongoDB",
      description:
        "a personalized roadmap platform that helps students land internships by leveraging ai to curate tailored projects, mentors, clubs, and classes based on their career goals.",
      image: "/honey.png",
      year: "sep 2023",
      url: "https://github.com/RishabhK9/honeycomb",
    },
  ],
};
