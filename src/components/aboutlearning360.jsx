
import React from 'react'; 
import Accountant from "../images/accountant.jpg" ;
import View from "../images/view.jpg";
import Learning from "../images/learning.jpg";

const AboutLearning360 = () => {
    return (  
        <div id="site-content">
           
        <div id="page-body">
    
            <div class="flat-row pad-top60px pad-bottom20px parallax">
                <div class="container">
                    <div class="row center">
                        <div class="col-lg-12">
                        <div class="col-md-8 col-md-offset-2 col-sm-12">
                            <h2 class="h2-heading">About Learning360.AI Platform</h2>
                            <div class="title text-justify">
                            <p>This platform allows to see all different perspective of learning.
                                 As we focus mainly on existing workforce and upcoming workforce as our audience, 
                                 we are going to see it from following four perspectives.</p><br/>
                            </div>
                        </div>  
                    </div>
                    </div>
                    <div class="blog-shortcode blog-grid">
                       <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <article class="hentry">
                                    <div class="entry-header">
                                        <ul class="d"><b>
                                         <li>Industry / Domain</li>  </b> 
                                        </ul>
                                        <div class="flat-divider d20px"></div>
                                        <ul class="d"><b>
                                            <li>Profession & Application</li></b>
                                        </ul>
                                        <div class="flat-divider d20px"></div>
                                        <ul class="d"><b>
                                           <li>Economy Impact (Personal, Organizational)</li> </b>
                                        </ul>
                                        <div class="flat-divider d20px"></div>
                                        <ul class="d"><b>
                                          <li>Community Impact (Personal, Family & Community)</li>  </b>
                                        </ul>
                                    </div>
                                </article>
                            </div>
                            <div class="col-md-6">
                                <article class="hentry">
                                    <div>
                                            <img src={Learning} alt="images" width="350px" />
                                       
                                    </div>
                                </article>
                            </div>
                        </div>
    
                        </div>
                    </div>
                </div>
            </div>
    
         
    
            <div class="flat-row pad-bottom20px parallax">
                <div class="container">
                    <div class="row center">
                                <div class="col-lg-12">
                                    <div class="col-md-8 col-md-offset-2 col-sm-12">
                                    <div class="text-container-1 text-justify">
                                        <h4>Vision of Learning 360 platform</h4>
                                        <p>Making sense of why we are doing the job. 
                                            Realizing the direction of our journey and seeing the impact we 
                                             bring into world. With the profession we choose (Accountant, Marketing,
                                              Mentor and Nurse) and how we apply our knowledge and skill to ease the 
                                              business and improve the customer’s satisfaction with our service.
                                        </p>
                                    </div> 
                                      
                                    </div> 
                                </div>
                    </div>
                </div>
            </div>
    
            <div class="flat-row pad-top10px pad-bottom20px parallax">
                <div class="container">
                    <div class="row center">
                        <div class="col-lg-12">
                            <div class="col-md-8 col-md-offset-2 col-sm-12">
                           
                                <div class="text-container-1 text-justify">
                                    <h4>Mission of Learning 360 Platform</h4>
                                 <p>One Step at a time, add more and more professions in our platform so that we all realize 
                                    the purpose of our jobs and purpose of lives.Spread the joy of complete understanding of 
                                     what we are trying to accomplish.
                                    </p>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="flat-row pad-top60px pad-bottom60px parallax">
                <div class="container">
                    <div class="row center">
                        <div class="col-lg-12">
                            <div class="col-md-8 col-md-offset-2 col-sm-12">
                            <div class="text-container-1 text-justify">
                                <h4>World Economic Forum Report on Current Workforce</h4>
                                <p>World Economic Form predicts that every employer should train their employees for about 104 days
                                     in next four years so that current employees can serve the organization in next four years.
                                      Otherwise, companies have to let go current workforce and hire new faces, which is costly for
                                     Company, Community and Government.</p>
                                <p>We are hoping and working hard to make this platform will add value to our customers to 
                                    upgrade the current work force and educational institutions to empower students to become a better 
                                    employee for corporate world.<br/></p>
                                <p>Any learner who comes into platform should use different applications to learn different perspectives 
                                    regarding the profession.</p>
                            </div> 
                            <div class="flat-divider d30px"></div>
                            <div class="row">
                                <img src={View} alt="" />
                            </div>
                            <div class="flat-divider d30px"></div>
                            <div class="text-container-1 text-justify">
                                <p>For example, for an accountant profession in a Healthcare enterprise should know the inventory, 
                                    orders, and sales in the pharmacy division of Healthcare system. He / she should have hands on 
                                    experience in accounting packages, platform helps the learner to create order, track order, cancel 
                                    order, modify order, return against the order etc. Once they go through the complete lifecycle of 
                                    what happens in the business, learner gets complete view of the business and what profession he / she 
                                    is playing with in the organization.</p>
                            </div> 
                            <div class="flat-divider d30px"></div>
                            <div class="row">
                                <img src={Accountant} alt="" />
                            </div>
                            <div class="flat-divider d30px"></div>
                            <div class="text-container-1 text-justify">
                                <p>If you need any more information on this platform, please do drop an email to 
                                    <a href="#">contact@aroha.co.in</a></p>
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
 
export default AboutLearning360;