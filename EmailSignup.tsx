import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function WaitlistSignup() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !message) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbz3IazWdagcL6MMMzdxa-cbjk3Vl8oVIJAo1qyOoVzPHCGC8DrbadzENID3Iwb29Bu2uA/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      if (!response.ok) throw new Error("Submission failed.");

      setIsSubmitted(true);
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong. Please try again.");
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
          </p>
        </motion.div>

        <motion.div
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {!isSubmitted ? (
            <div className="p-8 bg-gray-100 rounded-3xl" style={{ boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff" }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-6 py-4 text-lg bg-gray-200 border-0 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none"
                    style={{ boxShadow: "inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff" }}
                    required
                  />
                  <Mail className="absolute right-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What excites you most?"
                  required
                  className="w-full px-6 py-4 text-lg bg-gray-200 border-0 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none"
                  rows={3}
                  style={{ boxShadow: "inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff" }}
                />

                <Button
                  type="submit"
                  disabled={isLoading || !email || !message}
                  className="w-full bg-gray-200 text-gray-900 hover:bg-gray-300 text-lg py-4 rounded-full border-0 font-medium disabled:opacity-50"
                  style={{ boxShadow: "6px 6px 12px #bebebe, -6px -6px 12px #ffffff" }}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-700 mr-2" />
                      Joining...
                    </div>
                  ) : (
                    "Join Waitlist"
                  )}
                </Button>

                {error && <p className="text-sm text-red-600 mt-4">{error}</p>}
                <p className="text-sm text-gray-500 mt-4">
                  Get exclusive updates and early access. No spam, ever.
                </p>
              </form>
            </div>
          ) : (
            <motion.div
              className="p-8 bg-gray-100 rounded-3xl"
              style={{ boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff" }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ boxShadow: "inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff" }}>
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">You're In!</h3>
              <p className="text-gray-600">
                Thanks for joining. Keep an eye on your inbox for what’s next.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
// Note: Replace "YOUR_GOOGLE_WEB_APP_URL" with your actual Google Apps Script web app URL.
// Ensure you have the necessary permissions set up in your Google Apps Script to allow POST requests.