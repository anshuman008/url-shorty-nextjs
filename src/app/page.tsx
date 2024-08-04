"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FlipWords } from "@/components/ui/flip-words";

export default function BackgroundBoxesDemo() {
  const words = ["Superpowers", "Analytics", "Tracking", "Cool!!"];

  return (
    <div className="h-[100vh] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg ">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <div className="flex flex-col gap-y-2 z-20">
        <span className="text-4xl md:text-7xl font-bold text-white">
          Short Links With
        </span>
        <span className="text-4xl md:text-7xl font-bold text-orange-400">
          <FlipWords words={words} />
        </span>
      </div>
      <span className="text-white my-6 text-lg lg:text-2xl text-center z-20">
        Shotii is the open-source link management infrastructure for modern
        marketing teams.
      </span>

      <Link
        href={"/create"}
        className="z-20 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1  font-medium text-white backdrop-blur-3xl text-xl">
          Get Started
        </span>
      </Link>
    </div>
  );
}
