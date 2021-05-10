import React from 'react'; 
import {Link} from "react-router-dom"; 

const Blog_Conversational = () => {
    return (  

        <div id="site-content">
        <div id="page-header">
            <div class="container">
                <div class="row">
                    <div class="page-title">
                        <h2 class="title">Conversational BI</h2>
                    </div>
                    <div id="page-breadcrumbs">            
                        <nav class="breadcrumb-trail breadcrumbs">
                            <h2 class="trail-browse">You are here:</h2>
                            <ul class="trail-items">
                                <li class="trail-item trail-begin">Blog Details</li>
                                <li class="trail-item trail-end"><Link to="blog.html">/Back</Link></li>
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
                                        <span class="entry-time"> February 5, 2019</span>
                                        <h2 class="entry-title">Conversational BI</h2>
                                        <div class="entry-meta">
                                            <span>By</span>
                                            
                                           
                                            <span class="entry-categories"><Link to="#">Rajesh Kumar Shanmugam</Link></span>
                                            <span class="entry-comments-link"><Link to="#">3</Link></span>
                                        </div>
                                    </div>                                      
                                    <div class="entry-content">
                                        <p>BI evolved to answer management questions on an adhoc basis. A report which we create on the
                                           fly allowed MIS team to provide valid / required data for decision makers. We used interactive reports
                                            and Dashboards to get the job done by using Drill down, graphs and KPI's.</p>
                                        <blockquote><p>As technology is changing on a very fast pace, with better computational ability, there are more opportunities to process and present the data in a more meaning full way.</p></blockquote>
                                        <p>As NLP (Natural Language Process) is becoming very effective in recent times, idea of conversational
                                           BI is a reality in our enterprises. Mangers can ask a question in a voice form and fetch the required 
                                           data through visual form or voice form.</p>
                                    </div>
                                </div>
                            </article>
                            <p class="box-readmore ">
                                <a href="https://www.linkedin.com/pulse/conversational-bi-rajesh-shanmugam/" class="text-left" 
                                target="blank">Read More</a>
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
 
export default Blog_Conversational;