import { motion } from 'framer-motion';
import { Check, Heart, Leaf } from 'lucide-react';

export default function About() {
  const highlights = [
    { label: 'Certified Instructor' },
    { label: '3+ Years Experience' },
    { label: '500+ Happy Students' },
    { label: '95% Success Rate' },
  ];

  return (
    <section id="about" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
              <Leaf className="mr-2 h-4 w-4" /> About Jayshree
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-gray-900 sm:text-4xl">Namaste, I’m Jayshree</h2>
            <p className="mt-4 text-gray-600">
              I’m a certified yoga instructor helping people connect mind, body, and spirit through personalized programs.
              My approach blends traditional asanas, breathwork, and meditation to create lasting wellness.
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
                <li key={h.label} className="flex items-center rounded-xl border border-gray-200 bg-white p-3 text-gray-700 shadow-sm">
                  <Check className="mr-3 h-5 w-5 text-green-600" />
                  {h.label}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 md:order-2"
          >
            <div className="relative overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1540206276207-3af25c08abc4?q=80&w=2069&auto=format&fit=crop"
                alt="Jayshree in a yoga pose"
                className="h-[420px] w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-purple-100/40 via-transparent to-green-100/40" />

              <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-gray-700 shadow-sm">
                <div className="inline-flex items-center">
                  <Heart className="mr-2 h-4 w-4 text-rose-500" />
                  Personalized Classes
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
