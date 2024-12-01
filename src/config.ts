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
  description: "designer turned developer",
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
hi, i'm alex, a 20 y/o cs student at georgia tech on a mission to build, create, and inspire a better world.

i love building tools that solve meaningful problems, exploring creative outlets like music and photography, and working on projects that help and inspire people. driven by a passion for startups, tech, and creativity, i'm constantly redefining the boundaries of what's possible.

i value doing the right thing, being a good human, and fostering genuine relationships. through cs, design, and creativity, i aim to make a positive impact and help change the world.`,
    image_l: {
      url: "/pic2.jpg",
      alt: "Left Picture",
    },
    image_m: {
      url: "/IMG_8828.JPG",
      alt: "Middle Picture",
    },
    image_r: {
      url: "/IMG_3610.jpg",
      alt: "Right Picture",
    },
  },
  // work: {
  //   description: `I've worked with a variety of technologies and tools to build cool things. Here are some of the projects I've worked on.`, // Markdown is supported
  //   items: [
  //     {
  //       title: "Software Developer",
  //       company: {
  //         name: "Freelance",
  //         image: "/logo.webp",
  //         url: "https://github.com/TimWitzdam",
  //       },
  //       date: "2021 - Present",
  //     },
  //     {
  //       title: "Software Developer",
  //       company: {
  //         name: "Freelance",
  //         image: "/logo.webp",
  //         url: "https://github.com/TimWitzdam",
  //       },
  //       date: "2019 - 2021",
  //     },
  //   ],
  // },
  // connect: {
  //   description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
  //   links: socialLinks,
  // },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "projects",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "check out what I've been working on.",
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
