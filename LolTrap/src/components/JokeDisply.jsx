// /src/components/JokeDisply.jsx

// Shows the F#$%ing Joke!

import Card from 'react-bootstrap/Card';

function JokeDisply({ title = "Joke", joke = "", delivery = "" }) {
  const variant = 'Primary';

  return (
    <Card
      bg={variant.toLowerCase()}
      text="white"
      className="mb-2 w-100" // Set to w-100 to fill the jokeBox container
    >
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Text className="fs-5">
          {joke}
        </Card.Text>

        {/* This section only renders if delivery exists and is not empty */}
        {delivery && (
          <div id="delivery" className="mt-3 pt-3 border-top border-light">
            <Card.Text className="fw-bold italic">
              {delivery}
            </Card.Text>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default JokeDisply;