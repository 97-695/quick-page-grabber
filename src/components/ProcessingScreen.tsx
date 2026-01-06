import { useState, useEffect } from "react";
import { Loader2, Search, CheckCircle2, Phone } from "lucide-react";

interface ProcessingScreenProps {
  phone: string;
  onComplete: () => void;
}

const steps = [
  { icon: Loader2, text: "Iniciando conexão com servidores WhatsApp...", spinning: true },
  { icon: Search, text: "Localizando servidor mais próximo...", spinning: false },
  { icon: CheckCircle2, text: "Servidor localizado! Estabelecendo conexão segura...", spinning: false, highlight: true },
  { icon: Phone, text: "Verificando número de telefone...", spinning: false },
];

const ProcessingScreen = ({ phone, onComplete }: ProcessingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 80);

    const stepInterval = setInterval(() => {
      setCurrentStep(prev => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h1 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
        Processando Acesso ao WhatsApp
      </h1>
      <p className="text-muted-foreground text-center mb-8">
        Aguarde enquanto conectamos aos servidores e preparamos seu acesso.
      </p>

      <div className="w-full max-w-lg bg-card rounded-2xl shadow-lg p-8">
        {/* Circular Progress */}
        <div className="flex justify-center mb-6">
          <div className="relative w-24 h-24">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="48"
                cy="48"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-muted"
              />
              <circle
                cx="48"
                cy="48"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                strokeDasharray={251.2}
                strokeDashoffset={251.2 - (251.2 * progress) / 100}
                className="text-primary transition-all duration-100"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-muted rounded-full mb-2 overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-100 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-primary mb-6">Conectando aos servidores... {progress}%</p>

        {/* Steps */}
        <div className="space-y-3">
          {steps.slice(0, currentStep + 1).map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className={`flex items-center gap-3 text-sm animate-slide-up ${
                  step.highlight ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                <Icon className={`w-4 h-4 flex-shrink-0 ${step.spinning ? 'animate-spin' : ''}`} />
                <span>{step.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProcessingScreen;
