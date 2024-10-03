import React from 'react'
import { useNavigate } from 'react-router-dom';
const Card = ({ bgColor, text ,image, navi}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`${navi}`);
    }
  return (
    <button onClick={handleClick}>
        <div className='h-96 w-96 bg-white mb-20 border border-black hover:cursor-pointer hover:shadow-lg hover:shadow-black'>
            <div className='align-middle font-hw text-[#FFFFFF] text-5xl text-center p-6  border-black' style={{backgroundColor: bgColor}}>
               {text}
            </div>
            <div className='align-middle justify-center'>
                <div className='flex-auto'></div>
                <img src ={image} className='w-48 align-middle ml-24 mb-5 mt-5'></img>
            </div>
        </div>
    </button>
  )
}

export default Card
