import { CvItem } from "./CvItem.model";

export const GENERAL = {
  name: "Anil",
  position: "Software Engineer",
  description:
    "This website shall give you an impression of me and encourage your interest in hiring me. " +
    "Please navigate through the site in order to find out more."
};

export const CVITEMS: CvItem[] = [
  {
    title: "Mindtree",
    subtitle: "Software Enginner",
    begin: "07-10-2018",
    end: "",
    description: "",
    tags: [
      "Java",
      "Angular",
      "Spring MVC",
      "Spring Boot",
      "My SQL",
      "JQuery",
      "Git Lab",
      "Git",
      "Jenkins",
      "Azure",
      "Agile Methadology",
      "Firebase",
      "Jira",
      "HTML",
      "CSS",
      "Agile Methadology",
      "Scrum",
      "Bootstrap"
    ],
    link: "https://www.mindtree.com",
    thumbnail: "mindtree.png"
  },
  {
    title: "Mindtree",
    subtitle: "Trainee",
    begin: "30-06-2018",
    end: "01-10-2018",
    description: "",
    tags: [
      "Java",
      "Angular",
      "Spring MVC",
      "Spring Boot",
      "My SQL",
      "JQuery",
      "Git Lab",
      "Git",
      "Jenkins",
      "Azure",
      "Agile Methadology",
      "Firebase",
      "Jira",
      "HTML",
      "CSS",
      "Agile Methadology",
      "Scrum",
      "Bootstrap"
    ],
    link: "https://www.mindtree.com",
    thumbnail: "mindtree.png"
  }
];

export const CERTIFICATES: CvItem[] = [
  {
    title: "Programming for Everybody (Getting Started with Python)",
    subtitle: "Python",
    begin: "17-01-2019",
    end: "",
    description: "",
    link:
      "https://www.coursera.org/account/accomplishments/verify/E6UWL3DDHSB4",
    thumbnail: "michigan.png",
    attachment: "Python.pdf"
  },
  {
    title: "Python Data Structures",
    subtitle: "Python",
    begin: "24-01-2019",
    end: "",
    description: "",
    link:
      "https://www.coursera.org/account/accomplishments/verify/E6UWL3DDHSB4",
    thumbnail: "michigan.png",
    attachment: "PythonDs.pdf"
  }
];

export const EDUCATION: CvItem[] = [
  {
    title: "CVR College of Enginnering",
    subtitle: "Bachelor of Technology | ECE",
    begin: "15-08-2014",
    end: "13-04-2018",
    description: "",
    tags: [],
    link: "http://cvr.ac.in/",
    thumbnail: "cvr.jpg"
  },
  {
    title: "Narayana Junior College",
    subtitle: "Intermediate | MPC",
    begin: "10-06-2012",
    end: "22-05-2014",
    description: "",
    tags: [],
    link: "https://www.narayanagroup.com/",
    thumbnail: "narayana.jpg"
  }
];

export const LANGUAGES = [
  // RATE YOURSELF  =>  100% = NATIVE;  80-99% = FLUENT;  60-79% = ADVANCED;  40-59% = INTERMEDIATE;  20-39% = ELEMENTARY;  0-19% = BEGINNER
  { title: "Telugu", level: "100" },
  { title: "English", level: "80" },
  { title: "Hindi", level: "50" }
];

export const PROJECTS: CvItem[] = [
  {
    title: "Hospitality Project",
    subtitle: "",
    begin: "01-03-2019",
    end: "",
    description:
      "This is a new project that I'm going to be in where we are going to use play framework for the backend and javascript, Jquery etc.. fort the frontend " ,
    tags: ["Java", "Play Framework", "Javascript", "Jquery"],
    link: "",
    thumbnail: "marriot.png"
  },

  {
    title: "AngularCV",
    subtitle: "A simple self-hosted online-CV",
    begin: "17-02-2019",
    end: "",
    description:
      "This project was created for the purpose of having a basic online-CV, which anyone can host by themselves. " +
      "This very website is the result of it.",
    tags: [
      "Angular 7",
      "Material Design",
      "GitHub",
      "CSS",
      "TypeScript",
      "Firebase",
      "jsPDF",
      "npm"
    ],
    link: "https://github.com/StegSchreck/AngularCV",
    thumbnail: "AngularCV.png"
  },
  {
    title: "Insurance Project",
    subtitle: "Converting webapp from PHP to sitecore ",
    begin: "20-10-2018",
    end: "31-01-2019",
    description: "Converted some websites like Talnax, Hanover from PHP to sitecore",
    tags: ["CSS3", "Bootstrap", "HTML", "Sitecore", ".NET"],
    link: "",
    thumbnail: "link.jpg"
  },
  {
    title: "Lets Work",
    subtitle: "Designing a Webapp for the purpose of booking hotels",
    begin: "17-07-2018",
    end: "31-09-2018",
    description:
      "Global Summit private limited is a multi-national technology company specialized in internetrelated services and products in the hospitality field, hey are looking for a partner who can help them to build best in-class application called “Let’s work” to facilitate their customers to book rooms for trainings, conferences and events.     The application must aim freelancers who frequently conduct workshop, trainings, and conferences - help them to book suitable venue based on their preferences.  ",
    tags: [
      "Angular 6",
      "Material Design",
      "My SQL",
      "SpringBoot",
      "JPA",
      "Firebase",
      "GitLab",
      "Jenkins",
      "Azure Cloud",
      "Mockito",
      "Jasmine",
      "Karma",
      "HTML",
      "CSS",
      "Bootstrap"
    ],
    link: "",
    thumbnail: "letswork.jpg"
  }
];

export const VOLUNTEERING: CvItem[] = [
  {
    title: "Ciencia 2K18",
    subtitle: "Hospitality Head at Ciencia 2K18",
    begin: "17-02-2018",
    end: "16-03-2018",
    description:
      "Co-ordinating between different departments, providing logistical support, making arrangements to go thing well.",
    link: "http://www.ciencia.in",
    thumbnail: "ciencia.png"
  },
  {
    title: "Happy Happo Hub",
    subtitle: "Planting 1000 saplings near Nagole",
    begin: "21-07-2018",
    end: "22-07-2018",
    description:
      "Took active part in planting tree hosted by Happy Happo Hub, an NGO near Nagole",
    link: "https://instagram.com/happy_happo_hub",
    thumbnail: "happo.jpg"
  },
  {
    title: "Ciencia 2k17",
    subtitle: "Special Events Head",
    begin: "15-02-2017",
    end: "04-04-2017",
    description:
      "Organised the special events that were as a part of fest and visited 2 orphanages as a part of social cause",
    link: "http://www.ciencia.in",
    thumbnail: "ciencia.png"
  },
  {
    title: "IETE",
    subtitle: "Marketing Head of IETESF-CVR",
    begin: "30-12-2016",
    end: "13-04-2018",
    description:
      "Co-ordinating between different departments, providing logistical support, making arrangements to go thing well as planned",
    link: "http://www.facebook.com/IETEINSTITUTE",
    thumbnail: "iete.jpg"
  },
  {
    title: "Technolites-CVR",
    subtitle: "Student member at Technolites",
    begin: "2015",
    end: "2018",
    description: "Organised several workshops, guest lectures, fests etc...",
    link: "https://www.facebook.com/ECETechnolitesCVR/",
    thumbnail: "technolites.png"
  }
];

export const CONTACT = {
  city: "Bengaluru, India",
  phone: "+91 91544 29081",
  mail: "aanilkumarreddy1@gmail.com",
  skype: "",
  linkedin: "https://www.linkedin.com/in/anilreddy17/",
  github: "https://github.com/aanilkumarreddy",
  stackoverflow: "https://stackoverflow.com/users/8296499/anil-kumar-reddy-a",
  twitter: "https://twitter.com/anil_reddyar", // full url
  facebook: "https://facebook.com/anilreddy17",
  other: [
    // { title: "another web page", link: "http://some.url" }, // example
  ]
};

export const INTERESTS = [
  {
    title: "Playing games",
    subtitle: "cricket, badminton etc...",
    icon: "em em-cricket_bat_and_ball"
  },
  {
    title: "Reading articles",
    subtitle: "political, economics etc...",
    icon: "em em-newspaper"
  },
  {
    title: "Organizing events",
    subtitle: "",
    icon: "em em-heart"
  }
];

export const PUBLICATIONS: CvItem[] = [];

export const TALKS: CvItem[] = [
  {
    title:
      "Bringing a complex stack to the cloud, our journey and lessons learned",
    subtitle: "45 min. @ AWS Startup Day Berlin 2018",
    begin: "",
    end: "2018-10-09",
    description:
      "Mister Spex moved away from AWS to an on-premises infrastructure in 2015. This year we switched back to AWS. We will " +
      "cover the story of these changes and why we did so. Come and hear our experiences and struggles to make your own migration smoother.",
    tags: ["AWS", "cloud", "migration"],
    thumbnail: ""
  }
];
