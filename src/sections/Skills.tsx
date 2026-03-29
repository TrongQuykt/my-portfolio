import React from 'react';
import { motion } from 'framer-motion';

/** Skill badges use the same shields.io URLs as your GitHub README (logo=… from Simple Icons). */
const SKILL_CATEGORIES = [
  {
    emoji: '-',
    title: 'Core Programming & Platform',
    badges: [
      { alt: 'PHP', src: 'https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white' },
      { alt: 'Python', src: 'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white' },
      { alt: 'JavaScript', src: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black' },
      { alt: 'Java', src: 'https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white' },
      { alt: 'C', src: 'https://img.shields.io/badge/C-A8B9CC?style=for-the-badge&logo=c&logoColor=black' },
      { alt: 'C++', src: 'https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white' },
      { alt: 'C#', src: 'https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white' },
      { alt: '.NET', src: 'https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white' },
    ],
  },
  {
    emoji: '-',
    title: 'AI, Machine Learning & Data Science',
    badges: [
      { alt: 'Machine Learning', src: 'https://img.shields.io/badge/Machine_Learning-102230?style=for-the-badge&logo=scikitlearn&logoColor=F7931E' },
      { alt: 'Deep Learning', src: 'https://img.shields.io/badge/Deep_Learning-000000?style=for-the-badge&logo=pytorch&logoColor=EE4C2C' },
      { alt: 'TensorFlow', src: 'https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white' },
      { alt: 'Artificial Intelligence', src: 'https://img.shields.io/badge/Artificial_Intelligence-412991?style=for-the-badge&logo=openai&logoColor=white' },
      { alt: 'Data Science', src: 'https://img.shields.io/badge/Data_Science-2C2D72?style=for-the-badge&logo=pandas&logoColor=white' },
    ],
  },
  {
    emoji: '-',
    title: 'Backend & API',
    badges: [
      { alt: 'Spring Boot', src: 'https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white' },
      { alt: 'Laravel', src: 'https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white' },
      { alt: 'Node.js', src: 'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white' },
      { alt: 'RESTful API', src: 'https://img.shields.io/badge/RESTful%20API-009688?style=for-the-badge&logo=swagger&logoColor=white' },
    ],
  },
  {
    emoji: '-',
    title: 'Frontend & UI/UX',
    badges: [
      { alt: 'React', src: 'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black' },
      { alt: 'Next.js', src: 'https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white' },
      { alt: 'Vue.js', src: 'https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white' },
      { alt: 'Angular', src: 'https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white' },
      { alt: 'HTML', src: 'https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white' },
      { alt: 'CSS', src: 'https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white' },
      { alt: 'Tailwind CSS', src: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white' },
      { alt: 'Bootstrap', src: 'https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white' },
      { alt: 'Figma', src: 'https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white' },
      { alt: 'Canva', src: 'https://img.shields.io/badge/Canva-00C4CC?style=for-the-badge&logo=canva&logoColor=white' },
    ],
  },
  {
    emoji: '-',
    title: 'Database Technologies',
    badges: [
      { alt: 'MySQL', src: 'https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white' },
      { alt: 'MongoDB', src: 'https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white' },
      { alt: 'SQL Server', src: 'https://img.shields.io/badge/SQL_Server-CC2927?style=for-the-badge&logo=microsoftsqlserver&logoColor=white' },
    ],
  },
  {
    emoji: '-',
    title: 'Cloud & DevOps',
    badges: [
      { alt: 'AWS', src: 'https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=FF9900' },
      { alt: 'AWS EC2', src: 'https://img.shields.io/badge/AWS_EC2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white' },
      { alt: 'AWS Lambda', src: 'https://img.shields.io/badge/AWS_Lambda-FF9900?style=for-the-badge&logo=awslambda&logoColor=white' },
      { alt: 'AWS S3', src: 'https://img.shields.io/badge/AWS_S3-569A31?style=for-the-badge&logo=amazons3&logoColor=white' },
      { alt: 'AWS RDS', src: 'https://img.shields.io/badge/AWS_RDS-527FFF?style=for-the-badge&logo=amazonrds&logoColor=white' },
      { alt: 'AWS ELB', src: 'https://img.shields.io/badge/AWS_ELB-FF9900?style=for-the-badge&logo=awselasticloadbalancing&logoColor=white' },
      { alt: 'AWS CloudFront', src: 'https://img.shields.io/badge/AWS_CloudFront-8C4FFF?style=for-the-badge&logo=amazoncloudfront&logoColor=white' },
      { alt: 'AWS Route 53', src: 'https://img.shields.io/badge/AWS_Route_53-8C4FFF?style=for-the-badge&logo=amazonroute53&logoColor=white' },
      { alt: 'AWS WAF', src: 'https://img.shields.io/badge/AWS_WAF-FF4F8B?style=for-the-badge&logo=awswaf&logoColor=white' },
      { alt: 'Docker', src: 'https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white' },
      { alt: 'Nginx', src: 'https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white' },
    ],
  },
  {
    emoji: '-',
    title: 'AI & Cloud APIs',
    badges: [
      { alt: 'OpenAI API', src: 'https://img.shields.io/badge/OpenAI_API-412991?style=for-the-badge&logo=openai&logoColor=white' },
      { alt: 'Google Cloud Console', src: 'https://img.shields.io/badge/Google_Cloud_Console-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white' },
      { alt: 'Google Cloud APIs', src: 'https://img.shields.io/badge/Google_Cloud_APIs-1A73E8?style=for-the-badge&logo=googlecloud&logoColor=white' },
    ],
  },
  {
    emoji: '-',
    title: 'Payment Gateways (E-commerce)',
    badges: [
      { alt: 'VNPay', src: 'https://img.shields.io/badge/VNPay-005BAC?style=for-the-badge&logo=visa&logoColor=white' },
      { alt: 'MoMo', src: 'https://img.shields.io/badge/MoMo-E6007A?style=for-the-badge&logo=wallet&logoColor=white' },
      { alt: 'PayPal', src: 'https://img.shields.io/badge/PayPal-003087?style=for-the-badge&logo=paypal&logoColor=white' },
      { alt: 'Stripe', src: 'https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white' },
    ],
  },
  {
    emoji: '-',
    title: 'Tools & Workflow',
    badges: [
      { alt: 'Git', src: 'https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white' },
      { alt: 'GitHub', src: 'https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white' },
      { alt: 'VS Code', src: 'https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white' },
      { alt: 'Visual Studio', src: 'https://img.shields.io/badge/Visual_Studio-7C3AED?style=for-the-badge&logo=visual-studio&logoColor=white' },
      { alt: 'IntelliJ IDEA', src: 'https://img.shields.io/badge/IntelliJ_IDEA-000000?style=for-the-badge&logo=intellij-idea&logoColor=white' },
      { alt: 'Eclipse', src: 'https://img.shields.io/badge/Eclipse-2C2255?style=for-the-badge&logo=eclipse-ide&logoColor=white' },
      { alt: 'Android Studio', src: 'https://img.shields.io/badge/Android_Studio-3DDC84?style=for-the-badge&logo=androidstudio&logoColor=black' },
      { alt: 'Postman', src: 'https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white' },
      { alt: 'draw.io', src: 'https://img.shields.io/badge/draw.io-F08705?style=for-the-badge&logo=diagramsdotnet&logoColor=white' },
      { alt: 'Jupyter', src: 'https://img.shields.io/badge/Jupyter-FA0F00?style=for-the-badge&logo=jupyter&logoColor=white' },
      { alt: 'Anaconda', src: 'https://img.shields.io/badge/Anaconda-44A833?style=for-the-badge&logo=anaconda&logoColor=white' },
      { alt: 'Linux', src: 'https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black' },
      { alt: 'Jira', src: 'https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=jira&logoColor=white' },
      { alt: 'Google Colab', src: 'https://img.shields.io/badge/Google_Colab-F9AB00?style=for-the-badge&logo=googlecolab&logoColor=black' },
    ],
  },
  {
    emoji: '-',
    title: 'AI Tools in Daily Work',
    badges: [
      { alt: 'Google Stitch', src: 'https://img.shields.io/badge/Google_Stitch-4285F4?style=for-the-badge&logo=google&logoColor=white' },
      { alt: 'Google AI Studio', src: 'https://img.shields.io/badge/Google_AI_Studio-1A73E8?style=for-the-badge&logo=googlecloud&logoColor=white' },
      { alt: 'ChatGPT', src: 'https://img.shields.io/badge/ChatGPT-412991?style=for-the-badge&logo=openai&logoColor=white' },
      { alt: 'Google Gemini', src: 'https://img.shields.io/badge/Google_Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white' },
      { alt: 'Claude', src: 'https://img.shields.io/badge/Claude_AI-000000?style=for-the-badge&logo=anthropic&logoColor=white' },
      { alt: 'Grok', src: 'https://img.shields.io/badge/Grok_AI-000000?style=for-the-badge&logo=x&logoColor=white' },
      { alt: 'Lovable', src: 'https://img.shields.io/badge/Lovable_AI-FF69B4?style=for-the-badge&logo=ai&logoColor=white' },
      { alt: 'Blackbox AI', src: 'https://img.shields.io/badge/Blackbox_AI-111111?style=for-the-badge&logo=code&logoColor=white' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-x-hidden">
      <div className="text-center mb-10 sm:mb-14 lg:mb-16">
        <p className="font-label text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.4em] text-secondary uppercase mb-3 sm:mb-4">
          Tech stack
        </p>
        <h2 className="font-headline font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-2 sm:mb-4 px-2">
          Skills
        </h2>
      </div>

      <div className="space-y-10 sm:space-y-12 lg:space-y-14">
        {SKILL_CATEGORIES.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: Math.min(i * 0.05, 0.3) }}
          >
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <span className="text-lg sm:text-xl shrink-0" aria-hidden>
                {cat.emoji}
              </span>
              <h3 className="font-headline font-bold text-base sm:text-lg md:text-xl text-white leading-snug min-w-0 flex-1 sm:flex-none">
                {cat.title}
              </h3>
              <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-outline-variant/60 to-transparent min-w-[2rem]" />
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3">
              {cat.badges.map((b) => (
                <img
                  key={b.alt + b.src}
                  src={b.src}
                  alt={b.alt}
                  title={b.alt}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="h-6 sm:h-7 md:h-8 max-w-[100%] w-auto rounded-md border border-outline-variant/20 select-none hover:border-secondary/40 transition-colors"
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
