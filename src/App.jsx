
import './App.css'
import navImg from './assets/logo.png'
import dollarImg from './assets/dollar.png'
import AvilablePlayers from './components/AvilablePlayers/avilablePlayers'
import SelectedPlayers from './components/selectedPlayers/selectedPlayers'
function App() {
  

  return (
    <>
   
      <div className="navbar max-w-[1200px] mx-auto">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl"><img className='w-[60px] h-[60px]' src={navImg}alt="logo" /></a>
  </div>
  <div className="flex items-center">
    <span className='mr-1'>600000000</span>
    <span className='mr-1'>Coin</span>
    <img  src={dollarImg} alt="" className='w-6 h-6' />
  </div>
</div>
 <AvilablePlayers> </AvilablePlayers>
 <SelectedPlayers></SelectedPlayers>
     
     
    </>
  )
}

export default App
