import React from 'react'; 
import {Link} from "react-router-dom"; 

const Blog_datamoderization = () => {
    return ( 
         
        <div id="site-content">
            <div id="page-header">
                <div class="container">
                    <div class="row">
                        <div class="page-title">
                            <h2 class="title">Modernization of Analytical / Reporting Platform</h2>
                        </div>
                        <div id="page-breadcrumbs">            
                            <nav class="breadcrumb-trail breadcrumbs">
                                <h2 class="trail-browse">You are here:</h2>
                                <ul class="trail-items">
                                    <li class="trail-item trail-begin">Blog Details</li>
                                    <li class="trail-item trail-end"><Link to="/blog">/Back</Link></li>
                                </ul>
                            </nav>           
                        </div>
                    </div>
                </div>
            </div>

            <div id="page-body">
                <div class="container">
                    <div class="row">
                        <div class="blog-single">
                            <div class="main-content">
                                <article class="post">
                                    <div class="entry-wrapper">
                                        <div class="entry-cover">
                                            <Link to="/blog-dataScience">
                                                <img src="images/blog/b1.jpg" alt="images" />
                                            </Link>
                                        </div>
                                        <div class="entry-header">
                                            <span class="entry-time"> November 6, 2017</span>
                                            <h2 class="entry-title">Modernization of Analytical / Reporting Platform</h2>
                                            <div class="entry-meta">
                                                <span>By</span>
                                                
                                               
                                                <span class="entry-categories"><Link to="#">Rajesh Kumar Shanmugam</Link></span>
                                                <span class="entry-comments-link"><Link to="#">3</Link></span>
                                            </div>
                                        </div>                                     
                                        <div class="entry-content">
                                            <p>What you can do with data / information? According to research if you take the decision based on the data and your business knowledge (combo) then you perform 2x times better than the gut feel decision. This proves that seeing data in different perspectives will surely add value to you and your business.</p>
                                            <blockquote><p>In the current world of Mobile and automation, data you need should be available in the way 
                                                          you want it. If your current operational or analytical platform is not providing that information 
                                                          on a way you want it, its time for you to think modernization of your Reporting platform.</p>
                                            </blockquote>
                                            <p>Disruption of reporting / visualization platform is here to stay. How we keep our systems adoptable
                                              for newer technologies is the question? You may have a legacy system which provide detail transactional 
                                               data in multiple pages,</p>
                                        </div>
                                    </div>
                                </article>
                                <p class="box-readmore ">
                                    <a href ="https://www.linkedin.com/pulse/modernization-analytical-reporting-platform-rajesh-shanmugam/" 
                                     class="text-left" target="blank">Read More</a>
                                </p>
                                <hr/>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
      );
}
 
export default Blog_datamoderization;