import React from 'react'; 

const MyServices = () => {
    return ( 
        <div class="">
        <section class="services pt-100 pb-50" id="services">
            <div class="container">
               <div class="row">
                  <div class="col-xl-6 mx-auto text-center">
                     <div class="section-title mb-100">
                        {/* <!-- <p>what i can do</p> --> */}
                        <h4>my services</h4>
                     </div>
                  </div>
               </div>
               <div class="row">
                  <div class="col-lg-4 col-md-6">
                     {/* <!-- Single Service --> */}
                     <div class="single-service">
                        <i class="fa fa-laptop"></i>
                        <h4>Consulting Services</h4>
                        <p>Our approach is to focus on the client strategy and goals, 
                           so we equip the business with reliable solutions to achieve 
                           enduring outcomes </p>
                        <a href="consulting.html">Read More</a>
                     </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                     {/* <!-- Single Service --> */}
                     <div class="single-service">
                        <i class="fa fa-gears"></i>
                        <h4>Knowledge Services</h4>
                        <p>Aroha is an innovator in the development and delivery of practical
                            learning programs for the global corporate 
                            community</p>
                        <a href="knowledge.html">Read More</a>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                     {/* <!-- Single Service --> */}
                     <div class="single-service">
                        <i class="fa fa-briefcase"></i>
                        <h4>Managed Services</h4>
                        <p>Aroha is your perfect partner to take you through the process of outsourcing your IT and providing you with the right methodologies and support systems to reduce cost.</p>
                        <a href="projectService.html">Read More</a> 
                    </div>
                  </div>
                
               </div>
            </div>
         </section>
    </div>
     );

}
 
export default MyServices;