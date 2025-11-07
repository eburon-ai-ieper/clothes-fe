import { fadeInUp } from "@/lib/utils";
import { motion } from "motion/react";
const Greeting = () => {
  return (
    <div>
      <motion.h1 className="text-4xl font-bold relative" {...fadeInUp(0)}>
        Welcome to our store
      </motion.h1>
      <div>
        <motion.p
          className="text-lg font-semibold relative"
          {...fadeInUp(0.15)}
        >
          Perfect Fit, Powered by AI
        </motion.p>
      </div>
    </div>
  );
};

export default Greeting;
