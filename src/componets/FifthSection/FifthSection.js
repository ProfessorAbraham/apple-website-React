import React from "react";
import applelogo from "../../images/icons/apple-tv-logo.png";
import banker from "../../images/home/banker.png";
import watchseries5 from "../../images/icons/watch-series5-logo.png";
import { Link } from "react-router-dom";

function FifthSection() {
    return (
        <div>
            <section className="fifth-heghlight-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="left-side-wrapper col-sm-12 col-md-6">
                            <div className="left-side-container">
                                <div className="top-logo-wrapper">
                                    <div className="logo-wrapper">
                                        <img src={applelogo} />
                                    </div>
                                </div>

                                <div className="tvshow-logo-wraper">
                                    <img src={banker} />
                                </div>

                                <div className="watch-more-wrapper">
                                    <Link to="#">
                                        Watch now on the Apple TV App
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="right-side-wrapper col-sm-12 col-md-6">
                            <div className="right-side-container">
                                <div className="top-logo-wrapper">
                                    <div className="logo-wrapper">
                                        <img src={watchseries5} />
                                    </div>
                                </div>
                                <div className="description-wraper">
                                    With the Always-On Retina display.
                                    <br />
                                    You’ve never seen a watch like this.
                                </div>
                                <div className="links-wrapper">
                                    <ul>
                                        <li>
                                            <Link to="/learn-more">
                                                Learn more
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/buy">Buy</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FifthSection;
