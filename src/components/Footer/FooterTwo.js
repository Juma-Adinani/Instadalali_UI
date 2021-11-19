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
        className={`bg_color footer_area footer_area_four ${fClass}`}
        
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
                        <a href=".#" className="f-logo">
                          <span>
                            <img
                              src={require("../../img/logo.png")}
                              alt=""
                              style={{
                                width: `80px`,
                                background: `white`,
                                borderRadius: `50%`,
                                marginLeft: `20px`, 
                                paddingTop:4,paddingBottom:4,
                              }}
                            />
                          </span>
                          <span>
                            <h4 className="text-white">Instadalali</h4>
                          </span>
                        </a>
                        <div className="widget-wrap">
                          <p className="f_400 f_p f_size_15 mb-0 l_height34 text-white">
                            <span className="text-white">Email:</span>
                            <a
                              href={`mailto:${FooterData.contact.email}`}
                              className="f_400 text-white"
                              
                            >
                              {FooterData.contact.email}
                            </a>
                          </p>
                          <p className="f_400 f_p f_size_15 mb-0 l_height34 text-white">
                            <span className="text-white">Phone:</span>
                            <a
                              href={`tel:${FooterData.contact.phone}`}
                              className="f_400 text-white"
                            >
                              {FooterData.contact.phoneFormated}
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
                      <a href={item.url} key={item.id}>
                        <i className={item.icon} style={{ color: `white` }}></i>
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <ul className="list-unstyled f_menu text-right">
                  <li>
                    <a href="/tnc" className="text-white">
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a href="/privacy" className="text-white">
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
