'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

interface GalleryProps {
  isDarkMode?: boolean
  dark_text?: string

}

const demoApps = [
  {
    id: "flux-krea",
    title: "AI Image Generator – FLUX.1 Krea",
    description: "Generate simple images with a text description.",
    image: "/demo 1.webp"
  },
  {
    id: "wan-t2i",
    title: "AI Image Generator – Wan 2.2",
    description: "Generate simple images with a text description.",
    image: "/demo 2.webp"
  },
  {
    id: "qwen",
    title: "AI Image Generator – Qwen",
    description: "Generate simple images with a text description.",
    image: "/demo 3.webp"
  },
  {
    id: "remove-text",
    title: "Text Remover",
    description: "Remove text, watermarks, or titles from any image.",
    image: "/demo 4.webp"
  },
  {
    id: "change-haircut",
    title: "Change Haircut",
    description: "Upload an image of a person and get a random haircut.",
    image: "/demo 5.webp"
  },
  {
    id: "change-lighting",
    title: "Change Lighting",
    description: "Dim the lights, change the time of day, or make it rain.",
    image: "/demo 6.webp"
  },
  {
    id: "cartoonify",
    title: "Cartoonify",
    description: "Turn your photos into cartoons, drawings, or manga.",
    image: "/demo 7.webp"
  },
  {
    id: "colorize",
    title: "Colorize",
    description: "Turn sketches, doodles, or lineart colorful pictures.",
    image: "/demo 8.webp"
  },
  {
    id: "change-clothes",
    title: "Clothes Changer",
    description: "Upload selfies and try on different outfits.",
    image: "/demo 9.webp"
  },
  {
    id: "movie-poster",
    title: "Movie Poster",
    description: "Make movie poster.",
    image: "/demo 10.webp"
  }
]

export default function Gallery({ isDarkMode }: GalleryProps) {
    const dark_text = '[rgb(115,115,115)]'
    const [isExpanded, setIsExpanded] = useState(true)

    const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }
  
  return (
    <div className="mx-auto w-full max-w-7xl px-1">
      {/* Header */}
           <div className="my-18 mb-1.5 flex w-full justify-between animate-in slide-in-from-bottom-4 duration-500">
        <h2 className={`text-xl font-[600] ${isDarkMode ? 'text-white' : 'text-black'}`}>
          Gallery
        </h2>
        
        <button 
          className="group text-xs font-[600] text-blue-500 hover:text-blue-700 transition-colors duration-200"     
          onClick={toggleExpanded}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={`mr-0.5 inline-block transition-transform duration-200 ease-out group-hover:translate-y-[1px] ${
              isExpanded ? 'rotate-180' : ''
            }`}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
          Show all
        </button>
      </div>

        {isExpanded && (
      <nav className="mx-auto flex w-full origin-bottom transform items-center justify-center transition-[translate,scale,opacity] duration-400 ease-out animate-in slide-in-from-bottom-4">
        <menu className="-mx-3.5 grid grid-flow-row grid-cols-2 gap-x-0.5 px-1 gap-y-2.5 max-[639px]:p-[30px] min-[536px]:p-[30px] md:grid-cols-4 md:px-0 lg:grid-cols-5 lg:px-0 xl:grid-cols-6 xl:px-0">
          {demoApps.map((app) => (
            <li key={app.id}>
              <a 
                className={`group flex h-full w-full flex-col gap-3.5 rounded-2xl p-3.5 transition-colors duration-100 ease-out ${
                  isDarkMode 
                    ? `hover:bg-[rgb(115,115,115)]/10`

                    : 'hover:bg-gray-100'
                }`}
              >
                <Image
                src={app.image}
                alt="app.title" 
                width={67.5}
                height={67.5}
                className="aspect-[3/2] w-full rounded-lg object-cover object-center"
            />


                
                <div className="flex flex-col gap-1">
                  <h4 className={`text-base font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    {app.title}
                  </h4>
                  <p className={`text-xs ${isDarkMode ? `text-${dark_text}` : 'text-gray-600'}`}>
                    {app.description}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </menu>
      </nav>
        )}
    </div>
  )
}