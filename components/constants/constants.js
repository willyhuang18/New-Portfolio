import styled from "styled-components";

export const projects = [
  {
    title: "Notion AI",
    description: [
      "Developed a Notion-like app using Next.js 14 with AI capabilities for real-time collaboration and productivity.",
      "Integrated user authentication with Clerk and data management using Firebase for secure user sessions.",
      "Implemented Cloudflare Workers AI with Hono for seamless, scalable AI-driven features.",
      "Utilized TailwindCSS, Shadcn UI, and Liveblocks for responsive design and real-time collaboration interface.",
    ],
    image: "/images/notion.png",
    tags: [
      "/images/cloudflare.png",
      "/images/live.png",
      "/images/fire.png",
      "/images/clerk.jpg",
      "/images/hono.png",
    ],
    source: "https://github.com/willyhuang18/NotionAI/tree/master/notionai",
    visit: "http://notion-ai2-willyhuang18-willyhuang18s-projects.vercel.app",
    id: 0,
  },
  {
    title: "Amazon Simulation",
    description: [
      "Built an interactive UI with TailwindCSS and Next.js, replicating core Amazon features.",
      "Developed product detail pages, and search functionality, and integrated Stripe for payment processing.",
      "Utilized Firebase to dynamically display real product data and pricing for a complete e-commerce experience.",
      "Implemented a responsive design to ensure compatibility across various devices.",
    ],
    image: "/images/6.png",
    tags: [
      "/images/Next.png",
      "/images/tailwind.png",
      "/images/fire.png",
      "/images/nextauth.jpg",
      "/images/stripe.png",
    ],
    source: "https://github.com/willyhuang18/Amazon2.0",
    visit: "https://amazon-simulation.vercel.app/",
    id: 1,
  },

  {
    title: "Ignite",
    description: [
      "This APP is build for Maintaining a strong and healthy relationship can be a challenge when life gets busy, and as we grow and change as individuals. We created Ignite to help couples connect, communicate, and find new ways to make one another feel loved.",
    ],
    image: "/images/1.png",
    tags: [
      "/images/mongo.png",
      "/images/Express.png",
      "/images/react.png",
      "/images/node.jpg",
    ],
    source: "https://github.com/lesliejpatino/Ignite",
    visit: "https://fierce-sands-31159.herokuapp.com/",
    id: 2,
  },
  {
    title: "Perfect-Cup",
    description: [
      "This app is build for understand that Ingredient transparency is vital as health and wellness are more emphasized in today's society. Perfect Cup provides an informative platform for coffee lovers to create their own Perfect Cup while keeping them informed about the origin of a variety of coffee ingredients.",
    ],
    image: "/images/2.png",
    tags: [
      "/images/sql.png",
      "/images/JS.png",
      "/images/node.jpg",
      "/images/Express.png",
      "/images/handlebar.png",
    ],
    source: "https://github.com/MChambersIV/Perfect-Cup",
    visit: "https://powerful-wildwood-54385.herokuapp.com/",
    id: 3,
  },
  {
    title: "Instagram Simulation",
    description: [
      "Utilized front-end technologies such as TailWindCSS, Next.JS, and Recoil to create an intuitive and user-friendly UI.",
      "Includes profile pages, the ability to upload photos and videos, and social interactions (likes, comments, follows)",
      "Integrated with Firebase to access user data and content.",
    ],
    image: "/images/3.png",
    tags: [
      "/images/Next.png",
      "/images/tailwind.png",
      "/images/fire.png",
      "/images/nextauth.jpg",
      "/images/recoil.png",
    ],
    source: "https://github.com/willyhuang18/red",
    visit: "https://red-eight.vercel.app/",
    id: 4,
  },

  {
    title: "NFT",
    description: [
      "This application is a Non-commercial application. This is generated for people interested in the Motoko language, for playing around with it. The code might not be perfect. This NFT application connects with the RC-Token, the user is able to CREATE, BUY, SELL, and MINT the NFTs.",
    ],
    image: "/images/5.png",
    tags: [
      "/images/Motoko.jpg",
      "/images/JS.png",
      "/images/node.jpg",
      "/images/ubuntu.png",
    ],
    source: "https://github.com/willyhuang18/CryptoNFT",
    visit: "https://github.com/willyhuang18/CryptoNFT",
    id: 5,
  },
  {
    title: "Todo-List",
    description:
      "This is the simple app that can keep track of user list items and able to delete them after they finish it",
    image: "/images/4.png",
    tags: [
      "/images/mongo.png",
      "/images/JS.png",
      "/images/node.jpg",
      "/images/Express.png",
      "/images/ejs.png",
    ],
    source: "https://github.com/willyhuang18/Todo-list",
    visit: "https://damp-sands-21922.herokuapp.com/",
    id: 6,
  },
];

export const Experience = [
  {
    company: "Queeery",
    jobTitle: "Software Engineer Intern",
    image: "/images/queery.jpg",
    points: [
      "Enhanced the platform’s UI using React (TSX) by adding avatar tasks, event pages, and event mapping.",
      "Integrated Google Sign-In authentication and developed a profile page with Supabase for database management.",
      "Utilized Next.js for server-side rendering and Tailwind CSS to create responsive, efficient web pages",
      "Streamlined user interaction with new features like event creation and profile management, improving overall platform functionality.",
    ],
    skill: ["/images/tailwind.png", "/images/Next.png", "/images/supa.jpg"],
    date: "10/15/2023 - Present",
  },
  {
    company: "Dization",
    jobTitle: "Software Engineer Intern",
    image: "/images/dization.jpg",
    points: [
      "Enhance task management for small business consulting applications with PHP, SQL, JavaScript, and AWS.",
      "Designed dynamic task tabs with Bootstrap, enabling sorting and filtering by due date for efficient organization",
      "Managed cloud storage and user data with AWS, ensuring scalable, secure access across devices.",
      "Created an employee portal with authentication, allowing staff to securely access personal data and task assignments.",
    ],
    skill: ["/images/PHP.png", "/images/JS.png", "/images/sql.png"],
    date: "10/12/2022 - 04/01/2023",
  },
  {
    company: "Berkeley Extension Coding Bootcamp",
    jobTitle: "University of California, Berkeley Extension Coding Bootcamp",
    image: "/images/Berkeley.png",
    points: [
      "Attend a 12-week intensive program focused on gaining technical programming skills",
      "Developing web applications with other participants.",
      "Connect with a powerful network of engaged instructors, TAs, peers and alumni.",
      "Work with an admissions advisor who will prepare you for your boot camp.",
    ],
    skill: [
      "/images/mongo.png",
      "/images/Express.png",
      "/images/react.png",
      "/images/node.jpg",
      "/images/sql.png",
      "/images/JS.png",
    ],
    date: "12/14/2021 - 03/14/2022",
  },
];
export const Educations = [
  {
    company: "Northeastern University",
    jobTitle: "MS: Computer Science",
    image: "/images/NEU.png",
    points: [
      "Relevant Curriculum: Data Structures, Algorithms, Object-Oriented Design, Computer System, Web Development, Database",
    ],
    skill: [
      "/images/Java.png",
      "/images/JS.png",
      "/images/html.png",
      "/images/sql.png",
    ],
    date: "09/05/2023 - Present",
  },
  {
    company: "Berkeley Extension Coding Bootcamp",
    jobTitle: "University of California, Berkeley Extension Coding Bootcamp",
    image: "/images/Berkeley.png",
    points: [
      "Attend a 12-week intensive program focused on gaining technical programming skills",
      "Developing web applications with other participants.",
      "Connect with a powerful network of engaged instructors, TAs, peers and alumni.",
      "Work with an admissions advisor who will prepare you for your boot camp.",
    ],
    skill: [
      "/images/mongo.png",
      "/images/Express.png",
      "/images/react.png",
      "/images/node.jpg",
      "/images/sql.png",
      "/images/JS.png",
    ],
    date: "12/14/2021 - 03/14/2022",
  },
  {
    company: "San Jose State University",
    jobTitle: "Student",
    image: "/images/SJSU.png",
    points: [
      "Conducted numerous research projects, enhancing practical skills in data collection, analysis, and interpretation.",
      "Connected with a network of professors, peers, and alumni, fostering a collaborative learning environment.",
      "Received valuable guidance from academic advisors, ensuring a smooth and successful academic journey.",
    ],
    skill: ["/images/JS.png"],
    date: "08/26/2016 - 08/01/2021",
  },
];

export const Image = [
  "/public/images/profile.jpg",
  "/public/images/profile2.jpg",
];

export const Skill = [
  {
    image: "/images/Java.png",

    progress: "75",
  },
  {
    image: "/images/PHP.png",
    progress: "75",
  },
  {
    image: "/images/JS.png",

    progress: "75",
  },
  {
    image: "/images/html.png",
    progress: "75",
  },
  {
    image: "/images/css.png",

    progress: "75",
  },
  {
    image: "/images/sql.png",
    progress: "50",
  },
  {
    image: "/images/recoil.png",
    progress: "25",
  },
  {
    image: "/images/nextauth.jpg",
    progress: "25",
  },
  {
    image: "/images/bootstrap.png",
    progress: "75",
  },

  {
    image: "/images/Express.png",

    progress: "50",
  },
  {
    image: "/images/handlebar.png",

    progress: "50",
  },

  {
    image: "/images/fire.png",

    progress: "50",
  },

  {
    image: "/images/mongo.png",

    progress: "50",
  },
  {
    image: "/images/Next.png",

    progress: "50",
  },
  {
    image: "/images/ejs.png",
    progress: "25",
  },
  {
    image: "/images/Motoko.jpg",
    progress: "25",
  },
  {
    image: "/images/react.png",
    progress: "75",
  },
  {
    image: "/images/ubuntu.png",
    progress: "25",
  },
  {
    image: "/images/tailwind.png",
    progress: "50",
  },

  {
    image: "/images/node.jpg",
    progress: "50",
  },
];

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #801414;
  }
`;
export const Tag = styled.li`
  color: #fff;
  list-style-type: none;
  font-size: 1.7rem;
`;
