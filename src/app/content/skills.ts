type Level = 1 | 2 | 3 | 4;

type Skill = {
  name: string;
  level: Level;
};

type SkillGroup = {
  category: string;
  items: Skill[];
};

export const skills: SkillGroup[] = [
  {
    category: "Front-end",
    items: [
      { name: "HTML", level: 4 },
      { name: "CSS", level: 4 },
      { name: "JavaScript", level: 4 },
      { name: "TypeScript", level: 3 },
      { name: "Vue.js", level: 4 },
      { name: "React", level: 3 },
      { name: "Next.js", level: 3 },
      { name: "Tailwind CSS", level: 2 },
      { name: "Bootstrap", level: 2 },
      { name: "Vite", level: 4 },
      { name: "Axios", level: 3 },
      { name: "Responsive Design", level: 3 },
    ],
  },
  {
    category: "Back-end & Databases",
    items: [
      { name: "PHP", level: 4 },
      { name: "Laravel", level: 4 },
      { name: "Eloquent ORM", level: 4 },
      { name: "Blade", level: 2 },
      { name: "Composer", level: 4 },
      { name: "SQL", level: 4 },
      { name: "PostgreSQL", level: 4 },
      { name: "MySQL", level: 3 },
      { name: "REST APIs", level: 4 },
      { name: "JWT", level: 4 },
      { name: "Node.js", level: 3 },
      { name: "Express.js", level: 2 },
      { name: "Prisma ORM", level: 2 },
      { name: "Java", level: 2 },
      { name: "Python", level: 2 },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Git & GitHub", level: 4 },
      { name: "Linux", level: 3 },
      { name: "Apache", level: 4 },
      { name: "Postman", level: 4 },
      { name: "npm", level: 3 },
      { name: "Vercel", level: 1 },
      { name: "Docker", level: 1 },
    ],
  },
  {
    category: "Practices",
    items: [
      { name: "MVC", level: 4 },
      { name: "OOP", level: 4 },
      { name: "Clean Code", level: 4 },
      { name: "Agile / Scrum", level: 3 },
    ],
  },
];
