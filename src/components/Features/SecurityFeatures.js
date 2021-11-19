import React from 'react';
import SecurityFeaturesItem from './SecurityFeaturesItem';

export default function SecurityFeatures(){
    return (
      <section className="h_security_area">
        <div className="container">
          <div className="hosting_title security_title text-center">
            <h2 className="wow fadeInUp" data-wow-delay="0.2s">
              <h2>What We Offer</h2>
            </h2>
          </div>
          <div className="row">
            <SecurityFeaturesItem
              itemClass="pr_70"
              image="3dTour.png"
              Title="3D Virtual Tour"
              pText="3D virtual tours within the App or using VR headset by paying a visit to our office or agents"
            />
            <SecurityFeaturesItem
              itemClass="pl_70"
              image="imageSearch.png"
              Title="Image Search"
              pText="Image search makes serching easy by letting you upload a photo of any building and helps you identify whether it is available for sale or rent. It also gives a list of similar listings"
            />
            <SecurityFeaturesItem
              itemClass="pr_70"
              image="nearbyPOI.png"
              Title="Nearby POI & Services"
              pText="To help you make a decision buying or renting a property based on location, all the listings have nearby POI like schools, tourism, highway and cafes"
            />
            <SecurityFeaturesItem
              itemClass="pl_70"
              image="filters.png"
              Title="Filter & Sort listings"
              pText="Filter listings per location, real estate agent, and amenties like electricity, Wi-Fi, Water, Heating system as well as sort listing per price, availability date and location"
            />
          </div>
        </div>
      </section>
    );
}
