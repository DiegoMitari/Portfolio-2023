
import './App.css'
import NavBar from './components/NavBar'
import Main from './components/Main'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-gray-800 px-6 pb-4 md:px-20 lg:px-40'>
      <NavBar />
      <Main />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default App
