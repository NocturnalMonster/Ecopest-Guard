import React, { useState } from 'react';
import { 
  X, 
  Send, 
  ShieldCheck, 
  PhoneCall, 
  MessageSquare, 
  Bot, 
  User, 
  Clock,
  Sparkles
} from 'lucide-react';

interface LiveChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChatMessage {
  id: string;
  sender: 'expert' | 'user';
  text: string;
  timestamp: string;
}

export const LiveChatModal: React.FC<LiveChatModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm-1',
      sender: 'expert',
      text: 'আসসালামু আলাইকুম! আমি ড. রহমান, UltraShield Chemical Safety Team থেকে বলছি। আপনার বাসার তেলাপোকা বা ক্ষতিকর পোকা দমনে কোনো প্রশ্ন থাকলে জানাতে পারেন।',
      timestamp: 'Just now'
    }
  ]);
  const [inputText, setInputText] = useState('');

  const quickPrompts = [
    'বিড়াল বা কুকুরের জন্য কি এটা নিরাপদ?',
    'ক্যাশ অন ডেলিভারিতে কিভাবে অর্ডার করবো?',
    'তেলাপোকা নির্মূলে কতদিন সময় লাগবে?'
  ];

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      timestamp: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');

    setTimeout(() => {
      let reply = 'UltraShield ফর্মুলা ভেষজ উপাদানে তৈরি। এটি শুকিয়ে যাওয়ার পর শিশু ও পোষা প্রাণীদের জন্য ১০০% নিরাপদ। আমাদের কোনো ক্ষতিকর রাসায়নিক বা দুর্গন্ধ নেই।';
      
      const lower = text.toLowerCase();
      if (lower.includes('ক্যাশ') || lower.includes('cod') || lower.includes('order')) {
        reply = 'আমরা পুরো বাংলাদেশে ক্যাশ অন ডেলিভারি (COD) দিচ্ছি। কোনো অগ্রিম পেমেন্ট নেই। পণ্য হাতে পেয়ে বোতলের সিল চেক করে রাইডারকে টাকা পরিশোধ করবেন।';
      } else if (lower.includes('তেলাপোকা') || lower.includes('সময়') || lower.includes('roach')) {
        reply = 'স্প্রে করার ২৪ থেকে ৪৮ ঘণ্টার মধ্যে তেলাপোকার কলোনি ধ্বংস হতে শুরু করে। এবং এর ৯০ দিনের বায়ো-ব্যারিয়ার ডিম ফুটে নতুন বাচ্চা বের হওয়া সম্পূর্ণ বন্ধ করে দেয়।';
      }

      const expertMsg: ChatMessage = {
        id: `expert-${Date.now()}`,
        sender: 'expert',
        text: reply,
        timestamp: 'Just now'
      };
      setMessages(prev => [...prev, expertMsg]);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full h-[580px] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#00271B] p-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-emerald-700/60 border border-emerald-400 flex items-center justify-center font-black">
                <ShieldCheck className="w-5 h-5 text-[#6CF8BB]" />
              </div>
              <span className="w-3 h-3 bg-[#10B981] rounded-full border-2 border-[#00271B] absolute bottom-0 right-0" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold">UltraShield Safety Desk</h3>
                <span className="bg-emerald-500/20 text-[#6CF8BB] text-[10px] font-bold px-1.5 py-0.2 rounded">
                  ONLINE
                </span>
              </div>
              <p className="text-[11px] text-emerald-200">Registered Entomologist & Bio-Safety Specialist</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-emerald-300 hover:text-white rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message History */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl p-3.5 text-xs leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-[#006C49] text-white rounded-tr-none'
                    : 'bg-white text-slate-800 border border-slate-200 shadow-2xs rounded-tl-none'
                }`}
              >
                <p>{msg.text}</p>
                <span
                  className={`block text-[9px] mt-1 ${
                    msg.sender === 'user' ? 'text-emerald-200 text-right' : 'text-slate-400'
                  }`}
                >
                  {msg.timestamp}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Prompts */}
        <div className="p-2.5 bg-white border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto">
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(prompt)}
              className="text-[11px] font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full whitespace-nowrap shrink-0 transition-colors cursor-pointer"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
          <input
            type="text"
            placeholder="আপনার প্রশ্ন বাংলায় অথবা ইংরেজিতে লিখুন..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs focus:outline-hidden focus:bg-white focus:ring-2 focus:ring-[#006C49]"
          />
          <button
            onClick={() => handleSendMessage()}
            className="w-9 h-9 rounded-xl bg-[#00271B] text-white flex items-center justify-center hover:bg-[#004732] transition-colors cursor-pointer shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
