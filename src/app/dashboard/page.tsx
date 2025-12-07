'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Home, 
  Scan, 
  Calendar, 
  BookOpen, 
  MessageSquare,
  Camera,
  TrendingUp,
  Sparkles,
  Target,
  Award,
  Zap
} from 'lucide-react';

export default function DashboardPage() {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [activeTab, setActiveTab] = useState('inicio');

  useEffect(() => {
    // Carregar dados do usuário
    const userData = localStorage.getItem('aureum_user');
    if (userData) {
      const user = JSON.parse(userData);
      setUserName(user.nome.split(' ')[0]);
    } else {
      router.push('/cadastro');
    }
  }, [router]);

  const modules = [
    {
      id: 'analise',
      title: 'Análise Facial por IA',
      description: 'Descubra seus pontos fortes e áreas de melhoria com precisão cirúrgica.',
      icon: Scan,
      color: 'from-yellow-600 to-yellow-500',
      action: 'Iniciar Análise'
    },
    {
      id: 'biblioteca',
      title: 'Biblioteca de Transformação',
      description: 'Conteúdos organizados por categorias: rosto, corpo, estilo e energia estética.',
      icon: BookOpen,
      color: 'from-yellow-500 to-amber-500',
      action: 'Explorar Conteúdos'
    },
    {
      id: 'plano30',
      title: 'Plano 30 Dias',
      description: 'Pipeline diário com checklists. 30 dias para a melhor versão possível de você.',
      icon: Calendar,
      color: 'from-amber-500 to-orange-500',
      action: 'Começar Transformação'
    },
    {
      id: 'chat',
      title: 'Chat Estético (IA)',
      description: 'Consultor estético 24h. Tire dúvidas sobre cortes, skincare, postura e mais.',
      icon: MessageSquare,
      color: 'from-orange-500 to-yellow-600',
      action: 'Abrir Chat'
    }
  ];

  const stats = [
    { label: 'Nível Atual', value: 'Em Renovação', icon: TrendingUp },
    { label: 'Dias Ativos', value: '1', icon: Calendar },
    { label: 'Conquistas', value: '0/8', icon: Award },
    { label: 'Progresso', value: '5%', icon: Zap }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-900 bg-zinc-950/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-yellow-500" />
              <h1 className="text-2xl md:text-3xl font-bold">AUREUM</h1>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">Bem-vindo de volta,</p>
              <p className="text-lg font-bold text-yellow-500">{userName}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Mensagem Motivacional */}
      <div className="bg-gradient-to-r from-yellow-600/10 to-yellow-500/10 border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="text-center text-lg md:text-xl font-bold text-white">
            "Perfil criado. Agora começa sua ascensão."
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 hover:border-yellow-500/50 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <stat.icon className="w-5 h-5 text-yellow-500" />
                <p className="text-xs text-gray-400">{stat.label}</p>
              </div>
              <p className="text-xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Módulos Principais */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Seus Módulos de Transformação</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module) => (
              <div
                key={module.id}
                className="group bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`bg-gradient-to-br ${module.color} p-3 rounded-lg`}>
                    <module.icon className="w-6 h-6 text-black" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{module.title}</h3>
                    <p className="text-gray-400 text-sm">{module.description}</p>
                  </div>
                </div>
                <button className="w-full bg-zinc-800 hover:bg-yellow-500 text-white hover:text-black px-4 py-3 rounded-lg font-semibold transition-all duration-300 group-hover:scale-105">
                  {module.action}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recursos Adicionais */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-yellow-500/50 transition-colors cursor-pointer">
            <Camera className="w-8 h-8 text-yellow-500 mb-3" />
            <h3 className="text-lg font-bold mb-2">Simulações AR</h3>
            <p className="text-gray-400 text-sm mb-4">Teste cortes, barba, óculos e estilos visuais.</p>
            <button className="text-yellow-500 font-semibold hover:underline">Experimentar →</button>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-yellow-500/50 transition-colors cursor-pointer">
            <Target className="w-8 h-8 text-yellow-500 mb-3" />
            <h3 className="text-lg font-bold mb-2">Scanner de Guarda-Roupa</h3>
            <p className="text-gray-400 text-sm mb-4">Otimize suas roupas e receba sugestões de looks.</p>
            <button className="text-yellow-500 font-semibold hover:underline">Escanear →</button>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-yellow-500/50 transition-colors cursor-pointer">
            <TrendingUp className="w-8 h-8 text-yellow-500 mb-3" />
            <h3 className="text-lg font-bold mb-2">Relatórios Semanais</h3>
            <p className="text-gray-400 text-sm mb-4">Acompanhe sua evolução com gráficos e insights.</p>
            <button className="text-yellow-500 font-semibold hover:underline">Ver Progresso →</button>
          </div>
        </div>

        {/* Promessas Motivacionais */}
        <div className="bg-gradient-to-r from-yellow-600/5 to-yellow-500/5 border border-yellow-500/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Você vai se transformar.</h3>
          <div className="space-y-2 text-gray-300">
            <p>"Resultados visíveis em semanas."</p>
            <p>"A estética é sua nova vantagem."</p>
            <p className="text-yellow-500 font-bold">"Você não é feio. Você é mal otimizado."</p>
            <p>"A disciplina vence qualquer genética."</p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-zinc-950 border-t border-zinc-900 md:hidden">
        <div className="flex justify-around py-3">
          {[
            { id: 'inicio', icon: Home, label: 'Início' },
            { id: 'analise', icon: Scan, label: 'Análise' },
            { id: 'transformacao', icon: Calendar, label: '30 Dias' },
            { id: 'biblioteca', icon: BookOpen, label: 'Biblioteca' },
            { id: 'chat', icon: MessageSquare, label: 'Chat IA' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                activeTab === tab.id ? 'text-yellow-500' : 'text-gray-400'
              }`}
            >
              <tab.icon className="w-6 h-6" />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed bottom-8 left-1/2 -translate-x-1/2 bg-zinc-900 border border-zinc-800 rounded-full px-6 py-3 shadow-2xl">
        <div className="flex gap-6">
          {[
            { id: 'inicio', icon: Home, label: 'Início' },
            { id: 'analise', icon: Scan, label: 'Análise' },
            { id: 'transformacao', icon: Calendar, label: 'Transformação 30d' },
            { id: 'biblioteca', icon: BookOpen, label: 'Biblioteca' },
            { id: 'chat', icon: MessageSquare, label: 'Chat IA' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                activeTab === tab.id 
                  ? 'bg-yellow-500 text-black' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Padding bottom para navegação mobile */}
      <div className="h-24 md:h-32" />
    </main>
  );
}
