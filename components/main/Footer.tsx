"use client";
import React from "react";
import {
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

const Footer = () => {
  // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "YOUR_FORM_ID";
  const [state, handleSubmit] = useForm(formspreeId);

  const links = [
    { name: "Home", href: "/" },
    { name: "Skill", href: "#about-me" },
    { name: "Projects", href: "#projects" },
    { name: "Contact Me", href: "#contact" },
  ];

  const socials = [
    { name: "Github", icon: <RxGithubLogo />, href: "https://github.com/Sankalp-Space" },
    { name: "Linkedin", icon: <RxLinkedinLogo />, href: "https://www.linkedin.com/in/sankalpshrivastav/" },
    { name: "X (Twitter)", icon: <RxTwitterLogo />, href: "https://x.com/Sankalp_shri" },
    { name: "Instagram", icon: <RxInstagramLogo />, href: "https://www.instagram.com/sankalp_shri/" },
  ];

  const MotionLink = motion.a;

  return (
    <div id="contact" className="w-full h-full bg-transparent text-gray-200 shadow-lg p-8 md:p-12 relative z-30">
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
          {/* Left Side: Links & Socials */}
          <div className="md:col-span-1 grid grid-cols-2 gap-8">
            {/* Links */}
            <div>
              <div className="font-bold text-lg mb-4">Links</div>
              <div className="flex flex-col space-y-3">
                {links.map((link) => (
                  <MotionLink
                    key={link.name}
                    href={link.href}
                    className="text-base text-gray-300"
                    whileHover={{ x: 5, color: "#a7f3d0" }} // emerald-200
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {link.name}
                  </MotionLink>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div>
              <div className="font-bold text-lg mb-4">Socials</div>
              <div className="flex flex-col space-y-3">
                {socials.map((social) => (
                  <MotionLink
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-base text-gray-300"
                    whileHover={{ x: 5, color: "#a7f3d0" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </MotionLink>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Email Form */}
          <div className="md:col-span-2 flex flex-col justify-center items-start">
            <h3 className="text-2xl font-bold text-white mb-2">
              I know the chemistry you know the business 😉
            </h3>
            <p className="text-gray-400 mb-6">
              Drop your email and I&apos;ll contact you soon ;)
            </p>
            {state.succeeded ? (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-green-400 text-lg"
              >
                Thanks for reaching out! I&apos;ll be in touch soon.
              </motion.p>
            ) : (
              <form onSubmit={handleSubmit} className="w-full max-w-md flex items-start flex-col">
                <div className="w-full flex items-center gap-2">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="email here..."
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-emerald-700/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                  />
                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    className="px-6 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-emerald-600 to-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {state.submitting ? "Sending..." : "Send"}
                  </motion.button>
                </div>
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="mt-2 text-red-400 text-sm"
                />
              </form>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full pt-8 border-t border-slate-700/50 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Sankalp Shrivastav. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;