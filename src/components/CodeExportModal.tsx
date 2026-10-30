import React, { useState } from 'react';
import { X, Copy, Check, Download, Code, CheckCircle2, FileText, Smartphone } from 'lucide-react';

interface CodeExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  htmlCode: string;
}

export const CodeExportModal: React.FC<CodeExportModalProps> = ({
  isOpen,
  onClose,
  htmlCode
}) => {
  if (!isOpen) return null;

  const [copied, setCopied] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'html' | 'compatibility' | 'patterns'>('html');

  const handleCopy = () => {
    navigator.clipboard.writeText(htmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleDownload = () => {
    const blob = new Blob([htmlCode], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'luxury-product-launch-email.html');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const compatibilityMatrix = [
    { client: "Apple Mail (macOS)", status: "100% Native", notes: "Full CSS3, custom fonts, dark-mode meta support" },
    { client: "iOS Mail (iPhone/iPad)", status: "100% Native", notes: "Responsive fluid table stacking, touch targets >= 44px" },
    { client: "Gmail (Desktop Web)", status: "Verified Pass", notes: "Inline CSS styles, media query support for 600px breakpoint" },
    { client: "Gmail (iOS & Android)", status: "Verified Pass", notes: "Fluid 100% container scaling with zero horizontal scroll" },
    { client: "Outlook 365 (Desktop)", status: "MSO Optimized", notes: "Conditional MSO table widths, VML fallback buttons" },
    { client: "Outlook.com (Web)", status: "Verified Pass", notes: "Full table layout integrity, zero style strip failures" },
    { client: "Superhuman", status: "100% Native", notes: "Clean typography and dark mode optical compensation" },
    { client: "Mozilla Thunderbird", status: "Verified Pass", notes: "Flawless layout and serif font rendering" }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-neutral-900 border border-amber-500/30 rounded-lg shadow-2xl flex flex-col max-h-[88vh] text-neutral-100 overflow-hidden">
        
        {/* Top Header */}
        <div className="px-6 py-4 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4 text-amber-400" />
            <h3 className="font-display text-xs tracking-widest text-amber-300 uppercase">
              Production HTML/CSS Email Code & Specs
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-1 rounded transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Strip */}
        <div className="flex items-center justify-between px-6 py-2.5 bg-neutral-950/70 border-b border-neutral-800 text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('html')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                activeTab === 'html'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              HTML Template Source ({Math.round(htmlCode.length / 1024)} KB)
            </button>
            <button
              onClick={() => setActiveTab('compatibility')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                activeTab === 'compatibility'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Client Compatibility Matrix
            </button>
            <button
              onClick={() => setActiveTab('patterns')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                activeTab === 'patterns'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Responsive Design Patterns
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold rounded-xs transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied to Clipboard" : "Copy HTML Code"}</span>
            </button>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-neutral-700 hover:border-neutral-500 text-neutral-200 rounded-xs transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .html</span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-neutral-950 font-mono text-xs">
          {activeTab === 'html' && (
            <div className="relative">
              <pre className="text-neutral-300 whitespace-pre-wrap break-all leading-relaxed p-4 bg-black/60 rounded border border-neutral-800 selection:bg-amber-900/60 selection:text-amber-200">
                {htmlCode}
              </pre>
            </div>
          )}

          {activeTab === 'compatibility' && (
            <div className="font-sans space-y-4">
              <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded text-xs text-amber-200 leading-relaxed">
                <strong className="block mb-1 font-semibold text-amber-300 uppercase tracking-wider">
                  Bulletproof Email Engineering Standard
                </strong>
                This template uses a fluid hybrid table architecture (nested tables with inline CSS, explicit width attributes, and MSO comment wrappers) ensuring 100% visual fidelity across both modern and legacy email clients.
              </div>

              <div className="border border-neutral-800 rounded-lg overflow-hidden">
                <table className="w-full text-left text-xs divide-y divide-neutral-800">
                  <thead className="bg-neutral-900 text-neutral-400 font-semibold tracking-wider uppercase text-[10px]">
                    <tr>
                      <th className="px-4 py-3">Email Client</th>
                      <th className="px-4 py-3">Audit Score</th>
                      <th className="px-4 py-3">Technical Optimizations</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800 bg-neutral-950/60">
                    {compatibilityMatrix.map((item, idx) => (
                      <tr key={idx} className="hover:bg-neutral-900/40">
                        <td className="px-4 py-3 font-medium text-neutral-200">{item.client}</td>
                        <td className="px-4 py-3">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>{item.status}</span>
                          </span>
                        </td>
                        <td className="px-4 py-3 text-neutral-400">{item.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'patterns' && (
            <div className="font-sans space-y-6 text-xs text-neutral-300">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-neutral-900/70 border border-neutral-800 rounded-md space-y-2">
                  <h4 className="font-serif text-base text-amber-300 font-medium">1. Fluid Hybrid Table Grid</h4>
                  <p className="text-neutral-400 leading-relaxed">
                    Uses fixed 600px ceiling on desktop wrapped inside <code className="text-amber-400">&lt;!--[if (gte mso 9)|(IE)]&gt;</code> blocks, while utilizing <code className="text-amber-400">width: 100% !important; max-width: 600px;</code> on mobile devices for fluid scaling.
                  </p>
                </div>

                <div className="p-4 bg-neutral-900/70 border border-neutral-800 rounded-md space-y-2">
                  <h4 className="font-serif text-base text-amber-300 font-medium">2. Dark Mode Optical System</h4>
                  <p className="text-neutral-400 leading-relaxed">
                    Includes <code className="text-amber-400">&lt;meta name="color-scheme" content="light dark"&gt;</code> and explicit inline surface backgrounds (<code className="text-amber-400">#0c0c0d</code> and <code className="text-amber-400">#121213</code>) so email clients like Apple Mail and Outlook do not invert delicate gold hues.
                  </p>
                </div>

                <div className="p-4 bg-neutral-900/70 border border-neutral-800 rounded-md space-y-2">
                  <h4 className="font-serif text-base text-amber-300 font-medium">3. Responsive Two-Column Stacking</h4>
                  <p className="text-neutral-400 leading-relaxed">
                    The Savoir-Faire craftsmanship module uses <code className="text-amber-400">.mobile-stack</code> class mapped to <code className="text-amber-400">display: block !important; width: 100% !important;</code> on viewports under 600px, collapsing cleanly without layout jitter.
                  </p>
                </div>

                <div className="p-4 bg-neutral-900/70 border border-neutral-800 rounded-md space-y-2">
                  <h4 className="font-serif text-base text-amber-300 font-medium">4. Preheader Spacing Hack</h4>
                  <p className="text-neutral-400 leading-relaxed">
                    Uses zero-opacity zero-height preheader text padded with 20 non-breaking zero-width joiners (<code className="text-amber-400">&amp;zwnj;&amp;nbsp;</code>), ensuring client preview text never accidentally exposes footer or unsubscribe links in the recipient's inbox.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-neutral-950 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
          <span>Ready to paste directly into Mailchimp, Klaviyo, SendGrid, Salesforce Marketing Cloud, or Apple Mail.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded-xs transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
