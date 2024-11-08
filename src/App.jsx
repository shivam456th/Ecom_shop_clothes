import React from 'react'
import Navbar from './Components/Navbar'
import Aside from './Components/Aside'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Header'

const App = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Flip
/>
      <Navbar />
      <Aside />
      {/* <Header/> */}
    </div>
  )
}

export default App