import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import Portfolio3cols from "../components/Portfolios/Portfolio3grid";
import AppGetstarted from "../components/AppGetstarted";
import FooterTwo from "../components/Footer/FooterTwo";
import FooterData from "../components/Footer/FooterData";
import SecurityFeatures from "../components/Features/SecurityFeatures";

const BlogGridPage = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar
        slogo="sticky_logo"
        mClass="menu_four"
        nClass="w_menu ml-auto mr-auto"
      />
      <AppGetstarted />
      <SecurityFeatures />
      <Portfolio3cols />
      <FooterTwo FooterData={FooterData} />
    </div>
  );
};
export default BlogGridPage;
