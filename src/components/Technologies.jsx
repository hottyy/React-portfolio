import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { BiLogoGit } from 'react-icons/bi';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { BiLogoHtml5 } from 'react-icons/bi';
import { BiLogoCss3 } from 'react-icons/bi';
import { motion } from "framer-motion";


const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y:[10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: "Infinity",
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
  return (
    <motion.div 
    whileInView={{ opacity: 1, x: 0}}
    initial={{opacity: 0, x: -100}}
    transition={{duration: 1.5}}
    className="border-b border-neutral-50 pb-24">
        <motion.h1 
        whileInView={{ opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoHtml5 className="text-4xl text-orange-700"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoCss3 className="text-4xl text-purple-900"/>
            </motion.div>
            <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-4xl text-cyan-400"/>
            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className="text-4xl"/>
            </motion.div>
            <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoTailwindCss className="text-4xl text-cyan-600"/>
            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql className="text-4xl text-blue-700"/>
            </motion.div>
            <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-4xl text-green-500"/>
            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-4xl text-green-700"/>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoGit className="text-4xl text-orange-500"/>
            </motion.div>
        </div>
    </motion.div>
  )
}

export default Technologies
