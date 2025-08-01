import { motion } from "framer-motion";
import { Instagram, MapPin } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-950 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Logo y título */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <img
              src={logo}
              alt="Logo Estética Libertad"
              className="w-20 h-20 mx-auto mb-4 rounded-full shadow-lg"
            />
            <h2
              className="text-4xl font-bold mb-3 bg-gradient-to-r from-amber-400 via-white to-amber-400 bg-clip-text text-transparent"
              style={{
                fontFamily: "Dancing Script, cursive",
              }}
            >
              Estética Libertad
            </h2>
            <p className="text-gray-300 text-lg max-w-md mx-auto leading-relaxed">
              Te esperamos para ayudarte a realzar tu belleza natural con los
              mejores tratamientos.
            </p>
          </motion.div>

          {/* Enlaces sociales */}
          <div
            className="flex justify-center gap-6 text-gray-300 text-xl mb-6"
            style={{ fontFamily: "Lato", fontWeight: 400 }}
          >
            <a
              href="https://www.instagram.com/estetica_libertadgym/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition flex items-center gap-1"
            >
              <Instagram size={20} /> Instagram
            </a>

            <a
              href="https://wa.me/543794286202"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition flex items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
              WhatsApp
            </a>

            <a
              href="https://maps.app.goo.gl/uZxZjEu5BAknL1mM8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition flex items-center gap-1"
            >
              <MapPin size={20} /> Ubicación
            </a>
          </div>

          {/* Separador decorativo */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-32 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mb-6"
          />

          {/* Derechos de autor */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-400"
          >
            <p className="text-sm">
              © {new Date().getFullYear()} Estética Libertad. Todos los derechos
              reservados.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
