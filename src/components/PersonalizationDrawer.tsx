import React from 'react';
import { X, Sliders, RefreshCw, UserCheck, MapPin, Tag } from 'lucide-react';
import { LuxuryProduct, ClientProfile, LUXURY_PRODUCTS, SALON_OPTIONS, DEFAULT_CLIENT } from '../data/emailTemplateData';

interface PersonalizationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct: LuxuryProduct;
  onSelectProduct: (p: LuxuryProduct) => void;
  client: ClientProfile;
  setClient: React.Dispatch<React.SetStateAction<ClientProfile>>;
}

export const PersonalizationDrawer: React.FC<PersonalizationDrawerProps> = ({
  isOpen,
  onClose,
  selectedProduct,
  onSelectProduct,
  client,
  setClient
}) => {
  if (!isOpen) return null;

  const handleReset = () => {
    setClient(DEFAULT_CLIENT);
  };

  const handlePresetSelect = (preset: Partial<ClientProfile>) => {
    setClient(prev => ({ ...prev, ...preset }));
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-neutral-900 border-l border-amber-500/30 shadow-2xl flex flex-col text-neutral-100 animate-slide-left">
      {/* Drawer Header */}
      <div className="px-6 py-4 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sliders className="w-4 h-4 text-amber-400" />
          <h3 className="font-display text-xs tracking-widest text-amber-300 uppercase">
            VIP Personalization & Catalog
          </h3>
        </div>
        <button
          onClick={onClose}
          className="text-neutral-400 hover:text-white p-1 rounded transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6 text-xs">
        {/* Product Selection */}
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-amber-400 mb-2">
            1. Select Luxury Creation
          </label>
          <div className="space-y-2">
            {LUXURY_PRODUCTS.map((prod) => (
              <button
                key={prod.id}
                onClick={() => onSelectProduct(prod)}
                className={`w-full p-3 rounded text-left border flex items-center gap-3 transition-all cursor-pointer ${
                  selectedProduct.id === prod.id
                    ? 'border-amber-400 bg-amber-500/10 text-amber-200'
                    : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200'
                }`}
              >
                <img
                  src={prod.heroImage}
                  alt={prod.name}
                  className="w-12 h-12 object-cover rounded-xs border border-neutral-700 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-serif text-sm font-medium text-neutral-100 truncate">{prod.name}</p>
                  <p className="text-[10px] text-amber-400/90">{prod.frenchTitle}</p>
                  <p className="text-[11px] text-neutral-400 font-mono mt-0.5">{prod.price}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Client Preset Shortcuts */}
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-amber-400 mb-2">
            2. Quick Client Profiles
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handlePresetSelect({
                salutation: "Lord",
                name: "Julian Sterling",
                allocationId: "VAU-2026-N°08",
                vipTier: "Patron Privilégié",
                salonLocation: "168 New Bond Street, London"
              })}
              className="p-2 bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 rounded text-left text-neutral-300 transition-colors cursor-pointer"
            >
              <span className="font-medium block text-amber-300">Lord Sterling</span>
              <span className="text-[10px] text-neutral-500">London Salon · N°08</span>
            </button>

            <button
              onClick={() => handlePresetSelect({
                salutation: "Madame",
                name: "Vivienne Fontaine",
                allocationId: "VAU-2026-N°02",
                vipTier: "Founding Circle",
                salonLocation: "14 Place Vendôme, Paris"
              })}
              className="p-2 bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 rounded text-left text-neutral-300 transition-colors cursor-pointer"
            >
              <span className="font-medium block text-amber-300">Madame Fontaine</span>
              <span className="text-[10px] text-neutral-500">Paris Salon · N°02</span>
            </button>
          </div>
        </div>

        {/* Detailed Form */}
        <div className="space-y-4 pt-2 border-t border-neutral-800">
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-amber-400">
            3. Client Dossier Fields
          </label>

          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block text-[10px] text-neutral-400 mb-1 uppercase tracking-wider">Salutation</label>
              <input
                type="text"
                value={client.salutation}
                onChange={(e) => setClient(c => ({ ...c, salutation: e.target.value }))}
                className="w-full bg-neutral-950 border border-neutral-800 rounded px-2.5 py-1.5 text-neutral-200 focus:outline-none focus:border-amber-400"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-[10px] text-neutral-400 mb-1 uppercase tracking-wider">Patron Name</label>
              <input
                type="text"
                value={client.name}
                onChange={(e) => setClient(c => ({ ...c, name: e.target.value }))}
                className="w-full bg-neutral-950 border border-neutral-800 rounded px-2.5 py-1.5 text-neutral-200 focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-[10px] text-neutral-400 mb-1 uppercase tracking-wider">Allocation ID</label>
              <input
                type="text"
                value={client.allocationId}
                onChange={(e) => setClient(c => ({ ...c, allocationId: e.target.value }))}
                className="w-full bg-neutral-950 border border-neutral-800 rounded px-2.5 py-1.5 text-neutral-200 font-mono text-amber-300 focus:outline-none focus:border-amber-400"
              />
            </div>
            <div>
              <label className="block text-[10px] text-neutral-400 mb-1 uppercase tracking-wider">VIP Tier</label>
              <input
                type="text"
                value={client.vipTier}
                onChange={(e) => setClient(c => ({ ...c, vipTier: e.target.value }))}
                className="w-full bg-neutral-950 border border-neutral-800 rounded px-2.5 py-1.5 text-neutral-200 focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] text-neutral-400 mb-1 uppercase tracking-wider">Assigned Salon</label>
            <select
              value={client.salonLocation}
              onChange={(e) => setClient(c => ({ ...c, salonLocation: e.target.value }))}
              className="w-full bg-neutral-950 border border-neutral-800 rounded px-2.5 py-1.5 text-neutral-200 focus:outline-none focus:border-amber-400"
            >
              {SALON_OPTIONS.map((loc, i) => (
                <option key={i} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[10px] text-neutral-400 mb-1 uppercase tracking-wider">Private Concierge</label>
            <input
              type="text"
              value={client.conciergeName}
              onChange={(e) => setClient(c => ({ ...c, conciergeName: e.target.value }))}
              className="w-full bg-neutral-950 border border-neutral-800 rounded px-2.5 py-1.5 text-neutral-200 focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>
      </div>

      {/* Drawer Footer */}
      <div className="px-6 py-3 bg-neutral-950 border-t border-neutral-800 flex items-center justify-between">
        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-amber-300 transition-colors cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Defaults</span>
        </button>
        <button
          onClick={onClose}
          className="px-4 py-1.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold text-xs tracking-wider uppercase rounded-xs transition-colors cursor-pointer"
        >
          Apply Changes
        </button>
      </div>
    </div>
  );
};
