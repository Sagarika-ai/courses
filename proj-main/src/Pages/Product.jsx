import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import RelatedProduct from '../Component/RelatedProduct';


function Product() {

  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = () => {
    const found = products.find(item => item._id === productId);
    if (found) {
      setProductData(found);
      setImage(found.image?.[0] || '');
    }
  };

  useEffect(() => {
    if (products.length > 0) {
      fetchProductData();
    }
  }, [productId, products]);

  return productData ? (
    <div className='border-t-2 pt-10'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-start sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image?.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className='w-24 sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                alt=""
              />
            ))}
          </div>

          <div className='w-full sm:w-[80%]'>
            <img src={image} className='w-full h-auto' alt="" />
          </div>
        </div>

        {/* product info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>

          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className='w-4' />
            <img src={assets.star_icon} alt="" className='w-4' />
            <img src={assets.star_icon} alt="" className='w-4' />
            <img src={assets.star_icon} alt="" className='w-4' />
            <img src={assets.star_icon} alt="" className='w-4' />
            <p className='pl-2'>(122)</p>
          </div>

          <p className='text-xl font-semibold mt-2'>
            {currency}{productData.price}
          </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
  
  <div className="mb-4 flex items-center gap-3">
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md">
      ✨
    </div>

    <div>
      <h3 className="text-lg font-bold text-gray-900">
        Product Description
      </h3>
      <p className="text-xs text-gray-500">
        Everything you need to know
      </p>
    </div>
  </div>

  <p className="text-[15px] leading-7 text-gray-600">
    {productData.description}
  </p>

</div>
{/* <p className="mt-4 rounded-r-xl border-l-4 border-indigo-500 bg-indigo-50 p-4 leading-7 text-gray-600">
  {productData.description}
</p> */}

          <div className='flex flex-col gap-4 my-8'>
            <p>Duration course </p>
            <div className='flex gap-2'>
              {productData.sizes?.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`border py-2 px-4 bg-gray-100 cursor-pointer rounded 
                    ${item === size ? 'border-orange-500' : 'border-gray-300'} 
                    hover:border-orange-500`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button onClick={() => addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 rounded'>
            ENROLL NOW
          </button>

          <hr className='mt-8 w-full' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Internship suported </p>
            <p>Online classs Available</p>
            <p>7 Days demo class</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border border-gray-200 px-5 py-3 text-sm'>Description</b>
          <p className='border border-gray-200 px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border border-gray-200 px-6 py-6 text-sm text-gray-500'>
          <p>An IT website that makes you fulfill your needs offers a smooth and user-friendly Class experience. The website is well-organized, with categories and filters that make finding Courses.</p>
          <p>Displays wear Course that would definitely prosper you. Whether you’re browsing casually or buying urgently, it makes class convenient and stress-free. I would definitely recommend it for a hassle-free online Classes experience.</p>
        </div>
      </div>

      {/* Display Related Products */}
      <RelatedProduct category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className='opacity-0'></div>
  );
}

export default Product;
