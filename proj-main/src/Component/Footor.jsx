import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-gray-200 bg-white text-gray-800">

      <div className="
        mx-auto
        max-w-[1450px]
        px-5
        py-14
        sm:px-8
        lg:px-12
      ">

        {/* ================= MAIN FOOTER ================= */}

        <div className="
          grid
          grid-cols-1
          gap-12
          sm:grid-cols-2
          lg:grid-cols-[2fr_1fr_1fr_1.3fr]
          lg:gap-16
        ">

          {/* ================= BRAND ================= */}

          <div>

            <Link
              to="/"
              className="group inline-flex items-center gap-3"
            >

              <span className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-black
                text-lg
                font-bold
                text-white
                shadow-md
                transition-all
                duration-300
                group-hover:rotate-6
              ">
                C
              </span>

              <h1 className="
                text-2xl
                font-bold
                tracking-tight
                text-gray-900
              ">
                Citizen<span className="font-normal text-gray-500">
                  Infosys
                </span>
              </h1>

            </Link>


            <p className="
              mt-6
              max-w-md
              text-sm
              leading-7
              text-gray-500
            ">
              Discover quality products, modern essentials and
              everyday favorites — all in one place.
            </p>


            {/* Newsletter */}

            <div className="mt-7">

              <p className="
                mb-3
                text-[10px]
                font-semibold
                tracking-[0.25em]
                text-gray-400
              ">
                STAY UPDATED
              </p>

              <div className="
                flex
                max-w-sm
                overflow-hidden
                rounded-full
                border
                border-gray-200
                bg-gray-50
                p-1
                focus-within:border-black
              ">

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    min-w-0
                    flex-1
                    bg-transparent
                    px-4
                    py-2.5
                    text-xs
                    text-gray-800
                    outline-none
                    placeholder:text-gray-400
                  "
                />

                <button className="
                  rounded-full
                  bg-black
                  px-5
                  py-2.5
                  text-[10px]
                  font-semibold
                  tracking-wider
                  text-white
                  transition
                  hover:bg-gray-800
                ">
                  JOIN
                </button>

              </div>

            </div>

          </div>


          {/* ================= COMPANY ================= */}

          <div>

            <h3 className="
              mb-6
              text-xs
              font-semibold
              tracking-[0.25em]
              text-gray-900
            ">
              COMPANY
            </h3>

            <ul className="
              flex
              flex-col
              gap-4
              text-sm
              text-gray-500
            ">

              <li>
                <Link
                  to="/"
                  className="transition hover:text-black"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="transition hover:text-black"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/collection"
                  className="transition hover:text-black"
                >
                  All Courses
                </Link>
              </li>

              <li>
                <Link
                  to="/delivery"
                  className="transition hover:text-black"
                >
                  Online classes
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy"
                  className="transition hover:text-black"
                >
                  Privacy Policy
                </Link>
              </li>

            </ul>

          </div>


          {/* ================= SUPPORT ================= */}

          <div>

            <h3 className="
              mb-6
              text-xs
              font-semibold
              tracking-[0.25em]
              text-gray-900
            ">
              SUPPORT
            </h3>

            <ul className="
              flex
              flex-col
              gap-4
              text-sm
              text-gray-500
            ">

              <li className="transition hover:text-black">
                Contact Us
              </li>

              <li className="transition hover:text-black">
                Courses Information
              </li>

              <li className="transition hover:text-black">
                Demo Class 
              </li>

              <li className="transition hover:text-black">
                FAQ
              </li>

            </ul>

          </div>


          {/* ================= CONTACT ================= */}

          <div>

            <h3 className="
              mb-6
              text-xs
              font-semibold
              tracking-[0.25em]
              text-gray-900
            ">
              GET IN TOUCH
            </h3>

            <div className="
              flex
              flex-col
              gap-4
              text-sm
              text-gray-500
            ">

              <a
                href="tel:+9779745268072"
                className="transition hover:text-black"
              >
                +977 9820202020
              </a>

              <a
                href="mailto:grgdipjug@gmail.com"
                className="break-all transition hover:text-black"
              >
                sagrika@gmail.com
              </a>

              <p>
                Kathmandu, Nepal
              </p>

            </div>


            {/* Social Icons */}

            <div className="mt-7 flex items-center gap-3">

              <a
                href="#"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-200
                  text-xs
                  text-gray-500
                  transition
                  hover:border-black
                  hover:bg-black
                  hover:text-white
                "
              >
                IG
              </a>

              <a
                href="#"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-200
                  text-xs
                  text-gray-500
                  transition
                  hover:border-black
                  hover:bg-black
                  hover:text-white
                "
              >
                FB
              </a>

              <a
                href="#"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-200
                  text-xs
                  text-gray-500
                  transition
                  hover:border-black
                  hover:bg-black
                  hover:text-white
                "
              >
                X
              </a>

            </div>

          </div>

        </div>


        {/* ================= DIVIDER ================= */}

        <div className="
          mt-14
          border-t
          border-gray-200
        " />


        {/* ================= BOTTOM ================= */}

        <div className="
          flex
          flex-col
          gap-3
          pt-6
          text-center
          text-xs
          text-gray-400
          sm:flex-row
          sm:items-center
          sm:justify-between
          sm:text-left
        ">

          <p>
            © 2026 Citizen Infosys. All rights reserved.
          </p>

          <p>
            Made with
            <span className="mx-1 text-red-500">♥</span>
            for modern Courses.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
