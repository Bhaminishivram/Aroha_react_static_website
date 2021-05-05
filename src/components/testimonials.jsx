import React from 'react'; 

const Testimonials = () => {
    return (  
         
        <div class="flat-row bg-f7f7f7 pad-top0px pad-bottom0px">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="section-testimonial">
                        <div class="title-section style_2">
                            <h2 class="title text-center">What our<br />clients say about us</h2>
                        </div>
                        <div class="flat-divider d20px"></div>
                        <div class="carousel slide" data-ride="carousel" id="quote-carousel" data-interval="5000">
                         
                            <div class="carousel-inner text-center">
                            
                                <div class="item active">
                                    <blockquote>
                                        <div class="row">
                                            <div class="col-sm-8 col-sm-offset-2">
                                                <p class="text-justify">Aroha was instrumental in providing us the expertise and scale required to delivery successfully on key BI/DW projects. They have a very customer friendly resourcing model with the right experience levels and skill set that can help a spectrum of companies.!</p>
                                                <div class="right">
                                                    <p class="name">Vijay </p>
                                                    <p class="small">CEO, D Cube Analytics</p>
                                                </div>
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>
                               
                                <div class="item">
                                    <blockquote>
                                        <div class="row">
                                            <div class="col-sm-8 col-sm-offset-2">
                                                <p class="text-justify">Aroha Technologies, ably led by Rajesh, has been an excellent partner for us in our data warehousing projects. The company has supplied us with well-trained engineers who also have excellent work ethic and analytical skills. </p>
                                                <div class="right">
                                                    <p class="name">Ravi joshi</p>
                                                    <p class="small">Founder, CEO, Keystone Logic</p>
                                                </div>
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>
                              
                                <div class="item">
                                    <blockquote>
                                        <div class="row">
                                            <div class="col-sm-8 col-sm-offset-2">
                                                <p class="text-justify">Aroha Technologies has been a trusted partner of Activecubes. They have done an excellent job in addressing our BI/DW staffing needs as they understand this space very well. Their consultants have always delivered as expected or exceeded expectations in some cases...</p>
                                                <div class="right">
                                                    <p class="name">Kiran Ventrapragada</p>
                                                    <p class="small">Executive Director, Activecubes</p>
                                                </div>
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>
                            </div>
                            {/* <!-- Bottom Carousel Indicators --> */}
                            <ol class="carousel-indicators">
                                <li data-target="#quote-carousel" data-slide-to="0" class="active"><img class="img-responsive "  alt="" />
                                </li>
                                <li data-target="#quote-carousel" data-slide-to="1"><img class="img-responsive"  alt="" />
                                </li>
                                <li data-target="#quote-carousel" data-slide-to="2"><img class="img-responsive"  alt="" />
                                </li>
                            </ol>
        
                            {/* <!-- Carousel Buttons Next/Prev --> */}
                            <a data-slide="prev" href="#quote-carousel" class="left carousel-control"><i class="fa fa-chevron-left"></i></a>
                            <a data-slide="next" href="#quote-carousel" class="right carousel-control"><i class="fa fa-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="image-single">
                        <img src="images/img-single/img-clients.jpg" alt="images" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default Testimonials;