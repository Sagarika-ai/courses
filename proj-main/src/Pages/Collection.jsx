import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import Title from '../Component/Title';
import Productitem from '../Component/Productitem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);

  const [category, setCategory] = useState([]);
  const [subcategory, setSubCategory] = useState([]);

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortType, setSortType] = useState('relevant');

  const toogleCategory = (e) => {
    const value = e.target.value;

    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const toogleSubCategory = (e) => {
    const value = e.target.value;

    setSubCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const applySort = (list) => {
    let sorted = [...list];

    switch (sortType) {
      case 'low-high':
        return sorted.sort((a, b) => a.price - b.price);

      case 'high-low':
        return sorted.sort((a, b) => b.price - a.price);

      default:
        return sorted;
    }
  };

  useEffect(() => {
    let filtered = [...products];

    // search
    if (showSearch && search) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      filtered = filtered.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subcategory.length > 0) {
      filtered = filtered.filter((item) =>
        subcategory.includes(item.subcategory)
      );
    }

    if (minPrice !== '') {
      filtered = filtered.filter((item) => item.price >= Number(minPrice));
    }

    if (maxPrice !== '') {
      filtered = filtered.filter((item) => item.price <= Number(maxPrice));
    }

    const finalData = applySort(filtered);
    setFilterProducts(finalData);

  }, [products, category, subcategory, search, showSearch, sortType, minPrice, maxPrice]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      <div className="w-full sm:min-w-60 sm:w-60">

        {/* FILTER HEADER */}

        <div
          onClick={() => setShowFilter(!showFilter)}
          className="
      flex
      items-center
      justify-between
      cursor-pointer
      rounded-xl
      border
      border-gray-200
      bg-white
      px-4
      py-4
      shadow-sm
      sm:cursor-default
      sm:border-0
      sm:bg-transparent
      sm:px-0
      sm:py-2
      sm:shadow-none
    "
        >

          <div className="flex items-center gap-3">

            <span className="
        flex
        h-8
        w-8
        items-center
        justify-center
        rounded-lg
        bg-gray-100
        text-sm
      ">
              ☰
            </span>

            <div>
              <p className="text-sm font-semibold tracking-wider">
                FILTERS
              </p>

              <p className="text-[10px] text-gray-400 sm:hidden">
                Refine your courses
              </p>
            </div>

          </div>

          <img
            src={assets.dropdown_icon}
            className={`
        h-4
        transition-transform
        duration-300
        sm:hidden
        ${showFilter ? "rotate-180" : ""}
      `}
            alt=""
          />

        </div>


        {/* FILTER CONTENT */}

        <div
          className={`
      mt-4
      space-y-4
      sm:mt-6
      sm:block
      ${showFilter ? "block" : "hidden"}
    `}
        >


          {/* ================= CATEGORY ================= */}

          <div className="
      rounded-2xl
      border
      border-gray-200
      bg-white
      p-5
      shadow-sm
    ">

            <div className="
        mb-5
        flex
        items-center
        justify-between
      ">

              <p className="
          text-xs
          font-semibold
          tracking-[0.15em]
          text-gray-800
        ">
                CATEGORIES
              </p>

              <span className="text-[10px] text-gray-400">
                {category.length}
              </span>

            </div>


            <div className="space-y-3">

              {[
                "Development",
                "Programming",
                "Designing",
                
              ].map((item) => (

                <label
                  key={item}
                  className="
              group
              flex
              cursor-pointer
              items-center
              justify-between
              rounded-lg
              px-2
              py-1.5
              text-sm
              text-gray-500
              transition
              hover:bg-gray-50
              hover:text-black
            "
                >

                  <span>
                    {item}
                  </span>

                  <input
                    type="checkbox"
                    value={item}
                    onChange={toogleCategory}
                    className="
                h-4
                w-4
                cursor-pointer
                rounded
                border-gray-300
                accent-black
              "
                  />

                </label>

              ))}

            </div>

          </div>


          {/* ================= TYPE ================= */}

          <div className="
      rounded-2xl
      border
      border-gray-200
      bg-white
      p-5
      shadow-sm
    ">

            <div className="
        mb-5
        flex
        items-center
        justify-between
      ">

              <p className="
          text-xs
          font-semibold
          tracking-[0.15em]
          text-gray-800
        ">
                TYPE
              </p>

              <span className="text-[10px] text-gray-400">
                {subcategory.length}
              </span>

            </div>


            <div className="space-y-3">

              {[
                "Web Development",
                "Frontend Development",
                "Java Programming",
                "Python Programming",
                "Backend Development",
                "UI/UX Designing",
                "MERN Development",
                "React.js Development",
                "Node.js Development",
              ].map((item) => (

                <label
                  key={item}
                  className="
              group
              flex
              cursor-pointer
              items-center
              justify-between
              rounded-lg
              px-2
              py-1.5
              text-sm
              text-gray-500
              transition
              hover:bg-gray-50
              hover:text-black
            "
                >

                  <span>
                    {item}
                  </span>

                  <input
                    type="checkbox"
                    value={item}
                    onChange={toogleSubCategory}
                    className="
                h-4
                w-4
                cursor-pointer
                rounded
                border-gray-300
                accent-black
              "
                  />

                </label>

              ))}

            </div>

          </div>


          {/* ================= PRICE ================= */}

          <div className="
      rounded-2xl
      border
      border-gray-200
      bg-white
      p-5
      shadow-sm
    ">

            <div className="
        mb-5
        flex
        items-center
        justify-between
      ">

              <p className="
          text-xs
          font-semibold
          tracking-[0.15em]
          text-gray-800
        ">
                PRICE RANGE
              </p>

              <span className="text-[10px] text-gray-400">
                NPR
              </span>

            </div>


            <div className="grid grid-cols-2 gap-3">

              {/* MIN */}

              <div>

                <label className="
            mb-2
            block
            text-[9px]
            font-medium
            tracking-wider
            text-gray-400
          ">
                  MINIMUM
                </label>

                <div className="relative">

                  <span className="
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-xs
              text-gray-400
            ">
                    NPR
                  </span>

                  <input
                    type="number"
                    placeholder="0"
                    value={minPrice}
                    onChange={(e) =>
                      setMinPrice(e.target.value)
                    }
                    className="
                w-full
                rounded-lg
                border
                border-gray-200
                bg-gray-50
                py-2.5
                pl-9
                pr-2
                text-xs
                outline-none
                transition
                focus:border-black
                focus:bg-white
              "
                  />

                </div>

              </div>


              {/* MAX */}

              <div>

                <label className="
            mb-2
            block
            text-[9px]
            font-medium
            tracking-wider
            text-gray-400
          ">
                  MAXIMUM
                </label>

                <div className="relative">

                  <span className="
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-xs
              text-gray-400
            ">
                    NRP
                  </span>

                  <input
                    type="number"
                    placeholder="9999"
                    value={maxPrice}
                    onChange={(e) =>
                      setMaxPrice(e.target.value)
                    }
                    className="
                w-full
                rounded-lg
                border
                border-gray-200
                bg-gray-50
                py-2.5
                pl-9
                pr-2
                text-xs
                outline-none
                transition
                focus:border-black
                focus:bg-white
              "
                  />

                </div>

              </div>

            </div>


            {/* PRICE INFO */}

            <p className="
        mt-4
        text-[10px]
        leading-5
        text-gray-400
      ">
              Enter a minimum and maximum price to
              narrow down your search.
            </p>

          </div>

        </div>

      </div>


      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COURSES'} />

          <select
            onChange={(e) => setSortType(e.target.value)}
            className='border-2 border-gray-400 text-sm px-2'
          >
            <option value="relevant">Sort By: Relevant</option>
            <option value="low-high">Sort By: Low to High</option>
            <option value="high-low">Sort By: High to Low</option>
          </select>
        </div>


        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((item) => (
            <Productitem
              key={item._id}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>


      </div>

    </div>
  );
};

export default Collection;