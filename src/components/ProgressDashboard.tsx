'use client';

import React from 'react';
import { CHAPTERS, MODULES } from '@/lib/curriculum';
import { SkillDimension, getUserLevel, getLevelEmoji } from '@/types/simulator';
import {
  Trophy,
  Target,
  CheckCircle2,
  Circle,
  TrendingUp,
  Award,
  Calculator,
  BarChart3,
  Type,
  Brain,
  Search,
  Briefcase,
} from 'lucide-react';

interface ProgressDashboardProps {
  completedModuleIds: number[];
}

const CHAPTER_ICONS = [Calculator, BarChart3, Type, Brain, Search, Briefcase];
const CHAPTER_COLORS = ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#ef4444', '#06b6d4'];

export const ProgressDashboard: React.FC<ProgressDashboardProps> = ({ completedModuleIds }) => {
  const totalModules = MODULES.length;
  const completedCount = completedModuleIds.length;
  const level = getUserLevel(completedCount, totalModules);
  const levelEmoji = getLevelEmoji(level);
  const percentage = Math.round((completedCount / totalModules) * 100);

  // Compute per-chapter stats
  const dimensions: SkillDimension[] = CHAPTERS.map((ch) => {
    const chapterModules = MODULES.filter((m) => m.chapterId === ch.id);
    const doneCount = chapterModules.filter((m) => completedModuleIds.includes(m.id)).length;
    return {
      label: ch.title.replace(/^Bab \d+:\s*/, ''),
      chapterId: ch.id,
      completedCount: doneCount,
      totalCount: chapterModules.length,
      percentage: chapterModules.length > 0 ? Math.round((doneCount / chapterModules.length) * 100) : 0,
    };
  });

  // Collect all unique skills learned from completed modules
  const allSkillsLearned = new Set<string>();
  const allFunctionsLearned = new Set<string>();
  MODULES.forEach((m) => {
    if (completedModuleIds.includes(m.id)) {
      if (m.skillsLearned) {
        m.skillsLearned.forEach((s) => allSkillsLearned.add(s));
      }
      // Extract function names from validFormulas
      m.validFormulas.forEach((f) => {
        const match = f.match(/=([A-Z_]+)\s*\(/);
        if (match) allFunctionsLearned.add(match[1]);
      });
    }
  });

  // All possible functions from all modules
  const allPossibleFunctions = new Set<string>();
  MODULES.forEach((m) => {
    m.validFormulas.forEach((f) => {
      const match = f.match(/=([A-Z_]+)\s*\(/);
      if (match) allPossibleFunctions.add(match[1]);
    });
  });

  // SVG Radar Chart
  const radarSize = 220;
  const center = radarSize / 2;
  const maxRadius = 85;
  const numAxes = dimensions.length;

  const getPoint = (index: number, value: number): { x: number; y: number } => {
    const angle = (Math.PI * 2 * index) / numAxes - Math.PI / 2;
    const radius = (value / 100) * maxRadius;
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    };
  };

  const polygonPoints = dimensions.map((d, i) => getPoint(i, d.percentage));
  const polygonPath = polygonPoints.map((p) => `${p.x},${p.y}`).join(' ');

  // Grid rings
  const rings = [25, 50, 75, 100];

  return (
    <div className="space-y-5">
      {/* Top Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-white rounded-xl border border-gray-200 p-4 text-center shadow-sm">
          <div className="text-2xl font-bold text-[#107c41]">{completedCount}<span className="text-gray-400 text-sm font-normal">/{totalModules}</span></div>
          <div className="text-[11px] text-gray-500 font-medium mt-0.5">Modul Selesai</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 text-center shadow-sm">
          <div className="text-2xl font-bold text-blue-600">{allFunctionsLearned.size}<span className="text-gray-400 text-sm font-normal">/{allPossibleFunctions.size}</span></div>
          <div className="text-[11px] text-gray-500 font-medium mt-0.5">Rumus Dikuasai</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 text-center shadow-sm">
          <div className="text-2xl font-bold text-purple-600">{percentage}%</div>
          <div className="text-[11px] text-gray-500 font-medium mt-0.5">Progres Total</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 text-center shadow-sm">
          <div className="text-2xl">{levelEmoji}</div>
          <div className="text-sm font-bold text-gray-800 mt-0.5">{level}</div>
          <div className="text-[10px] text-gray-400 font-medium">Level Kamu</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Radar Chart */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <h3 className="font-bold text-sm text-gray-800 mb-3 flex items-center gap-2">
            <Target className="w-4 h-4 text-[#107c41]" />
            Peta Kemampuan Excel
          </h3>
          <div className="flex justify-center">
            <svg width={radarSize} height={radarSize} viewBox={`0 0 ${radarSize} ${radarSize}`}>
              {/* Grid rings */}
              {rings.map((ring) => {
                const ringPoints = Array.from({ length: numAxes }, (_, i) => getPoint(i, ring));
                const ringPath = ringPoints.map((p) => `${p.x},${p.y}`).join(' ');
                return (
                  <polygon
                    key={ring}
                    points={ringPath}
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth={ring === 100 ? 1.5 : 0.8}
                  />
                );
              })}
              {/* Axis lines */}
              {dimensions.map((_, i) => {
                const p = getPoint(i, 100);
                return (
                  <line
                    key={i}
                    x1={center}
                    y1={center}
                    x2={p.x}
                    y2={p.y}
                    stroke="#e5e7eb"
                    strokeWidth={0.8}
                  />
                );
              })}
              {/* Data polygon */}
              {completedCount > 0 && (
                <polygon
                  points={polygonPath}
                  fill="rgba(16, 124, 65, 0.15)"
                  stroke="#107c41"
                  strokeWidth={2}
                />
              )}
              {/* Data points */}
              {completedCount > 0 && polygonPoints.map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r={3.5} fill="#107c41" stroke="white" strokeWidth={1.5} />
              ))}
              {/* Labels */}
              {dimensions.map((d, i) => {
                const labelPoint = getPoint(i, 130);
                return (
                  <text
                    key={i}
                    x={labelPoint.x}
                    y={labelPoint.y}
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="text-[8px] font-semibold fill-gray-600"
                  >
                    {d.label.length > 15 ? d.label.substring(0, 14) + '…' : d.label}
                  </text>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Progress per Chapter */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <h3 className="font-bold text-sm text-gray-800 mb-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#107c41]" />
            Progres per Bab
          </h3>
          <div className="space-y-3">
            {dimensions.map((dim, idx) => {
              const IconComp = CHAPTER_ICONS[idx] || Calculator;
              const color = CHAPTER_COLORS[idx] || '#107c41';
              const isComplete = dim.completedCount === dim.totalCount && dim.totalCount > 0;
              return (
                <div key={dim.chapterId} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 font-medium text-gray-700">
                      <IconComp className="w-3.5 h-3.5" style={{ color }} />
                      <span className="truncate max-w-[180px]">{dim.label}</span>
                      {isComplete && <span className="text-emerald-600">✓</span>}
                    </div>
                    <span className="font-mono text-[11px] text-gray-500">{dim.completedCount}/{dim.totalCount}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${dim.percentage}%`,
                        backgroundColor: color,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Skills & Functions Mastered */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
        <h3 className="font-bold text-sm text-gray-800 mb-3 flex items-center gap-2">
          <Award className="w-4 h-4 text-[#107c41]" />
          Rumus Excel yang Dikuasai
        </h3>
        {allPossibleFunctions.size > 0 ? (
          <div className="flex flex-wrap gap-2">
            {Array.from(allPossibleFunctions).sort().map((func) => {
              const isLearned = allFunctionsLearned.has(func);
              return (
                <span
                  key={func}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                    isLearned
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                      : 'bg-gray-100 text-gray-400 border border-gray-200'
                  }`}
                >
                  {isLearned ? <CheckCircle2 className="w-3 h-3 text-emerald-600" /> : <Circle className="w-3 h-3 text-gray-300" />}
                  {func}
                </span>
              );
            })}
          </div>
        ) : (
          <p className="text-xs text-gray-400">Selesaikan modul untuk mulai mengumpulkan rumus yang dikuasai.</p>
        )}
      </div>

      {/* Milestone messages */}
      {completedCount === totalModules && (
        <div className="bg-gradient-to-r from-amber-50 to-emerald-50 border border-amber-200 rounded-xl p-6 text-center shadow-sm">
          <Trophy className="w-12 h-12 text-amber-500 mx-auto mb-2" />
          <h3 className="text-lg font-bold text-gray-900">🏆 Selamat! Kamu Master Excel!</h3>
          <p className="text-sm text-gray-600 mt-1">Seluruh 40 modul telah kamu selesaikan. Kamu siap menguasai spreadsheet di dunia kerja!</p>
        </div>
      )}
    </div>
  );
};
