import React, { Component } from "react";

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm=(e)=>{
    console.log("e-data", e)
  }

  render() {
    // const {name, email, subject, message, emailStatus} = this.state;
    return (
      <section className="contact_info_area sec_pad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              {/* <div className="contact_info_item">
                <h6 className="f_p f_size_20 t_color3 f_500 mb_20">
                  Office Address
                </h6>
                <p className="f_400 f_size_15">
                  P.O Box 434 Warioba St. Mikocheni, Dar Es Salaam
                </p>
              </div> */}
              {/* <div className="contact_info_item">
                <h6 className="f_p f_size_20 t_color3 f_500 mb_20">
                  Contact Info
                </h6>
                <p className="f_400 f_size_15">
                  <span className="f_400 t_color3">Phone:</span>{" "}
                  <a href="tel:3024437488">(+255) 000 000 968</a>
                </p>
                <p className="f_400 f_size_15">
                  <span className="f_400 t_color3">Fax:</span>{" "}
                  <a href="tel:3024437488">(+222) 100 200 300</a>
                </p>
                <p className="f_400 f_size_15">
                  <span className="f_400 t_color3">Email:</span>{" "}
                  <a href="mailto:saasland@gmail.com">instadalali@hudumabomba.com</a>
                </p>
              </div> */}
            </div>
            <div className="contact_form col-lg-9">
              <h2 className="f_p f_size_22 t_color3 f_600 l_height28 mb_40">
                Leave a Message
              </h2>
              <form
                  onSubmit={this.submitForm}
                  className="contact_form_box"
                  method="get"
                  id="contactForm"
                >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group text_box">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group text_box">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group text_box">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group text_box">
                      <textarea
                        onChange={this.handleChange}
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        placeholder="Enter Your Message . . ."
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button 
                  className="app_btn wow fadeInLeft" 
                  onClick={this.submitForm}>
                  Send Message
                </button>
              </form>
              {/* {emailStatus ? emailStatus : null} */}
              <div id="success">Your message succesfully sent!</div>
              <div id="error">
                Opps! There is something wrong. Please try again
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contacts;

