import React from 'react';  
import {Link} from 'react-router-dom';
const Blog = () => {
    return (    
        <div id="site-content">
        <div class="container">
            <div id="page-body">
                <div class="flat-row pad-top100px pad-bottom80px">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12  text-center">
                                <div class="flat-tabs">
                                    <ul class="menu-tabs">
                                        <li class="active"><Link to="#">Blogs</Link></li>
                                        <li><Link to="#">Books</Link></li>
                                        {/* <!-- <li><a href="#">Video's</a></li> -->
                                        <!-- <li><a href="#">Testimonials</a></li> --> */}
                                    </ul>
                                    <div class="content-tab">
                                        <div class="content-inner">
                                            <div class="flat-row bg-f4f4f4 pad-top60px pad-bottom60px">
                                                <div class="container">
                                                    <div class="row">
                                                        
                                                        <div class="col-md-3 col-sm-6">
                                                            <div class="imagebox">
                                                                <div class="box-wrapper">
                                                                    <div class="box-image">
                                                                        <Link to="/blog-EltActivity"><img src="images/blog/9.jpg" alt="images"/></Link>
                                                                    </div>
                                                                    
                                                                    <div class="box-header">
                                                                        <h3 class="box-title">
                                                                            <Link to ="#">Top 10 ETL Activities in DW Projects</Link>    
                                                                        </h3>
                                                                    </div>
                                                                    <div class="box-content">
                                                                        <div class="box-desc">As an ETL developer, its important to see what are the various touch 
                                                                        points in the ETL world. You may be working in any one of the touch point in the ETL stream 
                                                                        line. In a DW.</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                       
                                                        <div class="col-md-3 col-sm-6">
                                                            <div class="imagebox">
                                                                <div class="box-wrapper">
                                                                    <div class="box-image">
                                                                        <Link to="/blog-storytelling"><img src="images/blog/10.png" alt="images"/></Link>
                                                                    </div>
                                                                   
                                                                    <div class="box-header">
                                                                        <h3 class="box-title">
                                                                            Finding Story / 360 in Data sets
                                                                        </h3>
                                                                    </div>
                                                                    <div class="box-content">
                                                                        <div class="box-desc">A story has five important elements based on many story telling experts. 
                                                                        In our data visualization / analytical projects we can link those elements to our real world of
                                                                         business events.</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-3 col-sm-6"> 
                                                            <div class="imagebox">
                                                                <div class="box-wrapper">
                                                                    <div class="box-image">
                                                                        <Link  to="/blog-platform"><img src="images/blog/11.png" alt="images" /></Link>
                                                                    </div>
                                                                   
                                                                    <div class="box-header">
                                                                        <h3 class="box-title">
                                                                            Importance of Analytics Platform for Small Business

                                                                        </h3>
                                                                    </div>
                                                                    <div class="box-content">
                                                                        <div class="box-desc">The following analysis from a survey will give you an idea of how Analytics
                                                                         platform/services will help the organizations in the world. Big companies invest more and reap 
                                                                         benefits both in terms insights.</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-3 col-sm-6">
                                                            <div class="imagebox">
                                                                <div class="box-wrapper">
                                                                    <div class="box-image">
                                                                        <Link to="/blog-datacitizen"><img src="images/blog/b1.jpg" alt="images"/></Link>
                                                                    </div>
                                                                    
                                                                    <div class="box-header">
                                                                        <h3 class="box-title">
                                                                            <Link to="#">Data Citizen in an Enterprise</Link>    
                                                                        </h3>
                                                                    </div>
                                                                    <div class="box-content">
                                                                        <div class="box-desc">Any person who relies on data to take any decision or a person who
                                                                         understands the origination of data or how business uses the data to enrich value tota
                                                                          can be called as Data Citizens.</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row pad-top60px">
                                                        <div class="col-md-3 col-sm-6">
                                                            <div class="imagebox">
                                                                <div class="box-wrapper">
                                                                    <div class="box-image">
                                                                        <Link to="/blog-conversational"><img src="images/blog/b2.jpg" alt="images"/></Link>
                                                                    </div>
                                                                    
                                                                    <div class="box-header">
                                                                        <h3 class="box-title">
                                                                            Conversational BI
                                                                        </h3>
                                                                    </div>
                                                                    <div class="box-content">
                                                                        <div class="box-desc">BI evolved to answer management questions on an adhoc basis. 
                                                                        A report which we create on the fly allowed MIS team to provide valid / required data 
                                                                        for decision makers. We used interactive reports and Dashboards to get the job done by
                                                                         using Drill.</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-3 col-sm-6">
                                                            <div class="imagebox">
                                                                <div class="box-wrapper">
                                                                    <div class="box-image">
                                                                        <Link to="/blog-datamoderization"><img src="images/blog/b3.jpg" alt="images"/></Link>
                                                                    </div>
                                                                    
                                                                    <div class="box-header">
                                                                        <h3 class="box-title">
                                                                            Modernization of Analytical / Reporting Platform
                                                                        </h3>
                                                                    </div>
                                                                    <div class="box-content">
                                                                        <div class="box-desc">What you can do with data / information? According 
                                                                        to research if you take the decision based on the data and your business 
                                                                        knowledge (combo) then you perform 2x times better than the gut feel 
                                                                        decision. </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-3 col-sm-6">
                                                            <div class="imagebox">
                                                                <div class="box-wrapper">
                                                                    <div class="box-image">
                                                                        <Link to="/blog-database"><img src="images/blog/b4.jpg" alt="images"/></Link>
                                                                    </div>
                                                                    
                                                                    <div class="box-header">
                                                                        <h3 class="box-title">
                                                                            Data Analyst / Database Developer -- Secrets To Shine 
                                                                        </h3>
                                                                    </div>
                                                                    <div class="box-content">
                                                                        <div class="box-desc">When you join a company or a project, understand 
                                                                        the mission and vision of the company and for what purpose they are 
                                                                        building this application or how this application. </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>                                   
                                                        <div class="col-md-3 col-sm-6">
                                                            <div class="imagebox">
                                                                <div class="box-wrapper">
                                                                    <div class="box-image">
                                                                        <Link to="/blog-visulization"><img src="images/blog/b5.jpg" alt="images"/></Link>
                                                                    </div>
                                                                    
                                                                    <div class="box-header">
                                                                        <h3 class="box-title">
                                                                            When you offer Visualization Analysis?
                                                                        </h3>
                                                                    </div>
                                                                    <div class="box-content">
                                                                        <div class="box-desc">If you come across any customer who have the
                                                                         following pain points, your value on the visualization will give a
                                                                          better ROI.</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row pad-top60px">
                                                        <div class="col-md-3 col-sm-6">
                                                            <div class="imagebox">
                                                                <div class="box-wrapper">
                                                                    <div class="box-image">
                                                                        <Link to="/blog-single"><img src="images/blog/1.jpg" alt="images"/></Link>
                                                                    </div>
                                                                    
                                                                    <div class="box-header">
                                                                        <h3 class="box-title">
                                                                            Principles of Dashboard Design   
                                                                        </h3>
                                                                    </div>
                                                                    <div class="box-content">
                                                                        <div class="box-desc"><p>Every thing we do in the world have some 
                                                                             part of design principles. Many companies produce the similar 
                                                                             products with a touch of difference in the way its designed.</p>
                                                                             </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-3 col-sm-6">
                                                            <div class="imagebox">
                                                                <div class="box-wrapper">
                                                                    <div class="box-image">
                                                                        <Link to="/blog-culture"><img src="images/blog/2.jpg" alt="images" /></Link>
                                                                    </div>
                                                                    
                                                                    <div class="box-header">
                                                                        <h3 class="box-title">
                                                                            Culture in an Enterprise  
                                                                        </h3>
                                                                    </div>
                                                                    <div class="box-content">
                                                                        <div class="box-desc">The culture with in the company plays a very 
                                                                        important role to make an employee feel good about the work he / she
                                                                         is doing.</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-3 col-sm-6">
                                                            <div class="imagebox">
                                                                <div class="box-wrapper">
                                                                    <div class="box-image">
                                                                        <Link to="/blog-dataScience"><img src="images/blog/3.jpg" alt="images"/></Link>
                                                                    </div>
                                                                    
                                                                    <div class="box-header">
                                                                        <h3 class="box-title">
                                                                            <Link to="#">Data Science Team @ enterprises</Link>    
                                                                        </h3>
                                                                    </div>
                                                                    <div class="box-content">
                                                                        <div class="box-desc">Lets see what is the meaning of Science. 
                                                                        Its a study of the structure and behavior of the physical and natural 
                                                                        world through observation and experiment.</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-3 col-sm-6">
                                                            <div class="imagebox">
                                                                <div class="box-wrapper">
                                                                    <div class="box-image">
                                                                        <Link to="/blog-datalayer"><img src="images/blog/5.png" alt="images" /></Link>
                                                                    </div>
                                                                    
                                                                    <div class="box-header">
                                                                        <h3 class="box-title">
                                                                            <Link to="#">Data Layer for Visual Analytics</Link>    
                                                                        </h3>
                                                                    </div>
                                                                    <div class="box-content">
                                                                        <div class="box-desc">When companies sell Visual Analysis tools, they 
                                                                         use standard excel or csv data (in many cases) to show case the ability 
                                                                         of the tool.</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row pad-top60px">
                                                        <div class="col-md-3 col-sm-6">
                                                            <div class="imagebox">
                                                                <div class="box-wrapper">
                                                                    <div class="box-image">
                                                                        <Link to="/blog-rio"><img src="images/blog/6.jpg" alt="images" /></Link>
                                                                    </div>
                                                                    
                                                                    <div class="box-header">
                                                                        <h3 class="box-title">
                                                                            Ways of calculating ROI from BIDW implementations 
                                                                        </h3>
                                                                    </div>
                                                                    <div class="box-content">
                                                                        <div class="box-desc">Most of us read that, about 75% of implementations 
                                                                        don't give the ROI in BIDW related projects. When I first started to work 
                                                                        in BIDW projects, team is not able to prove the ROI.</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-3 col-sm-6">
                                                            <div class="imagebox">
                                                                <div class="box-wrapper">
                                                                    <div class="box-image">
                                                                        <Link to="/blog-insight"><img src="images/blog/7.jpg" alt="images" /></Link>
                                                                    </div>
                                                                    
                                                                    <div class="box-header">
                                                                        <h3 class="box-title">
                                                                            Insight, Visualization and Analytics 
                                                                        </h3>
                                                                    </div>
                                                                    <div class="box-content">
                                                                        <div class="box-desc">I come across people who use Insight, Visualization  
                                                                        and Analytics; to mean the same thing. Are they all really one and the
                                                                         same?</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-3 col-sm-6">
                                                            <div class="imagebox">
                                                                <div class="box-wrapper">
                                                                    <div class="box-image">
                                                                        <Link to="/blog-business"><img src="images/blog/8.jpg" alt="images" /></Link>
                                                                    </div>
                                                                    
                                                                    <div class="box-header">
                                                                        <h3 class="box-title">
                                                                            Can Business Executives develop Dashboards? 
                                                                        </h3>
                                                                    </div>
                                                                    <div class="box-content">
                                                                        <div class="box-desc">Most of the Dashboard software companies tell 
                                                                         the businesses that Business executives can develop their own 
                                                                         Dashboards or they can un earth the patterns in the data with out any 
                                                                         IT help.</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                     
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                         <div class="content-inner">
                                            <div class="row">
                                                <div class="col-md-4 col-md-offset-2">
                                                    <Link to="/books"><div class="imagebox">
                                                        <div class="box-wrapper">
                                                            <div class="box-image">
                                                                <img src="images/blog/book.jpg" alt="images" />
                                                            </div>
                                                            <div class="box-header">
                                                                <h3 class="box-title">
                                                                    <Link to="/books">ABC of Datawarehousing</Link>    
                                                                </h3>
                                                            </div>
                                                            <div class="box-content text-size">
                                                                <div class="box-desc">Every thing we do in the world have some part of 
                                                                design principles. </div>
                                                                <p class="box-readmore">
                                                                    <Link to="/books">Read More</Link>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </Link>
                                                </div> 
                    
                                                 <div class="col-md-4 ">
                                                    <Link to="/books1"><div class="imagebox">
                                                        <div class="box-wrapper">
                                                            <div class="box-image">
                                                                <img src="images/blog/book1.jpg" alt="images" />
                                                            </div>
                                                            <div class="box-header">
                                                                <h3 class="box-title">
                                                                    <Link to="/books1">Book2</Link>    
                                                                </h3>
                                                            </div>
                                                            <div class="box-content text-size">
                                                                <div class="box-desc">For those looking to invest in the growth of your 
                                                                business or create.</div>
                                                                <p class="box-readmore">
                                                                    <Link to="books1.html">Read More</Link>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </Link>
                                                </div>
                    
                                            </div>
                                        </div>

                                        {/* <!-- <div class="content-inner">
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <a href="video1.html"><div class="imagebox">
                                                        <div class="box-wrapper">
                                                            <div class="box-image">
                                                                <img src="images/blog/1.jpg" alt="images">
                                                            </div>
                                                            <div class="box-header">
                                                                <h3 class="box-title">
                                                                    <a href="video1.html">Environment in our office</a>    
                                                                </h3>
                                                            </div>
                                                            <div class="box-content text-size">
                                                                <div class="box-desc">Every thing we do in the world have some part of design principles. </div>
                                                            </div>
                                                        </div>
                                                    </div></a>
                                                </div>
                    
                                                <div class="col-md-3">
                                                    <a href="video2.html"><div class="imagebox">
                                                        <div class="box-wrapper">
                                                            <div class="box-image">
                                                                <img src="images/blog/2.jpg" alt="images">
                                                            </div>
                                                            <div class="box-header">
                                                                <h3 class="box-title">
                                                                    <a href="video2.html">Investment Projects</a>    
                                                                </h3>
                                                            </div>
                                                            <div class="box-content text-size">
                                                                <div class="box-desc">For those looking to invest in the growth of your business or create.</div>
                                                            </div>
                                                        </div>
                                                    </div></a>
                                                </div>
                    
                                                <div class="col-md-3">
                                                    <a href="video3.html"><div class="imagebox">
                                                        <div class="box-wrapper">
                                                            <div class="box-image">
                                                                <img src="images/blog/3.jpg" alt="images">
                                                            </div>
                                                            <div class="box-header">
                                                                <h3 class="box-title">
                                                                    <a href="video3.html">Restructuring Plans</a>    
                                                                </h3>
                                                            </div>
                                                            <div class="box-content text-size">
                                                                <div class="box-desc">Adapt your business to the new market conditions. Redefine your strategy.</div>
                                                            </div>
                                                        </div>
                                                    </div></a>
                                                </div>

                                                <div class="col-md-3">
                                                    <a href="video4.html"><div class="imagebox">
                                                        <div class="box-wrapper">
                                                            <div class="box-image">
                                                                <img src="images/blog/3.jpg" alt="images">
                                                            </div>
                                                            <div class="box-header">
                                                                <h3 class="box-title">
                                                                    <a href="video3.html">Restructuring Plans</a>    
                                                                </h3>
                                                            </div>
                                                            <div class="box-content text-size">
                                                                <div class="box-desc">Adapt your business to the new market conditions. Redefine your strategy.</div>
                                                            </div>
                                                        </div>
                                                    </div></a>
                                                </div>
                    
                                            </div>
                                        </div>                           --> */}
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

   
</div>

    );
}
 
export default Blog;