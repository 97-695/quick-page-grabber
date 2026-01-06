import { useState } from "react";
import { 
  Search, Bell, MoreHorizontal, MessageSquare, Phone as PhoneIcon, 
  Users, Lock, Plus, Image, Smile, Mic, Send, Video, Check, CheckCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";

const contacts = [
  { id: 1, name: "Bloqueado", lastMessage: "Finalize a ordem de serviço", unread: 3, hasAudio: true, avatar: 1 },
  { id: 2, name: "Bloqueado", lastMessage: "Conteúdo com teor sexu...", unread: 2, avatar: 2 },
  { id: 3, name: "Bloqueado", lastMessage: "Finalize a ordem de...", unread: 5, muted: true, avatar: 3 },
  { id: 4, name: "Bloqueado", lastMessage: "Finalize a ordem de serviço", avatar: 4 },
  { id: 5, name: "Bloqueado", lastMessage: "Finalize a ordem de serviço", avatar: 5 },
  { id: 6, name: "Bloqueado", lastMessage: "Finalize a ordem de serviço", avatar: 6 },
  { id: 7, name: "Bloqueado", lastMessage: "Finalize a ordem de serviço", avatar: 7 },
];

const messages = [
  { id: 1, text: "Conteúdo Bloqueado", sent: false, time: "Horário Bloqueado" },
  { id: 2, text: "Conteúdo Bloqueado", sent: true, time: "Horário Bloqueado" },
  { id: 3, text: "Conteúdo Bloqueado", sent: true, time: "Horário Bloqueado" },
  { id: 4, text: "Conteúdo Bloqueado", sent: true, time: "Horário Bloqueado" },
  { id: 5, text: "Conteúdo Bloqueado", sent: true, time: "Horário Bloqueado" },
];

const ChatInterface = () => {
  const [activeTab, setActiveTab] = useState<'personal' | 'groups'>('personal');
  const [selectedContact, setSelectedContact] = useState(contacts[0]);

  return (
    <div className="flex h-screen bg-card overflow-hidden">
      {/* Sidebar */}
      <div className="w-80 border-r border-border flex flex-col">
        {/* User Header */}
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-muted rounded-full" />
            <Search className="w-5 h-5 text-muted-foreground" />
            <Bell className="w-5 h-5 text-muted-foreground" />
            <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
          </div>
          <Button className="bg-primary hover:bg-whatsapp-dark text-primary-foreground text-xs px-3 py-1 h-auto">
            Liberar acesso completo<br />por <span className="font-bold">R$ 27,90</span>
          </Button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-border">
          <button className="flex-1 py-3 flex flex-col items-center gap-1 text-primary border-b-2 border-primary">
            <MessageSquare className="w-5 h-5" />
            <span className="text-xs">CONVERSAS</span>
          </button>
          <button className="flex-1 py-3 flex flex-col items-center gap-1 text-muted-foreground">
            <PhoneIcon className="w-5 h-5" />
            <span className="text-xs">LIGAÇÕES</span>
          </button>
          <button className="flex-1 py-3 flex flex-col items-center gap-1 text-muted-foreground">
            <Users className="w-5 h-5" />
            <span className="text-xs">CONTATOS</span>
          </button>
        </div>

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
          {contacts.map((contact) => (
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
            <Button className="bg-primary hover:bg-whatsapp-dark text-primary-foreground text-xs px-3 py-1 h-auto">
              Liberar acesso completo<br />por <span className="font-bold">R$ 27,90</span>
            </Button>
            <PhoneIcon className="w-5 h-5 text-muted-foreground" />
            <Video className="w-5 h-5 text-muted-foreground" />
            <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
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
