import { useState } from 'react'
import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Navbar from './components/Navbar'
import Scrollbar from './components/Scrollbar'
import Dashboard from './components/Dashboard'
import StdSection from './components/StdSection'
import ExamSection from './components/ExamSection'
import Faculty from './components/Faculty'
import Form from './components/Form'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (    
    <>
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />   
      <Routes>
        <Route path='/' element={  <Scrollbar isOpen={sidebarOpen} />} >
        <Route path='/' element={<Dashboard />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='studentSection' element={<StdSection />} />
          <Route path='examSection' element={<ExamSection />} />
          <Route path='faculty' element={<Faculty />} />
          <Route path='form' element={<Form />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
