import React from 'react'; 

const Footer = () => {
    return ( 

        <footer class="footer">
        <div class="footer-widgets">
            <div class="container">
                <div class="row">
                    <div class="col-md-5 col-sm-4 col-md-offset-2">
                        <div class="widget widget_text information style_1">
                            <h3 class="widget-title"><span class="style_1">C</span>ontact Us</h3>
                            <div class="textwidget">
                               
                                <p>
                                    <p class="family"><i class="fa fa-phone ft-widget-margin-right-12"></i>+918049562349</p>
                                    <i class="fa fa-envelope-o ft-widget-margin-right-10"></i> contact@aroha.co.in
                                </p>
                               
                            </div>          
                        </div>
                    </div>
                    
                    <div class="col-md-5 col-sm-4">
                        <div class="widget widget_text style_1">
                            <div class="textwidget">
                               {/* <!--// <p class="form-submit"><input name="submit" type="submit" id="submit" class="submit rounded" value="Get in touch" data-toggle="modal" data-target="#myModal"></p>-->
                                <!-- Modal --> */}
                                <div id="myModal" class="modal fade " role="dialog" >
                                  <div class="modal-dialog pad-mar20px">
                                
                                    {/* <!-- Modal content--> */}
                                    <div class="modal-content ">
                                      <div class="modal-header">
                                        {/* <!-- <button type="button" class="close close-btn" data-dismiss="modal">&times;</button> --> */}
                                      </div>
                                      <div class="modal-body">
                                        <form id="contactform" method="post" action="./contact/contact-process.php">
                                            <p><input id="name" name="name" type="text" value="" placeholder="Name" required="required" /></p>
            
                                            <p><input id="email" name="email" type="email" value="" placeholder="Email" required="required" /></p>
            
                                            <p><textarea name="message" placeholder="Comment" required="required"></textarea></p>
                                            <p class="form-submit"><input name="submit" type="submit" id="submit" class="submit rounded" value="Send Mail" />
                                            </p>
                                        </form>
                                      </div>
                                      <div class="modal-footer">
                                        <button type="button" class="btn btn-primary close-btn rounded submit" data-dismiss="modal">Close</button>
                                      </div>
                                    </div>
                                
                                  </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-content">
            <div class="container">
                <div class="row">
                    <div class="flat-wrapper">
                        <div class="ft-wrap clearfix">
                            <div class="copyright">
                                <div class="copyright-content">
                                    Copyright © 2020 Aroha Technologies<a href="http://aroha.co.in/" target="_blank"></a>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
      );
}
 
export default Footer;