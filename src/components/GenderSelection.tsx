import { User } from "lucide-react";

interface GenderSelectionProps {
  onSelect: (gender: 'male' | 'female') => void;
}

const GenderSelection = ({ onSelect }: GenderSelectionProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
        Proteja Seu Relacionamento
      </h1>
      <p className="text-muted-foreground text-center mb-10 max-w-md">
        Descubra como manter seu relacionamento seguro e saudável com nossa solução exclusiva.
      </p>
      
      <div className="flex flex-col gap-4 w-full max-w-lg">
        <button
          onClick={() => onSelect('male')}
          className="flex items-center gap-4 w-full bg-primary hover:bg-whatsapp-dark text-primary-foreground px-6 py-5 rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg"
        >
          <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center">
            <User className="w-6 h-6" />
          </div>
          <span className="text-lg font-semibold">Quero Monitorar Meu Parceiro</span>
        </button>
        
        <button
          onClick={() => onSelect('female')}
          className="flex items-center gap-4 w-full bg-primary hover:bg-whatsapp-dark text-primary-foreground px-6 py-5 rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg"
        >
          <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center">
            <User className="w-6 h-6" />
          </div>
          <span className="text-lg font-semibold">Quero Monitorar Minha Parceira</span>
        </button>
      </div>
    </div>
  );
};

export default GenderSelection;
