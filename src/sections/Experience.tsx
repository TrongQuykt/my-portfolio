import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, ArrowRight, Zap } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'FCJ Cloud Engineer / Backend Developer Trainee',
      company: 'Amazon Web Services (AWS)',
      period: '01/2025 - 09/2025',
      duration: '9 months',
      icon: Database,
      status: 'Previous',
      logo: '/assets/images/logos/images.png',
      metrics: ['PHP on AWS (production-style)', '3-tier architecture', 'Security & observability'],
      points: [
        'Deployed PHP web applications on AWS following a production-oriented setup.',
        'Designed and deployed 3-tier systems: presentation (CloudFront + S3), application (EC2 + Auto Scaling + ELB), and data (RDS MySQL / Aurora).',
        'Operated EC2 for PHP workloads, RDS for relational data, and S3 for static assets.',
        'Accelerated global delivery with Amazon CloudFront (CDN) and high availability using Elastic Load Balancing.',
        'Managed DNS with Amazon Route 53 and protected workloads with AWS WAF against common web threats.',
        'Handled backups, monitoring, performance tuning, and cost awareness across the stack.'
      ]
    },
    {
      role: 'Full Stack Web Developer',
      company: 'S&H Business Solution Co., Ltd.',
      period: '05/2025 - 09/2025',
      duration: '5 months',
      icon: Terminal,
      status: 'Previous',
      logo: '/assets/images/logos/113854logo1.webp',
      metrics: ['PHP + MySQL', 'MVC architecture', 'Event & exhibition sites'],
      points: [
        'Gathered business requirements and designed web systems for events and product exhibitions serving Korean companies in Vietnam.',
        'Owned system architecture end to end: PHP backend, MySQL data layer, and structured delivery using an MVC approach for scalability and maintainability.',
        'Built responsive frontends with strong UI/UX—banners, landing pages, headers, footers, and primary content areas.',
        'Implemented core modules: user and company management, catalog-style features (products, personnel, industries, booths), contact flows, and admin dashboards.',
        'Delivered event registration with automated email confirmations for both end users and administrators.',
        'Deployed to production with domain and hosting on inet.vn.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="font-label text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.4em] text-secondary uppercase mb-3 sm:mb-4">
            Career Timeline
          </p>
          <h2 className="font-headline font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white px-2">
            Work Experience
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Center Timeline Line — desktop / tablet only */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-secondary via-tertiary to-secondary pointer-events-none" />

          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {experiences.map((exp, i) => {
              const IconComponent = exp.icon;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative"
                >
                  {/* Center Timeline Dot - Absolutely Positioned */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.05, type: "spring", stiffness: 200 }}
                    className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-1/4 z-10 pointer-events-none"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-tertiary/30 rounded-full blur-2xl w-32 h-32 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"></div>
                    <div className="relative w-20 h-20 bg-surface border-4 border-secondary rounded-full flex items-center justify-center">
                      <IconComponent size={32} className="text-secondary" />
                    </div>
                  </motion.div>

                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center`}>
                    {/* Left Side - Box or Empty */}
                    <div className={isLeft ? '' : 'hidden md:block'}>
                      {isLeft && (
                        <motion.div
                          initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.2 + 0.1 }}
                          className="glass-panel rounded-2xl p-5 sm:p-7 md:p-8 border border-white/5 hover:border-secondary/30 transition-all duration-300 group relative md:border-l-0 border-l-2 border-l-secondary/40 md:rounded-2xl pl-4 sm:pl-5 md:pl-8"
                        >
                          {/* Company Logo and Header */}
                          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-5 sm:mb-6">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-surface-container-highest border border-white/10 flex items-center justify-center flex-shrink-0 overflow-hidden mx-auto sm:mx-0">
                              <img 
                                src={exp.logo} 
                                alt={exp.company}
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                }}
                              />
                            </div>
                            <div className="text-center sm:text-left min-w-0">
                              <div className="flex items-center gap-2 mb-1 justify-center sm:justify-start">
                                <h3 className="font-headline font-black text-lg sm:text-2xl md:text-3xl text-white leading-tight">{exp.role}</h3>
                              </div>
                              <span className={`font-label text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider inline-block ${
                                exp.status === 'Current' 
                                  ? 'bg-secondary/20 border border-secondary/50 text-secondary' 
                                  : 'bg-surface-container-highest border border-outline-variant/30 text-on-surface-variant'
                              }`}>
                                {exp.status}
                              </span>
                            </div>
                          </div>

                          {/* Company Info */}
                          <p className="text-secondary font-bold text-sm sm:text-base mb-3 text-center sm:text-left">{exp.company}</p>
                          <div className="flex flex-wrap gap-3 sm:gap-4 mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-white/5 justify-center sm:justify-start">
                            <p className="font-mono text-[10px] sm:text-xs text-on-surface-variant">{exp.period}</p>
                            <div className="flex items-center gap-2">
                              <Zap size={12} className="text-tertiary shrink-0" />
                              <span className="font-label text-[10px] sm:text-xs text-tertiary font-bold">{exp.duration}</span>
                            </div>
                          </div>

                          {/* Metrics */}
                          <div className="grid grid-cols-1 gap-2 sm:gap-3 mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-white/5">
                            {exp.metrics.map((metric, mi) => (
                              <div key={mi} className="flex items-start gap-2 sm:items-center">
                                <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-1.5 sm:mt-0"></div>
                                <p className="text-xs sm:text-sm font-bold text-secondary leading-snug">{metric}</p>
                              </div>
                            ))}
                          </div>

                          {/* Achievements */}
                          <div className="space-y-2 sm:space-y-3">
                            <p className="font-label text-[10px] sm:text-xs text-on-surface-variant tracking-widest uppercase text-center sm:text-left">Achievements</p>
                            {exp.points.map((point, pi) => (
                              <motion.div
                                key={pi}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 + pi * 0.05 + 0.15 }}
                                className="flex gap-3 group/item"
                              >
                                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-secondary to-tertiary flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <ArrowRight size={10} className="text-slate-900" />
                                </div>
                                <p className="text-xs text-on-surface-variant leading-relaxed group-hover/item:text-white transition-colors">
                                  {point}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Right Side - Box or Empty */}
                    <div className={!isLeft ? '' : 'hidden md:block'}>
                      {!isLeft && (
                        <motion.div
                          initial={{ opacity: 0, x: 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.2 + 0.1 }}
                          className="glass-panel rounded-2xl p-5 sm:p-7 md:p-8 border border-white/5 hover:border-secondary/30 transition-all duration-300 group relative md:border-l-0 border-l-2 border-l-secondary/40 md:rounded-2xl pl-4 sm:pl-5 md:pl-8"
                        >
                          {/* Company Logo and Header */}
                          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-5 sm:mb-6">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-surface-container-highest border border-white/10 flex items-center justify-center flex-shrink-0 overflow-hidden mx-auto sm:mx-0">
                              <img 
                                src={exp.logo} 
                                alt={exp.company}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                }}
                              />
                            </div>
                            <div className="text-center sm:text-left min-w-0">
                              <div className="flex items-center gap-2 mb-1 justify-center sm:justify-start">
                                <h3 className="font-headline font-black text-lg sm:text-2xl md:text-3xl text-white leading-tight">{exp.role}</h3>
                              </div>
                              <span className={`font-label text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider inline-block ${
                                exp.status === 'Current' 
                                  ? 'bg-secondary/20 border border-secondary/50 text-secondary' 
                                  : 'bg-surface-container-highest border border-outline-variant/30 text-on-surface-variant'
                              }`}>
                                {exp.status}
                              </span>
                            </div>
                          </div>

                          {/* Company Info */}
                          <p className="text-secondary font-bold text-sm sm:text-base mb-3 text-center sm:text-left">{exp.company}</p>
                          <div className="flex flex-wrap gap-3 sm:gap-4 mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-white/5 justify-center sm:justify-start">
                            <p className="font-mono text-[10px] sm:text-xs text-on-surface-variant">{exp.period}</p>
                            <div className="flex items-center gap-2">
                              <Zap size={12} className="text-tertiary shrink-0" />
                              <span className="font-label text-[10px] sm:text-xs text-tertiary font-bold">{exp.duration}</span>
                            </div>
                          </div>

                          {/* Metrics */}
                          <div className="grid grid-cols-1 gap-2 sm:gap-3 mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-white/5">
                            {exp.metrics.map((metric, mi) => (
                              <div key={mi} className="flex items-start gap-2 sm:items-center">
                                <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-1.5 sm:mt-0"></div>
                                <p className="text-xs sm:text-sm font-bold text-secondary leading-snug">{metric}</p>
                              </div>
                            ))}
                          </div>

                          {/* Achievements */}
                          <div className="space-y-2 sm:space-y-3">
                            <p className="font-label text-[10px] sm:text-xs text-on-surface-variant tracking-widest uppercase text-center sm:text-left">Achievements</p>
                            {exp.points.map((point, pi) => (
                              <motion.div
                                key={pi}
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 + pi * 0.05 + 0.15 }}
                                className="flex gap-3 group/item"
                              >
                                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-secondary to-tertiary flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <ArrowRight size={10} className="text-slate-900" />
                                </div>
                                <p className="text-xs text-on-surface-variant leading-relaxed group-hover/item:text-white transition-colors">
                                  {point}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 sm:mt-24 lg:mt-32 pt-8 sm:pt-12 border-t border-white/5 text-center max-w-6xl mx-auto px-2"
      >
        <p className="text-on-surface-variant text-sm sm:text-base mb-3 sm:mb-4">2025 professional highlights</p>
        <p className="font-headline font-black text-3xl sm:text-4xl md:text-5xl text-white">2 roles</p>
        <p className="text-secondary font-label text-[10px] sm:text-xs tracking-widest uppercase mt-3 sm:mt-4 max-w-md mx-auto leading-relaxed">
          AWS cloud engineering • Full-stack delivery
        </p>
      </motion.div>
    </section>
  );
}