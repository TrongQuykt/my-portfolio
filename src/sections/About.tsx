import { motion } from 'framer-motion';
import { Layers, Cpu, Brain } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="box-border w-full min-w-0 max-w-7xl mx-auto overflow-x-hidden px-4 sm:px-6 lg:px-8 pt-10 pb-14 sm:pt-16 sm:pb-20 lg:pt-24 lg:pb-24 scroll-mt-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 w-full min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 w-full min-w-0 max-w-full text-left"
        >
          <h2 className="font-headline font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-3 sm:mb-6 break-words">
            About Me.
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mb-0 max-w-full min-w-0 break-words [overflow-wrap:anywhere]">
            I am a passionate Fullstack Developer with a strong focus on building scalable, high-performance systems. With
            experience in backend architecture, cloud infrastructure, and modern web technologies, I strive to create
            efficient, reliable, and user-centric solutions.
          </p>
          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mt-4 max-w-full min-w-0 break-words [overflow-wrap:anywhere]">
            I enjoy working with technologies like JavaScript, PHP, MySQL and cloud platforms such as AWS, while
            continuously exploring AI integration and system optimization.
          </p>
          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mt-4 max-w-full min-w-0 break-words [overflow-wrap:anywhere]">
            Driven by curiosity and precision, I aim to engineer solutions that are not only functional but also elegant
            and impactful.
          </p>
        </motion.div>

        <div className="lg:col-span-7 w-full min-w-0 max-w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel box-border p-5 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl border border-white/5 hover:border-white/20 transition-all w-full min-w-0 max-w-full text-left"
            >
              <div className="flex flex-row items-start gap-3 sm:gap-4 mb-3 sm:mb-4 min-w-0">
                <Layers className="text-tertiary shrink-0 w-8 h-8 sm:w-9 sm:h-9" size={36} />
                <h3 className="font-headline font-bold text-base sm:text-lg md:text-xl text-white leading-snug min-w-0 break-words">
                  Full Stack Development
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed break-words [overflow-wrap:anywhere] min-w-0">
                Building complete web applications from responsive frontend to robust backend and database. Proficient in
                PHP (MVC), Java Spring Boot, ASP.NET MVC, and real-world projects including e-commerce and event
                platforms.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel box-border p-5 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl border border-white/5 hover:border-white/20 transition-all w-full min-w-0 max-w-full text-left"
            >
              <div className="flex flex-row items-start gap-3 sm:gap-4 mb-3 sm:mb-4 min-w-0">
                <Cpu className="text-secondary shrink-0 w-8 h-8 sm:w-9 sm:h-9" size={36} />
                <h3 className="font-headline font-bold text-base sm:text-lg md:text-xl text-white leading-snug min-w-0 break-words">
                  Cloud Architecture
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed break-words [overflow-wrap:anywhere] min-w-0">
                Designed and deployed production-grade 3-tier architectures on AWS (CloudFront + S3, EC2 + Auto Scaling +
                ELB, RDS, WAF, Route 53). Focused on high availability, performance, and cost optimization.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-panel box-border p-5 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl border border-white/5 hover:border-white/20 transition-all w-full min-w-0 max-w-full text-left"
            >
              <div className="flex flex-row items-start gap-3 sm:gap-4 mb-3 sm:mb-4 min-w-0">
                <Layers className="text-tertiary shrink-0 w-8 h-8 sm:w-9 sm:h-9" size={36} />
                <h3 className="font-headline font-bold text-base sm:text-lg md:text-xl text-white leading-snug min-w-0 break-words">
                  System Design
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed break-words [overflow-wrap:anywhere] min-w-0">
                Designed scalable MVC and 3-tier systems with clean architecture. Built full-featured modules: user
                management, admin dashboards, payments (VNPay, MoMo, Stripe), and automated email systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass-panel box-border p-5 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl border border-white/5 hover:border-white/20 transition-all w-full min-w-0 max-w-full text-left"
            >
              <div className="flex flex-row items-start gap-3 sm:gap-4 mb-3 sm:mb-4 min-w-0">
                <Brain className="text-emerald-400 shrink-0 w-8 h-8 sm:w-9 sm:h-9" size={36} />
                <h3 className="font-headline font-bold text-base sm:text-lg md:text-xl text-white leading-snug min-w-0 break-words">
                  AI & Machine Learning
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed break-words [overflow-wrap:anywhere] min-w-0">
                Applied Machine Learning and Deep Learning to real-world problems. Achieved 99% accuracy diabetes
                prediction (XGBoost) and 98% accuracy Alzheimer’s detection (CNN + Attention Mechanism).
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
