import React, { useContext } from 'react'
import { AiFillMacCommand } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { GoGlobe } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import AppleFace from '../Components/40d964cc7e77573318cc0d3db87de744-removebg-preview.png'
import { Context } from './Store';
import { IoBagHandleOutline } from "react-icons/io5";

const Navbar = () => {

    const {search,input,setinput,Open,cart}=useContext(Context)
    return (
        <>
            {/*/////////////////////////// LAPTOP SECTION /////////////////// */}
            <div className='md:flex hidden items-center justify-between bg-white shadow-md p-4 fixed w-full top-0 z-50'>
                <div className='flex items-center space-x-2'>
                    <img src="https://dynamic.brandcrowd.com/asset/logo/ce7e9c9d-a5b6-4077-a0e3-84ba67de8984/logo-search-grid-2x?logoTemplateVersion=1&v=638554109038100000" alt="Lapak Baju Logo" className="w-12 h-12 object-contain" />
                    <p className="text-xl font-semibold">Lapak <span className="text-blue-600">Baju</span></p>
                </div>
                <div className='flex items-center space-x-4 flex-grow mx-8'>
                    <div className='relative flex-grow max-w-2xl'>
                        <input className='w-full p-2 pl-10 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" placeholder="Search for products..." 
                        value={input} onChange={(e)=>{setinput(e.target.value)}}
                         />
                        <IoIosSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl' />
                        <AiFillMacCommand className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl'
                        onClick={search} 
                        />
                    </div>
                    <div className='flex space-x-4'>
                        <button className='flex items-center space-x-1 py-2 px-3 text-sm text-blue-600 bg-blue-100 rounded-lg hover:bg-blue-200 transition duration-300'>
                            <p>ENG</p>
                            <GoGlobe className="text-lg" />
                        </button>
                        <button className='relative flex items-center space-x-1 py-2 px-3 text-sm text-blue-600 bg-blue-100 rounded-lg hover:bg-blue-200 transition duration-300'
                        onClick={Open}>
                            <IoBagHandleOutline className="text-lg" />
                            <span className='text-white text-sm top-[-11px] left-7 absolute bg-red-300 py-1 px-2 rounded-full '>{cart.length}</span>
                        </button>
                    </div>
                </div>
                <div className='rounded-full overflow-hidden border-2 border-blue-500'>
                    <img src={AppleFace} alt="User Avatar" className="w-10 h-10 object-cover" />
                </div>
            </div>

            {/*/////////////////////////// MOBILE SECTION /////////////////// */}
            <div className='md:hidden flex flex-col fixed w-full bg-white shadow-md p-2'>
                <div className='flex items-center justify-between mb-2'>
                    <div className='flex items-center space-x-2'>
                        <img src="https://dynamic.brandcrowd.com/asset/logo/ce7e9c9d-a5b6-4077-a0e3-84ba67de8984/logo-search-grid-2x?logoTemplateVersion=1&v=638554109038100000" alt="Lapak Baju Logo" className="w-8 h-8 object-contain" />
                        <p className="text-base font-semibold">Lapak <span className="text-blue-600">Baju</span></p>
                    </div>
                    <div className='rounded-full overflow-hidden border-2 border-blue-500'>
                        <img src={AppleFace} alt="User Avatar" className="w-8 h-8 object-cover" />
                    </div>
                </div>

                <div className='flex flex-col space-y-2'>
                    <div className='relative w-full'>
                        <input 
                            className='w-full p-1.5 pl-8 pr-8 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500' 
                            type="text" 
                            placeholder="Search products..."
                            value={input}
                            onChange={(e)=>setinput(e.target.value)}
                        />
                        <IoIosSearch className='absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg' />
                        <AiFillMacCommand 
                            className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg cursor-pointer'
                            onClick={search}
                        />
                    </div>

                    <div className='flex justify-between'>
                        <button className='flex items-center space-x-1 py-1.5 px-2 text-xs text-blue-600 bg-blue-100 rounded-lg hover:bg-blue-200 transition duration-300'>
                            <p>ENG</p>
                            <GoGlobe className="text-sm" />
                        </button>
                        <button className='flex items-center space-x-1 py-1.5 px-2 text-lg text-blue-600 bg-blue-100 rounded-lg hover:bg-blue-200 transition duration-300'>
                        <IoBagHandleOutline />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar