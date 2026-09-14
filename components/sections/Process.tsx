import { MessageSquare, Code, PackageCheck, LifeBuoy } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const STEPS = [
  {
    icon: MessageSquare,
    title: "Briefing",
    text: "Entendemos o problema, o contexto e o resultado que você precisa — sem formulário genérico.",
  },
  {
    icon: Code,
    title: "Desenvolvimento",
    text: "Construímos com checkpoints curtos, para você acompanhar o progresso em vez de esperar no escuro.",
  },
  {
    icon: PackageCheck,
    title: "Entrega",
    text: "Sistema no ar ou documento finalizado, revisado e pronto para uso — sem pontas soltas.",
  },
  {
    icon: LifeBuoy,
    title: "Suporte",
    text: "Acompanhamos o pós-entrega para ajustes, dúvidas e evoluções pontuais.",
  },
];

export default function Process() {
  return (
    <section id="processo" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-xl">
          <span className="text-xs uppercase tracking-[0.3em] text-orion-cyan/80">
            Como funciona
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
            Quatro etapas, sem burocracia.
          </h2>
        </Reveal>

        <div className="relative mt-20">
          {/* Connecting line — desktop only, sits behind the steps */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-orion-blue/40 to-transparent lg:block" />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.12}>
                <div
                  className={`relative ${index % 2 === 1 ? "lg:mt-10" : ""}`}
                >
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-orion-blue/30 bg-void-900 shadow-glow-sm">
                    <step.icon className="h-6 w-6 text-orion-cyan" strokeWidth={1.75} />
                  </div>
                  <span className="absolute -top-2 left-10 font-display text-4xl font-bold text-white/5">
                    0{index + 1}
                  </span>
                  <h3 className="mt-6 font-display text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-orion-silver/65">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
