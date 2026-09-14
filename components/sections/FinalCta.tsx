import { ArrowRight, Clock3 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import GlowButton from "@/components/ui/GlowButton";

export default function FinalCta() {
  return (
    <section id="contato" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-orion-blue/20 bg-gradient-to-br from-orion-blue/10 via-void-800 to-orion-violet/10 px-8 py-16 text-center sm:px-16">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orion-cyan/20 blur-[100px]"
            />

            <span className="relative inline-flex items-center gap-2 rounded-full border border-orion-cyan/30 bg-orion-cyan/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-orion-cyan">
              <Clock3 className="h-3.5 w-3.5" />
              Agenda limitada por mês
            </span>

            <h2 className="relative mt-6 font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              Seu projeto pode estar no ar<br className="hidden sm:block" />{" "}
              antes do que você imagina.
            </h2>

            <p className="relative mx-auto mt-5 max-w-xl text-base leading-relaxed text-orion-silver/70">
              Aceitamos um número limitado de projetos novos por mês para
              manter a qualidade do atendimento. Conte o que você precisa e
              te respondemos com um plano real, não uma proposta genérica.
            </p>

            <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
              <GlowButton
                href="https://api.whatsapp.com/send/?phone=5519983806371&text&type=phone_number&app_absent=0&utm_source=ig"
                icon={<ArrowRight size={16} />}
              >
                Solicitar orçamento
              </GlowButton>
              <GlowButton href="#servicos" variant="ghost">
                Revisar serviços
              </GlowButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
