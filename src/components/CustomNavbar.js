import React, { Component } from "react";
import { Link,
  // NavLink
} from "react-router-dom";
import Sticky from "react-stickynode";
import config from "../utils/config";

class CustomNavbar extends Component {
  render() {
    const { mClass, nClass, cClass, slogo, hbtnClass } = this.props;
    return (
      <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
        <header className="header_area">
          <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
            <div className={`container ${cClass}`}>
              <Link className={`navbar-brand ${slogo}`} to="/">
                <img
                  src={require("../img/logo.png")}
                  alt=""
                  style={{
                    width: `100px`,
                    background: `white`,
                    borderRadius: `50%`,
                  }}
                />
                <img
                  src={require("../img/logo.png")}
                  alt="logo"
                  style={{ width: `103px` }}
                />
              </Link>
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="menu_toggle">
                  <span className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                  <span className="hamburger-cross">
                    <span></span>
                    <span></span>
                  </span>
                </span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                  <li className="nav-item">
                    {/* <NavLink title="Home" className="nav-link" to="/">
                      Home
                    </NavLink> */}
                  </li>
                  {/* <li className="nav-item">
                    <NavLink title="Pricing" className="nav-link" to="/Contact">
                      Contact
                    </NavLink>
                  </li> */}
                </ul>
                <a
                  className={`btn btn_hover ${hbtnClass} wow fadeInRight`}
                  data-wow-delay="0.9s"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={config.download.default}
                  style={{
                    background: `#fff`,
                    color: `#385a5d`,
                    padding: `12px 20px`,
                    border: `thin solid #385a5d`,
                  }}
                >
                  Get started
                </a>
              </div>
            </div>
          </nav>
        </header>
      </Sticky>
    );
  }
}

export default CustomNavbar;
