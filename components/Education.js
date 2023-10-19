import React from "react";
import { motion } from "framer-motion";
import EducationCard from "./ExperienceCard";
import { Educations } from './constants/constants';

function Education() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Education
      </h3>
      <div className="w-full flex overflow-x-scroll overflow-y-hidden space-x-5  p-10 snap-x snap-mandatory z-20
      scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80" >
        {Educations?.map(({id,image,company,jobTitle,skill,points,date}) => (
          <EducationCard key={id} image={image} company={company} jobTitle={jobTitle} skill={skill} points={points} date={date}/>
        ))}
      </div>
    </motion.div>
  );
}

export default Education;
