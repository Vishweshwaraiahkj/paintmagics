import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const WhatsUnique = () => {
  return (
    <Container fluid="true" className="text-center my-3 py-2">
      <h1>What's Unique!</h1>
      <Row className="text-left">
        <Col>
          <ul>
            <li>Integrity</li>
            <li>Efficiency</li>
            <li>Economical</li>
            <li>4 Decades of Experience</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default WhatsUnique;
