import React from "react";
import { Dropdown, Button } from 'react-bootstrap';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    const changeLanguage = (languageCode) => {
        i18next.changeLanguage(languageCode);
      };

    return (
        <div>
            <footer className="w3l-footer">
                <div className="footer-29 py-5">
                    <div className="container pb-lg-3">
                        <div className="row footer-top-29">
                            <div className="col-md-4 footer-list-29 footer-1 mt-md-4">
                                <h6 className="footer-title-29">Contact Us</h6>
                                <ul>
                                    <li>
                                        <span className="fa fa-phone"></span>
                                        <a href="tel:+44 20 8257 8280"> +44 123 456 7890</a></li>
                                    <li>
                                        <span className="fa fa-envelope-open-o"></span>
                                        <a href="mailto:test@test.co.uk" className="mail">
                                        test@test.co.uk</a></li>
                                </ul>
                                <div className="main-social-footer-29">
                                    <a href="#facebook" className="facebook"><span className="fa fa-facebook"></span></a>
                                    <a href="#twitter" className="twitter"><span className="fa fa-twitter"></span></a>
                                    <a href="#instagram" className="instagram"><span className="fa fa-instagram"></span></a>
                                    <a href="#google-plus" className="google-plus"><span className="fa fa-google-plus"></span></a>
                                    <a href="#linkedin" className="linkedin"><span className="fa fa-linkedin"></span></a>
                                </div>
                            </div>

                            <div className="col-md-4 footer-list-29 footer-4 mt-md-4 mt-5">
                                <h6 className="footer-title-29">Subscribe</h6>
                                <p>Always know what’s happening in the
                                    world of applications. Recieve all
                                    latest post in your inbox.</p>
                            </div>
                            <div className="col-md-4 text-right">
                                <Dropdown>
                                    <Dropdown.Toggle as={Button} size="sm" variant="primary" id="language-dropdown">
                                        {i18next.language}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => changeLanguage('en')}>English</Dropdown.Item>
                                        <Dropdown.Item onClick={() => changeLanguage('it')}>Italiano</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="row bottom-copies">
                            <p className="copy-footer-29 col-lg-12 text-lg-left text-center">© 2023  All rights reserved</p>
                        </div>
                    </div>
                </div>
                {/* <button id="movetop" className="bg-primary" title="Go to top">
                    <span className="fa fa-angle-up"></span>
                </button> */}
            </footer>
        </div>
    )
}

export default Footer;