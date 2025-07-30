import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PostJob from './pages/PostJob'
import BrowseJobs from './pages/BrowseJobs'
import Profile from './pages/Profile'
import JobDetail from './pages/JobDetail'
import Market from './pages/Market'
import BottomNav from './components/BottomNav'
import { JobProvider } from './context/JobContext'
import SignUp from './pages/SignUp'
import { initSequence } from './lib/sequence'

function App() {
  useEffect(() => {
    initSequence()
  }, [])

  return (
    <JobProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PostJob />} />
          <Route path="/browse" element={<BrowseJobs />} />
          <Route path="/job/:id" element={<JobDetail />} />
          <Route path="/market" element={<Market />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <BottomNav />
      </Router>
    </JobProvider>
  )
}

export default App






