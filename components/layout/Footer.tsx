import { Instagram, Phone } from "lucide-react";
import OrionMark from "@/components/visual/OrionMark";

const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 pb-10 pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-3">
              <OrionMark className="h-8 w-8" />
              <span className="font-display text-base font-semibold text-white">
                ORION<span className="text-orion-cyan"> TECH</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-orion-silver/60">
              Tecnologia, soluções e inovação para quem precisa de sistemas
              sob medida e documentos que representam bem o seu trabalho.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-orion-silver/40">
              Navegação
            </p>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-orion-silver/70 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-orion-silver/40">
              Contato
            </p>
            <ul className="mt-4 space-y-3 text-sm text-orion-silver/70">
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=5519983806371&text&type=phone_number&app_absent=0&utm_source=ig"
                  className="flex items-center gap-2 hover:text-white"
                  target="_blank"
                >
                  <Phone className="h-4 w-4" /> Fale Conosco!
                </a>
              </li>
              <li>
                <a
                  target="_blank" 
                  href='https://www.instagram.com/orion_tech00/'
                  className="flex items-center gap-2 hover:text-white"
                >
                  <Instagram className="h-4 w-4" /> Orion Tech
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-orion-silver/40 sm:flex-row">
          <p>© {year} Orion Tech. Todos os direitos reservados.</p>
          <p>Feito sob o céu de Órion.</p>
        </div>
      </div>
    </footer>
  );
}
