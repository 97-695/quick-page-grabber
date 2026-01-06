const Footer = () => {
  return (
    <footer className="py-6 px-4 text-center">
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
          Política de Privacidade
        </a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
          Termos de Uso
        </a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
          Suporte por Email
        </a>
      </div>
      <p className="text-muted-foreground text-sm">
        © 2024 Proteja Seu Relacionamento. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
