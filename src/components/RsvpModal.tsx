import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Clock, Wine, PenTool, ShieldCheck, Download } from 'lucide-react';
import { LuxuryProduct, ClientProfile, SALON_OPTIONS } from '../data/emailTemplateData';

interface RsvpModalProps {
  isOpen: boolean;
  onClose: () => void;
  actionType: 'allocation' | 'salon';
  product: LuxuryProduct;
  client: ClientProfile;
}

export const RsvpModal: React.FC<RsvpModalProps> = ({
  isOpen,
  onClose,
  actionType,
  product,
  client
}) => {
  if (!isOpen) return null;

  const [date, setDate] = useState<string>("2026-11-14");
  const [time, setTime] = useState<string>("18:30");
  const [salon, setSalon] = useState<string>(client.salonLocation);
  const [guestCount, setGuestCount] = useState<number>(2);
  const [champagnePreference, setChampagnePreference] = useState<string>("Dom Pérignon Vintage 2013");
  const [engravingText, setEngravingText] = useState<string>("J.S. · 2026");
  const [deliveryType, setDeliveryType] = useState<'salon' | 'courier'>('salon');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleDownloadCalendar = () => {
    // Generate .ics calendar file
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Maison Vauquelin//Private Salon Invitation//EN
CALSCALE:GREGORIAN
METHOD:REQUEST
BEGIN:VEVENT
SUMMARY:Maison Vauquelin: Private Unveiling & Allocation of ${product.name}
DESCRIPTION:Confidential private allocation appointment for ${client.name}. Reference: ${client.allocationId}. Venue: ${salon}.
LOCATION:${salon}
STATUS:CONFIRMED
DTSTART:20261114T183000Z
DTEND:20261114T203000Z
ORGANIZER;CN=Maison Vauquelin Concierge:mailto:concierge@vauquelin-paris.com
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Maison_Vauquelin_${client.allocationId}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-neutral-900 border border-amber-500/30 rounded-lg shadow-2xl overflow-hidden text-neutral-100">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span className="font-display text-xs tracking-widest text-amber-300 uppercase">
              {actionType === 'allocation' ? 'Private Allocation Registry' : 'Salon Appointment Request'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-1 rounded transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/10 border border-amber-400/40 flex items-center justify-center text-amber-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <p className="font-display text-xs tracking-[0.25em] text-amber-400 uppercase mb-1">
                Allocation Confirmed
              </p>
              <h3 className="font-serif text-2xl text-white">
                Dossier {client.allocationId} Registered
              </h3>
              <p className="text-xs text-neutral-400 mt-2 max-w-md mx-auto leading-relaxed">
                Thank you, {client.salutation} {client.name}. Your dedicated private client director, <strong className="text-amber-200">{client.conciergeName}</strong>, has received your itinerary and will connect with your private office within two hours.
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-md p-4 text-left text-xs space-y-2">
              <div className="flex justify-between border-b border-neutral-800 pb-2">
                <span className="text-neutral-400">Creation:</span>
                <span className="text-amber-300 font-medium">{product.name}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-800 pb-2">
                <span className="text-neutral-400">Focal Venue:</span>
                <span className="text-neutral-200">{salon}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-800 pb-2">
                <span className="text-neutral-400">Appointment Date:</span>
                <span className="text-neutral-200">{date} at {time} CET</span>
              </div>
              <div className="flex justify-between border-b border-neutral-800 pb-2">
                <span className="text-neutral-400">Champagne Service:</span>
                <span className="text-neutral-200">{champagnePreference}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Bespoke Engraving:</span>
                <span className="font-mono text-amber-300 font-semibold">{engravingText || 'None Requested'}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={handleDownloadCalendar}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-semibold tracking-wider uppercase rounded-xs transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Save to Apple / Google Calendar</span>
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2.5 border border-neutral-700 hover:border-neutral-500 text-neutral-300 text-xs tracking-wider uppercase rounded-xs transition-colors cursor-pointer"
              >
                Close Dossier
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            {/* Top Product Snapshot */}
            <div className="flex items-center gap-3 p-3 bg-neutral-950 border border-neutral-800 rounded-md">
              <img 
                src={product.heroImage} 
                alt={product.name} 
                className="w-14 h-14 object-cover rounded-xs border border-amber-500/20"
                referrerPolicy="no-referrer"
              />
              <div className="flex-1 min-w-0">
                <p className="text-[10px] text-amber-400 uppercase tracking-widest">{product.collection}</p>
                <h4 className="font-serif text-base text-neutral-100 truncate">{product.name}</h4>
                <p className="text-xs text-neutral-400">{product.price} · Allocation {client.allocationId}</p>
              </div>
            </div>

            {/* Mode: Salon Viewing vs Direct Delivery */}
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1.5 uppercase tracking-wider">
                Unveiling Preference
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setDeliveryType('salon')}
                  className={`p-2.5 text-xs text-left rounded border transition-colors cursor-pointer ${
                    deliveryType === 'salon'
                      ? 'border-amber-400 bg-amber-500/10 text-amber-200'
                      : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <span className="font-semibold block text-neutral-200">Private Salon Viewing</span>
                  <span className="text-[10px] text-neutral-400">Twilight tasting & presentation</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDeliveryType('courier')}
                  className={`p-2.5 text-xs text-left rounded border transition-colors cursor-pointer ${
                    deliveryType === 'courier'
                      ? 'border-amber-400 bg-amber-500/10 text-amber-200'
                      : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <span className="font-semibold block text-neutral-200">White-Glove Courier</span>
                  <span className="text-[10px] text-neutral-400">Direct delivery to your estate</span>
                </button>
              </div>
            </div>

            {/* Salon Location Picker */}
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1.5 uppercase tracking-wider">
                Selected Salon
              </label>
              <select
                value={salon}
                onChange={(e) => setSalon(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 text-xs text-neutral-200 focus:outline-none focus:border-amber-400"
              >
                {SALON_OPTIONS.map((loc, i) => (
                  <option key={i} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            {/* Date & Time Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] text-neutral-400 mb-1 uppercase tracking-wider flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-amber-400" />
                  <span>Preferred Date</span>
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 text-xs text-neutral-200 focus:outline-none focus:border-amber-400"
                />
              </div>
              <div>
                <label className="block text-[11px] text-neutral-400 mb-1 uppercase tracking-wider flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-400" />
                  <span>Preferred Time</span>
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 text-xs text-neutral-200 focus:outline-none focus:border-amber-400"
                >
                  <option value="11:00">11:00 AM (Morning Salon)</option>
                  <option value="14:30">02:30 PM (Afternoon View)</option>
                  <option value="17:00">05:00 PM (Aperitif Hour)</option>
                  <option value="18:30">06:30 PM (Twilight Salon)</option>
                </select>
              </div>
            </div>

            {/* Champagne Service & Guest Count */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] text-neutral-400 mb-1 uppercase tracking-wider flex items-center gap-1">
                  <Wine className="w-3 h-3 text-amber-400" />
                  <span>Salon Hospitality</span>
                </label>
                <select
                  value={champagnePreference}
                  onChange={(e) => setChampagnePreference(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 text-xs text-neutral-200 focus:outline-none focus:border-amber-400"
                >
                  <option value="Dom Pérignon Vintage 2013">Dom Pérignon Vintage 2013</option>
                  <option value="Krug Grande Cuvée 170th">Krug Grande Cuvée</option>
                  <option value="Ruinart Blanc de Blancs">Ruinart Blanc de Blancs</option>
                  <option value="Rare Botanicals Infusion (No Alcohol)">Artisanal Tea Infusion</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] text-neutral-400 mb-1 uppercase tracking-wider">
                  Guest Count
                </label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 text-xs text-neutral-200 focus:outline-none focus:border-amber-400"
                >
                  <option value={1}>Sole Patron (1)</option>
                  <option value={2}>Patron & Guest (2)</option>
                  <option value={4}>Private Party (Up to 4)</option>
                </select>
              </div>
            </div>

            {/* Bespoke Engraving Request */}
            <div>
              <label className="block text-[11px] text-neutral-400 mb-1 uppercase tracking-wider flex items-center gap-1">
                <PenTool className="w-3 h-3 text-amber-400" />
                <span>Bespoke Caseback Engraving (Complimentary)</span>
              </label>
              <input
                type="text"
                maxLength={20}
                value={engravingText}
                onChange={(e) => setEngravingText(e.target.value)}
                placeholder="e.g. J.S. · 2026 or Family Motto"
                className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 text-xs text-neutral-200 focus:outline-none focus:border-amber-400 uppercase tracking-widest font-mono"
              />
              <span className="text-[10px] text-neutral-500 mt-1 block">
                Up to 20 alphanumeric characters hand-chiseled by Genevan master engravers.
              </span>
            </div>

            {/* Submission Button */}
            <div className="pt-3 border-t border-neutral-800">
              <button
                type="submit"
                className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-display text-xs tracking-[0.2em] font-semibold uppercase rounded-xs transition-colors cursor-pointer shadow-lg shadow-amber-950/40"
              >
                Transmit Reservation to Salon Director
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
