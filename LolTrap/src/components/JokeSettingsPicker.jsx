import { useState } from 'react';
import { Accordion, ButtonGroup, ToggleButton } from 'react-bootstrap';

// Destructure { options } from the props object
function JokeSettingsPicker({ ac_id = 0, title = "", options = [] }) {
  // Track selected items in an array
  const [selected, setSelected] = useState([]);

  const handleToggle = (val) => {
    setSelected((prev) =>
      prev.includes(val) 
        ? prev.filter((i) => i !== val) // Remove if already there
        : [...prev, val]                // Add if not there
    );
  };

  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
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