import React from 'react';
import './custom.css';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
  const thisYear = () => {
    const year = new Date().getFullYear();
    return year;
  };
  return (
    <div
      style={{
        position: 'relative',
        bottom: '0px',
        width: '100%',
      }}
      id="main-footer"
      className="text-center p-2"
    >
      <Row>
        <Col>
          <p>
            Copyright &copy; <span>{thisYear()}</span>
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
