import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StickyNav({ isMenuOpen, setIsMenuOpen }) {
  const { scrollY } = useScroll();
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(224, 224, 224, 0)", "rgba(224, 224, 224, 0.95)"]
  );
  const navBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(10px)"]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 px-6 py-4"
      style={{ backgroundColor: navBackground }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          className="text-2xl font-bold text-gray-900"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Theta Sound
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('products')}
            className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection('technology')}
            className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
          >
            Technology
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
          >
            Experience
          </button>
          <Button
            onClick={() => scrollToSection('waitlist')}
            className="bg-gray-200 text-gray-900 hover:bg-gray-300 shadow-inner border-0 rounded-full px-6"
            style={{
              boxShadow: "inset 2px 2px 5px #bebebe, inset -2px -2px 5px #ffffff"
            }}
          >
            Join Waitlist
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-full bg-gray-200 shadow-inner"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            boxShadow: "inset 2px 2px 5px #bebebe, inset -2px -2px 5px #ffffff"
          }}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 right-0 bg-gray-100 border-t border-gray-200 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="px-6 py-4 space-y-4">
            <button
              onClick={() => scrollToSection('products')}
              className="block w-full text-left text-gray-700 hover:text-gray-900 py-2"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('technology')}
              className="block w-full text-left text-gray-700 hover:text-gray-900 py-2"
            >
              Technology
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="block w-full text-left text-gray-700 hover:text-gray-900 py-2"
            >
              Experience
            </button>
            <Button
              onClick={() => scrollToSection('waitlist')}
              className="w-full bg-gray-200 text-gray-900 hover:bg-gray-300 shadow-inner border-0 rounded-full"
              style={{
                boxShadow: "inset 2px 2px 5px #bebebe, inset -2px -2px 5px #ffffff"
              }}
            >
              Join Waitlist
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}