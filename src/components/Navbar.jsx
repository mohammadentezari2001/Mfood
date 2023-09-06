import { Link } from 'react-router-dom'
import '../components/navbar.css'
import Searchbar from './searchbar'
import { useContext } from 'react'
import { thContext } from '../context/themeContext'

export default function Navbar() {
  const {color}=useContext(thContext)
  return (
    <div className='navbar' style={{background:color}}>
      <nav>
        <Link to='/' className='brand' ><h1>M-food</h1></Link>
        <Link className='create' to='create'>Create Recepie</Link>

        <Searchbar/>
      </nav>
    </div>
  )
}


