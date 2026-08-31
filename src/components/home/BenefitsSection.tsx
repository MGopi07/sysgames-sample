"use client";
import { motion } from "framer-motion";
import { benefits } from "@/data/benefits";
import { Key, TrendingUp, Rocket, Network, Blocks, ShieldCheck, Wallet, Headphones, BrainCircuit, Scale } from "lucide-react";

const getIcon = (iconName: string, className: string = "") => {
  switch (iconName) {
    case "Key": return <Key size={32} className={className} />;
    case "TrendingUp": return <TrendingUp size={32} className={className} />;
    case "Rocket": return <Rocket size={32} className={className} />;
    case "Network": return <Network size={32} className={className} />;
    case "Blocks": return <Blocks size={32} className={className} />;
    case "ShieldCheck": return <ShieldCheck size={32} className={className} />;
    case "Wallet": return <Wallet size={32} className={className} />;
    case "Headphones": return <Headphones size={32} className={className} />;
    case "BrainCircuit": return <BrainCircuit size={32} className={className} />;
    case "Scale": return <Scale size={32} className={className} />;
    default: return <ShieldCheck size={32} className={className} />;
  }
};

export default function BenefitsSection() {
  return (
    <section className="py-16 bg-[#121212] relative overflow-hidden" id="company">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CgkJPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgoJCTxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHptMTAgMTB2MTBoMTBWMTB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KCTwvc3ZnPg==')] opacity-50"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        <div className="text-center max-w-4xl mx-auto mb-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6 w-fit shadow-[0_0_15px_rgba(var(--primary-rgb),0.1)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
            </span>
            <span className="text-sm font-semibold text-[var(--primary)] tracking-widest uppercase">Key Advantages</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Why Choose an iGaming Software Development Company
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-accent rounded-full mx-auto"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {benefits.map((benefit, index) => {
            // Row 1 (0, 1, 2) & Row 3 (7, 8, 9) = 3 items -> span 4
            // Row 2 (3, 4, 5, 6) = 4 items -> span 3
            let colSpanClass = "lg:col-span-4";
            if (index >= 3 && index <= 6) {
              colSpanClass = "lg:col-span-3";
            }

            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`glass-card rounded-2xl p-6 group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden h-full flex flex-col ${colSpanClass}`}
              >
                {/* Gradient hover border effect */}
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                <div className="text-6xl font-black text-white/5 absolute top-2 right-4 select-none group-hover:text-white/10 transition-colors">
                  {index + 1}
                </div>

                <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[var(--secondary)] group-hover:to-[var(--primary)] group-hover:border-transparent group-hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)] transition-all duration-300">
                  {getIcon(benefit.icon, "text-gray-400 group-hover:text-white transition-colors duration-300")}
                </div>

                <h3 className="text-xl font-bold text-white mb-4 relative z-10">{benefit.title}</h3>

                <ul className="space-y-3 relative z-10 mt-auto flex-grow">
                  {benefit.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rotate-45 bg-[var(--primary)] mt-2 flex-shrink-0 group-hover:shadow-[0_0_8px_rgba(var(--primary-rgb),0.8)] transition-shadow duration-300"></span>
                      <span className="text-sm text-gray-400 leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
