
import './App.css'
import Card from './components/Card'

function App() {
    
  const data ={
    name : "aditya",
    roll_no : 43758718964,
    hero : "batman"
};

  return (
    <>
    <h1 className='text-6xl font-bold text-sky-600'>Tailwinds</h1>
    <Card object ={data}/>
    </>
  )
}

export default App
