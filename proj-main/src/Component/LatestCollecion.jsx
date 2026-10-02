import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";
import Productitem from "./Productitem";

const LatestCollecion = () => {
  const { products } = useContext(ShopContext);

  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <section className="relative bg-white py-20 sm:py-24 overflow-hidden">

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gray-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gray-100 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-14">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>

            <span className="text-[11px] font-semibold tracking-[0.2em] text-gray-700">
              JUST DROPPED
            </span>
          </div>

          {/* Title */}
          <div className="flex justify-center">
            <Title text1="LATEST" text2="COURSES" />
          </div>

          {/* Description */}
          <p className="mt-6 text-sm sm:text-base leading-7 text-gray-500 max-w-2xl mx-auto">
            Explore our newest courses, thoughtfully selected to bring you
            new courses, modern Technology, and must-have Learn for every
            Technology.
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className="w-16 h-px bg-gray-200" />
            <span className="w-2 h-2 rounded-full bg-black" />
            <span className="w-16 h-px bg-gray-200" />
          </div>
        </div>

        {/* ================= PRODUCTS ================= */}
        <div className="
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            gap-x-4
            sm:gap-x-6
            lg:gap-x-7
            gap-y-10
          "
        >
          {latestProducts.map((item, index) => (
            <div
              key={item._id}
              className="
                group
                relative
                transition-all
                duration-500
                hover:-translate-y-2
              "
            >
              {/* Product Card */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  bg-[#f7f7f7]
                  border border-gray-100
                  shadow-sm
                  transition-all
                  duration-500
                  group-hover:shadow-2xl
                  group-hover:border-gray-200
                "
              >

                {/* New Badge */}
                <div
                  className="
                    absolute
                    top-3
                    left-3
                    z-20
                    px-3
                    py-1.5
                    rounded-full
                    bg-black
                    text-white
                    text-[9px]
                    sm:text-[10px]
                    font-semibold
                    tracking-[0.15em]
                    shadow-lg
                  "
                >
                  NEW
                </div>

                {/* Number */}
                <div
                  className="
                    absolute
                    top-3
                    right-3
                    z-20
                    w-7
                    h-7
                    rounded-full
                    bg-white/90
                    backdrop-blur-sm
                    flex
                    items-center
                    justify-center
                    text-[10px]
                    font-medium
                    text-gray-500
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-300
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Product */}
                <div
                  className="
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.02]
                    p-2
                  "
                >
                  <Productitem
                    id={item._id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                  />
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="flex flex-col items-center mt-16">

          <button
            className="
              group
              relative
              inline-flex
              items-center
              justify-center
              gap-4
              min-w-[210px]
              px-8
              py-4
              rounded-full
              bg-black
              text-white
              text-sm
              font-semibold
              tracking-wide
              overflow-hidden
              shadow-xl
              hover:shadow-2xl
              transition-all
              duration-300
              hover:-translate-y-1
            "
          >
            {/* Hover Background */}
            <span
              className="
                absolute
                inset-0
                bg-gray-800
                translate-y-full
                group-hover:translate-y-0
                transition-transform
                duration-300
              "
            />

            <span className="relative z-10">
              Explore Courses
            </span>

            <span
              className="
                relative
                z-10
                flex
                items-center
                justify-center
                w-8
                h-8
                rounded-full
                bg-white/10
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </button>

          <p className="mt-4 text-xs text-gray-400">
            Discover more Courses
          </p>

        </div>

      </div>
    </section>
  );
};

export default LatestCollecion;
