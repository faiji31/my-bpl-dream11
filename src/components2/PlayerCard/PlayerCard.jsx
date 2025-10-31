import React, { useState } from 'react';
import userImg from "../../assets/user1.png"
import FlagImg from '../../assets/Group.png'

const PlayerCard = ({player,setAvilableBalance,avilableBalence}) => {
    const [isSelected,setIsSelected]=useState(false)

    return (
         <div className="card bg-base-100  shadow-sm p-4">
  <figure>
   <img className='w-full h-[400px] object-cover'
      src={player.image}
      alt="Shoes" />
  </figure>
  <div className="mt-4">
    <div className='flex'>
        <img src={userImg} alt="" /> <h2 className="card-title ml-2">{player.name}</h2>
    </div>
  <div className='flex justify-between items-center border-b-1 border-gray-300 pb-2'>
      <div className='flex gap-4 mt-6 items-center'>
      <img className='w-[20px] h-[20px]'  src={FlagImg} alt="" /> 
      <span>{player.country}</span>
    </div>
    <button className='btn'>{player.role}</button>
  </div>
  <div className='flex justify-between font-bold'>
    <span>Rating</span>
    <span>{player.rating}</span>
  </div>
  <div className='flex justify-between mt-4 '>
    <span className='font-bold'>{player.batting_style}</span>
    <span>{player.bowling_style}</span>
  </div>
  <div className='flex justify-between items-center mt-3 '>
    <p className='font-bold'>{player.price_usd_estimated}</p>
    <button disabled={isSelected} onClick={()=>{
    
    
        setIsSelected(true)
        setAvilableBalance(avilableBalence-player.price_usd_estimated.split(",").join(""))}

    } className='btn'>{isSelected=== true ?"Selected":"Choose Player"}</button>
  </div>
  
  
    
  </div>
</div>
    );
};

export default PlayerCard;