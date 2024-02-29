
import { useState } from 'react'
import './App.css'


function App() {

  let [color,setColor] = useState("olive");
  

  return (
    <div className='h-screen w-full' style={{backgroundColor : color}}>
      <div className='flex item-center justify-center grid-cols gap-8 pt-96'>
        <button className=" h-16 w-28 bg-red-700 border-4 "  onClick={()=>{setColor(color = 'red')}}>red
        </button>
        <button className="h-16 w-28 bg-violet-500  border-4" onClick={()=>{setColor(color = 'violet')}}>rose
        </button>
        <button className="h-16 w-28 bg-lime-400  border-4" onClick={()=>{setColor(color = 'lime')}}>sky
        </button>
      </div>
    </div>
    
  )
}

export default App
