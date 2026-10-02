import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f4] text-[#171717]">

      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-blue-100/40 blur-3xl  " />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-100/40 blur-3xl" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      <div className="relative mx-auto max-w-[1500px] px-5 py-8 sm:px-8 lg:px-12 lg:py-10">

        {/* ================= TOP BAR ================= */}
        <div className="mb-8 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-blue-600" />
            </span>

            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-500 sm:text-[10px]">
              Learn • Build • Grow
            </span>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 shadow-sm backdrop-blur-md sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Start Learning Today
          </div>

        </div>

        {/* ================= MAIN HERO ================= */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* ================= LEFT ================= */}
          <div className="relative z-10 py-6 lg:py-14">

            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">

              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-[9px] text-white">
                ✦
              </span>

              <span className="text-[9px] font-bold tracking-[0.25em] text-gray-600">
                PREMIUM ONLINE LEARNING
              </span>

            </div>

            {/* Heading */}
            <h1 className="max-w-3xl text-[44px] font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-[72px] xl:text-[82px]">

              Learn skills.

              <br />

              <span className="relative inline-block">
                Build
              </span>{" "}

              <span className="relative inline-block italic">

                your future.

                <span className="absolute -bottom-2 left-0 h-[4px] w-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 sm:-bottom-3" />

              </span>

            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
              Learn from experienced instructors, master in-demand skills,
              and build real-world projects that move your career forward.
            </p>

            {/* ================= BUTTONS ================= */}
            <div className="mt-9 flex flex-wrap items-center gap-4">

              {/* Primary */}
              <button
                className="
                  group
                  flex
                  items-center
                  gap-5
                  rounded-full
                  bg-black
                  px-6
                  py-3.5
                  text-[10px]
                  font-bold
                  tracking-[0.15em]
                  text-white
                  shadow-xl
                  shadow-black/10
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-blue-600
                  hover:shadow-2xl
                  sm:px-8
                "
              >
                START LEARNING

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-base transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

              {/* Secondary */}
              <button
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-black/10
                  bg-white/70
                  px-6
                  py-3.5
                  text-[10px]
                  font-bold
                  tracking-[0.15em]
                  text-gray-700
                  transition
                  duration-300
                  hover:border-black
                  hover:bg-white
                  hover:shadow-lg
                "
              >
                EXPLORE COURSES
                <span>↗</span>
              </button>

            </div>

            {/* ================= STATS ================= */}
            <div className="mt-12 grid max-w-xl grid-cols-3 border-y border-black/10 py-6">

              <div>
                <p className="text-2xl font-black tracking-tight">
                  16<span className="text-blue-600">+</span>
                </p>

                <p className="mt-1 text-[9px] font-semibold tracking-[0.18em] text-gray-400">
                  COURSES
                </p>
              </div>

              <div className="border-l border-black/10 pl-5">
                <p className="text-2xl font-black tracking-tight">
                  20<span className="text-purple-600">+</span>
                </p>

                <p className="mt-1 text-[9px] font-semibold tracking-[0.18em] text-gray-400">
                  EXPERTS
                </p>
              </div>

              <div className="border-l border-black/10 pl-5">
                <p className="text-2xl font-black tracking-tight">
                  2K<span className="text-blue-600">+</span>
                </p>

                <p className="mt-1 text-[9px] font-semibold tracking-[0.18em] text-gray-400">
                  LEARNERS
                </p>
              </div>

            </div>

          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative">

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-[32px] bg-gray-200 shadow-2xl shadow-black/10">

              <img
                src={assets.hero_img}
                alt="Students learning"
                className="
                  h-[480px]
                  w-full
                  object-fit
                  transition-transform
                  duration-1000
                  hover:scale-105
                  sm:h-[600px]
                  lg:h-[680px]
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-black/5" />

              {/* Top Badge */}
              <div className="absolute right-5 top-5 rounded-full border border-white/30 bg-white/90 px-4 py-2.5 shadow-xl backdrop-blur-xl sm:right-7 sm:top-7">

                <div className="flex items-center gap-2">

                  <span className="relative flex h-2 w-2">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-green-400" />
                    <span className="relative h-2 w-2 rounded-full bg-green-500" />
                  </span>

                  <span className="text-[9px] font-bold tracking-[0.2em]">
                    16+ COURSES
                  </span>

                </div>

              </div>

              {/* ================= IMAGE BOTTOM ================= */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">

                <div className="flex items-end justify-between gap-4">

                  <div className="rounded-2xl border border-white/20 bg-black/35 px-5 py-4 text-white shadow-xl backdrop-blur-xl">

                    <p className="text-[8px] font-semibold tracking-[0.25em] text-white/60">
                      LEARN WITHOUT LIMITS
                    </p>

                    <p className="mt-1 text-base font-bold">
                      Turn knowledge into opportunity.
                    </p>

                  </div>

                  <button
                    className="
                      hidden
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-xl
                      shadow-xl
                      transition-all
                      duration-300
                      hover:scale-110
                      sm:flex
                    "
                  >
                    ↗
                  </button>

                </div>

              </div>

            </div>

            {/* ================= RATING CARD ================= */}
            <div className="absolute -left-5 top-20 hidden rounded-2xl border border-white/60 bg-white/95 p-4 shadow-2xl backdrop-blur-xl sm:block lg:-left-8">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-50 text-lg">
                  ⭐
                </div>

                <div>

                  <p className="text-sm font-black">
                    4.9 / 5.0
                  </p>

                  <p className="text-[9px] font-medium tracking-wider text-gray-400">
                    STUDENT RATING
                  </p>

                </div>

              </div>

            </div>

            {/* ================= STUDENT CARD ================= */}
            <div className="absolute -bottom-5 left-3 rounded-2xl border border-white/60 bg-white/95 px-5 py-4 shadow-2xl backdrop-blur-xl sm:-bottom-6 sm:left-8">

              <div className="flex items-center gap-3">

                <div className="flex -space-x-2">

                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-xs">
                    👨‍💻
                  </div>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-purple-100 text-xs">
                    👩‍💻
                  </div>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-green-100 text-xs">
                    👨‍🎓
                  </div>

                </div>

                <div>

                  <p className="text-sm font-black">
                    2K+
                  </p>

                  <p className="text-[9px] font-medium tracking-wider text-gray-400">
                    ACTIVE LEARNERS
                  </p>

                </div>

              </div>

            </div>

            {/* Decorative Ring */}
            <div className="absolute -bottom-10 -right-8 -z-10 h-32 w-32 rounded-full border border-blue-200 sm:h-44 sm:w-44" />

          </div>

        </div>

        {/* ================= CATEGORY STRIP ================= */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-black/10 pt-7 text-[9px] font-bold tracking-[0.25em] text-gray-400 sm:justify-between">

          <span className="transition-colors hover:text-blue-600">
            DEVELOPMENT
          </span>

          <span className="transition-colors hover:text-purple-600">
            DESIGN
          </span>

          <span className="transition-colors hover:text-pink-600">
            MARKETING
          </span>

          <span className="transition-colors hover:text-orange-600">
            BUSINESS
          </span>

          <span className="transition-colors hover:text-green-600">
            DATA SCIENCE
          </span>

          <span className="transition-colors hover:text-blue-600">
            PERSONAL GROWTH
          </span>

        </div>

      </div>
    </section>
  );
};

export default Hero;
