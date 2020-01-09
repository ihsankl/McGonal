import React, { Component } from 'react'

export default class H7 extends Component {
    render() {
        return (
            <span>
                <section className="fd__subscribe__area bg-image--6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="subscribe__inner">
                                    <h2>Subscribe to our newsletter</h2>
                                    <div id="mc_embed_signup">
                                        <div id="enter__email__address">
                                            <form action="#" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                                                <div id="mc_embed_signup_scroll" className="htc__news__inner">
                                                    <div className="news__input">
                                                        <input type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Enter Your E-mail Address" required />
                                                    </div>

                                                    <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef" tabindex="-1" value="" /></div>
                                                    <div className="clearfix subscribe__btn"><input type="submit" value="Send Now" name="subscribe" id="mc-embedded-subscribe" className="sign__up food__btn" />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </span>
        )
    }
}
