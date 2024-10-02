import React from 'react'
import Title from '../components/Title'
import image from '../assets/background.png'
import Footer from '../components/Footer'
import Search from '../components/Search'
const BetterSearchPage = () => {
  return (
    <>
    <div style={{ backgroundImage: `url(${image})`}} className='w-full h-screen opacity-100 bg-repeat'>
      <Title size="text-4xl" />
    </div>
    <Footer/>
    </>
  )
}

export default BetterSearchPage
