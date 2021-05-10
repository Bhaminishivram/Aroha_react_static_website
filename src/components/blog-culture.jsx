 import React from 'react'; 
 import {Link} from "react-router-dom"; 

 const Blog_culture = () => {
     return (  
        <div id="site-content">
        <div id="page-header">
            <div class="container">
                <div class="row">
                    <div class="page-title">
                        <h2 class="title">Culture in an Enterprise</h2>
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
                                        <Link to="/blog-culture">
                                            <img src="images/blog/2.jpg" alt="images"/>
                                        </Link>
                                    </div>
                                    <div class="entry-header">
                                        <span class="entry-time">June 9, 2017</span>
                                        <h2 class="entry-title">Culture in an Enterprise</h2>
                                        <div class="entry-meta">
                                            <span>By</span>
                                            
                                           
                                            <span class="entry-categories"><Link to="#">Rajesh Kumar Shanmugam</Link></span>
                                            <span class="entry-comments-link"><Link to="#">3</Link></span>
                                        </div>
                                    </div>                                     
                                    <div class="entry-content">
                                        <p>The culture with in the company plays a very important role to make an employee feel good about the
                                             work he / she is doing. Enterprises runs based on mission, vision and values it brings to the eco
                                              system we live in.</p>
                                        <blockquote><p>Enterprises must show the big picture to all employees and reiterate the same in every
                                             opportunity. I came across many organizations which does not tell the mission and vision of the 
                                             company, even employees don't care in many places. This actually makes employees clue less when 
                                             they are faced with choosing between two different options to take a decision. When you have two
                                              options while taking decision, your company values and vision helps you quantify which decision is 
                                              better for the company.</p></blockquote>
                                        <p>Every employee in the organization should be aware of the why company was born in the first place. 
                                            As a corporate, its important to explain the purpose of companies existence and how it impacts the
                                             eco system. Feel good factor is very important in the long run, the sense of satisfaction happens
                                              because you know that you are part of your company's mission which made an impact in the world we
                                               live in.</p>
                                        <p>As an employee we can wear multiple hats in a job, but as a company we cannot change missions once in 
                                            six months. Roots of the company stays with the mission and vision and diversify our focus to 
                                            peripheries of our core which gives us more value and long lasting impact..</p>
                                    
                                        <p class="box-readmore ">
                                            <a href="https://www.linkedin.com/pulse/culture-enterprise-rajesh-shanmugam/"  class="text-left"  
                                            target="blank">Read More</a>
                                        </p>
                                    </div>
                                </div>
                            </article>
                            <hr/>
                            
                        </div>
                       </div>
                    </div>
                </div>
            </div> 
            </div>

      );
 }
  
 export default Blog_culture;