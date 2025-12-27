import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// 1. Import the image from your imgs folder
import dogImage from '../imgs/dog.png'; 
import stackImage from '../imgs/react_bootstrap.jpg'; 

function About() {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">About Lool Trap</h2>
      <Row className="g-4">
        {/* Card 1: The Goal */}
        <Col md={6}>
          <Card className="h-100 shadow-sm">
            {/* 2. Use the imported variable in the src prop */}
            <Card.Img 
              variant="top" 
              src={dogImage} 
              alt="Project Mission" 
            />
            <Card.Body>
              <Card.Title>Our Goal</Card.Title>
              <Card.Text>
                Lool Trap is designed to bring a little laughter to your day by fetching the best jokes from the web. 
                We believe that everyone deserves a quick break and a good laugh.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 2: The Tech */}
        <Col md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Img 
              variant="top" 
              src={stackImage} 
              alt="Technology" 
            />
            <Card.Body>
              <Card.Title>The Tech</Card.Title>
              <Card.Text>
                This project is built using React and Bootstrap for a fast, responsive user experience. 
                It connects dynamically to the JokeAPI to provide you with filtered, customized content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;