import React from "react";
import Carousel from "react-bootstrap/Carousel";
import laptop from "../images/laptop.png";
import hand1 from "../images/hand1.png";
import Hand2 from "../images/Hand2.png";
import Hand3 from "../images/Hand3.png";
import Dashboard from "../images/Dashboard.png";
import Bulb from "../images/Bulb.png";

const CrausalComp = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img className="d-block " src={laptop} alt="First slide" />
          <p className="caption">In effective online training</p>

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="d-block " src={hand1} alt="Second slide" />
          <p className="caption">Learn? or Earn?.</p>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block " src={Hand2} alt="Third slide" />
          <p className="caption">Stuck with backend roles.</p>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block " src={Hand3} alt="First slide" />
          <p className="caption">Nulla vitae elit libero,.</p>

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="d-block " src={Dashboard} alt="First slide" />
          <p className="caption">Incompetent for Fortune 500 companies</p>

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="d-block " src={laptop} alt="First slide" />
          <p className="caption">In effective online training</p>

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CrausalComp;
