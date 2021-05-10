import React from 'react'; 
import {Link} from "react-router-dom" ;

const Blog_visulization = () => {
    return (  
         
        <div id="site-content">
        <div id="page-header">
            <div class="container">
                <div class="row">
                    <div class="page-title">
                        <h2 class="title">Data Analyst / Database Developer -- Secrets To Shine</h2>
                    </div>
                    <div id="page-breadcrumbs">            
                        <nav class="breadcrumb-trail breadcrumbs">
                            <h2 class="trail-browse">You are here:</h2>
                            <ul class="trail-items">
                                <li class="trail-item trail-begin">Blog Details</li>
                                <li class="trail-item trail-end"><Link to  ="/blog">/Back</Link></li>
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
                                        <Link to="blog-database.html">
                                            <img src="images/blog/b5.jpg" alt="images" />
                                        </Link>
                                    </div>
                                    <div class="entry-header">
                                        <span class="entry-time">August 19, 2017</span>
                                        <h2 class="entry-title">When you offer Visualization Analysis?</h2>
                                        <div class="entry-meta">
                                            <span>By</span>
                                            
                                           
                                            <span class="entry-categories"><Link to="#">Rajesh Kumar Shanmugam</Link></span>
                                            <span class="entry-comments-link"><Link to="#">3</Link></span>
                                        </div>
                                    </div>                                       
                                    <div class="entry-content">
                                        <p>Feeding a person who is hungry always makes both parties very happy. So, selling visualization to
                                             companies which currently don't have an Dashboards gives us more probability for success and 
                                             acceptance.</p>
                                    <blockquote>
                                        <p>If you come across any customer who have the following pain points, your value on the visualization 
                                            will give a better ROI.</p></blockquote>
                                    <p>If they already have the Dashboards , what are the principles they follow to build Dashboards? 
                                       If they don't have any principles or process in the team, you have a opportunity to make a difference.</p>
                                    </div>
                                </div>
                            </article>
                            <p class="box-readmore ">
                                <a href="https://www.linkedin.com/pulse/when-you-offer-visualization-analysis-rajesh-shanmugam/"  
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
 
export default Blog_visulization;