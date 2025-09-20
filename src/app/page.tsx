'use client'
import { useState, useRef, useEffect } from "react";
import Main from '../components/Main'; 
import Image from 'next/image'


export default function Home() {
  const [darkMode, setdarkMode] = useState(false)
  const [profileImage, setProfileImage] = useState('avatar.svg')
  const [activeTab, setActiveTab] = useState('home')
  const [activeName, setactiveName] = useState('John Doe')
  const [dropdownstatus, setdropdownstatus] = useState(false)
  const [workspaceDropdownstatus, setworkspaceDropdownstatus] = useState(false)
  const profileDropdownRef = useRef<HTMLDivElement>(null);
  const workspaceDropdownRef = useRef<HTMLDivElement>(null);


 useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileDropdownRef.current && 
          !profileDropdownRef.current.contains(event.target as Node)) {
        setdropdownstatus(false);
      }
      
      if (workspaceDropdownRef.current && 
          !workspaceDropdownRef.current.contains(event.target as Node)) {
        setworkspaceDropdownstatus(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); 

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0]
  if (file) {
    const imageUrl = URL.createObjectURL(file)
    setProfileImage(imageUrl)
  }
  }
  const toggleDarkMode = ()=>{
    setdarkMode(!darkMode)
  }

  const toggleDropdownStatus = ()=>{
    setdropdownstatus(!dropdownstatus)
  }

  const toggleWorkspaceDropdownStatus = ()=>{
    setworkspaceDropdownstatus(!workspaceDropdownstatus)
  }
  
  const navigationItems = [
    {
      id: 'home',
      label: 'Home',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 11.7354C2 10.4141 2 9.75338 2.18958 9.15972C2.35736 8.63437 2.63195 8.14939 2.99611 7.73524C3.40763 7.26724 3.97416 6.92732 5.10723 6.24748L8.70722 4.08748C9.90443 3.36916 10.503 3.01 11.142 2.86967C11.7073 2.74555 12.2927 2.74555 12.858 2.86967C13.497 3.01 14.0956 3.36916 15.2928 4.08748L18.8928 6.24748C20.0258 6.92732 20.5924 7.26724 21.0039 7.73524C21.3681 8.14939 21.6426 8.63437 21.8104 9.15972C22 9.75338 22 10.4141 22 11.7354V18.9118C22 20.0319 22 20.592 21.782 21.0198C21.5903 21.3961 21.2843 21.7021 20.908 21.8938C20.4802 22.1118 19.9201 22.1118 18.8 22.1118H18.2C17.0799 22.1118 16.5198 22.1118 16.092 21.8938C15.7157 21.7021 15.4097 21.3961 15.218 21.0198C15 20.592 15 20.0319 15 18.9118V15.7118C15 15.1518 15 14.8717 14.891 14.6578C14.7951 14.4697 14.6422 14.3167 14.454 14.2208C14.2401 14.1118 13.9601 14.1118 13.4 14.1118H10.6C10.0399 14.1118 9.75992 14.1118 9.54601 14.2208C9.35785 14.3167 9.20487 14.4697 9.10899 14.6578C9 14.8717 9 15.1518 9 15.7118V18.9118C9 20.0319 9 20.592 8.78201 21.0198C8.59027 21.3961 8.28431 21.7021 7.90798 21.8938C7.48016 22.1118 6.9201 22.1118 5.8 22.1118H5.2C4.0799 22.1118 3.51984 22.1118 3.09202 21.8938C2.71569 21.7021 2.40973 21.3961 2.21799 21.0198C2 20.592 2 20.0319 2 18.9118V11.7354Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 'image',
      label: 'Image',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M10.4763 9.85043C10.4763 10.8104 9.69763 11.589 8.73768 11.589C7.77772 11.589 7 10.8104 7 9.85043C7 8.89049 7.77772 8.11182 8.73768 8.11182C9.69763 8.11182 10.4754 8.88955 10.4763 9.84856V9.85043Z" fill="currentColor"/>
          <rect x="2.75" y="3.86182" width="18.5" height="16.5" rx="3.25" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M15.758 13.1118C17.5271 13.1118 19.1544 14.6938 20 15.4766V19.1118H4C4 19.1118 5.29914 17.0464 6.6586 16.0349C8.01806 15.0235 9.56678 16.6015 11.2673 16.6015C12.9687 16.6015 13.9898 13.1118 15.758 13.1118Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 'video',
      label: 'Video',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M22.263 7.17399C21.637 6.41199 20.506 6.30099 19.743 6.92499L18.5167 7.92894C18.2593 8.13966 18.1409 8.46318 18.1571 8.79542C18.1589 8.83351 18.16 8.872 18.16 8.91099V15.312C18.16 15.3533 18.1588 15.3941 18.1568 15.4344C18.14 15.7656 18.2584 16.0881 18.5146 16.2987L19.729 17.297C20.045 17.558 20.448 17.701 20.863 17.701C21.849 17.701 22.654 16.899 22.657 15.912L22.669 8.31399C22.67 7.89899 22.527 7.49299 22.263 7.17399Z" fill="currentColor"/>
          <rect x="1" y="5.11182" width="16" height="15" rx="4" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 'enhancer',
      label: 'Enhancer',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.49935 13.0083C4.34395 13.5194 3.94455 13.9195 3.43425 14.075C3.94455 14.2306 4.34395 14.6306 4.49935 15.1417C4.65465 14.6306 5.05405 14.2306 5.56445 14.075C5.05405 13.9195 4.65465 13.5194 4.49935 13.0083Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.3704 5.57373C16.215 6.08483 15.8156 6.48493 15.3053 6.64043C15.8156 6.79603 16.215 7.19603 16.3704 7.70713C16.5257 7.19603 16.9251 6.79603 17.4355 6.64043C16.9251 6.48493 16.5257 6.08483 16.3704 5.57373Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.82105 18.4485H7.83105" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12.8125 3.69873H12.8025" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="3.3868" y="5.14091" width="2.5" height="22.0199" rx="1.25" transform="rotate(-44.5361 3.3868 5.14091)" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8.4043 11.3093L11.2555 8.50389L20.2713 17.6668C21.046 18.4542 21.0357 19.7204 20.2484 20.4951C19.461 21.2698 18.1947 21.2596 17.42 20.4722L8.4043 11.3093Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 'realtime',
      label: 'Realtime',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.9472 14.4612C14.6244 14.8306 14.4629 15.0153 14.2819 15.1777C14.121 15.3219 13.9487 15.4529 13.7667 15.5693C13.5618 15.7004 13.3384 15.8077 12.8914 16.0223C11.8174 16.538 11.2804 16.7959 10.9271 16.705C10.6205 16.626 10.3693 16.4065 10.25 16.1132C10.1126 15.7753 10.2963 15.2086 10.6635 14.0752C10.8164 13.6035 10.8928 13.3677 10.9952 13.1471C11.0863 12.9511 11.193 12.7629 11.3144 12.5842C11.4511 12.383 11.6125 12.1983 11.9354 11.8289L17.0023 6.03138C17.076 5.94704 17.1129 5.90487 17.1574 5.88701C17.1966 5.87129 17.2398 5.86839 17.2807 5.87871C17.3273 5.89045 17.3695 5.92731 17.4538 6.00102L19.9838 8.21213C20.0681 8.28584 20.1103 8.3227 20.1281 8.36727C20.1438 8.40647 20.1467 8.44964 20.1364 8.4906C20.1247 8.53715 20.0878 8.57932 20.0141 8.66366L14.9472 14.4612Z" fill="currentColor"/>
          <path d="M20.8883 7.65066C20.8146 7.73499 20.7778 7.77716 20.7332 7.79503C20.694 7.81075 20.6508 7.81365 20.6099 7.80333C20.5633 7.79159 20.5211 7.75473 20.4368 7.68102L17.9096 5.47231C17.8253 5.3986 17.7831 5.36175 17.7652 5.31718C17.7495 5.27798 17.7466 5.23481 17.7569 5.19385C17.7687 5.14729 17.8055 5.10512 17.8792 5.02079L18.3305 4.50446C18.6354 4.15563 18.7878 3.98121 18.9511 3.87147C19.3968 3.57199 19.9685 3.53354 20.4502 3.77066C20.6267 3.85755 20.8012 4.00999 21.15 4.31486C21.4988 4.61972 21.6732 4.77216 21.783 4.93546C22.0824 5.3811 22.1209 5.95283 21.8838 6.43456C21.7969 6.61108 21.6444 6.7855 21.3396 7.13432L20.8883 7.65066Z" fill="currentColor"/>
          <path d="M9.5 18C9.5 18 7.2314 20.6818 6 20C4.7686 19.3182 8.43957 14.8136 8.43957 13.0357C8.43957 12.0802 5.54026 16.2053 3.75331 16.7185C0.87539 17.5452 7.17108 5 7.17108 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 'edit',
      label: 'Edit',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.854L12 5.51603" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="12.0001" cy="8.17831" r="2.12118" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M10.4869 10.1001L7.45996 21.4302" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M17.2646 21.2366C17.3715 21.6368 17.1338 22.0479 16.7336 22.1548C16.3334 22.2617 15.9224 22.0239 15.8155 21.6238L17.2646 21.2366ZM14.2377 9.90652L17.2646 21.2366L15.8155 21.6238L12.7885 10.2937L14.2377 9.90652Z" fill="currentColor"/>
          <path d="M6.42188 16.1118C6.42188 16.1118 7.91228 17.3606 12.0006 17.3606C16.0889 17.3606 17.5793 16.1118 17.5793 16.1118" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 'assets',
      label: 'Assets',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 5C3 4.45 3.45 4 4 4H9.17C9.58 4 9.95 4.21 10.14 4.55L10.86 5.89C11.05 6.23 11.42 6.44 11.83 6.44H20C20.55 6.44 21 6.89 21 7.44V11C21 11.55 20.55 12 20 12H4C3.45 12 3 11.55 3 11V5Z"/>
          <rect x="3" y="7" width="18" height="12" rx="1"/>
        </svg>
      )
    }
  ]
  
  return (
    <div className={`min-h-screen relative ${darkMode ? 'bg-[rgb(16,16,16)] ' : 'bg-white'} transition-colors duration-300`}>

                  <nav className={` min-[500px]:hidden fixed buttom-0 left-0 right-0 bottom-0 flex items-center w-full pb-2 pt-2 justify-center rounded-2xl backdrop-blur-2xl transition-colors duration-300 px-1.5 py-1.5 z-90 ${
                darkMode 
                  ? 'bg-gray-700/80 border border-gray-600/50' 
                  : 'bg-gray-100 border border-gray-200/50'
              }`}>
                <ul className="flex list-none p-0 m-0 space-x-0">
                  {navigationItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => setActiveTab(item.id)}
                        className={`group relative block h-10 w-13 leading-none transition-colors duration-200 ease-out 
                          max-[400px]:h-9 max-[400px]:w-12
                          max-[370px]:h-8 max-[370px]:w-11
                          max-[340px]:h-7 max-[340px]:w-10
                          max-[310px]:h-6 max-[310px]:w-9
                          max-[280px]:h-5 max-[280px]:w-8
                          max-[250px]:h-4 max-[250px]:w-7
                          
                          ${
                          activeTab === item.id
                            ? (darkMode ? 'text-gray-900' : 'text-gray-900')
                            : (darkMode ? 'text-white' : 'text-gray-700')
                        } hover:${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
                        aria-label={`Open ${item.label}`}
                      >
                        <div className="absolute inset-0 z-20 m-auto flex items-center justify-center">
                          {item.icon}
                        </div>
                        
                        {activeTab === item.id && (
                          <div className={`absolute inset-0 z-10 rounded-xl shadow-sm transition-colors duration-200 ${
                            darkMode 
                              ? 'bg-white' 
                              : 'bg-white shadow-[0_1px_4px_0px_rgba(0,0,0,0.075)]'
                          }`} />
                        )}
                        
                        <span className={`pointer-events-none absolute top-13 left-1/2 z-10 block origin-top -translate-x-1/2 scale-90 rounded-lg px-1.5 py-1 text-xs leading-none font-medium opacity-0 transition-[transform,scale,opacity] duration-75 ease-out group-hover:scale-100 group-hover:opacity-100 ${
                          darkMode 
                            ? 'bg-gray-800 text-white' 
                            : 'bg-gray-900 text-white'
                        }`}>
                          {item.label}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
                  </nav>

      <nav className={`fixed top-0 left-0 right-0 z-5 `} >
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16"> 

                  <div className="flex items-center">
                  <a href="#" className="flex items-center space-x-2">
                    <svg 
                      aria-label="Krea Logo" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      xmlns="http://www.w3.org/2000/svg"
                      className={`transition-colors duration-300 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      <path d="M8.34 1.266c1.766-.124 3.324 1.105 3.551 2.802.216 1.612-.887 3.171-2.545 3.536-.415.092-.877.066-1.317.122a4.63 4.63 0 0 0-2.748 1.34l-.008.004-.01-.001-.006-.005-.003-.009q0-.009.005-.016a.04.04 0 0 0 .007-.022 438 438 0 0 1-.01-4.541c.003-1.68 1.33-3.086 3.085-3.21"></path>
                      <path d="M8.526 15.305c-2.247-.018-3.858-2.23-3.076-4.3a3.31 3.31 0 0 1 2.757-2.11c.384-.04.845-.03 1.215-.098 1.9-.353 3.368-1.806 3.665-3.657.066-.41.031-.9.128-1.335.449-2.016 2.759-3.147 4.699-2.236 1.011.476 1.69 1.374 1.857 2.447q.051.33.034.818c-.22 5.842-5.21 10.519-11.279 10.47m2.831.93a.04.04 0 0 1-.021-.02l-.001-.006.002-.006q0-.003.003-.004l.006-.003q3.458-.792 5.992-3.185.045-.042.083.007c.27.357.554.74.78 1.106a10.6 10.6 0 0 1 1.585 4.89q.037.53.023.819c-.084 1.705-1.51 3.08-3.31 3.09-1.592.01-2.992-1.077-3.294-2.597-.072-.36-.05-.858-.11-1.238q-.282-1.755-1.715-2.84zm-3.369 6.64c-1.353-.235-2.441-1.286-2.684-2.593a5 5 0 0 1-.05-.817V15.14q0-.021.016-.007c.884.786 1.814 1.266 3.028 1.346l.326.01c1.581.051 2.92 1.087 3.229 2.592.457 2.225-1.557 4.195-3.865 3.793"></path>
                    </svg>
                  
                  </a>


                    <div ref={workspaceDropdownRef} onClick={toggleWorkspaceDropdownStatus} className="flex items-center pl-5 max-[812px]:hidden relative" >  
                       <button  className=" hover:bg-blue-200/50 text-black/70 hover:text-black  md:flex items-center justify-center rounded-md   text-sm font-medium backdrop-blur-lg transition-colors duration-300 ease-[cubic-bezier(.33,0,.2,1)] p-[1.5px]">
                        <Image
                          src={profileImage}
                          alt="Profile" 
                          width={27.5}
                          height={27.5}
                          className="opacity-70"
                        />
                        </button>
                        <div className={`
                        flex items-center ml-1 cursor-pointer 
                        backdrop-blur-lg transition-colors duration-150 
                        ease-[cubic-bezier(.33,0,.2,1)] rounded-md
                        ${darkMode 
                          ? ' hover:bg-gray-00/75 text-white/80' 
                          : ' hover:bg-gray-200/75 text-black/70'
                        }
                      `}>

                        <div className='pl-1 text-sm'>
                          <p>{activeName}</p>
                        </div>
                        <div>
                          <svg 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                            className={`
                              ml-[6px] mt-[0.5px] 
                              transform transition-transform duration-200 ease-out
                              ${workspaceDropdownstatus ? 'rotate-180' : 'rotate-0'}
                              ${darkMode ? 'text-white' : 'text-gray-700'} 
                              opacity-70
                            `}
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>

                        </div>
                      </div>


                          {workspaceDropdownstatus && (
                    <div className={`absolute top-full left-[10px] mt-2 w-60 rounded-[10px] shadow-lg z-50 border transition-colors duration-300 ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-700 text-white shadow-none' 
                        : 'bg-white border-gray-200 text-gray-900 shadow-[0_2px_8px_0px_rgba(0,0,0,0.1)]'
                    }`}>
                      <div className="flex flex-col gap-0.5 px-2.5 py-2.5">
                        <div className={`px-1 py-1 text-xs font-medium ${
                          darkMode ? 'text-gray-400' : 'text-gray-500'
                        }`} >
                          Workspaces
                        </div>


                        <div className="group flex w-full">
                          <div 
                            className={`flex w-full items-center gap-2 rounded-md py-[3.8px] pr-1.5 pl-2 text-xs transition-colors duration-100 ease-out ${
                              darkMode 
                                ? 'bg-gray-600' 
                                : 'bg-gray-200'
                            }`}
                          >
                            <div className={`flex h-6 w-6 items-center justify-center overflow-hidden rounded-md ${
                              darkMode ? 'bg-gray-600' : 'bg-gray-200'
                            }`}>
                                <Image
                                  src={profileImage}
                                  alt="Profile" 
                                  width={27.5}
                                  height={27.5}
                                  className="opacity-70"
                                />
                            </div>
                            <div className="flex flex-col items-start">
                              <div className="max-w-[140px] truncate text-xs leading-none font-medium text-ellipsis">
                                {activeName}
                              </div>
                            </div>
                            <div className="group/settings ml-auto opacity-0 transition-opacity duration-100 ease-out group-hover:opacity-100">
                              <div 
                                className={`flex h-[30px] w-[30px] items-center justify-center rounded-lg transition-colors duration-150 ease-[cubic-bezier(.33,0,.2,1)] cursor-pointer ${
                                  darkMode 
                                    ? 'hover:bg-gray-600 text-white/80 hover:text-white' 
                                    : 'hover:bg-gray-250 text-black/70 hover:text-black'
                                }`}
                                
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                  className="transition-transform duration-200 ease-out group-hover/settings:rotate-45" 
                                  width="18" 
                                  height="18" 
                                  viewBox="0 0 24 24" 
                                  fill="currentColor"
                                >
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>

                   

                    <button className={`group flex w-full items-center gap-2 rounded-md px-2 py-2 text-xs transition-colors duration-100 ease-out ${
                      darkMode 
                        ? 'hover:bg-blue-500/15 hover:text-blue-400' 
                        : 'hover:bg-blue-500/15 hover:text-blue-600'
                    }`}>
                      <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md transition-colors duration-100 ${
                        darkMode 
                          ? 'bg-gray-600 group-hover:bg-blue-500/15' 
                          : 'bg-gray-200 group-hover:bg-blue-500/10'
                      }`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M8 12h8"></path>
                          <path d="M12 8v8"></path>
                        </svg>
                      </div>
                      <div className="font-medium">Create a new team</div>
                    </button>
                  </div>
                </div>
              )}


                    </div> 

                    
                  </div>


                   <div className="absolute left-1/2  transform -translate-x-1/2 z-[10]  max-[500px]:hidden">
              <nav className={`flex items-center justify-center rounded-2xl backdrop-blur-2xl transition-colors duration-300 px-1.5 py-1.5 ${
                darkMode 
                  ? 'bg-gray-700/80 border border-gray-600/50' 
                  : 'bg-gray-100 border border-gray-200/50'
              }`}>
                <ul className="flex lst-none p-0 m-0 space-x-0">
                  {navigationItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => setActiveTab(item.id)}
                        className={`group relative block h-10 w-13 leading-none transition-colors duration-200 ease-out ${
                          activeTab === item.id
                            ? (darkMode ? 'text-gray-900' : 'text-gray-900')
                            : (darkMode ? 'text-white' : 'text-gray-700')
                        } `}
                        aria-label={`Open ${item.label}`}
                      >
                        <div className={`absolute inset-0 z-20 m-auto flex items-center justify-center hover: ${(activeTab === item.id)?'': darkMode? 'hover:bg-white/15' : 'hover:bg-gray-500/10'} rounded-xl mx-[2.1px]`}>
                          {item.icon}
                        </div>

                        
                        {activeTab === item.id && (
                          <div className={`absolute inset-0 z-10 rounded-xl shadow-sm transition-colors duration-200  

                            ${                             
                            darkMode 
                              ? 'bg-white' 
                              : 'bg-white shadow-[0_1px_4px_0px_rgba(0,0,0,0.075)]'
                          }`} />
                        )}
                        
                        <span className={`pointer-events-none absolute top-13 left-1/2 z-10 block origin-top -translate-x-1/2 scale-90 rounded-lg px-1.5 py-1 text-xs leading-none font-medium opacity-0 transition-[transform,scale,opacity] duration-75 ease-out group-hover:scale-100 group-hover:opacity-100 ${
                          darkMode 
                            ? 'bg-gray-800 text-white' 
                            : 'bg-gray-100  text-black'
                        }`}>
                          {item.label}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
                  </div>


               

                  <div className="flex items-center space-x-2">
                       
                     <button className="max-[1100px]:hidden bg-gray-100 hover:bg-gray-500/15 text-black/70 hover:text-black  flex items-center justify-center rounded-md px-2 h-[28px] text-sm font-medium backdrop-blur-lg transition-colors duration-300 ease-[cubic-bezier(.33,0,.2,1)] ">
                        <svg className="h-5 w-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor">
                          <path d="M160 144C151.2 144 144 151.2 144 160L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 160C496 151.2 488.8 144 480 144L160 144zM96 160C96 124.7 124.7 96 160 96L480 96C515.3 96 544 124.7 544 160L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 160zM224 192C241.7 192 256 206.3 256 224C256 241.7 241.7 256 224 256C206.3 256 192 241.7 192 224C192 206.3 206.3 192 224 192zM360 264C368.5 264 376.4 268.5 380.7 275.8L460.7 411.8C465.1 419.2 465.1 428.4 460.8 435.9C456.5 443.4 448.6 448 440 448L200 448C191.1 448 182.8 443 178.7 435.1C174.6 427.2 175.2 417.6 180.3 410.3L236.3 330.3C240.8 323.9 248.1 320.1 256 320.1C263.9 320.1 271.2 323.9 275.7 330.3L292.9 354.9L339.4 275.9C343.7 268.6 351.6 264.1 360.1 264.1z"/>
                        </svg>
                        Gallery
                      </button>

                      <button className=" flex max-[1100px]:hidden bg-gray-100 hover:bg-gray-500/15 text-black/70 hover:text-black   items-center justify-center rounded-md px-2 h-[28px] text-sm font-medium backdrop-blur-lg transition-colors duration-300 ease-[cubic-bezier(.33,0,.2,1)]  ">
                       <Image
                          src="headset-svgrepo-com (1).svg"
                          alt="Support" 
                          width={16.5}
                          height={16.5}
                          className="opacity-70"
                        />
                        Support
                      </button>


                       <button
                         className={`hidden max-[490px]:flex min-[731px]:flex h-[30px] w-[30px] items-center justify-center rounded-lg backdrop-blur-lg transition-colors duration-150 ease-[cubic-bezier(.33,0,.2,1)] relative ${
                            darkMode 
                              ? 'bg-gray-800/75 hover:bg-gray-700/75 text-white/80 hover:text-white' 
                              : 'bg-gray-100/75 hover:bg-gray-200/75 text-black/70 hover:text-black'
                          }`}
                          title="Notifications"
                        >
                          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor">
                            <path d="M320 64C302.3 64 288 78.3 288 96L288 99.2C215 114 160 178.6 160 256L160 277.7C160 325.8 143.6 372.5 113.6 410.1L103.8 422.3C98.7 428.6 96 436.4 96 444.5C96 464.1 111.9 480 131.5 480L508.4 480C528 480 543.9 464.1 543.9 444.5C543.9 436.4 541.2 428.6 536.1 422.3L526.3 410.1C496.4 372.5 480 325.8 480 277.7L480 256C480 178.6 425 114 352 99.2L352 96C352 78.3 337.7 64 320 64zM258 528C265.1 555.6 290.2 576 320 576C349.8 576 374.9 555.6 382 528L258 528z"/>
                          </svg>
                          

                    </button>
              
                    <button
                      onClick={toggleDarkMode}
                        className={`hidden max-[490px]:flex min-[601px]:flex h-[30px] w-[30px] items-center justify-center rounded-lg backdrop-blur-lg transition-colors duration-150 ease-[cubic-bezier(.33,0,.2,1)] ${

                        darkMode 
                          ? 'bg-gray-800/75 hover:bg-gray-700/75 text-white/80 hover:text-white' 
                          : 'bg-gray-100/75 hover:bg-gray-200/75 text-black/70 hover:text-black'
                      }`}
                      title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                      {darkMode ? (
                        
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90" fill="currentColor">
                    <path d="M 45 68 c -12.682 0 -23 -10.317 -23 -23 c 0 -12.682 10.318 -23 23 -23 c 12.683 0 23 10.318 23 23 C 68 57.683 57.683 68 45 68 z"/>
                    <rect x="42" y="0" width="6" height="15.79"/>
                    <rect x="42" y="74.21" width="6" height="15.79"/>
                    <rect x="0" y="42" width="15.79" height="6"/>
                    <rect x="74.21" y="42" width="15.79" height="6"/>
                    <rect x="63.34" y="15.76" width="15.79" height="6" transform="rotate(-45 71.24 18.76)"/>
                    <rect x="10.87" y="68.24" width="15.79" height="6" transform="rotate(-45 18.77 71.24)"/>
                    <rect x="15.76" y="10.87" width="6" height="15.79" transform="rotate(-45 18.76 18.77)"/>
                    <rect x="68.24" y="63.34" width="6" height="15.79" transform="rotate(-45 71.24 71.24)"/>
                  </svg>
                ) : (
                  // Moon icon for switching to dark mode
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90" fill="currentColor">
                    <path d="M 87.823 60.7 c -0.463 -0.423 -1.142 -0.506 -1.695 -0.214 c -15.834 8.398 -35.266 2.812 -44.232 -12.718 c -8.966 -15.53 -4.09 -35.149 11.101 -44.665 c 0.531 -0.332 0.796 -0.963 0.661 -1.574 c -0.134 -0.612 -0.638 -1.074 -1.259 -1.153 c -9.843 -1.265 -19.59 0.692 -28.193 5.66 C 13.8 12.041 6.356 21.743 3.246 33.35 S 1.732 57.08 7.741 67.487 c 6.008 10.407 15.709 17.851 27.316 20.961 C 38.933 89.486 42.866 90 46.774 90 c 7.795 0 15.489 -2.044 22.42 -6.046 c 8.601 -4.966 15.171 -12.43 18.997 -21.586 C 88.433 61.79 88.285 61.123 87.823 60.7 z"/>
                  </svg>
                
                      )}
                    </button>


                    <div ref={profileDropdownRef} className='relative'>
                      <button onClick={toggleDropdownStatus} className="bg-gray-100 hover:bg-blue-200/50 text-black/70 hover:text-black  md:flex items-center justify-center rounded-md   text-sm font-medium backdrop-blur-lg transition-colors duration-300 ease-[cubic-bezier(.33,0,.2,1)] p-[1.5px]">
                        <Image
                          src={profileImage}
                          alt="Support" 
                          width={28.5}
                          height={28.5}
                          className="opacity-70"
                        />
                        
                      </button>

                      <button
                        onClick={() => {
                          const uploadInput = document.getElementById('imageUpload')
                          if (uploadInput) {
                            uploadInput.click()
                          }
                        }}
                        className={`absolute -top-1 -right-1 w-[12px] h-[12px] rounded-full flex items-center justify-center text-xs transition-colors duration-200  ${
                          darkMode 
                            ? 'bg-gray-600 hover:bg-gray-500 text-white' 
                            : 'bg-gray-500 hover:bg-gray-600 text-white'
                        }`}
                        title="Change profile picture">
                        <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/>
                        </svg>
                  </button>

                      <input
                        id="imageUpload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />


                      {dropdownstatus && (
                        

                        
                  <div className={`absolute right-[-10px] mt-2 w-48 rounded-[10px] shadow-lg z-50 border transition-colors duration-300 p-1 ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-700 text-white shadow-none' 
                      : 'bg-white border-gray-200 text-gray-900 shadow-[0_2px_8px_0px_rgba(0,0,0,0.1)]'
                  }`}>
                    <div className="text-sm">
                      <div
                        className={`flex h-11 cursor-pointer items-center justify-start gap-2.5 rounded-md px-3 transition-colors duration-200 ${
                          darkMode 
                            ? 'hover:bg-gray-700' 
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path fillRule="evenodd" d="M14.279 2.152C13.909 2 13.439 2 12.5 2s-1.408 0-1.779.152a2 2 0 0 0-1.09 1.083c-.094.223-.13.484-.145.863a1.62 1.62 0 0 1-.796 1.353a1.64 1.64 0 0 1-1.579.008c-.338-.178-.583-.276-.825-.308a2.03 2.03 0 0 0-1.49.396c-.318.242-.553.646-1.022 1.453c-.47.807-.704 1.21-.757 1.605c-.07.526.074 1.058.4 1.479c.148.192.357.353.68.555c.477.297.783.803.783 1.361s-.306 1.064-.782 1.36c-.324.203-.533.364-.682.556a2 2 0 0 0-.399 1.479c.053.394.287.798.757 1.605s.704 1.21 1.022 1.453c.424.323.96.465 1.49.396c.242-.032.487-.13.825-.308a1.64 1.64 0 0 1 1.58.008c.486.28.774.795.795 1.353c.015.38.051.64.145.863c.204.49.596.88 1.09 1.083c.37.152.84.152 1.779.152s1.409 0 1.779-.152a2 2 0 0 0 1.09-1.083c.094-.223.13-.483.145-.863c.02-.558.309-1.074.796-1.353a1.64 1.64 0 0 1 1.579-.008c.338.178.583.276.825.308c.53.07 1.066-.073 1.49-.396c.318-.242.553-.646 1.022-1.453c.47-.807.704-1.21.757-1.605a2 2 0 0 0-.4-1.479c-.148-.192-.357-.353-.68-.555c-.477-.297-.783-.803-.783-1.361s.306-1.064.782-1.36c.324-.203.533-.364.682-.556a2 2 0 0 0 .399-1.479c-.053-.394-.287-.798-.757-1.605s-.704-1.21-1.022-1.453a2.03 2.03 0 0 0-1.49-.396c-.242.032-.487.13-.825.308a1.64 1.64 0 0 1-1.58-.008a1.62 1.62 0 0 1-.795-1.353c-.015-.38-.051-.64-.145-.863a2 2 0 0 0-1.09-1.083M12.5 15c1.67 0 3.023-1.343 3.023-3S14.169 9 12.5 9s-3.023 1.343-3.023 3s1.354 3 3.023 3" clipRule="evenodd"/>
                        </svg>
                        Manage account
                      </div>
                      
                      <div
                        className={`flex h-11 cursor-pointer items-center justify-start gap-2.5 rounded-md px-3 transition-colors duration-200 ${
                          darkMode 
                            ? 'hover:bg-gray-700' 
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 56 56" fill="currentColor">
                          <path d="M2.266 17.734h51.468v-2.18c0-4.827-2.46-7.265-7.359-7.265H9.625c-4.898 0-7.36 2.438-7.36 7.266Zm0 22.735c0 4.828 2.46 7.242 7.359 7.242h36.75c4.898 0 7.36-2.414 7.36-7.242V23.055H2.264Zm7.828-5.719v-4.336c0-1.312.914-2.25 2.297-2.25h5.742c1.383 0 2.297.938 2.297 2.25v4.336c0 1.336-.914 2.25-2.297 2.25H12.39c-1.383 0-2.297-.914-2.297-2.25"/>
                        </svg>
                        Plans & Pricing
                      </div>
                      
                      <div
                        className={`flex h-11 cursor-pointer items-center justify-start gap-2.5 rounded-md px-3 transition-colors duration-200 ${
                          darkMode 
                            ? 'hover:bg-gray-700' 
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                        </svg>
                        Join community
                      </div>

                      <hr className={`mx-1 my-1 border-t ${
                        darkMode ? 'border-gray-700' : 'border-gray-200'
                      }`} />
                      
                      <div
                        className={`flex h-11 cursor-pointer items-center justify-start gap-2.5 rounded-md px-3 transition-colors duration-200 ${
                          darkMode 
                            ? 'text-red-400 hover:bg-gray-700' 
                            : 'text-red-600 hover:bg-gray-100'
                        }`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.625" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                          <polyline points="16 17 21 12 16 7"/>
                          <line x1="21" x2="9" y1="12" y2="12"/>
                        </svg>
                        Log out
                      </div>

                     

                    </div>
                  </div>
                )}

                      
                    </div>











                  </div>


              </div>
            </div>


      </nav>
      <Main darkMode={darkMode}/>


      


    </div>
  );
}