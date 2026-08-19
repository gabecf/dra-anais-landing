import { ScrollReveal } from "@/components/scroll-reveal";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Activity, Apple, Brain, HeartPulse, Stethoscope } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Avaliação médica especializada",
    description:
      "Consulta inicial completa para entender sua saúde, histórico, rotina e objetivos — o primeiro passo de um plano feito para você.",
  },
  {
    icon: Activity,
    title: "Acompanhamento do emagrecimento",
    description:
      "Acompanhamento contínuo para perda de peso saudável, com ajustes realistas, acompanhamento de evolução e apoio nas dificuldades.",
  },
  {
    icon: HeartPulse,
    title: "Tratamento da obesidade",
    description:
      "Abordagem clínica da obesidade, com avaliação de fatores metabólicos, hormonais e comportamentais, sempre respeitando seu ritmo.",
  },
  {
    icon: Apple,
    title: "Nutrologia clínica",
    description:
      "Uso da nutrição e da suplementação com base científica, indicados quando necessários e acompanhados de perto.",
  },
  {
    icon: Brain,
    title: "Mudança de comportamento",
    description:
      "Estratégias para construir hábitos sustentáveis, melhorar a relação com a comida e romper o ciclo de perda e ganho de peso.",
  },
];

export function ServicosSection() {
  return (
    <section id="servicos" className="section-padding bg-cream">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              O que oferecemos
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              Cuidado médico em cada etapa do seu emagrecimento
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="divider-gold mx-auto mt-6" />
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-6 text-balance text-lg text-muted-foreground">
              Cada consulta é um passo do seu processo. Não oferecemos fórmulas prontas: oferecemos
              estratégia, acompanhamento e ajustes ao longo do caminho.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 100}>
              <Card className="card-lift h-full border-border bg-card text-card-foreground">
                <CardHeader className="pb-3">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blush/40 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-display text-xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
