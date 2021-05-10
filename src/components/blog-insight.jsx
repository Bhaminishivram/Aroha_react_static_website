import React from 'react'; 
import {Link} from "react-router-dom"; 

const Blog_insight = () => {
    return (  
        <div id="site-content">
            <div id="page-header">
                <div class="container">
                    <div class="row">
                        <div class="page-title">
                            <h2 class="title">Insight, Visualization and Analytics</h2>
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
                                            <Link to="/blog-single">
                                                <img src="images/blog/7.jpg" alt="images" />
                                            </Link>
                                        </div>
                                        <div class="entry-header">
                                            <span class="entry-time">April 7, 2016</span>
                                            <h2 class="entry-title">Insight, Visualization and Analytics</h2>
                                            <div class="entry-meta">
                                                <span>By</span>
                                                
                                               
                                                <span class="entry-categories"><Link to="#">Rajesh Kumar Shanmugam</Link></span>
                                                <span class="entry-comments-link"><Link to="#">3</Link></span>
                                            </div>
                                        </div>                                      
                                        <div class="entry-content">
                                            <p>I come across people who use Insight, Visualization and Analytics; to mean the same thing. Are they all really one and the 
                                                 same? I wonder how we can differentiate these three things within an Organization, especially for developers and business 
                                                 stake holders. Here is my take on this.....</p>
                                            <blockquote><p>Insight comes when we understand an event in a business and the impact of that event with facts. 
                                                        An event (for eg: credit card transaction) is a normal event which we expect to happen every second if
                                                       one is running a retail organization. Sending wrong products against a customer order is considered as 
                                                       wrong operational event, the impact on this event is not know when it happens. But both are events according 
                                                       to a business. After careful analysis on the subsequent transactions from that customer who received the wrong
                                                      products will give us insight on what to expect when a wrong operational event occurs. Insight comes to business 
                                                      with more detailed level of analysis of various transactions. By enabling Adhoc reports on certain important data 
                                                      sets through various filter mechanisms allows us to get an Insight of business data. Insight gives us the ability 
                                                      to know what to expect at an operational level as well as the Impact at organizational level.</p></blockquote>
                                            {/* <!-- <p>Visualization tools allow us to see data in Aggregation / summarized way at various contextual levels.
                                                  We can use different types of charts to see different perspectives of a business. Heat map gives a visual to know the level
                                                  of activity using colors. Pareto chart provides view which enables business to see 80: 20 formula for certain business data. 
                                                   Time Series analysis uses the bar and line charts to make them more effective. Every type of analysis we require in a business, 
                                                   we can represent it in a visual way. By making use of interaction between these charts makes a business user more powerful to get 
                                                   the answers with ease. In the coming future, businesses would want to see things as a story in the form of a movie/ animation clip
                                                    to get the message required rather than running reports or dashboards.</p>
                                            <p>Analytics (Machine Learning / Advanced Analysis / Predictive analysis) is the predictive score we get based on the statistical model. The model is built based on the historical events (similar); be it sales, returns, complaints etc. It provides us the probability of what's going to happen next. Any subsequent event can be visualized based on the past set of activities through various algorithms. Predicting the probability of a customer to accept the offer you provide is part of Customer Analytics. Any perspective of a business can be predicted by understanding a detailed level transactional Analysis</p> --> */}
                                            <p>Detailed Insight leads you to visualize your business better. Both insight and strong visualization provides 
                                                the path to predict the future!</p>
                                        </div>
                                    </div>
                                </article>
                                <p class="box-readmore ">
                                    <a href="https://www.linkedin.com/in/rajesh-shanmugam-12930b1/detail/recent-activity/posts/"  
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
 
export default Blog_insight;