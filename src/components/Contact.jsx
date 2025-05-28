import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 flex flex-col items-center justify-center py-10'> 
      <motion.h1 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className='text-center text-4xl mb-6'>
        Get in Touch
        </motion.h1> 
      <div className='flex flex-col items-center justify-center'> 
        <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }} 
        className='my-2 text-center'>
          +27 66 140 7271
        </motion.p> 
        <motion.a 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }} 
        href="#" rel="noreferrer" className='text-center'>
        shaunmok10@gmail.com
        </motion.a>
        <p className='my-2 text-center font-semibold'>South African</p>
      </div>
    </div>
  );
};

export default Contact;