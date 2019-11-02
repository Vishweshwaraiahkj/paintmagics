import React, { useState, useEffect } from "react";
import { Carousel, Button } from "react-bootstrap";

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [slides, setSlides] = useState([]);

  // Update slides object.
  useEffect(() => {
    setSlides([
      {
        id: 1,
        name: "First Slide",
        image: process.env.PUBLIC_URL + "/images/slide-1.jpg",
        alt: "Slider",
        desc:
          "Paints Praesent commodo cursus magna, vel scelerisque nisl consectetur."
      },
      {
        id: 2,
        name: "Second Slide",
        image: process.env.PUBLIC_URL + "/images/slide-2.jpg",
        alt: "Slider",
        desc:
          "Magics Praesent commodo cursus magna, vel scelerisque nisl consectetur."
      },
      {
        id: 3,
        name: "Third Slide",
        image: process.env.PUBLIC_URL + "/images/slide-3.jpg",
        alt: "Slider",
        desc:
          "Masters Praesent commodo cursus magna, vel scelerisque nisl consectetur."
      }
    ]);
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <div className="slider-box">
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={handleSelect}
      >
        {slides.map((slider, index) => (
          <Carousel.Item key={slider.id}>
            <img
              className="d-block w-100"
              src={slider.image}
              alt={slider.alt}
            />
            <Carousel.Caption>
              <h3>{slider.name}</h3>
              <p>{slider.desc}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <Button className="estimate-button" variant="warning">
        Get Free Estimate
      </Button>
    </div>
  );
};

export default ControlledCarousel;
