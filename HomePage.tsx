import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Play, Headphones, Smartphone, Shield, Zap, Mail, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";

import HeroSection from "./landing/HeroSection";
import ProductShowcase from "./landing/ProductShowcase";
// import TechFeatures from "./landing/TechFeatures";
// import ExperienceEcosystem from "./landing/ExperienceEcosystem";
import WaitlistSignup from "./landing/EmailSignup";
import StickyNav from "./landing/StickyNav";
import TechFeatures from "./landing/TechFeatures";

const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      <StickyNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main className="relative">
        <HeroSection backgroundY={backgroundY} textY={textY} />
        <ProductShowcase />
        <TechFeatures />
        {/* <ExperienceEcosystem /> */}
        <WaitlistSignup />
        
        {/* Footer */}
        <footer className="bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Theta Sound</h3>
                <p className="text-gray-600 mb-6 max-w-md">
                  Reimagining TWS earphones through innovative design and User Interactive technology.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition-colors">Press</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center shadow-inner cursor-pointer hover:shadow-lg transition-shadow">
                    <span className="text-gray-700 text-sm font-medium">T</span>
                  </div>
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center shadow-inner cursor-pointer hover:shadow-lg transition-shadow">
                    <span className="text-gray-700 text-sm font-medium">I</span>
                  </div>
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center shadow-inner cursor-pointer hover:shadow-lg transition-shadow">
                    <span className="text-gray-700 text-sm font-medium">L</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500">
              <p>&copy; 2024 Theta Sound. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default HomePage;