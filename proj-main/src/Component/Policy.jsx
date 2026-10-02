import React from "react";
import { assets } from "../assets/frontend_assets/assets";

function Policy() {
  const policies = [
    {
      icon: assets.exchange_icon,
      number: "01",
      title: "Easy Book",
      description:
        "Hassle-free exchange process designed to make your shopping experience simple.",
    },
    {
      icon: assets.quality_icon,
      number: "02",
      title: "7 Days Demo class",
      description:
        "Not satisfied? Return your product within 7 days with our simple return policy.",
    },
    {
      icon: assets.support_img,
      number: "03",
      title: "24/7 Support",
      description:
        "Our support team is always ready to help you whenever you need us.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-20 sm:py-24">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-purple-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-14 max-w-2xl text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-green-500" />

            <span className="text-[10px] font-bold tracking-[0.2em] text-gray-600 sm:text-xs">
              Courses WITH CONFIDENCE
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We've Got You choose Couses
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            Your growth is our priority. Learn practical, career-focused skills through expert-led courses designed to help you build confidence, gain knowledge, and achieve your goals.
          </p>
        </div>

        {/* ================= POLICY CARDS ================= */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          {policies.map((policy) => (
            <div
              key={policy.number}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-8
                text-center
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-gray-300
                hover:shadow-2xl
              "
            >

              {/* Card Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-32
                  w-32
                  rounded-full
                  bg-gray-100
                  blur-2xl
                  transition-all
                  duration-500
                  group-hover:scale-150
                  group-hover:bg-blue-50
                "
              />

              {/* Number */}
              <div className="absolute right-6 top-5 text-3xl font-black text-gray-100 transition-colors duration-300 group-hover:text-gray-200">
                {policy.number}
              </div>

              {/* Icon */}
              <div
                className="
                  relative
                  mx-auto
                  mb-6
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gray-50
                  ring-1
                  ring-gray-100
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:bg-black
                  group-hover:shadow-xl
                "
              >
                <img
                  src={policy.icon}
                  alt={policy.title}
                  className="
                    h-10
                    w-10
                    object-contain
                    transition-all
                    duration-500
                    group-hover:brightness-0
                    group-hover:invert
                  "
                />
              </div>

              {/* Title */}
              <h3 className="relative text-lg font-bold text-gray-900">
                {policy.title}
              </h3>

              {/* Description */}
              <p className="relative mx-auto mt-3 max-w-xs text-sm leading-6 text-gray-500">
                {policy.description}
              </p>

              {/* Bottom Line */}
              <div className="mx-auto mt-7 h-1 w-10 rounded-full bg-gray-200 transition-all duration-500 group-hover:w-20 group-hover:bg-black" />

            </div>
          ))}
        </div>

        {/* ================= BOTTOM TRUST BAR ================= */}
        <div className="mt-10 rounded-2xl border border-gray-200 bg-white px-6 py-5 shadow-sm">

          <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-8">

            {/* Expert Instructors */}
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-sm text-green-600">
                ✓
              </span>

              <span className="text-xs font-medium text-gray-600">
                Expert Instructors
              </span>
            </div>

            <div className="hidden h-5 w-px bg-gray-200 sm:block" />

            {/* Practical Learning */}
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-sm text-blue-600">
                ✓
              </span>

              <span className="text-xs font-medium text-gray-600">
                Practical Learning
              </span>
            </div>

            <div className="hidden h-5 w-px bg-gray-200 sm:block" />

            {/* Certificate */}
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-100 text-sm text-purple-600">
                ✓
              </span>

              <span className="text-xs font-medium text-gray-600">
                Course Certificate
              </span>
            </div>

            <div className="hidden h-5 w-px bg-gray-200 sm:block" />

            {/* Lifetime Access */}
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-100 text-sm text-orange-600">
                ✓
              </span>

              <span className="text-xs font-medium text-gray-600">
                Lifetime Access
              </span>
            </div>

          </div>

        </div>


      </div>
    </section>
  );
}

export default Policy;
