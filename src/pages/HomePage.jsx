import React from 'react'
import Card from '../components/Card'
import hierarchy from '../assets/icons/hierarchy.png'
import searchIMG from '../assets/icons/search.png'
import Title from '../components/Title'
import Footer from '../components/Footer'
const HomePage = () => {
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
      className='w-full h-full opacity-100 bg-repeat'>
      <header>
        <Title size="text-9xl"/>
      </header>
      <main>
        <div className='flex justify-around'>
          <Card bgColor= '#ef4444' text='VISUALIZE TRIE' image={hierarchy} navi='/trievisualization'/>
          <Card bgColor='#22c55e' text='BETTER SEARCH' image={searchIMG} navi= '/bettersearch'/>
        </div>
      </main>
    </div>
    <Footer/>
    </>
  )
}

export default HomePage
