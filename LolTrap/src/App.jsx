// /App.jsx

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter, Routes, Route, Link, Outlet  } from 'react-router-dom';

// Main Components:
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Pages:
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
// Jokes
import Jokes from './Pages/Jokes.jsx'
// DND
import DnDPage from './Pages/DAH.jsx'
import QuestScreen from './Pages/DM.jsx'
import PlayerDashboard from './Pages/Player.jsx'




/*function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function Products() {
  return (
    <div>
      <h1>Products Page</h1>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/products/car">Cars</Link> |{" "}
        <Link to="/products/bike">Bikes</Link>
      </nav> 
      <Outlet />
      <br /> 
      <br /> 
      <br /> 
      <h2>Footer</h2>
    </div>
  );
}

function CarProducts() {
  return (
    <div>
      <h2>Cars</h2>
      <ul>
        <li>Audi</li>
        <li>BMW</li>
        <li>Volvo</li>
      </ul>
    </div>
  );
}

function BikeProducts() {
  return (
    <div>
      <h2>Bikes</h2>
      <ul>
        <li>Yamaha</li>
        <li>Suzuki</li>
        <li>Honda</li>
      </ul>
    </div>
  );
}

        //<Routes>
          //<Route path="/products" element={<Products />}>
            //<Route path="car" element={<CarProducts />} />
            //<Route path="bike" element={<BikeProducts />} />
          //</Route>
        //</Routes>
*/


function App() {

  return (
    <>
      <NavBar />
      <br /><br />

      <BrowserRouter>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jokes" element={<Jokes />} />
          <Route path="/dnd" element={<DnDPage />} />
          <Route path="/dm" element={<QuestScreen />} />
          <Route path="/player" element={<PlayerDashboard />}>
            {/*<Route path="all" element={<AllCards />} />*/}
            {/*<Route path="selected" element={<SelectedCards />} />*/}
          </Route>
          <Route path="/about" element={<About />} />
        </Routes>

      </BrowserRouter>

      <br /><br />
      <Footer />
    </>
  )
}

export default App
