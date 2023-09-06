import './App.css'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import Resepie from './pages/recepie/Resepie'
import Home  from './pages/home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'


function App() {



  return(
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/recepies/:id' element={<Resepie/>}/>
      </Routes>



      </Router>
    </div>
  )
}

export default App
