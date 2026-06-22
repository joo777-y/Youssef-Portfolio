'use client'

import Link from 'next/link';
import { FaCalendarAlt, FaClock, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, cardHoverSmall } from '@/utils/animations';

export default function Blogs() {
  const blogs = [
    {
      slug: "differences-react-vs-next",
      title: `الفرق بين React و Next.js — أيهما تستخدم؟`,
      excerpt: `بعد ما اشتغلت React وبدأت أعمل مشاريع، اكتشفت إن Next.js framework مبني على React ويوفر أدوات زي SSR، SSG، ISR لتحسين سرعة التحميل وSEO. في البوست شرحت CSR، SSR، SSG، ISR ومتى تختار كل واحد منهم.`,
      date: "2025-09-10",
      readTime: "4 min read",
      url: "https://www.linkedin.com/posts/youssef-hamdy-0061b1276_%D8%B3%D9%84%D8%A7%D9%85-%D8%B9%D9%84%D9%8A%D9%83%D9%85-%D8%A8%D8%B9%D8%AF-%D9%85%D8%A7-%D8%AE%D9%84%D8%B5%D8%AA-%D8%A7%D9%84-react-js-%D9%88%D8%A8%D8%AF%D8%A3%D8%AA-activity-7317644751883681792-YwkZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENN7cYBD4sZyxGpVmQr3HJuCqW4hENjw-8"
    },
    {
      slug: "understanding-js-promises",
      title: `Promises في JavaScript — شرح بسيط  `,
      excerpt: `الـ Promise هو وعد إن عملية معينة هتخلص في المستقبل. في البوست شرحت بطريقة بسيطة ليه بنستخدم الـ Promises، وفايدتها، وإزاي نكتب مثال عملي بالـ setTimeout لتوضيح الفكرة.`,
      date: "2025-10-08",
      readTime: "3 min read",
      url: "https://www.linkedin.com/posts/youssef-hamdy-0061b1276_js-promises-frontabrend-activity-7357012371770351616-CvWM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENN7cYBD4sZyxGpVmQr3HJuCqW4hENjw-8"
    },
    {
      slug: "recommended-react-libraries-repost",
      title: `مكتبات لازم تعرفها في React (Repost)`,
      excerpt: `إعادة نشر: قائمة مكتبات مفيدة لكل مشروع React — من إدارة الحالة والـ APIs إلى الستايل والأنيميشن. لمشاركة أدوات تُوفّر وقت وتجعل شغلك أنضف.`,
      date: "2025-10-12",
      readTime: "2 min read",
      url: "https://www.linkedin.com/posts/adel-ahmed-fathelbab_reactjs-frontenddevelopment-frontendtips-activity-7380252627781173248-o93e?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENN7cYBD4sZyxGpVmQr3HJuCqW4hENjw-8"
    },
  ];

  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          {...fadeInUp}
        >
          Latest from LinkedIn
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {blogs.map((blog) => (
            <motion.article
              key={blog.slug}
              className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6 flex flex-col justify-between"
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors text-right">
                  {blog.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-right">
                  {blog.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mt-4">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    {new Date(blog.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center">
                    <FaClock className="mr-2" />
                    {blog.readTime}
                  </span>
                </div>

                <a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline"
                >
                  Read on LinkedIn <FaExternalLinkAlt className="ml-2" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="https://www.linkedin.com/in/youssef-hamdy-0061b1276"
              target="_blank"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              View All on LinkedIn
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
