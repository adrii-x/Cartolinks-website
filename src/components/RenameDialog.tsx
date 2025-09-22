'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface SavePayload {
  newName: string
  profileImage: string 
}

interface Props {
darkMode?: boolean
  open: boolean
  profileImage: string 
  currentName?: string
  onClose: () => void
  onSave: (payload: SavePayload) => void
}

export default function RenameDialog({
  darkMode = false,
  open,
  profileImage,
  currentName = '',
  onClose,
  onSave
}: Props) {
  const panelRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [value, setValue] = useState(currentName)
  const [previewImage, setPreviewImage] = useState<string>(profileImage)
  const latestObjectUrlRef = useRef<string | null>(null)

  useEffect(() => {
    setValue(currentName)
    setPreviewImage(profileImage)
  }, [currentName, profileImage, open])

  useEffect(() => {
    if (!open) return

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    function onClickOutside(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClickOutside)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClickOutside)
    }
  }, [open, onClose])

  // autofocus input when open
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 60)
      return () => clearTimeout(t)
    }
  }, [open])

  useEffect(() => {
    return () => {
      if (latestObjectUrlRef.current) {
        URL.revokeObjectURL(latestObjectUrlRef.current)
        latestObjectUrlRef.current = null
      }
    }
  }, [])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const objectUrl = URL.createObjectURL(file)

    if (latestObjectUrlRef.current) {
      URL.revokeObjectURL(latestObjectUrlRef.current)
    }
    latestObjectUrlRef.current = objectUrl
    setPreviewImage(objectUrl)


  }

  const triggerFilePicker = () => {
    fileInputRef.current?.click()
  }

  const handleSave = () => {
    const trimmed = value.trim()
    if (trimmed.length === 0) return
    onSave({
      newName: trimmed,
      profileImage: previewImage
    })
    onClose()
  }

  

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const panelVariants = {
    hidden: { opacity: 0, scale: 0.96, y: -10 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.96, y: 10 }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="backdrop"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[90] flex items-center justify-center"
          aria-hidden="false"
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          <motion.div
            key="panel"
            ref={panelRef}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={panelVariants}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="rename-dialog-title"
            className={`relative z-10 w-[min(92%,520px)] max-w-[92%] rounded-2xl shadow-2xl p-6 sm:p-8 ${darkMode ? 'bg-[rgb(115,115,115)]/10 backdrop-blur-2xl  border-[rgb(115,115,115)]' : 'bg-gray-100 border border-gray-200/50' }`}
          >
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className={`absolute right-3 top-3 z-20 inline-flex h-4 w-4 items-center justify-center rounded-full  ${darkMode ? 'text-white' : 'text-black hover:text-gray-600' }   `}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="100" 
                height="100" 
                viewBox="0 0 30 30"
                className="w-full h-full" 
                fill="currentColor" 
            >
                <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" />
            </svg>
            </button>
            

            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col items-center gap-2">

            <div className='relative'>

                

                <div className="relative h-24 w-24 rounded-full overflow-hidden border-[0px] border-gray-200 shadow-[0_2px_8px_0_rgba(99,99,99,1)]   bg-gray-100">
                  {previewImage ? (
                    <Image src={previewImage} fill alt="Profile preview" className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-gray-400">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-current">
                        <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                        <path d="M4 20a8 8 0 0 1 16 0" />
                      </svg>
                    </div>
                  )}

               

                </div>

                 <button
                        onClick={() => {triggerFilePicker()}}
                        className={`absolute bottom-[2.1px] right-[6px] w-[19px] h-[19px] p-[1px] rounded-full flex items-center justify-center text-xs transition-colors duration-200 shadow-[0px_54px_55px_rgba(0,0,0,0.25),0px_-12px_30px_rgba(0,0,0,0.12),0px_4px_6px_rgba(0,0,0,0.12),0px_12px_13px_rgba(0,0,0,0.17),0px_-3px_5px_rgba(0,0,0,0.09)] ${
                          darkMode 
                            ? 'bg-[rgb(115,115,115)]/60 hover:bg-[rgb(115,115,115)]/80 text-white/80' 
                            : 'bg-white/50 hover:bg-white/80 text-black/80'
                        }`}
                        title="Change profile picture">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640 "     fill="currentColor"
>
                            <path d="M257.1 96C238.4 96 220.9 105.4 210.5 120.9L184.5 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L455.5 160L429.5 120.9C419.1 105.4 401.6 96 382.9 96L257.1 96zM250.4 147.6C251.9 145.4 254.4 144 257.1 144L382.8 144C385.5 144 388 145.3 389.5 147.6L422.7 197.4C427.2 204.1 434.6 208.1 442.7 208.1L512 208.1C520.8 208.1 528 215.3 528 224.1L528 480.1C528 488.9 520.8 496.1 512 496.1L128 496C119.2 496 112 488.8 112 480L112 224C112 215.2 119.2 208 128 208L197.3 208C205.3 208 212.8 204 217.3 197.3L250.5 147.5zM320 448C381.9 448 432 397.9 432 336C432 274.1 381.9 224 320 224C258.1 224 208 274.1 208 336C208 397.9 258.1 448 320 448zM256 336C256 300.7 284.7 272 320 272C355.3 272 384 300.7 384 336C384 371.3 355.3 400 320 400C284.7 400 256 371.3 256 336z"/>
                            </svg>
                            
                  </button>

            </div>

                




                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
              <div className='w-full'>

                              <h3 id="rename-dialog-title" className={`text-md -mb-[5px]  pl-2 font-semibold   ${darkMode ? 'text-white' : 'text-gray-900' } `}>
                Name
              </h3>
              </div>



              <div className="w-full flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
                <label htmlFor="rename" className="sr-only">New name</label>

                <input
                id="rename"
                ref={inputRef}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Type a new name"
                className={
                    `w-full rounded-[0.5rem] p-2 border-none bg-[#e8e8e8] text-gray-600 placeholder:text-gray-500 ` +
                    `transition-shadow duration-300 ease-linear ` +
                    
                    `shadow-[20px_20px_60px_rgba(197,197,197,1),_-20px_-20px_60px_rgba(255,255,255,1)] ` +
                    `focus:outline-none focus:shadow-[inset_20px_20px_60px_rgba(197,197,197,1),inset_-20px_-20px_60px_rgba(255,255,255,1)]`
                }
                />
                <button
                  onClick={handleSave}
                  className={`mt-0 inline-flex shrink-0 items-center justify-center rounded-[12px]  ${darkMode ? 'text-white  bg-black/25 hover:bg-white/90 hover:text-black '  : 'bg-black text-white ' } px-4 py-[10px] text-sm font-medium  transition hover:brightness-105 sm:ml-3`}
                >
                  Save
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
