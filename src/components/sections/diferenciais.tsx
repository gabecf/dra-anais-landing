import { ScrollReveal } from "@/components/scroll-reveal";
import { CheckCircle2 } from "lucide-react";

const differentials = [
  {
    title: "Atendimento individualizado",
    description:
      "Cada paciente tem uma história, um corpo e uma rotina. O plano é construído a partir disso — não a partir de protocolos prontos.",
  },
  {
    title: "Base científica sólida",
    description:
      "Todas as decisões são embasadas em evidências médicas atualizadas, sem modismos ou práticas sem comprovação.",
  },
  {
    title: "Acompanhamento contínuo",
    description:
      "O emagrecimento não acontece em uma única consulta. Por isso, acompanhamos a evolução, os desafios e os ajustes ao longo do tempo.",
  },
  {
    title: "Sem promessas milagrosas",
    description:
      "Não vendemos resultados rápidos. Trabalhamos com realismo, honestidade e metas que fazem sentido para a sua vida.",
  },
  {
    title: "Escuta e respeito",
    description:
      "Aqui você é ouvida. As dificuldades são tratadas com empatia, sem julgamentos, e com foco na sua saúde física e emocional.",
  },
  {
    title: "Piracicaba e região",
    description:
      "Atendimento presencial em Piracicaba-SP, com a possibilidade de acompanhamento híbrido para maior conveniência.",
  },
];

export function DiferenciaisSection() {
  return (
    <section id="diferenciais" className="section-padding bg-gradient-navy text-primary-foreground">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <span className="text-sm font-medium uppercase tracking-widest text-champagne">
              Por que nos escolher
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight text-primary-foreground md:text-4xl">
              A diferença de um acompanhamento médico sério
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="mx-auto mt-6 h-0.5 w-16 rounded-full bg-gradient-to-r from-champagne to-blush" />
          </ScrollReveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 100}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 text-champagne">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-primary-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
