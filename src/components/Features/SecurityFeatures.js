import React from 'react';
import SecurityFeaturesItem from './SecurityFeaturesItem';

const SecurityFeatures =()=>{
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
              image="security_1.png"
              Title="3D Virtual Tour"
              pText="3D virtual tours within the App or using VR headset by paying a visit to our office or agents"
            />
            <SecurityFeaturesItem
              itemClass="pl_70"
              image="security_2.png"
              Title="Image Search"
              pText="Image search makes serching easy by letting you upload a photo of any building and helps you identify whether it is available for sale or rent. It also goves a list of similar things"
            />
            <SecurityFeaturesItem
              itemClass="pr_70"
              image="security_3.png"
              Title="Nearby POI & Services"
              pText="To help you make a decision buying or renting a property based on location, all the listings have nearby POI like schools, tourism, highway and cafes"
            />
            <SecurityFeaturesItem
              itemClass="pl_70"
              image="security_4.png"
              Title="Filter & Sort listings"
              pText="Filter listings per location, real estate agent, and amenties like electricity, Wi-Fi, Water, Heating system as well as sort listing per price, availability date and location"
            />
            {/* <SecurityFeaturesItem
              itemClass="pl_70"
              image="security_3.png"
              Title="Send Requests"
              pText="Can send a request for free for our real estate consultants and proprieatary algorithm to personally curate a list that fits your nees. A notification is sent when your request is processed."
            />
            <SecurityFeaturesItem
              itemClass="pl_70"
              image="security_3.png"
              Title="What's App About"
              pText="Easily find a house or an apartment and keep millions of listings right at your fingertips with the Instadalali app."
            /> */}
          </div>
        </div>
      </section>
    );
}
export default SecurityFeatures;