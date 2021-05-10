import React from 'react'; 
import {Link} from "react-router-dom"; 

const Blog_dataScience = () => {
    return (  
  
        <div id="site-content">
            <div id="page-header">
                <div class="container">
                    <div class="row">
                        <div class="page-title">
                            <h2 class="title">Data Science Team @ enterprises</h2>
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
                                            <Link to="/blog-dataScience">
                                                <img src="images/blog/3.jpg" alt="images" />
                                            </Link>
                                        </div>
                                        <div class="entry-header">
                                            <span class="entry-time">Feb. 17, 2017</span>
                                            <h2 class="entry-title">Data Science Team @ enterprises</h2>
                                            <div class="entry-meta">
                                                <span>By</span>
                                                
                                               
                                                <span class="entry-categories"><Link to="#">Rajesh Kumar Shanmugam</Link></span>
                                                <span class="entry-comments-link"><Link to="#">3</Link></span>
                                            </div>
                                        </div>                                       
                                        <div class="entry-content">
                                            <p>Lets see what is the meaning of Science. Its a study of the structure and behavior of the physical and natural world through 
                                                observation and experiment.</p>
                                            <blockquote><p>Relate the definition to the data & business world. People who are in DATA area for a long time knows that only 
                                                raw data cannot solve all the business problems. Its the knowledge you have about your data in both technology and business 
                                                world makes the difference.</p></blockquote>
                                            <p>A good database developer not necessarily be a good Data Architect. To become a good Data Architect you should have both business 
                                                knowledge and in depth knowledge on how to depict the data in terms of entities and relationships. Some time we call Data Modeling 
                                                is an Art rather than a Science. As a good data modeler then you should be a good in business, process and technology to create 
                                                scalable and flexible data model. Similarly to be very effective resource in Data Science team, you should have both data processing
                                                and statistical knowledge. In my perspective activities in Data Science are divided into two parts. One Part is Data Analysis which is
                                                70% (Data cleansing, Data integration, Visualization) and 30% of the work is related to Statistical Modeling (predict the future based 
                                                on an event / transaction).</p>
                                            {/* <!-- <p>Data Science team should have few different people with different skill set to make it more effective. Person who understand the mission and vision of the company (Strategic thinker), in what area of business we typically have more issues (Subject Matter Expert), Data Governance Personal who understands the Value Chain Diagram of Data (Origination, Transformation, Utilization), Data Architect (who understands the typical issues and techniques to overcome), Statistical Specialist (who knows how to build statistical models, train and Validate the models), Business Process Reengineering Specialist who can see the data in each step of the process and how it optimizes the current process. These are some of the important set of people who can enhance the Data Science team to add more Value.</p>
                                            <p>One of the Charter for Data Science team is to find the relation between real world data points (economy, GDP, employment data), events in real world and those events affects the business transactions (current or future). Going one step ahead and telling or predicting the impact on our business and proactively helping companies to change the direction is what we expect from Data Science team.</p>
                                            <p>If Data Science team expects a Software Requirement Document, then its prone for failure. No process will be able to monitor 
                                              this team. The objective of the team is, to add tangible $ value and untangible business value. Customer satisfaction percentage, 
                                              employee satisfaction percentage, Partner satisfaction percentage, share holder returns will be some of the indicators based on which 
                                              business measure the success for this team.</p> --> */}
                                        </div>
                                    </div>
                                </article>
                                <p class="box-readmore ">
                                    <a href="https://www.linkedin.com/pulse/data-science-team-enterprises-rajesh-shanmugam/" 
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
 
export default Blog_dataScience;