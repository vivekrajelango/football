import { Modal } from "bootstrap";
import React, { useContext, useState } from "react";
import { DataContext } from "../data/DataProvider";
import ModalData from "./Modal";

const Services = () => {
    const value = useContext(DataContext);
    // const [about] = value.metaValue;
    return (
        <div>
            <section className="w3l-index2" id="services">
                <div className="features-main py-5 text-center">
                    <div className="container py-lg-3">
                        <div className="heading mx-auto">
                            <h3 className="head">LET'S DO THIS</h3>
                            <p className="mb-4">Time to get cracking on your scores!</p>
                        </div>
                        <div className="row features">
                            <div className="col-lg-4 col-md-6 feature-grid">
                                <a>
                                    <div className="feature-body service1">
                                        <div className="feature-img">
                                            <span className="fa fa-bar-chart" aria-hidden="true"></span>
                                        </div>
                                        <div className="feature-info mt-4">
                                            <h3 className="feature-titel mb-2">Registration & Payments</h3>
                                            <p className="feature-text">Open online registration for players and teams. Collect payments online.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 feature-grid">
                                <a >
                                    <div className="feature-body service2">
                                        <div className="feature-img">
                                            <span className="fa fa-laptop icon-fea" aria-hidden="true"></span>
                                        </div>
                                        <div className="feature-info mt-4">
                                            <h3 className="feature-titel mb-2">Scheduling - League, Season, Tournament</h3>
                                            <p className="feature-text">Generate schedules. Automate scores, standings and brackets. Publish to the website and mobile app.
                                            </p>

                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 feature-grid">
                                <a >
                                    <div className="feature-body service3">
                                        <div className="feature-img">
                                            <span className="fa fa-line-chart" aria-hidden="true"></span>
                                        </div>
                                        <div className="feature-info mt-4">
                                            <h3 className="feature-titel mb-2">Team Rostering & Mobile</h3>
                                            <p className="feature-text">Form and manage teams with ease. Provide a fully functional mobile app
                                            </p>
                                            <div className="hover">
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 feature-grid">
                                <a >
                                    <div className="feature-body service4">
                                        <div className="feature-img">
                                            <span className="fa fa-envelope-o" aria-hidden="true"></span>
                                        </div>
                                        <div className="feature-info mt-4">
                                            <h3 className="feature-titel mb-2">Field Management</h3>
                                            <p className="feature-text">Streamline field scheduling and eliminate confusion. Open for booking.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 feature-grid">
                                <a>
                                    <div className="feature-body service5">
                                        <div className="feature-img">
                                            <span className="fa fa-signal icon-fea" aria-hidden="true"></span>
                                        </div>
                                        <div className="feature-info mt-4">
                                            <h3 className="feature-titel mb-2">Communication</h3>
                                            <p className="feature-text">Deliver the right message to the right people at the right time. Automate notifications.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 feature-grid">
                                <a>
                                    <div className="feature-body service6">
                                        <div className="feature-img">
                                            <span className="fa fa-paint-brush icon-fea" aria-hidden="true"></span>
                                        </div>
                                        <div className="feature-info mt-4">
                                            <h3 className="feature-titel mb-2">Player & Family Portal</h3>
                                            <p className="feature-text">One portal for all family members. Player profile, stats, progress reports, access to docs.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <ModalData /> */}
        </div>
    )
}

export default Services;