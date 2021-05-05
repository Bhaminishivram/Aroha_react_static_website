import React from 'react'; 
import Table from "../images/table.JPG"; 
import Upload from "../images/upload.JPG" ; 
import  Flow  from "../images/flow.JPG"; 
import Revenue from "../images/Revenue.JPG";
const Cashflowanalytics = () => {
    return (  

<div id="site-content">
           
           <div id="page-body">
            
               <div class="flat-row pad-top60px pad-bottom60px parallax">
                   <div class="container">
                       <div class="row center">
                           <div class="col-lg-12">
                           <div class="col-md-8 col-md-offset-2 col-sm-12">
                               <h2 class="h2-heading">Cash Flow Analytics</h2>
                               <div class="title text-justify">
                               <p>By loading Daily Book Report, we can provide insights on Customers, Expenses and Time perspectives. 
                                   Once you understand the insights, you get the knowledge which will help you to optimize your operations.
                                   If you need any help to cleanse the data, we are always there to support you.</p><br/>
                               <p>Steps to get insights: Extract the daily book report from your accounting system the following format. 
                                   Your service provider / IT team can give two files when they know what data you need.</p>
                               <p>Daily Book file should have the following structure</p>    
                              
                                <img src= {Table} alt=""/>
                                 <div class="flat-divider d60px"></div>
                                 <img src= {Upload} alt="" />
                                 <div class="flat-divider d60px"></div>
                                 <p>You will get the following Visuals to know your trends and patterns. You are ready to know the trends
                                      and patterns of your business.</p>
                                 <ul><b>
                                   <li>360 View – KPI’s</li>
                                   <li>Expense Analysis</li>
                                   <li>Revenue Analysis</li>
                                   <li>Customer Analysis</li>
                                   <li>Time Series Analysis</li>
                                   <li>Monthly Cash Balance Projection</li></b>
                               </ul>
                               <div class="flat-divider d60px"></div>
                               <p>Below screen gives your 360 view which has the Total Revenue, Monthly Average Revenue, 
                                   Total Expenses and Average monthly expenses as your KPI’s.</p>
                               <div class="flat-divider d60px"></div>
                               <img src= {Flow} alt="" />
                               <div class="flat-divider d60px"></div>
                               <p>Customer Analysis provides top 5 contributors to the revenue and an interactive 
                                   screen to know which 5 customers contributed the revenue and their percentage of 
                                   contribution (interactive reporting).</p>
                               <img src= {Revenue} alt=""/>
                               <div class="flat-divider d60px"></div>
                               <p>If you have face any issues or if you need more information regarding this platform, 
                                   please send us an email <a href="">contact@aroha.co.in</a></p>
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
 
export default Cashflowanalytics;