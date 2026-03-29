import { Mail, Phone } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { send } from '@emailjs/browser';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const contactEmail = 'vyquy633@gmail.com';

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Copy failed', error);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setStatusMessage('Please fill in all fields before sending.');
      return;
    }

    setStatus('sending');
    setStatusMessage('Sending your message...');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
      setStatus('error');
      setStatusMessage('EmailJS is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY.');
      return;
    }

    try {
      await send(serviceId, templateId, {
        from_name: name,
        from_email: email,
        reply_to: email,
        subject: `Contact request from ${name}`,
        message,
      }, publicKey);

      setStatus('success');
      setStatusMessage('Message sent! I will read it and reply soon.');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
      setStatus('error');
      setStatusMessage('Unable to send the message right now. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="glass-panel rounded-[2rem] p-8 md:p-14 border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] ambient-aura rounded-full bg-secondary/10 -mr-24 -mt-24"></div>
        <div className="grid gap-10 lg:grid-cols-[5fr_7fr] relative z-10">
          <div>
            <h2 className="font-headline font-black text-4xl sm:text-5xl text-white mb-4">Let's Build Something Epic</h2>
            <p className="text-on-surface-variant mb-8 leading-relaxed max-w-xl">
              Ready to transform your vision into reality? Let's collaborate and create solutions that don't just meet expectations—they exceed them.
            </p>
            <div className="space-y-4 text-sm">
              <div className="flex flex-wrap items-center gap-3 text-on-surface-variant">
                <Mail size={20} />
                <span>{contactEmail}</span>
                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  className="inline-flex items-center rounded-full border border-outline-variant/30 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-secondary hover:bg-secondary/10 transition-colors"
                >
                  {copied ? 'Copied' : 'Copy email'}
                </button>
              </div>
              <div className="text-on-surface-variant/75">
                Use the form below to send a message directly — no mail app needed.
              </div>
              <a href="tel:+84945449758" className="flex flex-wrap items-center gap-3 text-on-surface-variant hover:text-secondary transition-colors">
                <Phone size={20} /> +84 94 544 9758
              </a>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {status !== 'idle' && (
                <div className={`rounded-3xl px-5 py-4 text-sm font-medium ${
                  status === 'success'
                    ? 'bg-emerald-500/15 border border-emerald-400/25 text-emerald-200'
                    : status === 'error'
                    ? 'bg-rose-500/15 border border-rose-400/25 text-rose-200'
                    : 'bg-surface-container-highest border border-outline-variant/20 text-on-surface-variant'
                }`}>
                  {statusMessage}
                </div>
              )}

              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                type="text"
                placeholder="Your Name"
                className="w-full bg-surface-container-highest border border-outline-variant/30 rounded-xl px-6 py-3 text-white placeholder-on-surface-variant focus:outline-none focus:border-secondary transition-colors"
              />
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                placeholder="Your Email"
                className="w-full bg-surface-container-highest border border-outline-variant/30 rounded-xl px-6 py-3 text-white placeholder-on-surface-variant focus:outline-none focus:border-secondary transition-colors"
              />
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Your Message"
                rows={5}
                className="w-full bg-surface-container-highest border border-outline-variant/30 rounded-xl px-6 py-3 text-white placeholder-on-surface-variant focus:outline-none focus:border-secondary transition-colors resize-none"
              ></textarea>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full signature-glow text-slate-900 font-bold py-3 rounded-xl hover:shadow-[0_0_30px_rgba(192,193,255,0.4)] transition-all disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}