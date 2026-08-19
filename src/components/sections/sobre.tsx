import { ScrollReveal } from "@/components/scroll-reveal";

export function SobreSection() {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-tight">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* PLACEHOLDER: foto sobre da Dra. Ana Laís */}
          <ScrollReveal className="order-2 lg:order-1">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-muted-foreground">
                <div className="rounded-full bg-muted p-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <span className="text-sm font-medium">
                  PLACEHOLDER: foto sobre da Dra. Ana Laís
                </span>
              </div>

              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-blush/40" />
            </div>
          </ScrollReveal>

          <div className="order-1 lg:order-2">
            <ScrollReveal>
              <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Sobre a médica
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight text-foreground md:text-4xl">
                Medicina com escuta, ciência e direcionamento
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="divider-gold mt-6" />
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="mt-6 text-balance text-lg leading-relaxed text-muted-foreground">
                Dra. Ana Laís Rigolon é médica especializada em obesidade, emagrecimento e
                nutrologia, com atendimento em Piracicaba-SP. Acredita que perder peso com saúde
                exige mais do que uma dieta: exige compreender a história de cada paciente, seus
                hábitos, suas dificuldades e seus objetivos reais.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="mt-4 text-balance leading-relaxed text-muted-foreground">
                Seu trabalho é pautado pela medicina baseada em evidências, com planos
                individualizados e acompanhamento contínuo. Aqui, o foco não é a velocidade: é a
                consistência, o cuidado e o resultado que se mantém ao longo do tempo.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="font-display text-3xl font-semibold text-primary">10+</p>
                  <p className="mt-1 text-sm text-muted-foreground">anos de formação médica</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="font-display text-3xl font-semibold text-primary">100s</p>
                  <p className="mt-1 text-sm text-muted-foreground">de pacientes acompanhadas</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
