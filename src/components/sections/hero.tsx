import { ScrollReveal } from "@/components/scroll-reveal";
import heroPhoto from "@/assets/images/dra-ana_03.webp";

export function HeroSection() {
  return (
    <section className="relative bg-background">
      <div className="relative overflow-hidden rounded-2xl mx-2 my-3 bg-gradient-hero md:mx-3 md:my-6 md:rounded-[24px]">
        {/* Subtle decorative shapes */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blush/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-champagne/20 blur-3xl" />

        <div className="container-tight relative z-10 grid items-center gap-10 py-16 lg:grid-cols-[55fr_45fr] lg:gap-16 lg:py-20">
          <div className="text-center lg:text-left">
            <ScrollReveal delay={100}>
              <h1 className="mx-auto max-w-2xl text-balance text-4xl font-semibold leading-[1.15] text-foreground md:text-5xl lg:mx-0 lg:text-6xl">
                Você não precisa emagrecer sozinha outra vez
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground md:text-xl lg:mx-0">
                Acompanhamento médico especializado em obesidade, emagrecimento e nutrologia para
                mulheres que querem resultados reais, sustentáveis e com saúde.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="#sobre"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-background px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                >
                  Conhecer o acompanhamento
                </a>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <div className="mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-lg lg:max-w-none">
              <img
                src={heroPhoto}
                alt="Dra. Ana Laís Rigolon"
                className="h-full w-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
