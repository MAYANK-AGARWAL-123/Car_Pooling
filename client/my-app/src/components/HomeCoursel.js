import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function HomeCarousel() {
  return (
    <div style={{ width: "100%", height: "80vh", overflow: "hidden" }}>
      <Carousel style={{ width: "100%", height: "100%" }}>
        <Carousel.Item interval={3000}>
          <Image
            src="./images/slide-2.jpg"
            fluid
            style={{
              objectFit: "cover",
              objectPosition: "bottom",
              width: "100%",
              height: "100%",
            }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4500}>
          <Image
            src="./images/slide-1.jpg"
            fluid
                      style={{
            
              objectFit: "cover",
              objectPosition: "bottom",
              width: "100%",
              height: "100%",
            }}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="./images/slide-3.jpg"
            fluid
            style={{
              objectFit: "cover",
              objectPosition: "bottom",
              width: "100%",
              height: "100%",
            }}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
