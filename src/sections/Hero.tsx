import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      id="home"
      className="box-border min-h-[100dvh] min-h-screen flex items-center pt-[4.5rem] sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full min-w-0 relative"
    >
      <div className="grid grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-center w-full min-w-0 max-w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="col-span-12 lg:col-span-7 order-2 lg:order-1 text-center lg:text-left"
        >
          <span className="font-label text-secondary tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-4 sm:mb-6 block">
            Code. Scale. Impact.
          </span>
          <h1 className="font-headline font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter leading-[0.95] sm:leading-[0.9] text-white mb-6 sm:mb-8">
            FULLSTACK <br /> <span className="text-on-surface-variant">DEVELOPER.</span>
          </h1>

          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start mb-8 sm:mb-10">
            {['Software Engineering', 'AI Integration', 'System Designer', 'AWS Cloud'].map((tag) => (
              <span
                key={tag}
                className="bg-surface-container-highest border border-outline-variant/30 text-on-surface px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs font-label uppercase tracking-widest max-w-[100%]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-10 sm:mb-12 justify-center lg:justify-start">
          <button
  type="button"
  onClick={() => {
    const link = document.createElement('a');
    link.href = 'public/assets/files/CV_VyTrongQuy_FullStack .pdf';        // ← Đường dẫn đến file PDF
    link.download = 'CV_VyTrongQuy_FullStack.pdf';    // ← Tên file khi tải về
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
  className="signature-glow bg-white text-slate-900 px-8 sm:px-12 py-4 rounded-2xl 
             text-base font-bold tracking-tight transition-all duration-300 
             hover:shadow-[0_0_40px_rgba(147,197,253,0.6)] 
             active:scale-95 flex items-center justify-center gap-3 
             w-full sm:w-auto"
>
  Download CV
</button>
            <button
              type="button"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-surface-container-highest border border-outline-variant/30 text-white px-6 sm:px-10 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-bold tracking-tight hover:bg-surface-bright transition-all w-full sm:w-auto"
            >
              Contact Me
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
            <style>{`
              .icon-btn { transition: all 0.3s ease; }
              .icon-mail:hover { 
                box-shadow: 0 0 20px rgba(251,146,60,0.4), inset 0 0 10px rgba(251,146,60,0.2); 
                border-color: rgba(251,146,60,0.7);
                color: rgb(251,146,60);
              }
              .icon-github:hover { 
                box-shadow: 0 0 20px rgba(239,68,68,0.4), inset 0 0 10px rgba(239,68,68,0.2); 
                border-color: rgba(239,68,68,0.7);
                 color: rgb(248,113,113);
              }
              .icon-phone:hover { 
                box-shadow: 0 0 20px rgba(192,193,255,0.4), inset 0 0 10px rgba(192,193,255,0.2); 
                border-color: rgba(192,193,255,0.7);
                color: rgb(192,193,255);
              }
              .icon-linkedin:hover { 
                box-shadow: 0 0 20px rgba(59,130,246,0.4), inset 0 0 10px rgba(59,130,246,0.2); 
                border-color: rgba(59,130,246,0.7);
                color: rgb(96,165,250);
              }
              .icon-instagram:hover { 
                box-shadow: 0 0 20px rgba(236,72,153,0.4), inset 0 0 10px rgba(236,72,153,0.2); 
                border-color: rgba(236,72,153,0.7);
                color: rgb(244,114,182);
              }
            `}</style>

            {[
              { Icon: FaEnvelope, href: 'mailto:vyquy633@gmail.com', type: 'mail' },
              { Icon: FaGithub, href: 'https://github.com/TrongQuykt', type: 'github' },
              { Icon: FaPhone, href: 'tel:+84945449758', type: 'phone' },
              { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/trongquykt/', type: 'linkedin' },
              { Icon: FaInstagram, href: 'https://www.instagram.com/trnquy_kt/', type: 'instagram' },
            ].map(({ Icon, href, type }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`icon-btn icon-${type} w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center border border-outline-variant/30 text-on-surface rounded-lg transition-all duration-300`}
              >
                <Icon className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="col-span-12 lg:col-span-5 relative order-1 lg:order-2 max-w-[280px] sm:max-w-sm md:max-w-md mx-auto lg:max-w-none w-full"
        >
          <div className="absolute -top-8 -right-4 sm:-top-12 sm:-right-12 w-40 h-40 sm:w-64 sm:h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
          <div
            className="absolute -bottom-12 -left-4 sm:-bottom-12 sm:-left-12 w-40 h-40 sm:w-64 sm:h-64 bg-tertiary/20 rounded-full blur-3xl animate-pulse pointer-events-none"
            style={{ animationDelay: '0.5s' }}
          />
          <div
            className="absolute top-1/3 -right-4 sm:-right-8 w-32 h-32 sm:w-48 sm:h-48 bg-secondary/15 rounded-full blur-2xl animate-pulse pointer-events-none"
            style={{ animationDelay: '1s' }}
          />

          <style>{`
            @keyframes rainbow-shift {
              0% { background-position: 0% 50%; }
              100% { background-position: 100% 50%; }
            }
            .rainbow-border {
              background: linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3, #ff0000);
              background-size: 200% 200%;
              animation: rainbow-shift 5s linear infinite;
              padding: 2px;
              border-radius: 1.5rem;
            }
          `}</style>

          <div className="rainbow-border relative z-10 shadow-2xl">
            <div className="aspect-square rounded-[1.45rem] overflow-hidden glass-panel p-3 sm:p-4 group relative">
              <img
                alt="Senior Engineer Portrait"
                className="w-full h-full object-cover rounded-2xl group-hover:brightness-110 transition-all duration-700"
                src="public/assets/images/Vy_Trong_Quy.jpg"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="absolute -bottom-2 -left-1 sm:-bottom-6 sm:-left-6 glass-panel border border-white/10 p-4 sm:p-6 rounded-2xl shadow-xl max-w-[160px] sm:max-w-[200px] z-20">
            <p className="font-label text-[9px] sm:text-[10px] text-secondary tracking-widest mb-1 uppercase">Years Experience</p>
            <p className="font-headline font-black text-3xl sm:text-4xl text-white">01+</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
