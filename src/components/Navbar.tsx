import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';

const cn = (...classes: (string | undefined | false)[]) => classes.filter(Boolean).join(' ');

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme ?? (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.classList.toggle('light', initialTheme === 'light');

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    window.localStorage.setItem('portfolio-theme', nextTheme);
    document.documentElement.classList.toggle('light', nextTheme === 'light');
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Awards', href: '#awards' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const navBg = scrolled
    ? theme === 'dark'
      ? 'bg-slate-950/70 backdrop-blur-xl border-white/10 shadow-[0_20px_50px_rgba(45,52,73,0.1)]'
      : 'bg-white/85 backdrop-blur-xl border-slate-200/70 shadow-[0_20px_50px_rgba(148,163,184,0.12)]'
    : 'bg-transparent';

  const navText = theme === 'dark' ? 'text-on-surface-variant hover:text-white' : 'text-slate-700 hover:text-slate-900';
  const logoText = theme === 'dark' ? 'text-white' : 'text-slate-950';

  const mobileMenu =
    mounted &&
    createPortal(
      <div
        id="mobile-nav"
        className={cn(
          'md:hidden fixed inset-0 z-[200] transition-[visibility]',
          menuOpen ? 'visible' : 'invisible pointer-events-none'
        )}
        aria-hidden={!menuOpen}
      >
        {/* Backdrop */}
        <button
          type="button"
          className={cn(
            'absolute inset-0 bg-black/65 backdrop-blur-[2px] transition-opacity duration-300 ease-out',
            menuOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setMenuOpen(false)}
          aria-label="Đóng menu"
        />
        {/* Full-screen panel — slides from right */}
        <div
          className={cn(
            'absolute inset-y-0 right-0 flex h-[100dvh] w-full max-w-full flex-col shadow-[-12px_0_48px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-out',
            theme === 'dark'
              ? 'bg-surface border-l border-white/10'
              : 'bg-white border-l border-slate-200/90',
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div
            className={cn(
              'flex shrink-0 items-center justify-between gap-4 border-b px-4 py-4 pt-[max(1rem,env(safe-area-inset-top))] sm:px-6',
              theme === 'dark' ? 'border-white/10' : 'border-slate-200/80'
            )}
          >
            <span
              className={cn(
                'font-headline font-black text-sm uppercase tracking-[0.2em]',
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              )}
            >
              Menu
            </span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className={cn(
                'flex h-11 w-11 items-center justify-center rounded-xl transition-colors',
                theme === 'dark'
                  ? 'text-on-surface-variant hover:bg-white/10 hover:text-white'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              )}
              aria-label="Close menu"
            >
              <X size={24} strokeWidth={2} />
            </button>
          </div>

          <nav
            className="flex min-h-0 flex-1 flex-col justify-start gap-0 overflow-y-auto overscroll-contain px-4 pt-4 sm:pt-6 sm:px-8 pb-[max(1.5rem,env(safe-area-inset-bottom))]"
          >
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{ transitionDelay: menuOpen ? `${i * 35}ms` : '0ms' }}
                className={cn(
                  'rounded-2xl px-4 py-3.5 text-left font-sans text-base font-bold tracking-tight transition-all duration-200',
                  theme === 'dark'
                    ? 'text-on-surface-variant hover:bg-white/5 hover:text-white active:bg-white/10'
                    : 'text-slate-800 hover:bg-slate-100 active:bg-slate-200'
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>,
      document.body
    );

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/0',
          navBg,
          scrolled ? 'py-3 sm:py-4' : 'py-4 sm:py-6'
        )}
      >
        <div className="flex justify-between items-center gap-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <a
            href="#home"
            className={cn(
              'font-black tracking-tighter uppercase leading-tight shrink min-w-0 max-w-[min(100%,14rem)] sm:max-w-none',
              logoText,
              'text-[0.65rem] sm:text-xs md:text-sm lg:text-xl'
            )}
          >
            <span className="block sm:inline">TrongQuyKT</span>
            <span className="hidden sm:inline"> </span>
            <span className="block sm:inline text-[0.6rem] sm:text-inherit opacity-90 sm:opacity-100">PORTFOLIO</span>
          </a>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-sans font-bold tracking-tight text-xs lg:text-sm transition-colors duration-300 ${navText}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 active:scale-95 ${navText}`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={20} className="sm:w-[22px] sm:h-[22px]" />
              ) : (
                <Moon size={20} className="sm:w-[22px] sm:h-[22px]" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className={cn('md:hidden p-2 rounded-lg transition-colors', navText, menuOpen && 'opacity-0 pointer-events-none')}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>
      {mobileMenu}
    </>
  );
}
