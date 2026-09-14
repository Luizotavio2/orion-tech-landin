"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";
import OrionConstellation from "@/components/visual/OrionConstellation";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12 lg:gap-6 lg:px-8">
        {/* Text column intentionally spans 7/12 and sits left — the visual
            below breaks out of its column and bleeds toward the edge, which
            is what keeps this from reading as a centered, symmetric hero. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 lg:col-span-7"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-orion-cyan/90">
            Tecnologia <span className="text-white/20">•</span> Soluções
            <span className="text-white/20">•</span> Inovação
          </div>

          <h1 className="font-display text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Ideias viram <span className="text-gradient">produto</span>,
            <br />
            não ficam na prancheta.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-orion-silver/80">
            A Orion Tech desenvolve sistemas web sob medida, automações e
            integrações — e também cuida dos documentos profissionais que
            fazem sua carreira ou seu negócio parecerem tão sérios quanto
            realmente são.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <GlowButton href="https://api.whatsapp.com/send/?phone=5519983806371&text&type=phone_number&app_absent=0&utm_source=ig" icon={<ArrowRight size={16} />}>
              Solicitar orçamento
            </GlowButton>
            <GlowButton href="#servicos" variant="ghost">
              Ver serviços
            </GlowButton>
          </div>

          <div className="mt-16 flex items-center gap-8 text-orion-silver/50">
            <div>
              <p className="font-display text-2xl font-semibold text-white">100%</p>
              <p className="text-xs uppercase tracking-wider">Sob medida</p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <p className="font-display text-2xl font-semibold text-white">Direto</p>
              <p className="text-xs uppercase tracking-wider">Sem intermediários</p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <p className="font-display text-2xl font-semibold text-white">Pós-entrega</p>
              <p className="text-xs uppercase tracking-wider">Com suporte</p>
            </div>
          </div>
        </motion.div>

        {/* Visual column: overflows its grid cell on large screens so the
            constellation bleeds past the container edge instead of sitting
            neatly centered inside a box. */}
        <div className="relative -mx-6 h-[380px] sm:h-[460px] lg:col-span-5 lg:mx-0 lg:h-[560px] lg:justify-self-end lg:[width:130%]">
          <OrionConstellation />
        </div>
      </div>

      {/* Vertical editorial label — the kind of asymmetric detail a generic
          agency template wouldn't bother with. */}
      <div className="pointer-events-none absolute bottom-24 right-6 hidden -rotate-90 text-[11px] uppercase tracking-[0.4em] text-orion-silver/30 lg:block">
        Órion — Constelação
      </div>

      <motion.a
        href="#sobre"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-orion-silver/40 hover:text-orion-cyan lg:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Rolar</span>
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}
