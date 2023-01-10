import "../home-component/home-component.css";
import Footer from "../home-component/footer";
import { Modal, ModalHeader } from "reactstrap";
import InstagramCarousal from "../home-component/instagram-carousal";
import Faqs from "./Faqs";
import PartnerFeedback from "./partner-feedback";
import StudentFeedback from "./student-feedback";
import Navbar from "../components/Navbar/Navbar";
import Video from "../components/video-section/Video";
import Counter from "../components/top_counter/TopCounter";
import HowItWorks from "../components/How_it_works/How_it_Works";
import HowItGrowth from "../components/growth/growth";
import { useState, useEffect } from "react";
import EquireNow from "../components/Enquire-now/Enquire_now";
import BottomCounter from "../components/Bottom_counter/BottomCounter";
import UpSkill from "../home-component/upskill";
import Apply_form from "../components/Apply_Form/Apply_form";
import Zero_section from "./Zero_section";
import Top_crausal from "./Top_crausal";
import Bottom_crausal from "./Bottom_crausal";
import How_it_Works from "../components/How_it_works/How_it_Works";
import Flow_chart from "./Flow_chart";
import SpotLight from "./spotLight";
function HomeComponent() {
  const [modal, setmodal] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0);
  const [modal_apply, setModal_apply] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToShowFrom = 400;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToShowFrom) {
      isVisible && setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <div className="body">
      <Modal size="lg" isOpen={modal} toggle={() => setmodal(!modal)}>
        <button className="button-close" onClick={() => setmodal(!modal)}>
          x
        </button>
        <EquireNow />
      </Modal>

      <Modal
        size="lg"
        isOpen={modal_apply}
        toggle={() => setModal_apply(!modal_apply)}
      >
        <button
          className="button-close"
          onClick={() => setModal_apply(!modal_apply)}
        >
          x
        </button>
        <Apply_form />
      </Modal>

      {isVisible && (
        <button className="btn btn-hire" onClick={() => setmodal(true)}>
          Hire
        </button>
      )}
      {isVisible && (
        <button className="btn btn-apply" onClick={() => setModal_apply(true)}>
          Apply
        </button>
      )}
      <Navbar />
      <Video />
      <Counter />
      <Top_crausal />
      <Zero_section />
      <HowItWorks />
      <HowItGrowth />
      {/* <UpSkill /> */}

      <StudentFeedback />
      <SpotLight />
      <Bottom_crausal />
      {/* <How_it_Works /> */}
      <Flow_chart />
      <BottomCounter />
      <PartnerFeedback />
      <InstagramCarousal />
      <Faqs />
      <Footer />
    </div>
  );
}

export default HomeComponent;
