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
  digitalproduct,clothingstore,mcklunky,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import { bigShoe1, bigShoe2, bigShoe3,  thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const shoes = [
  {
      thumbnail: thumbnailShoe1,
      bigShoe: bigShoe1,
  },
  {
      thumbnail: thumbnailShoe2,
      bigShoe: bigShoe2,
  },
  {
      thumbnail: thumbnailShoe3,
      bigShoe: bigShoe3,
  },
];
const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React  Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    title: "WordPress Developer",
    company_name: "On Fiverr",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using Wordpress and other related technologies.",
      "Before starting any WordPress web development project, conduct a thorough analysis of your client's requirements. Understand their business goals,",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "As a Freelancer",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js ,Redux and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "MERN-stack",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      " developing and maintaining web applications using the MERN (MongoDB, Express.js, React, Node.js)",
      "Modular and Scalable Architecture . React, on the front end, encourages the use of reusable components,and Node.js, on the server side.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Pmplementing CI/CD practices is crucial for the effective development . .",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "As a Freelancer",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Skilled full-stack web developer with expertise in building robust and scalable web applications. .",
      "My focus is on delivering high-quality solutions using the latest technologies, and I specialize in React.js, Next.js, and the MERN stack..",
      "I am committed to writing clean, maintainable, and efficient code.",
      "My goal is to ensure that your web applications perform at their best",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Abdul proved me wrong.",
    name: "rayan",
    designation: "partner",
    company: "rayan fabrics",
    image: "https://randomuser.me/api/portraits/men/69.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Abdul does.",
    name: "Abdullah",
    designation: "COO",
    company: "net mcn",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Abdul optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Abdul Manan",
    designation: "owner",
    company: "net mcn",
    image: "https://randomuser.me/api/portraits/men/58.jpg",
  },
];

const projects = [
  {
    name: "LMS Site",
    description:
      "course-selling platform, where knowledge meets innovation! Our web application is designed to revolutionize the way individuals engage with learning .",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "yt service",
    description:
      "Embrace the power of YouTube with our service-selling platform. Whether you're looking to kickstart your channel, or take your content to the next level,.",
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
      "A comprehensive travel booking platform // book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "html",
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
  {
    name: "Digital Products",
    description:
      " digital product-selling site, where innovation and convenience converge to bring you a secure shopping .provide you top-notch digital products  .",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
    ],
    image: digitalproduct,
    source_code_link: "https://github.com/",
  },
  {
    name: "Clothing store",
    description:
      "rayanfabricsonline clothing store, where style meets convenience and quality craftsmanship. Explore the latest trends, curated collections,.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image:clothingstore,
    source_code_link: "https://github.com/",
  },
  {
    name: "Resturant",
    description:
      "mcklunky is uk resturant website ,MCKLUNKY selling different foods DONER-BURGERS-PERI-PERI BUBBLE-TEA.,, is offer the best food and drink ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: mcklunky,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
