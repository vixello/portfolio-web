export const siteConfig = {
  name: "Izabela Kwapisiewicz",
  title: "Junior Software Engineer",
  description: "Portfolio website of Ryan Fitzgerald",
  accentColor: "#1d4ed8",
  social: {
    email: "your-email@example.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://x.com/rfitzio",
    github: "https://github.com/x",
  },
  aboutMe:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quos asperiores nihil consequatur tempore cupiditate architecto natus commodi corrupti quas quasi facere est, dignissimos odit nam veniam sapiente ut, vitae eligendi ipsum dolor, nostrum ullam impedit! Corrupti ratione mollitia temporibus necessitatibus, consectetur reiciendis recusandae id, dolorum quaerat, vero pariatur. Ratione!",

  hello: "Cześć!",
  ui: {
    about: "O mnie",
    projects: "Projekty",
    experience: "Doświadczenie",
    education: "Wykształcenie",
  },

  skills: [
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
    },
    {
      name: "Spring Boot",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
    },
    {
      name: "C#",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
    },
    {
      name: "Angular",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
    },
    {
      name: "Typescript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
    },
    {
      name: "Kotlin",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg"
    },
    {
      name: "Unity",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg"
    },
    {
      name: "Blender",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg"
    },
    /* { name: "AWS", icon: "aws" }, */
  ],

  projects: [
    {
      name: "Blender MBFA addon",
      description:
        "Blender addon for automatically creating/managing brushes from alpha images.",
      link: "https://aidevroundup.com/?ref=devportfolio",
      image: "/images/projects/ai-dev-roundup.png", // Can be a PNG, JPG, GIF, or video URL (.mp4)
      skillNames: ["Python", "Blender"],
    },
    {
      name: "Blender timelapse addon",
      description:
        "Blender addon for automatically recording timelapse of 3D modelling.",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      image: "/images/projects/chrome-extension.gif", // Example with a animated GIF
      skillNames: ["Python", "Blender"],
    },
    {
      name: "Online mobile racing game",
      description:
        "A sci fi online racing game for mobile devices",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      image: "/images/projects/chrome-extension.gif", // Example with a animated GIF
      skillNames: ["C#", "Unity"],
    },
    {
      name: "Eventmaster",
      description:
        "Backend for Online platform for organising, attending and staffing events",
      link: "https://extensionkit.io/?ref=devportfolio",
      image: "/images/projects/extensionkit.png",
      skillNames: ["Java", "Spring Boot", "Keycloak", "Docker"],
    },
    {
      name: "Eventmaster Frontend (web)",
      description:
        "Frontend for online platform for organising, attending and staffing events",
      link: "https://extensionkit.io/?ref=devportfolio",
      image: "/images/projects/extensionkit.png",
      skillNames: ["Angular", "Typescript", "Tailwind"],
    },
  ],

  experience: [
    {
      company: "Tech Company",
      title: "Senior Software Engineer",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Startup Inc",
      title: "Full Stack Developer",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Digital Agency",
      title: "Frontend Developer",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
  ],

  education: [
    {
      school: "Uniwersytet Wrocławski",
      degree: "Inżynier Informatyki Stosowanej i Systemów Pomiarowych",
      dateRange: "2020 - 2024",
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Dean's List all semesters",
        "President of Computer Science Club",
      ],
    },
    {
      school: "Politechnika Łódzka",
      degree: "Magister Inżynier Informatyki Stosowanej",
      dateRange: "2024 - 2025",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
      ],
    },
  ],
};