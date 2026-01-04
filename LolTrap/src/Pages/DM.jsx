import React, { useState, useEffect } from 'react';
// 1. Import the JSON directly (Vite/Webpack handles this automatically)
import questData from '../game_assets/cards/quest_cards.json';

const QuestScreen = () => {
  const [availableQuests, setAvailableQuests] = useState([]);
  const [currentQuest, setCurrentQuest] = useState(null);

  // Initialize the game
  useEffect(() => {
    // We spread the array to create a fresh copy
    const shuffled = [...questData].sort(() => Math.random() - 0.5);
    setAvailableQuests(shuffled);
    
    // Pick the first one
    if (shuffled.length > 0) {
      setCurrentQuest(shuffled[0]);
      setAvailableQuests(shuffled.slice(1));
    }
  }, []);

  const handleNext = () => {
    if (availableQuests.length === 0) {
      alert("No more quests available! Reshuffling deck...");
      const reshuffled = [...questData].sort(() => Math.random() - 0.5);
      setCurrentQuest(reshuffled[0]);
      setAvailableQuests(reshuffled.slice(1));
      return;
    }

    // Pick the next quest from our pool
    const nextQuest = availableQuests[0];
    setCurrentQuest(nextQuest);
    
    // Remove it from the available pool
    setAvailableQuests(availableQuests.slice(1));
  };

  return (
    <div className="container-fluid vh-100 d-flex flex-column align-items-center justify-content-center bg-dark text-white p-4">
      {currentQuest ? (
        <>
          {/* Huge Card using most of the screen */}
          <div className="card bg-secondary text-white shadow-lg w-100 mb-4" style={{ maxWidth: '900px', minHeight: '60vh' }}>
            <div className="card-body d-flex flex-column align-items-center justify-content-center text-center p-5">
              <h2 className="text-warning mb-4 fs-1">New Quest</h2>
              <p className="card-text display-6 italic">
                "{currentQuest.text}"
              </p>
            </div>
            <div className="card-footer text-end text-muted">
              Remaining in deck: {availableQuests.length}
            </div>
          </div>

          {/* Large Next Button */}
          <button 
            onClick={handleNext} 
            className="btn btn-warning btn-lg px-5 py-3 fw-bold shadow"
          >
            NEXT QUEST
          </button>
        </>
      ) : (
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading Adventure...</span>
        </div>
      )}
    </div>
  );
};

export default QuestScreen;