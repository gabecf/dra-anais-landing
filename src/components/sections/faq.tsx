import { useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { WhatsAppButton } from "@/components/whatsapp-button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqPhoto from "@/assets/images/dra-ana_01.webp";

const faqs = [
  {
    question: "A consulta é particular ou atende convênio?",
    answer:
      "Particular. Emitimos nota fiscal para que você solicite reembolso ao seu plano de saúde, conforme as regras da sua operadora.",
  },
  {
    question: "A partir de qual idade são realizadas as consultas?",
    answer: "A partir de 16 anos.",
  },
  {
    question: "O acompanhamento é só para quem quer emagrecer?",
    answer:
      "Não. Também é indicado para ganho de massa muscular, hipertrofia, melhora da composição corporal, tratamento de baixo peso e outras condições como diabetes, hipertensão, gordura no fígado, distúrbios de tireoide e climatério/menopausa.",
  },
  {
    question: "Como funciona antes da primeira consulta?",
    answer:
      "Você recebe um questionário sobre histórico de saúde, hábitos, alimentação e objetivos, analisado previamente pela Dra. Quando necessário, exames complementares podem ser solicitados antes do atendimento.",
  },
  {
    question: "Como é a primeira consulta?",
    answer:
      "Tem duração de até 90 minutos e inclui avaliação clínica completa, bioimpedância (análise de composição corporal), histórico de saúde, exames e, quando indicado, avaliação hormonal e de saúde óssea.",
  },
  {
    question: "Preciso continuar com acompanhamento depois da primeira consulta?",
    answer:
      "Não necessariamente. A continuidade é avaliada de acordo com seu caso e objetivos — quando indicada, os retornos são programados individualmente.",
  },
  {
    question: "O tratamento é igual para todos os pacientes?",
    answer:
      "Não. A conduta é personalizada com base no seu histórico, exames, composição corporal e objetivos específicos.",
  },
  {
    question: "A clínica faz soroterapia ou vende medicamentos?",
    answer:
      "Não. Quando há indicação de tratamento medicamentoso, a prescrição é feita pela Dra. e a medicação deve ser adquirida em farmácia de sua preferência.",
  },
  {
    question: "Para quem esse tratamento não é indicado?",
    answer:
      "Para quem busca resultado imediato, milagre ou emagrecimento sem esforço, ou espera que a medicação, sozinha, resolva tudo. Aqui, o resultado depende de ciência, acompanhamento e participação ativa do paciente.",
  },
];

export function FaqSection() {
  const [openItem, setOpenItem] = useState("");

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-tight">
        <div className="text-center">
          <ScrollReveal>
            <h2 className="text-balance text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              Perguntas frequentes
            </h2>
          </ScrollReveal>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-5 lg:items-start lg:gap-12">
          <ScrollReveal className="lg:col-span-2">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-card shadow-lg lg:mx-0">
              <img
                src={faqPhoto}
                alt="Dra. Ana Laís Rigolon"
                className="h-full w-full object-cover"
              />

              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-blush/40" />
            </div>

            <div className="mx-auto mt-6 w-full max-w-sm lg:mx-0">
              <WhatsAppButton
                className="w-full"
                message="Olá! Ainda fiquei com algumas dúvidas e gostaria de conversar com a Dra. Ana Laís Rigolon."
              >
                Ainda tem dúvidas? Fale comigo
              </WhatsAppButton>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150} className="lg:col-span-3">
            <Accordion
              type="single"
              collapsible
              value={openItem}
              onValueChange={setOpenItem}
              className="w-full space-y-2"
            >
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent
                    className="cursor-pointer text-base leading-relaxed text-muted-foreground"
                    onClick={() => setOpenItem("")}
                  >
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
