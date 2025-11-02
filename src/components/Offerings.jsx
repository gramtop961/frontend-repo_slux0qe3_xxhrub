import { motion } from 'framer-motion';
import { Leaf, Heart, Star, Check, MessageCircle } from 'lucide-react';

const whatsappNumber = '917082871770';
const waBase = `https://wa.me/${whatsappNumber}`;

const programs = [
  { title: 'Home Yoga Classes', price: '₹800/session', icon: Leaf },
  { title: 'Group Classes', price: '₹500/person', icon: Star },
  { title: 'Online Sessions', price: '₹400/session', icon: Heart },
  { title: 'Personal Training', price: '₹1200/session', icon: Leaf },
];

const dietPlans = [
  { title: 'Weight Loss Plan', price: '₹2,000/month' },
  { title: 'Muscle Building Plan', price: '₹2,500/month' },
  { title: 'Detox & Cleanse', price: '₹1,500/month' },
];

export default function Offerings() {
  return (
    <section id="offerings" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Yoga Programs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 sm:text-3xl">Yoga Programs</h3>
          <p className="mt-2 max-w-2xl text-gray-600">Choose the class style that fits your lifestyle. Every session is crafted to balance strength, flexibility, and calm.</p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((p) => (
              <div key={p.title} className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p.icon className="mr-2 h-5 w-5 text-green-600" />
                    <h4 className="text-lg font-medium text-gray-900">{p.title}</h4>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-600">Gentle guidance with focus on breath, alignment, and mindfulness.</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-base font-semibold text-gray-900">{p.price}</span>
                  <a
                    href={`${waBase}?text=${encodeURIComponent(`Hi! I want to book: ${p.title}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-purple-600 px-3 py-2 text-xs font-medium text-white transition hover:bg-purple-700"
                  >
                    <MessageCircle className="mr-1 h-4 w-4" /> Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Special Offers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 sm:text-3xl">Special Offers</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              '30% off Group Classes (2+ people)',
              '50% off First Trial Session',
              'Combo (Yoga + Diet Plan) ₹5,000/month',
            ].map((offer) => (
              <div key={offer} className="rounded-2xl border border-purple-200 bg-purple-50 p-5 text-purple-900">
                <div className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 text-purple-600" />
                  <p className="text-sm sm:text-base">{offer}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hourglass Challenge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16"
        >
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-purple-50 to-green-50 p-6 shadow-sm sm:p-8">
            <div className="grid gap-8 sm:grid-cols-3 sm:items-center">
              <div className="sm:col-span-2">
                <h3 className="text-2xl font-semibold text-gray-900">8-Week Hourglass Body Transformation</h3>
                <p className="mt-2 text-gray-700">
                  16 sessions, personalized diet plan, progress tracking, meditation, and 24/7 WhatsApp support.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-700">
                  <span className="rounded-full bg-white px-3 py-1 shadow-sm">Personalized diet</span>
                  <span className="rounded-full bg-white px-3 py-1 shadow-sm">Progress tracking</span>
                  <span className="rounded-full bg-white px-3 py-1 shadow-sm">Meditation</span>
                  <span className="rounded-full bg-white px-3 py-1 shadow-sm">24/7 support</span>
                </div>
              </div>
              <div className="sm:col-span-1">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
                  <div className="text-sm text-gray-600">Offer Price</div>
                  <div className="mt-1 text-3xl font-semibold text-gray-900">₹8,000</div>
                  <div className="text-xs text-gray-500">Save ₹4,000</div>
                  <a
                    href={`${waBase}?text=${encodeURIComponent('Hi! I want to join the 8-Week Hourglass Body Transformation.')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-purple-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-purple-700"
                  >
                    Join Challenge Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Diet & Nutrition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 sm:text-3xl">Diet & Nutrition Plans</h3>
          <p className="mt-2 max-w-2xl text-gray-600">Customized Indian recipes and 24/7 diet support.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {dietPlans.map((d) => (
              <div key={d.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h4 className="text-lg font-medium text-gray-900">{d.title}</h4>
                <p className="mt-2 text-sm text-gray-600">Nutrition tailored to your goals and preferences.</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-base font-semibold text-gray-900">{d.price}</span>
                  <a
                    href={`${waBase}?text=${encodeURIComponent(`Hi! I'm interested in: ${d.title}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-green-600 px-3 py-2 text-xs font-medium text-white transition hover:bg-green-700"
                  >
                    <MessageCircle className="mr-1 h-4 w-4" /> Chat
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
