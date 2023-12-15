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

  import Gericht1 from '../assets/gericht1.png'
  import Gericht2 from '../assets/gericht2.png'
  import Gericht3 from '../assets/gericht3.png'

  import gpt1 from '../assets/gpt1.png'
  import gpt2 from '../assets/gpt1.png'

  import sainsburys from '../assets/company/sainsburys.png'
  import ignitus from '../assets/company/ignitus.png'
  import Masterschool from '../assets/company/Masterschool.png'
  import almond from '../assets/company/almond.png'
  import upwork from '../assets/company/upwork.png'

  
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
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Machine Learning Engineer",
      icon: mobile,
    },
    {
      title: "Data Analyst",
      icon: backend,
    },
    {
      title: "Project Manager",
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    
    {
      title: "IT Project Manager",
      company_name: "Almond Media Ltd",
      icon: almond,
      iconBg: "#000000",
      date: "March 2020 - April 2021",
      points: [
        "Liaising with internal and external stakeholders for efficient and timely delivery of services.",
        "Developed project scope and business analysis work plan documents, Conducted gap analysis and SWOT analysis.",
        "Proactively led a team of 10 business analysts and two web developers across three sprints of interrelated projects.",
        "Successfully managed £65,000 /3 months budget on creating an e-commerce solution.",
        "Conducting project risk monitoring, documentation, and mitigation plans.",
        "Worked effectively with a cross functional design teams to successfully deliver software solutions.",
      ],
    },
    {
      title: "Merchandise Data Analyst",
      company_name: "Sainsbury's",
      icon: sainsburys,
      iconBg: "#000000",
      date: "Oct 2021 - Aug 2023",
      points: [
        "Analyzed Sales data using SQL and python to determine areas of opportunity and risks.",
        "Presented insights and recommendations based on these analyses to the senior management.",
        "Supported the senior merchandisers across multiple teams in the delivery of product ranges to successfully achieve sales, profit, margin and stock targets.",
        "Identified and mitigated risk factors that cause delays to order management.",
        "Reviewed weekly trading performance, in order to identify issues and opportunities.",
        "Managed the Intake and Stock positions for multiple departments.",
        "Effectively influenced and managed stakeholders and suppliers to ensure on-time delivery and adherence to our critical path.",
      ],
    },

    {
      title: "Data Analyst",
      company_name: "Masterschool",
      icon: Masterschool,
      iconBg: "#E6DEDD",
      date: "Jul 2021 - Sep 2023",
      points: [
        "Cleaned and extensively analyzed complex datasets using SQL and Python to answer business questions.",
        "Designed and implemented custom made bespoke relational databases.",
        "Developed Interactive dashboards for monitoring business performance using PowerBI and Tableau.",
        "Analyzing and visualizing big data using Python, Pandas, Matplotlib and Seaborn libraries",
        "Build Interactive Web apps to visualize data using Python, Streamlit library.",
      ],
    },
    {
      title: "Machine Learning Engineer",
      company_name: "Ignitus",
      icon: ignitus,
      iconBg: "#383E56",
      date: "Aug 2023 - Dec 2023",
      points: [
        "Predicting Restaurant Ratings - End to End Machine Learning with Deployment.",
        "Database design & Dashboard for a Pizzeria Client.",
        "Predicting Employee retention (HR Department).",
        "Customer Segmentation (Marketing Department)",
      ],
    },
    {
      title: "Freelance Web Developer",
      company_name: "Upwork",
      icon: upwork,
      iconBg: "#000000",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "High-end restaurant app",
      description:
        " cutting-edge website for a high-end restaurant using React and CSS, loads of reuseable components and strong usage of the CSS BEM methodology.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "next.js",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: Gericht1,
      source_code_link: "https://github.com/JusticeOmenogor/react_restaurant_app",
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
          name: "next.js",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: Gericht2,
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
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: gpt1,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };