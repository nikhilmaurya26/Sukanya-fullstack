import './App.css'
import { Banner } from './components/Banner'
import { EmblaCarousel } from './components/EmblaCarousel';
// import CanvasModel from './canvas/index'
import { Customizes } from './pages/Customiser'
import Home from './pages/Home'
import '@mantine/core/styles.css';
import { HomePageBanner } from './assets/index'
import ContentPart from './components/ContentPart';

function App() {
  return (
    <main className='app transition-all'>
      <Customizes />
      <div className='md:flex md:p-10 p-5'>
        <div className='flex-1'>
          <Home />
        </div>
        <div className='flex-1'>
          <Banner path={HomePageBanner} className={'md:h-[95svh] h-[50svh]'} />
        </div>
      </div>
      <div className='flex md:h-auto h-[100svh] flex-col md:flex-row bg-[#FFB7A1]' id="carousel-section">
        <div className='md:flex-1'>
          <EmblaCarousel />
        </div>
        <div className='md:flex-1'>
          <ContentPart />
        </div>
      </div>
      {/* <CanvasModel /> */}
    </main>
  )
}

export default App
