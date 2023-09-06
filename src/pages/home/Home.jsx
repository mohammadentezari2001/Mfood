import '../home/home.css'
import {useFetch} from '../hooks/useFetch'
import { Link } from 'react-router-dom'


export default function Home() {

  const {data,isLoading,error}= useFetch("http://localhost:3000/recipes")

  return (
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
  )
}
