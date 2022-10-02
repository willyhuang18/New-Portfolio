import styled from 'styled-components';

export const projects = [
  {
    title: 'Ignite',
    description: "This APP is build for Maintaining a strong and healthy relationship can be a challenge when life gets busy, and as we grow and change as individuals. We created Ignite to help couples connect, communicate, and find new ways to make one another feel loved.",
      image: '/images/1.png',
      tags: ['/images/mongo.png',
      '/images/Express.png',
      '/images/react.png',
      '/images/node.jpg',
],
    source: 'https://github.com/lesliejpatino/Ignite',
    visit: 'https://fierce-sands-31159.herokuapp.com/',
    id: 0,
  },
  {
    title: 'Perfect-Cup',
    description:"This app is build for understand that Ingredient transparency is vital as health and wellness are more emphasized in today's society. Perfect Cup provides an informative platform for coffee lovers to create their own Perfect Cup while keeping them informed about the origin of a variety of coffee ingredients.",
    image: '/images/2.png',
    tags: ['/images/sql.png',
    '/images/JS.png',
    '/images/node.jpg',
    '/images/Express.png',
    '/images/handlebar.png',
  ],
    source: 'https://github.com/MChambersIV/Perfect-Cup',
    visit: 'https://powerful-wildwood-54385.herokuapp.com/',
    id: 1,
  },
  {
    title: 'Instagram Simulation',
    description: "This application is just a simple Instagram system simulation. Users will have access to their google account, which can be able to login with their google account",
      image: '/images/3.png',
      tags: ['/images/Next.png',
      '/images/tailwind.png',
      '/images/fire.png',
      '/images/nextauth.jpg',
      '/images/recoil.png'],
    source: 'https://github.com/willyhuang18/red',
    visit: 'https://red-eight.vercel.app/',
    id: 2,
  },
  
  {
    title: 'NFT',
    description: "This application is a Non-commercial application. This is generated for people interested in the Motoko language, for playing around with it. The code might not be perfect. This NFT application connects with the RC-Token, the user is able to CREATE, BUY, SELL, and MINT the NFTs.",
    image: '/images/5.png',
    tags: ['/images/Motoko.jpg',
    '/images/JS.png', '/images/node.jpg',
    '/images/ubuntu.png',
  ],
    source: 'https://github.com/willyhuang18/CryptoNFT',
    visit: 'https://github.com/willyhuang18/CryptoNFT',
    id: 3,
  },
  {
    title: 'Todo-List',
    description: "This is the simple app that can keep track of user list items and able to delete them after they finish it",
    image: '/images/4.png',
    tags: ['/images/mongo.png',
    '/images/JS.png',
    '/images/node.jpg',
    '/images/Express.png','/images/ejs.png'],
    source: 'https://github.com/willyhuang18/Todo-list',
    visit: 'https://damp-sands-21922.herokuapp.com/',
    id: 4,
  },
];


export const Experience = [
  {
    company:'Berkeley Extension Coding Bootcamp',
    jobTitle:'University of California, Berkeley Extension Coding Bootcamp',
    image:"/images/Berkeley.png",
    points:[
      'Attend a 12-week intensive program focused on gaining technical programming skills',
      'Developing web applications with other participants.',
      'Connect with a powerful network of engaged instructors, TAs, peers and alumni.',
      'Work with an admissions advisor who will prepare you for your boot camp.'
    ],
    skill:['/images/mongo.png','/images/Express.png', '/images/react.png', '/images/node.jpg','/images/sql.png',
    '/images/JS.png'],
    date: '12/14/2021 - 03/14/2022'
  },
  {
    company:'Udemy',
    jobTitle:'Udemy Web Development Bootcamp',
    image:"/images/Udemy.png",
    points:[
      'Attend an Online intensive program focused on gaining web developer programming skills',
      'Develop web applications along with the instructor'
    ],
    skill:['/images/mongo.png', '/images/JS.png','/images/node.jpg','/images/Express.png'],
    date: '09/02/2021 - 11/01/2021'
  }
];

export const Image = ['/public/images/profile.jpg','/public/images/profile2.jpg'];

export const Skill =[
  {
    image:'/images/recoil.png',
    progress:"25"
  },
  {
    image:'/images/nextauth.jpg',
    progress:"25"
  },
  {
    image: '/images/bootstrap.png',
    progress:"75"
  },
  {
    image:'/images/css.png',

    progress:"75"
  },
  {
    image:'/images/Express.png',

    progress:"50"
  },
  {
    image:'/images/handlebar.png',

    progress:"50"
  },
  {
    image:'/images/html.png',
    progress:"75"
  },
  {
    image:'/images/Java.png',

    progress:"75"
  },
  {
    image:'/images/fire.png',

    progress:"50"  
  },
  {
    image:'/images/JS.png',

    progress:"75"  
  },
  {
    image:'/images/mongo.png',

    progress:"50"  
  },
  {
    image:'/images/Next.png',

    progress:"50"  
  },
  {
    image:'/images/ejs.png',
    progress:"25"  
  },
  {
    image:'/images/Motoko.jpg',
    progress:"25"  
  },
  {
    image:'/images/react.png',
    progress:"75"  
  },
  {
    image:'/images/ubuntu.png',
    progress:"25"  
  },
  {
    image:'/images/tailwind.png',
    progress:"50"  
  },
  {
    image:'/images/sql.png',
    progress:"50"  
  },
  {
    image:'/images/node.jpg',
    progress:"50"  
  }

];

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;

}
`
export const Tag = styled.li`
color: #FFF;
list-style-type: none;
font-size: 1.7rem;
`