import React from 'react'; 

const Books1 = () => {
    return ( 
        <div id="site-content">
        <div class="container">
                    <div class="row">
                        <div class="page-title page-title1">
                            <h2 class="title">Retail 101 Glossary</h2>
                        </div>
                        <div class="book-text">
                            {/* <!-- <span>This Whitepaper considers several ways in which life sciences firms can use machine learning to
                                 favorably impact R&D productivity, clinical efficacy, and supply chain efficiency</span> --> */}
                            <p class="f3f3">Aroha Technologies</p>
                        </div>
                    </div>
                </div>
                <div class="flat-row pad-top80px pad-bottom80px parallax parallax16">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-9 col-md-offset-2">
                                <div class="title-section title-section1">
                                   <h2>OverView</h2>
                                   <p class="book-content">
                                    This document gives a glimpse of what different terms we typically come across in the retail project 
                                    we deal with. The words are in alphabetical order. You can associate each of these words to POS, Inventory,
                                     Marketing, Finance, Stores, Transportation and Customer.<br/>
                                    Every term you see can have one single event associated to it or the whole set of events / processes 
                                    together to define that term. Awareness is the key to become an expert in what we do. This document gives you the awareness to begin with.</p>
                                    <a href="pdf/Retail 101 Glossary.pdf" download="retail.pdf" target="blank">
                                        <input name="submit" type="button" id="submit" class="submit rounded" value="Read Book"/></a>
                                </div>
                                
                            </div>
                           
                                <div class="flat-divider d40px"></div>
                            </div>
                        </div>
                    </div>
                </div>
    
           
      );
}
 
export default Books1; 
