import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import GenderSelection from "@/components/GenderSelection";
import PhoneInput from "@/components/PhoneInput";
import ProcessingScreen from "@/components/ProcessingScreen";
import ProfileFound from "@/components/ProfileFound";
import ChatInterface from "@/components/ChatInterface";

type Step = 'gender' | 'phone' | 'processing' | 'profile' | 'chat';

const Index = () => {
  const [step, setStep] = useState<Step>('gender');
  const [phone, setPhone] = useState("");

  const handleGenderSelect = () => {
    setStep('phone');
  };

  const handlePhoneSubmit = (phoneNumber: string) => {
    setPhone(phoneNumber);
    setStep('processing');
  };

  const handleProcessingComplete = () => {
    setStep('profile');
  };

  const handleAccessReport = () => {
    setStep('chat');
  };

  if (step === 'chat') {
    return <ChatInterface />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header showWhatsAppLogo={step !== 'gender'} />
      
      <main className="flex-1">
        {step === 'gender' && (
          <GenderSelection onSelect={handleGenderSelect} />
        )}
        
        {step === 'phone' && (
          <PhoneInput onSubmit={handlePhoneSubmit} />
        )}
        
        {step === 'processing' && (
          <ProcessingScreen phone={phone} onComplete={handleProcessingComplete} />
        )}
        
        {step === 'profile' && (
          <ProfileFound phone={phone} onAccess={handleAccessReport} />
        )}
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
