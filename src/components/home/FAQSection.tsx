"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/data/faqs";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  const toggleFaq = (faqId: string) => {
    const isOpening = openId !== faqId;
    setOpenId(isOpening ? faqId : null);
    
    if (isOpening) {
      setTimeout(() => {
        const element = document.getElementById(`faq-container-${faqId}`);
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 300);
    }
  };

  return (
    <section className="py-24 bg-[#0A0A0A] relative">
      {/* Background glow wrapped to prevent overflow without breaking sticky */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--secondary)]/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Refactored to Grid for 100% reliable cross-browser layout without gap squishing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start relative">

          {/* Left Side: Container that sticks */}
          <div className="lg:col-span-5 lg:sticky lg:top-[15vh] flex flex-col justify-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 backdrop-blur-sm mb-6 w-fit shadow-[0_0_15px_rgba(var(--primary-rgb),0.1)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
              </span>
              <span className="text-sm font-semibold text-[var(--primary)] tracking-widest uppercase">FAQ</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Frequently Asked Questions
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-8"
            >
              Everything you need to know about our enterprise iGaming solutions, compliance standards, and integration capabilities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="hidden lg:block p-6 rounded-2xl glass-card border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-2">Still have questions?</h3>
              <p className="text-gray-400 mb-6">Our enterprise integration specialists are available 24/7.</p>
              <button className="w-full py-4 rounded-xl font-bold text-gray-900 bg-gradient-accent hover:opacity-90 transition-opacity">
                Contact Support
              </button>
            </motion.div>
          </div>

          {/* Right Side: Scrollable Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.slice(0, 10).map((faq, index) => {
              const isOpen = openId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  id={`faq-container-${faq.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`glass-card rounded-2xl border transition-all duration-300 relative overflow-hidden ${isOpen
                    ? "border-[var(--primary)]/40 bg-white/5 shadow-[0_0_30px_rgba(var(--primary-rgb),0.05)]"
                    : "border-white/5 hover:border-white/10"
                    }`}
                >
                  {/* Subtle gradient background for active state */}
                  {isOpen && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/5 to-[var(--secondary)]/5 pointer-events-none"></div>
                  )}

                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-6 lg:p-8 text-left relative z-10 focus:outline-none"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <div className="flex gap-4 lg:gap-6 items-center">
                      <span className={`font-mono text-sm px-3 py-1.5 rounded-lg border flex-shrink-0 transition-colors duration-300 ${isOpen
                        ? "border-[var(--primary)]/30 text-[var(--primary)] bg-[var(--primary)]/10 shadow-[0_0_10px_rgba(var(--primary-rgb),0.2)]"
                        : "border-white/10 text-gray-400 bg-white/5"
                        }`}>
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <span className={`font-semibold text-base lg:text-lg transition-colors duration-300 ${isOpen ? "text-white" : "text-gray-300"}`}>
                        {faq.question}
                      </span>
                    </div>

                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-300 ${isOpen ? "bg-[var(--primary)]/10" : "bg-white/5"
                      }`}>
                      <ChevronDown className={`transition-transform duration-500 ${isOpen ? "rotate-180 text-[var(--primary)]" : "text-gray-400"
                        }`} />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${faq.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden relative z-10"
                      >
                        <div className="p-6 lg:p-8 pt-0 lg:pt-0 ml-4 lg:ml-6 pl-[3.5rem] lg:pl-[4.5rem]">
                          <div className="w-8 h-[1px] bg-gradient-to-r from-[var(--primary)]/50 to-transparent mb-4"></div>
                          <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
