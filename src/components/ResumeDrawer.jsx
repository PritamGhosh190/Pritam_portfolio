import React, { useState, useEffect } from "react";
import { FileText, Download, X } from "lucide-react";
import { CONFIG, colors } from "../config";

export function ResumeDrawer({ open, onClose }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (open) {
      setLoading(true);
      const t = setTimeout(() => setLoading(false), 750);
      return () => clearTimeout(t);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(5,8,15,0.7)", backdropFilter: "blur(2px)" }}
        onClick={onClose}
      />
      <aside
        className="resume-drawer relative w-full sm:max-w-md md:max-w-lg h-full flex flex-col"
        style={{ backgroundColor: colors.panel, borderLeft: `1px solid ${colors.border}` }}
      >
        <div
          className="flex items-center justify-between gap-3 px-4 sm:px-6 py-4 shrink-0"
          style={{ borderBottom: `1px solid ${colors.border}` }}
        >
          <div className="flex items-center gap-2 min-w-0">
            <FileText size={16} style={{ color: colors.coral }} className="shrink-0" />
            <span className="text-sm truncate" style={{ color: colors.text }}>
              {CONFIG.resumeFileName}
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={CONFIG.resumeUrl}
              download={CONFIG.resumeFileName}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-transform hover:scale-105"
              style={{ backgroundColor: colors.coral, color: colors.ink }}
            >
              <Download size={15} strokeWidth={2} />
              <span className="hidden sm:inline">Download</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="flex items-center justify-center w-9 h-9 rounded-lg transition-colors"
              style={{ color: colors.muted }}
              onMouseEnter={(e) => (e.currentTarget.style.color = colors.text)}
              onMouseLeave={(e) => (e.currentTarget.style.color = colors.muted)}
              aria-label="Close resume"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="flex-1 relative overflow-hidden" style={{ backgroundColor: colors.ink }}>
          {loading ? (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-sm"
              style={{ color: colors.muted }}
            >
              <span>Loading resume…</span>
              <div className="w-40 h-1 rounded-full overflow-hidden" style={{ backgroundColor: colors.border }}>
                <div className="h-full loading-bar" style={{ backgroundColor: colors.coral }} />
              </div>
            </div>
          ) : (
            <iframe
              // #toolbar=0 drops the browser's native PDF toolbar (we already have our own
              // header), #navpanes=0 hides the page-thumbnail sidebar, and view=FitH makes
              // the page fill the iframe's full width instead of floating in the middle.
              src={`${CONFIG.resumeUrl}#toolbar=0&navpanes=0&view=FitH`}
              title="Resume PDF preview"
              className="w-full h-full border-0 pdf-fade-in"
            />
          )}
        </div>
      </aside>
    </div>
  );
}
