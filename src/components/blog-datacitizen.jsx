import React from 'react';  
import {Link} from 'react-router-dom';

const Blog_DataCitizen = () => {
    return (  
        <div id="site-content">
        <div id="page-header">
            <div class="container">
                <div class="row">
                    <div class="page-title">
                        <h2 class="title">Data Citizen in an Enterprise</h2>
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
                                        <a href="blog-dataScience.html">
                                            <img src="images/blog/b1.jpg" alt="images" />
                                        </a>
                                    </div>
                                    <div class="entry-header">
                                        <span class="entry-time">April 26, 2019</span>
                                        <h2 class="entry-title">Data Citizen in an Enterprise</h2>
                                        <div class="entry-meta">
                                            <span>By</span>
                                            
                                           
                                            <span class="entry-categories"><Link to="#">Rajesh Kumar Shanmugam</Link></span>
                                            <span class="entry-comments-link"><Link to="#">3</Link></span>
                                        </div>
                                    </div>                                       
                                    <div class="entry-content">
                                        <p>Any person who relies on data to take any decision or a person who understands the origination of 
                                            data or how business uses the data to enrich value to customers or a person who prepares the data
                                             so that end users consume the data can be called as Data Citizens. The more the information you have 
                                             about your business, data / events, the better you look in the world of business. You sound better,
                                              you talk value and you become a no-nonsense person at work. Even with all the latest technologies 
                                              available at our disposal, most of our enterprises still lag to get the entire view of their business 
                                              in all perspectives.</p>
                                         <blockquote>
                                           <p>Recent trend shows that how mono-crop spoils the quality of soil and yields less nutritional 
                                           value which also cost more compared to multi-crop agriculture. If we consider our DATA as SOIL what are 
                                           we doing in the current environment to make sure multiple business lines get access to inherit more 
                                           value out of our DATA.</p>
                                        </blockquote>
                                    </div>
                                </div>
                            </article>
                            <p class="box-readmore ">
                                <Link to="https://www.linkedin.com/pulse/data-citizen-enterprise-rajesh-shanmugam/" class="text-left" 
                                 target="blank">Read More</Link>
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
 
export default Blog_DataCitizen;