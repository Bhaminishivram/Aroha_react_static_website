import React from 'react'; 
const Books = () => {
    return ( 
        <div id="site-content">

        <div class="container">
            <div class="row">
                <div class="page-title page-title1">
                    <h2 class="title">ABC DataWarehousing</h2>
                </div>
                <div class="book-text">
                    {/* <!-- <span> process for collecting and managing data from varied sources to provide meaningful business insights.</span> --> */}
                        <p class="f3f3">Aroha Technologies</p>
                </div>
            </div>
        </div>
        <div class="flat-row pad-top80px pad-bottom80px parallax parallax14">
            <div class="container">
                <div class="row">
                    <div class="col-md-9 col-md-offset-2">
                        <div class="title-section title-section1">
                            <h2>OverView</h2>
                                <p class="book-content">A resource who knows about Data, SQL and any data processing language gets into 
                                dealing with data warehousing technology. In order to understand Data, Models and different components of 
                                Data Warehousing technologies, read through this basic guide which gives you the core / fundamental concepts
                                 on why and how organization involves in Data Warehousing technology.
                                </p>
                                <a href="pdf/ABC of DW and BI.pdf" download="abc.pdf" target="blank"><input name="submit" type="button" 
                                id="submit" class="submit rounded" value="Read Book"/></a>
                        </div>
                    </div> 
                    </div>
                    </div>
            </div>
        </div>
      );
}
 
export default Books;