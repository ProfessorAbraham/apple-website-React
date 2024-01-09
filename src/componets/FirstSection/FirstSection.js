import React from "react";

function FirstSection() {
    return (
        <section class="first-hightlight-wrapper">
            <div class="container">
                <div class="new-alert">New</div>

                <div class="title-wraper bold black">iPad Pro</div>

                <div class="links-wrapper">
                    <ul>
                        <li>
                            <a href="">Learn more</a>
                        </li>
                        <li>
                            <a href="">Order</a>
                        </li>
                    </ul>
                </div>

                <div class="ipod-caption row">
                    <div class="col-sm-12 col-md-6 text-md-right">
                        iPad Pro available starting 3.25
                    </div>
                    <div class="col-sm-12 col-md-6 text-md-left">
                        Magic Keyboard coming in May
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FirstSection;
