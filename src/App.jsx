import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './index.css'
import { LoginFlow } from './pages/LoginFlow'
import { VerifyUser } from './pages/VerifyUser'

function App() {
   return (
      <div className="bg-blue-700 h-screen pb-10">
         <Router>
            <Routes>
               <Route path="/" element={<LoginFlow />} />
               <Route path="/verification" element={<VerifyUser />} />
            </Routes>
         </Router>
      </div>
   )
}

export default App
