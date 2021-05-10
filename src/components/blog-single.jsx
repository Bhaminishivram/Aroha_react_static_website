import React from 'react'; 
import {Link} from "react-router-dom"; 

const Blog_single = () => {
    return ( 
         
        <div id="site-content">
        <div id="page-header">
            <div class="container">
                <div class="row">
                    <div class="page-title">
                        <h2 class="title">Principles of Dashboard Design</h2>
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
                                        <Link to ="blog-single.html">
                                            <img src="images/blog/1.jpg" alt="images" />
                                        </Link>
                                    </div>
                                    <div class="entry-header">
                                        <span class="entry-time">July 7, 2017</span>
                                        <h2 class="entry-title">Principles of Dashboard Design</h2>
                                        <div class="entry-meta">
                                            <span>By</span>
                                            
                                           
                                            <span class="entry-categories"><Link to="#">Rajesh Kumar Shanmugam</Link></span>
                                            <span class="entry-comments-link"><Link to="#">3</Link></span>
                                        </div>
                                    </div>                                       
                                    <div class="entry-content">
                                        <p>Every thing we do in the world have some part of design principles. Many companies produce the similar 
                                         products with a touch of difference in the way its designed. I came across multiple quotes on Design.
                                          I found the following two which are relevant for Visualization Design.</p>
                                        <blockquote><p>Based on my experience, I came out with few pointers to keep in mind while working in
                                             Visualization Projects which will give our customers maximum value for their money.</p></blockquote>
                                        <p>Design is an opportunity to continue telling the story, not just to sum everything up. (Tate Linden)</p>
                                        <p>Design is the conscious effort to impose a meaningful order. (Victor Papanek)</p>
                                        <h3>Key Points about blog</h3>
                                        <p>1. Personalization is the key to get attention of end users when it comes to Visualization.<br/>
                                            2. Role Based approach allows us to personalize the data for Decision Makers.<br/>
                                            3. Story Telling is the an important element in the way we present data.<br/>
                                            4. Context Based Information allows to show specifics to understand facts.<br/>
                                            5. Have an opportunity visual to show where they can focus to improve the ROI.<br/>
                                            6. Less clicks to get to the point of interest for end user.<br/>
                                        </p>
                                        <p class="box-readmore ">
                                            <a href="https://www.linkedin.com/pulse/principles-dashboard-design-rajesh-shanmugam/" 
                                             class="text-left" target="blank">Read More</a>
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
 
export default Blog_single;