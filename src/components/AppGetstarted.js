import React from "react";
import Reveal from "react-reveal";
const AppGetstarted = () => {
  return (
    <section className="get_started_area" style={{ background: `white` }}>
      <div className="shap one"></div>
      <div className="shap two"></div>
      <div className="shap one three"></div>
      <div className="shap two four"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center">
            <Reveal bottom cascade>
              <div className="get_content">
                {/* <h2 className="f_400 f_p wow fadeInLeft" data-wow-delay="0.2s">
                We use visualization to help you choose your home
                </h2> */}
                <h2
                  className="f_700 f_p f_size_40 l_height50 mb_20 wow fadeInLeft"
                  data-wow-delay="0.3s"
                >
                Using VR and AR tours to help you choose your home
                </h2>
                <p
                  className="f_400 f_p mb_40 wow fadeInLeft"
                  data-wow-delay="0.4s"
                >
                 we aim to have the most complete list of properties for rent and buy in Tanzania 
                  and reduce realtor's (dalali) fees by connecting customers and landlords
                  directly.
                </p>
                <p
                 className="f_400 f_p mb_40 wow fadeInLeft"
                  data-wow-delay="0.6s"
                >
                  We give you smart tools and resources to help you
                  shop smarter for your next home.
                </p>
                <a
                  href=".#"
                  className="app_btn app_btn_one wow fadeInLeft"
                  data-wow-delay="0.5s"
                >
                  <img src={require("../img/home7/google_icon.png")} alt="" />
                  Play Store
                </a>
                <a
                  href=".#"
                  className="app_btn app_btn_two wow fadeInLeft"
                  data-wow-delay="0.6s"
                >
                  <i className="fab fa-apple"></i>App Store
                </a>
              </div>
            </Reveal>
          </div>
          <div className="col-lg-6 text-right">
            <Reveal effect="fadeInRight" duration={2200}>
              <img src={require("../img/home7/iPhoneX2.png")} alt="" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppGetstarted;
