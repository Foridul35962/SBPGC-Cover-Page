import React, { useEffect } from 'react'
import foridImage from '../assets/forid.png'
import music from '../assets/music.mp3'

const musicSound = new Audio (music)

const ShowImage = ({ setShowImage, setAllData }) => {

    //sound effect
    useEffect(()=>{
        musicSound.currentTime = 0
        musicSound.play().catch((error)=>console.log('sound play failed',error))
    },[])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      
      <div className="relative bg-gray-800 p-2 rounded-lg max-w-3xl w-full shadow-2xl">
        
        <button 
          onClick={() => {setShowImage(false); setAllData(null)}}
          className="absolute -top-4 -right-4 bg-red-500 hover:bg-red-600 cursor-pointer text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-lg"
        >
          ✕
        </button>

        <div className="overflow-hidden rounded-2xl">
          <img 
            src={foridImage} 
            alt="Preview" 
            className="w-full rounded-2xl h-auto max-h-[80vh] object-contain mx-auto"
          />
        </div>

        <p className="text-center mt-2 text-gray-200 font-medium">Image Preview</p>
      </div>
      <div 
        className="absolute inset-0 -z-10" 
        onClick={() => setShowImage(false)}
      ></div>
    </div>
  )
}

export default ShowImage