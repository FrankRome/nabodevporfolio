import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ExternalLink, Star } from 'lucide-react';

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
              <Star className="text-yellow-300" size={20} fill="currentColor" />
              <span className="text-white font-heading font-semibold">Próximo Lanzamiento</span>
            </div>

            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              ¡Apoya mi Nuevo Juego!
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Estoy trabajando en mi nuevo proyecto y me encantaría contar con tu apoyo. Agrégalo a tu lista de deseados en Steam.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <img
                  src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4157200/0bd67165d39a77033d7abfc14314bb59f9c7e2df/header.jpg?t=1768679290"
                  alt="Lavatro"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div className="p-8 flex flex-col justify-center">
                <h3 className="font-heading font-bold text-3xl text-primary-800 mb-3">
                  Lavatro
                </h3>

                <p className="text-neutral-700 mb-6 leading-relaxed">
                  Mi próximo juego está en desarrollo y será publicado en Steam. Tu apoyo agregándolo a tu lista de deseados significa mucho para mí y ayuda a que más personas lo descubran.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="https://store.steampowered.com/app/4157200/Lavatro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-heading font-semibold px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-xl"
                  >
                    <Heart size={20} />
                    <span>Agregar a Deseados</span>
                  </motion.a>

                  <motion.a
                    href="https://store.steampowered.com/app/4157200/Lavatro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-heading font-medium px-6 py-3 rounded-full transition-all"
                  >
                    <ExternalLink size={20} />
                    <span>Ver en Steam</span>
                  </motion.a>
                </div>

                <div className="mt-6 pt-6 border-t border-neutral-200">
                  <p className="text-sm text-neutral-600 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-accent-500 rounded-full animate-pulse"></span>
                    En desarrollo activo
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
              ¡Gracias por tu apoyo! Cada lista de deseados cuenta 💙
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SteamWishlist;
