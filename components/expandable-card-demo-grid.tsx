"use client";

import React, { useEffect, useId, useRef, useState } from "react";
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
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
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
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
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
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => {
              console.log("Card clicked:", card.title);
              setActive(card);
            }}
            className="p-4 flex flex-col bg-slate-800/50 hover:bg-slate-700/50 rounded-xl cursor-pointer border border-slate-700/50"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
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
          Developed a modern, responsive company website that showcases DGN
          Infosolution's IT services and pricing model, improving user
          engagement across devices. <br /> <br />
          • Implemented dynamic content management modules allowing
          non-technical staff to update service listings and pricing details
          easily.
          <br />
          • Optimized site performance through efficient backend queries, image
          compression, and server-side caching.
          <br />
          <br />
          Technologies: React.js, Node.js, Express.js, MongoDB, Tailwind CSS
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
          Developed a fully responsive website for a diagnostics laboratory to
          showcase test offerings and contact options. <br /> <br />
          • Integrated EmailJS for appointment and inquiry submissions without
          requiring backend APIs.
          <br />
          • Enhanced UI with smooth animations and transitions using Framer
          Motion.
          <br />
          <br />
          Technologies: React.js, Tailwind CSS, Framer Motion
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
          Built a full-stack AI SaaS platform that converts text prompts into
          images using the ClipDrop API. <br /> <br />
          • Implemented JWT-based authentication and a credit-based usage system
          to control access and enable monetization.
          <br />
          • Integrated Razorpay for seamless online payments to purchase
          additional credits.
          <br />
          <br />
          Technologies: React.js, Tailwind CSS, Node.js, MongoDB
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
          Project Overview: Developed a real-time geolocation tracking
          application utilizing Node.js, Express, Socket.io, and Leaflet.js.
          This project demonstrates proficiency in building interactive web
          applications with real-time data handling and dynamic map
          visualizations. Key Responsibilities: Backend Development: Implemented
          a robust server using Node.js and Express to handle client connections
          and serve static files. Real-Time Communication: Integrated Socket.io
          to facilitate real-time, bidirectional communication between the
          server and multiple clients. Geolocation Integration: Utilized the
          Geolocation API to track and emit user location data continuously.
          Interactive Mapping: Employed Leaflet.js to create an interactive map
          that dynamically updates with user locations. User Experience:
          Designed a user-friendly interface that displays real-time location
          updates on a map. Event Handling: Managed user connection and
          disconnection events to ensure accurate representation of active users
          on the map. Performance Optimization: Ensured high accuracy in
          location tracking and efficient data handling for smooth real-time
          updates.
        </p>
      );
    },
  },
];
