"use client";

import React from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { HyperText } from "@/components/ui/hyper-text"
export default function Experience() {
  const data = [
    {
      title: (
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="DGN Infosolution" width={36} height={36} className="rounded-sm" />
          <div>
            <div className="text-sm md:text-base font-semibold text-white">DGN INFOSOLUTION PVT. LTD.</div>
            <div className="text-xs md:text-sm text-neutral-400">May 2025 – November 2025</div>
          </div>
        </div>
      ),
      content: (
        <div>
          <div className="text-base md:text-lg font-semibold text-white italic">Full Stack Developer Intern — New Delhi</div>
          <ul className="mt-3 ml-6 space-y-2 list-disc">
            <li className="text-sm md:text-base text-white/90">Developed and deployed the company website using the MERN stack with responsive UI.</li>
            <li className="text-sm md:text-base text-white/90">Built a dynamic platform for Immuno Diagnostics to manage lab services and pricing.</li>
            <li className="text-sm md:text-base text-white/90">Deployed applications using IIS on the company server ensuring reliable post-launch performance.</li>
            <li className="text-sm md:text-base text-white/90">Collaborated with designers to translate prototypes into responsive interfaces using Git, Jira, and Postman.</li>
          </ul>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center gap-3">
          <Image src="/logo2.jpeg" alt="Sharelog" width={36} height={36} className="rounded-sm" />
          <div>
            <div className="text-sm md:text-base font-semibold text-white">Sharelog PVT. LTD.</div>
            <div className="text-xs md:text-sm text-neutral-400">October 2024 – December 2024</div>
          </div>
        </div>
      ),
      content: (
        <div>
          <div className="text-base md:text-lg font-semibold text-white italic">Backend Developer Intern — Remote</div>
          <ul className="mt-3 ml-6 space-y-2 list-disc">
            <li className="text-sm md:text-base text-white/90">Developed and optimized RESTful APIs using Node.js and Express.js, improving data retrieval efficiency by 40%.</li>
            <li className="text-sm md:text-base text-white/90">Deployed and managed apps on AWS (EC2, S3, CloudFront) for production workloads.</li>
            <li className="text-sm md:text-base text-white/90">Improved security using JWT auth, OAuth and rate limiting to reduce unauthorized access.</li>
            <li className="text-sm md:text-base text-white/90">Tested APIs with Postman to ensure reliability across endpoints.</li>
          </ul>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center gap-3">
          <Image src="/spacestation.png" alt="Sharelog" width={42} height={42} className="rounded-sm" />
          <div>
            <div className="text-sm md:text-base font-semibold text-white">Next Mission Base</div>
            <div className="text-xs md:text-sm text-neutral-400">MET: 000/12:04:21 – 092/18:33:10</div>
          </div>
        </div>
      ),
      content: (
        <div>
          <div className="text-base md:text-lg font-semibold text-white italic">Next Engineering Role</div>
          <ul className="mt-3 ml-6 space-y-2 list-disc">
            <li className="text-sm md:text-base text-white/90">Conducted mock backend operations for a fictional ISRO mission control system.</li>
            <li className="text-sm md:text-base text-white/90">Built “mission-critical” endpoints (none were actually used in space).</li>
            <li className="text-sm md:text-base text-white/90">*Disclaimer: This is purely humorous and not a real ISRO role.*</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section className="relative w-full " id="experience">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className=" text-6xl  tracking-tight text-white">
            <HyperText loopInterval={3000} duration={700} className="inline-block">
              Experience
            </HyperText>
          </h1>
        </header>

        {/* Timeline card */}
        <div className="bg-slate-900/70 backdrop-blur-sm border border-emerald-700/20 rounded-2xl p-8 shadow-lg">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  );
}