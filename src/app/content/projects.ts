export type Project = {
  id: string;
  title: string;
  stack: string[];
  images?: string[];   // AUSENTE = ainda não tem print -> card vira "coming soon" sozinho
  liveUrl?: string;    // nenhum tem hoje
  repoUrl?: string;    // só quando o link funciona e é seu pra mostrar
  repoNote?: string;   // texto alternativo quando não dá pra linkar
  en: string;
  pt: string;
};

export const projects: Project[] = [
  {
    id: "todo-teams",
    title: "TODO Teams",
    stack: ["React", "Express", "Prisma ORM", "PostgreSQL"],
    images: ["/projects/todo-teams.png", "/projects/todo-teams-1.png"],
    repoNote: "Private — opening soon",
    en: "A to-do list app for teams — task creation, assignment and tracking, with a React front-end and an Express + Prisma API on PostgreSQL.",
    pt: "Aplicativo de lista de tarefas para times — criação, atribuição e acompanhamento de tarefas, com front-end em React e API em Express + Prisma sobre PostgreSQL.",
  },
  {
    id: "love-ask",
    title: "Do You Love Me?",
    stack: ["HTML", "CSS", "JavaScript"],
    images: ["/projects/love-ask.png", "/projects/love-ask-1.png"],
    repoUrl: "https://github.com/LorenzoFernandes7422/love-ask",
    en: "A small, playful site made just for fun: the \"No\" button runs from the cursor, and \"Yes\" answers with a satisfying bubble animation.",
    pt: "Um site pequeno e divertido, feito só por diversão: o botão \"No\" foge do cursor, e o \"Yes\" responde com uma animação de bolha bem satisfatória.",
  },
  {
    id: "kyv-frota",
    title: "KyvFrota",
    stack: ["Node.js", "PHP", "Laravel", "PostgreSQL"], // TODO: confirmar — Node.js + PHP/Laravel juntos no mesmo back-end?
    images: [
      "/projects/kyv-frota.png",
      "/projects/kyv-frota-1.png",
      "/projects/kyv-frota-5.png",
      "/projects/kyv-frota-3.png",
      "/projects/kyv-frota-2.png",
      "/projects/kyv-frota-4.png",
      "/projects/kyv-frota-6.png",
      "/projects/kyv-frota-7.png",
    ],
    repoNote: "Built with a teammate — back-end only",
    en: "A fleet management system built with a teammate, with full CRUD and reporting — I was responsible for the back-end.",
    pt: "Sistema de gerenciamento de frota feito com um colega, com CRUD completo e relatório — fui responsável pelo back-end.",
  },
  {
    id: "more-soon",
    title: "More Projects",
    stack: [],
    en: "More projects are being documented and will show up here soon.",
    pt: "Mais projetos estão sendo documentados e vão aparecer aqui em breve.",
  },
];
