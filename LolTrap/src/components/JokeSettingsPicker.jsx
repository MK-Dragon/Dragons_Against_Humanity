import { useState } from 'react';
import { Accordion, ButtonGroup, ToggleButton } from 'react-bootstrap';

function JokeSettingsPicker({ ac_id = 0, title = "", options = [], selected = [], onChange }) {
  const handleToggle = (val) => {
    const nextSelected = selected.includes(val)
      ? selected.filter((i) => i !== val)
      : [...selected, val];
    onChange(nextSelected); // Send the new array back to Home.jsx
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