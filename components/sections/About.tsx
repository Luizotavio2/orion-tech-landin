import Reveal from "@/components/ui/Reveal";

const DIFFERENTIALS = [
  {
    number: "01",
    title: "Sob medida, do zero",
    text: "Nada de templates genéricos. Cada sistema e cada documento nasce do seu problema real, não de um modelo pronto adaptado às pressas.",
  },
  {
    number: "02",
    title: "Comunicação direta",
    text: "Você fala com quem escreve o código e monta o documento — sem gerente de conta no meio, sem jargão para parecer mais complicado do que é.",
  },
  {
    number: "03",
    title: "Entrega enxuta",
    text: "Escopo claro, prazo combinado, sem promessas infladas. Preferimos entregar rápido e ajustar do que atrasar prometendo perfeição.",
  },
  {
    number: "04",
    title: "Suporte depois do 'pronto'",
    text: "Sistema no ar e documento entregue não é o fim — ajustamos, corrigimos e evoluímos junto com você depois da entrega.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="relative py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        {/* Editorial intro: offset, not centered — reads like a magazine
            column rather than a symmetric "about us" block. */}
        <Reveal className="lg:col-span-5">
          <span className="text-xs uppercase tracking-[0.3em] text-orion-cyan/80">
            Sobre a Orion Tech
          </span>
          <p className="mt-6 font-display text-2xl font-medium leading-snug text-white sm:text-3xl">
            Nascemos porque bom sistema e bom documento raramente vêm da
            mesma fonte — e quase nunca vêm rápido.
          </p>
          <p className="mt-6 text-base leading-relaxed text-orion-silver/70">
            Freelancers cobram caro por pouco, agências enrolam em reuniões, e
            ferramentas prontas nunca encaixam de verdade. A Orion Tech existe
            para resolver os dois lados desse problema: o técnico e o
            documental — com quem entende de código e de forma ao mesmo
            tempo.
          </p>
        </Reveal>

        {/* Differentials as a numbered editorial list with hairline
            dividers instead of a repeated card grid. */}
        <div className="lg:col-span-7 lg:pt-2">
          {DIFFERENTIALS.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.08}>
              <div className="hairline flex gap-6 py-7 first:border-t-0 sm:gap-10">
                <span className="font-display text-3xl font-semibold text-orion-blue/40 sm:text-4xl">
                  {item.number}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-orion-silver/65">
                    {item.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
