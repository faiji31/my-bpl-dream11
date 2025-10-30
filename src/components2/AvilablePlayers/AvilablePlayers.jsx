import React, { use } from 'react';
import userImg from "../../assets/user1.png"
import FlagImg from '../../assets/Group.png'

const AvilablePlayers = ({PlayersPromise}) => {
    const PlayerData = use(PlayersPromise)
    console.log(PlayerData)
    return (
        <div className='max-w-[1200px] mx-auto gridgrid-cols-1 md:grid grid-cols-3 gap-4'>
            
       {
        PlayerData.map(player=>     <div className="card bg-base-100  shadow-sm p-4">
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
    <p className='font-bold'>{player.price}</p>
    <button className='btn'>Choose</button>
  </div>
  
  
    
  </div>
</div>)
       }
        </div>
    );
};

export default AvilablePlayers;