import useEmblaCarousel from 'embla-carousel-react'
import { useEffect } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { Banner } from './Banner'
import { b1, b2, b3 } from '../assets'

export function EmblaCarousel() {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])

  const imagePath = [
    {
      id: 1,
      path: b1
    },
    {
      id: 2,
      path: b2
    },
    {
      id: 3,
      path: b3
    }
  ]
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  return (
    <div className="embla mx-auto mt-12 md:h-[100vh] h-50dvh max-w-lg  md:max-w-[100svw]" ref={emblaRef}>
      <div className="embla__container h-full">
        {imagePath.map((data, i) => {
          return (
            <div key={i} className="embla__slide h-full flex justify-center items-center">
              <Banner path={data.path} className={'md:h-[70svh] h-[50svh]'} />
            </div>
          )
        })}

      </div>
    </div>
  )
}
