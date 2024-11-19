import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "alex wang",
  logo: "/pfp.jpg",
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
  {
    title: "blog",
    url: "/blog",
  },
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
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "alex wang",
    description:
      "I'm a second-year Computer Science student at Georgia Tech that's passionate about the intersection of technology and business. I'm eager to drive innovation and foster change through my academic and entrepreneurial pursuits. My background in business, along with my involvement in music and other creative endeavors, equips me with a unique perspective to approach problems creatively and strategically. This blend of technical skills, entrepreneurial mindset, and creative experience positions me to excel and make meaningful contributions in the tech industry.",
    image: identity.logo,
  },
  role: "cs @ georgia tech | director of ship it @ startup exchange | building cool things",
  description: "20 y/o with a passion for startups, tech, and creativity.",
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
    title: "About | Alex Wang",
    description:
      "Full time student from Germany who loves building cool things using code.",
    image: identity.logo,
  },
  subtitle: "some information about myself",
  about: {
    description: `
hi, i’m alex, a 20 y/o cs student at georgia tech on a mission to build, create, and inspire a better world.
<br/><br/>
i love building tools that solve meaningful problems, exploring creative outlets like music and photography, and working on projects that help and inspire people. driven by a passion for startups, tech, and creativity, i’m constantly redefining the boundaries of what’s possible.
<br/><br/>
i value doing the right thing, being a good human, and fostering genuine relationships. through cs, design, and creativity, i aim to make a positive impact and help change the world.`, // Markdown is supported
    image_l: {
      url: "/pic1.JPG",
      alt: "Left Picture",
    },
    image_r: {
      url: "/pic2.jpg",
      alt: "Right Picture",
    },
  },
  work: {
    description: `I've worked with a variety of technologies and tools to build cool things. Here are some of the projects I've worked on.`, // Markdown is supported
    items: [
      {
        title: "Software Developer",
        company: {
          name: "Freelance",
          image: "/logo.webp",
          url: "https://github.com/TimWitzdam",
        },
        date: "2021 - Present",
      },
      {
        title: "Software Developer",
        company: {
          name: "Freelance",
          image: "/logo.webp",
          url: "https://github.com/TimWitzdam",
        },
        date: "2019 - 2021",
      },
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Alex Wang",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Alex Wang",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",
};
