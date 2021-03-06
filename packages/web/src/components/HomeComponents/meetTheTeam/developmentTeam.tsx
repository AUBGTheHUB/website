import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './marketingTeam.css';
import { Container, Navbar } from 'react-bootstrap';

const DevelopmentTeam = () => {
  return (
    <div className="allallall">
      <Navbar className="navTeams" variant="dark">
        <Container>
          <Navbar.Brand href="/" className="textWhite">
            Go Back
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="textWhite">
              Signed in as: <a>Development</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="initialHolder">
        <div className="holder">
          <Card style={{ width: '18rem' }} className="cards">
            <Card.Img variant="top" src="/Isma.png" className="imageTag" />
            <Card.Body>
              <Card.Title>Ismail - Head</Card.Title>
              <Button className="socialButton" href="https://www.linkedin.com/in/ismayil-mirzali/">
                Find on LinkedIn
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="cards">
            <Card.Img variant="top" src="/Nini.png" className="imageTag" />
            <Card.Body>
              <Card.Title>Nikolay</Card.Title>
              <Button className="socialButton" href="https://www.linkedin.com/in/nikolayninov/">
                Find on LinkedIn
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="cards">
            <Card.Img variant="top" src="/Misho.png" className="imageTag" />
            <Card.Body>
              <Card.Title>Mihail</Card.Title>
              <Button className="socialButton" href="https://www.linkedin.com/in/mbozhilov/">
                Find on LinkedIn
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }} className="cards">
            <Card.Img variant="top" src="/Yana.png" className="imageTag" />
            <Card.Body>
              <Card.Title>Yana</Card.Title>
              <Button className="socialButton" href="https://www.linkedin.com/in/yveitsman/">
                Find on LinkedIn
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }} className="cards">
            <Card.Img variant="top" src="/Petya.png" className="imageTag" />
            <Card.Body>
              <Card.Title>Petya</Card.Title>
              <Button
                className="socialButton"
                href="https://www.linkedin.com/in/petya-dimkina-54783b219/"
              >
                Find on LinkedIn
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="cards">
            <Card.Img variant="top" src="/Stojan.png" className="imageTag" />
            <Card.Body>
              <Card.Title>Stojan</Card.Title>
              <Button
                className="socialButton"
                href="https://www.linkedin.com/in/stojan-lisichkov-729ab91a9/"
              >
                Find on LinkedIn
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="cards">
            <Card.Img variant="top" src="/Sussy.png" className="imageTag" />
            <Card.Body>
              <Card.Title>Kiril</Card.Title>
              <Button className="socialButton" disabled>
                Find on LinkedIn
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="cards">
            <Card.Img variant="top" src="/Miro.png" className="imageTag" />
            <Card.Body>
              <Card.Title>Miroslav</Card.Title>
              <Button
                className="socialButton"
                href="https://www.linkedin.com/in/miroslav-yordanov-791502209/"
              >
                Find on LinkedIn
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentTeam;
