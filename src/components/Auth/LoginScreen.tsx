import React, { useState } from 'react';
import { Shield, Eye, EyeOff, Mail, Lock, AlertCircle } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

interface LoginScreenProps {
  onLogin: (email: string, password: string) => boolean;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { isDark } = useTheme();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simular um pequeno delay para melhor UX
    await new Promise(resolve => setTimeout(resolve, 800));

    const success = onLogin(email, password);
    
    if (!success) {
      setError('Credenciais incorretas. Tente novamente.');
    }
    
    setIsLoading(false);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError(''); // Limpar erro quando usuário começar a digitar
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (error) setError(''); // Limpar erro quando usuário começar a digitar
  };

  return (
    <div className={`min-h-screen flex items-center justify-center px-6 transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950' 
        : 'bg-gradient-to-br from-slate-50 via-slate-100 to-emerald-50'
    }`}>
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-emerald-400" />
            </div>
          </div>
          <h1 className={`text-3xl font-bold mb-2 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>Sleep Protocol</h1>
          <p className={`text-lg transition-colors duration-300 ${
            isDark ? 'text-slate-300' : 'text-slate-700'
          }`}>
            Acesse sua conta para continuar
          </p>
        </div>

        {/* Login Form */}
        <div className={`backdrop-blur-sm rounded-2xl p-8 border transition-colors duration-300 ${
          isDark 
            ? 'bg-slate-900/80 border-slate-800' 
            : 'bg-white/80 border-slate-200'
        }`}>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className={`w-5 h-5 transition-colors duration-300 ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`} />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-colors duration-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${
                    isDark 
                      ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-400' 
                      : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                  }`}
                  placeholder="Digite seu email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Senha
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className={`w-5 h-5 transition-colors duration-300 ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={handlePasswordChange}
                  className={`w-full pl-10 pr-12 py-3 rounded-xl border transition-colors duration-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${
                    isDark 
                      ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-400' 
                      : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                  }`}
                  placeholder="Digite sua senha"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute inset-y-0 right-0 pr-3 flex items-center transition-colors duration-300 ${
                    isDark ? 'text-slate-400 hover:text-slate-300' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/20 border border-red-500/30">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                <span className="text-red-400 text-sm">{error}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/50 text-slate-900 py-3 rounded-xl font-bold text-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin"></div>
                  Entrando...
                </>
              ) : (
                'Entrar'
              )}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className={`mt-6 p-4 rounded-xl border transition-colors duration-300 ${
            isDark 
              ? 'bg-slate-800/50 border-slate-700' 
              : 'bg-slate-100/50 border-slate-200'
          }`}>
            <h3 className={`text-sm font-medium mb-2 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>Credenciais de Acesso:</h3>
            <div className={`text-sm space-y-1 transition-colors duration-300 ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              <p><span className="font-medium">Email:</span> cliente713@sonomilitar.com</p>
              <p><span className="font-medium">Senha:</span> c713</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className={`text-sm transition-colors duration-300 ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Técnicas militares para dormir melhor
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;