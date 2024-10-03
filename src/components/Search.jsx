import React from 'react'

const Search = ({hint, text1, onClick, handleChange, input}) => {
  return (
    <div className='flex'>
    <div >
      <input  type='text' placeholder={hint} onChange={handleChange} value = {input} className='border-2 border-black rounded-md h-10 w-64 ml-8 p-3'/>
      <button  onClick={onClick} className='bg-green-400 h-10 w-32 text-white rounded-md border-2 border-black ml-2 text-lg hover:bg-green-500 active:bg-green-600'>
        {text1}
        </button>
    </div>
    </div>
  )
}

export default Search