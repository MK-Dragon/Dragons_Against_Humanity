// App.jsx

import { useState } from 'react'
import './App.css' // Keep this for existing styles

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ItemCard from './components/ItemCard'

// import Bootstrap (You might not need these if using pure Tailwind/CSS in ItemCard and layout)
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

const itemsData = [
  // ... (itemsData is unchanged)
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
];


function App() {
  const [count, setCount] = useState(0) // Keep the counter state

  return (
    <div className="d-flex flex-column min-vh-100">
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

        {/* Product Cards Container */}
        <div className="flex flex-wrap justify-center gap-8">
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

      {/* Move links to index.html or public/index.html if possible, or leave as is if required by setup */}
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet"></link>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous"></link>
    </div>
  )
}

export default App