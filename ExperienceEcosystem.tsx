import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '../ui/card'

export default function ExperienceEcosystem() {
  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light mb-6">Experience the Ecosystem</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how our products work together to create an unmatched audio experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-4">Seamless Integration</h3>
            <p className="text-gray-600">
              All our devices work together perfectly, creating a harmonious audio environment.
            </p>
          </Card>

          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-4">Smart Controls</h3>
            <p className="text-gray-600">
              Intuitive touch controls and automatic device switching for effortless use.
            </p>
          </Card>

          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-4">Ecosystem Benefits</h3>
            <p className="text-gray-600">
              Enhanced features when using multiple Theta Sound products together.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
