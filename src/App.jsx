import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { useState, useEffect } from 'react';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import FullCollectionPage from './pages/FullCollectionPage'
import PacksPage from './pages/PacksPage';

function App() {

  const [allPokemon, setAllPokemon] = useState([]);

  const catchEmAll = async () => {
      try {
          const url = `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`

          const response = await fetch(url);

          const data = await response.json();

          setAllPokemon(data.results);

      } catch (error) {
          console.log(error);
      }
  }

  useEffect(() => {
      catchEmAll();
  }, [])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/all' element={<FullCollectionPage pokemonData={allPokemon} />} />
        <Route path='/packs' element={<PacksPage pokemonData={allPokemon} />} />
      </Route>
    )
  );

  return <RouterProvider router = {router} />
}

export default App
