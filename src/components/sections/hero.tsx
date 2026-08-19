import { WhatsAppButton } from "@/components/whatsapp-button";
import { ScrollReveal } from "@/components/scroll-reveal";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      {/* Subtle decorative shapes */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blush/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-champagne/20 blur-3xl" />

      <div className="container-tight relative z-10 flex min-h-[90vh] flex-col items-center justify-center py-20 text-center lg:min-h-[88vh]">
        <ScrollReveal delay={0}>
          <span className="mb-5 inline-block rounded-full border border-border bg-card/70 px-4 py-1.5 text-sm font-medium tracking-wide text-muted-foreground">
            Medicina baseada em ciência · Piracicaba-SP
          </span>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.15] text-foreground md:text-5xl lg:text-6xl">
            Você não precisa emagrecer sozinha outra vez
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
            Acompanhamento médico especializado em obesidade, emagrecimento e nutrologia para
            mulheres que querem resultados reais, sustentáveis e com saúde.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <WhatsAppButton>Agendar uma consulta</WhatsAppButton>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              Conhecer o acompanhamento
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p className="mt-5 text-sm text-muted-foreground">
            Sem promessas milagrosas. Sem protocolos genéricos.
          </p>
        </ScrollReveal>

        {/* PLACEHOLDER: foto hero da Dra. Ana Laís */}
        <ScrollReveal delay={500} className="mt-16 w-full max-w-3xl">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
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
              <span className="text-sm font-medium">PLACEHOLDER: foto hero da Dra. Ana Laís</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
