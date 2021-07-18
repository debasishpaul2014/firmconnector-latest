import React from "react";

const Footer = (props) => {
  return (
    <footer className="text-white bg-black-custom">
      <div className="container">
        <p className="float-right">
          <a href="#">Back to top</a>
        </p>
        <p className="text-sm">
          &copy; 2014-2021 Firmconnector.com. All Rights Reserved.
        </p>
        <p className="text-warning">E-mail: info@firmconnector.com</p>
      </div>
    </footer>
  );
};

export default Footer;
