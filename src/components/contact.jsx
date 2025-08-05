import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, PhoneCall, MapIcon } from "lucide-react";

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
    const message = `¡Hola! Me interesa obtener información sobre: ${service}.`;
    return `https://wa.me/5493794286202?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-purple-50">
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
            <div className="flex items-center  mb-6 ml-6">
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
                <a
                  href="https://wa.me/543794286202"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-gray-50 transition flex items-center gap-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                  Contactar por WhatsApp
                </a>
              </motion.a>

              <div className="grid grid-cols-2 gap-4">
                <motion.a
                  href="tel:+5493794286202"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center p-3 border-2 border-purple-500 text-purple-700 rounded-xl font-medium hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 hover:border-purple-600 hover:shadow-lg transition-all duration-300"
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
