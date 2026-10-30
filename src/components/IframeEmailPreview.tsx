import React from 'react';

interface IframeEmailPreviewProps {
  htmlContent: string;
}

export const IframeEmailPreview: React.FC<IframeEmailPreviewProps> = ({ htmlContent }) => {
  return (
    <div className="w-full h-full min-h-[750px] bg-neutral-950 flex flex-col">
      <div className="py-2 px-4 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>Native HTML Email Sandbox (Apple Mail & Outlook Engine Emulation)</span>
        </span>
        <span className="text-[11px] text-amber-400/80">
          Rendered via 600px MSO-compliant table schema
        </span>
      </div>
      <iframe
        title="Email Template Render Sandbox"
        srcDoc={htmlContent}
        className="w-full flex-1 border-0 min-h-[820px] bg-[#0c0c0d]"
        sandbox="allow-same-origin allow-scripts"
      />
    </div>
  );
};
