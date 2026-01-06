import React, { useState, useEffect } from 'react';
import actionsData from '../game_assets/cards/actions.json';
import itemsData from '../game_assets/cards/itms.json';
import npcData from '../game_assets/cards/npcs.json';

const PlayerDashboard = () => {
  const [hand, setHand] = useState({ actions: [], items: [], npcs: [] });
  const [selected, setSelected] = useState({ actions: [], items: [], npcs: [] });
  const [isPlaying, setIsPlaying] = useState(false); // Tracks game phase

  useEffect(() => {
    setHand({
      actions: getRandom(actionsData, 2),
      items: getRandom(itemsData, 2),
      npcs: getRandom(npcData, 2),
    });
  }, []);

  function getRandom(arr, n) {
    return [...arr].sort(() => 0.5 - Math.random()).slice(0, n);
  }

  const toggleSelect = (type, index) => {
    if (isPlaying) return; // Prevent selection changes during play phase
    setSelected(prev => {
      const isSelected = prev[type].includes(index);
      return {
        ...prev,
        [type]: isSelected ? prev[type].filter(i => i !== index) : [...prev[type], index]
      };
    });
  };

  const handleNextRound = () => {
    // 1. Replace only the cards that were selected (the "played" cards)
    setHand(prevHand => ({
      actions: prevHand.actions.map((c, i) => selected.actions.includes(i) ? getRandom(actionsData, 1)[0] : c),
      items: prevHand.items.map((c, i) => selected.items.includes(i) ? getRandom(itemsData, 1)[0] : c),
      npcs: prevHand.npcs.map((c, i) => selected.npcs.includes(i) ? getRandom(npcData, 1)[0] : c),
    }));

    // 2. Reset states for the new round
    setSelected({ actions: [], items: [], npcs: [] });
    setIsPlaying(false);
  };

  const renderCard = (card, index, type, colorClass) => {
    const isSelected = selected[type].includes(index);

    // If we are in "Play" mode, hide any card that isn't selected
    if (isPlaying && !isSelected) return null;

    return (
      <div className="col-md-4 col-sm-6 mb-3" key={`${type}-${index}`}>
        <div 
          onClick={() => toggleSelect(type, index)}
          className={`card h-100 shadow-sm border-3 ${isSelected ? 'border-warning shadow-lg' : 'border-transparent opacity-75'}`}
          style={{ 
            cursor: isPlaying ? 'default' : 'pointer', 
            transition: '0.3s all ease',
            transform: isSelected && !isPlaying ? 'translateY(-15px)' : 'none'
          }}
        >
          <div className={`card-header ${colorClass} text-white fw-bold`}>
            {type.toUpperCase()}
          </div>
          <div className="card-body">
            <h5 className="card-title">{card.name}</h5>
            {card.description && <p className="card-text small text-muted italic">"{card.description}"</p>}
            {card.race && (
              <div className="mt-2 small">
                <span className="badge bg-secondary me-1">{card.race}</span>
                <span className="badge bg-dark">{card.class}</span>
                <p className="mt-2 mb-0"><strong>Role:</strong> {card.job}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Calculate total selected count
  const totalSelected = selected.actions.length + selected.items.length + selected.npcs.length;

  return (
    <div className="container py-5 mt-5">
      <div className="bg-white p-4 rounded shadow-sm mb-4 d-flex justify-content-between align-items-center">
        <div>
          <h2 className="mb-0">{isPlaying ? "🔥 Playing Hand" : "🃏 Your Hand"}</h2>
          <p className="text-muted mb-0">
            {isPlaying ? "These are your active choices for the round." : "Select cards to play this turn."}
          </p>
        </div>

        <div>
          {!isPlaying ? (
            <button 
              onClick={() => setIsPlaying(true)} 
              className="btn btn-success btn-lg px-5 shadow"
              disabled={totalSelected === 0}
            >
              Play Hand ({totalSelected})
            </button>
          ) : (
            <button 
              onClick={handleNextRound} 
              className="btn btn-primary btn-lg px-5 shadow"
            >
              Next Round
            </button>
          )}
        </div>
      </div>

      <div className="row">
        {/* Only show categories if there are cards to show in them */}
        {(hand.actions.some((_, i) => !isPlaying || selected.actions.includes(i))) && (
            <><h4 className="text-primary border-bottom pb-2">Actions</h4>
            {hand.actions.map((c, i) => renderCard(c, i, 'actions', 'bg-primary'))}</>
        )}

        {(hand.items.some((_, i) => !isPlaying || selected.items.includes(i))) && (
            <><h4 className="text-success border-bottom pb-2 mt-4">Items</h4>
            {hand.items.map((c, i) => renderCard(c, i, 'items', 'bg-success'))}</>
        )}

        {(hand.npcs.some((_, i) => !isPlaying || selected.npcs.includes(i))) && (
            <><h4 className="text-info border-bottom pb-2 mt-4">NPCs</h4>
            {hand.npcs.map((c, i) => renderCard(c, i, 'npcs', 'bg-info'))}</>
        )}
      </div>
    </div>
  );
};

export default PlayerDashboard;