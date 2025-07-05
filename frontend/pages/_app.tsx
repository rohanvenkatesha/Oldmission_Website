import '../styles/globals.css'
import { ThemeProvider } from '../context/ThemeContext'
import { GlowingBackground } from '../src/components/GlowingBackground'
import SubBranchBar from '../src/components/SubBranchBar'
import Navbar from '../src/components/Navbar'
import NotificationBar from '../src/components/NotificationBar'
import VideoSection from '../src/components/VideoSection'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      {/* Fixed container for all three bars */}
      <div className="fixed top-0 left-0 right-0 z-50">
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
