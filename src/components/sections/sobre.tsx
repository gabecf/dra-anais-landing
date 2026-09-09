import { ScrollReveal } from "@/components/scroll-reveal";
import { Award, GraduationCap, Presentation, Stethoscope } from "lucide-react";
import sobrePhoto from "@/assets/images/dra-ana_04.webp";

const credentials = [
  {
    icon: Award,
    value: "10+ anos",
    label: "de experiência",
  },
  {
    icon: GraduationCap,
    value: "Mestrado",
    label: "pela UNIFESP",
  },
  {
    icon: Stethoscope,
    value: "Pós-graduação em Nutrologia",
    label: "pelo Hospital Israelita Albert Einstein",
  },
  {
    icon: Presentation,
    value: "Professora de Medicina",
    label: "na Universidade Anhembi Morumbi (UAM)",
  },
];

export function SobreSection() {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-tight">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal className="order-2 lg:order-1">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
              <img
                src={sobrePhoto}
                alt="Dra. Ana Laís Rigolon"
                className="h-full w-full object-cover"
              />

              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-blush/40" />
            </div>
          </ScrollReveal>

          <div className="order-1 lg:order-2">
            <ScrollReveal>
              <h2 className="text-balance text-3xl font-semibold leading-tight text-foreground md:text-4xl">
                Medicina com escuta, ciência e direcionamento
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="mt-6 text-balance text-lg leading-relaxed text-muted-foreground">
                Sou a Dra. Ana Laís Rigolon, médica especializada em obesidade, emagrecimento e
                nutrologia, com atendimento em Piracicaba-SP. Acredito que perder peso com saúde
                exige mais do que uma dieta: exige compreender a história de cada paciente, seus
                hábitos, suas dificuldades e seus objetivos reais.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="mt-4 text-balance leading-relaxed text-muted-foreground">
                Minha formação inclui mestrado pela Universidade Federal de São Paulo (UNIFESP) e
                pós-graduação em Nutrologia pelo Hospital Israelita Albert Einstein. Meu trabalho é
                pautado pela medicina baseada em evidências, com planos individualizados e
                acompanhamento contínuo. Aqui, o foco não é a velocidade: é a consistência, o
                cuidado e o resultado que se mantém ao longo do tempo.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {credentials.map((credential) => (
                  <div
                    key={credential.value}
                    className="flex items-start gap-4 rounded-xl border border-border bg-card p-5"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blush/40 text-primary">
                      <credential.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-display font-semibold leading-snug text-foreground">
                        {credential.value}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {credential.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
