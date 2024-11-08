import React, { useContext } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { Context } from './Store';
import { MdOutlineClose } from "react-icons/md";
import Header from './Header';

const Category = () => {

    const category = ["Sweaters", "T-Shirts", "Blazers","Dresses","Coats","Jackets","Accesserios"]

    const company = ["H&M", "Zara", "Uniqlo", "Gap", "Mango", "Topshop", "Levis", "Pull&Bear", "Forever21", "Bershka"]

    const {t_shirts,Company ,first,closed}=useContext(Context)

  return (
    <>
    <div className='flex justify-between'>
        <div className='relative top-[8.2rem]'>
            <div className={`${first?"w-[44%] bg-white ":"w-[0%]"} md:hidden transition-all z-10 h-[33rem] border-r-2 border-gray-300 pl-2 pt-1 mr-1 fixed overflow-y-scroll scrollbar-hide'`}>
                <div className="flex justify-between items-center">
                <p className='text-sm font-semibold pr-2' >Category</p>
                <div><MdOutlineClose className='cursor-pointer'  onClick={closed} /></div>
                </div>
                <ul className='p-4'>
                   { category.map((e,index)=>{
                    return <li key={index} className='cursor-pointer text-gray-500 text-sm' onClick={()=>t_shirts(e)}>{e}</li> 
                    })}
                </ul>
                <div className='w-full h-[2px] pr-2 pl-2 bg-gray-300'></div>
                <p className='text-sm font-semibold mt-2'>Filter by :</p>
                <div className='font-semibold flex justify-between items-center pl-4 p-[4px]'>
                    <p className='text-sm'>Type</p>
                    <FaAngleDown />
                </div>
                {company.map((e,index)=>{
                   return <div key={index} className='flex flex-col space-y-2 mt-2'>
                    <label className="flex items-center space-x-2 cursor-pointer p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300">
                        <input 
                            type="radio" 
                            name="company" 
                            value={e}
                            className="form-radio h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                            onClick={Company}
                        />
                        <span className="text-gray-700 text-sm">{e}</span>
                    </label>
                </div>
                })}

                <div className='mt-2 font-semibold flex justify-between items-center pl-4 p-[4px]'>
                    <p className='text-sm'>Colour</p>
                    <FaAngleDown />
                </div>
                <div className='flex flex-col space-y-2 mt-2'>
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" defaultChecked className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500" />
                        <span className="text-gray-700 text-sm">Back</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500" />
                        <span className="text-gray-700 text-sm">Red</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500" />
                        <span className="text-gray-700 text-sm">Brown</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500" />
                        <span className="text-gray-700 text-sm">Multicolour</span>
                    </label>

                    <div className='flex flex-col'>
                    <div className='mt-2 font-semibold flex justify-between items-center pl-4 p-[4px]'>
                        <p className='text-sm'>Size</p>
                        <FaAngleDown />
                    </div>
                    <div className='mt-2 font-semibold flex justify-between items-center pl-4 p-[4px]'>
                        <p className='text-sm'>Price</p>
                        <FaAngleDown />
                    </div>
                    </div>
                    <div className="flex justify-between mt-4 flex-col">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-sm">
                            Apply
                        </button>
                        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded flex items-center text-sm">
                            <MdDeleteForever className="mr-1" />
                            Reset
                        </button>
                    </div>
                </div>
            </div>
            </div>
            <div>
            <Header  />
            </div>

    </div>
    </>
  )
}

export default Category