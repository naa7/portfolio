// @ts-ignore
import { meta, shopify, starbucks, tesla } from "../assets/images";
// @ts-ignore
import * as icons from "../assets/icons";

export const skills = [
  {
    imageUrl: icons.react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: icons.redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: icons.tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: icons.mui,
    name: "MUI",
    type: "Frontend",
  },
  {
    imageUrl: icons.typescript,
    name: "TypeScript",
    type: "Frontend",
  },

  {
    imageUrl: icons.javascript,
    name: "JavaScript",
    type: "Frontend",
  },

  {
    imageUrl: icons.nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: icons.html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: icons.css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: icons.express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: icons.nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: icons.c,
    name: "C",
    type: "Backend",
  },
  {
    imageUrl: icons.cpp,
    name: "C++",
    type: "Backend",
  },
  {
    imageUrl: icons.java,
    name: "Java",
    type: "Backend",
  },
  {
    imageUrl: icons.python,
    name: "Python",
    type: "Backend",
  },
  {
    imageUrl: icons.php,
    name: "PHP",
    type: "Backend",
  },
  {
    imageUrl: icons.flask,
    name: "Flask",
    type: "Backend",
  },
  {
    imageUrl: icons.mysql,
    name: "MySQL",
    type: "Database",
  },
  {
    imageUrl: icons.postgresql,
    name: "PostgreSQL",
    type: "Database",
  },
  {
    imageUrl: icons.mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: icons.sequelize,
    name: "Sequelize",
    type: "ORM",
  },

  {
    imageUrl: icons.tensorflow,
    name: "TensorFlow",
    type: "Machine Learning",
  },
  {
    imageUrl: icons.scikitlearn,
    name: "Scikitlearn",
    type: "Machine Learning",
  },
  {
    imageUrl: icons.numpy,
    name: "Numpy",
    type: "Machine Learning",
  },
  {
    imageUrl: icons.pandas,
    name: "Pandas",
    type: "Machine Learning",
  },
  {
    imageUrl: icons.seaborn,
    name: "Seaborn",
    type: "Machine Learning",
  },
  {
    imageUrl: icons.pytorch,
    name: "PyTorch",
    type: "Machine Learning",
  },
  {
    imageUrl: icons.matplotlib,
    name: "Matplotlib",
    type: "Visualization",
  },

  {
    imageUrl: icons.bash,
    name: "Bash",
    type: "Scripting",
  },
  {
    imageUrl: icons.git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: icons.github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: icons.vim,
    name: "Vim",
    type: "Text Editor",
  },
  {
    imageUrl: icons.postman,
    name: "Postman",
    type: "API Testing",
  },
  {
    imageUrl: icons.python,
    name: "Python",
    type: "Backend",
  },
  {
    imageUrl: icons.php,
    name: "PHP",
    type: "Backend",
  },
  {
    imageUrl: icons.vercel,
    name: "Vercel",
    type: "Deployment",
  },
  {
    imageUrl: icons.render,
    name: "Render",
    type: "Deployment",
  },

  {
    imageUrl: icons.docker,
    name: "Docker",
    type: "Containerization",
  },
];

export const experiences = [
  {
    title: "IT Coordinator",
    company_name: "Research Foundation of CUNY",
    icon: icons.rfcuny,
    iconBg: "#accbe1",
    date: " 2021 September - Present",
    points: [
      "Facilitate computer equipment setup, software installation in +50 classrooms and offices.",
      "Develop and implement a web-based support ticketing system, reducing response times by approximately 75%.",
      "Create and maintain web-based spreadsheets for +2K tech equipment items costing over $2.5M",
      "Manage LCD projectors, smart boards, audio/video gear function optimally; address issues promptly.",
      "Conduct +500 troubleshooting sessions, consistently achieving a remarkable 98% issue resolution rate.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: icons.contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: icons.github,
    link: "https://github.com/naa7",
  },
  {
    name: "LinkedIn",
    iconUrl: icons.linkedin,
    link: "https://www.linkedin.com/in/naa7",
  },
];

export const projects = [
  {
    iconUrl: icons.ai,
    theme: "btn-back-green",
    name: "NOK-Draw",
    description:
      "NOK-Draw is an exciting drawing game where players create sketches based on given prompts. The drawings are then analyzed by a machine learning model to predict the category. If the prediction matches the prompted category, there is a winner, adding an element of challenge and fun.",
    link: "https://github.com/NOKDS/nok-draw",
  },
  {
    iconUrl: icons.airplane,
    theme: "btn-back-blue",
    name: "Wint",
    description:
      "Wint is the hassle-free budgeting website tailored to your travel aspirations. Whether it's a solo adventure or a group escapade, Wint simplifies the process of planning trips that suit your financial goals. With Wint, you have the power to create, collaborate, and curate unforgettable journeys without breaking the bank.",
    link: "https://github.com/naa7/wint",
  },
  {
    iconUrl: icons.gameConsole,
    theme: "btn-back-pink",
    name: "Vision",
    description:
      "Vision is an engaging 2D platformer game created using Unity. It aims to educate players about the critical importance of conserving natural resources and appreciating the accessibility of food and water. Set in a dystopian society grappling with scarcity, the game follows the journey of a character who uncovers the dire consequences of resource depletion and must make life-changing decisions.",
    link: "https://github.com/naa7/vision",
  },
  {
    iconUrl: icons.balloon,
    theme: "btn-back-skyblue",
    name: "Pop the Balloons",
    description:
      "Pop the Balloons is a dynamic Unity game where players shoot down balloons across three escalating levels. With intuitive controls and vibrant graphics, players experience a thrilling challenge as they aim to pop balloons before they vanish. From easy to hard, each level offers an increasingly intense and addictive gameplay experience, making it a captivating adventure for all.",
    link: "https://github.com/naa7/pop_the_balloons",
  },
  {
    iconUrl: icons.lock,
    theme: "btn-back-yellow",
    name: "Cipher Utility",
    description:
      "The Cipher Utility project aims to provide a versatile tool for encrypting and decrypting data using various cipher techniques. By employing methods like the Caesar cipher, the project facilitates secure data transformation to ensure confidentiality.",
    link: "https://github.com/naa7/cipher_utility",
  },
  {
    iconUrl: icons.git,
    theme: "btn-back-red",
    name: "Git Utility",
    description:
      "Git Utility is a powerful program specifically designed to simplify and automate common Git operations. By providing a user-friendly interface, it enables users to streamline their Git workflows without the need for manual command entry. With Git Utility, users are presented with a menu of options that correspond to frequently performed Git tasks.",
    link: "https://github.com/naa7/git_utility",
  },
  {
    iconUrl: icons.chart,
    theme: "btn-back-black",
    name: "Homicides Dashboard",
    description:
      "The Homicides Data Visualization Dashboard provides interactive insights into criminal homicides in 50 major American cities over the past decade. The dashboard, built from comprehensive datasets, allows users to explore homicide trends, arrest rates, and victim demographics through interactive timeline and charts.",
    link: "https://github.com/NOKDS/homicides-dashboard",
  },
];
