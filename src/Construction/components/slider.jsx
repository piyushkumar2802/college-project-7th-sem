import React from 'react';
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image1 from './Image/slider-3.jpg';
import Image2 from './Image/slider-2.jpg';
import Image3 from './Image/slider-1.jpg';
import Image4 from './Image/slider-4.jpg';

function slider() {
  const img = {
        width: '100%',
        height:'70vh'
      }
  return (
    <div>
      <Carousel controls={false} fade={true} pause={true}>

        <Carousel.Item interval={5000}>
        <img
          style={img}
          className="d-block w-100"
          src={Image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={5000}>
        <img
          style={img}
          className="d-block w-100"
          src={Image2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={5000}>
        <img
          style={img}
          className="d-block w-100"
          src={Image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={5000}>
        <img
          style={img}
          className="d-block w-100"
          src={Image4}
          alt="Third slide"
        />
        <Carousel.Caption>
           <h3>Four slide label</h3>
           <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
         </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  )
}

export default slider;
