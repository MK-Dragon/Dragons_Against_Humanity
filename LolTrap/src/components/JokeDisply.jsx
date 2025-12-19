// /src/components/JokeDisply.jsx

// Shows the F#$%ing Joke!

import Card from 'react-bootstrap/Card';

function JokeDisply({ joke="" }) {
  var variant = 'Primary'
  return (
    <>
      {
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>Funny Joke</Card.Header>
          <Card.Body>
            <Card.Title>{variant} Card Title </Card.Title>
            <Card.Text>
              Joke: {joke}
            </Card.Text>
          </Card.Body>
        </Card>
      }
    </>
  );
}

export default JokeDisply;