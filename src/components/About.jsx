import aboutImg from "../assets/TMprofile2.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-50 pd-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 0.5}}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-lg" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: 100}}
        transition={{duration: 0.5}}
        className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-lg"> 
              I'm a software developer passionate about building innovative solutions. 
              My journey includes valuable experience in sales, 
              which honed my communication and problem-solving skills, 
              but my core passion is undeniably in the realm of coding. 
              Proficient in a range of technologies including HTML, CSS, Tailwind CSS, React, Node.js, Express, PostgreSQL, and MongoDB, 
              I am dedicated to designing and developing efficient, user-centric web applications. 
              I am also keenly interested in the transformative potential of blockchain and Web3 technologies, 
              and I'm actively seeking opportunities to incorporate these cutting-edge concepts into my work. 
              Driven by a deep love for coding and a desire to create impactful technology, 
              I firmly believe that where code meets creativity, magic truly happens, 
              leading to solutions that can shape the future.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;