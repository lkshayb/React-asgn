import './App.css'
import Navbar from './comp/Navbar'
import Toolbar from './comp/Toolbar'
import Table from './comp/Table'
import Footer from './comp/Footer'
import { useState } from 'react'

function App() {  
  const [togglefields,settogglefields] = useState(true)
 
  return (
    <div className=''>
      <div className='sticky top-0 z-50 bg-white'>
        <Navbar/>
        <Toolbar settogglefields = {settogglefields}/>
      </div>
      <Table togglefields = {togglefields}/>
      <div className='sticky bottom-0 z-50 bg-white'>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App
