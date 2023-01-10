import "./spotlight.css";
import Rectangle from "../../src/images/Rectangle.svg";
import spotOne from "../../src/images/spot-1.jpeg";
import spotTwo from "../../src/images/spot-2.jpeg";
import { Modal, ModalHeader } from "reactstrap";
import ApplyForm from "../components/Apply_Form/Apply_form";
import { useState } from "react";
function SpotLight() {
  const [modal_apply_1, setModal_apply_1] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  <Modal
    size="lg"
    isOpen={modal_apply_1}
    toggle={() => setModal_apply_1(!modal_apply_1)}
  >
    <button
      className="button-close"
      onClick={() => setModal_apply_1(!modal_apply_1)}
    >
      x
    </button>
    <ApplyForm />
  </Modal>;
  return (
    <>
      <div className="row partner-feedback-main">
        <div className="col-lg-1"></div>
        <div className="col-lg-10 d-none d-lg-block">
          <div className="partner-header-spotlight">
            <p>Futurense Spotlight</p>
          </div>
          <div className="feedback-carousal">
            <div className="media-scroller-partner snaps-inline-feedback">
              <div className="media-element-partner">
                <img src={spotOne} alt="" />
              </div>
              <div className="media-element-partner">
                <img src={spotTwo} alt="" />
              </div>
              <div className="media-element-partner">
                <img src={spotOne} alt="" />
              </div>
              <div className="media-element-partner">
                <img src={spotOne} alt="" />
              </div>
              <div className="media-element-partner">
                <img src={spotOne} alt="" />
              </div>
            </div>
          </div>

          <div className="carrier-partner">
            <p>At Futurense,</p>
            <h1>
              it’s <span>#</span>NotJustAJob <span>– It's</span> a CAREER!
            </h1>
          </div>

          {/* <div className="client-testimonial">
            <p>Client Video Testimonials</p>
            <img className="image-spacing-partner" src={Rectangle} alt="" />
          </div>
          <div className="GodFather">
            <p>
              Get the ideal tech talent with the
              <span> Godfather of Talent!</span>
            </p>
          </div>
          <div className="GodFather-button">
            <a href="#">Hire Us</a>
          </div> */}
        </div>
        {/* for mobile device  */}
        <div className="col-lg-1 d-block d-lg-none">
          <div className="partner-header">
            <p>What our partners say about our Futurense Fellows..</p>
          </div>
          <div className="befor_carousal">
            <div className="feedback-carousal">
              <div className="media-scroller-partner snaps-inline-feedback">
                <div className="media-element-partner">
                  <img src={spotOne} alt="" />
                </div>
                <div className="media-element-partner">
                  <img src={spotTwo} alt="" />
                </div>
                <div className="media-element-partner">
                  <img src={spotOne} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* button starts here  */}
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            {/* <a href="#">Apply now</a> */}
            {/* {isVisible && (
              <button
                className="btn-apply_1 d-none d-lg-block"
                onClick={() => {
                  setModal_apply_1(!modal_apply_1);
                  setIsVisible(true);
                }}
              >
                Apply Now
              </button>
            )} */}
            <div className="know-more-button">
              <a href="#">Know more</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpotLight;
