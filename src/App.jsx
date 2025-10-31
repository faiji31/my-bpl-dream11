
import './App.css'
import { Suspense, useState } from 'react'



import NavBar from './NavBar/NavBar'
import AvilablePlayers from './components2/AvilablePlayers/AvilablePlayers'
import SelectedPlayers from './components2/SelectedPlayers/SelectedPlayers'



const fetchPlayers = async()=>{
  const res = await fetch("https://raw.githubusercontent.com/faiji31/bottles-data/refs/heads/main/players.json")
  return res.json()
}



function App() {
  const PlayersPromise = fetchPlayers()

  const [toggle,setToggle]=useState(true)

  return (
    <>
   <NavBar></NavBar>

<div className='flex justify-between items-center max-w-[1200px] mx-auto'>
  <h1 className='font-bold text-2xl'>Avilable Players</h1>
  <div>
    <button onClick={()=>setToggle(true)} className={`font-bold border-1 border-gray-400 rounded-l-2xl py-3 px-4 ${toggle===true? "bg-[#E7EE29]":""}`}>Avilable Players</button>
    <button onClick={()=>setToggle(false)}  className={`font-bold border-1 border-gray-400 rounded-r-2xl py-3 px-4 ${toggle===false? "bg-[#E7EE29]":""}`}>Selected Players <span>(0)</span></button>
  </div>
</div>



{
  toggle === true? <Suspense fallback={<span className="loading loading-spinner text-neutral"></span>}>
  <AvilablePlayers PlayersPromise={PlayersPromise}></AvilablePlayers>
 
</Suspense>:<SelectedPlayers></SelectedPlayers>
}



 
 


 
     
     
    </>
  )
}

export default App
