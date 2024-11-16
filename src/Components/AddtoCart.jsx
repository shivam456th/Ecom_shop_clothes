import React, { useContext } from 'react'
import { IoBagAdd } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { Context } from './Store';

const AddtoCart = () => {
    const { cart, sub, add, del, open, Close } = useContext(Context)
    console.log(cart);

    const total = cart.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.newPrice * currentValue.quantity
    }, 0);

    return (
        <>
            <div className={` ${open ? "w-[50%]" : "w-[0%]"} md:block hidden z-20 transition-all top-20 right-0  h-screen bg-white shadow-lg fixed overflow-y-scroll scrollbar-hide`}>
                <div className='p-4 border-b'>
                    <div className='flex justify-between items-center'>
                        <p className='text-xl font-semibold'>Shopping Cart <span className='text-blue-600 text-sm'>({cart.length})</span></p>
                        <MdClose className='text-2xl cursor-pointer hover:text-red-500 transition-colors' onClick={Close} />
                    </div>
                </div>



                {cart.length > 0 ? cart.map((e, index) => {
                    return <div key={index} className="flex items-center p-6 border-b hover:bg-gray-50/80 transition-all duration-300 group">
                        <div className="w-28 h-28 rounded-xl overflow-hidden border shadow-sm group-hover:shadow-md transition-shadow">
                            <img src={e.img}
                                alt=""
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="ml-6 flex-grow">
                            <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">{e.title}</h3>
                            <div className="text-sm text-gray-600 mb-3 space-x-4">
                                <span className="inline-flex items-center">
                                    <div className="w-3 h-3 rounded-full bg-white border mr-2"></div>
                                    Color: {e.color}
                                </span>
                                <span className="inline-flex items-center">
                                    <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H3V6h18v12z" />
                                    </svg>
                                    Brand: {e.company}
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4 bg-gray-50 rounded-lg p-1">
                                    <button className="w-8 h-8 rounded-lg bg-white shadow-sm hover:bg-blue-600 hover:text-white flex items-center justify-center text-blue-600 font-bold transition-all duration-200"
                                        onClick={() => sub(e.id)}
                                    >-</button>
                                    <span className="font-medium text-lg w-8 text-center">{e.quantity}</span>

                                    <button className="w-8 h-8 rounded-lg bg-white shadow-sm hover:bg-blue-600 hover:text-white flex items-center justify-center text-blue-600 font-bold transition-all duration-200"
                                        onClick={() => add(e.id)}
                                    >+</button>
                                </div>
                                <p className="font-bold text-xl text-blue-600">${e.newPrice * e.quantity}</p>
                            </div>
                        </div>
                        <button className="ml-4 p-2.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200"
                            onClick={() => del(e.id)}>
                            <MdClose className="text-2xl" />
                        </button>
                    </div>
                }) : <div className='h-[calc(100vh-13rem)] overflow-y-auto p-4'>
                    <div className='flex flex-col items-center justify-center h-full text-gray-500'>
                        <IoBagAdd className='text-6xl mb-4' />
                        <p className='text-lg mb-2'>No Products in Cart</p>
                        <p className='text-sm'>Add some products to your cart</p>
                    </div>
                </div>}

                <div className='fixed bottom-0 w-[25rem] bg-white border-t p-4'>
                    <div className='flex justify-between items-center mb-4'>
                        <p className='text-lg font-semibold'>Subtotal:</p>
                        <p className='text-xl font-bold text-blue-600'>${total}</p>
                    </div>
                    <button className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors'>
                        Checkout
                    </button>
                </div>
            </div>

            <div className={`${open ? "w-[70%]" : "w-[0%]"} md:hidden block z-20 transition-all top-60 right-0  h-screen bg-white shadow-lg fixed overflow-y-scroll scrollbar-hide`}>
                <div className='p-4 border-b'>
                    <div className='flex justify-between items-center'>
                        <p className='text-xl font-semibold'>Shopping Cart <span className='text-blue-600 text-sm'>({cart.length})</span></p>
                        <MdClose className='text-2xl cursor-pointer hover:text-red-500 transition-colors' onClick={Close} />
                    </div>
                </div>



                {cart.length > 0 ? cart.map((e, index) => {
                    return <div key={index} className="flex items-center p-6 border-b hover:bg-gray-50/80 transition-all duration-300 group">
                        <div className="w-28 h-28 rounded-xl overflow-hidden border shadow-sm group-hover:shadow-md transition-shadow">
                            <img src={e.img}
                                alt=""
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="ml-6 flex-grow">
                            <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">{e.title}</h3>
                            <div className="text-sm text-gray-600 mb-3 space-x-4">
                                <span className="inline-flex items-center">
                                    <div className="w-3 h-3 rounded-full bg-white border mr-2"></div>
                                    Color: {e.color}
                                </span>
                                <span className="inline-flex items-center">
                                    <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H3V6h18v12z" />
                                    </svg>
                                    Brand: {e.company}
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4 bg-gray-50 rounded-lg p-1">
                                    <button className="w-8 h-8 rounded-lg bg-white shadow-sm hover:bg-blue-600 hover:text-white flex items-center justify-center text-blue-600 font-bold transition-all duration-200"
                                        onClick={() => sub(e.id)}
                                    >-</button>
                                    <span className="font-medium text-lg w-8 text-center">{e.quantity}</span>

                                    <button className="w-8 h-8 rounded-lg bg-white shadow-sm hover:bg-blue-600 hover:text-white flex items-center justify-center text-blue-600 font-bold transition-all duration-200"
                                        onClick={() => add(e.id)}
                                    >+</button>
                                </div>
                                <p className="font-bold text-xl text-blue-600">${e.newPrice * e.quantity}</p>
                            </div>
                        </div>
                        <button className="ml-4 p-2.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200"
                            onClick={() => del(e.id)}>
                            <MdClose className="text-2xl" />
                        </button>
                    </div>
                }) : <div className='h-[calc(100vh-13rem)] overflow-y-auto p-4'>
                    <div className='flex flex-col items-center justify-center h-full text-gray-500'>
                        <IoBagAdd className='text-6xl mb-4' />
                        <p className='text-lg mb-2'>No Products in Cart</p>
                        <p className='text-sm'>Add some products to your cart</p>
                    </div>
                </div>}

                <div className='fixed bottom-0 w-[25rem] bg-white border-t p-4'>
                    <div className='flex justify-between items-center mb-4'>
                        <p className='text-lg font-semibold'>Subtotal:</p>
                        <p className='text-xl font-bold text-blue-600'>${total}</p>
                    </div>
                    <button className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors'>
                        Checkout
                    </button>
                </div>
            </div>
        </>
    )
}

export default AddtoCart