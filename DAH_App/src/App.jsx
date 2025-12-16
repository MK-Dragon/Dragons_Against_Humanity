// App.jsx

import { useState } from 'react'
import './App.css' // Keep this for existing styles

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ItemCard from './components/ItemCard'

// Import Bootstrap (No longer needed for layout, using Tailwind/CSS)
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

const itemsData = [
  {
    id: 1,
    title: 'Galactic Navigator',
    description: 'Explore distant nebulae and chart new star systems with this essential deep-space tool. Built with quantum entanglement technology.',
    imageSrc: 'https://placehold.co/600x400/312e81/ffffff?text=Product+Image+1',
    buttonText: 'Buy Now',
    buttonLink: '#buy-1',
  },
  {
    id: 2,
    title: 'Aetherial Headset',
    description: 'Experience true immersion with sound that seems to come from all dimensions. Noise cancellation is active in parallel universes.',
    imageSrc: 'https://placehold.co/600x400/4f46e5/ffffff?text=Product+Image+2',
    buttonText: 'See Details',
    buttonLink: '#details-2',
  },
  {
    id: 3,
    title: 'Chrono-Synth',
    description: 'A pocket-sized device capable of synthesizing temporal energy for short-range chronal jumps. Strictly regulated.',
    imageSrc: 'https://placehold.co/600x400/6366f1/ffffff?text=Product+Image+3',
    buttonText: 'Pre-order',
    buttonLink: '#preorder-3',
  },
  // Adding a fourth item to demonstrate the layout works perfectly with a row break
  {
    id: 4,
    title: 'Quantum Key',
    description: 'Unlock secure servers and access restricted data with a key that exists in multiple states simultaneously.',
    imageSrc: 'https://placehold.co/600x400/10b981/ffffff?text=Product+Image+4',
    buttonText: 'Get Access',
    buttonLink: '#access-4',
  },
];


function App() {
  const [count, setCount] = useState(0) // Keep the counter state

  return (
    // Replaced d-flex/min-vh-100 (Bootstrap) with Tailwind equivalent classes
    <div className="flex flex-col min-h-screen"> 
      <Navbar/>

      {/* Main Content Container matching the desired layout */}
      <main className="flex-grow-1 p-8">
        
        {/* Title Section */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Dynamic Product Display
          </h1>
          {/* Example Counter (Matching the image on the left) */}
          <p className="mt-4 text-lg text-gray-700">
            Example Counter: <span 
              className="inline-block px-3 py-1 ml-2 text-white bg-indigo-600 rounded-full cursor-pointer hover:bg-indigo-700 transition"
              onClick={() => setCount(c => c + 1)}
            >
              count is {count}
            </span>
          </p>
        </div>

        {/* Product Cards Container - UPDATED FOR 3 COLUMNS 
          - max-w-7xl mx-auto: Centers the content container
          - grid: Enables CSS Grid
          - grid-cols-1: 1 column on mobile
          - sm:grid-cols-2: 2 columns on small screens and up
          - lg:grid-cols-3: 3 columns on large screens and up (the request)
          - gap-8: Sets the spacing (gutters) between cards
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {itemsData.map(item => (
            <ItemCard 
              key={item.id} 
              title={item.title} 
              description={item.description} 
              imageSrc={item.imageSrc} 
              buttonText={item.buttonText} 
              buttonLink={item.buttonLink} 
            />
          ))}
        </div>
      </main>

      <Footer/>

      {/* External CSS links should generally be in public/index.html or the main entry point */}
      {/* <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet"></link> */}
      {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous"></link> */}
    </div>
  )
}

export default App