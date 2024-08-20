"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import PricingPage from "./_components/pricing-cards";

const Pricing = () => {
  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <PricingPage />
      </motion.main>
    </AnimatePresence>
  );
};

export default Pricing;
