
import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, User, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const DesignAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    { role: 'assistant', content: 'Hello! I am your Furniture TM AI Assistant. How can I help you design your space today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const genAI = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await genAI.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are a professional interior design assistant for the luxury brand 'Furniture TM'. 
                  Provide helpful, stylish, and concise advice about furniture, room layouts, and decor. 
                  User says: ${userMessage}`,
        config: {
          systemInstruction: "Expert, minimal, luxury-focused interior designer."
        }
      });

      const assistantContent = response.text || "I'm sorry, I couldn't process that. Please try again.";
      setMessages(prev => [...prev, { role: 'assistant', content: assistantContent }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I'm having trouble connecting. Make sure your API key is configured." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div></div>
    // <div className="fixed bottom-8 right-8 z-[100]">
    //   {!isOpen ? (
    //     <button 
    //       onClick={() => setIsOpen(true)}
    //       className="flex items-center space-x-3 bg-zinc-900 text-white p-5 rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
    //     >
    //       <Sparkles className="text-yellow-400" size={24} />
    //       <span className="font-bold pr-2">Design AI</span>
    //     </button>
    //   ) : (
    //     <div className="bg-white w-[350px] md:w-[400px] h-[550px] rounded-3xl shadow-2xl flex flex-col border border-zinc-200 overflow-hidden">
    //       {/* Header */}
    //       <div className="bg-zinc-950 text-white p-6 flex justify-between items-center">
    //         <div className="flex items-center space-x-2">
    //           <Sparkles size={20} className="text-yellow-400" />
    //           <h3 className="font-bold impact tracking-widest uppercase">Interior Assistant</h3>
    //         </div>
    //         <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform duration-300">
    //           <X size={24} />
    //         </button>
    //       </div>

    //       {/* Messages */}
    //       <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
    //         {messages.map((msg, i) => (
    //           <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
    //             <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
    //               msg.role === 'user' 
    //               ? 'bg-zinc-900 text-white rounded-br-none' 
    //               : 'bg-zinc-100 text-zinc-800 rounded-bl-none'
    //             }`}>
    //               <div className="flex items-center space-x-2 mb-1 opacity-50 text-[10px] uppercase font-bold">
    //                 {msg.role === 'user' ? <><User size={10} /> <span>You</span></> : <><Bot size={10} /> <span>Assistant</span></>}
    //               </div>
    //               {msg.content}
    //             </div>
    //           </div>
    //         ))}
    //         {isLoading && (
    //           <div className="flex justify-start">
    //             <div className="bg-zinc-100 p-4 rounded-2xl rounded-bl-none text-zinc-400">
    //               <Loader2 size={20} className="animate-spin" />
    //             </div>
    //           </div>
    //         )}
    //       </div>

    //       {/* Input */}
    //       <div className="p-4 border-t border-zinc-100">
    //         <div className="relative">
    //           <input 
    //             value={input}
    //             onChange={(e) => setInput(e.target.value)}
    //             onKeyDown={(e) => e.key === 'Enter' && handleSend()}
    //             placeholder="Ask about your living room..."
    //             className="w-full bg-zinc-50 border border-zinc-200 rounded-full py-4 pl-6 pr-12 text-sm focus:outline-none focus:border-zinc-900 transition-colors"
    //           />
    //           <button 
    //             onClick={handleSend}
    //             disabled={isLoading}
    //             className="absolute right-2 top-2 p-2 bg-zinc-900 text-white rounded-full hover:scale-110 active:scale-95 transition-all"
    //           >
    //             <Send size={18} />
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </div>
  );
};

export default DesignAssistant;
