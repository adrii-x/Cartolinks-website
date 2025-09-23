'use client'

interface FooterProps {
  isDarkMode?: boolean
  dark_text?: string
} 

export default function Footer({ isDarkMode }: FooterProps) {
      const dark_text = '[rgb(115,115,115)]'

  return (
    <footer className={`relative mt-12 py-8 max-[500px]:mb-[25px] mb-0  ${
      isDarkMode 
        ? `text-${dark_text} `
        : ' text-gray-600 '
    }`}>
      <div className={`mx-auto max-w-7xl px-5  pt-9.5 sm:px-10  ${
      isDarkMode 
        ? `text-${dark_text}`
        : ' text-gray-600'
}`}>
        <div className="mb-8  gap-8 grid grid-cols-4 ">

        <div className="mx-auto">
                <div>
                    <h3 className={`mb-4 text-sm max-[524px]:text-[12px]  font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    Krea
                    </h3>
                    <ul className="space-y-2.5 text-xs max-[524px]:text-[8px] ">
                    <li>
                        <a href="/login" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                        Log In
                        </a>
                    </li>
                    <li>
                        <a href="/pricing/teams" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                        Teams
                        </a>
                    </li>
                    <li>
                        <a href="/enterprise" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                        Enterprise
                        </a>
                    </li>
                    <li>
                        <a href="/feed" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                        Gallery
                        </a>
                    </li>
                    </ul>
                </div>

        </div>

        <div className="mx-auto">
        <div>
            <h3 className={`mb-4 text-sm max-[524px]:text-[12px]  font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>
              Products
            </h3>
            <ul className="space-y-2.5 text-xs  max-[524px]:text-[8px] ">
              <li>
                <a href="/image" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                  Image
                </a>
              </li>
              <li>
                <a href="/video" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                  Video
                </a>
              </li>
              <li>
                <a href="/enhancer" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                  Enhancer
                </a>
              </li>
              <li>
                <a href="/realtime" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                  Realtime
                </a>
              </li>
              <li>
                <a href="/edit" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                  Edit
                </a>
              </li>
              <li>
                <a href="/chat" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                  Chat
                </a>
              </li>
              <li>
                <a href="/stage" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                  Stage
                </a>
              </li>
              <li>
                <a href="/animator" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                  Animator
                </a>
              </li>
              <li>
                <a href="/train" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                  Train
                </a>
              </li>
            </ul>
          </div>


        </div>

        <div className="mx-auto">
                      <div>
            <h3 className={`mb-4 text-sm max-[524px]:text-[11px]  font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>
              Resources
            </h3>
            <ul className="space-y-2.5 text-xs  max-[524px]:text-[8px] ">
              <li>
                <a href="/pricing" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/docs" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="/models" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                  Models
                </a>
              </li>
            </ul>
          </div>

            

        </div>


        <div className="mx-auto">
             <div>
            <h3 className={`mb-4 text-sm max-[524px]:text-[11px] font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>
              About
            </h3>
            <ul className="space-y-2.5 text-xs max-[524px]:text-[8px] ">
              <li>
                <a href="/blog" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/discord" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="/articles" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                  Articles
                </a>
              </li>
            </ul>
          </div>
        </div>
         
        </div>

        <div className={`flex flex-wrap items-center justify-between gap-4 border-t pt-4 text-xs font-medium ${
          isDarkMode 
            ? `border-[rgb(115,115,115)]/25  text-[rgb(115,115,115)]`
            : 'border-gray-200 text-gray-400'
        }`}>
          <p>By Adrian Okonkwo</p>
          
          {/* Links */}
          <div className="flex items-center gap-4">
            <a 
              className="hover:text-gray-800 dark:hover:text-gray-200 mr-0.5 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                width="1em" 
                height="1em" 
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <path d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114M6 17h14M6 21h14" />
                <path strokeLinejoin="round" d="M6 21a2 2 0 1 1 0-4" />
                <path d="M9 7h6" />
              </svg>
              <span className="sr-only">Documentation</span>
            </a>

            <a 
              href="https://x.com/home" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-800 dark:hover:text-gray-200 mr-0.5 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4" 
                width="1em" 
                height="1em" 
                viewBox="0 0 14 14"
                fill="currentColor"
              >
                <path d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/adrian-okonkwo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                width="1em" 
                height="1em" 
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2M8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12a1.57 1.57 0 1 1 0 3.12m12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>

            <a 
              href="https://www.instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                width="1em" 
                height="1em" 
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
              </svg>
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}