import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
];

const services = [
  {
    title: "Zachary Layland",
    icon: web,
  },
  {
    title: "Rhyan Obina",
    icon: mobile,
  },
  {
    title: "Marcus Hadaway",
    icon: backend,
  },
  {
    title: "Renee Sermarini",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Change Up",
    company_name: "Our Start",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "November 2020 - May 2021",
    points: [
      "Our team was founded.",
      "We only had a hero bot with simple modifications for descoring.",
      "We won a competition in Mesquite for a JROTC-only competition qualifying for state.",
      "We lost early at state, but we qualified for JROTC Remote Nationals.",
    ],
  },
  {
    title: "Tipping Point",
    company_name: "Nationals Finalist",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2021 - May 2022",
    points: [
      "We won our competition at Burkburnett and got close many other times.",
      "We had a DR4B robot with a locking claw for the goals.",
      "We started using PID and had an auto-balance auton that got 113 points.",
      "We competed in the dome for JROTC Nationals and lost in the finals.",
      "We qualified and competed for the World's Competition as well.",
    ],
  },
  {
    title: "Spin Up",
    company_name: "New Teammates",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "May 2022 - May 2023",
    points: [
      "Our graduating class caused our A and C teams to merge.",
      "We went through many iterations of flywheel and cata bots with a 6 motor drive.",
      "We qualified for nationals again and made it to the elimination rounds.",
    ],
  },
  {
    title: "Over Under 2023",
    company_name: "This Year's Start",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: [
      "We have a new builder because of graduation.",
      "We made a 6-motor drivetrain with a fast match load catapult and intake.",
      "We competed at Lovejoy and got eliminated in the semifinals from tipping.",
      "We got a 220 point skills putting us in the top 3 of JROTC skills nationwide at the time of the event.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
