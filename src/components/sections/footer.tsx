import { SITE_META } from "@/lib/config";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="container-tight">
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <p className="font-display text-xl font-semibold text-foreground">
              Dra. Ana Laís Rigolon
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Obesidade · Emagrecimento · Nutrologia
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#sobre" className="transition-colors hover:text-foreground">
              Sobre
            </a>
            <a href="#servicos" className="transition-colors hover:text-foreground">
              Serviços
            </a>
            <a href="#diferenciais" className="transition-colors hover:text-foreground">
              Diferenciais
            </a>
            <a href="#faq" className="transition-colors hover:text-foreground">
              FAQ
            </a>
            <a href="#contato" className="transition-colors hover:text-foreground">
              Contato
            </a>
          </nav>
        </div>

        <div className="mt-8 border-t border-border pt-6">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} {SITE_META.author}. Todos os direitos reservados.
            <br />
            Site informativo. O agendamento e a prescrição médica são feitos exclusivamente após
            avaliação individual.
          </p>
        </div>
      </div>
    </footer>
  );
}
