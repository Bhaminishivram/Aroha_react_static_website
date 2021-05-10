import React from 'react';  
import {Link} from 'react-router-dom';
const Blog_Storytelling = () => {
    return ( 
          <div>
        <div id="site-content">
        <div id="page-header">
            <div class="container">
                <div class="row">
                    <div class="page-title">
                        <h2 class="title">Finding Story / 360 in Data sets</h2>
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
                                        <Link to="/blog-business">
                                            <img src="images/blog/10.png" alt="images"/>
                                        </Link>
                                    </div>
                                    <div class="entry-header">
                                        <span class="entry-time">April 15, 2020</span>
                                        <h2 class="entry-title">Finding Story / 360 in Data sets</h2>
                                        <div class="entry-meta">
                                            <span>By</span>
                                            <span class="entry-categories"><Link to="#">Rajesh Kumar Shanmugam</Link></span>
                                            <span class="entry-comments-link"><Link to="#">3</Link></span>
                                        </div>
                                    </div>                                      
                                    <div class="entry-content">
                                        <p>A story has five important elements based on many story telling experts. In our data visualization / 
                                            analytical projects we can link those elements to our real world of business events.</p>
                                        <blockquote/><p>1.characters (Dimensions of your business)<br/>
                                            2.the setting (Function of your business)<br/>
                                            3.the plot (Events in your business)<br/>
                                            4.the conflict (disturbances / problem / cross roads)<br/>
                                            5.the resolution (Solution / happy or improvement required)</p>
                                        {/* <!-- <p>So in my view, development of Dashboards should be part of any IT with in the organization (self or outsourced). Business executives can interact with in the dashboard by using filters and navigational techniques to know the stats which helps them to take better decisions. Building Dashboards based on the role and what kind of stories you can tell using those should be the key drivers to build a great one.</p> --> */}
                                        <p class="box-readmore ">
                                            <a href="https://www.linkedin.com/pulse/finding-story-360-data-sets-rajesh-shanmugam
                                            /?trackingId=45XEAeyPXUE%2F40N0l0CnJQ%3D%3D" class="text-left" target="blank">Read More</a>
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
 
export default Blog_Storytelling;