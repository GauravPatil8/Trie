import React from 'react'
import Title from '../components/Title'
import image from '../assets/background.png'
import Footer from '../components/Footer'
import Search from '../components/Search'
const BetterSearchPage = () => {
  return (
    <>
    <div
    style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh', // Ensure the container takes full viewport height
      background: `
        linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
      `,
      backgroundSize: '50px 50px', // Adjust the size for a denser grid
    }} 
    className='w-full h-screen opacity-100 bg-repeat'>
      <header>
        <Title size="text-4xl" />
      </header>
    </div>
    <Footer/>
    </>
  )
}

export default BetterSearchPage
