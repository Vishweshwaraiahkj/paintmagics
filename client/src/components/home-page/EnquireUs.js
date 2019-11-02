import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

const EnquireUs = () => {
  return (
    <Container className="text-center my-3 py-2">
      <h1>Enquire Us</h1>
      <Row className="text-left">
        <Col>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Comment:</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Button variant="primary" size="lg" block type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EnquireUs;
