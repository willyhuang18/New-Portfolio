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
        <p className="text-base">As a passionate and fast-learning Software Engineer Intern, I am currently pursuing my Master’s degree in Computer Science at Northeastern University. 
        Known for my pleasant demeanor, I have been able to effectively collaborate with my peers and mentors. 
        My academic journey at the renowned Khoury College of Computer Sciences has been marked by a deep dive into algorithms, programming, and software design. 
        The practical experience gained from my internships has allowed me to apply classroom knowledge to real-world problems, providing a deeper understanding of the field. 
        I am driven by a strong desire to become a better engineer, aiming to acquire all the best practices and standards and leverage this knowledge in my day-to-day work. 
        My commitment to continuous learning and improvement is a testament to my dedication to my craft.</p>
        
      </div>
    </motion.div>
  );
}

export default About;
