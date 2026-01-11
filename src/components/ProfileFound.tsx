import { MapPin, Smartphone, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProfileFoundProps {
  phone: string;
  onAccess: () => void;
}

const ProfileFound = ({ phone, onAccess }: ProfileFoundProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h1 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
        Processando Acesso ao WhatsApp
      </h1>
      <p className="text-muted-foreground text-center mb-8">
        Aguarde enquanto conectamos aos servidores e preparamos seu acesso.
      </p>

      <div className="w-full max-w-md bg-card rounded-2xl shadow-lg p-8">
        {/* Profile Avatar */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4 ring-4 ring-primary/30">
            <div className="w-20 h-20 bg-muted-foreground/30 rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-12 h-12 text-muted-foreground/50 fill-current">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
          </div>
          <h2 className="text-xl font-bold text-foreground">Perfil WhatsApp</h2>
          <p className="text-muted-foreground">{phone}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary text-sm font-medium">Online recentemente</span>
          </div>
        </div>

        <div className="border-t border-border pt-6 space-y-4">
          {/* Device Status */}
          <div className="flex items-center gap-4">
            <Smartphone className="w-5 h-5 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Status do dispositivo</p>
              <p className="font-semibold text-foreground">Ativo</p>
            </div>
          </div>
        </div>

        <Button 
          onClick={onAccess}
          className="w-full mt-6 h-12 bg-primary hover:bg-whatsapp-dark text-primary-foreground font-semibold gap-2"
        >
          <TrendingUp className="w-5 h-5" />
          Acessar Relatório
        </Button>
      </div>
    </div>
  );
};

export default ProfileFound;
