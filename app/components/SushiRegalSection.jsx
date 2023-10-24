"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const SushiRegalSection = () => {
  return (
    <section className="lg:py-16">
      <div>
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
            <br />
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
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-x-20">
        <div>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I look for his arrows every day I guess he got lost or flew away
            Waiting around is a waste (Waste) Been counting the days since
            November Is loving as good as they say? I look for his arrows every
            day I guess he got lost or flew away Waiting around is a waste
            (Waste) Been counting the days since November Is loving as good as
            they say? I look for his arrows every day I guess he got lost or
            flew away Waiting around is a waste (Waste) Been counting the days
            since November Is loving as good as they say? I look for his arrows
            every day I guess he got lost or flew away Waiting around is a waste
            (Waste) Been counting the days since November Is loving as good as
            they say? 50:50 노래 가사중 ㅋ
          </p>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
          >
            <div className="rounded-3xl bg-[#181818] w-[300px] h-[200px] md:w-[300px] md:h-[200px] lg:w-[400px] lg:h-[270px] xl:w-[510px] xl:h-[350px] relative">
              <Image
                src="/images/salmon_nigiri.png"
                alt="Main dish"
                className="rounded-3xl absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={500}
                height={350}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SushiRegalSection;
