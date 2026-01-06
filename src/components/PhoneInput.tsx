import { useState, useEffect } from "react";
import { Lock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface PhoneInputProps {
  onSubmit: (phone: string) => void;
}

const notifications = [
  { phone: "(75) 94449-XX50", city: "", message: "está com localização sendo rastreada!" },
  { phone: "(65) 94415-XX16", city: "de Cuiabá", message: "está com localização sendo rastreada!" },
  { phone: "(11) 98765-XX32", city: "de São Paulo", message: "está sendo monitorado!" },
  { phone: "(21) 99876-XX45", city: "do Rio", message: "está com localização sendo rastreada!" },
  { phone: "(31) 97654-XX21", city: "de BH", message: "foi conectado com sucesso!" },
];

const PhoneInput = ({ onSubmit }: PhoneInputProps) => {
  const [phone, setPhone] = useState("");
  const [visibleNotifications, setVisibleNotifications] = useState<number[]>([0, 1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleNotifications(prev => {
        const next = [...prev];
        next.shift();
        const nextIndex = (prev[prev.length - 1] + 1) % notifications.length;
        next.push(nextIndex);
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 2) return `(${numbers}`;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    if (formatted.length <= 16) setPhone(formatted);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.replace(/\D/g, "").length >= 10) {
      onSubmit(phone);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h1 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-2">
        Parabéns, você ganhou 1 acesso
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
        gratuito!
      </h2>
      <p className="text-muted-foreground text-center mb-8">
        Insira o número abaixo e inicie o monitoramento silencioso.
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <Input
          type="tel"
          value={phone}
          onChange={handleChange}
          placeholder="(99) 99999-9999"
          className="h-14 text-lg text-center bg-card border-border focus:ring-primary"
        />
        
        <Button 
          type="submit"
          className="w-full h-14 bg-primary hover:bg-whatsapp-dark text-primary-foreground text-lg font-semibold gap-2"
        >
          <Lock className="w-5 h-5" />
          Clonar WhatsApp Agora
        </Button>
      </form>

      <div className="mt-8 w-full max-w-md space-y-3">
        {visibleNotifications.map((index, i) => (
          <div 
            key={`${index}-${i}`}
            className="flex items-center gap-3 bg-whatsapp-light border border-primary/20 rounded-lg p-4 animate-slide-up"
          >
            <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
            <p className="text-sm text-foreground">
              <span className="font-semibold">{notifications[index].phone}</span>
              {notifications[index].city && ` ${notifications[index].city}`} {notifications[index].message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhoneInput;
