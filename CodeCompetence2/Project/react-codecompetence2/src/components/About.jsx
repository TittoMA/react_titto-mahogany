import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import AboutImg from '../assets/img/about-img.svg';

const About = () => {
  return (
    <div id='about' style={{ marginTop: -35 }} className='mb-5'>
      <Container className='py-4'>
        <Row className='justify-content-between'>
          <Col xs='12' md='5'>
            <img className='img-fluid h-100 hero-img' src={AboutImg} alt='About Image' />
          </Col>
          <Col xs='12' md='5'>
            <h1 className='mb-4 text-end'>About Us</h1>
            <p className='text-end'>
              This is my personal website, a place where I showcase my work, share my thoughts and ideas, and
              connect with others who share similar interests. It's a platform that represents who I am and
              what I stand for, and serves as a hub for all of my online activity.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
