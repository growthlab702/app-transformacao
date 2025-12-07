'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles } from 'lucide-react';

export default function Home() {
  const router = useRouter();
  const [currentPhrase, setCurrentPhrase] = useState(0);

  const phrases = [
    "Transforme sua aparência REAL em poucas semanas.",
    "A beleza é uma habilidade — e você vai aprender.",
    "Não é genética, é estratégia.",
    "Você vai se olhar no espelho e se reconhecer — só que muito melhor.",
    "Sua evolução começa agora."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/5 via-transparent to-yellow-600/5" />
      
      <div className="relative z-10 max-w-4xl w-full text-center space-y-12">
        {/* Logo/Título */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-10 h-10 text-yellow-500" />
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight">
              AUREUM
            </h1>
            <Sparkles className="w-10 h-10 text-yellow-500" />
          </div>
          <p className="text-yellow-500 text-xl md:text-2xl font-semibold tracking-wide">
            Transformação Estética
          </p>
        </div>

        {/* Frases alternando */}
        <div className="min-h-[180px] md:min-h-[120px] flex items-center justify-center">
          <p 
            key={currentPhrase}
            className="text-2xl md:text-4xl font-bold text-white leading-tight animate-fade-in px-4"
          >
            {phrases[currentPhrase]}
          </p>
        </div>

        {/* Manifesto */}
        <div className="space-y-4 py-8 border-t border-b border-yellow-500/20">
          <p className="text-lg md:text-xl text-gray-300 font-medium">
            "A beleza é treinável."
          </p>
          <p className="text-lg md:text-xl text-gray-300 font-medium">
            "Você não nasceu pronto — você se constrói."
          </p>
          <p className="text-lg md:text-xl text-gray-300 font-medium">
            "Não é genética, é estratégia."
          </p>
        </div>

        {/* CTA Principal */}
        <button
          onClick={() => router.push('/cadastro')}
          className="group relative bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-12 py-6 rounded-lg text-xl md:text-2xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/50"
        >
          <span className="relative z-10">INICIAR EVOLUÇÃO</span>
          <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>

        {/* Promessa final */}
        <p className="text-gray-400 text-sm md:text-base italic">
          De mediano para estético. De estético para nobre.
        </p>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </main>
  );
}
