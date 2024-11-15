export const HOME_DEFAULT_CODE = `
import { motion } from "framer-motion";

import ProgressCard from ".";
import NormalButton from "../../Button/NormalButton";
import { Check } from "lucide-react";

export function ProgressCardExample() {
  const steps: ReactNode[] = [
    <div key="1" className="flex flex-col gap-1 p-6">
      <h1>Forge Your Gaming Legend</h1>
      <p className="mt-3 rounded-lg border border-[#F1F1F1] border-dashed bg-[#FAFAFA] p-3 text-[#525252] text-sm dark:border-[#222222] dark:bg-[#171717] dark:text-[#d4d4d4]">
        With your ambitions in sight, we’re ready to craft a personalized gaming
        strategy. Our advanced system adapts to your playstyle and pace to help
        you achieve your goals.
      </p>
      <div className="my-2 flex items-center justify-between rounded-xl bg-gradient-to-r from-[#9ae1ff] to-[#c8f4db] px-4 py-3">
        <p className="m-0 font-bold text-grayBg">Your Unique Gaming Strategy</p>
        <p className="m-0 font-bold text-grayBg">85% Match</p>
      </div>
      <h2 className="m-0 w-full p-0 font-semibold">
        This plan includes tailored challenges, immersive quests, and skill
        building missions to ensure you level up with confidence and precision.
      </h2>
    </div>,
    <div key="2" className="flex flex-col gap-1 p-6">
      <h1>Level Up Your Game</h1>
      <p className="mt-3 rounded-lg border border-[#F1F1F1] border-dashed bg-[#FAFAFA] p-3 text-[#525252] text-sm dark:border-[#222222] dark:bg-[#171717] dark:text-[#d4d4d4]">
        Great adventures start with small victories. Let’s break your gaming
        journey into achievable levels and milestones to keep you motivated and
        progressing.
      </p>
      <div className="my-2 flex flex-col gap-2">
        <div className="flex w-full items-center justify-between">
          <p className="m-0 font-semibold">Conquer the First Quest</p>
          <p className="m-0 text-sm text-green-600">Quick Achievement!</p>
        </div>
        <div className="h-2 w-full rounded-full bg-grayBorder">
          <motion.div
            layout
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1, originX: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="h-full rounded-full bg-green-500"
            style={{ width: "35%" }}
          />
        </div>
        <h2 className="mt-2 font-light">
          Every mission completed is a step closer to mastery. Celebrate every
          win, big or small, as you continue your path to gaming greatness!
        </h2>
      </div>
    </div>,
    <div key="3" className="flex flex-col p-6">
      <div className="flex w-full items-center justify-between">
        <h1>Unlock Your Payment Potential</h1>
        <NormalButton className="w-max rounded-lg px-3 py-2 font-normal text-sm">Show Detail</NormalButton>
      </div>
      <p className="mt-3 rounded-lg border border-[#F1F1F1] border-dashed bg-[#FAFAFA] p-3 text-[#525252] text-sm dark:border-[#222222] dark:bg-green-600/20 dark:text-white-a12">
        Great adventures start with small victories. Let’s break your gaming
        journey into achievable levels and milestones to keep you motivated and
        progressing.
      </p>
      <div className="flex flex-col gap-2 items-start mt-4">
        <div className="flex items-center gap-2">
          <Check size={20} className="text-green-500"/>
          <h2 className="m-0 p-0">Flexible Payment Options – Choose what suits you.</h2>
        </div>
        <div className="flex items-center gap-2">
          <Check size={20} className="text-green-500"/>
          <h2 className="m-0 p-0">Real-Time Tracking – Stay updated instantly.</h2>
        </div>
        <div className="flex items-center gap-2">
          <Check size={20} className="text-green-500"/>
          <h2 className="m-0 p-0">Reward Opportunities – Earn while paying.</h2>
        </div>
      </div>
      <button type="button" className="py-2 w-full rounded-xl mt-4 bg-green-700/80 hover:bg-green-600 transition-all duration-100">
        Start Playing
      </button>
    </div>,
  ];

  return <ProgressCard steps={steps} />;
}
`;