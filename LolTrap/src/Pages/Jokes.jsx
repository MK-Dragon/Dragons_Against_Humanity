import { useState, useEffect } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import JokeSettingsPicker from '../components/JokeSettingsPicker';
import JokeDisply from '../components/JokeDisply';

import birdImage from '../imgs/bird.png'; 
import dogImage from '../imgs/dog.png'; 

function Jokes() {
  const [categories, setCategories] = useState([]);
  const [flags, setFlags] = useState([]);
  const [selectedCats, setSelectedCats] = useState(['Any']); // Start with Any
  const [selectedBlacklist, setSelectedBlacklist] = useState([]);
  
  // Store the entire joke object from the API here
  const [currentJoke, setCurrentJoke] = useState(null); 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const catRes = await fetch('https://v2.jokeapi.dev/categories');
        const flagRes = await fetch('https://v2.jokeapi.dev/flags');
        const catData = await catRes.json();
        const flagData = await flagRes.json();

        setCategories(catData.categories || []);
        setFlags(flagData.flags || []);
        setIsLoading(false);
      } catch (err) {
        console.error("Failed to fetch settings:", err);
        setIsLoading(false);
      }
    };
    fetchOptions();
  }, []);

  const getJoke = async () => {
    const categoryPath = selectedCats.join(',');
    const blacklistQuery = selectedBlacklist.length > 0 && selectedBlacklist[0] !=="Any"
    ? `&blacklistFlags=${selectedBlacklist.join(',')}` 
    : '';
    
    try {
      // Note: Use ? instead of & if it's the only parameter, but JokeAPI works best like this:
      const response = await fetch(`https://v2.jokeapi.dev/joke/${categoryPath}?${blacklistQuery}`);
      const data = await response.json();

      if (data.error) {
        alert("No joke found with these settings!");
      } else {
        setCurrentJoke(data); // Save the whole object to state
      }
    } catch (error) {
      alert("Error fetching joke. Check your connection.");
    }
  };

  if (isLoading) {
    return <div className="text-center mt-5"><Spinner animation="border" /> <p>Loading Settings...</p></div>;
  }

  return (
    <div className="container mt-5">
      <h1>Joke Generator</h1>
      <div className="text-center mb-4">
        <img 
          src={birdImage} 
          alt="Bird" 
          className="img-fluid rounded" 
          style={{ maxHeight: '200px' }} 
        />
      </div>
      <hr />
      
      <JokeSettingsPicker title='Select Joke Categories' options={categories} ac_id={0} selected={selectedCats} onChange={setSelectedCats} />
      <div className="mt-3">
        <JokeSettingsPicker title='Blacklist Categories' options={flags} ac_id={1} selected={selectedBlacklist} onChange={setSelectedBlacklist} />
      </div>

      <Button onClick={getJoke} className="mt-4 w-100" variant="primary" size="lg">
        Tell Me a Joke!
      </Button>

      <hr/>

      {/* Check if currentJoke exists, then calculate setup/delivery on the fly */}
      {currentJoke && (
        <div id='jokeBox' className="mt-4">
          <JokeDisply 
            title={currentJoke.category} 
            joke={currentJoke.type === 'single' ? currentJoke.joke : currentJoke.setup} 
            delivery={currentJoke.type === 'twopart' ? currentJoke.delivery : ""} 
          />
        </div>
      )}
    </div>
  );
}

export default Jokes;