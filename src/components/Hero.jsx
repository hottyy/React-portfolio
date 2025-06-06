import profile from "../assets/TMprofile1.jpg";
import { motion } from "framer-motion";

const container = ({delay}) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.5, delay: delay},
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-50 pd-4 lg:mb-35">
      <div className="flex flex-wrap lg:flex-row-reverse items-center"> 
        <div className="w-full lg:w-1/2 p-4"> 
          <div className="flex justify-center">
            <motion.img 
            initial={{x: 100, opacity: 0}}
            animate={{x:0, opacity: 1}}
            transition={{duration: 1, delay: 1.2}}
            src={profile} alt="Tebogo mokwena" className="max-w-full h-auto rounded-lg" /> 
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-4"> 
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-4 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Tebogo TS Mokwena</motion.h1> 
            <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible" 
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </motion.span>
            <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 font-light tracking-tighter">
             I'm a Software developer specializing in web apps. 
             I find solace in coding, where I craft digital harmonies that echo my imagination. 
             My aim is to build compelling and seamless digital experiences that resonate with users. 
             I'm constantly exploring new ways to bring creative ideas to life through the power of code.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;