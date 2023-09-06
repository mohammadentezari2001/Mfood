import React, { useEffect, useState } from 'react'
import '../create/Create.css'
import { useFetch } from '../hooks/useFetch'
import {useNavigate } from 'react-router-dom'

export default function Create() {
  const [title,settitle]=useState('')
  const [time,settime]=useState('0')
  const [method,setmethod]=useState('')
  const [ing,seting]=useState([])
  const [newing,setnewing]=useState('')

  const navigate=useNavigate()

  const {postData,data,error}=useFetch("http://localhost:3000/recipes",'POST')

  const handlsubmit=(e)=>{
    e.preventDefault()
  postData({title,ingredients:ing,method,cookingTime:time+' minutes'})




  }

  const handlclick=(e)=>{
    e.preventDefault()
    seting(prev=>[...prev,newing])
    setnewing('')


  }


  useEffect(()=>{

      if(data){

        navigate('/')  
      }


  },[data])

  return (
    <div>
      <h1>Add New Recepie</h1>
      <form onSubmit={handlsubmit}>
        <label >
          <span>Title</span>
          <input type="text" placeholder='Title' onChange={(a)=>{settitle(a.target.value)}} />
        </label>

        <label >
          <span>Time To Cook:</span>
          <input type="text" placeholder='Time To Make(Min)' onChange={(a)=>{settime(a.target.value)}} />
        </label>

        <label >
          <span>Method:</span>
          <textarea  cols="30" rows="10" placeholder='method' onChange={(a)=>{setmethod(a.target.value)}}></textarea>
        </label>



        <label>
          <span>Ingredients: </span>
          <div className='ingredients'>
            <input value={newing} type="text" onChange={(a)=>{setnewing(a.target.value)}} />
            <button onClick={handlclick}>Add</button>
          </div>
          {ing.map(a=><p key={a}>{a},  </p>)}

        </label>



        <label >
          <button className='btn-sub'>Submit</button>        
        </label>
      </form>
      
    </div>
  )
}
