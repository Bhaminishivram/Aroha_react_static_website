import React from 'react';  
import {Link} from 'react-router-dom';
const Blog_EltActivity = () => {
    return ( 
    
        <div>
        <div id="site-content">
            <div id="page-header">
                <div class="container">
                    <div class="row">
                        <div class="page-title">
                            <h2 class="title">Top 10 ETL Activities in DW Projects</h2>
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
                                            <a href="blog-business.html">
                                                <img src="images/blog/9.jpg" alt="images" />
                                            </a>
                                        </div>
                                        <div class="entry-header">
                                            <span class="entry-time">May 19, 2020</span>
                                            <h2 class="entry-title">Top 10 ETL Activities in DW Projects</h2>
                                            <div class="entry-meta">
                                                <span>By</span>
                                                <span class="entry-categories"><Link to="#">Rajesh Kumar Shanmugam</Link></span>
                                                <span class="entry-comments-link"><Link to="#">3</Link></span>
                                            </div>
                                        </div>                                       
                                        <div class="entry-content">
                                            <p>As an ETL developer, its important to see what are the various touch points in the ETL world. 
                                                You may be working in any one of the touch point in the ETL stream line. In a DW system,
                                                 most of the time we spend in analyzing the source data and creating ETL jobs to populate
                                                  your data warehouse. Lets discuss about what 10 things you should know to become very 
                                                  effective ETL resource for an organization.</p>
                                           <bold>1. Sources</bold>
                                           <p>What is your source? Understand the nature of the source. Is the source data is in RDBMS, 
                                               if so what is the credentials you have. How to get the meta data information about the source.
                                                Sample data from source etc. If its the flat file or XML or Web Service / API, understand the
                                                 structure of the data you are getting. If the source in NOSQL Db, then understand the basics 
                                                 of how to retrieve the information</p>
                                            <p class="box-readmore ">
                                                <a href="https://www.linkedin.com/pulse/top-10-etl-activities-dw-projects-rajesh-
                                                shanmugam/?trackingId=oNJTNck9RNJ%2F46O9z1w0MA%3D%3D" class="text-left" target="blank">Read More</a>
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
       
        </div>

     );
}
 
export default Blog_EltActivity;
