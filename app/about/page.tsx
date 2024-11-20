"use client";

import HoverFillButton from "@/components/displayComponents/Button/HoverFillButton/HoverFillButton";
import { Gradient, GradientContainer } from "@/components/gradient";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";

interface DeveloperCardProp {
  name: string;
  designation: string;
  linkedinURL: string;
  twitterURL: string;
  githubURL: string;
  portfolioURL: string;
  imagePath: string;
}

const DevelopersData: DeveloperCardProp[] = [
  {
    name: "Vishal Karangale",
    designation: "SDE @ Jio Platforms Ltd.",
    linkedinURL: "https://linkedin.com/in/vishal-karangale",
    githubURL: "https://github.com/vishalrk1",
    twitterURL: "https://x.com/KarangaleVishal",
    portfolioURL: "https://portfolio-vishalrk.vercel.app/",
    imagePath: "/pfp1.jpeg",
  },

  {
    name: "Raina Saxena",
    designation: "SDE Intern @ Amazon",
    linkedinURL: "https://www.linkedin.com/in/imrainasaxena/",
    githubURL: "https://github.com/rainasaxena",
    twitterURL: "https://twitter.com/Raina1Saxena",
    portfolioURL: "https://raina-saxena.vercel.app/",
    imagePath: "/raina.jpg",
  },
];

const page = () => {
  const text = "Developers Behind Aura.ui";
  const splitText = text.split(" ");

  const contactUs = "Drop us a line";
  const splitTextContact = contactUs.split(" ");

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { amount: 0.2 });

  return (
    <>
      <GradientContainer>
        <Gradient
          position={{ top: 0, left: "-250px" }}
          color="#4d8e9e"
          size={{ height: 250, width: "120%" }}
          blur={200}
        />
        <Gradient
          position={{ top: "550px", right: "-400px" }}
          color="#faf8b4"
          size={{ height: 300, width: "35%" }}
          blur={280}
        />

        <Gradient
          position={{ top: "950px", left: "-400px" }}
          color="#bbfaf9"
          size={{ height: 400, width: "35%" }}
          blur={250}
        />
      </GradientContainer>

      <main className="flex flex-col gap-32 p-8 md:p-20">
        <div className="mt-[90px] md:mt-[120px] items-center flex flex-col md:flex-row gap-10 md:gap-0 justify-center md:justify-between">
          <div className="md:w-1/2 flex flex-col gap-4">
            <div className="text-3xl md:text-5xl font-extralight">
              <div className="">Innovating UI,</div>
              <div className="">One Component at a Time</div>
            </div>

            <div className="flex gap-3">
              <a
                href="/components"
                className="text-center text-sm md:text-xl p-2 md:p-4 h-max w-24 md:w-36 rounded-lg bg-[#191e1f] border-2 border-[#292d2e] hover:bg-[#272f30] hover:scale-105 transition-all duration-200"
              >
                Explore
              </a>
              <a
                href="/components"
                className="text-center text-sm md:text-xl p-2 md:p-4 h-max w-24 md:w-36 rounded-lg bg-[#191e1f] border-2 border-[#292d2e] hover:bg-[#272f30] hover:scale-105 transition-all duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="md:w-1/2 h-80 flex gap-2 items-center justify-center">
            <div className="p-2 w-1/2 h-full  flex flex-col gap-2 ">
              <div className="rounded-md h-1/2 bg-[#191e1f]">
                <video
                  className="object-cover h-full w-full"
                  loop
                  autoPlay
                  muted
                  src="/framer-card.mp4"
                ></video>
              </div>
              <div className="rounded-md h-1/2 bg-[#191e1f]">vid2</div>
            </div>
            <div className="rounded-md p-2 w-1/2 h-full bg-[#191e1f]">vid3</div>
          </div>
        </div>

        <section className="flex flex-col gap-10 md:gap-20">
          <motion.div
            className="text-center text-3xl md:text-5xl font-extralight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            ref={ref}
            transition={{ duration: 1 }}
          >
            {splitText.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView && { opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.5,
                }}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.div>

          <div className="md:px-60 grid sm:grid-cols-2 gap-8 md:gap-12">
            {DevelopersData.map((item, index) => {
              return (
                <div className="items-center justify-start md:justify-center p-6 md:p-4 flex gap-10 md:gap-11 hover:bg-[#191e1f] hover:border-2 hover:scale-105 hover: border-[#292d2e] transition-all ease-in duration-200  rounded-lg">
                  <div className="h-20 md:h-28 w-20 md:w-28 ">
                    <img
                      className="object-cover h-full w-full rounded-full"
                      src={item.imagePath}
                    />
                  </div>
                  <div className="flex flex-col md:gap-2">
                    <h1 className="m-0 text-lg md:text-3xl font-extralight">
                      {item.name}
                    </h1>
                    <h2 className="m-0 mb-1 text-md text-white-a6">
                      {item.designation}
                    </h2>
                    <div className="flex gap-3 items-center">
                      <Link href={item.twitterURL} target="_blank">
                        <img
                          src="/twitter-x.svg"
                          className="h-4 md:h-6 w-4 md:w-6"
                        />
                      </Link>
                      <Link href={item.linkedinURL} target="_blank">
                        <img
                          src="/linkedin.svg"
                          className="h-4 md:h-6 w-4 md:w-6"
                        />
                      </Link>
                      <Link href={item.githubURL} target="_blank">
                        <img
                          src="/github.svg"
                          className="h-4 md:h-6 w-4 md:w-6"
                        />
                      </Link>
                      ~
                      <Link href={item.portfolioURL} target="_blank">
                        Portfolio
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="flex flex-col gap-8 md:gap-20">
          <motion.div
            className="text-center text-3xl md:text-5xl font-extralight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            ref={ref1}
            transition={{ duration: 1 }}
          >
            {splitTextContact.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView1 && { opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.5,
                }}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.div>

          <form className="md:px-96 flex flex-col gap-4" action="">
            <div className="w-full items-center justify-center flex gap-4">
              <input
                className="w-full rounded-lg p-4"
                placeholder="Enter your name"
              ></input>

              <input
                className="w-full rounded-lg p-4"
                placeholder="Enter your e-mail"
              ></input>
            </div>

            <textarea
              className="rounded-lg p-4"
              placeholder="Type your message"
            ></textarea>
            <div className="flex w-full justify-end items-center">
              <HoverFillButton className="rounded-lg w-20">
                Submit
              </HoverFillButton>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default page;
