'use client'

import { FaCode, FaReact, FaTools } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { 
  fadeInUp, 
  fadeInDown, 
  fadeIn, 
  staggerContainer, 
  cardHover, 
  cardHoverSmall 
} from '@/utils/animations'

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>
      
      {/* Bio Section */}
      <motion.section 
        className="mb-16"
        {...fadeInUp}
      >
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I&apos;m Youssef Hamdy, a Front-End React Developer passionate about creating clean, responsive web interfaces using React.js and modern front-end tools. I enjoy turning ideas into interactive and user-friendly designs.
        </p>
      </motion.section>

      {/* Skills Section */}
     <motion.section 
  className="mb-16"
  {...fadeIn}
  transition={{ delay: 0.2 }}
>
  <motion.h2 
    className="section-title"
    {...fadeInUp}
  >
    Skills
  </motion.h2>

  <motion.div 
    className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    variants={staggerContainer}
    initial="initial"
    animate="animate"
  >
    {/* Frontend */}
    <motion.div 
      className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
      variants={fadeInUp}
      {...cardHover}
    >
      <FaCode className="h-8 w-8 text-primary mb-4" />
      <h3 className="text-xl font-semibold mb-2">Frontend</h3>
      <ul className="text-secondary space-y-2">
        <li>React / Next.js</li>
        <li>JavaScript (ES6+)</li>
        <li>Tailwind CSS / Bootstrap</li>
        <li>HTML5 / CSS3</li>
      </ul>
    </motion.div>

    {/* React Ecosystem */}
    <motion.div 
      className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
      variants={fadeInUp}
      {...cardHover}
    >
      <FaReact className="h-8 w-8 text-primary mb-4" />
      <h3 className="text-xl font-semibold mb-2">React Ecosystem</h3>
      <ul className="text-secondary space-y-2">
        <li>Redux / Context API</li>
        <li>React Router</li>
        <li>Component-based Architecture</li>
        <li>Hooks & State Management</li>
      </ul>
    </motion.div>

    {/* Tools & Workflow */}
    <motion.div 
      className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
      variants={fadeInUp}
      {...cardHover}
    >
      <FaTools className="h-8 w-8 text-primary mb-4" />
      <h3 className="text-xl font-semibold mb-2">Tools & Workflow</h3>
      <ul className="text-secondary space-y-2">
        <li>Git / GitHub</li>
        <li>VS Code / Postman</li>
        <li>REST APIs Integration</li>
        <li>Agile / Team Collaboration</li>
      </ul>
    </motion.div>
  </motion.div>
</motion.section>


      {/* Experience Section */}
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Experience
        </motion.h2>

        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* DEPI Program (Ongoing) */}
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Front-End Student — DEPI Program</h3>
            <p className="text-primary mb-2">Remote • Jun 2025 – Jan 2026</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Building responsive React applications and reusable UI components.</li>
              <li>Working with Redux and modern front-end patterns to manage state.</li>
              <li>Participating in weekly code reviews and soft-skills workshops (communication, teamwork).</li>
            </ul>
          </motion.div>

          {/* ITI Internship */}
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Front-End Intern — ITI Internship</h3>
            <p className="text-primary mb-2">Remote • Jul 2025 – Sep 2025</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Built a personal portfolio and a task manager app with full CRUD functionality using React.</li>
              <li>Integrated RESTful APIs and practiced MERN-based workflows (React, Express, Node, MongoDB).</li>
              <li>Worked in an agile environment with frequent feedback and iterative improvements.</li>
            </ul>
          </motion.div>

          {/* SEF Academy */}
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Front-End Diploma — SEF Academy</h3>
            <p className="text-primary mb-2">Remote • Aug 2023 – Feb 2024</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Completed practical tasks using HTML, CSS, JavaScript, React, Redux, and Next.js.</li>
              <li>Developed UI components, implemented routing and props, and built mini projects (landing pages, shopping UI, to-do apps).</li>
              <li>Learned Git/GitHub for version control and collaborated on project structure and reusable components.</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>


          {/* Education Section */}
      <motion.section
        {...fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Education
        </motion.h2>

        <motion.div 
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Information Technology</h3>
            <p className="text-primary mb-2">Egyptian E-Learning University (EELU) • Sep 2022 – Aug 2026</p>
            <p className="text-secondary">
              Pursuing a degree focused on web technologies, programming, and software development.  <br/>
               GPA: <span className="font-semibold">3.02 / 4.0</span>
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

    </div>
  )
} 