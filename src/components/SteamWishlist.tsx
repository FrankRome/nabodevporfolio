import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Gamepad2, Star } from 'lucide-react';

const SteamWishlist: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="steam-wishlist" className="py-24 bg-gradient-to-br from-primary-500 to-primary-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Gamepad2 className="text-yellow-300" size={20} />
              <span className="text-white font-heading font-semibold">Beat 'Em Up · Gameboy Advance</span>
            </div>

            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Knock Time
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Un Beat 'Em Up sobre Latinoamérica 🇻🇪. Eres un boxeador que debe rescatar a su hermano tras ser capturado por la policía corrupta.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-[2/1]">
                <img
                  src="https://img.itch.zone/aW1nLzI5OTcyOTYzLnBuZw==/315x250%23c/np%2Bc%2Bk.png"
                  alt="Knock Time - Gameboy Advance"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div className="p-8 flex flex-col justify-center">
                <h3 className="font-heading font-bold text-3xl text-primary-800 mb-3">
                  Knock Time
                </h3>

                <p className="text-neutral-700 mb-6 leading-relaxed">
                  Un Beat 'Em Up para Gameboy Advance ambientado en Latinoamérica 🇻🇪. Juega como un boxeador dispuesto a todo para rescatar a su hermano de las manos de la policía corrupta. Actualmente cuenta con una demo disponible en itch.io.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="https://www.newgrounds.com/portal/view/1052492"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-heading font-semibold px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-xl"
                  >
                    <Download size={20} />
                    <span>Probar la Demo</span>
                  </motion.a>

                  <motion.a
                    href="https://stuck-pixel-studio.itch.io/knock-time"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-heading font-medium px-6 py-3 rounded-full transition-all"
                  >
                    <ExternalLink size={20} />
                    <span>Ver en itch.io</span>
                  </motion.a>
                </div>

                <div className="mt-6 pt-6 border-t border-neutral-200">
                  <p className="text-sm text-neutral-600 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-accent-500 rounded-full animate-pulse"></span>
                    Demo disponible ahora
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center mt-8"
          >
            <p className="text-white/80 text-sm">
              ¡Pruébala y dime qué te parece! 💙
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SteamWishlist;
