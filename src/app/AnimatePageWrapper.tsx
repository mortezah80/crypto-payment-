"use client";

import React from "react";
import { motion } from "framer-motion";

const AnimatePageWrapper = ({ children }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatePageWrapper;
