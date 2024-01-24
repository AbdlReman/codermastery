import { motion } from "framer-motion";

import { styles } from "../styles";
import { useState } from "react";

import { shoes } from "../constants";

import { bigShoe1 } from "../assets/images";

import ShoeCard from "./ShoeCard";

const Hero = () => {
  const transition = { duration: 0.8, ease: "easeInOut" };
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/6 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28 lg:pl-28 mx-auto px-10">
        <div className={"lg:pl-14 mx-auto"}>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Coder <span className="text-[#915EFF]">Mastery</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Complete Web Design & Development <br className="sm:block hidden" />
            best user interfaces and fast website
          </p>
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-hero bg-cover bg-center">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }} // Initial state (hidden)
          whileInView={{ opacity: 1, scale: 1 }} // Animation when in view
          transition={transition}
          src={bigShoeImg}
          alt="shoe colletion"
          width={610}
          height={502}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
