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
                "Fresh and Flavorful Sushi",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Delicious Sushi Rolls",
                2000,
                "Healthy Japanese Cuisine",
                2000,
                "Authentic Japanese Flavors",
                2000,
                "Elevated Dining Experience",
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
            Welcome to Sushi Regal! At Sushi Regal, we believe in more than just
            serving food; we’re here to offer you an unforgettable culinary
            experience. From the moment you step in, you become a part of our
            family. <br />
            Indulge in the artistry of our sushi rolls, crafted with the
            freshest ingredients and infused with flavors that dance on your
            taste buds. Every dish on our menu is a testament to our passion for
            authentic Japanese cuisine!
            <br />
          </p>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0 }}
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
