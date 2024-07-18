import AllCards from './components/AllCards'
import Intro from './components/Intro'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import FullCollectionPage from './pages/FullCollectionPage'
import PacksPage from './pages/PacksPage';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/all' element={<FullCollectionPage />} />
        <Route path='/packs' element={<PacksPage />} />
      </Route>
    )
  );

  return <RouterProvider router = {router} />
}

export default App
