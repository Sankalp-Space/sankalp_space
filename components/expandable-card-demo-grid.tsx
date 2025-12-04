"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 right-0 bottom-[200px] bg-black/20 z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[2000]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
            className="w-full max-w-[700px] max-h-[85vh] flex flex-col bg-slate-900/95 backdrop-blur-md sm:rounded-3xl border border-slate-700/50 shadow-2xl"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-64 lg:h-64 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div className="flex flex-col flex-1 min-h-0 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1 min-w-0">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-white text-xl mb-2"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-slate-300 text-base leading-relaxed"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-6 py-3 text-sm rounded-full font-bold bg-gradient-to-r from-emerald-500 to-emerald-500 text-white hover:from-emerald-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl flex-shrink-0 ml-4"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>

                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-slate-300 text-sm lg:text-base leading-relaxed overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800 flex-1"
                >
                  {typeof active.content === "function"
                    ? active.content()
                    : active.content}
                </motion.div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-stretch gap-6">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => {
              
              setActive(card);
            }}
            className="p-6 flex flex-col bg-slate-900/80 hover:bg-slate-800/90 rounded-2xl cursor-pointer border border-slate-700/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 h-full"
          >
            <div className="flex flex-col w-full h-full">
              <motion.div layoutId={`image-${card.title}-${id}`} className="mb-4">
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-48 w-full rounded-xl object-cover object-top shadow-md"
                />
              </motion.div>
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-bold text-white text-lg mb-2 text-center"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-slate-300 text-sm text-center leading-relaxed"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Company Website Development",
    title: "DGN Infosolution Website",
    src: "/dgn.png",
    ctaText: "Visit Site",
    ctaLink: "https://dgni.in",
    content: () => {
      return (
        <p>
          <strong className="text-emerald-400">Technologies:</strong> React.js, Node.js, Express.js, MongoDB, Tailwind CSS, IIS Server
          <br /><br />
          Developed a comprehensive company website for DGN Infosolution, an IT services provider, featuring modern design and robust functionality. The platform serves as a digital showcase for their extensive range of IT solutions and transparent pricing structure. Key features include an intuitive service portfolio display showcasing software development, cloud solutions, and digital transformation services; a dynamic pricing module for flexible service packages; an admin-friendly content management system for easy updates; performance optimization through image compression and caching; responsive design ensuring seamless user experience across all devices; and integrated contact methods including forms and live chat.
        </p>
      );
    },
  },
  {
    description: "Healthcare Website Development",
    title: "ImmunoDiag — Diagnostic Lab Website",
    src: "/immunodiag.png",
    ctaText: "Visit Site",
    ctaLink: "https://immunodiag.com",
    content: () => {
      return (
        <p>
          <strong className="text-emerald-400">Technologies:</strong> React.js, Tailwind CSS, Framer Motion, EmailJS
          <br /><br />
          Developed a professional healthcare website for ImmunoDiag, a diagnostic laboratory specializing in medical testing services. The platform serves as a comprehensive digital presence for the lab, enabling patients and healthcare providers to access services and information seamlessly. Key features include an organized test services showcase with detailed descriptions, pricing, and preparation instructions; EmailJS integration for direct appointment scheduling and inquiries without complex backend infrastructure; a comprehensive contact information hub with multiple communication channels; educational patient resources about diagnostic procedures and health information; mobile-optimized responsive design ensuring accessibility across all devices; and smooth Framer Motion animations enhancing user experience for interactive elements and page transitions.
        </p>
      );
    },
  },
  {
    description: "AI SaaS Platform",
    title: "Imagify — AI Text-to-Image",
    src: "/imagify.png",
    ctaText: "View Demo",
    ctaLink: "https://imagify1-13gr.onrender.com",
    content: () => {
      return (
        <p>
          <strong className="text-emerald-400">Technologies:</strong> React.js, Tailwind CSS, Node.js, MongoDB, JWT, Razorpay API, ClipDrop API
          <br /><br />
          Built a comprehensive AI SaaS platform that transforms text descriptions into high-quality images using advanced AI technology. The platform features a subscription-based model with credit system for monetization. Key features include ClipDrop API integration for converting text prompts into stunning visuals with multiple style options; JWT-based secure authentication with password hashing; a flexible credit system for purchasing and managing image generation credits; Razorpay payment gateway integration for seamless transactions; an intuitive user dashboard for credit management and generation history; and responsive design built with modern UI/UX principles for optimal experience across all devices.
        </p>
      );
    },
  },
  {
    description: "Real-Time Geolocation Tracking Application",
    title: "Real-Time Geolocation Tracking Application",
    src: "/location.png",
    ctaText: "Github Repo",
    ctaLink: "https://github.com/Sankalp-Space/Realtime-Trackerr",
    content: () => {
      return (
        <p>
          <strong className="text-emerald-400">Technologies:</strong> Node.js, Express.js, Socket.io, Leaflet.js, HTML5 Geolocation API
          <br /><br />
          Developed a sophisticated real-time geolocation tracking system that enables live location sharing and monitoring across multiple users. The application showcases advanced real-time web development capabilities with seamless map integration and instant location updates. Key features include continuous GPS tracking with automatic location broadcasting to connected users; dynamic map visualization using Leaflet.js with custom markers and real-time position updates; Socket.io integration for instant bidirectional communication between server and multiple clients; multi-user support with unique identification and tracking; robust connection management with event handling for user connections and disconnections; performance optimization ensuring efficient data transmission and minimal latency; and privacy controls with user consent mechanisms and location permission handling for responsible tracking.
        </p>
      );
    },
  },
];
