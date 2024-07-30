"use client"
import { AnimatePresence, motion } from "framer-motion";

interface MaxWrapperProps {
  children: React.ReactNode;
  className?: string;
}
export const MaxWrapper = ({
  children,
  className,
  ...rest
}: MaxWrapperProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        {...rest}
        className="pt-10 md:pt-[5rem] flex flex-col gap-10 md:gap-28 px-5  md:px-14 lg:px-20 overflow-x-hidden max-w-screen-xl mx-auto"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
