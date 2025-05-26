import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '../ui/card'

export default function ProductShowcase() {
  return (
    <section id="products" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light mb-6">Our Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience superior sound quality with our innovative audio solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-4">Velocity Buds</h3>
            <p className="text-gray-600">
              Next-generation earbuds with advanced noise cancellation and crystal-clear audio.
            </p>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-4">Orbital Dock</h3>
            <p className="text-gray-600">
              Premium charging solution with built-in audio enhancement technology.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
