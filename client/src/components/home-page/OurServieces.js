import React from "react";
import Truncate from "react-truncate";
import { Container, Row, Col } from "react-bootstrap";
import { FaBeer } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdPeopleOutline } from "react-icons/md";
import { TiBook } from "react-icons/ti";

const OurServieces = () => {
  return (
    <Container fluid="true" className="text-center my-5 py-2">
      <h1>Our Services</h1>
      <Row>
        <Col className="servieceText">
          <FaBeer className="homeIcons" size="5rem" color="grey" />
          <h5>
            <Truncate lines={1} ellipsis={<span>...</span>}>
              Interior & Exterior Painting – Residential / Commercia
            </Truncate>
          </h5>
          <div>
            <Truncate
              lines={3}
              ellipsis={
                <span>
                  ... <a href="/">Read more</a>
                </span>
              }
            >
              <p>
                When it comes to painting the interior or exterior of your Home,
                Office, Retail Space or a warehouse and Industrial Space, leave
                it to the experts.
              </p>

              <p>
                Paint Magics has a dependable & experienced team of painting
                professionals that use only the best brands in the industry like
                Asian Paints, Nerolac, Jotun, Berger, Dulux, and Nippon.
              </p>

              <p>
                We Always follow a full surface preparation by puttying,
                caulking, filling holes and repairing cracks before starting to
                give your walls the colors that stand out.
              </p>

              <p>
                Not only will your paint job be done efficiently, but we also
                guarantee it to be clean and professional.
              </p>
            </Truncate>
          </div>
        </Col>
        <Col className="servieceText">
          <IoIosMail className="homeIcons" size="5rem" color="grey" />
          <h5>Textures</h5>
          <div>
            <Truncate
              lines={3}
              ellipsis={
                <span>
                  ... <a href="/">Read more</a>
                </span>
              }
            >
              <p>
                Give your walls the power to influence by changing the feel and
                mood of the entire space with varieties of Evergreen textures to
                Premium texture designs that are carefully applied by trained
                professionals.
              </p>

              <p>
                The texture paint gives your walls a set of healthy treatment
                against cracks, damps, and salting.
              </p>
            </Truncate>
          </div>
        </Col>
        <Col className="servieceText">
          <MdPeopleOutline className="homeIcons" size="5rem" color="grey" />
          <h5>Wallpaper</h5>
          <div>
            <Truncate
              lines={3}
              ellipsis={
                <span>
                  ... <a href="/">Read more</a>
                </span>
              }
            >
              <p>
                Add an aesthetic dimension to your walls with a wide range of
                wallpaper that matches your style, character and your mood.
                Wallpapers are cost-effective and add huge impact on your soft
                furnishing and home décor.
              </p>
              <p>
                Enjoy greater benefits by choosing the wallpaper that doesn’t
                fade or discolour, scratch proof and easily cleanable.
              </p>
            </Truncate>
          </div>
        </Col>
        <Col className="servieceText">
          <TiBook className="homeIcons" size="5rem" color="grey" />
          <h5>Designer / Accent Wall</h5>
          <div>
            <Truncate
              lines={3}
              ellipsis={
                <span>
                  ... <a href="/">Read more</a>
                </span>
              }
            >
              <p>
                Light and bright or dark and dramatic, Accent walls are never
                out of style!!
              </p>
              <p>
                We provide free consultation when you decide to give an extreme
                focal point for any wall. Accent/Feature walls with multiple
                options that match your home interior and create an
                architectural feature, or to install a sense of the
                extraordinary in otherwise completely ordinary space.
              </p>
            </Truncate>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OurServieces;
