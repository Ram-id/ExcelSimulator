'use client';

import React from 'react';
import { TrackData } from '@/types/simulator';
import { Calculator, BarChart3, Type, Cpu, Search, CheckCircle2 } from 'lucide-react';

interface TrackSelectorProps {
  tracks: TrackData[];
  activeTrackId: string;
  completedLevels: number[];
  onSelectTrack: (trackId: string) => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Calculator: <Calculator className="w-4 h-4" />,
  BarChart3: <BarChart3 className="w-4 h-4" />,
  Type: <Type className="w-4 h-4" />,
  Cpu: <Cpu className="w-4 h-4" />,
  Search: <Search className="w-4 h-4" />,
};

export const TrackSelector: React.FC<TrackSelectorProps> = ({
  tracks,
  activeTrackId,
  completedLevels,
  onSelectTrack,
}) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-2 shadow-xs">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1.5">
        {tracks.map((track) => {
          const isActive = track.id === activeTrackId;
          const completedInTrack = track.levelIds.filter((id) => completedLevels.includes(id)).length;
          const isFullyCompleted = completedInTrack === track.levelIds.length;

          return (
            <button
              key={track.id}
              onClick={() => onSelectTrack(track.id)}
              className={`p-2.5 rounded-lg text-left transition-all relative flex flex-col justify-between ${
                isActive
                  ? 'bg-[#107c41] text-white shadow-sm ring-2 ring-[#107c41]/30'
                  : 'bg-gray-50/70 hover:bg-gray-100/90 text-gray-700 border border-gray-200/70'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className={`p-1 rounded-md ${
                      isActive ? 'bg-emerald-800 text-emerald-100' : 'bg-emerald-100/80 text-[#107c41]'
                    }`}
                  >
                    {ICON_MAP[track.iconName] || <Calculator className="w-4 h-4" />}
                  </span>

                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-emerald-800 text-emerald-100'
                        : isFullyCompleted
                        ? 'bg-emerald-100 text-emerald-800 font-semibold'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {completedInTrack}/{track.levelIds.length}
                  </span>
                </div>

                <div className="font-bold text-xs leading-tight mb-0.5">
                  Track {track.number}: {track.title}
                </div>
              </div>

              <div
                className={`text-[10px] line-clamp-1 mt-1 ${
                  isActive ? 'text-emerald-100' : 'text-gray-500'
                }`}
              >
                {track.description}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
