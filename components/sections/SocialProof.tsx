import { Quote } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import OrionMark from "@/components/visual/OrionMark";

// Placeholder content — swap for real testimonials and client names before launch.
const TESTIMONIALS = [
  {
    quote:
      "Pedi um sistema de controle de estoque sob medida e recebi exatamente o que descrevi — sem versão 'genérica adaptada'. Comunicação direta do início ao fim.",
    name: "R. Almeida",
    role: "Varejo, operação própria",
  },
  {
    quote:
      "Meu currículo estava sendo descartado antes da entrevista. Depois do redesenho, comecei a ser chamado na primeira semana.",
    name: "T. Souza",
    role: "Profissional de TI",
  },
  {
    quote:
      "A planilha automatizada de fluxo de caixa economiza umas boas horas por semana. Simples de usar, nada de fórmula quebrada.",
    name: "C. Ribeiro",
    role: "Pequena empresa, serviços",
  },
];

const CLIENT_BADGES = [
  "NORTE ESTÚDIO",
  "VETTA CONSULTORIA",
  "LUME COMÉRCIO",
  "PLANALTO ADVOCACIA",
  "ÁGUAS CLARAS",
];

export default function SocialProof() {
  return (
    <section className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-xl">
          <span className="text-xs uppercase tracking-[0.3em] text-orion-cyan/80">
            Prova social
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
            Quem já resolveu com a gente.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.1}>
              <figure className="glass flex h-full flex-col rounded-2xl p-7">
                <Quote className="h-6 w-6 text-orion-blue/60" strokeWidth={1.5} />
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-orion-silver/80">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <OrionMark className="h-6 w-6 opacity-70" />
                  <div>
                    <p className="text-sm font-medium text-white">{item.name}</p>
                    <p className="text-xs text-orion-silver/50">{item.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-16">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-orion-silver/40">
            Negócios e profissionais que confiaram no processo
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60 grayscale">
            {CLIENT_BADGES.map((name) => (
              <span
                key={name}
                className="font-display text-sm tracking-[0.15em] text-orion-silver/70"
              >
                {name}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
