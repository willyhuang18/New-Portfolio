import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as skills } from './constants/constants';

function Skills() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute tracking-[3px] uppercase top-36 text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>
      <div className="grid grid-cols-4 gap-5 pt-40">
        {skills.slice(0, skills.length / 2).map((skill, i) => (
          <Skill key={i} skill={skill} />
        ))}
        {skills.slice(skills.length / 2, skills.length).map((skill,i) => (
          <Skill  key={i} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
