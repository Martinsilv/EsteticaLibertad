import React from "react";
import { motion } from "framer-motion";
import { Star, Heart, Sparkles } from "lucide-react";

const Hero = () => {
  const floatingIcons = [
    { Icon: Star, delay: 0, x: 20, y: -20 },
    { Icon: Heart, delay: 0.5, x: -30, y: 10 },
    { Icon: Sparkles, delay: 1, x: 40, y: -30 },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{
              delay,
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute text-pink-100"
            style={{
              left: `${20 + index * 30}%`,
              top: `${30 + index * 20}%`,
            }}
          >
            <motion.div
              animate={{ x, y }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Icon className="w-8 h-8 md:w-12 md:h-12" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-500 bg-clip-text text-transparent">
              Cuidamos tu
            </span>
            <br />
            <span
              className="text-gray-800"
              style={{ fontFamily: "Lato", fontWeight: 700 }}
            >
              Bienestar y Belleza
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "Lato", fontWeight: 400 }}
          >
            Tratamientos faciales, corporales, masajes y atención kinesiológica
            para acompañarte en tu bienestar diario. Tu espacio para relajarte,
            cuidarte y sentirte mejor.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(236, 72, 153, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .querySelector("#services")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="bg-gradient-to-r from-purple-700 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                fontFamily: "Lato",
                fontWeight: 600,
              }}
            >
              Ver Servicios
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .querySelector("#contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-purple-500 text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-all duration-300"
              style={{
                fontFamily: "Lato",
                fontWeight: 600,
              }}
            >
              Contactar
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
