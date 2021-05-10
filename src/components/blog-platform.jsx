import React from 'react'; 
import {Link} from 'react-router-dom'; 


const Blog_platform = () => {
    return (  
       
        <div id="site-content">
        <div id="page-header">
            <div class="container">
                <div class="row">
                    <div class="page-title">
                        <h2 class="title">Importance of Analytics Platform for Small Business</h2>
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
                                        <Link to="blog-business.html">
                                            <img src="images/blog/11.png" alt="images" />
                                        </Link>
                                    </div>
                                    <div class="entry-header">
                                        <span class="entry-time">Nov 23, 2016</span>
                                        <h2 class="entry-title">Importance of Analytics Platform for Small Business</h2>
                                        <div class="entry-meta">
                                            <span>By</span>
                                            <span class="entry-categories"><Link to="#">Rajesh Kumar Shanmugam</Link></span>
                                            <span class="entry-comments-link"><Link to="#">3</Link></span>
                                        </div>
                                    </div>                                     
                                    <div class="entry-content">
                                        <p>The following analysis from a survey will give you an idea of how Analytics platform/services
                                             will help the organizations in the world. Big companies invest more and reap benefits both in
                                             terms insights and foresights. As per the current industry standards decision-making ability, 
                                             if you have the Analytical platform of some sort, you have the following quailities in the 
                                             organization.</p>
                                        <blockquote><p>If you dont have an MIS / BI in place, dont hesitate to try exploring BI with pre 
                                            allocated budget which your organization can spend. I am sure you will reap benifits of taking
                                             a better decisions in every thing you do</p> 
                                         </blockquote>
                                        <p class="box-readmore ">
                                            <a href="https://www.linkedin.com/pulse/importance-analytics-platform-small-business-rajesh-
                                            shanmugam/" class="text-left" target="blank">Read More</a>
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
 
export default Blog_platform;