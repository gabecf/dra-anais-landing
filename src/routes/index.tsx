import { createFileRoute } from "@tanstack/react-router";

import { HeroSection } from "@/components/sections/hero";
import { SobreSection } from "@/components/sections/sobre";
import { ServicosSection } from "@/components/sections/servicos";
import { DiferenciaisSection } from "@/components/sections/diferenciais";
import { DepoimentosSection } from "@/components/sections/depoimentos";
import { FaqSection } from "@/components/sections/faq";
import { ContatoSection } from "@/components/sections/contato";
import { Footer } from "@/components/sections/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { SITE_META } from "@/lib/config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE_META.title },
      { name: "description", content: SITE_META.description },
      { property: "og:title", content: SITE_META.title },
      { property: "og:description", content: SITE_META.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_META.title },
      { name: "twitter:description", content: SITE_META.description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <SobreSection />
      <ServicosSection />
      <DiferenciaisSection />
      <DepoimentosSection />
      <FaqSection />
      <ContatoSection />
      <Footer />

      {/* Floating WhatsApp CTA */}
      <WhatsAppButton variant="floating" aria-label="Abrir conversa no WhatsApp" />
    </main>
  );
}
