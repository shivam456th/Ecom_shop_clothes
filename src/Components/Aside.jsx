import React, { useContext } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import Header from './Header';
import { Context } from './Store';
import Category from './Category';


const Aside = () => {

    const category = ["Sweaters", "T-Shirts", "Blazers", "Dresses", "Coats", "Jackets", "Accesserios"]

    const company = ["H&M", "Zara", "Uniqlo", "Gap", "Mango", "Topshop", "Levis", "Pull&Bear", "Forever21", "Bershka"]

    const { t_shirts, Company } = useContext(Context)

    return (
        <>
            {/* //////////////// LAPTOP Section ///////////////// */}
            <div className='flex relative top-20'>
                <div className='md:block hidden w-[20%] h-[33rem] border-r-2 border-gray-300 p-4 fixed overflow-y-scroll scrollbar-hide'>
                    <p className='text-lg font-semibold'>Category</p>
                    <ul className='p-4'>
                        {category.map((e, index) => {
                            return <li key={index} className='cursor-pointer text-gray-500' onClick={() => t_shirts(e)}>{e}</li>
                        })}
                        {/* <li className='cursor-pointer '><span className='text-blue-400'>Sweaters</span></li>
                    <li className='cursor-pointer text-gray-500'>Dresses</li>
                    <li className='cursor-pointer text-gray-500'>Coats</li>
                    <li className='cursor-pointer text-gray-500'>Jackets</li>
                    <li className='cursor-pointer text-gray-500'>Accessories</li> */}
                    </ul>
                    <div className='w-full h-[2px] pr-2 pl-2 bg-gray-300'></div>
                    <p className='text-lg font-semibold mt-2'>Filter by :</p>
                    <div className='font-semibold flex justify-between items-center pl-4 p-[4px]'>
                        <p>Type</p>
                        <FaAngleDown />
                    </div>
                    {company.map((e, index) => {
                        return <div key={index} className='flex flex-col space-y-2 mt-2'>
                            <label className="flex items-center space-x-2 cursor-pointer p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300">
                                <input
                                    type="radio"
                                    name="company"
                                    value={e}
                                    className="form-radio h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                                    onClick={Company}
                                />
                                <span className="text-gray-700">{e}</span>
                            </label>
                        </div>
                    })}

                    <div className='mt-2 font-semibold flex justify-between items-center pl-4 p-[4px]'>
                        <p>Colour</p>
                        <FaAngleDown />
                    </div>
                    <div className='flex flex-col space-y-2 mt-2'>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input type="checkbox" defaultChecked className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500" />
                            <span className="text-gray-700">Back</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500" />
                            <span className="text-gray-700">Red</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500" />
                            <span className="text-gray-700">Brown</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500" />
                            <span className="text-gray-700">Multicolour</span>
                        </label>

                        <div className='mt-2 font-semibold flex justify-between items-center pl-4 p-[4px]'>
                            <p>Size</p>
                            <FaAngleDown />
                        </div>
                        <div className='mt-2 font-semibold flex justify-between items-center pl-4 p-[4px]'>
                            <p>Price</p>
                            <FaAngleDown />
                        </div>
                        <div className="flex justify-between mt-4">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Apply
                            </button>
                            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded flex items-center">
                                <MdDeleteForever className="mr-1" />
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
                <div className='ml-[20%] md:block hidden absolute'>
                    <Header />
                </div>
            </div>
            {/* //////////////// Mobile Section ///////////////// */}
            <div className='md:hidden flex'>
                <Category />
            </div>
        </>
    )
}

export default Aside