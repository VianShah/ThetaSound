import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Play } from "lucide-react";
import { Button } from "../components/ui/button";

const YourComponent = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Your Component</h1>
        <Button>
          <Play />
          Play
        </Button>
        <Button>
          <ChevronDown />
          More Info
        </Button>
      </motion.div>
    </div>
  );
};

export default YourComponent;