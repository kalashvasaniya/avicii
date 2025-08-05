'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Hide loading screen after 2 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => {
      clearTimeout(loadingTimer)
    }
  }, [])

  return (
    <>
      {/* Background Music */}
      <iframe 
        className="hidden" 
        width="560" 
        height="315"
        src="https://www.youtube.com/embed/yV2HyFC_gwo?autoplay=1&mute=1&si=u2KeHfwTe3vgwFmt"
        title="YouTube video player" 
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      />

      {/* Loading Screen */}
      {isLoading && (
        <div className="showSeven fixed inset-0 z-50">
          <div className="flex justify-center items-center h-screen">
            <p className="text-base text-white">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor" 
                viewBox="0 0 41 18.9" 
                width="102"
                height="47" 
                aria-hidden="true" 
                className="animate-pulse"
              >
                <path d="M22.1 18.9V0H41L22.1 18.9zM18.9 0v18.9H0L18.9 0z"></path>
              </svg>
            </p>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`${isLoading ? 'hideSeven' : 'showSeven'}`}>
        {/* Desktop View */}
        <div className="hidden md:block">
          {/* Avicii Logo */}
          <div className="fixed top-8 left-0 right-0 z-10">
            <div className="flex justify-center">
              <a 
                href="https://avicii.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:opacity-80 transition-opacity"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 82.3 18.9" 
                  width="78" 
                  height="18"
                  fill="currentColor" 
                  aria-hidden="true" 
                  className="text-white lefttoright"
                >
                  <path d="M16.7.1 0 16.8v2.1h2.2L16.7 4.5v14.4h3.1V.1h-3.1zM73 .1h3.1V19H73zm6.2 0h3.1V19h-3.1zM44.9.1H48V19h-3.1zM26 .1h-3.1v18.8h4.4L41.8 4.5V.1L26 15.9V.1zm34.5 3A6.3 6.3 0 0 1 66.7 8h3.2a9.4 9.4 0 1 0 0 3.2h-3.3a6.3 6.3 0 1 1-6-8Z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Background Image */}
          <div className="fixed inset-0 fade bg-black">
            <Image 
              src="/img/tim.jpg" 
              alt="Avicii" 
              fill
              className="object-cover"
              priority
              onError={(e) => {
                console.error('Failed to load desktop image');
              }}
            />
          </div>

          {/* Spotify Player - Right Half Centered */}
          <div className="fixed right-0 top-0 bottom-0 w-1/2 flex items-center justify-center z-20 fade2 px-12">
            <div className="w-full max-w-xl">
              <iframe 
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/playlist/1FyCb2G1zhBBNQ5lZq1XUi?utm_source=generator&theme=0" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                className="shadow-2xl backdrop-blur-sm bg-black/30"
                onLoad={() => console.log('Desktop Spotify iframe loaded')}
                onError={() => console.error('Desktop Spotify iframe failed to load')}
              />
            </div>
          </div>


        </div>

        {/* Mobile View */}
        <div className="block md:hidden">
          {/* Avicii Logo */}
          <div className="fixed top-8 left-0 right-0 z-10">
            <div className="flex justify-center">
              <a 
                href="https://avicii.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:opacity-80 transition-opacity"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 82.3 18.9" 
                  width="78" 
                  height="18"
                  fill="currentColor" 
                  aria-hidden="true" 
                  className="text-white toptobottom"
                >
                  <path d="M16.7.1 0 16.8v2.1h2.2L16.7 4.5v14.4h3.1V.1h-3.1zM73 .1h3.1V19H73zm6.2 0h3.1V19h-3.1zM44.9.1H48V19h-3.1zM26 .1h-3.1v18.8h4.4L41.8 4.5V.1L26 15.9V.1zm34.5 3A6.3 6.3 0 0 1 66.7 8h3.2a9.4 9.4 0 1 0 0 3.2h-3.3a6.3 6.3 0 1 1-6-8Z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Background Image */}
          <div className="fixed inset-0 fade bg-black">
            <Image 
              src="/img/tim-m.jpg" 
              alt="Avicii" 
              fill
              className="object-cover"
              priority
              onError={(e) => {
                console.error('Failed to load mobile image');
              }}
            />
          </div>

          {/* Spotify Player - Bottom Centered for Mobile */}
          <div className="fixed bottom-16 left-4 right-4 z-20 fade2">
            <iframe 
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/playlist/1FyCb2G1zhBBNQ5lZq1XUi?utm_source=generator&theme=0" 
              width="100%" 
              height="152" 
              frameBorder="0" 
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              className="shadow-2xl backdrop-blur-sm bg-black/30"
              onLoad={() => console.log('Mobile Spotify iframe loaded')}
              onError={() => console.error('Mobile Spotify iframe failed to load')}
            />
          </div>
        </div>
      </div>
    </>
  )
} 