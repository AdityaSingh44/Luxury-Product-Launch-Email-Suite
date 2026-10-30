import React, { useState } from 'react';
import { LuxuryProduct, ClientProfile } from '../data/emailTemplateData';
import { Check, Shield, Clock, Sparkles, ChevronRight, Award, Compass, Eye, Volume2, VolumeX } from 'lucide-react';

interface InteractiveEmailPreviewProps {
  product: LuxuryProduct;
  client: ClientProfile;
  themeMode: 'dark' | 'light';
  onOpenRsvp: (actionType: 'allocation' | 'salon') => void;
  onSelectImagePreview: (imageUrl: string, title: string) => void;
}

export const InteractiveEmailPreview: React.FC<InteractiveEmailPreviewProps> = ({
  product,
  client,
  themeMode,
  onOpenRsvp,
  onSelectImagePreview
}) => {
  const [selectedAngle, setSelectedAngle] = useState<number>(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const [showFullSpecs, setShowFullSpecs] = useState<boolean>(false);

  // Gallery of high-resolution angles
  const angles = [
    { label: "Front View", url: product.heroImage, caption: "Primary Dial & Architecture" },
    { label: "Movement", url: product.detailImage1, caption: "Hand-Beveled Tourbillon Calibre" },
    { label: "Strap & Clasp", url: product.detailImage2, caption: "Artisanal Saddle Stitching" },
    { label: "Place Vendôme", url: product.storyImage, caption: "Private Salon Ateliers" },
  ];

  // Subtle luxury timepiece tick simulation via Web Audio API
  const toggleAtelierAmbiance = () => {
    if (isAudioPlaying) {
      setIsAudioPlaying(false);
      return;
    }

    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      
      // Play a gentle warm metallic harmonic chime
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 1.2);
      
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 1.2);
      
      setIsAudioPlaying(true);
      setTimeout(() => setIsAudioPlaying(false), 2400);
    } catch {
      setIsAudioPlaying(false);
    }
  };

  const isDark = themeMode === 'dark';

  return (
    <div 
      className={`w-full max-w-[620px] mx-auto rounded-sm border transition-colors duration-300 shadow-2xl relative ${
        isDark 
          ? 'bg-[#121213] text-[#e8e5e0] border-[#cba163]/25 shadow-black/80' 
          : 'bg-white text-[#1c1b1a] border-[#cba163]/30 shadow-stone-300/40'
      }`}
    >
      {/* Interactive Top Micro Toolbar (Preview Enhancer) */}
      <div className={`px-4 py-2 border-b flex items-center justify-between text-xs tracking-wider uppercase ${
        isDark ? 'bg-[#0a0a0b] border-neutral-800 text-neutral-400' : 'bg-neutral-50 border-neutral-200 text-neutral-600'
      }`}>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
          <span>Confidential Client Preview</span>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleAtelierAmbiance}
            title="Hear atelier ambiance acoustic note"
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors cursor-pointer"
          >
            {isAudioPlaying ? <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="text-[10px]">Atelier Note</span>
          </button>
        </div>
      </div>

      {/* Top Monogram & Maison Header */}
      <header className={`text-center pt-8 pb-6 px-6 border-b ${isDark ? 'border-neutral-800/80' : 'border-neutral-200/80'}`}>
        <div className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-amber-600/60 mb-3 text-amber-500 font-display text-sm tracking-widest bg-amber-500/5">
          MV
        </div>
        <h1 className="font-display text-2xl tracking-[0.28em] font-medium uppercase text-neutral-100 dark:text-neutral-100">
          Maison Vauquelin
        </h1>
        <p className="text-[10px] uppercase tracking-[0.3em] text-amber-500/90 mt-1 font-medium">
          Paris · Place Vendôme · Fondée en 1884
        </p>
      </header>

      {/* Private Allocation Ribbon */}
      <div className={`py-3 px-6 border-b flex flex-col sm:flex-row sm:items-center justify-between text-[11px] tracking-wider uppercase gap-2 ${
        isDark ? 'bg-[#181716] border-neutral-800 text-neutral-400' : 'bg-[#f5f3ee] border-neutral-200 text-neutral-600'
      }`}>
        <div>
          Allocation Ref: <strong className="text-amber-400 font-semibold">{client.allocationId}</strong>
        </div>
        <div className="flex items-center gap-1.5 text-amber-400/90 font-medium">
          <span>Private Salon: {client.salonLocation.split(',')[0]}</span>
        </div>
      </div>

      {/* Hero Product Gallery Area */}
      <div className="relative group bg-neutral-950">
        <div className="relative h-[320px] sm:h-[380px] w-full overflow-hidden flex items-center justify-center">
          <img 
            src={angles[selectedAngle].url} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Graceful CSS fallback container if Unsplash fails
              (e.currentTarget.style.display = 'none');
            }}
          />
          {/* Subtle vignette scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-neutral-950/20 pointer-events-none" />

          {/* Quick Enlarge Button */}
          <button
            onClick={() => onSelectImagePreview(angles[selectedAngle].url, angles[selectedAngle].caption)}
            className="absolute top-4 right-4 bg-neutral-950/70 hover:bg-neutral-900 border border-neutral-700 text-neutral-300 p-2 rounded-sm backdrop-blur-md transition-all cursor-pointer"
            title="Inspect high-resolution imagery"
          >
            <Eye className="w-4 h-4" />
          </button>

          {/* Image Caption Tag */}
          <div className="absolute bottom-4 left-4 bg-neutral-950/80 backdrop-blur-md border border-amber-500/30 px-3 py-1 rounded-sm text-[11px] text-amber-200 tracking-wider">
            {angles[selectedAngle].caption}
          </div>
        </div>

        {/* Angle Selector Tabs */}
        <div className="grid grid-cols-4 border-t border-b border-neutral-800 bg-neutral-950/90">
          {angles.map((ang, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedAngle(idx)}
              className={`py-2.5 px-1 text-[10px] tracking-wider uppercase transition-all border-b-2 text-center cursor-pointer ${
                selectedAngle === idx 
                  ? 'border-amber-400 text-amber-300 font-semibold bg-amber-500/10' 
                  : 'border-transparent text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900'
              }`}
            >
              {ang.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Narrative & Invitation Section */}
      <section className="px-6 sm:px-10 py-10 text-center">
        <p className="text-[11px] font-semibold tracking-[0.25em] text-amber-500 uppercase mb-2">
          {product.frenchTitle}
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-neutral-100 font-normal tracking-wide mb-3">
          {product.name}
        </h2>
        <p className="font-serif italic text-lg sm:text-xl text-amber-200/90 max-w-lg mx-auto mb-6 leading-relaxed">
          "{product.headline}"
        </p>

        {/* Elegant hairline ornament */}
        <div className="w-16 h-px bg-amber-500/50 mx-auto mb-8" />

        {/* Editorial Text */}
        <div className={`text-left text-sm leading-relaxed max-w-xl mx-auto space-y-4 mb-8 ${
          isDark ? 'text-neutral-300' : 'text-neutral-700'
        }`}>
          <p className="font-medium text-amber-400">
            Dear {client.salutation} {client.name},
          </p>
          <p>
            {product.curatorNote}
          </p>
          <p>
            {product.description}
          </p>
        </div>

        {/* Primary Action Button */}
        <div className="pt-2 pb-4">
          <button 
            onClick={() => onOpenRsvp('allocation')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-display text-xs tracking-[0.25em] font-semibold uppercase rounded-xs transition-all duration-200 shadow-lg shadow-amber-950/40 hover:shadow-amber-500/20 active:translate-y-0.5 cursor-pointer"
          >
            <span>Claim Private Allocation</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <p className="text-[11px] text-neutral-400 tracking-wider mt-3">
          {product.editionLimit} · Acquisition Price: <strong className="text-amber-300">{product.price}</strong>
        </p>
      </section>

      {/* Savoir-Faire / Craftsmanship Feature */}
      <section className={`px-6 sm:px-10 py-8 border-t border-b ${
        isDark ? 'bg-[#181716] border-neutral-800' : 'bg-[#f5f3ee] border-neutral-200'
      }`}>
        <div className="text-center mb-6">
          <p className="text-[10px] font-semibold tracking-[0.3em] text-amber-500 uppercase">
            Savoir-Faire
          </p>
          <h3 className="font-serif text-2xl text-neutral-100 font-normal mt-1">
            {product.craftsmanshipHighlight.title}
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 items-start">
          <div className="space-y-3">
            <div className="relative h-48 rounded-xs overflow-hidden border border-amber-600/30 group">
              <img 
                src={product.detailImage1} 
                alt="Movement Detail"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-neutral-950/30" />
            </div>
            <p className="text-[10px] uppercase tracking-widest text-amber-400 font-medium">
              {product.craftsmanshipHighlight.hoursOfCraft}
            </p>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
              {product.craftsmanshipHighlight.description}
            </p>
          </div>

          <div className="space-y-2.5">
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-amber-400 font-medium pb-1 border-b border-amber-500/20">
              Technical Specifications
            </h4>
            <div className="space-y-2 text-xs">
              {product.specifications.slice(0, showFullSpecs ? undefined : 4).map((spec, i) => (
                <div key={i} className="pb-2 border-b border-neutral-800/60 last:border-0">
                  <span className="block text-[10px] tracking-wider uppercase text-neutral-400">
                    {spec.label}
                  </span>
                  <span className="font-medium text-neutral-200">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowFullSpecs(!showFullSpecs)}
              className="text-[11px] text-amber-400 hover:text-amber-300 tracking-wider flex items-center gap-1 mt-2 cursor-pointer pt-1"
            >
              <span>{showFullSpecs ? "Show Less Specifications" : "View Full Horological Ledger (+2)"}</span>
              <ChevronRight className={`w-3.5 h-3.5 transition-transform ${showFullSpecs ? 'rotate-90' : ''}`} />
            </button>
          </div>
        </div>
      </section>

      {/* Private Salon Appointment Invitation */}
      <section className="px-6 sm:px-10 py-10 text-center">
        <p className="text-[10px] font-semibold tracking-[0.25em] text-amber-500 uppercase mb-1">
          Private Appointment
        </p>
        <h3 className="font-serif text-2xl text-neutral-100 font-normal mb-3">
          {product.secondaryOffer.title}
        </h3>
        <p className={`text-xs sm:text-sm max-w-md mx-auto mb-6 leading-relaxed ${
          isDark ? 'text-neutral-300' : 'text-neutral-700'
        }`}>
          {product.secondaryOffer.note}
        </p>

        <button 
          onClick={() => onOpenRsvp('salon')}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-amber-500/80 hover:border-amber-400 hover:bg-amber-500/10 text-amber-300 font-display text-xs tracking-[0.2em] uppercase rounded-xs transition-colors cursor-pointer"
        >
          <span>Request Salon Appointment</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

        <p className="text-[11px] text-neutral-400 mt-4">
          Private Client Concierge: <span className="text-amber-300 font-medium">{client.conciergeName}</span>
        </p>
      </section>

      {/* Luxury Privileges Strip */}
      <section className={`px-6 py-6 border-t ${
        isDark ? 'bg-[#181716] border-neutral-800' : 'bg-[#f5f3ee] border-neutral-200'
      }`}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-neutral-800/80">
          <div className="pt-2 sm:pt-0 sm:px-2">
            <Shield className="w-4 h-4 text-amber-400 mx-auto mb-1.5" />
            <p className="font-display text-[11px] tracking-wider text-amber-300 uppercase">
              White-Glove Delivery
            </p>
            <p className="text-[10px] text-neutral-400 mt-0.5">
              Personal security courier worldwide
            </p>
          </div>
          <div className="pt-2 sm:pt-0 sm:px-2">
            <Award className="w-4 h-4 text-amber-400 mx-auto mb-1.5" />
            <p className="font-display text-[11px] tracking-wider text-amber-300 uppercase">
              Lifetime Guarantee
            </p>
            <p className="text-[10px] text-neutral-400 mt-0.5">
              Genevan atelier heritage servicing
            </p>
          </div>
          <div className="pt-2 sm:pt-0 sm:px-2">
            <Compass className="w-4 h-4 text-amber-400 mx-auto mb-1.5" />
            <p className="font-display text-[11px] tracking-wider text-amber-300 uppercase">
              Bespoke Monogram
            </p>
            <p className="text-[10px] text-neutral-400 mt-0.5">
              Hand-engraved client initials
            </p>
          </div>
        </div>
      </section>

      {/* Footer & Legal Unboxed Credentials */}
      <footer className={`px-6 sm:px-10 py-10 text-center border-t text-xs ${
        isDark ? 'bg-[#101011] border-neutral-800/90 text-neutral-400' : 'bg-neutral-100 border-neutral-200 text-neutral-600'
      }`}>
        <p className="font-display text-sm tracking-[0.25em] text-amber-300 uppercase mb-2">
          Maison Vauquelin · Haute Création
        </p>
        <p className="text-[11px] leading-relaxed text-neutral-400 max-w-md mx-auto mb-4">
          Hôtel Particulier Vauquelin, 14 Place Vendôme, 75001 Paris, France<br />
          Direct Concierge Line: +33 (0)1 42 68 00 18 · concierge@vauquelin-paris.com
        </p>

        <p className="text-[10px] text-neutral-400 leading-relaxed max-w-md mx-auto mb-5">
          This confidential communication is delivered personally to {client.name} as a registered patron of the Maison Vauquelin Private Salon. Your individual allocation code <strong>{client.allocationId}</strong> is valid until midnight CET.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] text-neutral-400">
          <button 
            onClick={() => onOpenRsvp('salon')} 
            className="hover:text-amber-300 underline underline-offset-4 cursor-pointer"
          >
            Patron Portal
          </button>
          <span>·</span>
          <button 
            onClick={() => onSelectImagePreview(product.storyImage, "Place Vendôme Atelier Archive")} 
            className="hover:text-amber-300 underline underline-offset-4 cursor-pointer"
          >
            Atelier Ledger
          </button>
          <span>·</span>
          <a href="#preferences" className="hover:text-amber-300 underline underline-offset-4">
            Private Preferences
          </a>
          <span>·</span>
          <a href="#unsubscribe" className="hover:text-amber-300 underline underline-offset-4">
            Opt Out of Private Releases
          </a>
        </div>

        <p className="text-[10px] text-neutral-400 tracking-widest uppercase mt-6">
          &copy; 1884–2026 Maison Vauquelin S.A. All rights reserved.
        </p>
      </footer>
    </div>
  );
};
