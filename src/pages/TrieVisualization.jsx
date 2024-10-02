import React from 'react'
import Title from '../components/Title';
import image from '../assets/background.png'; 
import Footer from '../components/Footer';
import Search from '../components/Search';
const TrieVisualization = () => {
  return (
    <>
        <div  style={{ backgroundImage: `url(${image})`}} className='w-full h-screen opacity-100 bg-cover bg-top'>
          <Title size="text-4xl"/>
          <div className='flex justify-between ml-6'>
              <Search hint="Delete a Word" text1="Delete"/>
              <Search hint="Insert a Word" text1="Insert"/>
              <Search hint="Search a Word" text1="Search"/>
          </div>
          <div className="p-6 mt-6">
            <canvas width={1400} height={400} className="border border-black bg-white align-middle rounded-2xl m-7"></canvas>
          </div>
        <Footer/>
        </div>
    </>
  )
}

export default TrieVisualization
