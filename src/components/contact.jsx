import React from 'react'; 
import {Link} from "react-router-dom";  

const Contact  = () => {
    return ( 
        
        <div id="site-content">
        <div id="page-header">
            <div class="container">
                <div class="row">
                    <div class="page-title">
                        <h2 class="title">Contact Us</h2>
                    </div>
                    <div id="page-breadcrumbs">            
                        <nav class="breadcrumb-trail breadcrumbs">
                            <h2 class="trail-browse">You are here:</h2>
                            <ul class="trail-items">
                                <li class="trail-item trail-end">Contact Us //</li>
                                <li class="trail-item trail-begin"><Link to="home.html">Home</Link></li>
                                
                            </ul>
                        </nav>           
                    </div>
                </div>
            </div>
        </div>

        <div id="page-body">
            <div class="flat-row parallax parallax16 pad-top60px pad-bottom60px">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="iconbox style_3">
                                <div class="box-header">
                                    <div class="box-icon"><i class="fa icons icon-globe"></i></div>
                                    <h4 class="box-title">Corporate Office</h4>
                                </div>
                                <div class="box-content">
                                    <div class="container">
                                    {/* <!-- <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p> --> */}
                                    <p>
                                        38th Cross, 5th Main Rd, 5th Block,<br/> Jayanagar, Bengaluru, Karnataka- <span class="family">560041</span>  
                                    </p>
                                    <p class="box-readmore center">
                                        <a href="https://www.google.com/maps/place/Aroha+Technologies/@12.921666,77.5786711,17z/data=!3m1
                                        !4b1!4m5!3m4!1s0x3bae159e21649569:0xd755f2f76dbf58da!8m2!3d12.921666!4d77.5808598" target="blank">
                                            Get Directions</a>
                                    </p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="iconbox style_3">
                                <div class="box-header">
                                    <div class="box-icon"><i class="fa icons icon-globe"></i></div>
                                    <h4 class="box-title">Digital Services</h4>
                                </div>
                                <div class="box-content">
                                    <div class="container">
                                    {/* <!-- <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p> --> */}
                                    <p>
                                        #70, 2nd Floor, 45th Cross,
                                        8th Block,<br/> Jayanagar,
                                        Bengaluru, Karnataka- <span class="family">560082</span>
                                    </p>
                                    <p class="box-readmore center">
                                        <a href="https://www.google.com/maps/place/12%C2%B055'03.4%22N+77%C2%B034'41.0%22E/@12.9176132,77.5758663,
                                        17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d12.917608!4d77.578055" target="blank">Get Directions</a>
                                    </p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="iconbox style_3">
                                <div class="box-header">
                                    <div class="box-icon"><i class="fa icons icon-diamond"></i></div>
                                    <h4 class="box-title">Looking for a career?</h4>
                                </div>
                                <div class="box-content">
                                    <div class="container">
                                    {/* <!-- <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p> --> */}
                                    <p class="telephone center">
                                        Telephone: <span class="family">8049562349</span><br/>     
                                    </p>
                                    <div class="flat-divider d20px"></div>
                                    <p class="box-readmore center">
                                        <a href="#">career@aroha.co.in</a>
                                    </p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
      );
}
 
export default Contact; 