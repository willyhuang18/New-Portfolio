import React from "react";
import { motion } from "framer-motion";



function About({ }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="/images/profile.jpg"
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover 
    md:rounded-lg md:h-95 xl:w-[500px] xl:h-[600px]'
      />
      <div className=" -mt-20 space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">little</span>{" "}
          background
        </h4>
        <p className="text-base">My name is  Willy. I am looking for a fulltime/intern Backend / Full-Stack Developer position.             I am Chinese and moved to the USA in 2013. I graduated from San Jose State University with,             a major in Behavioral Science, with a minor in Business in 2021. Right after graduating from SJSU, one of my             computer science friends took me to the Science and Technology Exhibition, from there I saw a lot of             products created by programming and got attracted to coding.              And then I joined the University of California,Berkeley Extension, Coding BootCamp.             I had to Attend a 12-week intensive program focused on gaining technical programming skills and              developing web applications with other participants.              After the Bootcamp, I also learned more about full stack from Learning Site called Udemy.              Right now, I am self-taught Java and using it for Algorithms and data structure.</p>
      </div>
    </motion.div>
  );
}

export default About;
