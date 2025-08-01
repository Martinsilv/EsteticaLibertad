import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Stethoscope, Dumbbell, Stars } from "lucide-react";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      name: "Tratamientos Faciales",
      description:
        "Limpiezas profundas, microdermoabrasión, rejuvenecimiento y más",
      price: "Consultar",
      icon: Heart,
      features: [
        "Limpieza facial",
        "Microdermoabrasión",
        "Rejuvenecimiento",
        "Limpieza facial mas HIFU",
      ],
      color: "from-purple-500 to-purple-400",
    },
    {
      id: 2,
      name: "Tratamientos Corporales",
      description: "Reducción, tonificación, drenajes y masajes terapéuticos",
      price: "Consultar",
      icon: Stars,
      features: [
        "Reductores abdomen/piernas",
        "Tonificación abdomen glúteos",
        "Drenaje manual",
        "Masajes relajantes y descontracturantes",
      ],
      color: "from-cyan-600 to-cyan-700",
    },
    {
      id: 3,
      name: "Masajes Deportivos",
      description: "Mantenimiento físico, pre y post entreno",
      price: "Consultar",
      icon: Dumbbell, // reemplazalo si tenés otro ícono en mente
      features: [
        "Pre-entreno",
        "Post-entreno",
        "Mantenimiento deportivo",
        "Enfoque personalizado",
      ],
      color: "from-blue-600 to-sky-500",
    },
    {
      id: 4,
      name: "Atención Kinesiológica",
      description:
        "Rehabilitación física, masajes y recuperación deportiva guiada",
      price: "Consultar",
      icon: Stethoscope, // si no tenés este ícono, podés usar 'HeartPulse' o similar
      features: [
        "Rehabilitación",
        "Masajes terapéuticos",
        "Recuperación post-lesión",
        "Acompañamiento profesional",
      ],
      color: "from-teal-500 to-emerald-500",
    },
  ];

  const generateWhatsAppMessage = (service) => {
    const message = `Hola! Me interesa el servicio de ${service.name}. Me gustaría recibir más información y agendar una cita.`;
    return `https://wa.me/5493415551234?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            style={{
              fontFamily: "Lato",
              fontWeight: 600,
            }}
          >
            Nuestros
            <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
              Servicios
            </span>
          </h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            style={{ fontFamily: "Lato", fontWeight: 400 }}
          >
            Ofrecemos una amplia gama de tratamientos estéticos para realzar tu
            belleza natural
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`} />

                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${service.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3
                        className="text-xl font-semibold text-gray-800"
                        style={{ fontFamily: "Lato", fontWeight: 700 }}
                      >
                        {service.name}
                      </h3>
                      <p className="text-pink-600 font-medium">
                        {service.price}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <motion.a
                    href={generateWhatsAppMessage(service)}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`block w-full text-center py-3 px-6 rounded-xl bg-gradient-to-r ${service.color} text-white font-semibold hover:shadow-lg transition-all duration-300`}
                  >
                    Consultar por WhatsApp
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
