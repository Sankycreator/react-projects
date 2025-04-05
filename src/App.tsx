import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom' 
import Navbar from './components/Navbar'
import { projects } from './data/project'
import LandingPage from './pages/landingpage'
import ProjectsDashboard from './pages/ProjectDashbord'
import ProjectDetails from './pages/projectdetails'
import CreateProject from './pages/Createproject'
function App() {
//   const project={
//     title:"AI ChatBot"
//   }

  return (
    <div className='bg-black' >
    <Router>
      <Routes>
        <Route path='/'element={<LandingPage/>}/>
        <Route path='/dashboard'element={<ProjectsDashboard/>}/>
       <Route path='/dashboard/:id'element={<ProjectDetails/>}/>
       <Route path='/CreateProject'element={<CreateProject/>}/>
      </Routes>
    </Router>
      
    </div>
  )
}

export default App