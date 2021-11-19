import React from 'react';
import config from '../utils/config';
export default function ActionTwo(){
    return(
        <section className="erp_call_action_area">
                <div className="erp_action_content text-center">
                    <img src={require("../img/erp-home/rocket.png")} alt=""/>
                    <h3>Experience the power of AI and visualization</h3>
                    <p>Using All-in-one<span>app</span>when shopping for your next home</p>
                    <a target="_blank" rel="noopener noreferrer"  href={config.download.default} className="er_btn">Get Started Free</a>
                </div>
        </section>
    )
}