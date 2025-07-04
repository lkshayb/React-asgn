import './App.css'
import Navbar from './comp/Navbar'
import Toolbar from './comp/Toolbar'
import Table from './comp/Table'
import Footer from './comp/Footer'

function App() {

  return (
    <div className=''>
      <div className='sticky top-0 z-50 bg-white'>
        <Navbar/>
        <Toolbar/>
      </div>
      <Table/>
      <div className='sticky bottom-0 z-50 bg-white'>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App
