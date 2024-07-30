"use client";
import { AnimatePresence, motion } from "framer-motion";
import NavBar from "@/components/navbar";
import React from "react";
import FooterSection from "../_components/footer";
import { MaxWrapper } from "@/components/max-wrapper";
import PricingPage from "./_components/pricing-cards";

const Pricing = () => {
  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <NavBar />
        <PricingPage />
      </motion.main>
    </AnimatePresence>
  );
};

export default Pricing;
