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
        { id: 'notifications', label: 'Notificações', icon: Bell, action: 'toggle', value: notifications, setValue: setNotifications },
        { 
          id: 'theme', 
          label: isDark ? 'Modo Claro' : 'Modo Escuro', 
          icon: isDark ? Sun : Moon, 
          action: 'theme-toggle',
          tooltip: 'Mude entre o modo escuro e claro para personalizar a sua experiência visual.'
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
                  className={`flex items-center justify-between p-4 transition-colors cursor-pointer group ${
                    itemIndex !== group.items.length - 1 
                      ? isDark 
                        ? 'border-b border-slate-800' 
                        : 'border-b border-slate-200'
                      : ''
                  } ${
                    isDark 
                      ? 'hover:bg-slate-800/50' 
                      : 'hover:bg-slate-100/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className={`w-5 h-5 transition-colors duration-300 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`} />
                    <span className={`font-medium transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>{item.label}</span>
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
                  
                  {item.action === 'theme-toggle' && (
                    <div className="relative group/tooltip">
                      <button
                        onClick={toggleTheme}
                        className={`relative flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                          isDark 
                            ? 'bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 border border-amber-500/30' 
                            : 'bg-slate-700/20 text-slate-700 hover:bg-slate-700/30 border border-slate-300'
                        }`}
                      >
                        {isDark ? (
                          <>
                            <Sun className="w-4 h-4" />
                            <span>Modo Claro</span>
                          </>
                        ) : (
                          <>
                            <Moon className="w-4 h-4" />
                            <span>Modo Escuro</span>
                          </>
                        )}
                      </button>
                      
                      {/* Tooltip */}
                      {item.tooltip && (
                        <div className="absolute right-0 top-full mt-2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                          <div className={`text-sm px-3 py-2 rounded-lg whitespace-nowrap max-w-xs ${
                            isDark 
                              ? 'bg-slate-800/95 text-white border border-slate-700' 
                              : 'bg-white/95 text-slate-900 border border-slate-200 shadow-lg'
                          }`}>
                            {item.tooltip}
                            <div className={`absolute bottom-full right-4 w-0 h-0 ${
                              isDark 
                                ? 'border-b-4 border-b-slate-800/95 border-l-4 border-l-transparent border-r-4 border-r-transparent' 
                                : 'border-b-4 border-b-white/95 border-l-4 border-l-transparent border-r-4 border-r-transparent'
                            }`}></div>
                          </div>
                        </div>
                      )}
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