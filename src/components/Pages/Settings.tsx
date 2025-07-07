import React, { useState } from 'react';
import { User, Bell, Moon, Sun, Shield, Info, LogOut, ChevronRight } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const Settings: React.FC = () => {
  const [notifications, setNotifications] = useState(true);
  const { theme, toggleTheme, isDark } = useTheme();

  const settingsGroups = [
    {
      title: 'Conta',
      items: [
        { id: 'profile', label: 'Perfil', icon: User, action: 'navigate' },
        { id: 'notifications', label: 'Notificações', icon: Bell, action: 'toggle', value: notifications, setValue: setNotifications }
      ]
    },
    {
      title: 'Aparência',
      items: [
        { 
          id: 'theme', 
          label: 'Tema do Aplicativo', 
          icon: isDark ? Moon : Sun, 
          action: 'theme-slider',
          description: 'Escolha entre modo escuro e claro'
        }
      ]
    },
    {
      title: 'Privacidade',
      items: [
        { id: 'privacy', label: 'Privacidade', icon: Shield, action: 'navigate' },
        { id: 'data', label: 'Dados e armazenamento', icon: Info, action: 'navigate' }
      ]
    },
    {
      title: 'Suporte',
      items: [
        { id: 'help', label: 'Central de ajuda', icon: Info, action: 'navigate' },
        { id: 'about', label: 'Sobre o app', icon: Info, action: 'navigate' }
      ]
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-slate-950' : 'bg-slate-50'
    }`}>
      {/* Header */}
      <header className={`px-6 py-8 transition-colors duration-300 ${
        isDark 
          ? 'bg-gradient-to-b from-slate-900/50 to-transparent' 
          : 'bg-gradient-to-b from-slate-100/50 to-transparent'
      }`}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-slate-900" />
          </div>
          <div>
            <h1 className={`text-xl font-bold transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>João Silva</h1>
            <p className={`transition-colors duration-300 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>joao.silva@email.com</p>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className={`backdrop-blur-sm rounded-xl p-4 text-center border transition-colors duration-300 ${
            isDark 
              ? 'bg-slate-900/50 border-slate-800' 
              : 'bg-white/50 border-slate-200'
          }`}>
            <div className={`text-2xl font-bold mb-1 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>5</div>
            <div className={`text-xs transition-colors duration-300 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>Dias ativos</div>
          </div>
          <div className={`backdrop-blur-sm rounded-xl p-4 text-center border transition-colors duration-300 ${
            isDark 
              ? 'bg-slate-900/50 border-slate-800' 
              : 'bg-white/50 border-slate-200'
          }`}>
            <div className={`text-2xl font-bold mb-1 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>12</div>
            <div className={`text-xs transition-colors duration-300 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>Aulas assistidas</div>
          </div>
          <div className={`backdrop-blur-sm rounded-xl p-4 text-center border transition-colors duration-300 ${
            isDark 
              ? 'bg-slate-900/50 border-slate-800' 
              : 'bg-white/50 border-slate-200'
          }`}>
            <div className={`text-2xl font-bold mb-1 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>80%</div>
            <div className={`text-xs transition-colors duration-300 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>Progresso</div>
          </div>
        </div>
      </header>

      {/* Settings Groups */}
      <div className="px-6 space-y-6">
        {settingsGroups.map((group, groupIndex) => (
          <div key={groupIndex}>
            <h2 className={`text-lg font-bold mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>{group.title}</h2>
            <div className={`backdrop-blur-sm rounded-2xl border overflow-hidden transition-colors duration-300 ${
              isDark 
                ? 'bg-slate-900/50 border-slate-800' 
                : 'bg-white/50 border-slate-200'
            }`}>
              {group.items.map((item, itemIndex) => (
                <div
                  key={item.id}
                  className={`flex items-center justify-between p-4 transition-colors ${
                    itemIndex !== group.items.length - 1 
                      ? isDark 
                        ? 'border-b border-slate-800' 
                        : 'border-b border-slate-200'
                      : ''
                  } ${
                    item.action !== 'theme-slider' 
                      ? isDark 
                        ? 'hover:bg-slate-800/50 cursor-pointer' 
                        : 'hover:bg-slate-100/50 cursor-pointer'
                      : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className={`w-5 h-5 transition-colors duration-300 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`} />
                    <div>
                      <span className={`font-medium transition-colors duration-300 block ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}>{item.label}</span>
                      {item.description && (
                        <span className={`text-sm transition-colors duration-300 ${
                          isDark ? 'text-slate-400' : 'text-slate-600'
                        }`}>{item.description}</span>
                      )}
                    </div>
                  </div>
                  
                  {item.action === 'toggle' && item.setValue && (
                    <button
                      onClick={() => item.setValue(!item.value)}
                      className={`relative w-12 h-6 rounded-full transition-colors ${
                        item.value ? 'bg-emerald-500' : isDark ? 'bg-slate-600' : 'bg-slate-300'
                      }`}
                    >
                      <div
                        className={`absolute w-4 h-4 bg-white rounded-full top-1 transition-transform ${
                          item.value ? 'translate-x-7' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  )}
                  
                  {item.action === 'theme-slider' && (
                    <div className="flex flex-col items-end gap-2">
                      {/* Theme Slider */}
                      <button
                        onClick={toggleTheme}
                        className={`relative w-20 h-10 rounded-full border-2 transition-all duration-300 overflow-hidden ${
                          isDark 
                            ? 'bg-slate-800 border-slate-700' 
                            : 'bg-slate-200 border-slate-300'
                        }`}
                        title="Mude entre o modo escuro e claro para personalizar a sua experiência visual."
                      >
                        {/* Background gradient */}
                        <div className="absolute inset-0 flex">
                          <div className="w-1/2 bg-slate-800 flex items-center justify-center">
                            <Moon className="w-4 h-4 text-slate-300" />
                          </div>
                          <div className="w-1/2 bg-slate-100 flex items-center justify-center">
                            <Sun className="w-4 h-4 text-slate-700" />
                          </div>
                        </div>
                        
                        {/* Sliding indicator */}
                        <div
                          className={`absolute top-1 w-8 h-8 bg-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center border ${
                            isDark 
                              ? 'translate-x-1 border-slate-600' 
                              : 'translate-x-11 border-slate-300'
                          }`}
                        >
                          {isDark ? (
                            <Moon className="w-4 h-4 text-slate-700" />
                          ) : (
                            <Sun className="w-4 h-4 text-amber-500" />
                          )}
                        </div>
                      </button>
                      
                      {/* Current mode label */}
                      <span className={`text-xs font-medium transition-colors duration-300 ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        {isDark ? 'Modo Escuro' : 'Modo Claro'}
                      </span>
                    </div>
                  )}
                  
                  {item.action === 'navigate' && (
                    <ChevronRight className={`w-5 h-5 transition-colors duration-300 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Sign Out */}
      <div className="px-6 py-8">
        <button className={`w-full border rounded-xl p-4 text-left transition-colors ${
          isDark 
            ? 'bg-red-500/20 border-red-500/30 hover:bg-red-500/30' 
            : 'bg-red-50 border-red-200 hover:bg-red-100'
        }`}>
          <div className="flex items-center gap-3">
            <LogOut className="w-5 h-5 text-red-400" />
            <span className="text-red-400 font-medium">Sair da conta</span>
          </div>
        </button>
      </div>

      {/* Version Info */}
      <div className="px-6 pb-8">
        <div className={`text-center text-sm transition-colors duration-300 ${
          isDark ? 'text-slate-500' : 'text-slate-400'
        }`}>
          <p>Sleep Protocol App</p>
          <p>Versão 1.0.0</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;