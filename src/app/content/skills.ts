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
      { name: "HTML", level: 3 },
      { name: "CSS", level: 3 },
      { name: "JavaScript", level: 3 },
      { name: "TypeScript", level: 3 },
      { name: "Vue.js", level: 3 },
      { name: "React", level: 3 },
      { name: "Next.js", level: 3 },
      { name: "Tailwind CSS", level: 2 },
      { name: "Bootstrap", level: 2 },
      { name: "Vite", level: 3 },
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
      { name: "Linux", level: 2 },
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

type LevelInfo = {
  value: Level;
  label: string;
  en: string;
  pt: string;
};

export const levels: LevelInfo[] = [
  {
    value: 1,
    label: "familiar",
    en: "I've studied it and built small experiments. Limited use in real projects so far.",
    pt: "Estudei e fiz pequenos experimentos. Uso ainda limitado em projetos reais.",
  },
  {
    value: 2,
    label: "working",
    en: "I've delivered real work with it, with documentation and examples close at hand.",
    pt: "Já entreguei trabalho real com isso, com documentação e exemplos sempre por perto.",
  },
  {
    value: 3,
    label: "solid",
    en: "Comfortable in daily use. I know the documentation well enough to find my way when something unusual comes up.",
    pt: "Confortável no uso diário. Conheço a documentação o bastante para me orientar quando surge algo fora do comum.",
  },
  {
    value: 4,
    label: "primary",
    en: "The tools I work with every day — with a deeper command of their documentation and ecosystem.",
    pt: "As ferramentas com que trabalho todos os dias — com domínio mais profundo da documentação e do ecossistema.",
  },
];