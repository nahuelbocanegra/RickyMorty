import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import Main from '../componentes/Main'
import Loading from '../componentes/Loading'

function App() {
  const [character, setCharacter] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const random = Math.floor(Math.random() * 125) + 1
    axios.get(`https://rickandmortyapi.com/api/location/${random}`).then(res => setCharacter(res.data)).then(setTimeout(() => setLoading(false),500))
    
  }, [])
  
 
  return (
    <div className="App">
      
      {(loading) ? <Loading className={(loading)?"loading":"loading none"}></Loading>:<Main
        name={character.name}
        type={character.type}
        dimension={character.dimension}
        residents={character.residents}
        setCharacter={setCharacter}
        character={character}
         >
      </Main>}
     
    </div>
  )
}

export default App
