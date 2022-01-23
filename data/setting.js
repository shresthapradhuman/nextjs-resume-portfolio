import {
  FaFacebookF,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaMobile,
  FaYoutube,
} from "react-icons/fa";

let age = (dob) => {
  let db = new Date(dob);
  let month_diff = Date.now() - db.getTime();
  let age_dt = new Date(month_diff);
  let year = age_dt.getUTCFullYear();
  let age = Math.abs(year - 1970);
  return age;
};

export const profile = {
  name: "Shrestha Pradhuman",
  role: ["Magento Developer", "Full Stack Developer"],
  image: "profile.webp",
  details: [
    {
      label: "Age",
      value: age("04/18/1989"),
    },
    {
      label: "Residence",
      value: "Nepal",
    },
    {
      label: "Current",
      value: "Tokyo, Japan",
    },
    {
      label: "Freelancer",
      value: "Available",
    },
  ],
  resume: "/downloads/resume.pdf",
};

/** navbar */
export const nav = [
  {
    title: "resume",
  },
  {
    title: "repo",
  },
  {
    title: "blog",
  },
  {
    title: "contact",
  },
];

/** social */
export const social = [
  {
    icon: <FaFacebookF className="facebook" />,
    url: "https://www.facebook.com/shresthapradhuman",
  },
  {
    icon: <FaInstagram className="instagram" />,
    url: "https://www.instagram.com/shresthapradhuman/",
  },
  {
    icon: <FaYoutube className="youtube" />,
    url: "https://www.youtube.com/channel/UC833VjwIP98-Qv2-FAGJLIw",
  },
  {
    icon: <FaGithub className="github" />,
    url: "https://github.com/shresthapradhuman",
  },
];

/** about me */

export const me = {
  title: "About Me",
  strong: "Hello! I'm Shrestha Pradhuman.",
  description:
    "Web Developer From Tokyo, Japan. I am passionate about Web Designing. I have rich experience in Magento, also I'm good at WordPress. I love to talk with you about our unique.",
};

/** about services */
export const services = {
  title: "My Services",
  item: [
    {
      icon: <FaHtml5 className="html" />,
      title: "Web Application",
      description:
        "I can provide mobile responsive, cross-browser, and cross-platform web development services. Starting from basic website designs, including CMS and online store building to highly complex business website apps and design solutions. I can provide you best web solutions.",
    },
    {
      icon: <FaMobile className="mobile" />,
      title: "Mobile Application",
      description:
        "In the current times, the world is controlled by fingertips. Mobile apps are the most competent tool to optimize, enhance, increase your business operations. So, I can provide cross-browser and cross-platform supported mobile applications for your business.",
    },
  ],
};
/** skills */
export const skills = {
  title: "My Skills",
  coding: {
    title: "Coding",
    items: [
      {
        title: "HTML/CSS/JS",
        percent: "85",
      },
      {
        title: "PHP/NodeJS",
        percent: "75",
      },
      {
        title: "MYSQL/MongoDB",
        percent: "60",
      },
      {
        title: "React/Redux",
        percent: "70",
      },
    ],
  },
  language: {
    title: "language",
    items: [
      {
        title: "Nepali",
        rating: "9.5",
      },
      {
        title: "Hindi",
        rating: "9",
      },
      {
        title: "English",
        rating: "8.5",
      },
      {
        title: "Japanese",
        rating: "7",
      },
    ],
  },
};

/** working */
export const working = [
  {
    work: "Magento Developer-Veriteworks Inc, Japan",
    from: "2021",
    to: "Present",
    description:
      "Developing, and hosting Magento based e-commerce websites. Building modules, themes, and troubleshooting the bugs.",
  },
  {
    work: "Store Assistant, Family Mart, Japan",
    from: "2020-09",
    to: "2020-12",
    description:
      "Stock Order Placement, Banking Transaction, Staff Shift Management, Customer Dealing, and Other Daily Jobs",
  },
  {
    work: "Employee, FunToFun Inc, Japan",
    from: "2017-05",
    to: "2020-08",
    description:
      "Handling Phone Calls From Customer. Helping people to find the part time jobs etc.",
  },
  {
    work: "System Administrator, Raptibheri Bikas Bank, Nepal",
    from: "2010-09",
    to: "2013-01",
    description:
      "Server maintainance and Data Backup, Office Networking, Office Website maintaince, Internal Office Support, Software Install & Update, User Account Control.",
  },
];

/** education */
export const education = [
  {
    school: "PHP School, Ikebukuro, Japan",
    from: "2020-09",
    to: "2020-10",
    description:
      "PHP Basic, MVC Model, Object Oriented Programming, PHP Framework Laravel.",
  },
  {
    school: "Meisei Institute Of Cybernetics, Japan",
    from: "2013-05",
    to: "2017-04",
    description:
      "Japanese Language and Culture, Business Introduction, Office Software, Basic Programming, Linux OS Basic Operation, Web Development",
  },
  {
    school: "Brightland College, Nepal",
    from: "2010-05",
    to: "2013-04",
    description: "Bachelor's Degree in Business Studies With Major Finance",
  },
  {
    school: "Jaya Bageshowri High School, Nepal",
    from: "2008-06",
    to: "2010-07",
    description:
      "High School Education taking Business And Computer Studies as Major.",
  },
];
/** contact */
export const contact = {
  address: "Tokyo, Japan",
  email: "shresthapradhuman2018@gmail.com",
  freelance: "available",
};


