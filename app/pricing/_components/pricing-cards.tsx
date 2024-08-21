"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";

const pricingPlans = [
  {
    name: "Basic",
    description: "Start with essential tools to boost your online presence.",
    monthlyPrice: "8000",
    annualPrice: 49,
    link: "https://cal.com/exionstech/client-meet",
    features: [
      "SEO Strategy & Topic Recommendations",
      "Competitor Analysis to stand out",
      "Built-in Keyword Research",
      "Target latest Google trends",
      "SEO optimized blogs and socials",
      "Technical SEO analysis and Reports",
      "Target 100+ regions and languages",
    ],
  },
  {
    name: "Professional",
    description:
      "Unlock enhanced features and premium content to supercharge your business.",
    monthlyPrice: 299,
    annualPrice: 199,
    link: "https://github.com/ansub/syntaxUI",
    features: [
      "Everything in Basic plan",
      "Get 25 premium blogs",
      "Index up to 1000 pages",
      "Premium support",
      "Local SEO",
      "SEO Agent",
    ],
  },
  {
    name: "Premium",
    description:
      "Ultimate customization and dedicated support for enterprises.",
    monthlyPrice: 2499,
    annualPrice: 1666,
    link: "https://github.com/ansub/syntaxUI",
    features: [
      "Everything in Professional plan",
      "Get Unlimited premium blogs",
      "Add your own AI Model key",
      "Premium support & training sessions",
    ],
  },
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"W" | "U" | "S">("W");

  const Heading = () => (
    <div className="relative z-10 my-12 flex flex-col items-center justify-center gap-4 px-5 md:px-0 mb-14">
      <div className="flex w-full flex-col items-start justify-center space-y-4 md:items-center">
        <p className="mt-2 text-4xl md:text-5xl font-bold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-200">
          Fair pricing, unfair advantage
        </p>
        <p className="text-md max-w-2xl text-gray-700 md:text-center dark:text-gray-300">
          Get started with Exions Tech today and take your business to the next level.
        </p>
      </div>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setBillingCycle("W")}
          className={cn(
            `rounded-lg px-4 py-2 text-sm font-medium `,
            billingCycle === "W"
              ? "relative bg-secondary text-white "
              : "text-gray-700 hover:bg-secondary/25 dark:text-gray-300 dark:hover:text-black"
          )}
        >
          Web & App
          {billingCycle === "W" && <BackgroundShift shiftKey="web" />}
        </button>
        <button
          onClick={() => setBillingCycle("U")}
          className={cn(
            `rounded-lg px-4 py-2 text-sm font-medium `,
            billingCycle === "U"
              ? "relative bg-secondary text-white "
              : "text-gray-700 hover:bg-secondary/25 dark:text-gray-300 dark:hover:text-black"
          )}
        >
          UI/UX Design
          {billingCycle === "U" && <BackgroundShift shiftKey="uiux" />}
        </button>
        <button
          onClick={() => setBillingCycle("S")}
          className={cn(
            `rounded-lg px-4 py-2 text-sm font-medium `,
            billingCycle === "S"
              ? "relative bg-secondary text-white "
              : "text-gray-700 hover:bg-secondary/25 dark:text-gray-300 dark:hover:text-black"
          )}
        >
          Socials Handling
          {billingCycle === "S" && <BackgroundShift shiftKey="socials" />}
        </button>
      </div>
    </div>
  );

  const PricingCards = () => (
    <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 lg:flex-row lg:gap-4 px-5 md:px-0">
      {pricingPlans.map((plan, index) => (
        <div
          key={index}
          className="w-full rounded-xl border-[1px] border-gray-300 p-6 text-left dark:border-gray-600"
        >
          <p className="mb-1 mt-0 text-sm font-medium uppercase text-secondary">
            {plan.name}
          </p>
          <p className="my-0 mb-6 text-sm text-gray-600">{plan.description}</p>
          <div className="mb-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={billingCycle}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="my-0 text-3xl font-semibold text-gray-900 dark:text-gray-100"
              >
                <span>
                ₹
                  {billingCycle === "W"
                    ? plan.monthlyPrice
                    : plan.annualPrice}
                </span>
              </motion.p>
            </AnimatePresence>
            <motion.button
              whileTap={{ scale: 0.985 }}
              onClick={() => {
                window.open(plan.link);
              }}
              className="mt-8 w-full rounded-lg bg-text py-2 text-sm font-medium text-background hover:bg-secondary transition-all duration-200 ease-in-out"
            >
              Get Started
            </motion.button>
          </div>
          {plan.features.map((feature, idx) => (
            <div key={idx} className="mb-3 flex items-center gap-2">
              <Check className="text-secondary" size={18} />
              <span className="text-sm text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <section className="relative w-full overflow-hidden pb-10">
      <Heading />
      <PricingCards />
    </section>
  );
};

const BackgroundShift = ({ shiftKey }: { shiftKey: string }) => (
  <motion.span
    key={shiftKey}
    layoutId="bg-shift"
    className="absolute inset-0 -z-10 rounded-lg bg-secondary/80"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
  />
);

export default function PricingPage() {
  return <Pricing />;
}
