import React, { useContext, useState } from 'react'
import Sweater from './Sweater'
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import Category from './Category';
import { Context } from './Store';
import AddtoCart from './AddtoCart';

const Header = () => {
  // const [component, setcomponent] = useState(1)
  const [Color, setColor] = useState(1)

  function comp_loader(a) {
    let Color = a
    setColor(Color)
  }

  const{cat}=useContext(Context)
  return (
    <>
      {/* //////////////// LAPTOP Section ///////////////// */}
      <div className='md:block hidden '>
        <div className='w-full md:w-[78vw] font-semibold border-y h-auto md:h-20 px-2 py-4 flex'>
          <div className='flex flex-wrap items-center text-gray-400 text-sm md:text-base'>
            <GoHome className='cursor-pointer mr-2' />
            <p className={`${Color===1? "text-red-700" : "text-black"} cursor-pointer capitalize mr-1`} onClick={() => setColor(1)}>main page</p>
            <IoIosArrowForward className='text-red-700 mr-1' />
            <p className={`${Color===2? "text-gray-700" : "text-black"} cursor-pointer capitalize mr-1`} onClick={() => comp_loader(2)}>Category</p>
            <IoIosArrowForward className='mr-1' />
            <p className={`${Color===3? "text-red-700" : "text-black"} cursor-pointer capitalize mr-1`}  onClick={() => comp_loader(3)}>Sweatshirt</p>
          </div>
        </div>

<div className='w-full bg-red-300 relative left-0'>
<div className='absolute'>
<AddtoCart/>
</div>
</div>

        <Sweater></Sweater>
      </div>

      {/* //////////////// Mobile Section ///////////////// */}
      <div className='fixed md:hidden grid  top-[8.2rem] w-[100%] h-screen overflow-y-scroll scrollbar'>
        <div className='w-full md:w-[78vw] font-semibold border-y h-auto md:h-20 px-2 py-4 flex'>
          <div className='flex flex-wrap items-center text-gray-400 text-sm md:text-base'>
            <GoHome className='cursor-pointer mr-2' />
            <p className={`${Color===1? "text-red-700" : "text-black"}cursor-pointer capitalize text-gray-700 mr-1`}
            onClick={() => comp_loader(1)}
            >main page</p>
            <IoIosArrowForward className='text-gray-700 mr-1' />
            <p className={`${Color===2? "text-red-700" : "text-black"}cursor-pointer capitalize text-gray-700 mr-1`}
            onClick={cat}
            >Category</p>
            <IoIosArrowForward className='mr-1' />
            <p className={`${Color===3? "text-red-700" : "text-black"}cursor-pointer capitalize text-gray-700 mr-1`}
            onClick={() => comp_loader(3)}
            >Sweatshirt</p>
          </div>
        </div>
        <Sweater></Sweater>
      </div>
    </>
  )
}

export default Header