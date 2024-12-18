
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import './Authlayout/login.css'
import Layout from './Layout/Layout'
import Bannercontent from './Pages/Bannercontent'
import Quotescontent from './Pages/Quotescontent'
import Expertisecontent from './Pages/Expertisecontent'
import SetsApart from './Pages/SetsApart'
import Testimonial from './Pages/Testimonial'
import Insighthub from './Pages/Insighthub'
import Knowledgevault from './Pages/Knowledgevault'
import Probono from './Pages/Probono'
import Expertise from './Pages/Expertise'
import SetsApartlist from './Pages/SetsApartlist'
import Expertisecontentlist from './Pages/Expertisecontentlist'
import Authlayout from './Authlayout'
import Login from './Authlayout/Login'
import Contact from './Pages/Contact'
import Legalupdates from './Pages/Legalupdates'
import Carrer from './Pages/Carrer'
import Knowledgevaultlist from './Pages/Knowledgevaultlist'
import Insighthublist from './Pages/Insighthublist'


function App() {
  const ThemeRoutes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Bannercontent/>} />
          <Route path='/banner-content' element={<Bannercontent />} />
          <Route path='/quotes-content' element={<Quotescontent />} />
          <Route path='/expertise' element={<Expertise />} />
          <Route path='/expertise-content' element={<Expertisecontent />} />
          <Route path='/expertise-contentlist' element={<Expertisecontentlist />} />
          <Route path='/sets-apart' element={<SetsApart />} />
          <Route path='/setsapartlist' element={<SetsApartlist />} />
          <Route path='/testimonial-content' element={<Testimonial />} />
          <Route path='/insighthub-content' element={<Insighthub />} />
          <Route path='/insighthub-list' element={<Insighthublist/>}/>
          <Route path='/knowledge-vault' element={<Knowledgevault />} />
          <Route path='/knowledge-vaultlist' element={<Knowledgevaultlist />} />
          <Route path='/pro-bono' element={<Probono />} />
          <Route path='contact' element={<Contact/>}/>
          <Route path='/carrer' element={<Carrer/>}/>
          <Route path='/legal-updates' element={<Legalupdates/>}/>



        </Route>


        {/* Routes that use the AuthLayout (no Header and Footer) */}
        <Route element={<Authlayout />}>
          <Route path='login' element={<Login />} />
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
