import React from "react";
import { Form } from "react-bootstrap";
import Truncate from "react-truncate";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGooglePlusG,
  FaLinkedinIn
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-info">
              <h3>Paint Magics</h3>
              <p>
                <Truncate lines={7} ellipsis={<span>...</span>}>
                  Since 1975, HariBhai Wood Décor has been crafting sensible
                  Woodwork with Interior & Exterior Painting Services for
                  residential and commercials with great craftsmanship and
                  service at the modest cost. 4 decades of experience, skill and
                  commitment will surpass your expectation. Paint Magics is a
                  team of professional, energetic individuals who understand to
                  deliver the same level of customer expectation that the family
                  had been exceeding over the years. Every Project is a
                  personalized project for every professional at Paint Magics as
                  we understand the happiness of every Living Walls at your
                  house. We are committed to delivering any projects on time as
                  we understand each project, we begin has specific needs and a
                  dream to live!!!
                </Truncate>
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="ion-ios-arrow-right"></i>
                  <a href="/">Home</a>
                </li>
                <li>
                  <i className="ion-ios-arrow-right"></i>
                  <a href="/about">About us</a>
                </li>
                <li>
                  <i className="ion-ios-arrow-right"></i>
                  <a href="/privacy">Privacy policy</a>
                </li>
                <li>
                  <i className="ion-ios-arrow-right"></i>
                  <a href="/faqs">FAQ</a>
                </li>
                <li>
                  <i className="ion-ios-arrow-right"></i>
                  <a href="/">Buy Paints</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                <span>20/1 Wellington Street,</span>
                <br />
                <span>Langford Garden,</span>
                <br />
                <span>Richmond Town,</span>
                <br />
                <span>Bangalore 560025</span>
                <br />
                <span>
                  <strong>Phone:</strong>+91 9741252425
                </span>
                <br />
                <span>
                  <strong>Email:</strong> Paintmagicsbangalore@gmail.com
                </span>
                <br />
                <span>
                  <strong>Web:</strong> www.Paintmagics.com
                </span>
                <br />
              </p>

              <div className="social-links">
                <a href="/" className="twitter">
                  <FaTwitter />
                </a>
                <a href="/" className="facebook">
                  <FaFacebookF />
                </a>
                <a href="/" className="instagram">
                  <FaInstagram />
                </a>
                <a href="/" className="google-plus">
                  <FaGooglePlusG />
                </a>
                <a href="/" className="linkedin">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>
                Please enter your email address to recieve our newsletters,
                offers and updates
              </p>
              <Form method="post">
                <input type="email" name="email" required="required" />
                <input type="submit" value="Subscribe" />
              </Form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          © Copyright
          <strong>Paint Magics</strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by
          <a href="/">Masters</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
