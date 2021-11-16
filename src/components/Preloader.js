import React, { Component } from "react";

export default class Preloader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      removed: false
    };
  }

  componentDidMount() {
    window.onload = () => {
      this.setState({ loaded: true });
      setTimeout(() => {
        this.setState({ remove: true });
      }, 900);
    };
  }

  render() {
    return this.state.removed ? null : (
      <div id="preloader">
        <div
          id="ctn-preloader"
          className={
            ("ctn-preloader",
            {
              loaded: this.state.loaded,
            })
          }
        >
          <div className="animation-preloader">
            <div className="spinner" />
            <div className="txt-loading">
              <span data-text-preloader="I" className="letters-loading">
                I
              </span>
              <span data-text-preloader="n" className="letters-loading">
                n
              </span>
              <span data-text-preloader="s" className="letters-loading">
                s
              </span>
              <span data-text-preloader="t" className="letters-loading">
                t
              </span>
              <span data-text-preloader="a" className="letters-loading">
                a
              </span>
              <span data-text-preloader="d" className="letters-loading">
                d
              </span>
              <span data-text-preloader="a" className="letters-loading">
                a
              </span>
              <span data-text-preloader="l" className="letters-loading">
                l
              </span>
              <span data-text-preloader="a" className="letters-loading">
                a
              </span>
              <span data-text-preloader="l" className="letters-loading">
                l
              </span>
              <span data-text-preloader="i" className="letters-loading">
                i
              </span>
            </div>
            <p className="text-center">Loading</p>
          </div>
          <div className="loader">
            <div className="row">
              <div className="col-3 loader-section section-left">
                <div className="bg" />
              </div>
              <div className="col-3 loader-section section-left">
                <div className="bg" />
              </div>
              <div className="col-3 loader-section section-right">
                <div className="bg" />
              </div>
              <div className="col-3 loader-section section-right">
                <div className="bg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
