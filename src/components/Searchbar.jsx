import React, { useState } from 'react'
import './searchbar.css'
import { useNavigate } from 'react-router-dom'


export default function searchbar() {

    const [term,setterm]=useState('')
    const navigate=useNavigate()


    const handleclick=()=>{

        navigate(`/search/?q=${term}`)

        
    }
  return (
    <div>
        <input className='searchbar' type="text" id='search' placeholder='what do you want?' onChange={(e)=>{
        setterm(e.target.value)
        }}/>
        <button className='btn-search' onClick={handleclick}>Search</button>
        
    </div>
  )
}
