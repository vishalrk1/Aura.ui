"use client"
import { CodeType } from "@/types/component";

import { Check, Copy } from "lucide-react";
import { Highlight, themes } from "prism-react-renderer";
import React, { useState } from "react";

interface PreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  codeblock?: string;
  component?: React.ReactNode;
  code?: CodeType;
}

const Preview = ({ component, code, codeblock, ...props }: PreviewProps) => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!code?.content) return;
    await navigator.clipboard.writeText(code.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <figure
      className="flex flex-col items-center justify-center w-full min-h-96 p-12 mt-2 border rounded-lg relative"
      data-with-codeblock={false}
      {...props}
    >
      <div className="absolute top-3 right-3 flex gap-2 bg-background p-1 rounded-lg">
        <button
          className={`px-3 py-1.5 text-sm rounded-lg transition-all duration-200 ${
            activeTab === "preview"
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
          onClick={() => setActiveTab("preview")}
        >
          Preview
        </button>
        <button
          className={`px-3 py-1.5 text-sm rounded-lg transition-all duration-200 ${
            activeTab === "code"
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
          onClick={() => setActiveTab("code")}
        >
          View Code
        </button>
      </div>

      <div className="w-full h-full flex items-center justify-center">
        {activeTab === "preview" ? (
          component
        ) : (
          <div className="relative w-full h-full">
            {code?.title && (
              <div className="absolute top-2 left-4 text-base text-muted-foreground capitalize">
                {code.title}
              </div>
            )}
            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 p-2 rounded-lg hover:bg-muted/80 transition-all duration-200"
              aria-label={copied ? "Copied!" : "Copy code"}
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <Copy className="w-4 h-4 text-muted-foreground" />
              )}
            </button>
            <Highlight
              theme={themes.dracula}
              code={code?.content.trim() || "// No code available"}
              language={code?.language || "tsx"}
            >
              {({ className, tokens, getLineProps, getTokenProps }) => (
                <pre
                  className={`w-full max-h-[600px] overflow-auto p-4 pt-4 bg-muted/5 rounded-lg ${className}`}
                >
                  {tokens.map((line, i) => (
                    <div
                      {...getLineProps({ line, key: i })}
                      style={{ display: "flex" }}
                    >
                      <span
                        className="text-gray-500 pr-4 select-none"
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
