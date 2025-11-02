import { motion } from 'framer-motion';
import { Instagram, MapPin, Clock, Phone, MessageCircle } from 'lucide-react';

const whatsappNumber = '917082871770';
const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi! I would like to know more about classes at Jayshree Yoga.')}`;

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Inspiration / Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <blockquote className="mx-auto max-w-3xl text-xl italic text-gray-800 sm:text-2xl">
            “The journey of a thousand miles begins with a single step.”
          </blockquote>
          <p className="mt-2 text-gray-600">Start yours today with Jayshree Yoga.</p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="text-sm font-medium text-gray-700">WhatsApp</div>
            <div className="mt-1 text-lg font-semibold text-gray-900">70828 71770</div>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center rounded-full bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700"
            >
              <MessageCircle className="mr-2 h-4 w-4" /> Chat Now
            </a>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="text-sm font-medium text-gray-700">Call</div>
            <div className="mt-1 text-lg font-semibold text-gray-900">+91 70828 71770</div>
            <a
              href={`tel:+${whatsappNumber}`}
              className="mt-4 inline-flex items-center rounded-full bg-purple-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-purple-700"
            >
              <Phone className="mr-2 h-4 w-4" /> Call Now
            </a>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="text-sm font-medium text-gray-700">Instagram</div>
            <div className="mt-1 text-lg font-semibold text-gray-900">@jayshreeyoga_</div>
            <a
              href="https://instagram.com/jayshreeyoga_"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center rounded-full bg-pink-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-pink-700"
            >
              <Instagram className="mr-2 h-4 w-4" /> Follow
            </a>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="text-sm font-medium text-gray-700">Visit</div>
            <div className="mt-1 text-gray-900">
              <div className="flex items-center text-sm text-gray-700"><MapPin className="mr-2 h-4 w-4" /> Hisar, Haryana</div>
              <div className="mt-2 flex items-center text-sm text-gray-700"><Clock className="mr-2 h-4 w-4" /> 6 AM – 9 PM</div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-purple-50 to-green-50 p-6 text-center text-sm text-gray-700">
          Made with ❤️ in Hisar by Jayshree Yoga.
        </div>
      </div>
    </section>
  );
}
