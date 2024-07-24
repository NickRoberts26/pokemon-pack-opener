import React, { useEffect } from 'react'
import Pack from '../components/Pack'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const PackPage = ({pokemonData}) => {

  const [generation, setGeneration] = useState([]);

  const location = useLocation();
  const activeGen = location.pathname.split('/').filter(Boolean).pop();

  const getSelectedGen = (gen, data) => {

    if(gen === 'gen-I') {
      setGeneration(data.slice(0, 150))
    } else if(gen === 'gen-II') {
      setGeneration(data.slice(151, 250))
    } else if(gen === 'gen-III') {
      setGeneration(data.slice(251, 385))
    }

  }

  useEffect(() => {
    getSelectedGen(activeGen, pokemonData);
  }, [pokemonData]);

  console.log(generation);
  
  return (
    <div>
      <Pack pokemonData={generation} gen={activeGen} bg='purple-shine'/>
    </div>
  )
}

export default PackPage
