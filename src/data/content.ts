/**
 * Single source of truth for all site content.
 * Edit values here — no need to touch any component markup.
 */

export const site = {
  name: "Ricardo Altamirano",
  initials: "RA.",
  role: "AI Engineer",
  // Shown under the name in the nav / meta
  subtitle: "Production AI Agents · Vertical Systems · Cloud Infrastructure",
  location: "Los Mochis, Sinaloa, Mexico",
  currentCompany: "Hydrous Group",
  // Used for <title>, meta description and Open Graph
  seoTitle: "Ricardo Altamirano — AI Engineer",
  seoDescription:
    "AI Engineer building production AI agents and the deterministic operating systems they need to run inside real, regulated domain workflows.",
  // Set this to your deployed URL when you have a domain (used for OG / canonical)
  url: "https://ricardo-altamirano.vercel.app",
} as const;

export const hero = {
  // The accented words are wrapped automatically; keep `accent` as a substring of `headline`.
  eyebrowLeft: "AI Engineer",
  eyebrowRight: "Hydrous Group",
  headline: "I build AI systems that ship to production.",
  accent: "AI systems",
  lede:
    "Production agents, governed workflows, and the deterministic operating cores they need to run on — shipped with Spec-Driven Development discipline.",
  // Status line — modeled after Julián's "currently working on" pattern + LinkedIn open-to-work.
  status: {
    label: "Open to AI Engineering roles",
    currently: "Building vertical AI at Hydrous Group",
  },
  tags: ["Vertical AI", "Agent Harnesses", "RAG", "Tool Calling", "Multimodal", "MCP"],
  ctas: [
    { label: "View Work", href: "#work", primary: true },
    { label: "Get in Touch", href: "#contact", primary: false },
    // Drop your PDF at public/Ricardo-Altamirano-CV.pdf to enable this.
    { label: "Download CV", href: "/Ricardo-Altamirano-CV.pdf", primary: false, external: true },
  ],
} as const;

// Scrolling keyword strip under the hero.
// Mix of themes (positioning) + tools (ATS keywords).
export const marquee = [
  "Vertical AI",
  "Production Agents",
  "Spec-Driven Development",
  "Agentic Coding",
  "Agent Harnesses",
  "RAG",
  "Tool Calling",
  "Multimodal",
  "MCP",
  "Governed Workflows",
  "Structured Outputs",
  "Cloud-Native AI",
] as const;

export const about = {
  intro: [
    "I'm an AI Engineer building production AI for real domain workflows — agent harnesses, tool-calling pipelines, retrieval-augmented generation, structured outputs, multimodal analysis, and cloud-deployed applications. Built for environments where being wrong has consequences.",
    "Currently AI Engineer at Hydrous Group, building vertical AI platforms that pair governed agents with deterministic operating cores. I work with Spec-Driven Development and agentic coding discipline.",
  ],
  // Short conviction statements — the "what I believe" block.
  // The first belief is the personal thesis, lifted from my own product writing.
  beliefs: [
    "Don't build the agent. Build the operating system the agent must use.",
    "Most AI in production is a demo with a deploy button. I build the harness around it.",
    "Agents need guardrails, not vibes — governed workflows, deterministic calculations, structured outputs.",
  ],
} as const;

export type Project = {
  index: string;
  title: string;
  blurb: string;
  // Optional standout metric, e.g. "78% faster"
  metric?: string;
  tags: string[];
  // Optional link
  href?: string;
  status?: string;
};

export const projects: Project[] = [
  {
    index: "01",
    title: "Vertical AI platform for regulated operations",
    blurb:
      "Field teams ran regulated workflows out of spreadsheets and email threads. I built a production AI platform where agents operate on top of a deterministic vertical core: humans approve canonical truth; agents handle retrieval, tool execution, and structured drafts inside real business processes.",
    tags: ["Vertical AI", "Production Agents", "RAG", "Tool Calling", "FastAPI", "Python"],
    status: "Hydrous Group · In production",
  },
  {
    index: "02",
    title: "Multimodal diagnostics & proposal generation",
    blurb:
      "Field evidence — documents, images, charts, engineering assets — arrived in inconsistent formats. I built multimodal AI that grounds analysis in domain knowledge, then generates client-ready technical proposals with dynamic tables, charts, and process-flow diagrams.",
    tags: ["Multimodal", "Document AI", "RAG", "Structured Outputs"],
    status: "Hydrous Group",
  },
  {
    index: "03",
    title: "Enterprise knowledge & proposal platform",
    blurb:
      "Proposal turnaround was bottlenecked on tribal knowledge spread across documents, CRM, and prior projects. I built a knowledge platform that integrates retrieval with CRM and proposal workflows in real time, plus a natural-language-to-SQL surface so non-technical teams could query data directly.",
    metric: "78% faster proposal turnaround",
    tags: ["RAG", "NL-to-SQL", "CRM", "Real-time"],
    status: "DVAWEB",
  },
  {
    index: "04",
    title: "Intelligent parking platform",
    blurb:
      "End-to-end product build — architecture, backend services, frontend, and production rollout. Plus internal AI tooling for CRM knowledge retrieval across the company.",
    tags: ["Full-Stack", "React", "Python", "Production"],
    status: "DVAWEB",
  },
];

/**
 * Curated open-source / public work. Not the raw GitHub dump — these are
 * the repos I want recruiters to actually read.
 */
export type OpenSourceItem = {
  name: string;
  href: string;
  blurb: string;
  status: string;
  tags: string[];
  // Optional pull-quote from the repo's own README.
  quote?: string;
};

export const openSource: OpenSourceItem[] = [
  {
    name: "SecondStream",
    href: "https://github.com/ricardoalt1515/Second-Stream",
    blurb:
      "Vertical operating core for regulated industrial streams. Owns canonical data, evidence, workflow state, assessments, offers, pricing, outcomes, and the audit trail that AI agents must operate on. Humans approve canonical truth; the database owns workflow state.",
    quote: "Don't build the agent. Build the operating system the agent must use.",
    status: "Active MVP",
    tags: ["Python", "Vertical AI", "Agent Operating Core", "Workflow State"],
  },
  {
    name: "SecondstreamAI",
    href: "https://github.com/ricardoalt1515/SecondstreamAI",
    blurb:
      "White-label AI agent workspace for vertical workflows. A reusable product shell — auth, threads, attachments, streaming, artifact generation — with a per-vertical agent router on top of an AI SDK ToolLoopAgent runtime and Amazon Bedrock.",
    status: "In development",
    tags: ["Next.js", "AI SDK", "ToolLoopAgent", "Amazon Bedrock", "Amplify"],
  },
  {
    name: "gentle-pi",
    href: "https://github.com/ricardoalt1515/gentle-pi",
    blurb:
      "Practitioner of gentle-pi from the Gentle-AI ecosystem by Gentleman Programming — a development harness for the Pi coding agent: Spec-Driven Development, subagent orchestration, strict TDD evidence, and reviewer-aware work units.",
    status: "Practitioner",
    tags: ["SDD", "Agentic Coding", "TDD Harness", "Subagents"],
  },
];

export const experience = [
  {
    company: "Hydrous Group",
    role: "AI Engineer",
    period: "Jan 2025 — Present",
    site: "hydrousmgmt.com",
    summary:
      "Building vertical AI platforms and governed agent workflows for regulated industrial operations: RAG, multimodal diagnostics, and production-grade proposal generation.",
  },
  {
    company: "DVAWEB",
    role: "Software Engineer",
    period: "Nov 2023 — Jan 2025",
    site: "",
    summary:
      "Shipped an intelligent parking platform end-to-end and built AI internal tools — CRM retrieval, NL-to-SQL, and an enterprise knowledge platform that cut proposal turnaround by 78%.",
  },
] as const;

export const education = {
  school: "Universidad Autónoma de Occidente",
  degree: "B.S. in Software Engineering",
} as const;

export const stack: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "TypeScript", "JavaScript", "Go", "SQL"] },
  {
    group: "AI Systems",
    items: [
      "AI Agents",
      "Agent Harnesses",
      "Tool Calling",
      "RAG",
      "Structured Outputs",
      "Multimodal",
      "Multi-Agent",
      "LangChain",
      "LangGraph",
      "AI SDK ToolLoopAgent",
      "Amazon Bedrock",
      "Vector DBs",
      "MCP",
    ],
  },
  { group: "Web & APIs", items: ["FastAPI", "Next.js", "React", "REST APIs", "WebSockets"] },
  {
    group: "Cloud & Data",
    items: [
      "AWS",
      "Azure",
      "GCP",
      "Docker",
      "Terraform",
      "CI/CD",
      "GitHub Actions",
      "Amplify",
      "DynamoDB",
      "PostgreSQL",
      "MongoDB",
      "Redis",
    ],
  },
  {
    group: "Practice",
    items: ["Spec-Driven Development", "Agentic Coding", "TDD", "Code Review Discipline"],
  },
];

export const contact = {
  headline: "Let's build something.",
  lede:
    "I'm interested in AI engineering roles — production agents, vertical AI systems, harnesses, and the cloud infrastructure to run them. If that's your problem, I'd like to hear about it.",
  email: "ricardoaltamirano1515@gmail.com",
  links: [
    { label: "Email", href: "mailto:ricardoaltamirano1515@gmail.com" },
    { label: "LinkedIn", href: "https://linkedin.com/in/ricardoaltamirano" },
    { label: "GitHub", href: "https://github.com/ricardoalt1515" },
  ],
} as const;

// Top navigation — maps to section ids on the page.
export const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Open Source", href: "#open-source" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
] as const;
