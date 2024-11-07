import * as FadeIn from "@/components/motion/staggers/fade";

import Image from "next/image";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

const HomepageHero = () => {
  return (
    <div className="relative flex h-[30vh] w-full flex-col items-center justify-center overflow-hidden bg-black-a12 text-white sm:h-[50vh] md:h-[80vh]">
      <div className="absolute inset-0 overflow-hidden opacity-80">
        <Image
          src="/hero-2.svg"
          alt="Background"
          layout="fill"
          objectFit="contain"
          objectPosition="top"
          className="absolute scale-125 opacity-50"
        />
      </div>
      <div className="absolute inset-0 w-full bg-gradient-to-t from-black via-transparent to-black px-12">
        <div className="mx-auto flex h-full flex-col items-center justify-center">
          <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center">
            Make your website looks <br /> 100x with Aura
          </h1>
          <Spacer />
          <FadeIn.Item>
            <h2 className="text-sm md:text-lg lg:text-2xl max-w-4xl text-center">
              Copy paste the most trending components and use them in your
              websites without having to worry about styling and animations.
            </h2>
          </FadeIn.Item>
        </div>
      </div>
      <div className="relative flex h-[600px] w-full flex-row items-center gap-2 ">
        <div className="-left-80 absolute top-10 h-[250px] w-1/4 bg-[#A5FECB] opacity-20 blur-[200px]"></div>

        <div className="-right-80 absolute h-[400px] w-1/4 bg-[#A5FECB] opacity-20 blur-[200px]"></div>
      </div>
    </div>
    // <div className="flex justify-between">
    //   <FadeIn.Item>
    //     <div className="flex items-start justify-start">
    //       <div className="flex flex-col">
    //         <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
    //           Make you website <br /> looks 100x better <br /> with Aura
    //         </h1>
    //       </div>
    //     </div>
    //     <Spacer />
    //     <FadeIn.Item>
    //       <h2 className="text-sm md:text-lg lg:text-xl">
    //         Copy paste the most trending components and use them in your <br />
    //         websites without having to worry about styling and animations.
    //       </h2>
    //     </FadeIn.Item>
    //   </FadeIn.Item>
    //   <div className="h-full w-1/2 ">
    //     <FadeIn.Item>
    //       <div className="flex h-full w-full items-center justify-center gap-2">
    //         <div className="flex h-[400px] flex-1 flex-col items-center justify-center gap-2">
    //           <div className="flex h-full w-full flex-1 items-center justify-center rounded-md">
    //             <video
    //               src="/framer-card.mp4"
    //               loop
    //               autoPlay
    //               muted
    //               className="h-full w-full rounded-lg object-cover"
    //             />
    //           </div>
    //           <div className="flex h-full w-full flex-1 items-center justify-center rounded-lg bg-gray-4">
    //             video-2
    //           </div>
    //         </div>
    //         <div className="flex h-[400px] flex-1 flex-col items-center justify-center rounded-lg bg-gray-4">
    //           verticle video
    //         </div>
    //       </div>
    //     </FadeIn.Item>
    //   </div>
    // </div>
  );
};

export default HomepageHero;
