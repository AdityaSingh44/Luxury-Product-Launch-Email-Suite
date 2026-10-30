import React, { useState } from 'react';
import { X, Send, ShieldCheck, CheckCircle2, AlertCircle, Mail, Sparkles, Inbox } from 'lucide-react';
import { LuxuryProduct, ClientProfile } from '../data/emailTemplateData';

interface TestSendModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: LuxuryProduct;
  client: ClientProfile;
  onSimulateInboxArrival: () => void;
}

export const TestSendModal: React.FC<TestSendModalProps> = ({
  isOpen,
  onClose,
  product,
  client,
  onSimulateInboxArrival
}) => {
  if (!isOpen) return null;

  const [testEmail, setTestEmail] = useState<string>("adityasingh5100@gmail.com");
  const [isSending, setIsSending] = useState<boolean>(false);
  const [isSent, setIsSent] = useState<boolean>(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      onSimulateInboxArrival();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-neutral-900 border border-amber-500/30 rounded-lg shadow-2xl overflow-hidden text-neutral-100">
        
        {/* Header */}
        <div className="px-6 py-4 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-amber-400" />
            <h3 className="font-display text-xs tracking-widest text-amber-300 uppercase">
              Email Pre-Flight & Test Dispatch
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-1 rounded transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSent ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div>
              <p className="font-display text-xs tracking-widest text-emerald-400 uppercase mb-1">
                Dispatched Successfully
              </p>
              <h3 className="font-serif text-2xl text-white">
                Delivered to Primary Inbox
              </h3>
              <p className="text-xs text-neutral-400 mt-2 max-w-sm mx-auto leading-relaxed">
                Test package delivered to <strong className="text-amber-200">{testEmail}</strong> with zero spam flags. Check the simulated inbox tray in the upper corner!
              </p>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 rounded p-4 text-xs space-y-2 text-left">
              <div className="flex justify-between">
                <span className="text-neutral-400">Sender Identity:</span>
                <span className="text-neutral-200">concierge@vauquelin-paris.com</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Authentication:</span>
                <span className="text-emerald-400 font-mono">SPF Pass · DKIM 2048-bit · DMARC</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Deliverability Score:</span>
                <span className="text-amber-300 font-semibold">99.4% (Inbox Placement)</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onClose}
                className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold text-xs tracking-wider uppercase rounded-xs transition-colors cursor-pointer"
              >
                Back to Preview Studio
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSend} className="p-6 space-y-5">
            {/* Preflight Deliverability Checklist */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-md p-3.5 space-y-2 text-xs">
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-amber-400">
                Preflight Deliverability Audit
              </span>

              <div className="flex items-center justify-between text-neutral-300">
                <span>Spam Filter Heuristics:</span>
                <span className="text-emerald-400 font-medium">0.2 / 10.0 (Clean)</span>
              </div>
              <div className="flex items-center justify-between text-neutral-300">
                <span>Text-to-Image Ratio:</span>
                <span className="text-emerald-400 font-medium">58% Text / 42% Media (Optimal)</span>
              </div>
              <div className="flex items-center justify-between text-neutral-300">
                <span>Invisible Preheader Padding:</span>
                <span className="text-emerald-400 font-medium">Active (Zero leak)</span>
              </div>
              <div className="flex items-center justify-between text-neutral-300">
                <span>Mobile Breakpoint (600px):</span>
                <span className="text-emerald-400 font-medium">Fluid Stack Validated</span>
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1.5 uppercase tracking-wider">
                Recipient Email Address
              </label>
              <input
                type="email"
                required
                value={testEmail}
                onChange={(e) => setTestEmail(e.target.value)}
                placeholder="client@private-office.com"
                className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2.5 text-xs text-neutral-200 focus:outline-none focus:border-amber-400"
              />
              <span className="text-[10px] text-neutral-500 mt-1 block">
                Will be populated with client name <strong className="text-neutral-400">{client.name}</strong> and allocation code <strong className="text-amber-400/80">{client.allocationId}</strong>.
              </span>
            </div>

            {/* Send Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSending}
                className="w-full py-3 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-neutral-950 font-display text-xs tracking-[0.2em] font-semibold uppercase rounded-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-950/40"
              >
                {isSending ? (
                  <span>Encrypting & Dispatching...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Dispatch Confidential Test</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
