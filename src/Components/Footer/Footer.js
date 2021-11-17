import React from 'react';
import './Footer.css'
const Footer = () => {
        return (
          <div className="footer-bg">
            <div className="d-lg-flex justify-content-center p-lg-5">
              <div>
                <p>Bangladesh</p>
                <p>Savar, Dhaka</p>
              </div>
              <div>
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/1Jgpms0/logo-removebg-preview.png"
                />
              </div>
              <div>
                <p>CAll: 01999999999</p>
                <p>We are 24/7 available</p>
              </div>
            </div>
            <p>All rights reserved by Rashedul Islam</p>
          </div>
        );
};

export default Footer;