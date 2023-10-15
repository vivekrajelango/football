import React from "react";

const Contact = (props) => {
    const {
        iframeSource = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.4229332327673!2d-0.07793142338005357!3d51.50545637181292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603438b65db49%3A0x9e78421a085a6f2d!2sTower%20Bridge!5e0!3m2!1sen!2suk!4v1697371680990!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    } = props;

    return (
        <div>
            <section className="w3l-contact" id="contact">
                <div className="contact-infubd py-5">
                    <div className="container py-lg-3">
                        <div className="contact-grids row">
                            <div className="col-lg-6 contact-left">
                                <div className="partners">
                                    <div className="cont-details">
                                        <h5 className="mb-3">Contact Us</h5>
                                        {/* <p className="mt-3 mb-4">Hi there, We are available 24/7 by fax, e-mail or by phone. Drop us line so we can talk
                                            futher about that.</p> */}
                                        <h6 className="mb-4"> For more info or inquiry please feel free to get in touch with us.</h6>
                                    </div>
                                    <div className="hours">
                                        <h6 className="mt-4">Address:</h6>
                                        <p> Test address<br/> Test address2<br/>City<br/> ABC 123</p>
                                        <h6 className="mt-4">Contact:</h6>
                                        <p className="margin-top"><a href="tel:+(21) 255 999 8899">(+44) 120 345 6789</a></p>
                                        <h6 className="mt-4">Email:</h6>
                                        <p> <a href="mailto:test@test.co.uk">
                                            test@test.co.uk</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-lg-0 mt-5 contact-right">
                                <form action="#" method="post" className="signin-form">
                                    <div className="input-grids">
                                        <div className="form-group">
                                            <input type="text" name="w3lName" id="w3lName" placeholder="Your Name*" className="contact-input" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" name="w3lSender" id="w3lSender" placeholder="Your Email*" className="contact-input" required="" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="w3lSubect" id="w3lSubect" placeholder="Subject*" className="contact-input" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <textarea name="w3lMessage" id="w3lMessage" placeholder="Type your message here*" required=""></textarea>
                                    </div>
                                    <div className="text-right">
                                        <button className="btn btn-primary btn-style">Send Message</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                        <div className="map mt-5 pt-md-5">
                            <h5>Our location</h5>
                            <div dangerouslySetInnerHTML={{__html: iframeSource}}></div>
                        </div>
                    </div>
                </div></section>
            <section className="w3l-index4">
                <div className="section-four gotocontact py-5">
                    <div className="container py-xl-5 py-lg-3">
                        <div className="row align-items-center">
                            <div className="col-xl-7 col-lg-6">
                                <div className="heading white">
                                    <h3>Time to get cracking on your scores!</h3>
                                    {/* <p className="mt-4">LET'S DO THIS</p> */}
                                </div>
                            </div>
                            <div className="offset-xl-1 offset-0 col-xl-3 col-lg-6 text-lg-right mt-5 mt-lg-0">
                                <a className="btn btn-light btn-outline-style py-3" href="#contact" title="Contact Us!"><span className="fa fa-location-arrow mr-2"></span>Contact Us!</a>
                            </div>
                        </div>
                    </div>
                </div></section>
        </div>
    )
}

export default Contact;