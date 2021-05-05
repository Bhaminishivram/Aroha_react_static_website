import React from 'react'; 
import Cashanalysis from   "../images/cashanalysis.JPG"; 
import Upload from "../images/upload.JPG"; 
import Datarepository from "../images/Datarepository.JPG"; 
import  Retails from "../images/Retails.JPG"; 
import   Pos from "../images/pos.JPG";
const SalesAnalytics = () => {
    return (  

        <div id="site-content">
           
        <div id="page-body">
         
            <div class="flat-row pad-top60px pad-bottom60px parallax">
                <div class="container">
                    <div class="row center">
                        <div class="col-lg-12">
                        <div class="col-md-8 col-md-offset-2 col-sm-12">
                            <h2 class="h2-heading">Retail Sales Analytics</h2>
                            <div class="title text-justify">
                            <p>If you are a company with a retail POS data, without any analytical platform, this will act as a spring 
                                board to get insights of your business. Once you understand the insights, you get insights which will help
                                 you to optimize your operations.</p><br/>
                            <p>Steps to get insights: Extract the item_master and sales data from your POS system in the following format. 
                                 Your service provider / IT team can give two files when they know what data you need.</p>
                            <p>Upload two data sets from your POS system to see the dashboards and predict next year sales.</p>    
                            <ul class="e float center"><b>
                                <li>Item file</li>
                                <li>Sales file</li></b>
                            </ul>
                        </div>  
                        </div>  
                    </div>
                    </div>
                </div>
            </div>
         
    
            <div class="flat-row pad-top20px pad-bottom20px parallax">
                <div class="container">
                    <div class="row center">
                                <div class="col-lg-12">
                                    <div class="col-md-8 col-md-offset-2 col-sm-12">
                                    <div class="text-container-1 text-justify">
                                        <h4>Item master file should have the following structure</h4>
                                        <table>
                                            <thead>
                                              <tr>
                                                <th>Item_Code</th>
                                                <th>Item_Name</th>
                                                <th>Item_Category</th>
                                                <th>Item_Sub_Category</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td>56455</td>
                                                <td data-th="Small"><div>Pizza</div></td>
                                                <td data-th="Regular"><div>Food</div></td>
                                                <td data-th="Regular"><div>Fast Food</div></td>
                                              </tr>
                                              <tr>
                                                <td>65445</td>
                                                <td data-th="Small"><div>Bread</div></td>
                                                <td data-th="Regular"><div>Food </div></td>
                                                <td data-th="Regular"><div>Staple Food </div></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                    </div> 
                                      
                                    </div> 
                                </div>
                    </div>
                </div>
            </div>
    
            <div class="flat-row pad-top40px pad-bottom20px parallax">
                <div class="container">
                    <div class="row center">
                        <div class="col-lg-12">
                            <div class="text-container-1 text-justify">
                                <div class="col-md-8 col-md-offset-2 col-sm-12">
                                    <h4>Sales file should have the following structure</h4>
                                    <table>
                                        <thead>
                                          <tr>
                                            <th>Sales_Id</th>
                                            <th>Sales_Date</th>
                                            <th>Item_Code</th>
                                            <th>Item_Name</th>
                                            <th>Sales_Quantity</th>
                                            <th>Unitcost_Price</th>
                                            <th>Unitsale_price</th>
                                            <th>Total_sales</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>16121546</td>
                                            <td data-th="Regular"><div>1/06/2019 12:25</div></td>
                                            <td data-th="Regular"><div>43654</div></td>
                                            <td data-th="Small"><div>Ice Coffee</div></td>
                                            <td data-th="Regular"><div>1</div></td>
                                            <td data-th="Regular"><div>1.1</div></td>
                                            <td data-th="Regular"><div>1.34</div></td>
                                            <td data-th="Regular"><div>1.34</div></td>
                                          </tr>
                                          <tr>
                                            <td>16121546</td>
                                            <td data-th="Regular"><div>21/02/2019 15:25 </div></td>
                                            <td data-th="Regular"><div>43546</div></td>
                                            <td data-th="Small"><div>Pastry</div></td>
                                            <td data-th="Regular"><div>2</div></td>
                                            <td data-th="Regular"><div>1.8</div></td>
                                            <td data-th="Regular"><div>2.45</div></td>
                                            <td data-th="Regular"><div>2.45</div></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="flat-row pad-top40px pad-bottom60px parallax">
                <div class="container">
                    <div class="row center">
                        <div class="col-lg-12">
                            <div class="col-md-8 col-md-offset-2 col-sm-12">
                            <div class="text-container-1 text-justify">
                                <h4>Use the File Upload option to load these two files into the application.</h4>
                               <img src={Upload} alt="" />
                               <div class="flat-divider d20px"></div>
                                <p>You can check the Data Repository option to know the status of the files you uploaded.</p>
                                <img src={Datarepository} alt="" />
                                <div class="flat-divider d20px"></div>
                                <p>You will get the following Visuals to know your trends and patterns. You are ready to 
                                    know the trends and patterns of your business.</p>
                                <ul>
                                    <li>360 View – KPI’s</li>
                                    <li>Time Series Analysis</li>
                                    <li>ABC Analysis</li>
                                    <li>Item Analysis</li>
                                    <li>Time Series Prediction for next one year</li>
                                </ul>
                                <div class="flat-divider d20px"></div>
                                <p>As part of 360 View, you will see Revenue related KPI’s and Basket related KPI’s.
                                     You will get to know the Monthly Sales trend, comparative monthly analysis, weekly 
                                      sales trend and top 10 items which are contributing to your sale.</p>
                                
                                <img src={Retails} alt="" />
                                <div class="flat-divider d20px"></div>
                                <img src={Cashanalysis} alt="" />
                                <div class="flat-divider d20px"></div>
                                <p>You will see the trends of your sales in the year you are interested. In the following visual 
                                     you can see sales trend in Q2 of 2019.</p>
                                <div class="flat-divider d20px"></div>
                                <img src={Pos} alt="" />
                                <div class="flat-divider d20px"></div>
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
 
export default SalesAnalytics;