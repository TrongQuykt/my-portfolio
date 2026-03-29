import { motion } from 'framer-motion';
import { Layers, Cpu, Brain } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-12 gap-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-5"
        >
          <h2 className="font-headline font-black text-5xl tracking-tight text-white mb-6">About Me.</h2>
          <p className="text-on-surface-variant leading-relaxed mb-8">
            I am a passionate Fullstack Developer with a strong focus on building scalable, high-performance systems. 
With experience in backend architecture, cloud infrastructure, and modern web technologies, I strive to create efficient, reliable, and user-centric solutions.

I enjoy working with technologies like JavaScript, PHP, MySQL and cloud platforms such as AWS, while continuously exploring AI integration and system optimization.

Driven by curiosity and precision, I aim to engineer solutions that are not only functional but also elegant and impactful.
          </p>
        </motion.div>
        
        <div className="col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-max">
  
  {/* Card 1 - Full Stack Development */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.1 }}
    className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all"
  >
    <div className="flex items-center gap-4 mb-4">
      <Layers className="text-tertiary flex-shrink-0" size={40} />
      <h3 className="font-headline font-bold text-xl text-white">Full Stack Development</h3>
    </div>
    <p className="text-sm text-on-surface-variant">
      Building complete web applications from responsive frontend to robust backend and database. 
      Proficient in PHP (MVC), Java Spring Boot, ASP.NET MVC, and real-world projects including e-commerce and event platforms.
    </p>
  </motion.div>

  {/* Card 2 - Cloud Architecture */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.2 }}
    className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all"
  >
    <div className="flex items-center gap-4 mb-4">
      <Cpu className="text-secondary flex-shrink-0" size={40} />
      <h3 className="font-headline font-bold text-xl text-white">Cloud Architecture</h3>
    </div>
    <p className="text-sm text-on-surface-variant">
      Designed and deployed production-grade 3-tier architectures on AWS (CloudFront + S3, EC2 + Auto Scaling + ELB, RDS, WAF, Route 53). 
      Focused on high availability, performance, and cost optimization.
    </p>
  </motion.div>

  {/* Card 3 - System Design */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.3 }}
    className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all"
  >
    <div className="flex items-center gap-4 mb-4">
      <Layers className="text-tertiary flex-shrink-0" size={40} />
      <h3 className="font-headline font-bold text-xl text-white">System Design</h3>
    </div>
    <p className="text-sm text-on-surface-variant">
      Designed scalable MVC and 3-tier systems with clean architecture. 
      Built full-featured modules: user management, admin dashboards, payments (VNPay, MoMo, Stripe), and automated email systems.
    </p>
  </motion.div>

  {/* Card 4 - AI & Machine Learning */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.4 }}
    className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all"
  >
    <div className="flex items-center gap-4 mb-4">
      <Brain className="text-emerald-400 flex-shrink-0" size={40} />
      <h3 className="font-headline font-bold text-xl text-white">AI & Machine Learning</h3>
    </div>
    <p className="text-sm text-on-surface-variant">
      Applied Machine Learning and Deep Learning to real-world problems. 
      Achieved 99% accuracy diabetes prediction (XGBoost) and 98% accuracy Alzheimer’s detection (CNN + Attention Mechanism).
    </p>
  </motion.div>
</div>
      </div>
    </section>
  );
}