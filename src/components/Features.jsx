import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

export const Features = () => {
  return (
    <Container fluid>
        <Row className='header-features'>
    
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mt-3 mb-3">Discover Our Key Features</h1>
              <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl">
                Explore the powerful features that make our product the best choice for your needs.
              </p>
            </div>
          </div>
        </section>


        <Col className="mb-4 mr-4 d-flex justify-content-center align-items-center">
          <div className="card h-100 shadow-sm ">
            <div className="card-body text-center">
              <h4 className="title-box mb-3 title-2 box-features">Ticket Creation and Management</h4>
                <p>
                Digital World Technology is designed to streamline and enhance the way you handle 
                support requests. It begins with robust ticket creation and management capabilities.
                Automated ticket routing assigns tickets to the right support agents or teams based on 
                predefined rules, and custom fields can be added to capture specific information relevant to your organization.
                </p>
            </div>
          </div>
        </Col>

        <Col className="mb-4 mr-4 d-flex justify-content-center align-items-center">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h4 className="title-box mb-3 title-2 box-features">User and Agent Management</h4>
                <p>
                User profiles store essential information, including ticket history and preferences. Role-based access 
                control allows you to define roles and permissions for support agents and administrators, ensuring the 
                right people have the right access. Agent performance metrics, such as response time, resolution time, 
                and customer satisfaction, are tracked to help you evaluate and improve your support team's efficiency.
                </p>
            </div>
          </div>
        </Col>

        <Col className="mb-4 mr-4 d-flex justify-content-center align-items-center">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h4 className="title-box mb-3 title-2 box-features">Reporting and Analytics Tools</h4>
                <p>
                Reporting and analytics are powerful tools within our product. Customizable dashboards allow you to visualize
                key metrics and trends, while advanced reporting capabilities let you generate detailed reports on various aspects 
                of your support operations, such as ticket volumes, resolution times, agent performance, and customer satisfaction.
                </p>
            </div>
          </div>
        </Col>
    
    </Row>
    </Container>
  )
}
