'use client';

import React, { useState } from 'react';
import { CHEAT_SHEET_ITEMS } from '@/lib/cheatSheet';
import { BookOpen, Search, X, Copy, Check, Lightbulb, Sparkles } from 'lucide-react';

interface CheatSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectFormula?: (example: string) => void;
}

export const CheatSheetModal: React.FC<CheatSheetModalProps> = ({
  isOpen,
  onClose,
  onSelectFormula,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const categories = ['Semua', 'Aritmatika Dasar', 'Agregasi & Statistik', 'Olah Teks', 'Logika & Keputusan', 'Lookup & Referensi'];

  const filteredItems = CHEAT_SHEET_ITEMS.filter((item) => {
    const matchCat = selectedCategory === 'Semua' || item.category === selectedCategory;
    const matchQuery =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.syntax.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.useCase.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchQuery;
  });

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-[#107c41] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="bg-white/20 p-2 rounded-lg backdrop-blur-xs">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-base">Kamus Rumus Excel (Formula Cheat Sheet)</h2>
              <p className="text-xs text-emerald-100">Panduan lengkap sintaks, penjelasan, dan contoh kasus sehari-hari.</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-emerald-100 hover:text-white p-1.5 rounded-lg hover:bg-emerald-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 bg-gray-50 border-b border-gray-200 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari rumus (contoh: SUM, IF, VLOOKUP, Kali, Tambah)..."
              className="w-full pl-9 pr-4 py-2 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#107c41] bg-white text-gray-900 shadow-xs"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#107c41] text-white font-bold'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cards List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {filteredItems.length === 0 ? (
            <div className="text-center py-10 text-gray-500 text-xs">
              Tidak ada rumus yang cocok dengan kata kunci <strong>"{searchQuery}"</strong>.
            </div>
          ) : (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-emerald-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 mr-2">
                      {item.category}
                    </span>
                    <h3 className="font-bold text-sm text-gray-900 inline">{item.name}</h3>
                  </div>

                  <button
                    onClick={() => handleCopy(item.id, item.syntax)}
                    className="text-xs text-gray-500 hover:text-[#107c41] flex items-center gap-1 px-2 py-1 bg-gray-50 hover:bg-emerald-50 rounded border border-gray-200 transition-colors shrink-0"
                    title="Salin sintaks"
                  >
                    {copiedId === item.id ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-600 font-semibold text-[10px]">Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span className="text-[10px]">Salin</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs text-gray-600 mb-2.5 leading-relaxed">{item.description}</p>

                {/* Syntax & Example Box */}
                <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-lg font-mono text-xs text-slate-800 mb-2 flex flex-col gap-1">
                  <div className="text-[11px] text-gray-500 font-sans">Format Sintaks:</div>
                  <div className="font-bold text-[#107c41]">{item.syntax}</div>
                  <div className="text-[11px] text-gray-500 font-sans mt-1">Contoh Nyata:</div>
                  <div className="text-slate-700 bg-white px-2 py-1 rounded border border-slate-200">
                    {item.example}
                  </div>
                </div>

                {/* Practical Tips */}
                <div className="flex items-start gap-1.5 text-[11px] text-amber-900 bg-amber-50/70 p-2 rounded-lg border border-amber-200">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Tips: </strong>{item.tips}</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-3 border-t border-gray-200 flex justify-between items-center text-xs text-gray-500">
          <span>Menampilkan {filteredItems.length} rumus esensial</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded-lg transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
