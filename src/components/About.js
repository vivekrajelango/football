import React from "react";

const About = () => {
    return (
        <div>
            <section className="w3l-index5" id="about">
                <div className="new-block py-5">
                    <div className="container py-lg-5">
                        <div className="middle-section text-center">
                            <div className="section-width">
                                {/* <h2>We are the largest Business expert in Digital &amp; Marketing Agency</h2> */}
                                <h2>You need to run your soccer efficiently</h2>
                                <p className="mt-3">A beautiful scoreboard that runs in your browser. Great for streaming and live broadcasts. <br/>Free !!! No download !!! No install :-)</p>
                            </div>
                            <div className="history-info mt-5">
                                <div className="position-relative">
                                    <img src={process.env.PUBLIC_URL + '/score.png'} className="img-fluid rounded video-popup-image" alt="video-popup"/>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;