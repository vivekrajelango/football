import React from "react";
import LiveScore from "./LiveScore";

const Banner=()=>{
    return(
        <div>
            <div className="banner">
                <div className="content py-5">
                    <div className="container py-lg-4">
                    <div className="row align-items-center">
                        <div className="col-lg-5 content-left">
                        <h3 className="text-white">Live scores update</h3>
                        <p className="mt-3 mb-lg-5 mb-4 text-white">Finding a new way forward - Together</p>
                        <a href="#about" className="btn btn-primary btn-style">Get Started</a>
                        </div>
                        <div className="col-lg-7 content-photo mt-lg-0 mt-5">
                        <LiveScore />
                        {/* <img src={process.env.PUBLIC_URL + '/main.jpg'} className="img-fluid" alt="main image" /> */}
                        </div>
                    </div>
                    <div className="clear"></div>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default Banner;