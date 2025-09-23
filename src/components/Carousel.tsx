'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface CarouselSlide {
  id: string
  title: string
  subtitle: string
  description: string
  buttonText: string
  backgroundImage: string
  video?: string
}

const slides: CarouselSlide[] = [
  {
    id: 'carousel-slide-0',
    title: 'WAN 2.2 Image generation',
    subtitle: 'New Image Model',
    description: 'Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.',
    buttonText: 'Try WAN 2.2',
    backgroundImage: '/carousel 1.webp',
  },
  {
    id: 'carousel-slide-1',
    title: 'FLUX.1 Krea',
    subtitle: 'Open Source Model',
    description: "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
    buttonText: 'Read report',
    backgroundImage: '/carousel 2.webp',
  },
  {
    id: 'carousel-slide-2',
    title: 'Introducing Motion Transfer',
    subtitle: 'New tool',
    description: 'Bring motion into your characters. Upload any image, record a video of yourself, and make your characters smile, talk, and dance. Powered by Runway Act 2.',
    buttonText: 'Try now',
    backgroundImage: '/carousel 3.webp',
  },
  {
    id: 'carousel-slide-3',
    title: 'Krea 1 – Open Beta Access',
    subtitle: 'Announcement',
    description: 'Free access to our new frontier AI image generator. Enjoy unparalleled photorealism, multi-language prompting, and ultra high resolutions.',
    buttonText: 'Generate images',
    backgroundImage: '/carousel 10.webp',
  },
  {
    id: 'carousel-slide-4',
    title: 'Announcing Krea 1',
    subtitle: 'New model',
    description: 'Our first frontier image model. State of the art photorealism, high aesthetic diversity, excellent prompt adherence. Apply now for beta access.',
    buttonText: 'Read more',
    backgroundImage: '/carousel 5.webp',
   
  },

  {
    id: 'carousel-slide-5',
    title: 'Edit with Kontext',
    subtitle: 'New tool',
    description: 'Editing images has never been easier. Try FLUX.1 Kontext to change generations and photos.',
    buttonText: 'Edit image',
    backgroundImage: '/carousel 6.webp',
   
  },
 {
    id: 'carousel-slide-6',
    title: 'Announcing Lip-syncing',
    subtitle: 'New feature',
    description: 'Make your characters talk – upload a face, generate or record voices, and bring life into your generations. Powerful lip-syncing with Hedra. ',
    buttonText: 'Try Lip-sync',
    backgroundImage: '/carousel 8.webp',
   
  },
  {
   id: 'carousel-slide-7',
    title: 'New Enhance Models',
    subtitle: 'New model',
    description: 'Try out Krea\'s new powerful generative enhancer, upscale to 22K resolution with Topaz, or save credits with super fast models.',
    buttonText: 'Upscale & Enhance',
    backgroundImage: '/carousel 7.webp',
   
  },
    {
   id: 'carousel-slide-8',
    title: 'Visual Compositing with ChatGPT Paint',
    subtitle: 'New feature',
    description: 'Build images with our new visual canvas & let ChatGPT interpret your sketches, annotations, and collages.',
    buttonText: 'Try ChatGPT Paint',
    backgroundImage: '/carousel 11.webp',
   
  }
]

interface CarouselProps {
  isDarkMode?: boolean
}

export default function Carousel({ isDarkMode }: CarouselProps) {
  const clonesAtStart = 0
  const clonesAtEnd = 2
  const initialSlideIndex = clonesAtStart

  const [currentSlide, setCurrentSlide] = useState(initialSlideIndex) 
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false) 
  const [isInitialized, setIsInitialized] = useState(false)

  const trackRef = useRef<HTMLDivElement | null>(null)
  const firstSlideRef = useRef<HTMLDivElement | null>(null)
  const [translatePx, setTranslatePx] = useState(0)
  
  const extendedSlides = [
    ...slides.slice(-clonesAtStart),
    ...slides,
    ...slides.slice(0, clonesAtEnd)
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialized(true)
      setIsTransitioning(true) 
    }, 150)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying || !isInitialized) return
    const timer = setInterval(() => {
      setCurrentSlide(prev => prev + 1)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, isInitialized])

  useEffect(() => {
    if (!isInitialized) return

    if (currentSlide >= slides.length + initialSlideIndex) {
      const timer = setTimeout(() => {
        setIsTransitioning(false)
        setCurrentSlide(initialSlideIndex)
        const timer2 = setTimeout(() => setIsTransitioning(true), 50)
        return () => clearTimeout(timer2)
      }, 600) 
      return () => clearTimeout(timer)
    }
    
    if (currentSlide < initialSlideIndex) {
      const timer = setTimeout(() => {
        setIsTransitioning(false)
        setCurrentSlide(slides.length + initialSlideIndex - 1)
        const timer2 = setTimeout(() => setIsTransitioning(true), 50)
        return () => clearTimeout(timer2)
      }, 600) 
      return () => clearTimeout(timer)
    }
  }, [currentSlide, initialSlideIndex, isInitialized])

  const goToSlide = (index: number) => {
    setCurrentSlide(initialSlideIndex + index)
  }
  
  const goToPrevious = () => {
    setCurrentSlide(prev => prev - 1)
  }
  
  const goToNext = () => {
    setCurrentSlide(prev => prev + 1)
  }

  const recalc = () => {
    const track = trackRef.current
    const first = firstSlideRef.current
    if (!track || !first || !isInitialized) return 

    const slideWidth = first.getBoundingClientRect().width
    const gapStr = window.getComputedStyle(track).gap || '0px'
    const gap = parseFloat(gapStr)
    const distance = (slideWidth + gap) * currentSlide
    setTranslatePx(distance)
  }

  useEffect(() => {
    if (!isInitialized) return 
    recalc()
    const onResize = () => recalc()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide, isInitialized])

  useEffect(() => {
    if (!isInitialized) return 
    const timer = setTimeout(recalc, 50)
    return () => clearTimeout(timer)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized])

  const activeDotIndex = ((currentSlide - initialSlideIndex) % slides.length + slides.length) % slides.length

  return (
    <div
      className="relative mx-auto my-16 sm:pt-4 md:pt-17 w-full max-w-7xl"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className={`flex gap-[60px] will-change-transform ${
            isTransitioning ? 'transition-transform duration-600 ease-out' : ''
          }`}
          style={{ transform: `translateX(-${translatePx}px)` }}
        >
          {extendedSlides.map((slide, idx) => (
            <div
              key={`${slide.id}-${idx}`}
              ref={idx === 0 ? firstSlideRef : undefined}
              className="shrink-0 w-full sm:w-[75%] md:w-[66%] lg:w-[55%] xl:w-[60%] rounded-2xl overflow-hidden"
            >
              <a className="group/card block relative overflow-hidden rounded-2xl">

              <div
              className={`relative flex h-64 max-h-[445px] w-full max-w-[848px] shrink-0 gap-3 overflow-hidden rounded-2xl bg-cover bg-center transition-[filter] duration-[500ms] ease-[cubic-bezier(.3,0,.2,1)] sm:aspect-[2/1] sm:h-[50vh] lg:h-[60vh]  sm:rounded-3xl group-hover/card:brightness-130 ${
                isDarkMode ? 'bg-gray-600' : 'bg-gray-600'
              }`}
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 10%), url('${slide.backgroundImage}')`
              }}
            >
              {/* the image */}
              <div className="relative w-full h-56 sm:h-[46vh] lg:h-[58vh] overflow-hidden">
                <Image
                  src={slide.backgroundImage}
                  alt={slide.title}
                  fill
                  priority={idx === initialSlideIndex} 
                  quality={90}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, (max-width: 1024px) 66vw, 60vw"
                  className="object-cover object-center transition-transform duration-300 ease-out group-hover/card:scale-110"
                  onLoad={() => recalc()}
                />
              </div>
                
                

                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 20%, rgba(0,0,0,0.18) 40%, rgba(0,0,0,0) 70%)',
                      
                  }}
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(60% 40% at 50% 70%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 65%, rgba(0,0,0,0.45) 100%)',
                    mixBlendMode: 'multiply',
                    opacity: 0.7,
                  }}
                />

                <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-10 pointer-events-none bg-gradient-to-b from-white/6 to-transparent" />

                <div className="absolute inset-0 z-10 flex flex-col justify-between p-4 sm:p-6">
                  <div>
                    <p className="text-[10px] tracking-tighter font-bold text-white/75 uppercase">
                      {slide.subtitle}
                    </p>
                  </div>

                  <div className="flex items-end justify-between gap-4">
                    <div className="max-w-[55%]">
                      <h3 className="text-lg  md:text-xl lg:text-2xl font-semibold text-white leading-tight hidden sm:block">
                        {slide.title}
                      </h3>
                      <p className="text-[10px] md:text-xs  lg:text-[14px] text-white/85 mt-2 ">{slide.description}</p>
                    </div>

                    <span className="
                      group-hover/card:bg-primary-200
                      flex items-center leading-none
                      h-[38px] sm:h-[44px]
                      shrink-0 gap-1
                      rounded-full
                      bg-white px-4 sm:px-7
                      text-xs sm:text-sm
                      font-medium text-black
                      transition-colors transform duration-100 ease-out
                      group-active/card:scale-95
                    ">
                      {slide.buttonText}
                    </span>
                  </div>
                </div>

                <div className="absolute inset-0 transition-[filter,transform] duration-300 ease-[cubic-bezier(.3,0,.2,1)] group-hover/card:brightness-110" />
              </div>
              </a>


            </div>
          ))}
        </div>
      </div>

      {/* controls */}
      <div className="mt-4 hidden  sm:flex items-center justify-center relative">
        <div className="flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goToSlide(i)}
              className={`h-2 w-2 rounded-full transition-transform duration-100 ease-out hover:scale-125 ${i === activeDotIndex ? (isDarkMode ? 'bg-white' : 'bg-gray-900')
                    : (isDarkMode ? 'bg-[rgb(115,115,115)]/50' : 'bg-gray-300')
                }`}
            />
          ))}
        </div>

        {/* prev/next */}
        <div className="flex gap-2 absolute right-0 items-center">
          <button
            onClick={goToPrevious}
            className={`flex h-7 w-7 items-center justify-center rounded-full duration-150 ease-out transition-colors ${
              isDarkMode 
                ? 'bg-[rgb(115,115,115)]/20 text-white hover:bg-[rgb(115,115,115)]/40' 
                : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
            }`}
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>

          </button>
          <button
            onClick={goToNext}
            className={`flex h-7 w-7 items-center justify-center rounded-full duration-150 ease-out transition-colors ${
              isDarkMode 
                ? 'bg-[rgb(115,115,115)]/20 text-white hover:bg-[rgb(115,115,115)]/40' 
                : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
            }`}
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}