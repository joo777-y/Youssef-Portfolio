'use client'

import Link from 'next/link';
import Image from 'next/image';
import img from '../../../public/profile.avif'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, scaleIn } from '@/utils/animations';

export default function Hero() {
  return (
    <section className="py-28">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            className='flex justify-center items-center mb-4'
            {...scaleIn}
            transition={{ delay: 0.2 }}
          >
            <Image src={img} alt="Profile" width={250} height={250} className="rounded-full mb-4 w-42 h-42 object-cover ring-2 ring-primary" />
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Hi, I&apos;m <motion.span 
              className="text-primary"
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              Youssef Hamdy
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Front-End React Developer | IT Undergraduate
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-4 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.1 }}
          >
            <motion.a
              href="https://github.com/joo777-y/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/youssef-hamdy-0061b1276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/share/16XpTYegQD/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaFacebook />
            </motion.a>
          </motion.div>
          <motion.div 
            className="flex flex-col md:flex-row justify-center gap-4"
            {...fadeInUp}
            transition={{ delay: 0.1 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
  className="text-center mt-0"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
>
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <a
      href="https://drive.google.com/file/d/15JzZ9Ce9ZT_HvPZy47O5AtPmSoupwe-T/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
    >
      View My CV
    </a>
  </motion.div>
</motion.div>

            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className=" inline-block w-full bg-gray-500  md:w-auto text-gray-800 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 