import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";


export default function Header() {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/*Social Icons*/}
        <SocialIcon
            url="https://www.youtube.com/"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://twitter.com"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://github.com/willyhuang18"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/pangta-huang-2b7b0117a/"
            fgColor="gray"
            bgColor="transparent"
          />
         <SocialIcon
            url="https://docs.google.com/document/d/1Z-jNAnMSRSTQDyQoDGR_QHdMG9cQ_bRbIdnk12pur8M/edit"
            fgColor="gray"
            bgColor="transparent"
          />
      </motion.div>
      
      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
           
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
