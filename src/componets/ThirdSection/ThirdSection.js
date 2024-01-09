import React from "react";
import { Link } from "react-router-dom";
function ThirdSection() {
    return (
        <div>
            <section className="third-hightlight-wrapper">
                <div className="container">
                    <div className="title-wraper bold">iPhone 11 Pro</div>

                    <div className="description-wrapper">
                        Pro cameras. Pro display. Pro performance.
                    </div>

                    <div className="price-wrapper">
                        From $24.95/mo. or $599 with trade‑in.
                    </div>

                    <div className="links-wrapper">
                        <ul>
                            <li>
                                <Link to="/learn-more">Learn more</Link>
                            </li>
                            <li>
                                <Link to="/buy">Buy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ThirdSection;
