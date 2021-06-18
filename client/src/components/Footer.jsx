import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <address className="footer-content">
      You may also want to visit us:
      <a
        href="http://maps.google.com/?q=4119+East+Gage+Ave+Bell,+CA+90201"
        className="location"
      >
        <div className="business-name">La Costa Restaurant</div>
        <div className="business-address-link">
          4119 East Gage Ave Bell, CA 90201
        </div>
      </a>
    </address>
  );
};

export default Footer;
