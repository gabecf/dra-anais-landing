import { WhatsAppButton } from "@/components/whatsapp-button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { MapPin, Clock, Phone } from "lucide-react";

export function ContatoSection() {
  return (
    <section id="contato" className="section-padding bg-gradient-navy text-primary-foreground">
      <div className="container-tight">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <ScrollReveal>
              <span className="text-sm font-medium uppercase tracking-widest text-champagne">
                Agende sua consulta
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight text-primary-foreground md:text-4xl">
                Dê o primeiro passo com quem entende o seu processo
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="mt-6 h-0.5 w-16 rounded-full bg-gradient-to-r from-champagne to-blush" />
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="mt-6 text-balance text-lg leading-relaxed text-primary-foreground/85">
                Entre em contato pelo WhatsApp. Vamos conversar sobre seus objetivos, tirar dúvidas
                e agendar sua primeira avaliação.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300} className="mt-8">
              <WhatsAppButton className="bg-white text-[#25D366] hover:bg-white/90 hover:text-[#1fa855]">
                Falar no WhatsApp
              </WhatsAppButton>
            </ScrollReveal>
          </div>

          <div className="grid gap-5">
            <ScrollReveal delay={100}>
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-champagne/20 text-champagne">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-primary-foreground">
                    Localização
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-primary-foreground/80">
                    Piracicaba-SP
                    <br />
                    Endereço completo disponível no agendamento
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-champagne/20 text-champagne">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-primary-foreground">
                    Atendimento
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-primary-foreground/80">
                    Segunda a sexta
                    <br />
                    Horários disponíveis sob agendamento
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-champagne/20 text-champagne">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-primary-foreground">
                    WhatsApp
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-primary-foreground/80">
                    Respostas em horário comercial
                    <br />
                    Atendimento ágil e humanizado
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
