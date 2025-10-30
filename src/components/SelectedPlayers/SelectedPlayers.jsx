import React, { use } from 'react';

const SelectedPlayers = ({PlayersPromise}) => {
    const PlayerData = use(PlayersPromise)
    console.log(PlayerData)
    return (
        <div className='max-w-[1200px] mx-auto'>
            <h1>Seleted Players:</h1>
            <p>Name:{PlayerData
                .name}</p>
        </div>
    );
};

export default SelectedPlayers;