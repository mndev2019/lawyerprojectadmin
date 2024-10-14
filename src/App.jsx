
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Home from './Pages/Home'
import Bannercontent from './Pages/Bannercontent'
import Quotescontent from './Pages/Quotescontent'
import Expertisecontent from './Pages/Expertisecontent'
import SetsApart from './Pages/SetsApart'
import Testimonial from './Pages/Testimonial'
import Insighthub from './Pages/Insighthub'
import Knowledgevault from './Pages/Knowledgevault'
import Probono from './Pages/Probono'


function App() {
  const ThemeRoutes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/banner-content' element={<Bannercontent />} />
          <Route path='/quotes-content' element={<Quotescontent />} />
          <Route path='/expertise-content' element={<Expertisecontent />} />
          <Route path='/sets-apart' element={<SetsApart />} />
          <Route path='/testimonial-content' element={<Testimonial />} />
          <Route path='/insighthub-content' element={<Insighthub/>}/>
          <Route path='/knowledge-vault' element={<Knowledgevault/>}/>
          <Route path='/pro-bono' element={<Probono/>}/>



        </Route>
      </>
    )
  )

  return (
    <>
      <RouterProvider router={ThemeRoutes} />
    </>
  )
}

export default App
