import React from 'react'
import { motion } from "framer-motion";
import { projects, ExternalLinks} from './constants/constants';

function Projects() {
  return (
    <motion.div 
    initial={{
        opacity:0,
    }}
    transition={{
        duration: 1.5,
    }}
    whileInView={{opacity:1}}
    className='flex flex-col relative h-screen overflow-hidden text-left md:flex-row 
    max-w-full  justify-evenly mx-auto items-center z-0'
    >
    <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3> 
    <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
    scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {projects.map(({id,image, title, description, tags, source,visit}) => 
        <div key={id} className='w-screen flex-shrink-0 snap-center flex flex-col 
        space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <motion.img 
            initial={{
                y:-300,
                opacity:0,
            }}
            transition={{duration: 1.2}}
            whileInView={{opacity:1, y:0}}
            viewport={{once: true}}
            src={image}
             alt="" 
             className='md:w-95 md:h-95 xl:w-[1000px] xl:h-[600px]'/>
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-4xl font-semibold text-center'>
                    <span className='underline decoration-[#F7AB0A]'>Case study {id + 1} of {projects.length}: </span>
                     {title}
                </h4>
                <div className='flex items-center space-x-2 justify-center'>
                    {tags.map((technology,i) =>(
                        <img className='h-10 w-15 rounded-full' key={i} src={technology} alt="" />
                    ))}
                </div>
                <p className='text-lg text-center md:text-left'>{description} </p>
               <div className='flex flex-row justify-center items-center space-x-4'>
                <button href={visit} className="heroButton text-2xl">View</button>
                <button href={source} className="heroButton text-2xl">Source</button>
               </div>
            </div>
        </div>
        )}
    </div>
    <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/>
    </motion.div>
  )
}

export default Projects