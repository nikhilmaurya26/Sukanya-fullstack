import './App.css'
import Canvas from './canvas'
import { Customizes } from './pages/Customiser'
import Home from './pages/Home'

function App() {
  return (
    <main className='app transition-all md:m-10 m-5'>
      {/* <Customizes/> */}
      <div className='md:flex'>
        <div className='flex-1'>
          <Home />
        </div>
        <div className='flex-1'></div>
      </div>
      <Canvas />
    </main>
  )
}

export default App
