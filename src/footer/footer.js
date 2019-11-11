import React from 'react';

function App() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="span4">
                        <div className="widget">
                            <div className="footer_logo">
                                <h3><a href="index.html"><i className="icon-tint"></i> Remember</a></h3>
                            </div>
                            <address>
                                <strong>Remember company Inc.</strong><br />
                                Somestreet KW 101, Park Village W.01<br />
                                Jakarta 13426 Indonesia
  						   </address>
                            <p>
                                <i className="icon-phone"></i> (123) 456-7890 - (123) 555-7891 <br />
                                <i className="icon-envelope-alt"></i> email@domainname.com
              </p>
                        </div>
                    </div>
                    <div className="span4">
                        <div className="widget">
                            <h5 className="widgetheading">Browse pages</h5>
                            <ul className="link-list">
                                <li><a href="#">Our company</a></li>
                                <li><a href="#">Terms and conditions</a></li>
                                <li><a href="#">Privacy policy</a></li>
                                <li><a href="#">Press release</a></li>
                                <li><a href="#">What we have done</a></li>
                                <li><a href="#">Our support forum</a></li>
                            </ul>

                        </div>
                    </div>
                    <div className="span4">
                        <div className="widget">
                            <h5 className="widgetheading">From flickr</h5>
                            <div className="flickr_badge">
                                <script type="text/javascript" src="http://www.flickr.com/badge_code_v2.gne?count=8&amp;display=random&amp;size=s&amp;layout=x&amp;source=user&amp;user=34178660@N03"></script>
                            </div>
                            <div className="clear"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="sub-footer">
                <div className="container">
                    <div className="row">
                        <div className="span6">
                            <div className="copyright">
                                <p><span>&copy; Remember Inc. All right reserved</span></p>
                            </div>

                        </div>

                        <div className="span6">
                            <div className="credits">


                                Created by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default App;



