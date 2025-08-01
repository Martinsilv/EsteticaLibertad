import React from "react";
import { motion } from "framer-motion";
import { Clock, Calendar, MapPin, Phone, MessageCircle } from "lucide-react";

const Schedule = () => {
  const contactInfo = [
    { icon: Phone, text: "+54 9 341 555-1234", link: "tel:+5493415551234" },
    {
      icon: MapPin,
      text: "Av. Pellegrini 1234, Rosario",
      link: "https://maps.google.com",
    },
  ];

  return (
    <section id="schedule" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Horarios y{" "}
            <span className="bg-purple-600 bg-clip-text text-transparent">
              Turnos
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Atendemos de lunes a viernes únicamente con turnos coordinados
            previamente
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Horarios */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-xl">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 ml-4">
                Días de Atención
              </h3>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-400 mb-6">
              <h4 className="font-bold text-gray-800 text-lg mb-2">
                Lunes a Viernes
              </h4>
              <p className="text-green-600 font-semibold">
                Solo con turno previo
              </p>
            </div>

            <div className="bg-gray-100 rounded-xl p-6 opacity-60 border-l-4 border-gray-300">
              <h4 className="font-bold text-gray-600 text-lg mb-2">
                Sábados y Domingos
              </h4>
              <p className="text-gray-500 font-semibold">Cerrado</p>
            </div>
          </motion.div>
        </div>

        {/* Avisos adicionales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="p-4 bg-gradient-to-r from-purple-300 to-purple-400 rounded-xl text-white">
            <p className="text-sm font-medium text-black">⚠️ Importante:</p>
            <p className="text-sm opacity-90 text-black">
              Solo atendemos con turnos previamente coordinados
            </p>
          </div>

          <div className="p-4 bg-gradient-to-r from-purple-600 to-purple-600 rounded-xl text-white">
            <p className="text-sm font-medium">💡 Consejo:</p>
            <p className="text-sm opacity-90">
              Coordiná tu turno con 24hs de anticipación
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;
