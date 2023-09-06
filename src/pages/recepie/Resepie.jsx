
import '../recepie/resepie.css'
import {useParams} from 'react-router-dom'
import {useFetch} from '../hooks/useFetch'


export default function Resepie() {
  const {data,isLoading,error}= useFetch("http://localhost:3000/recipes")


  const {id}=useParams()

  return (
    <div>
      {data && data.map((value) =>(
         value.id===id && <div className='full-recepie'>

              <h2>{value.title}</h2>
              <h6>{value.cookingTime} to cook </h6>
              <ul>{value.ingredients.map((ing) => (
                <li key={ing}>{ing}</li>
              ))}</ul>

              <p>{value.method}</p>




         </div>
        
      ) 
      )}
    </div>
  )
}
