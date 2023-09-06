import React from 'react'
import '../search/Search.css'
import { useLocation,Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

export default function Search() {

const queryString=useLocation().search
const queryParams= new URLSearchParams(queryString)
const query=queryParams.get('q')

const url='http://localhost:3000/recipes?q='+query
const {error,isLoading,data}=useFetch(url)
  return (
    <div>

    <h1 style={{marginTop:20}}>Recepies Including <strong>"{query}"</strong> is:</h1>

      <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isLoading && <p className='loading'>is loading...</p>}
      <div className="container">
      {data && data.map(recepie => (
        <div className="card" key={recepie.id}>
          <h2 className='title'>{recepie.title}</h2>
          <p className='ing'> <strong>Ingredients:</strong> {recepie.ingredients}</p>
          <Link to={`/recepies/${recepie.id}`}><button className='button-8'>Recepie</button></Link>
          <p className='time'>Time to cook: {recepie.cookingTime}</p>

        </div>
      ))}
      </div>

    </div>

 


    </div>
  )
}
