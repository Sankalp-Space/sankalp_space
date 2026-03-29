"use client";
import React, { useEffect, useRef } from "react";
import {
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { Confetti, ConfettiRef } from "@/components/ui/confetti";
import { Globe } from "@/components/ui/globe"

const Footer = () => {
  // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "YOUR_FORM_ID";
  const [state, handleSubmit] = useForm(formspreeId);
  const confettiRef = useRef<ConfettiRef>(null);

  useEffect(() => {
    if (state.succeeded) {
      confettiRef.current?.fire({
        particleCount: 150,
        spread: 100,
      });
    }
  }, [state.succeeded]);

  const links = [
    { name: "Home", href: '#home' },
    { name: "Skill", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    
  ];

  const socials = [
    { name: "Github", icon: <RxGithubLogo />, href: "https://github.com/Sankalp-Space" },
    { name: "Linkedin", icon: <RxLinkedinLogo />, href: "https://www.linkedin.com/in/sankalp-space1/" },
    { name: "X (Twitter)", icon: <RxTwitterLogo />, href: "https://x.com/sankalp_spacex" },
    { name: "Instagram", icon: <RxInstagramLogo />, href: "https://www.instagram.com/sankalp_shrivastav95?igsh=MThkZDlyOGJrYnZpeg==" },
  ];

  const MotionLink = motion.a;

  return (
    <div id="contact" className="relative z-[20] mt-16 w-full bg-transparent text-gray-200 shadow-lg">
      <Confetti
        ref={confettiRef}
        manualstart={true}
        className="absolute left-0 top-0 w-full h-full z-10 pointer-events-none"
      />
      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 pb-8 sm:px-8">
        <div className="mb-12 grid w-full grid-cols-1 items-start gap-12 md:grid-cols-3 md:items-center md:gap-8">
          {/* Left Side: Links & Socials */}
          <div className="grid grid-cols-2 gap-8 sm:gap-10 md:col-span-1">
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

          {/* Middle: Email Form */}
          <div className="flex flex-col items-start justify-center md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-2">
              Let&apos;s create great things together
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
              <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col items-start gap-3">
                <div className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center">
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
          {/* Right Side: Globe */}
          <div className="relative flex h-[260px] w-full items-center justify-center md:col-span-1 md:-mt-96 md:h-[150px]">
            <Globe className="max-w-[340px] md:max-w-[420px]" />
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full border-t border-slate-700/50 pt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Sankalp Shrivastav. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
