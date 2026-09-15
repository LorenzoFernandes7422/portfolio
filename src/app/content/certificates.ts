export type Certificate = {
  id: string;
  kind: "degree" | "certificate";
  title: string;
  issuer: string;
  date?: string; // ISO "YYYY-MM-DD" — omitido quando ainda em andamento
  hours?: number;
  image: string; // thumbnail em public/certificates/
  file?: string; // PDF completo, se for seguro hospedar (sem dado pessoal sensível)
  verifyUrl?: string;
  verifyCode?: string; // código impresso no documento — feito pra ser compartilhado, não é PII
  status: "done" | "in-progress";
  en: string;
  pt: string;
};

export const certificates: Certificate[] = [
  {
    id: "cert-01",
    kind: "degree",
    title: "Systems Analysis and Development",
    issuer: "Universidade Pitágoras Unopar Anhanguera",
    date: "2023-08-14",
    image: "/certificates/ads-diploma.svg",
    verifyUrl: "https://diplomas.somosb4.com.br",
    verifyCode: "298.298.33d29dac343e",
    status: "done",
    en: "Associate degree in Systems Analysis and Development — software engineering fundamentals, databases, object-oriented programming and web development.",
    pt: "Tecnólogo em Análise e Desenvolvimento de Sistemas — fundamentos de engenharia de software, banco de dados, programação orientada a objetos e desenvolvimento web.",
  },
  {
    id: "cert-02",
    kind: "certificate",
    title: "Laravel 11 — From Basics to Advance (2024)",
    issuer: "Udemy · Web Solution US",
    date: "2025-12-16",
    hours: 52,
    image: "/certificates/laravel-11.svg",
    verifyUrl:
      "https://ude.my/UC-555e8e19-88c5-4f18-83a7-e4e8c77d2ac3",
    status: "done",
    en: "Laravel 11 end to end: routing, Eloquent ORM, authentication, REST APIs, queues and deployment.",
    pt: "Laravel 11 de ponta a ponta: rotas, Eloquent ORM, autenticação, APIs REST, filas e deploy.",
  },
  {
    id: "cert-03",
    kind: "certificate",
    title: "PostgreSQL", // TODO: nome exato do curso
    issuer: "", // TODO: plataforma/instrutor
    image: "/certificates/postgresql.svg",
    status: "in-progress",
    en: "", // TODO: o que o curso cobre
    pt: "",
  },
];
