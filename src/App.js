import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/Pages/Contact/Contact';
import Home from './components/Pages/Home/Home';
import Join from './components/Pages/Join/Join';
import Services from './components/Pages/Services/Services';
import SignIn from './components/Pages/SignIn/SignIn';

function App() {
  return (
    <div style={{ backgroundColor: "#ECF0F3" }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/join' element={<Join />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
