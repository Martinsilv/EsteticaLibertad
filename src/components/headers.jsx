import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import logo from "../assets/logo.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Inicio", href: "#hero" },
    { name: "Servicios", href: "#services" },

    { name: "Horarios", href: "#schedule" },
    { name: "Contacto", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  // Variantes de animación para el menú móvil
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  // Variantes para cada item del menú
  const menuItemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      scale: 0.95,
    },
    open: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Variantes para el icono del menú
  const menuIconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-pink-100"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center  space-x-2"
          >
            <img src={logo} alt="Logo" className="w-14 h-14" />
            <span
              className="text-xl font-bold text-gray-800"
              style={{
                fontFamily: "Dancing Script, cursive",
                fontSize: "1.5rem",
              }}
            >
              Estética Libertad
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-pink-50 transition-colors relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              variants={menuIconVariants}
              animate={isMobileMenuOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-gray-700" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-gray-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden overflow-hidden "
            >
              <motion.div
                className="bg-white/95  backdrop-blur-md rounded-xl shadow-xl mt-3 border border-pink-100"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="py-4 px-2 flex flex-col justify-center items-center space-y-8">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      variants={menuItemVariants}
                      whileHover={{
                        scale: 1.02,
                        backgroundColor: "#3642",
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => scrollToSection(item.href)}
                      className="block w-full text-left px-4 py-3 text-gray-700 hover:text-purple-600 rounded-lg transition-colors font-bold text-lg  "
                    >
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        {item.name}
                      </motion.span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
