/**
 * Single source of truth for all site content.
 * Edit values here — no need to touch any component markup.
 */

export const site = {
  name: "Ricardo Altamirano",
  initials: "RA.",
  role: "AI Engineer",
  // Shown under the name in the nav / meta
  subtitle: "Forward-Deployed · Production Agents · Vertical AI Systems",
  location: "Los Mochis, Sinaloa, Mexico",
  currentCompany: "Hydrous Group",
  // Used for <title>, meta description and Open Graph
  seoTitle: "Ricardo Altamirano — AI Engineer",
  seoDescription:
    "AI Engineer & Forward-Deployed Engineer building production agents and the harnesses they run on — context engineering, evals, guardrails, and vertical AI inside real regulated workflows.",
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
    "Production agents and the harnesses they run on — context engineering, evals, guardrails, and the deterministic operating cores agents need. Shipped with Spec-Driven Development discipline.",
  // Status line — modeled after Julián's "currently working on" pattern + LinkedIn open-to-work.
  status: {
    label: "Open to AI Engineer & Forward-Deployed roles",
    currently: "Building vertical AI at Hydrous Group",
  },
  tags: ["Harness Engineering", "Context Engineering", "Vertical AI", "Agentic RAG", "Evals", "MCP"],
  ctas: [
    { label: "View Work", href: "#work", primary: true },
    { label: "Get in Touch", href: "#contact", primary: false },
    // CV lives at public/RICARDO-ALTAMIRANO-2026.pdf (served from site root).
    { label: "Download CV", href: "/RICARDO-ALTAMIRANO-2026.pdf", primary: false, external: true },
  ],
} as const;

// Scrolling keyword strip under the hero.
// Mix of themes (positioning) + tools (ATS keywords).
export const marquee = [
  "Harness Engineering",
  "Context Engineering",
  "Vertical AI",
  "Production Agents",
  "Eval-Driven Development",
  "Spec-Driven Development",
  "Agentic RAG",
  "Subagent Orchestration",
  "Tool Calling",
  "Guardrails",
  "AgentOps",
  "LLM-as-Judge",
  "MCP",
  "A2A Protocol",
] as const;

export const about = {
  intro: [
    "I'm an AI Engineer — and in practice, a forward-deployed one. I embed in a domain and stay until the system actually works in production, not just in a demo. Most of my work lives where being wrong has consequences, so I optimize for systems that fail safely and stay debuggable.",
    "Currently at Hydrous Group, building vertical AI platforms that pair governed agents with deterministic operating cores. I work with Spec-Driven Development and agentic coding discipline.",
  ],
  // Short conviction statements — the "what I believe" block.
  // The first belief is the personal thesis, lifted from my own product writing.
  beliefs: [
    "Don't build the agent. Build the operating system the agent must use.",
    "An agent is a model plus a harness. The model is the easy part — I build the harness: context, tools, evals, guardrails.",
    "Agents need guardrails, not vibes — least-privilege tools, governed workflows, and humans who approve canonical truth.",
  ],
} as const;

// "How I build reliable AI systems" — turns the beliefs into concrete method.
// These are practices I actually apply, not aspirations.
export const method = {
  label: "How I build reliable AI systems",
  principles: [
    {
      title: "Structured outputs over free text",
      detail: "Models return typed, validated objects — not prose I have to parse and hope about.",
    },
    {
      title: "Deterministic logic outside the model",
      detail: "Business rules live in code the agent calls, not buried in a prompt.",
    },
    {
      title: "Evals before deploy",
      detail: "Changes ship behind eval suites in CI — measured, not vibes.",
    },
    {
      title: "Least-privilege tool execution",
      detail: "Agents get the narrowest tool surface that does the job, sandboxed.",
    },
    {
      title: "Humans approve canonical truth",
      detail: "People own what becomes ground truth; agents retrieve, draft, and propose.",
    },
    {
      title: "Budgets and observability in the loop",
      detail: "Every run has explicit latency and cost budgets, traced end to end, so regressions surface fast.",
    },
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
      "Field teams ran regulated workflows out of spreadsheets and email threads. I built a production AI platform where agents operate on top of a deterministic vertical core: humans approve canonical truth; agents handle retrieval, tool execution, and structured drafts inside real business processes. Guardrailed with least-privilege tools, sandboxed execution, and evals in the loop.",
    tags: ["Vertical AI", "Production Agents", "Subagent Orchestration", "Guardrails", "Evals", "FastAPI"],
    status: "Hydrous Group · In production",
  },
  {
    index: "02",
    title: "Company-wide knowledge layer with Claude Skills",
    blurb:
      "Domain expertise was trapped in people's heads, Slack threads, and docs that went stale. I built an internal knowledge layer that packages each team's expertise as model-invoked Claude Skills — Claude applies the right guidance automatically from task context, so engineers don't have to know what exists or go ask. Distributed through an internal marketplace with per-team governance, backed by subagents for review and validation, lifecycle hooks, MCP servers, and OpenTelemetry usage analytics to keep the skills sharp.",
    tags: ["Claude Skills", "Knowledge Layer", "Subagents", "MCP", "Hooks", "Observability"],
    status: "Hydrous Group · Internal platform",
  },
  {
    index: "03",
    title: "Multimodal diagnostics & proposal generation",
    blurb:
      "Field evidence — documents, images, charts, engineering assets — arrived in inconsistent formats. I built multimodal AI that grounds analysis in domain knowledge, then generates client-ready technical proposals with dynamic tables, charts, and process-flow diagrams.",
    tags: ["Multimodal", "Document AI", "RAG", "Structured Outputs"],
    status: "Hydrous Group",
  },
  {
    index: "04",
    title: "Enterprise knowledge & proposal platform",
    blurb:
      "Proposal turnaround was bottlenecked on tribal knowledge spread across documents, CRM, and prior projects. I built a knowledge platform that integrates retrieval with CRM and proposal workflows in real time, plus a natural-language-to-SQL surface so non-technical teams could query data directly.",
    metric: "78% faster proposal turnaround",
    tags: ["RAG", "NL-to-SQL", "CRM", "Real-time"],
    status: "DVAWEB",
  },
  {
    index: "05",
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
    name: "Chamai",
    href: "https://github.com/ricardoalt1515/chamai",
    blurb:
      "White-label AI agent workspace for vertical workflows. A reusable product shell — auth, threads, attachments, streaming, artifact generation — where each vertical owns its prompt, skills, tools, and artifact schemas, resolved at request time by a per-tenant agent router on an AI SDK ToolLoopAgent runtime over Amazon Bedrock. Ships with a vitest-native eval layer: a recorded-replay deterministic gate on every PR (schema validity, tool sequence, step and cost budgets) plus LLM-as-judge scoring with a human-calibration loop.",
    status: "In development",
    tags: ["Next.js", "AI SDK", "Amazon Bedrock", "CI-Gated Evals", "LLM-as-Judge"],
  },
];

export const experience = [
  {
    company: "Hydrous Group",
    role: "AI Engineer",
    period: "Jan 2025 — Present",
    site: "hydrousmgmt.com",
    summary:
      "Building vertical AI platforms and governed agent workflows for regulated industrial operations: RAG, multimodal diagnostics, and production-grade proposal generation. Built a company-wide knowledge layer with model-invoked Claude Skills, plus subagents, hooks, MCP, and usage analytics.",
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

// Human-readable summary shown before the full stack.json manifest.
// AI systems lead; full-stack and cloud are framed as how I ship them.
export const coreStrengths = {
  label: "Core strengths",
  items: [
    "Production AI Agents",
    "Agent Harnesses & Tool Execution",
    "RAG & Context Engineering",
    "Evals, Guardrails & Observability",
    "Full-Stack Product Engineering",
    "Cloud & Infrastructure",
  ],
  note: "The AI systems are the headline. Full-stack and cloud are how I ship them end-to-end.",
} as const;

export const stack: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "TypeScript", "JavaScript", "Go", "SQL"] },
  {
    group: "AI Systems",
    items: [
      "Agent Harnesses",
      "Context Engineering",
      "Memory & Context Management",
      "Claude Skills",
      "Tool Calling",
      "RAG",
      "Agentic RAG",
      "Structured Outputs",
      "Multimodal",
      "Subagent Orchestration",
      "Guardrails (OWASP Agentic Top 10)",
      "Prompt Caching & Cost Optimization",
      "LangChain",
      "LangGraph",
      "AI SDK ToolLoopAgent",
      "Amazon Bedrock",
      "MCP",
      "A2A Protocol",
      "Vector DBs",
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
    group: "Agent Infra & Evals",
    items: [
      "E2B / Firecracker Sandboxes",
      "Least-Privilege Tools",
      "AgentOps (OpenTelemetry)",
      "LangSmith",
      "Phoenix / Arize",
      "Eval Pipelines (CI-gated)",
      "LLM-as-Judge Evals",
      "Cost & Latency Budgets",
    ],
  },
  {
    group: "Practice",
    items: [
      "Spec-Driven Development",
      "Eval-Driven Development",
      "Agentic Coding",
      "TDD",
      "Code Review Discipline",
    ],
  },
];

export const contact = {
  headline: "Let's build something.",
  lede:
    "I'm interested in AI Engineer and Forward-Deployed roles — production agents, harnesses, evals, and vertical AI inside real regulated domains. If that's your problem, I'd like to hear about it.",
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
