import {
  Code2,
  Workflow,
  Plug,
  LayoutDashboard,
  FileText,
  Sparkles,
  Table2,
  FileSignature,
  Check,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const SYSTEMS_DELIVERABLES = [
  { icon: Code2, label: "Sistemas web sob medida" },
  { icon: Workflow, label: "Automatização de processos" },
  { icon: Plug, label: "Integrações com APIs e ferramentas" },
  { icon: LayoutDashboard, label: "Painéis administrativos" },
];

const DOCS_DELIVERABLES = [
  { icon: FileText, label: "Currículos que passam de triagem" },
  { icon: Table2, label: "Planilhas inteligentes e automatizadas" },
  { icon: FileSignature, label: "Contratos e propostas comerciais" },
  { icon: Sparkles, label: "Documentos formatados profissionalmente" },
];

export default function Services() {
  return (
    <section id="servicos" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-orion-cyan/80">
            Serviços
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
            Duas frentes. Um só padrão de qualidade.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Blue-dominant block */}
          <Reveal>
            <article className="group relative h-full overflow-hidden rounded-3xl border border-orion-blue/20 bg-gradient-to-br from-orion-blue/[0.08] via-void-800/60 to-void-900 p-8 transition-shadow duration-500 hover:shadow-glow-lg sm:p-10">
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orion-blue/20 blur-3xl transition-opacity duration-500 group-hover:opacity-80"
              />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-orion-blue/30 bg-orion-blue/10">
                <Code2 className="h-6 w-6 text-orion-cyan" strokeWidth={1.75} />
              </div>

              <h3 className="relative mt-8 font-display text-2xl font-semibold text-white">
                Desenvolvimento de Sistemas
              </h3>
              <p className="relative mt-3 max-w-md text-sm leading-relaxed text-orion-silver/70">
                Sistemas web sob medida, automações que tiram trabalho manual
                do seu dia e integrações que fazem suas ferramentas
                conversarem entre si.
              </p>

              <ul className="relative mt-8 space-y-3">
                {SYSTEMS_DELIVERABLES.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3 text-sm text-orion-silver/85">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orion-blue/10">
                      <Icon className="h-3.5 w-3.5 text-orion-cyan" strokeWidth={2} />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          {/* Violet-dominant block */}
          <Reveal delay={0.1}>
            <article className="group relative h-full overflow-hidden rounded-3xl border border-orion-violet/30 bg-gradient-to-br from-orion-violet/[0.14] via-void-800/60 to-void-900 p-8 transition-shadow duration-500 hover:shadow-[0_0_80px_rgba(76,42,158,0.25)] sm:p-10">
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orion-violet/30 blur-3xl transition-opacity duration-500 group-hover:opacity-80"
              />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-orion-violet/40 bg-orion-violet/15">
                <FileText className="h-6 w-6 text-orion-silver" strokeWidth={1.75} />
              </div>

              <h3 className="relative mt-8 font-display text-2xl font-semibold text-white">
                Documentos Profissionais
              </h3>
              <p className="relative mt-3 max-w-md text-sm leading-relaxed text-orion-silver/70">
                Currículos, planilhas e documentos pensados para causar a
                impressão certa — com estrutura, clareza e acabamento de
                quem entende do assunto.
              </p>

              <ul className="relative mt-8 space-y-3">
                {DOCS_DELIVERABLES.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3 text-sm text-orion-silver/85">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orion-violet/15">
                      <Icon className="h-3.5 w-3.5 text-orion-silver" strokeWidth={2} />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-6">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 text-sm text-orion-silver/70">
            <Check className="h-4 w-4 shrink-0 text-orion-cyan" />
            Todo projeto sai com um briefing por escrito e um prazo combinado
            antes de qualquer linha de código ou documento ser produzido.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
