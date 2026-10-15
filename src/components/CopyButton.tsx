import { useEffect, useState } from "react";

export function CopyButton({ text, label = "Copy", className = "copy-btn" }: { text: string; label?: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => setCopied(false), 1600);
    return () => window.clearTimeout(id);
  }, [copied]);
  return (
    <button
      type="button"
      className={className}
      onClick={() => navigator.clipboard?.writeText(text).then(() => setCopied(true), () => {})}
    >
      {copied ? "Copied" : label}
    </button>
  );
}
