import React from 'react'
import image from '../assets/background.png' 
import Card from '../components/Card'
import hierarchy from '../assets/icons/hierarchy.png'
import searchIMG from '../assets/icons/search.png'
import Title from '../components/Title'
import Footer from '../components/Footer'
const HomePage = () => {
  return (
    <>
    <div style={{ backgroundImage: `url(${image})`}} className='w-full h-full opacity-100 bg-repeat'>
      <Title size="text-9xl"/>
      <div className='flex justify-center'>
        <Card bgColor= '#ef4444' text='VISUALIZE TRIE' image={hierarchy} navi='/trievisualization'/>
        <Card bgColor='#22c55e' text='BETTER SEARCH' image={searchIMG} navi= '/bettersearch'/>
      </div>
    <Footer/>
    </div>
    </>
  )
}

export default HomePage
