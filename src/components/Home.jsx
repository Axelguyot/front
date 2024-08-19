import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


export const Home = () => {
  return (
    <Container fluid>

      <Row className="header-home justify-content-center align-items-center min-vh-100">
      
      <Col xs={12} md={8} className="text-center text-white">
      <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Streamline Your Ticket Management
                  </h1>
                  <p className="max-w-[600px] text-gray-400 md:text-xl">
                    Our ticket manager software helps you organize and prioritize your support requests, so you can
                    provide exceptional customer service.
                  </p>
                </div>
                <div>
                <Link to="/signup">
                  <Button variant="light">Try it Free</Button>
                </Link>
                {' '}
                <Link to="/aboutus">
                  <Button variant="dark">Learn More</Button>
                </Link>
                </div>
        </Col>
        
      </Row>
      
      
      
    
      
      
    </Container>
  )
}
