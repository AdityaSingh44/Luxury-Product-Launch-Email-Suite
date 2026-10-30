import React from 'react';
import { Monitor, Smartphone, Tablet, Maximize2, ShieldCheck, Sun, Moon, Sparkles, Lock, Star } from 'lucide-react';
import { ClientProfile, LuxuryProduct } from '../data/emailTemplateData';

export type DeviceType = 'desktop' | 'mobile' | 'tablet' | 'full';

interface DeviceSimulatorProps {
  device: DeviceType;
  setDevice: (d: DeviceType) => void;
  themeMode: 'dark' | 'light';
  setThemeMode: (m: 'dark' | 'light') => void;
  viewMode: 'interactive' | 'html-render';
  setViewMode: (v: 'interactive' | 'html-render') => void;
  product: LuxuryProduct;
  client: ClientProfile;
  children: React.ReactNode;
}

export const DeviceSimulator: React.FC<DeviceSimulatorProps> = ({
  device,
  setDevice,
  themeMode,
  setThemeMode,
  viewMode,
  setViewMode,
  product,
  client,
  children
}) => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Device & Client Control Strip */}
      <div className="w-full max-w-5xl mb-6 flex flex-wrap items-center justify-between gap-4 p-3 bg-neutral-900/90 border border-neutral-800 rounded-xl backdrop-blur-md">
        
        {/* Device Switcher */}
        <div className="flex items-center gap-1 bg-neutral-950 p-1 rounded-lg border border-neutral-800/80">
          <button
            onClick={() => setDevice('desktop')}
            className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
              device === 'desktop'
                ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Desktop</span>
            <span className="text-[10px] text-neutral-500">680px</span>
          </button>

          <button
            onClick={() => setDevice('mobile')}
            className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
              device === 'mobile'
                ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Mobile</span>
            <span className="text-[10px] text-neutral-500">390px</span>
          </button>

          <button
            onClick={() => setDevice('tablet')}
            className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
              device === 'tablet'
                ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Tablet className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Tablet</span>
            <span className="text-[10px] text-neutral-500">768px</span>
          </button>

          <button
            onClick={() => setDevice('full')}
            className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
              device === 'full'
                ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Canvas</span>
          </button>
        </div>

        {/* View Mode & Client Theme Controls */}
        <div className="flex items-center gap-3">
          {/* Engine Preview Mode */}
          <div className="flex items-center gap-1 bg-neutral-950 p-1 rounded-lg border border-neutral-800/80">
            <button
              onClick={() => setViewMode('interactive')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all cursor-pointer ${
                viewMode === 'interactive'
                  ? 'bg-neutral-800 text-neutral-100 shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Interactive Mode
            </button>
            <button
              onClick={() => setViewMode('html-render')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all cursor-pointer ${
                viewMode === 'html-render'
                  ? 'bg-neutral-800 text-neutral-100 shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Raw HTML Engine
            </button>
          </div>

          {/* Email Dark / Light Mode Emulation */}
          <div className="flex items-center bg-neutral-950 p-1 rounded-lg border border-neutral-800/80">
            <button
              onClick={() => setThemeMode('dark')}
              title="Apple Mail Dark Mode"
              className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                themeMode === 'dark' ? 'bg-amber-500/20 text-amber-300' : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <Moon className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setThemeMode('light')}
              title="Apple Mail Light Mode"
              className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                themeMode === 'light' ? 'bg-amber-500/20 text-amber-300' : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Frame Container Based on Device */}
      {device === 'desktop' && (
        <div className="w-full max-w-[760px] bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl transition-all">
          {/* macOS Apple Mail Window Header */}
          <div className="px-4 py-3 bg-neutral-950/80 border-b border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block border border-[#e0443e]"></span>
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block border border-[#dea123]"></span>
              <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block border border-[#1aab29]"></span>
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
              <Lock className="w-3 h-3 text-amber-400" />
              <span>TLS 1.3 256-Bit Encrypted Communication</span>
            </div>
            <div className="w-12"></div>
          </div>

          {/* Mail Envelope Metadata */}
          <div className="px-6 py-4 bg-neutral-950/40 border-b border-neutral-800/80 text-xs space-y-1.5">
            <div className="flex items-baseline justify-between">
              <h3 className="font-serif text-lg text-neutral-100 font-medium tracking-wide">
                Exclusive Invitation: Private Unveiling of {product.name}
              </h3>
              <span className="text-[11px] text-neutral-400">Today at 10:42 AM</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-neutral-400">
              <p>
                From: <span className="text-neutral-200 font-medium">Maison Vauquelin Concierge</span> &lt;concierge@vauquelin-paris.com&gt;
              </p>
              <p>
                To: <span className="text-amber-300 font-medium">{client.salutation} {client.name}</span> &lt;adityasingh5100@gmail.com&gt;
              </p>
            </div>
            <div className="text-[11px] text-neutral-400 flex items-center gap-2 pt-0.5">
              <span className="text-amber-400/90 font-medium">VIP Tier:</span>
              <span>{client.vipTier}</span>
              <span>·</span>
              <span className="text-amber-400/90 font-medium">Allocation Ref:</span>
              <span>{client.allocationId}</span>
            </div>
          </div>

          {/* Email Content Body */}
          <div className="p-4 sm:p-8 bg-neutral-950/70 overflow-x-auto flex justify-center">
            {children}
          </div>
        </div>
      )}

      {device === 'mobile' && (
        <div className="relative w-[390px] bg-neutral-900 border-[6px] border-neutral-800 rounded-[48px] overflow-hidden shadow-2xl shadow-black">
          {/* iPhone 16 Pro Dynamic Island & Status Bar */}
          <div className="pt-3 px-6 pb-2 bg-neutral-950 text-neutral-200 flex items-center justify-between text-xs font-semibold select-none">
            <span>9:41</span>
            {/* Dynamic Island */}
            <div className="w-24 h-5 bg-black rounded-full border border-neutral-800/50 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-900 mr-2"></div>
              <div className="w-2 h-2 rounded-full bg-amber-500/80"></div>
            </div>
            <div className="flex items-center gap-1.5 text-[10px]">
              <span>5G</span>
              <div className="w-5 h-2.5 border border-neutral-400 rounded-xs p-0.5 flex items-center">
                <div className="w-full h-full bg-neutral-200 rounded-xs"></div>
              </div>
            </div>
          </div>

          {/* iOS Mail Top Bar */}
          <div className="px-4 py-2.5 bg-neutral-950/95 border-b border-neutral-800 flex items-center justify-between text-xs">
            <span className="text-amber-400 font-medium flex items-center gap-1">
              &larr; VIP Salon
            </span>
            <span className="font-medium text-neutral-300 truncate max-w-[170px]">
              Maison Vauquelin
            </span>
            <span className="text-amber-400">Details</span>
          </div>

          {/* Mail Content Scroll Area */}
          <div className="h-[680px] overflow-y-auto bg-neutral-950 p-2">
            {children}
          </div>

          {/* iPhone Home Bar Indicator */}
          <div className="py-2 bg-neutral-950 flex justify-center">
            <div className="w-32 h-1 bg-neutral-500 rounded-full"></div>
          </div>
        </div>
      )}

      {device === 'tablet' && (
        <div className="w-full max-w-[768px] bg-neutral-900 border-4 border-neutral-800 rounded-[24px] overflow-hidden shadow-2xl shadow-black">
          {/* iPad Top Bar */}
          <div className="px-6 py-2.5 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
            <span>iPadOS Mail</span>
            <span className="text-neutral-200 font-medium">Private Salon Client Allocation</span>
            <span>10:42 AM</span>
          </div>

          {/* Content */}
          <div className="p-6 bg-neutral-950/80 overflow-x-auto flex justify-center">
            {children}
          </div>
        </div>
      )}

      {device === 'full' && (
        <div className="w-full bg-neutral-950/60 p-4 flex justify-center">
          {children}
        </div>
      )}
    </div>
  );
};
