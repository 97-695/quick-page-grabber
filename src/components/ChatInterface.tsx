import { useState } from "react";
import { 
  Search, Bell, MoreHorizontal, MessageSquare, Phone as PhoneIcon, 
  Users, Lock, Plus, Image, Smile, Mic, Send, Video, CheckCheck,
  PhoneIncoming, PhoneOutgoing, PhoneMissed, UserPlus
} from "lucide-react";

const chatContacts = [
  { id: 1, name: "Bloqueado", lastMessage: "Finalize a ordem de serviço", unread: 3, hasAudio: true, avatar: 1 },
  { id: 2, name: "Bloqueado", lastMessage: "Conteúdo com teor sexu...", unread: 2, avatar: 2 },
  { id: 3, name: "Bloqueado", lastMessage: "Finalize a ordem de...", unread: 5, muted: true, avatar: 3 },
  { id: 4, name: "Bloqueado", lastMessage: "Finalize a ordem de serviço", avatar: 4 },
  { id: 5, name: "Bloqueado", lastMessage: "Finalize a ordem de serviço", avatar: 5 },
  { id: 6, name: "Bloqueado", lastMessage: "Finalize a ordem de serviço", avatar: 6 },
  { id: 7, name: "Bloqueado", lastMessage: "Finalize a ordem de serviço", avatar: 7 },
];

const callHistory = [
  { id: 1, name: "Bloqueado", type: "incoming", time: "Bloqueado", duration: "5:23", avatar: 1 },
  { id: 2, name: "Bloqueado", type: "outgoing", time: "Bloqueado", duration: "2:15", avatar: 2 },
  { id: 3, name: "Bloqueado", type: "missed", time: "Bloqueado", duration: null, avatar: 3 },
  { id: 4, name: "Bloqueado", type: "incoming", time: "Bloqueado", duration: "12:45", avatar: 4 },
  { id: 5, name: "Bloqueado", type: "missed", time: "Bloqueado", duration: null, avatar: 5 },
  { id: 6, name: "Bloqueado", type: "outgoing", time: "Bloqueado", duration: "8:30", avatar: 6 },
  { id: 7, name: "Bloqueado", type: "incoming", time: "Bloqueado", duration: "1:02", avatar: 7 },
  { id: 8, name: "Bloqueado", type: "missed", time: "Bloqueado", duration: null, avatar: 8 },
];

const contactsList = [
  { id: 1, name: "Bloqueado", status: "Bloqueado", avatar: 1 },
  { id: 2, name: "Bloqueado", status: "Bloqueado", avatar: 2 },
  { id: 3, name: "Bloqueado", status: "Bloqueado", avatar: 3 },
  { id: 4, name: "Bloqueado", status: "Bloqueado", avatar: 4 },
  { id: 5, name: "Bloqueado", status: "Bloqueado", avatar: 5 },
  { id: 6, name: "Bloqueado", status: "Bloqueado", avatar: 6 },
  { id: 7, name: "Bloqueado", status: "Bloqueado", avatar: 7 },
  { id: 8, name: "Bloqueado", status: "Bloqueado", avatar: 8 },
  { id: 9, name: "Bloqueado", status: "Bloqueado", avatar: 9 },
  { id: 10, name: "Bloqueado", status: "Bloqueado", avatar: 10 },
];

const messages = [
  { id: 1, text: "Conteúdo Bloqueado", sent: false, time: "Horário Bloqueado" },
  { id: 2, text: "Conteúdo Bloqueado", sent: true, time: "Horário Bloqueado" },
  { id: 3, text: "Conteúdo Bloqueado", sent: true, time: "Horário Bloqueado" },
  { id: 4, text: "Conteúdo Bloqueado", sent: true, time: "Horário Bloqueado" },
  { id: 5, text: "Conteúdo Bloqueado", sent: true, time: "Horário Bloqueado" },
];

type MainTab = 'conversations' | 'calls' | 'contacts';

const ChatInterface = () => {
  const [mainTab, setMainTab] = useState<MainTab>('conversations');
  const [activeTab, setActiveTab] = useState<'personal' | 'groups'>('personal');
  const [selectedContact, setSelectedContact] = useState(chatContacts[0]);

  const getCallIcon = (type: string) => {
    switch (type) {
      case 'incoming':
        return <PhoneIncoming className="w-4 h-4 text-primary" />;
      case 'outgoing':
        return <PhoneOutgoing className="w-4 h-4 text-primary" />;
      case 'missed':
        return <PhoneMissed className="w-4 h-4 text-destructive" />;
      default:
        return <PhoneIcon className="w-4 h-4" />;
    }
  };

  const renderSidebarContent = () => {
    switch (mainTab) {
      case 'conversations':
        return (
          <>
            {/* Filter Tabs */}
            <div className="p-3 flex gap-2">
              <button 
                onClick={() => setActiveTab('personal')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === 'personal' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                PESSOAL
              </button>
              <button 
                onClick={() => setActiveTab('groups')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === 'groups' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                GRUPOS
              </button>
            </div>

            {/* Contact List */}
            <div className="flex-1 overflow-y-auto">
              {chatContacts.map((contact) => (
                <button
                  key={contact.id}
                  onClick={() => setSelectedContact(contact)}
                  className={`w-full p-3 flex items-center gap-3 hover:bg-muted/50 transition-colors ${
                    selectedContact.id === contact.id ? 'bg-muted/50' : ''
                  }`}
                >
                  <div className="relative">
                    <div className="w-12 h-12 bg-muted rounded-full" />
                    <span className="absolute bottom-0 left-0 w-3 h-3 bg-primary rounded-full border-2 border-card" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-foreground">{contact.name}</span>
                      <Lock className="w-3 h-3 text-amber-500" />
                    </div>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <CheckCheck className="w-4 h-4 text-primary" />
                      {contact.lastMessage}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    {contact.unread && (
                      <span className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">
                        {contact.unread}
                      </span>
                    )}
                    {contact.hasAudio && <Mic className="w-4 h-4 text-muted-foreground" />}
                  </div>
                </button>
              ))}
            </div>
          </>
        );

      case 'calls':
        return (
          <>
            <div className="p-3">
              <p className="text-xs text-muted-foreground uppercase font-medium">Histórico de Ligações</p>
            </div>
            <div className="flex-1 overflow-y-auto">
              {callHistory.map((call) => (
                <div
                  key={call.id}
                  className="w-full p-3 flex items-center gap-3 hover:bg-muted/50 transition-colors"
                >
                  <div className="relative">
                    <div className="w-12 h-12 bg-muted rounded-full" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-1">
                      <span className={`font-semibold ${call.type === 'missed' ? 'text-destructive' : 'text-foreground'}`}>
                        {call.name}
                      </span>
                      <Lock className="w-3 h-3 text-amber-500" />
                    </div>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      {getCallIcon(call.type)}
                      <span className="flex items-center gap-1">
                        {call.time} <Lock className="w-3 h-3 text-amber-500" />
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    {call.duration && (
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        {call.duration} <Lock className="w-3 h-3 text-amber-500" />
                      </span>
                    )}
                    <PhoneIcon className="w-5 h-5 text-primary" />
                  </div>
                </div>
              ))}
            </div>
          </>
        );

      case 'contacts':
        return (
          <>
            <div className="p-3 flex items-center justify-between">
              <p className="text-xs text-muted-foreground uppercase font-medium">Contatos Salvos</p>
              <UserPlus className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 overflow-y-auto">
              {contactsList.map((contact) => (
                <div
                  key={contact.id}
                  className="w-full p-3 flex items-center gap-3 hover:bg-muted/50 transition-colors"
                >
                  <div className="relative">
                    <div className="w-12 h-12 bg-muted rounded-full" />
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-primary rounded-full border-2 border-card" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-foreground">{contact.name}</span>
                      <Lock className="w-3 h-3 text-amber-500" />
                    </div>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      {contact.status} <Lock className="w-3 h-3 text-amber-500" />
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    <PhoneIcon className="w-5 h-5 text-primary" />
                  </div>
                </div>
              ))}
            </div>
          </>
        );
    }
  };

  return (
    <div className="flex h-screen bg-card overflow-hidden">
      {/* Sidebar */}
      <div className="w-80 border-r border-border flex flex-col">
        {/* User Header */}
        <div className="p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-muted rounded-full" />
          <Search className="w-5 h-5 text-muted-foreground" />
          <Bell className="w-5 h-5 text-muted-foreground" />
          <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-border">
          <button 
            onClick={() => setMainTab('conversations')}
            className={`flex-1 py-3 flex flex-col items-center gap-1 transition-colors ${
              mainTab === 'conversations' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-muted-foreground'
            }`}
          >
            <MessageSquare className="w-5 h-5" />
            <span className="text-xs">CONVERSAS</span>
          </button>
          <button 
            onClick={() => setMainTab('calls')}
            className={`flex-1 py-3 flex flex-col items-center gap-1 transition-colors ${
              mainTab === 'calls' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-muted-foreground'
            }`}
          >
            <PhoneIcon className="w-5 h-5" />
            <span className="text-xs">LIGAÇÕES</span>
          </button>
          <button 
            onClick={() => setMainTab('contacts')}
            className={`flex-1 py-3 flex flex-col items-center gap-1 transition-colors ${
              mainTab === 'contacts' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-muted-foreground'
            }`}
          >
            <Users className="w-5 h-5" />
            <span className="text-xs">CONTATOS</span>
          </button>
        </div>

        {renderSidebarContent()}

        {/* FAB */}
        <div className="p-4">
          <button className="w-12 h-12 bg-primary hover:bg-whatsapp-dark rounded-full flex items-center justify-center text-primary-foreground shadow-lg ml-auto">
            <Plus className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-cream">
        {/* Chat Header */}
        <div className="bg-card p-4 flex items-center justify-between border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-muted rounded-full" />
            <div>
              <div className="flex items-center gap-1">
                <span className="font-semibold text-foreground">Bloqueado</span>
                <Lock className="w-3 h-3 text-amber-500" />
              </div>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                Horário Bloqueado <Lock className="w-3 h-3 text-amber-500" />
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <PhoneIcon className="w-5 h-5 text-muted-foreground" />
            <Video className="w-5 h-5 text-muted-foreground" />
            <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 relative">
          <div className="text-center text-xs text-muted-foreground py-2">
            Última atualização
          </div>
          
          {messages.map((message) => (
            <div 
              key={message.id}
              className={`flex ${message.sent ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`relative max-w-xs ${message.sent ? '' : 'flex gap-2'}`}>
                {!message.sent && <div className="w-8 h-8 bg-muted rounded-full flex-shrink-0" />}
                <div 
                  className={`px-4 py-2 rounded-lg ${
                    message.sent 
                      ? 'bg-whatsapp-light text-foreground rounded-br-none' 
                      : 'bg-card text-foreground rounded-bl-none'
                  }`}
                >
                  <p className="flex items-center gap-1">
                    {message.text} <Lock className="w-3 h-3 text-amber-500" />.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1 justify-end">
                    {message.time} <Lock className="w-3 h-3 text-amber-500" />
                    {message.sent && <CheckCheck className="w-4 h-4 text-primary" />}
                  </p>
                </div>
                <button className="absolute -right-8 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}

          {/* Single CTA Button */}
          <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
            <a 
              href="https://ambienteseguro.org.ua/c/a7466531df"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-whatsapp-dark text-primary-foreground font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-105 text-center"
            >
              Liberar acesso completo<br />por <span className="text-xl">R$ 24,90</span>
            </a>
          </div>
        </div>

        {/* Input Area */}
        <div className="bg-card p-4 flex items-center gap-3 border-t border-border">
          <Image className="w-6 h-6 text-muted-foreground" />
          <Smile className="w-6 h-6 text-muted-foreground" />
          <div className="flex-1 bg-muted rounded-full px-4 py-2">
            <input 
              type="text" 
              placeholder="Escreva sua mensagem"
              className="w-full bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <Mic className="w-6 h-6 text-muted-foreground" />
          <button className="w-10 h-10 bg-primary hover:bg-whatsapp-dark rounded-full flex items-center justify-center text-primary-foreground">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
