import React from "react";
import arcadeIcon from "../../images/icons/arcade.png";
import { Link } from "react-router-dom";

function SixthSection() {
    return (
        <div>
            <section className="sixth-heghlight-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="left-side-wrapper col-sm-12 col-md-6">
                            <div className="left-side-container">
                                <div className="top-logo-wrapper">
                                    <div className="logo-wrapper">
                                        <img src={arcadeIcon} />
                                    </div>
                                </div>
                                <div className="description-wraper white">
                                    Agent 8 is a small hero on a big mission.
                                </div>
                                <div className="links-wrapper">
                                    <ul>
                                        <li>
                                            <Link to="/play-now">
                                                Play now<sup>2</sup>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/learn-about-apple-arcade">
                                                Learn about Apple Arcade
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="right-side-wrapper col-sm-12 col-md-6">
                            <div className="right-side-container">
                                <div className="title-wraper">
                                    Apple Card Monthly Installments
                                </div>
                                <div className="description-wraper">
                                    Pay for your next iPhone over time,
                                    interest-free with Apple Card.
                                </div>
                                <div className="links-wrapper">
                                    <ul>
                                        <li>
                                            <Link to="">Learn more</Link>
                                        </li>
                                        <li>
                                            <Link to="">Apply now</Link>
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

export default SixthSection;
