import React from 'react'

const Title = ({size}) => {
  return (
    <div className='p-11 text-center'>
        <a href='/'>
            <span className={`hover:cursor-pointer font-black ${size} font-hw text-[#10110f]`}>TRIE<br/>PDF</span>
        </a>
    </div>
  )
}

export default Title
