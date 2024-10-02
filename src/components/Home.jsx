import React from 'react';
import image from '../assets/background.png'; // Ensure this path is correct
import Card from './Card';
import hierarchy from '../assets/icons/hierarchy.png'
import searchIMG from '../assets/icons/search.png'
const Home = () => {
  return (
    <div style={{ backgroundImage: `url(${image})`}} className='w-full h-full opacity-100 bg-repeat'>
      <div className='font-black text-9xl font-hw text-center text-[#10110f] p-11'>
        TRIE<br/>PDF
      </div>
      <div className='flex justify-center'>
        <Card bgColor= '#ef4444' text='VISUALIZE TRIE' image={hierarchy}/>
        <Card bgColor='#22c55e' text='BETTER SEARCH' image={searchIMG}/>
      </div>
    </div>
  );
};

export default Home;
