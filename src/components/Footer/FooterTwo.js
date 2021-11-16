import React, { Component } from "react";
import AboutWidget from "./FooterWidget/AboutWidget";
import SolutionWidget from "./FooterWidget/SolutionWidget";
import TeamWidget from "./FooterWidget/TeamWidget";
import Reveal from "react-reveal/Reveal";
class FooterTwo extends Component {
  render() {
    var { fClass } = this.props;
    let FooterData = this.props.FooterData;
    return (
      <footer
        className={`footer_area footer_area_four f_bg ${fClass}`}
        style={{ background: `#385a5d`, borderTop: `thin solid #999` }}
      >
        <div className="footer_top">
          <div className="container">
            <div className="row">
              {FooterData.CompanyWidget.map((widget) => {
                return (
                  <Reveal effect="fadeInUp" key={widget.id}>
                    <div className="col-lg-3 col-md-6">
                      <div
                        className="f_widget company_widget wow fadeInLeft"
                        data-wow-delay="0.2s"
                      >
                        <a href="index.html" className="f-logo">
                          <span>
                            <img
                              src={require("../../img/instadalali_logo.png")}
                              alt=""
                              style={{
                                width: `100px`,
                                background: `white`,
                                borderRadius: `50%`,
                              }}
                            />
                          </span>
                          <span>
                            <h4 style={{ color: `white` }}>Instadalali</h4>
                          </span>
                        </a>
                        <div className="widget-wrap">
                          <p className="f_400 f_p f_size_15 mb-0 l_height34">
                            <span style={{ color: `white` }}>Email:</span>
                            <a
                              href="#"
                              className="f_400"
                              style={{ color: `white` }}
                            >
                              instadalali@hudumabomba.com
                            </a>
                          </p>
                          <p className="f_400 f_p f_size_15 mb-0 l_height34">
                            <span style={{ color: `white` }}>Phone:</span>
                            <a
                              href="tel:948256347968"
                              className="f_400"
                              style={{ color: `white` }}
                            >
                              +255 000 000 968
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
              <AboutWidget ftitle="About Us" FooterData={FooterData} />
              <SolutionWidget ftitle="Support" FooterData={FooterData} />
              <TeamWidget ftitle="Terms & Conditions" FooterData={FooterData} />
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-5 col-sm-6">
                <p className="mb-0 f_400" style={{ color: `white` }}>
                  {FooterData.copywrite}
                </p>
              </div>
              <div className="col-lg-4 col-md-3 col-sm-6">
                <div className="f_social_icon_two text-center">
                  {FooterData.socialIcon.map((item) => {
                    return (
                      <a href="/" key={item.id}>
                        <i className={item.icon} style={{ color: `white` }}></i>
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <ul className="list-unstyled f_menu text-right">
                  <li>
                    <a href=".#" style={{ color: `white` }}>
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a href=".#" style={{ color: `white` }}>
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default FooterTwo;
