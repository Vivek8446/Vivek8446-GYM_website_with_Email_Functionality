
import './App.css'
import Navbar from './components/Navbar'
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Fragment, useState } from 'react'
import Hero from './components/Hero'
import Footer from './components/Footer';
import Contact from './components/Contact';
import WorkoutSessions from './components/WorkoutSessions';
import Gallery from './components/Gallery';
import BMICalculator from './components/BMICalculator';
import Pricing from './components/Pricing';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
   
      <Route  path="/" element={
      <Fragment>
          <Navbar/>
          <Hero />
          <WorkoutSessions />
          <Gallery/>
          <Footer/>
      </Fragment>
      } />
      <Route  path="/contact" element={
        <Fragment>
        <Navbar/>
        <Contact />
        <Footer/> 
        <ToastContainer theme='dark' position='top-center' autoClose={3000}/>
      </Fragment>} />

      <Route  path="/bmi" element={
        <Fragment>
        <Navbar/>
        <BMICalculator/>
        <Footer/> 
        <ToastContainer theme='dark' position='top-center' autoClose={3000}/>
      </Fragment>} />

      <Route  path="/pricing" element={
        <Fragment>
        <Navbar/>
        <Pricing/>
        <Footer/> 
      </Fragment>} />
      
      
</Routes>
  )
}

export default App
