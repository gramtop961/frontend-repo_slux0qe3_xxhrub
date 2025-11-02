import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';

const whatsappNumber = '917082871770';
const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi Jayshree! I would love to start my yoga journey.')}`;
const callLink = `tel:+${whatsappNumber}`;

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-white to-green-50" aria-hidden="true" />

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-200/40 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-20 sm:pt-28 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">Jayshree Yoga • Hisar</span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
            Transform Your Body & Soul
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Join Certified Yoga Instructor Jayshree for Personalized Yoga Classes in Hisar.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-purple-600 px-6 py-3 text-white shadow-sm transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start Your Journey
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-gray-900 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2"
            >
              WhatsApp Now
            </a>
          </div>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative mt-12 overflow-hidden rounded-2xl border border-gray-100 shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2070&auto=format&fit=crop"
            alt="Peaceful yoga at sunrise"
            className="h-[340px] w-full object-cover sm:h-[460px]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/40" />
        </motion.div>

        <div className="mt-8 flex items-center justify-center gap-4 text-sm text-gray-600">
          <a href={callLink} className="inline-flex items-center hover:text-gray-900">
            <Phone className="mr-2 h-4 w-4" /> Call Now
          </a>
          <span className="text-gray-300">•</span>
          <span>6 AM – 9 PM</span>
        </div>
      </div>
    </section>
  );
}
