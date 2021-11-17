import React from 'react';
import './WhyPeopleChose.css'
const WhyPeopleChose = () => {
        return (
                <div>
                        <div className="p-lg-5 m">
                       <div className="p-lg-4">
                       <h1>WHY PEOPLE CHOOSE US</h1> 
                       </div>
                       <div className="row">
                           <div className="col-lg-4 align-items-center justify-content-center d-flex flex-column p-lg-4">
                                <div>
                                <h3>180+ Travel Location</h3>
                                <p>We can help people travel 99% Countries among the world</p>
                                </div>
                                <div>
                                <h3>Cross Platform Booking</h3>
                                <p>People can book from any platform</p>
                                </div>
                                
                           </div>
                           <div className="col-lg-4">
                                <img className="img-fluid" src="https://i.ibb.co/WsCjyzD/music-g0ac6a5696-1280.png" />
                           </div>
                           <div className="col-lg-4 align-items-center justify-content-center d-flex flex-column p-lg-4">
                           <div>
                                <h3>Tourism Mobile APP</h3>
                                <p>Our mobile app allows you book any places even smoothly</p>
                                </div>
                                <div>
                                <h3>100% positive Rating</h3>
                                <p>Our customers have provide there best feedbacks</p>
                                </div>
                                <div>
                                <h3>Get tickets within hours</h3>
                                <p>You can get tickets within hours of confirming</p>
                                </div>
                           </div>
                       </div>
              </div>
                        <div className="footer-top p-lg-5">
                           <div className="p-lg-3">
                           <h1>Are you interested to getting Daily offers and Discounts ?</h1>
                           
                           </div>
                           <div className="p-lg-3">
                           <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Enter your email..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                <div class="input-group-append">
                                <button class="btn btn-outline-dark color" type="button" id="button-addon2">Subscribe for Newsletter</button>
                                </div>
                         </div>
                           </div>

                        </div>
         </div>
        );
};

export default WhyPeopleChose;