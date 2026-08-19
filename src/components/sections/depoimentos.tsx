import { ScrollReveal } from "@/components/scroll-reveal";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Depois de anos fazendo dietas e voltando a engordar, finalmente encontrei um acompanhamento que me ensinou a cuidar de mim sem culpa.",
    name: "Maria C.",
    detail: "Paciente há 8 meses",
  },
  {
    quote:
      "A Dra. Ana Laís escuta de verdade. Nunca me senti pressionada, e pela primeira vez estou perdendo peso sem sofrimento.",
    name: "Fernanda R.",
    detail: "Paciente há 1 ano",
  },
  {
    quote:
      "Gosto da clareza e do respeito. O tratamento é feito no meu ritmo, com explicações e acompanhamento real.",
    name: "Juliana M.",
    detail: "Paciente há 6 meses",
  },
];

export function DepoimentosSection() {
  return (
    <section id="depoimentos" className="section-padding bg-blush-light/40">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Depoimentos
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              Histórias de quem decidiu cuidar de si
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="divider-gold mx-auto mt-6" />
          </ScrollReveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <ScrollReveal key={item.name} delay={index * 100}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
                <Quote className="h-6 w-6 text-blush-dark" />
                <p className="mt-4 flex-grow text-balance leading-relaxed text-foreground">
                  “{item.quote}”
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-medium text-foreground">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
