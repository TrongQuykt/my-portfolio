import { motion } from 'framer-motion';
import { Layers, Cpu, Brain } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Sử dụng flex-col cho mobile và grid cho desktop để kiểm soát tốt hơn */}
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="lg:col-span-5 w-full"
        >
          <h2 className="font-headline font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-4 sm:mb-6">
            About Me.
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 text-justify lg:text-left">
            I am a passionate Fullstack Developer with a strong focus on building scalable, high-performance systems. 
            With experience in backend architecture, cloud infrastructure, and modern web technologies, I strive to create 
            efficient, reliable, and user-centric solutions.
            <br /><br />
            I enjoy working with technologies like JavaScript, PHP, MySQL and cloud platforms such as AWS, while 
            continuously exploring AI integration and system optimization.
            <br /><br />
            Driven by curiosity and precision, I aim to engineer solutions that are not only functional but also elegant 
            and impactful.
          </p>
        </motion.div>
        
        {/* Right Cards */}
        <div className="lg:col-span-7 w-full">
          {/* grid-cols-1 cho mobile giúp card luôn nằm trong viewport */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
            
            {/* Card 1 */}
            <AboutCard 
              delay={0.1}
              icon={<Layers className="text-tertiary shrink-0 w-8 h-8 sm:w-10 sm:h-10" />}
              title="Full Stack Development"
              description="Building complete web applications from responsive frontend to robust backend and database. Proficient in PHP (MVC), Java Spring Boot, and ASP.NET MVC."
            />

            {/* Card 2 */}
            <AboutCard 
              delay={0.2}
              icon={<Cpu className="text-secondary shrink-0 w-8 h-8 sm:w-10 sm:h-10" />}
              title="Cloud Architecture"
              description="Designed and deployed production-grade 3-tier architectures on AWS (CloudFront, S3, EC2, RDS). Focused on high availability and cost optimization."
            />

            {/* Card 3 */}
            <AboutCard 
              delay={0.3}
              icon={<Layers className="text-tertiary shrink-0 w-8 h-8 sm:w-10 sm:h-10" />}
              title="System Design"
              description="Designed scalable MVC and 3-tier systems with clean architecture. Built modules for payments (VNPay, MoMo, Stripe) and automated email systems."
            />

            {/* Card 4 */}
            <AboutCard 
              delay={0.4}
              icon={<Brain className="text-emerald-400 shrink-0 w-8 h-8 sm:w-10 sm:h-10" />}
              title="AI & Machine Learning"
              description="Applied ML/DL to real-world problems. Achieved 99% accuracy in diabetes prediction and 98% in Alzheimer’s detection using CNN."
            />

          </div>
        </div>
      </div>
    </section>
  );
}

// Component phụ để code sạch hơn và tránh lặp lại logic
function AboutCard({ icon, title, description, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all flex flex-col items-center md:items-start text-center md:text-left h-full"
    >
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="font-headline font-bold text-lg sm:text-xl text-white mb-2 leading-tight">
        {title}
      </h3>
      <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}