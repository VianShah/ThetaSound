import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Headphones, Shield } from 'lucide-react'

export default function TechFeatures() {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Fast',
      description: 'Ultra-low latency wireless connection for seamless audio experience.'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Superior Sound',
      description: 'Advanced acoustic engineering for pristine audio quality.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure Fit',
      description: 'Ergonomic design ensures comfort and stability during use.'
    }
  ]

  return (
    <section id="technology" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light mb-6">Advanced Technology</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Cutting-edge features that set us apart from the competition.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="inline-block p-4 rounded-full bg-gray-200 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
