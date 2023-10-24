"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const SushiRegalSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-secondary-600">
              Sushi Regal
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "우리 쓰시 맛있다",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "맛있으면 바나나",
                2000,
                "바나나는 길어",
                2000,
                "길으면 기차",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I look for his arrows every day I guess he got lost or flew away
            Waiting around is a waste (Waste) Been counting the days since
            November Is loving as good as they say? 50:50 노래 가사중 ㅋ
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-3xl bg-[#181818] w-[250px] h-[250px] lg:w-[360px] lg:h-[360px] relative">
            <Image
              src="/images/sushi.png"
              alt="Main dish"
              className="rounded-3xl absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SushiRegalSection;
