import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer autoClose={2000}/>
      <Header/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Contacts/>
      <Footer/>
    </div>
  )
}

export default App
