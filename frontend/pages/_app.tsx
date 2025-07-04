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
      <SubBranchBar />
      <NotificationBar />
          <Navbar />

      {/* Add padding top so content is not hidden under fixed Navbar */}
      <main className="relative z-10 min-h-screen bg-white dark:bg-black">
        <GlowingBackground />

        {/* VideoSection goes here */}
        <VideoSection />

        {/* Page content */}
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}
