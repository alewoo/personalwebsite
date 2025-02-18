import { c as createComponent, r as renderTemplate, a as renderSlot, b as addAttribute, d as renderHead, e as createAstro } from './astro/server_B6IEuQq7.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const identity = {
  name: "alex wang",
  logo: "/pfp2.jpg",
  email: "alexwang2023@gmail.com"
};
const navBarLinks = [
  {
    title: "home",
    url: "/"
  },
  {
    title: "about",
    url: "/about"
  },
  {
    title: "projects",
    url: "/projects"
  }
];
const socialLinks = [
  {
    title: "GitHub",
    url: "https://github.com/alewoo",
    icon: "mdi:github",
    external: true
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/alexwang-/",
    icon: "mdi:linkedin",
    external: true
  },
  {
    title: "Twitter",
    url: "https://www.twitter.com/imalexwang",
    icon: "mdi:twitter",
    external: true
  },
  {
    title: "SubStack",
    url: "https://imalexwang.substack.com/",
    icon: "mdi:blog",
    external: true
  }
];
const homePageContent = {
  seo: {
    title: "alex wang",
    description: "building tools that empower the next generation",
    image: identity.logo
  },
  role: "cs @ georgia tech | ai + hci researcher | director of ship it @ startup exchange",
  description: "i combine design, code, and ai to build products that matter.\n\ncurrently:\n• building datematch.lol (250+ users)\n• researching human-ai interaction @ gt\n• leading ship it @ startup exchange\n",
  socialLinks,
  links: [
    {
      title: "about",
      url: "/about"
    },
    {
      title: "projects",
      url: "/projects"
    }
  ]
};
const aboutPageContent = {
  seo: {
    title: "about",
    description: "cs student at georgia tech",
    image: identity.logo
  },
  subtitle: "my story",
  about: {
    description: `
hi, i'm alex 👋

i discovered my love for building at 16 — starting with a graphic design 
community that grew to 1.5k members during covid.

that spark for creation led me down an unconventional path:
• released music with 10k+ streams at 17
• led varsity squash team to #1 public hs ranking
• studied abroad in china at 19

now, i build products that matter:
• launched datematch.lol in 3 days (250+ users)
• exploring ai + hci research @ georgia tech
• leading ship it @ startup exchange
• building tools at the intersection of human-ai interaction

these experiences taught me one thing: whether it's building 
communities, creating music, or launching products, i'm driven by the 
desire to innovate and make an impact.

i value doing the right thing, being a good human, and fostering genuine 
relationships. through design, code, and creativity, i aim to build a 
better world — redefining the boundaries of what's possible.

currently building in atlanta.
open to conversations and opportunities.`,
    image_l: {
      url: "/pic2.jpg",
      alt: "Left Picture"
    },
    image_m: {
      url: "/IMG_8828.JPG",
      // url: "/SU24 Maker Venture Photo 2.jpg",
      alt: "Middle Picture"
    },
    image_r: {
      url: "/IMG_3610.jpg",
      // url: "/SU24 Maker Venture Photo 2.jpg",
      alt: "Right Picture"
    }
  },
  timeline: {
    items: [
      {
        year: "jan 2025 - present",
        title: "ai + hci researcher",
        description: "conducting research at the intersection of AI and human-computer interaction to build more intuitive and user-centric AI systems."
      },
      // {
      //   year: "nov 2024 - present",
      //   title: "swe resident @ headstarter",
      //   description: "building ai/full-stack projects.",
      // },
      {
        year: "aug 2024 - present",
        title: "director of ship it @ startup exchange",
        description: "leading georgia tech's premier startup organization to foster innovation across campus."
      }
      // {
      //   year: "may 2024 - aug 2024",
      //   title: "founder & software engineer @ unpackd",
      //   description:
      //     "building full-stack AI-driven educational platform revolutionizing the way people learn.",
      // },
      // {
      //   year: "may 2024 - aug 2024",
      //   title: "study abroad in china",
      //   description:
      //     "immersed in chinese culture and language while exploring new perspectives.",
      // },
      // {
      //   year: "apr 2024 - jun 2024",
      //   title: "founding fellow @ catalyst xl",
      //   description:
      //     "4-week startup cohort diving deep into building startups.",
      // },
      // {
      //   year: "jan 2024 - apr 2024",
      //   title: "software engineer intern @ driving forward",
      //   description:
      //     "developed generative ai chatbot to handle healthcare inquiries using python and NLP models.",
      // },
      // {
      //   year: "nov 2023 - feb 2024",
      //   title: "software engineer intern @ develop for good",
      //   description: "refactored nonprofit web app's backend to C#.",
      // },
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
      // {
      //   year: "2020",
      //   title: "founder @ design center",
      //   description:
      //     "built and scaled a graphic design community to 1.5k members during covid.",
      // },
    ]
  }
};
const projectsPageContent = {
  seo: {
    title: "projects",
    description: "Check out what I've been working on.",
    image: identity.logo
  },
  subtitle: "building tools that solve real problems.",
  projects: [
    {
      title: "datematch",
      skills: "next.js · typescript · supabase · openai",
      description: "reimagining college dating through personality analytics. built and launched in 3 days, reaching 250+ users and 40+ signups in its first week at georgia tech.",
      image: "/datematch.png",
      year: "feb 2025",
      url: "https://datematch.lol"
    }
    // },
    // {
    //   title: "cassandra",
    //   skills: "python · jupyter · scikit-learn · yfinance",
    //   description:
    //     "a market analysis tool leveraging machine learning to detect potential market crashes and anomalies, providing real-time risk assessments and trading recommendations based on multiple market indicators.",
    //   image: "/cassandra.png",
    //   year: "jan 2025",
    //   url: "https://github.com/alewoo/cassandra",
    // },
    // {
    //   title: "codebase rag chatbot",
    //   skills: "python · langchain · pinecone · groq",
    //   description:
    //     "an ai-powered chatbot that allows users to query and interact with codebases using natural language, built with pinecone for vector search and groq's llm for intelligent responses.",
    //   image: "/project5.png",
    //   year: "nov 2024",
    //   url: "https://github.com/alewoo/codebase-rag-streamlit",
    // },
    // {
    //   title: "bank customer churn predictor",
    //   skills: "python · scikit-learn · pandas · matplotlib",
    //   description:
    //     "a machine learning model using Python and scikit-learn to predict bank customer churn rates based on customer data and behavior patterns.",
    //   image: "/project1.png",
    //   year: "oct 2024",
    //   url: "https://github.com/alewoo/BankChurnPredictor",
    // },
    // {
    //   title: "honeycomb",
    //   skills: "react · typescript · next.js · firebase · mongoDB",
    //   description:
    //     "a personalized roadmap platform that helps students land internships by leveraging ai to curate tailored projects, mentors, clubs, and classes based on their career goals.",
    //   image: "/honey.png",
    //   year: "sep 2023",
    //   url: "https://github.com/RishabhK9/honeycomb",
    // },
    // {
    //   title: "unpackd",
    //   skills: "react · typescript · openai · langchain",
    //   description:
    //     "an ai-powered book insights platform that generates personalized action plans from non-fiction books, helping users learn more effectively in less time.",
    //   image: "/unpackd.png",
    //   year: "july 2024",
    //   url: "https://unpackd.net",
    // },
  ]
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { seo } = Astro2.props;
  return renderTemplate(_a || (_a = __template([' <html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", '</title><meta name="description"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"><\/script>', '</head> <body> <header> <div class="px-6 py-6 max-w-2xl mx-auto"> <nav> <ul class="hidden sm:flex sm:items-center sm:gap-2"> ', ' </ul> <div class="relative sm:hidden"> <button id="link-menu-button" class="relative font-medium opacity-60 p-4">\nMenu <span id="open-indicator">+</span> </button> <div id="link-menu" class="absolute p-2 left-0 bg-gray-bg rounded-lg w-44 transition-opacity ease-in-out duration-300 opacity-0 z-40"> <ul> ', ' </ul> </div> </div> </nav> </div> </header> <main class="mb-32"> ', ' </main> <footer></footer> <div id="particles-js" class="fixed inset-0 -z-10"></div> <div class="fixed inset-0 -z-20"> <div class="absolute top-32 left-12 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div> <div class="absolute bottom-32 right-12 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div> <div class="absolute top-1/2 right-1/4 w-28 h-28 bg-blue-500/10 rounded-full blur-3xl"></div> <div class="absolute bottom-1/4 left-1/3 w-36 h-36 bg-blue-500/10 rounded-full blur-3xl"></div> </div>  </body></html>'])), addAttribute(Astro2.generator, "content"), seo.title, addAttribute(seo.description, "content"), addAttribute(seo.title, "content"), addAttribute(seo.description, "content"), addAttribute(seo.image, "content"), renderHead(), navBarLinks.map((link) => renderTemplate`<li> <a class="group px-4 py-2 rounded-lg hover:bg-gray-bg opacity-60 hover:opacity-100 transition-all"${addAttribute(link.url, "href")}${addAttribute(link.external ? "_blank" : "_self", "target")}> ${link.title} </a> </li>`), navBarLinks.map((link) => renderTemplate`<li> <a class="block pl-4 py-3"${addAttribute(link.url, "href")}${addAttribute(link.external ? "_blank" : "_self", "target")}> ${link.title} </a> </li>`), renderSlot($$result, $$slots["default"]));
}, "/Users/alexwang/Code/WebDev/astro-minimal-portfolio-template/src/layouts/Layout.astro", void 0);

export { $$Layout as $, aboutPageContent as a, homePageContent as h, identity as i, projectsPageContent as p };
