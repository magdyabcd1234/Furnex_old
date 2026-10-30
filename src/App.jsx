import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Index from './Components/Pages/Index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Wishlist from './Components/Pages/Wishlist';
import Carts from './Components/Pages/Carts';
import CheckOut from './Components/Pages/CheckOut';
import Footer from './Components/Footer/Footer';
import About from './Components/Pages/About';
import Shop from './Components/Pages/Shop';
import Blog from './Components/Pages/Blog';
import Contact from './Components/Pages/Contact';





function App() {


  return (
    <>
   <Nav />
   <ToastContainer position="top-right" autoClose={2000}/>
   <Routes>
    <Route path='/' element={<Index />} />
    <Route path='/carts' element={<Carts />} />
    <Route path='/wishlist' element={<Wishlist />} />
    <Route path='/checkOut' element={<CheckOut />} />
    <Route path='/about' element={<About />} />
    <Route path='/shop' element={<Shop />} />
    <Route path='/blog' element={<Blog />} />
    <Route path='/contact' element={<Contact />} />
   </Routes>
   <Footer />
    </>
  )
}

export default App
