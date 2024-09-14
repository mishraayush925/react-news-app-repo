import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import icons

function Footer() {
  return (
    <footer className="bg-dark text-light text-center text-lg-start">
      <div className="container p-4">
        {/* Section: Links */}
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase text-warning">Categories</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-light">World News</a>
              </li>
              <li>
                <a href="#!" className="text-light">Politics</a>
              </li>
              <li>
                <a href="#!" className="text-light">Technology</a>
              </li>
              <li>
                <a href="#!" className="text-light">Sports</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase text-warning">About Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-light">Our Team</a>
              </li>
              <li>
                <a href="#!" className="text-light">Careers</a>
              </li>
              <li>
                <a href="#!" className="text-light">Privacy Policy</a>
              </li>
              <li>
                <a href="#!" className="text-light">Terms of Service</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase text-warning">Follow Us</h5>
            <ul className="list-unstyled d-flex justify-content-center">
              <li className="m-2">
                <a href="#!" className="text-light">
                  <FaFacebook size={24} />
                </a>
              </li>
              <li className="m-2">
                <a href="#!" className="text-light">
                  <FaTwitter size={24} />
                </a>
              </li>
              <li className="m-2">
                <a href="#!" className="text-light">
                  <FaInstagram size={24} />
                </a>
              </li>
              <li className="m-2">
                <a href="#!" className="text-light">
                  <FaLinkedin size={24} />
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase text-warning">Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="mailto:info@newswebsite.com" className="text-light">Email: info@newswebsite.com</a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-light">Phone: +1 234 567 890</a>
              </li>
              <li>
                <p className="text-light">Address: 123 Main Street, Anytown, USA</p>
              </li>
            </ul>
          </div>
        </div>
        {/* Section: Links */}
      </div>

      {/* Copyright */}
      <div className="text-center p-3 bg-warning text-dark">
        © 2024 News Website. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
