/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  LUXURY_PRODUCTS, 
  DEFAULT_CLIENT, 
  LuxuryProduct, 
  ClientProfile 
} from './data/emailTemplateData';
import { generateLuxuryEmailHtml } from './utils/emailHtmlGenerator';
import { InteractiveEmailPreview } from './components/InteractiveEmailPreview';
import { IframeEmailPreview } from './components/IframeEmailPreview';
import { DeviceSimulator, DeviceType } from './components/DeviceSimulator';
import { RsvpModal } from './components/RsvpModal';
import { CodeExportModal } from './components/CodeExportModal';
import { TestSendModal } from './components/TestSendModal';
import { ImageDetailModal } from './components/ImageDetailModal';
import { PersonalizationDrawer } from './components/PersonalizationDrawer';
import { 
  Code2, 
  Send, 
  Sliders, 
  Download, 
  Check, 
  Mail, 
  Sparkles, 
  Layers, 
  ExternalLink,
  Bell
} from 'lucide-react';

export default function App() {
  // State
  const [selectedProduct, setSelectedProduct] = useState<LuxuryProduct>(LUXURY_PRODUCTS[0]);
  const [client, setClient] = useState<ClientProfile>(DEFAULT_CLIENT);
  const [device, setDevice] = useState<DeviceType>('desktop');
  const [themeMode, setThemeMode] = useState<'dark' | 'light'>('dark');
  const [viewMode, setViewMode] = useState<'interactive' | 'html-render'>('interactive');

  // Modals & Panels
  const [isRsvpOpen, setIsRsvpOpen] = useState<boolean>(false);
  const [rsvpActionType, setRsvpActionType] = useState<'allocation' | 'salon'>('allocation');
  const [isExportOpen, setIsExportOpen] = useState<boolean>(false);
  const [isTestSendOpen, setIsTestSendOpen] = useState<boolean>(false);
  const [isPersonalizationOpen, setIsPersonalizationOpen] = useState<boolean>(false);
  
  // Image Zoom Modal
  const [zoomImage, setZoomImage] = useState<{ url: string; title: string } | null>(null);

  // Simulated Inbox Notification Badge
  const [showInboxNotification, setShowInboxNotification] = useState<boolean>(false);

  // Generate pure, production HTML string
  const generatedHtml = useMemo(() => {
    return generateLuxuryEmailHtml(selectedProduct, client, themeMode);
  }, [selectedProduct, client, themeMode]);

  const handleOpenRsvp = (actionType: 'allocation' | 'salon') => {
    setRsvpActionType(actionType);
    setIsRsvpOpen(true);
  };

  const handleSelectImagePreview = (imageUrl: string, title: string) => {
    setZoomImage({ url: imageUrl, title });
  };

  const handleSimulateInboxArrival = () => {
    setShowInboxNotification(true);
  };

  return (
    <div className="min-h-screen bg-[#09090a] text-neutral-100 flex flex-col font-sans selection:bg-amber-900/40 selection:text-amber-200">
      
      {/* Top Bar Contract (Strict 3-zone, one line, gap-8) */}
      <header className="sticky top-0 z-40 bg-[#09090a]/90 backdrop-blur-md border-b border-neutral-800/80 px-6 sm:px-10 py-3.5 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element Brand wordmark */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); setDevice('desktop'); }}
          className="font-display text-base font-semibold tracking-[0.25em] text-neutral-100 uppercase whitespace-nowrap shrink-0 hover:text-amber-300 transition-colors"
        >
          Aurelia Atelier
        </a>

        {/* Zone 2: 4-5 concise single-line text links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-400">
          <button 
            onClick={() => setIsPersonalizationOpen(true)}
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Personalization
          </button>
          <button 
            onClick={() => setDevice(device === 'mobile' ? 'desktop' : 'mobile')}
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Responsive Breakpoints
          </button>
          <button 
            onClick={() => setIsExportOpen(true)}
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            HTML Source
          </button>
          <button 
            onClick={() => handleOpenRsvp('salon')}
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Private Salon RSVP
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setIsExportOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-display text-xs font-semibold tracking-wider uppercase rounded-xs transition-all shadow-md shadow-amber-950/40 hover:shadow-amber-500/20 cursor-pointer whitespace-nowrap shrink-0"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Export Template</span>
          </button>
        </div>
      </header>

      {/* Hero Studio Kicker & Quick Bar */}
      <section className="px-6 py-6 border-b border-neutral-800/60 bg-gradient-to-b from-neutral-900/40 to-transparent">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-neutral-400 mb-1">
              <span>Haute Joaillerie & Horlogerie</span>
              <span>·</span>
              <span>Place Vendôme Private Edition</span>
              <span>·</span>
              <span className="text-amber-400 font-medium">600px Responsive Standard</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-neutral-100 font-normal tracking-wide text-balance">
              Luxury Product Launch Email Suite
            </h2>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setIsPersonalizationOpen(true)}
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 text-xs font-medium rounded-xs transition-colors cursor-pointer"
            >
              <Sliders className="w-3.5 h-3.5 text-amber-400" />
              <span>Customize Client & Item</span>
            </button>

            <button
              onClick={() => setIsTestSendOpen(true)}
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 text-xs font-medium rounded-xs transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 text-amber-400" />
              <span>Test Preflight</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Workspace: Device Frame Simulator */}
      <main className="flex-1 px-4 sm:px-6 py-8 flex flex-col items-center">
        <DeviceSimulator
          device={device}
          setDevice={setDevice}
          themeMode={themeMode}
          setThemeMode={setThemeMode}
          viewMode={viewMode}
          setViewMode={setViewMode}
          product={selectedProduct}
          client={client}
        >
          {viewMode === 'interactive' ? (
            <InteractiveEmailPreview
              product={selectedProduct}
              client={client}
              themeMode={themeMode}
              onOpenRsvp={handleOpenRsvp}
              onSelectImagePreview={handleSelectImagePreview}
            />
          ) : (
            <IframeEmailPreview htmlContent={generatedHtml} />
          )}
        </DeviceSimulator>
      </main>

      {/* Simulated Incoming VIP Push Notification Toast */}
      {showInboxNotification && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-neutral-900/95 border border-amber-500/40 rounded-lg p-4 shadow-2xl backdrop-blur-md animate-bounce-subtle text-neutral-100">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between text-[11px] text-neutral-400">
                <span className="font-semibold text-amber-300">Apple Mail · VIP Inbox</span>
                <span>Just Now</span>
              </div>
              <h4 className="font-serif text-sm text-neutral-100 font-medium truncate mt-0.5">
                Exclusive Invitation: {selectedProduct.name}
              </h4>
              <p className="text-xs text-neutral-400 line-clamp-2 mt-0.5">
                Private invitation for {client.salutation} {client.name} — Allocation {client.allocationId}. The official unveiling of {selectedProduct.name} from Maison Vauquelin.
              </p>
            </div>
            <button
              onClick={() => setShowInboxNotification(false)}
              className="text-neutral-500 hover:text-white p-0.5 cursor-pointer"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Modals & Drawers */}
      <RsvpModal
        isOpen={isRsvpOpen}
        onClose={() => setIsRsvpOpen(false)}
        actionType={rsvpActionType}
        product={selectedProduct}
        client={client}
      />

      <CodeExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        htmlCode={generatedHtml}
      />

      <TestSendModal
        isOpen={isTestSendOpen}
        onClose={() => setIsTestSendOpen(false)}
        product={selectedProduct}
        client={client}
        onSimulateInboxArrival={handleSimulateInboxArrival}
      />

      <ImageDetailModal
        isOpen={!!zoomImage}
        onClose={() => setZoomImage(null)}
        imageUrl={zoomImage?.url || ''}
        title={zoomImage?.title || ''}
      />

      <PersonalizationDrawer
        isOpen={isPersonalizationOpen}
        onClose={() => setIsPersonalizationOpen(false)}
        selectedProduct={selectedProduct}
        onSelectProduct={setSelectedProduct}
        client={client}
        setClient={setClient}
      />

      {/* Quiet Footer */}
      <footer className="border-t border-neutral-900 bg-neutral-950 px-6 py-6 text-center text-xs text-neutral-500">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-serif text-neutral-400">
            Aurelia Luxury Product Launch Email Architecture · Place Vendôme & Genevan Horology Standard
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>600px Fluid Hybrid Table Grid</span>
            <span>·</span>
            <span>Apple Mail Dark Mode Meta</span>
            <span>·</span>
            <span>Zero-Pill Typography</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
