"use client";

import React, { useRef } from "react";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";
import { Highlighter } from "@/components/ui/highlighter";

import { AnimatedBeam } from "@/components/ui/animated-beam";
import {
  SiC,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiDocker,
  SiGithub,
  SiTailwindcss,
  SiFigma,
  SiMysql,
  SiRocket,
  SiKubernetes,
} from "react-icons/si";

export default function FeatureGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left large panel */}
      <div className="bg-slate-900/80 border border-emerald-800/20 rounded-xl p-6 shadow-lg relative overflow-hidden">
        <Terminal>
          <TypingAnimation>npx create-next-app@latest starship_sankalp...</TypingAnimation>
          <AnimatedSpan>
            ✔ installing dependencies...: scalable thrusters, secure shields,
            hyper-performant UI
          </AnimatedSpan>
          <AnimatedSpan> ✔ validating subsystem integrity...</AnimatedSpan>
          <AnimatedSpan> ✔ performing systems check... all green</AnimatedSpan>
          <TypingAnimation>executing deployment sequence...</TypingAnimation>
          <TypingAnimation>Success! Project online across the galaxy 🌌</TypingAnimation>
          {/* <TypingAnimation>
            Logs: No errors... which is suspicious
          </TypingAnimation> */}
        </Terminal>
      </div>

      {/* Right column with two stacked cards */}
      <div className="space-y-6">
        {/* Top right card: Dev & Design with animated beams */}
        <div
          ref={containerRef as React.RefObject<HTMLDivElement>}
          className="bg-slate-900/80 border border-emerald-700/30 rounded-xl p-6 shadow-lg relative overflow-hidden"
        >
          {/* Animated beams between left->center and center->right */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={leftRef}
            toRef={centerRef}
            gradientStartColor="#9cff4a"
            gradientStopColor="#34d399"
            delay={0}
            duration={4}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={centerRef}
            toRef={rightRef}
            gradientStartColor="#9cff4a"
            gradientStopColor="#34d399"
            delay={1}
            duration={4}
            reverse
          />

          <div className="flex items-center justify-evenly gap-8 py-8">
            <div
              ref={leftRef}
              className="w-12 h-12 grid place-items-center rounded-lg bg-white text-slate-100/90"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="12"
                  cy="5"
                  rx="8"
                  ry="3"
                  stroke="#808080"
                  strokeWidth="1.2"
                  fill="#052018"
                />
                <path
                  d="M4 5v6c0 1.657 3.582 3 8 3s8-1.343 8-3V5"
                  stroke="#808080"
                  strokeWidth="1.2"
                  fill="none"
                />
                <path
                  d="M4 11v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6"
                  stroke="#808080"
                  strokeWidth="1.2"
                  fill="none"
                />
              </svg>
            </div>

            <div
              ref={centerRef}
              className="w-20 h-20 relative grid place-items-center rounded-2xl"
            >
              {/* pulsing glow */}
              <span
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/20 to-cyan-400/10 blur-xl opacity-60 animate-pulse"
                aria-hidden
              />
              <div className="relative z-10 w-full h-full flex items-center justify-center transition-transform transform hover:scale-105">
                <svg
                  width="72"
                  height="72"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="computer"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="12"
                    rx="2"
                    stroke="var(--color-primary-foreground)"
                    strokeWidth="1.2"
                  />
                  <rect
                    x="7"
                    y="16"
                    width="10"
                    height="2"
                    rx="1"
                    fill="var(--color-primary-foreground)"
                  />
                </svg>

                {/* SiRocket icon overlaid on the monitor screen, centered and rotated 45deg */}
                <SiRocket
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  scale-140"
                  aria-hidden
                  style={{ color: "var(--color-primary-foreground)" }}
                />
              </div>
            </div>

            <div
              ref={rightRef}
              className="w-12 h-12 grid place-items-center rounded-lg bg-white text-slate-100/90"
            >
              <SiFigma className="text-2xl text-pink-400" />
            </div>
          </div>

          <div className="ml-6">
            <h3 className="text-2xl font-semibold">
              Dev & <span className="text-emerald-400 italic">Design</span>
            </h3>
            <p className="mt-3 text-slate-300">
              Turning solid engineering and smart design into great user
              experiences.
            </p>
          </div>
        </div>

        {/* Bottom right card */}
        <div className="bg-slate-900/80 border border-emerald-700/30 rounded-xl overflow-hidden">
            <div className="md:flex-1 p-6 w-full">
              <h3 className="text-2xl font-semibold text-white">
                Engineering
                <span className="text-emerald-400 italic"> Core</span>
              </h3>
              <p>
                Grounded in{" "}
                <Highlighter action="underline" color="#FF9800">
                  CS fundamentals
                </Highlighter>{" "}
                makes important{" "}
                <Highlighter action="highlight" color="#34d399">
                    OOP, DBMS, OS, Networks, and Data Structures
                </Highlighter>{" "}
                These core principles shape how I build scalable and maintainable systems.
              </p>
            </div>
            <div className="hidden md:block md:w-1/3 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
              <div className="relative h-full w-full bg-[url('/images/macbook-pro.jpg')] bg-cover bg-center" />
            </div>
          
        </div>
      </div>
    </div>
  );
}
