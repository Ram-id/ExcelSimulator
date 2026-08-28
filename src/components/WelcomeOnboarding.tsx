'use client';

import React, { useState } from 'react';
import { Table, ArrowRight, Keyboard, BookOpen, Sparkles } from 'lucide-react';

interface WelcomeOnboardingProps {
  onComplete: () => void;
}

const STEPS = [
  {
    icon: <Table className="w-12 h-12 text-[#107c41]" />,
    title: 'Selamat Datang di ExcelSimulator! 🎉',
    description:
      'Platform interaktif untuk belajar rumus Microsoft Excel dari nol. Tidak perlu install Excel — cukup gunakan browser kamu.',
    tip: 'Dibuat khusus untuk pemula yang ingin menguasai Excel untuk sekolah, kuliah, dan dunia kerja.',
  },
  {
    icon: <Keyboard className="w-12 h-12 text-blue-600" />,
    title: 'Cara Menggunakan ✍️',
    description:
      'Klik sel di tabel → Langsung ketik rumus → Tekan Enter. Semudah itu! Persis seperti mengetik di Microsoft Excel asli.',
    tip: 'Kamu juga bisa klik sel lain saat mengetik rumus untuk memasukkan referensi sel secara otomatis.',
  },
  {
    icon: <BookOpen className="w-12 h-12 text-purple-600" />,
    title: '40 Modul Terstruktur 📚',
    description:
      'Mulai dari penjumlahan sederhana (+) hingga analisis bisnis (VLOOKUP, PMT). Setiap modul memiliki studi kasus nyata dari kehidupan sehari-hari dan dunia kerja.',
    tip: '6 Bab: Aritmatika → Statistik → Teks → Logika → Lookup → Bisnis & Finansial.',
  },
  {
    icon: <Sparkles className="w-12 h-12 text-amber-500" />,
    title: 'Mode Bebas (Sandbox) ⚡',
    description:
      'Selain belajar terstruktur, kamu bisa bereksplorasi bebas di Mode Sandbox. Ketik rumus apa saja di sel mana saja tanpa batasan soal.',
    tip: 'Tersedia template siap pakai: Catatan Keuangan, Daftar Nilai, Kasir Toko.',
  },
];

export const WelcomeOnboarding: React.FC<WelcomeOnboardingProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const step = STEPS[currentStep];
  const isLast = currentStep === STEPS.length - 1;

  const handleNext = () => {
    if (isLast) {
      onComplete();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-fade-in">
        {/* Step indicator dots */}
        <div className="flex justify-center gap-2 pt-6 pb-2">
          {STEPS.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentStep ? 'w-8 bg-[#107c41]' : idx < currentStep ? 'w-4 bg-emerald-300' : 'w-4 bg-gray-200'
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="px-8 py-6 text-center space-y-4">
          <div className="flex justify-center">{step.icon}</div>

          <h2 className="text-xl font-bold text-gray-900">{step.title}</h2>

          <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-2.5 text-xs text-emerald-800 font-medium">
            💡 {step.tip}
          </div>
        </div>

        {/* Actions */}
        <div className="px-8 pb-6 flex items-center justify-between gap-3">
          <button
            onClick={handleSkip}
            className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
          >
            Lewati
          </button>

          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-2.5 bg-[#107c41] hover:bg-[#0b5c2f] text-white font-bold text-sm rounded-xl shadow-sm transition-all active:scale-[0.98]"
          >
            <span>{isLast ? '🚀 Mulai Belajar!' : 'Lanjut'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
