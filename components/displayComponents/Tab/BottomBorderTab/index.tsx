"use client";

import type React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

interface Tab {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface BottomBorderTabProps {
  tabs: Tab[];
  borderColor?: string;
  initialTabId?: string;
  activeTabClass?: string;
  inactiveTabClass?: string;
}

const BottomBorderTab: React.FC<BottomBorderTabProps> = ({
  tabs,
  borderColor = "bg-blue-500",
  initialTabId,
  activeTabClass = "text-white",
  inactiveTabClass = "text-primary",
}) => {
  const defaultTabId = initialTabId || tabs[0].id;
  const [activeTab, setActiveTab] = useState(defaultTabId);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(
    tabs.findIndex((tab) => tab.id === defaultTabId),
  );
  const [sliderWidth, setSliderWidth] = useState<number>(0);
  const [sliderOffset, setSliderOffset] = useState<number>(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const setTabRef = (index: number) => (el: HTMLButtonElement | null) => {
    tabRefs.current[index] = el;
  };

  useLayoutEffect(() => {
    const activeTabElement = tabRefs.current[activeTabIndex];
    if (activeTabElement) {
      setSliderWidth(activeTabElement.offsetWidth);
      setSliderOffset(activeTabElement.offsetLeft);
    }
  }, [activeTabIndex]);

  return (
    <div className="my-4 w-full overflow-hidden px-4 md:px-6 xl:px-20">
      <div className="relative w-full">
        <div className="flex w-full rounded-t-xl">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              type="button"
              ref={setTabRef(index)}
              className={`flex-1 px-4 py-2 font-medium text-sm md:text-xl ${
                activeTab === tab.id ? activeTabClass : inactiveTabClass
              }`}
              onClick={() => {
                setActiveTab(tab.id);
                setActiveTabIndex(index);
              }}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <motion.div
          className={`absolute bottom-0 h-0.5 ${borderColor}`}
          initial={false}
          animate={{
            width: sliderWidth,
            x: sliderOffset,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="my-4 flex w-full flex-col gap-10 p-4 text-sm md:text-base"
        >
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default BottomBorderTab;
