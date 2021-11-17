import React, { Component } from "react";
import Isotope from "isotope-layout/js/isotope";
import ImagesLoaded from "imagesloaded/imagesloaded";
import Portfolio2griditem from "./Portfolio2griditem";

class Portfolio3grid extends Component {
  state = {
      activeItem: "*",
  };

  componentDidMount() {
    var imgLoad = new ImagesLoaded("#work-portfolio");

    imgLoad.on("progress", function (instance, image) {
      this.iso = new Isotope("#work-portfolio", {
        itemSelector: ".portfolio_item",
        layoutMode: "masonry",
      });
    });
  }
  onFilterChange = (newFilter) => {
    this.setState({ activeItem: newFilter });
    if (this.iso === undefined) {
      this.iso = new Isotope("#work-portfolio", {
        itemSelector: ".portfolio_item",
        layoutMode: "masonry",
      });
    }
    // this.iso.arrange({ filter: newFilter });
    if (newFilter === "*") {
      this.iso.arrange({ filter: `*` });
    } else {
      this.iso.arrange({ filter: `.${newFilter}` });
    }
  };

  onActive = (v) => (v === this.state.activeItem ? "active" : "");

  render() {
    return (
      <section className="portfolio_area sec_pad">
        <div
          clasName="container text-center"
          style={{ width: `100%`, textAlign: `center`, marginBottom: `100px` }}
        >
          <h1>Sample App Screens</h1>
          <p>These are samples of screenshots from the app</p>
        </div>
        <div className="container">
          <div className="row portfolio_gallery mb_30" id="work-portfolio">
            <Portfolio2griditem
              colClass="col-lg-4 col-sm-6 web fashion"
              pImg="Home.jpg"
              ptitle="Available Houses"
              tOne="for rent or"
              tTwo="for Buying"
            />
            <Portfolio2griditem
              colClass="col-lg-4 col-sm-6 develop"
              pImg="House_Details.jpg"
              ptitle="Interior House Design"
              tOne="rent or buy"
            />
            <Portfolio2griditem
              colClass="col-lg-4 col-sm-6 web"
              pImg="House_Map_Details.jpg"
              ptitle="House Map Details"
              tOne="Details to arrive"
              tTwo="to a house"
            />
            <Portfolio2griditem
              colClass="col-lg-4 col-sm-6 fashion"
              pImg="Map_House.jpg"
              ptitle="Inside A House"
              tOne="inside the house to rent"
            />
            <Portfolio2griditem
              colClass="col-lg-4 col-sm-6 ux brand"
              pImg="3d_Virtual_Tour.jpg"
              ptitle="3D VIRTUAL TOUR"
              tOne="By Visiting our offices &"
              tTwo="Using VR HeadSet"
            />
            <Portfolio2griditem
              colClass="col-lg-4 col-sm-6 product"
              pImg="Choose_Location.jpg"
              ptitle="Choose Location"
              tOne="Location filter"
            />
            <Portfolio2griditem
              colClass="col-lg-4 col-sm-6 develop fashion"
              pImg="Take_Photo.jpg"
              ptitle="Take Photo"
              tOne="From your camera"
              tTwo="From Your Gallery"
            />
            <Portfolio2griditem
              colClass="col-lg-4 col-sm-6 brand ux"
              pImg="Preferences.jpg"
              ptitle="Preferences"
              tOne="Sorting & "
              tTwo="Filtering"
            />
           <Portfolio2griditem
              colClass="col-lg-4 col-sm-6 brand web"
              pImg="DalaliProfile.jpeg"
              ptitle="Live Chat"
              tOne="Within"
              tTwo="the app"
            />
          </div>
        </div>
      </section>
    );
  }
}
export default Portfolio3grid;