import React, { use } from 'react';

import PlayerCard from '../PlayerCard/PlayerCard';

const AvilablePlayers = ({PlayersPromise}) => {
    const PlayerData = use(PlayersPromise)
    console.log(PlayerData)
    return (
        <div className='max-w-[1200px] mx-auto gridgrid-cols-1 md:grid grid-cols-3 gap-4'>
            
       {
        PlayerData.map(player=> <PlayerCard player={player}></PlayerCard>    )
       }
        </div>
    );
};

export default AvilablePlayers;