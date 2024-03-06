'use client';

import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Button } from "@/components";

export default function Buttons() {
  return (
    <div className="flex gap-4">
      <motion.a
        initial={{ opacity: 0, scale: .5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: .4 }}
        target="_blank"
        href="https://www.linkedin.com/in/luanflorencioo/"
      >
        <Button>
          <FaLinkedin /> LinkedIn
        </Button>
      </motion.a>

      <motion.a
        initial={{ opacity: 0, scale: .5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: .4, delay: .2}}
        target="_blank"
        href="https://github.com/LuanFlorencioo/"
      >
        <Button>
          <FaGithub /> GitHub
        </Button>
      </motion.a>
    </div>
  )
}
