"use client";

import type { Language } from "prism-react-renderer";
import type React from "react";

import GradientText from "@/components/displayComponents/Text/GradientText/GradientText";

import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  ChevronDown,
  ChevronUp,
  Copy,
  Home,
  Mail,
  Trash,
  User,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Highlight, themes } from "prism-react-renderer";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import ExpandableIcons from "../displayComponents/Other/ExpandableIcons";

interface GetStartedPreviewProps {
  initialTab?: "code" | "component";
  sampleCode?: string;
  language?: Language;
  className?: string;
}

interface TabButtonProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({
  isActive,
  onClick,
  children,
}) => (
  <button
    type="button"
    onClick={onClick}
    className={twMerge(
      "rounded-lg px-6 py-2 transition-all duration-150",
      isActive ? "bg-[#1A1A1A]" : "hover:bg-grayBg/50",
    )}
  >
    <span className="text-base sm:text-xl">{children}</span>
  </button>
);

const DEFAULT_CODE = `
<ExpandableIcons
  isOpen={isOpen}
  setIsOpen={setIsOpen}
  icons={[
    {
      name: "Home",
      icon: <Home className="text-grayBg"/>,
    },
    {
      name: "Mail",
      icon: <Mail className="text-grayBg"/>,
    },
    {
      name: "Profile",
      icon: <User className="text-grayBg"/>,
    },
    {
      name: "Profile",
      icon: <Trash className="text-red-400"/>,
    }
  ]}
/>
`;

const GetStartedPreview: React.FC<GetStartedPreviewProps> = ({
  initialTab = "component",
  sampleCode = DEFAULT_CODE,
  language = "tsx",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"code" | "component">(initialTab);
  const [copied, setCopied] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const { theme } = useTheme();

  const handleCopy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(sampleCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy code:", error);
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const CodeButton: React.FC<{ expanded: boolean; onClick: () => void }> = ({
    expanded,
    onClick,
  }) => (
    <motion.button
      onClick={onClick}
      className="relative z-10 mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-muted/10 py-2 transition-colors hover:bg-muted/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <span>{expanded ? "Hide code" : "See full code"}</span>
      {expanded ? (
        <ChevronUp className="h-4 w-4" />
      ) : (
        <ChevronDown className="h-4 w-4" />
      )}
    </motion.button>
  );

  return (
    <div
      className={`flex w-full flex-col items-center justify-start py-12 ${className}`}
    >
      <div className="bg-[#5edbe6] p-2 rounded-md text-sm md:text-lg">QUICK START</div>
      <GradientText text="Get Started Today" className="text-3xl md:text-5xl mb-1" />
      <h2 className="hidden sm:block text-xs sm:text-base mb-4 w-[60%] text-center text-muted-foreground">
        We've crafted animations that are lightweight and optimized, so you can
        add beautiful effects without sacrificing speed. Copy components
        directly into your project and get seamless integration for all
        animation needs.
      </h2>

      <div className="mt-6 flex w-full max-w-4xl flex-col items-center gap-4">
        <div className="flex flex-row items-center justify-center gap-4">
          <TabButton
            isActive={activeTab === "code"}
            onClick={() => setActiveTab("code")}
          >
            Code
          </TabButton>
          <TabButton
            isActive={activeTab === "component"}
            onClick={() => setActiveTab("component")}
          >
            View Component
          </TabButton>
        </div>

        <div className="sm:min-h-[400px] w-[80%] sm:w-full rounded-lg border-2 border-grayBorder px-6 py-2">
          {activeTab === "component" ? (
            <div className="flex min-h-[400px] items-center justify-center">
              <ExpandableIcons
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                icons={[
                  {
                    name: "Home",
                    icon: <Home className="text-grayBg" />,
                  },
                  {
                    name: "Mail",
                    icon: <Mail className="text-grayBg" />,
                  },
                  {
                    name: "Profile",
                    icon: <User className="text-grayBg" />,
                  },
                  {
                    name: "Profile",
                    icon: <Trash className="text-red-400" />,
                  },
                ]}
              />
            </div>
          ) : (
            <div className="relative h-full w-full">
              <button
                onClick={handleCopy}
                type="button"
                className="absolute top-2 right-2 z-10 rounded-lg transition-all hover:bg-muted/80"
                aria-label={copied ? "Copied!" : "Copy code"}
              >
                {copied ? (
                  <Check className="h-5 w-5 text-green-500" />
                ) : (
                  <Copy className="h-5 w-5 text-muted-foreground" />
                )}
              </button>
              <Highlight
                theme={theme === "dark" ? themes.vsDark : themes.github}
                code={sampleCode}
                language={language}
              >
                {({ className, tokens, getLineProps, getTokenProps }) => (
                  <motion.div
                    className="relative"
                    initial={false}
                    animate={{ height: isExpanded ? "auto" : "375px" }}
                    exit={{ height: "375px" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <pre className={`overflow-hidden rounded-lg ${className}`}>
                      {tokens
                        .slice(0, isExpanded ? tokens.length : 15)
                        .map((line, i) => (
                          <div
                            key={i}
                            {...getLineProps({ line })}
                            className="flex"
                          >
                            <span
                              className="select-none pr-4 text-muted-foreground"
                              style={{ minWidth: "2em", textAlign: "right" }}
                            >
                              {i + 1}
                            </span>
                            <span>
                              {line.map((token, key) => (
                                <span
                                  key={key}
                                  {...getTokenProps({ token, key })}
                                />
                              ))}
                            </span>
                          </div>
                        ))}
                    </pre>
                    {tokens.length > 15 && (
                      <motion.div
                        className="absolute bottom-0 left-0 w-full"
                        initial={false}
                      >
                        <AnimatePresence>
                          {!isExpanded && (
                            <motion.div
                              className="pointer-events-none absolute bottom-0 h-20 w-full bg-gradient-to-t from-background to-transparent"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            />
                          )}
                        </AnimatePresence>
                        <AnimatePresence mode="wait">
                          <CodeButton
                            expanded={isExpanded}
                            onClick={toggleExpand}
                            key={isExpanded ? "hide" : "show"}
                          />
                        </AnimatePresence>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </Highlight>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetStartedPreview;
