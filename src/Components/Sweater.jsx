import React, { useContext } from 'react'
import { BiMenuAltLeft } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";
import { Context } from './Store';
import { toast } from 'react-toastify';

const Sweater = () => {

  const { product, addtocart, Open } = useContext(Context)
  const notify = () => toast.success("Add Product");


  return (
    <>
      <div className='p-2 md:p-4'>
        {/* <div className='flex flex-col md:flex-row justify-between w-full'>
          <h1 className='text-3xl md:text-4xl font-semibold text-gray-600 mb-4 md:mb-0'>Sweater</h1>
        </div>
        <div className='flex flex-wrap gap-2 mt-4'>
          <div className='flex items-center w-fit text-xs md:text-sm px-1 py-1 bg-[#BFDBFE] text-blue-600 rounded-xl gap-2'>
            <p>OverSize</p>
            <div><MdOutlineClose className='cursor-pointer' /></div>
          </div>
          <div className='flex items-center w-fit text-xs md:text-sm px-1 py-1 bg-[#BFDBFE] text-blue-600 rounded-xl gap-2'>
            <p>Multicolor</p>
            <div><MdOutlineClose className='cursor-pointer' /></div>
          </div>
          <div className='flex items-center w-fit text-xs md:text-sm px-1 py-1 bg-[#BFDBFE] text-blue-600 rounded-xl gap-2'>
            <p>XXL</p>
            <div><MdOutlineClose className='cursor-pointer' /></div>
          </div>
        </div> */}



        {/* //////////////// Mobile Section ///////////////// */}
        <div className=' md:hidden grid  grid-cols-2  gap-4 mt-2 mb-36'>

          {product.filter(product => product.category === "sweaters").map((product, index) => (
            <div key={index} className='bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden'>
              {/* Image Container */}
              <div className='relative h-48 md:h-64 overflow-hidden group'>
                <img
                  src={product.img}
                  alt={product.title}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                />
                <button className='absolute top-2 md:top-3 right-2 md:right-3 p-1.5 md:p-2 rounded-full bg-white/80 hover:bg-white transition-colors'>
                  <FaRegHeart className='text-gray-600 hover:text-red-500 text-base md:text-xl' />
                </button>
              </div>

              {/* Product Info */}
              <div className='p-2 md:p-4 space-y-2 md:space-y-3'>
                {/* Title and Rating */}
                <div className='space-y-1'>
                  <h3 className='font-medium text-gray-800 text-base md:text-lg'>{product.title}</h3>
                  <div className='flex items-center gap-1'>
                    <div className='flex text-yellow-400 text-sm md:text-base'>
                      {[...Array(5)].map((_, i) => (
                        <AiFillStar key={i} />
                      ))}
                    </div>
                    <span className='text-xs md:text-sm text-gray-500'>{product.reviews}</span>
                  </div>
                </div>

                {/* Price and Cart */}
                <div className='flex items-center justify-between'>
                  <div className='space-y-0.5 md:space-y-1'>
                    <p className='text-xs md:text-sm text-gray-500 line-through'>{product.prevPrice}</p>
                    <p className='text-lg md:text-xl font-bold text-blue-600'>${product.newPrice}</p>
                  </div>
                  <button className='bg-blue-600 hover:bg-blue-700 text-white p-2 md:p-3 rounded-lg transition-colors'
                    onClick={() => {
                      addtocart(product)
                      notify()
                    }}>
                    <IoCart className='text-lg md:text-xl' />
                  </button>
                </div>

                {/* Tags */}
                <div className='flex gap-1.5 md:gap-2 flex-wrap'>
                  <span className='px-1.5 md:px-2 py-0.5 md:py-1 text-[10px] md:text-xs bg-blue-100 text-blue-600 rounded-full'>
                    {product.company}
                  </span>
                  <span className='px-1.5 md:px-2 py-0.5 md:py-1 text-[10px] md:text-xs bg-blue-100 text-blue-600 rounded-full'>
                    {product.color}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* //////////////// LAPTOP Section ///////////////// */}
        <div className='md:grid hidden grid-cols-3 gap-4 mt-2'>
          {product.map((product, index) => (
            <div key={index} className='bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden'>
              {/* Image Container */}
              <div className='relative h-48 md:h-64 overflow-hidden group'>
                <img
                  src={product.img}
                  alt={product.title}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                />
                <button className='absolute top-2 md:top-3 right-2 md:right-3 p-1.5 md:p-2 rounded-full bg-white/80 hover:bg-white transition-colors'>
                  <FaRegHeart className='text-gray-600 hover:text-red-500 text-base md:text-xl' />
                </button>
              </div>

              {/* Product Info */}
              <div className='p-2 md:p-4 space-y-2 md:space-y-3'>
                {/* Title and Rating */}
                <div className='space-y-1'>
                  <h3 className='font-medium text-gray-800 text-base md:text-lg'>{product.title}</h3>
                  <div className='flex items-center gap-1'>
                    <div className='flex text-yellow-400 text-sm md:text-base'>
                      {[...Array(5)].map((_, i) => (
                        <AiFillStar key={i} />
                      ))}
                    </div>
                    <span className='text-xs md:text-sm text-gray-500'>{product.reviews}</span>
                  </div>
                </div>

                {/* Price and Cart */}
                <div className='flex items-center justify-between'>
                  <div className='space-y-0.5 md:space-y-1'>
                    <p className='text-xs md:text-sm text-gray-500 line-through'>{product.prevPrice}</p>
                    <p className='text-lg md:text-xl font-bold text-blue-600'>${product.newPrice}</p>
                  </div>
                  <button className='bg-blue-600 hover:bg-blue-700 text-white p-2 md:p-3 rounded-lg transition-colors'
                    onClick={() => {
                      addtocart(product)
                      notify()
                    }}
                  >
                    <IoCart className='text-lg md:text-xl' />
                  </button>
                </div>

                {/* Tags */}
                <div className='flex gap-1.5 md:gap-2 flex-wrap'>
                  <span className='px-1.5 md:px-2 py-0.5 md:py-1 text-[10px] md:text-xs bg-blue-100 text-blue-600 rounded-full'>
                    {product.company}
                  </span>
                  <span className='px-1.5 md:px-2 py-0.5 md:py-1 text-[10px] md:text-xs bg-blue-100 text-blue-600 rounded-full'>
                    {product.color}
                  </span>
                  <span className='px-1.5 md:px-2 py-0.5 md:py-1 text-[10px] md:text-xs bg-blue-100 text-blue-600 rounded-full'>
                    {product.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </>
  )
}


export default Sweater