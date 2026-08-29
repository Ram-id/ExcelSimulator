'use client';

import React, { useRef, useCallback } from 'react';
import { ExamResult, ExamData } from '@/types/simulator';
import { Download, X, Trophy, Award } from 'lucide-react';

interface CertificateProps {
  examResult: ExamResult;
  exam: ExamData;
  displayName: string;
  username: string;
  onClose: () => void;
}

export const Certificate: React.FC<CertificateProps> = ({
  examResult,
  exam,
  displayName,
  username,
  onClose,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const isFinal = exam.chapterId === 0;
  const certId = `EXSIM-${new Date(examResult.completedAt).getFullYear()}-${username.toUpperCase().slice(0, 4)}-${isFinal ? 'F' : `B${exam.chapterId}`}${examResult.percentage}`;
  const dateStr = new Date(examResult.completedAt).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const drawCertificate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = 1200;
    const h = 850;
    canvas.width = w;
    canvas.height = h;

    // Background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, w, h);

    // Outer border
    ctx.strokeStyle = isFinal ? '#d4a017' : '#107c41';
    ctx.lineWidth = 8;
    ctx.strokeRect(20, 20, w - 40, h - 40);

    // Inner border
    ctx.strokeStyle = isFinal ? '#f0d060' : '#34d399';
    ctx.lineWidth = 2;
    ctx.strokeRect(35, 35, w - 70, h - 70);

    // Corner decorations
    const corners = [[50, 50], [w - 50, 50], [50, h - 50], [w - 50, h - 50]];
    corners.forEach(([cx, cy]) => {
      ctx.fillStyle = isFinal ? '#d4a017' : '#107c41';
      ctx.beginPath();
      ctx.arc(cx, cy, 8, 0, Math.PI * 2);
      ctx.fill();
    });

    // Top accent line
    const accentColor = isFinal ? '#d4a017' : '#107c41';
    ctx.fillStyle = accentColor;
    ctx.fillRect(100, 60, w - 200, 4);
    ctx.fillRect(100, h - 64, w - 200, 4);

    // Title icon area
    ctx.fillStyle = accentColor;
    ctx.font = '40px serif';
    ctx.textAlign = 'center';
    ctx.fillText(isFinal ? '🏆' : '📊', w / 2, 120);

    // "SERTIFIKAT" title
    ctx.fillStyle = accentColor;
    ctx.font = 'bold 42px Arial, Helvetica, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('SERTIFIKAT KELULUSAN', w / 2, 175);

    // Subtitle
    ctx.fillStyle = '#6b7280';
    ctx.font = '18px Arial, Helvetica, sans-serif';
    ctx.fillText('ExcelSimulator — Platform Belajar Rumus Excel Interaktif', w / 2, 210);

    // Divider
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(200, 235);
    ctx.lineTo(w - 200, 235);
    ctx.stroke();

    // "Diberikan kepada:"
    ctx.fillStyle = '#6b7280';
    ctx.font = '16px Arial, Helvetica, sans-serif';
    ctx.fillText('Diberikan kepada:', w / 2, 280);

    // Name
    ctx.fillStyle = '#111827';
    ctx.font = 'bold 38px Georgia, serif';
    ctx.fillText(displayName.toUpperCase(), w / 2, 335);

    // Underline under name
    const nameWidth = ctx.measureText(displayName.toUpperCase()).width;
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo((w - nameWidth) / 2 - 20, 345);
    ctx.lineTo((w + nameWidth) / 2 + 20, 345);
    ctx.stroke();

    // Description
    ctx.fillStyle = '#374151';
    ctx.font = '16px Arial, Helvetica, sans-serif';
    if (isFinal) {
      ctx.fillText('Telah menyelesaikan seluruh program pembelajaran rumus Microsoft Excel', w / 2, 395);
      ctx.fillText('dan lulus Ujian Akhir Komprehensif ExcelSimulator', w / 2, 420);
    } else {
      ctx.fillText(`Telah menyelesaikan dan lulus ujian`, w / 2, 395);
      ctx.font = 'bold 18px Arial, Helvetica, sans-serif';
      ctx.fillStyle = accentColor;
      ctx.fillText(exam.title, w / 2, 425);
    }

    // Score section
    const scoreY = isFinal ? 480 : 470;
    ctx.fillStyle = '#f3f4f6';
    ctx.beginPath();
    ctx.roundRect(w / 2 - 250, scoreY - 10, 500, 60, 10);
    ctx.fill();

    ctx.fillStyle = '#111827';
    ctx.font = 'bold 22px Arial, Helvetica, sans-serif';
    ctx.fillText(`Skor: ${examResult.percentage}%`, w / 2 - 100, scoreY + 30);

    ctx.fillStyle = accentColor;
    ctx.font = 'bold 22px Arial, Helvetica, sans-serif';
    ctx.fillText(`Predikat: ${examResult.predikat}`, w / 2 + 100, scoreY + 30);

    // Module & exam info
    if (isFinal) {
      ctx.fillStyle = '#6b7280';
      ctx.font = '14px Arial, Helvetica, sans-serif';
      ctx.fillText('40 Modul Pembelajaran • 7 Ujian • 6 Bab Kompetensi', w / 2, scoreY + 80);
    }

    // Date
    const dateY = isFinal ? scoreY + 120 : scoreY + 100;
    ctx.fillStyle = '#6b7280';
    ctx.font = '14px Arial, Helvetica, sans-serif';
    ctx.fillText(`Diterbitkan pada: ${dateStr}`, w / 2, dateY);

    // Certificate ID
    ctx.fillStyle = '#9ca3af';
    ctx.font = '12px monospace';
    ctx.fillText(`ID Sertifikat: ${certId}`, w / 2, dateY + 30);

    // Bottom decorative line
    ctx.fillStyle = accentColor;
    ctx.fillRect(200, h - 100, w - 400, 3);

    // Footer
    ctx.fillStyle = '#9ca3af';
    ctx.font = '11px Arial, Helvetica, sans-serif';
    ctx.fillText('ExcelSimulator © 2026 • Sertifikat ini dihasilkan secara otomatis oleh sistem', w / 2, h - 70);
  }, [examResult, exam, displayName, username, isFinal, certId, dateStr]);

  // Draw on mount
  React.useEffect(() => {
    drawCertificate();
  }, [drawCertificate]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = `Sertifikat_${exam.title.replace(/\s+/g, '_')}_${displayName.replace(/\s+/g, '_')}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h3 className="font-bold text-sm text-gray-900 flex items-center gap-2">
            {isFinal ? <Trophy className="w-5 h-5 text-amber-500" /> : <Award className="w-5 h-5 text-[#107c41]" />}
            <span>Sertifikat — {exam.title}</span>
          </h3>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-4 py-2 bg-[#107c41] hover:bg-[#0b5c2f] text-white font-bold text-xs rounded-xl shadow-sm transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PNG</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Canvas Preview */}
        <div className="p-6 flex justify-center bg-gray-100">
          <canvas
            ref={canvasRef}
            className="max-w-full h-auto shadow-lg rounded-lg border border-gray-300"
            style={{ maxHeight: '70vh' }}
          />
        </div>
      </div>
    </div>
  );
};
