'use client';

import React, { useState } from 'react';
import { registerUser, loginUser } from '@/lib/auth';
import { UserSession } from '@/types/simulator';
import { Table, LogIn, UserPlus, Eye, EyeOff, Loader2 } from 'lucide-react';

interface AuthScreenProps {
  onAuthSuccess: (session: UserSession) => void;
}

export const AuthScreen: React.FC<AuthScreenProps> = ({ onAuthSuccess }) => {
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const [username, setUsername] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await loginUser(username, password);
    setLoading(false);

    if (result.success && result.session) {
      onAuthSuccess(result.session);
    } else {
      setError(result.error || 'Login gagal.');
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await registerUser(username, displayName, password);
    setLoading(false);

    if (result.success) {
      onAuthSuccess({ username: username.trim().toLowerCase(), displayName: displayName.trim() });
    } else {
      setError(result.error || 'Registrasi gagal.');
    }
  };

  const switchTab = (newTab: 'login' | 'register') => {
    setTab(newTab);
    setError('');
    setUsername('');
    setDisplayName('');
    setPassword('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Logo & Title */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#107c41] rounded-2xl shadow-lg mb-3">
            <Table className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">ExcelSimulator</h1>
          <p className="text-sm text-gray-500 mt-1">Platform Belajar Rumus Excel Interaktif</p>
        </div>

        {/* Auth Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Tab Switcher */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => switchTab('login')}
              className={`flex-1 py-3 text-sm font-semibold text-center transition-all flex items-center justify-center gap-1.5 ${
                tab === 'login'
                  ? 'text-[#107c41] border-b-2 border-[#107c41] bg-emerald-50/50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <LogIn className="w-4 h-4" />
              <span>Masuk</span>
            </button>
            <button
              onClick={() => switchTab('register')}
              className={`flex-1 py-3 text-sm font-semibold text-center transition-all flex items-center justify-center gap-1.5 ${
                tab === 'register'
                  ? 'text-[#107c41] border-b-2 border-[#107c41] bg-emerald-50/50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <UserPlus className="w-4 h-4" />
              <span>Daftar Baru</span>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={tab === 'login' ? handleLogin : handleRegister} className="p-6 space-y-4">
            {/* Username */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="contoh: budi_santoso"
                className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#107c41] focus:border-transparent bg-gray-50 text-gray-900"
                required
                autoComplete="username"
              />
            </div>

            {/* Display Name (register only) */}
            {tab === 'register' && (
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Nama Lengkap</label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="contoh: Budi Santoso"
                  className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#107c41] focus:border-transparent bg-gray-50 text-gray-900"
                  required
                  autoComplete="name"
                />
              </div>
            )}

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimal 4 karakter"
                  className="w-full px-3 py-2.5 pr-10 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#107c41] focus:border-transparent bg-gray-50 text-gray-900"
                  required
                  minLength={4}
                  autoComplete={tab === 'login' ? 'current-password' : 'new-password'}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium px-3 py-2 rounded-xl">
                ❌ {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 bg-[#107c41] hover:bg-[#0b5c2f] disabled:opacity-60 text-white font-bold text-sm rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : tab === 'login' ? (
                <>
                  <LogIn className="w-4 h-4" />
                  <span>Masuk</span>
                </>
              ) : (
                <>
                  <UserPlus className="w-4 h-4" />
                  <span>Daftar & Mulai Belajar</span>
                </>
              )}
            </button>
          </form>

          {/* Footer hint */}
          <div className="px-6 pb-4 text-center text-[11px] text-gray-400">
            {tab === 'login'
              ? 'Belum punya akun? Klik tab "Daftar Baru" di atas.'
              : 'Sudah punya akun? Klik tab "Masuk" di atas.'}
          </div>
        </div>

        <p className="text-center text-[11px] text-gray-400 mt-4">
          Data akun tersimpan di browser ini. Gratis, tanpa email.
        </p>
      </div>
    </div>
  );
};
