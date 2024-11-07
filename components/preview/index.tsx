"use client";

import type { CodeType } from "@/types/component";
import type React from "react";

import { Check, Copy } from "lucide-react";
import { useTheme } from "next-themes";
import { Highlight, themes } from "prism-react-renderer";
import { useState } from "react";

interface PreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  codeblock?: string;
  component?: React.ReactNode;
  code?: CodeType;
}

const Preview = ({ component, code, codeblock, ...props }: PreviewProps) => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();

  const handleCopy = async () => {
    if (!code?.content) return;
    await navigator.clipboard.writeText(code.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <figure
      className="relative mt-2 flex min-h-96 w-full flex-col items-center justify-center rounded-lg border p-12"
      data-with-codeblock={false}
      {...props}
    >
      <div className="absolute top-3 right-3 flex gap-2 rounded-lg bg-background p-1">
        <button
          className={`rounded-lg px-3 py-1.5 text-sm transition-all duration-200 ${
            activeTab === "preview"
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
          onClick={() => setActiveTab("preview")}
        >
          Preview
        </button>
        <button
          className={`rounded-lg px-3 py-1.5 text-sm transition-all duration-200 ${
            activeTab === "code"
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
          onClick={() => setActiveTab("code")}
        >
          View Code
        </button>
      </div>

      <div className="flex h-full w-full items-center justify-center">
        {activeTab === "preview" ? (
          component
        ) : (
          <div className="relative h-full w-full">
            {code?.title && (
              <div className="absolute top-2 left-4 text-base text-muted-foreground capitalize">
                {code.title}
              </div>
            )}
            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 rounded-lg p-2 transition-all duration-200 hover:bg-muted/80"
              aria-label={copied ? "Copied!" : "Copy code"}
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 text-muted-foreground" />
              )}
            </button>
            <Highlight
              theme={theme === "dark" ? themes.vsDark : themes.github}
              code={code?.content.trim() || "// No code available"}
              language={code?.language || "tsx"}
            >
              {({ className, tokens, getLineProps, getTokenProps }) => (
                <pre
                  className={`max-h-[600px] w-full overflow-auto rounded-lg bg-muted/5 p-4 pt-4 ${className}`}
                >
                  {tokens.map((line, i) => (
                    <div
                      {...getLineProps({ line, key: i })}
                      style={{ display: "flex" }}
                    >
                      <span
                        className="select-none pr-4 text-gray-500"
                        style={{ minWidth: "2em", textAlign: "right" }}
                      >
                        {i + 1}
                      </span>
                      <span>
                        {line.map((token, key) => (
                          <span {...getTokenProps({ token, key })} />
                        ))}
                      </span>
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </div>
        )}
      </div>
    </figure>
  );
};

export default Preview;
