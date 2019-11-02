import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Container fluid="true" className="text-center my-3 py-2">
      <h1>About Us</h1>
      <Row>
        <Col>
          <p>
            Since 1975, HariBhai Wood Décor has been crafting sensible Woodwork
            with Interior & Exterior Painting Services for residential and
            commercials with great craftsmanship and service at the modest cost.
            4 decades of experience, skill and commitment will surpass your
            expectation.
          </p>
          <p>
            Paint Magics is a team of professional, energetic individuals who
            understand to deliver the same level of customer expectation that
            the family had been exceeding over the years. Every Project is a
            personalized project for every professional at Paint Magics as we
            understand the happiness of every Living Walls at your house.
          </p>
          <p>
            We are committed to delivering any projects on time as we understand
            each project, we begin has specific needs and a dream to live!!!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
