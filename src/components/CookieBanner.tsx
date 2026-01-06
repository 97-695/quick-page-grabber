import { useState } from "react";
import { Button } from "@/components/ui/button";

const CookieBanner = () => {
  const [accepted, setAccepted] = useState(false);

  if (accepted) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border px-6 py-4 flex flex-wrap items-center justify-center gap-4 z-50">
      <p className="text-sm text-foreground text-center">
        Este site utiliza cookies para melhorar sua experiência. Ao continuar, você concorda com nossa política.
      </p>
      <Button 
        onClick={() => setAccepted(true)}
        className="bg-primary hover:bg-whatsapp-dark text-primary-foreground px-6"
      >
        Aceitar
      </Button>
    </div>
  );
};

export default CookieBanner;
