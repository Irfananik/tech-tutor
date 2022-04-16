import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Login from './Pages/Form/Login';
import SignUp from './Pages/Form/SignUp';
import CheckOut from './Pages/Home/CheckOut/CheckOut';
import Home from './Pages/Home/Home/Home';
import Banner from './Pages/Shared/Banner/Banner';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/:checkoutId' element={<CheckOut/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/*' element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
