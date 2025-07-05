// app.tsx

import '../styles/globals.css'
import { ThemeProvider } from '../context/ThemeContext'
import { GlowingBackground } from '../src/components/GlowingBackground'
import SubBranchBar from '../src/components/SubBranchBar'
import Navbar from '../src/components/Navbar'
import NotificationBar from '../src/components/NotificationBar'
import VideoSection from '../src/components/VideoSection'

// 1. Import useState and useEffect
import { useState, useEffect } from 'react'

export default function App({ Component, pageProps }) {
  // 2. Add state to control navbar visibility and scroll position
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // 3. Add the control logic inside a useEffect hook
  useEffect(() => {
    const controlNavbar = () => {
      // If we scroll down, hide the navbar
      if (window.scrollY > lastScrollY) { 
        setShowNavbar(false);
      } else { // If we scroll up, show the navbar
        setShowNavbar(true);
      }
      // Remember the new scroll position for the next move
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);


  return (
    <ThemeProvider>
      {/* 4. Update the className of the fixed container */}
      <div 
        className={`
          fixed top-0 left-0 right-0 z-50 site-header-container 
          transition-transform duration-300 ease-in-out
          ${showNavbar ? 'translate-y-0' : '-translate-y-full'}
        `}
      >
        <SubBranchBar />
        <NotificationBar />
        <Navbar />
      </div>

      {/* Add padding top equal to total height of all fixed bars */}
      <main className="relative z-10 min-h-screen bg-white dark:bg-black pt-[128px]">
        <GlowingBackground />

        {/* VideoSection goes here */}
        <VideoSection />

        {/* Page content */}
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}