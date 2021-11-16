import React, {Component} from 'react';

class SecurityFeaturesItem extends Component{
    render(){
        let{itemClass, image, Title, pText} = this.props;
        return (
          <div className="col-lg-6">
            <div className={`media h_security_item ${itemClass}`}>
              <img src={require("../../img/home-security/" + image)} alt="" />
              <div className="media-body">
                <h4 style={{ color: `white` }}>{Title}</h4>
                <p style={{ color: `white` }}>{pText}</p>
              </div>
            </div>
          </div>
        );
    }
}

export default SecurityFeaturesItem;