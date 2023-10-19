import { motion } from "framer-motion";
import React from "react";



function EducationCard(education) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] lg:w-[900px] 
    snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={education.image}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{education.name}</h4>
        <div className="flex space-x-2 my-2">
          {education.skill.map((technology,i) => (
            <img
              key={i}
              className="h-10 w-10 rounded-full"
              src={technology}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {education.date}
        </p>
      </div>
    </article>
  );
}

export default EducationCard;
