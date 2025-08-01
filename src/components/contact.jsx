import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Send,
  Star,
  Heart,
  Dumbbell,
  PhoneCall,
  MapIcon,
} from "lucide-react";

const Contact = () => {
  const [selectedService, setSelectedService] = useState("");

  const services = [
    "Tratamientos Faciales",
    "Tratamientos Corporales",
    "Masajes Deportivos",
    "Atención Kinesiológica",
    "Consulta General",
  ];

  const generateWhatsAppMessage = () => {
    const service = selectedService || "Consulta General";
    const message = `¡Hola! Me interesa obtener información sobre: ${service}. Me gustaría agendar un turno y conocer más detalles sobre los tratamientos disponibles.`;
    return `https://wa.me/5493794286202?text=${encodeURIComponent(message)}`;
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gradient-to-br from-pink-50 to-purple-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contáctanos por{" "}
            <span className="bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
              WhatsApp
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Estamos aquí para ayudarte. Seleccioná el servicio que te interesa y
            coordinamos tu turno.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-xl">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 ml-4">
                ¡Hablemos!
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ¿Qué servicio te interesa?
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Seleccioná un servicio</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <motion.a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center w-full bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contactar por WhatsApp
              </motion.a>

              <div className="grid grid-cols-2 gap-4">
                <motion.a
                  href="tel:+5493794286202"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center p-3 border-2 border-purple-400 text-purple-600 rounded-xl font-medium hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:border-purple-500 hover:shadow-md transition-all duration-300"
                >
                  <PhoneCall className="w-5 h-5 mr-2" /> Llamar
                </motion.a>
                <motion.a
                  href="https://maps.app.goo.gl/uZxZjEu5BAknL1mM8"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center p-3 border-2 border-purple-500 text-purple-700 rounded-xl font-medium hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 hover:border-purple-600 hover:shadow-lg transition-all duration-300"
                >
                  <MapIcon className="w-5 h-5 mr-2" /> Ubicación
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
