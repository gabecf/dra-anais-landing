import { ScrollReveal } from "@/components/scroll-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O atendimento é apenas presencial?",
    answer:
      "O atendimento principal é presencial em Piracicaba-SP. Em alguns casos, oferecemos também acompanhamento híbrido, com consultas de retorno online, para maior conveniência e continuidade.",
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer:
      "Cada pessoa tem um ritmo. Trabalhamos com metas realistas e acompanhamento contínuo. Nosso foco não é a velocidade, mas a consistência e a manutenção do resultado ao longo do tempo.",
  },
  {
    question: "A consulta inclui plano alimentar?",
    answer:
      "Sim. O plano alimentar é individualizado e ajustado às suas necessidades, rotina e preferências. Ele é revisado e adaptado ao longo do acompanhamento.",
  },
  {
    question: "Vocês indicam medicamentos para emagrecer?",
    answer:
      "A prescrição de qualquer medicamento é feita exclusivamente após avaliação médica completa e quando há indicação clínica. Não há protocolos padronizados: cada decisão é individual.",
  },
  {
    question: "O acompanhamento serve para quem já fez várias dietas?",
    answer:
      "Sim. Grande parte das pacientes chega com histórico de dietas frustradas. Nosso trabalho é justamente entender o que aconteceu antes e construir uma estratégia diferente, sustentável e saudável.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-tight">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <ScrollReveal>
              <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Dúvidas comuns
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight text-foreground md:text-4xl">
                Perguntas frequentes
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="divider-gold mx-auto mt-6" />
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200} className="mt-12">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
