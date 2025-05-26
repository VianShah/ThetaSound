import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function WaitlistSignup() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/email-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to sign up');
      }
      
      setIsSubmitted(true);
    } catch (err) {
      console.error("Error signing up:", err);
      setError(err.message || "Failed to sign up. Please try again.");
      setIsSubmitted(false);
    }
    setIsLoading(false);
  };

  return (
    <section id="waitlist" className="py-24 px-6 bg-gray-50" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Join the <span className="font-bold">Revolution</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-light">
            Be among the first to experience the future of personal audio. 
            Get exclusive access to Theta Sound ecosystem.
          </p>
        </motion.div>

        <motion.div
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {!isSubmitted ? (
            <div
              className="p-8 bg-gray-100 rounded-3xl"
              style={{
                boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff"
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-6 py-4 text-lg bg-gray-200 border-0 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none"
                    style={{
                      boxShadow: "inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff"
                    }}
                    required
                  />
                  <Mail className="absolute right-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
                
                <Button
                  type="submit"
                  disabled={isLoading || !email}
                  className="w-full bg-gray-200 text-gray-900 hover:bg-gray-300 text-lg py-4 rounded-full border-0 font-medium disabled:opacity-50"
                  style={{
                    boxShadow: "6px 6px 12px #bebebe, -6px -6px 12px #ffffff"
                  }}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center"> {/* Centering spinner and text */}
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-700 mr-2" />
                      Joining...
                    </div>
                  ) : (
                    "Join Waitlist"
                  )}
                </Button>
              </form>
              
              {error && (
                <p className="text-sm text-red-600 mt-4">{error}</p>
              )}
              <p className="text-sm text-gray-500 mt-4">
                Get exclusive updates and early access. No spam, ever.
              </p>
            </div>
          ) : (
            <motion.div
              className="p-8 bg-gray-100 rounded-3xl"
              style={{
                boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff"
              }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{
                  boxShadow: "inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff"
                }}
              >
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">You're In!</h3>
              <p className="text-gray-600">
                Welcome to the future of audio. We'll keep you updated on our progress.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            "500+ Early Adopters",
            "Award-Winning Design",
            "Patent-Pending Tech",
            "Coming Q2 2024"
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-3"
                style={{
                  boxShadow: "4px 4px 8px #bebebe, -4px -4px 8px #ffffff"
                }}
              />
              <p className="text-gray-600 font-medium">{stat}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}