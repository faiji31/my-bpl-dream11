import React, { use } from 'react';
import userImg from "../../assets/user1.png"
import FlagImg from '../../assets/Group.png'

const AvilablePlayers = ({PlayersPromise}) => {
    const PlayerData = use(PlayersPromise)
    console.log(PlayerData)
    return (
        <div className='max-w-[1200px] mx-auto'>
            
            <div className="card bg-base-100 w-96 shadow-sm p-4">
  <figure>
   <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="mt-4">
    <div className='flex'>
        <img src={userImg} alt="" /> <h2 className="card-title ml-2">Rohit Sharma</h2>
    </div>
  <div className='flex justify-between items-center border-b-1 border-gray-300 pb-2'>
      <div className='flex gap-4 mt-6 items-center'>
      <img className='w-[20px] h-[20px]'  src={FlagImg} alt="" /> 
      <span>India</span>
    </div>
    <button className='btn'>All-Rounder</button>
  </div>
  <div className='flex justify-between font-bold'>
    <span>Rating</span>
    <span>5</span>
  </div>
  <div className='flex justify-between mt-4 '>
    <span className='font-bold'>Right-Hand-Batsman</span>
    <span>Right-Arm-Bowler</span>
  </div>
  <div className='flex justify-between items-center mt-3 '>
    <p>Price: $1500000</p>
    <button className='btn'>Choose</button>
  </div>
  
  
    
  </div>
</div>
        </div>
    );
};

export default AvilablePlayers;