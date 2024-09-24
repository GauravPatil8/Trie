import React from 'react';
import starIcon from '../assets/icons/star.png';

const Navigation = () => {
  return (
    <nav className="bg-white text-black px-4 py-3 shadow-md">
      <div className="container mx-auto flex items-center">
        <a
          href='https://github.com/GauravPatil8'
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex border border-gray-700 p-1 font-hw border-dashed align-middle hover:cursor-pointer items-center"> 
            <img src={starIcon} alt='star image' className='w-5 h-5 align-middle'/>
            <span className="ml-1">View code</span>
          </div>
        </a>
        
        <div className="flex-1"></div>

        <div className="text-3xl font-hw text-center custom-font">
          <a href='/'>Trie PDF</a> 
        </div>

        <div className="flex-1 flex justify-end space-x-4">
          <a
            href="https://github.com/GauravPatil8"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 font-hw"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 font-hw"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
