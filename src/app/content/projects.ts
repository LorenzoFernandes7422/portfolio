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
    repoUrl: "https://github.com/LorenzoFernandes7422/todo-team-project",
    en: "Task list app for teams — complete task creation, assignment, and tracking.",
    pt: "Aplicativo de lista de tarefas para times — criação, atribuições e acompanhamento de tarefas completos.",
  },
  {
    id: "love-ask",
    title: "Do You Love Me?",
    stack: ["HTML", "CSS", "JavaScript"],
    images: ["/projects/love-ask.png", "/projects/love-ask-1.png"],
    repoUrl: "https://github.com/LorenzoFernandes7422/love-ask",
    en: "A small and fun website aimed at developing skills in HTML, CSS, and JavaScript.",
    pt: "Um site pequeno e divertido, visando desenvolver as linguagens de html/css e js.",
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
    repoNote: "No code repository is currently available for this project for now.",
    en: "Fleet management system, backend work with full CRUD and reporting capabilities.",
    pt: "Sistema de gerenciamento de frota,trabalho de backend com CRUD completo e relatório.",
  },
  {
    id: "simple-crud",
    title: "Simple CRUD",
    stack: ["PHP", "Laravel", "Blade", "PostgreSQL"],
    images: ["/projects/simple-crud.png", "/projects/simple-crud-1.png", "/projects/simple-crud-2.png"],
    repoUrl: "https://github.com/LorenzoFernandes7422/CRUD-LARAVEL",
    en: "Simple assignment demonstrating knowledge of the main Laravel and database tools.",
    pt: "Trabalho Simples demonstrando conhecimento das principais ferramentas do Laravel e BD.",
  },
  {
    id: "more-soon",
    title: "More Projects",
    stack: [],
    en: "More projects are being documented and will show up here soon.",
    pt: "Mais projetos estão sendo documentados e vão aparecer aqui em breve.",
  },
];
