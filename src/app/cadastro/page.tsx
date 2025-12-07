'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, Mail, Phone, Target, Lock, Upload, ArrowLeft } from 'lucide-react';

export default function CadastroPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    genero: '',
    email: '',
    telefone: '',
    objetivo: '',
    satisfacao: '5',
    senha: '',
    confirmarSenha: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (formData.senha !== formData.confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    // Simular salvamento (aqui você integraria com backend/Supabase)
    localStorage.setItem('aureum_user', JSON.stringify(formData));
    
    // Redirecionar para dashboard
    router.push('/dashboard');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar
        </button>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Construa Seu Perfil Estético
          </h1>
          <p className="text-gray-400 text-lg">
            Isso ajuda o AUREUM a montar sua transformação personalizada.
          </p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nome Completo */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-yellow-500 font-semibold">
              <User className="w-5 h-5" />
              Nome Completo *
            </label>
            <input
              type="text"
              name="nome"
              required
              value={formData.nome}
              onChange={handleChange}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:outline-none transition-colors"
              placeholder="Seu nome completo"
            />
          </div>

          {/* Idade e Gênero */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-yellow-500 font-semibold">Idade *</label>
              <input
                type="number"
                name="idade"
                required
                min="13"
                max="120"
                value={formData.idade}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:outline-none transition-colors"
                placeholder="Sua idade"
              />
            </div>

            <div className="space-y-2">
              <label className="text-yellow-500 font-semibold">Gênero *</label>
              <select
                name="genero"
                required
                value={formData.genero}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:outline-none transition-colors"
              >
                <option value="">Selecione</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
              </select>
            </div>
          </div>

          {/* Email e Telefone */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-yellow-500 font-semibold">
                <Mail className="w-5 h-5" />
                E-mail *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:outline-none transition-colors"
                placeholder="seu@email.com"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-yellow-500 font-semibold">
                <Phone className="w-5 h-5" />
                Telefone (WhatsApp) *
              </label>
              <input
                type="tel"
                name="telefone"
                required
                value={formData.telefone}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:outline-none transition-colors"
                placeholder="(00) 00000-0000"
              />
            </div>
          </div>

          {/* Objetivo Principal */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-yellow-500 font-semibold">
              <Target className="w-5 h-5" />
              Objetivo Principal *
            </label>
            <select
              name="objetivo"
              required
              value={formData.objetivo}
              onChange={handleChange}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:outline-none transition-colors"
            >
              <option value="">Selecione seu objetivo</option>
              <option value="melhorar-rosto">Melhorar rosto</option>
              <option value="melhorar-estilo">Melhorar estilo</option>
              <option value="aparencia-geral">Melhorar aparência geral</option>
              <option value="transformacao-completa">Transformação completa</option>
            </select>
          </div>

          {/* Nível de Satisfação */}
          <div className="space-y-2">
            <label className="text-yellow-500 font-semibold">
              Nível atual de satisfação com a aparência: {formData.satisfacao}/10
            </label>
            <input
              type="range"
              name="satisfacao"
              min="0"
              max="10"
              value={formData.satisfacao}
              onChange={handleChange}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-yellow-500"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>0 - Muito insatisfeito</span>
              <span>10 - Muito satisfeito</span>
            </div>
          </div>

          {/* Foto Opcional */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-yellow-500 font-semibold">
              <Upload className="w-5 h-5" />
              Foto de Perfil (Opcional)
            </label>
            <div className="border-2 border-dashed border-zinc-800 rounded-lg p-8 text-center hover:border-yellow-500 transition-colors cursor-pointer">
              <Upload className="w-12 h-12 text-gray-600 mx-auto mb-3" />
              <p className="text-gray-400">Clique para fazer upload</p>
              <p className="text-xs text-gray-600 mt-1">PNG, JPG até 5MB</p>
            </div>
          </div>

          {/* Senha */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-yellow-500 font-semibold">
                <Lock className="w-5 h-5" />
                Criar Senha *
              </label>
              <input
                type="password"
                name="senha"
                required
                minLength={6}
                value={formData.senha}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:outline-none transition-colors"
                placeholder="Mínimo 6 caracteres"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-yellow-500 font-semibold">
                <Lock className="w-5 h-5" />
                Confirmar Senha *
              </label>
              <input
                type="password"
                name="confirmarSenha"
                required
                minLength={6}
                value={formData.confirmarSenha}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:outline-none transition-colors"
                placeholder="Repita a senha"
              />
            </div>
          </div>

          {/* Botão Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-8 py-4 rounded-lg text-xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/50 mt-8"
          >
            CRIAR MEU PERFIL
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-8">
          Ao criar sua conta, você concorda com nossos termos de uso.
        </p>
      </div>
    </main>
  );
}
