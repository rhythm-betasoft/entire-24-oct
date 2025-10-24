  import './App.css'
  import Navbar from './components/Navbar'
  import Footer from './components/Footer'

  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
  import Home from './pages/Home'
  import About from './pages/About'
  import Register from './pages/register'
  import ToDo from './pages/ToDo'
  import Products from './pages/Products'

  function App() {
    return (
      <Router>
        <Navbar />
        
        <main style={{ minHeight: '86vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Register" element={<Register/>} />
            <Route path="/ToDo" element={<ToDo/>}></Route>
            <Route path="/Products" element={<Products/>}></Route>
          </Routes>
        </main>
        
        <Footer />
      </Router>
    )
  }
  export default App
