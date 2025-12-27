import { useState } from 'react';
import { Accordion, ButtonGroup, ToggleButton } from 'react-bootstrap';

function JokeSettingsPicker({ ac_id = 0, title = "", options = [], selected = [], onChange }) {
  const handleToggle = (val) => {
  let nextSelected;

  if (val.toLowerCase() === 'any') {
    // If clicking 'Any', it should be the ONLY one selected
    nextSelected = ['Any'];
  } else {
    // If clicking something else:
    // 1. Remove 'Any' (if it exists)
    // 2. Toggle the current value
    const withoutAny = selected.filter(i => i.toLowerCase() !== 'any');
    
    nextSelected = withoutAny.includes(val)
      ? withoutAny.filter((i) => i !== val)
      : [...withoutAny, val];

    // Optional: If you deselect everything, default back to 'Any'
    if (nextSelected.length === 0) {
      nextSelected = ['Any'];
    }
  }
  
  onChange(nextSelected);
};

  return (
    <Accordion alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>
          <ButtonGroup vertical className="w-100">
            {options.map((op, idx) => (
              <ToggleButton
                key={idx}
                id={`tgl${ac_id}-${idx}`}
                type="checkbox"
                variant="outline-primary"
                checked={selected.includes(op)}
                value={op}
                onChange={() => handleToggle(op)}
                className="mb-1"
              >
                {op}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default JokeSettingsPicker;