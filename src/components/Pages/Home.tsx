import React from 'react';
import { Moon, Star, Shield } from 'lucide-react';
import Carousel from '../UI/Carousel';
import { modules } from '../../data/modules';
import { useTheme } from '../../hooks/useTheme';

interface HomeProps {
  onSelectModule: (moduleId: string, lessonIndex?: number) => void;
}

const Home: React.FC<HomeProps> = ({ onSelectModule }) => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950' 
        : 'bg-gradient-to-br from-slate-50 via-slate-100 to-emerald-50'
    }`}>
      {/* Header */}
      <header className="relative px-6 py-8 text-center">
        <div className={`absolute inset-0 transition-colors duration-300 ${
          isDark 
            ? 'bg-gradient-to-b from-emerald-900/20 to-transparent' 
            : 'bg-gradient-to-b from-emerald-100/50 to-transparent'
        }`} />
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-emerald-400" />
            <h1 className={`text-2xl font-bold transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>Sleep Protocol</h1>
          </div>
          <p className={`text-lg font-medium transition-colors duration-300 ${
            isDark ? 'text-slate-300' : 'text-slate-700'
          }`}>
            Desafio de 7 Dias para Criar uma
          </p>
          <p className="text-emerald-400 text-xl font-bold">
            Rotina de Sono Saudável
          </p>
        </div>
      </header>

      {/* Stats Section */}
      <section className="px-6 mb-8">
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          <div className={`backdrop-blur-sm rounded-xl p-4 text-center border transition-colors duration-300 ${
            isDark 
              ? 'bg-slate-900/50 border-slate-800' 
              : 'bg-white/50 border-slate-200'
          }`}>
            <Moon className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
            <div className={`text-2xl font-bold mb-1 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>7</div>
            <div className={`text-xs transition-colors duration-300 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>Dias</div>
          </div>
          <div className={`backdrop-blur-sm rounded-xl p-4 text-center border transition-colors duration-300 ${
            isDark 
              ? 'bg-slate-900/50 border-slate-800' 
              : 'bg-white/50 border-slate-200'
          }`}>
            <Star className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
            <div className={`text-2xl font-bold mb-1 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>15</div>
            <div className={`text-xs transition-colors duration-300 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>Aulas</div>
          </div>
          <div className={`backdrop-blur-sm rounded-xl p-4 text-center border transition-colors duration-300 ${
            isDark 
              ? 'bg-slate-900/50 border-slate-800' 
              : 'bg-white/50 border-slate-200'
          }`}>
            <Shield className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
            <div className={`text-2xl font-bold mb-1 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>2min</div>
            <div className={`text-xs transition-colors duration-300 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>Técnica</div>
          </div>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="px-6 mb-8">
        <div className={`rounded-2xl p-6 border max-w-md mx-auto transition-colors duration-300 ${
          isDark 
            ? 'bg-gradient-to-r from-emerald-900/30 to-slate-900/30 border-emerald-800/30' 
            : 'bg-gradient-to-r from-emerald-100/50 to-slate-100/50 border-emerald-200/50'
        }`}>
          <blockquote className="text-center">
            <p className={`font-medium mb-3 italic transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              "A técnica militar que ensina soldados a dormir em 2 minutos, mesmo em condições extremas."
            </p>
            <footer className="text-emerald-400 text-sm font-bold">
              — Protocolo das Forças Armadas
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Modules Carousel */}
      <section className="px-6 mb-8">
        <h2 className={`text-xl font-bold mb-6 text-center transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          Escolha seu Módulo
        </h2>
        <Carousel modules={modules} onSelectModule={(moduleId) => onSelectModule(moduleId)} />
      </section>

      {/* CTA Section */}
      <section className="px-6 mb-8">
        <div className={`border rounded-2xl p-6 text-center max-w-md mx-auto transition-colors duration-300 ${
          isDark 
            ? 'bg-emerald-500/10 border-emerald-500/30' 
            : 'bg-emerald-50 border-emerald-200'
        }`}>
          <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Comece sua Jornada Hoje
          </h3>
          <p className={`text-sm mb-4 transition-colors duration-300 ${
            isDark ? 'text-slate-300' : 'text-slate-700'
          }`}>
            Transforme suas noites e desperte com mais energia e disposição.
          </p>
          <div className="flex items-center justify-center gap-1 text-emerald-400 text-sm font-medium">
            <Star className="w-4 h-4" />
            <span>Método comprovado cientificamente</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;