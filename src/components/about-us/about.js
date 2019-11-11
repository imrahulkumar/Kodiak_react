import React from 'react';
function AboutJs() {
    return (
        <div>
            <section id="inner-headline">
                <div class="container">
                    <div class="row">
                        <div class="span4">
                            <div class="inner-heading">
                                <h2>About us</h2>
                            </div>
                        </div>
                        <div class="span8">
                            <ul class="breadcrumb">
                                <li><a href="index.html">Home</a> <i class="icon-angle-right"></i></li>
                                <li><a href="#">Pages</a> <i class="icon-angle-right"></i></li>
                                <li class="active">About us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section id="content">
                <div class="container">
                    <div class="row">

                        <div class="span6">
                            <h4>About Remember Inc</h4>
                            <p>
                                Ei mel semper vocent persequeris, nominavi patrioque vituperata id vim, cu eam gloriatur philosophia deterruisset. Meliore perfecto repudiare ea nam, ne mea duis temporibus. Id quo accusam consequuntur, eum ea debitis urbanitas. Nibh reformidans vim ne.
            </p>
                            <p>
                                Iudico definiebas eos ea, dicat inermis hendrerit vel ei, legimus copiosae quo at. Per utinam corrumpit prodesset te, liber praesent eos an. An prodesset neglegentur qui, usu ancillae posidonium in, mea ex eros animal scribentur. Et simul fabellas sit.
                                Populo inimicus ne est.
            </p>

                        </div>

                        <div class="span6">
                            <iframe src="http://player.vimeo.com/video/24535181?title=0&amp;byline=0" width="500" height="281" seamless></iframe>
                        </div>
                    </div>

                    {/* divider  */}
                    <div class="row">
                        <div class="span12">
                            <div class="solidline"></div>
                        </div>
                    </div>
                    {/* end divider  */}

                    <div class="row team">
                        <div class="span12">
                            <h4>Nice persons behind Remember</h4>
                        </div>

                        <div class="span3">
                            <div class="team-box">
                                <a href="#" class="thumbnail"><img src="img/dummies/team1.jpg" alt="" /></a>
                                <div class="roles aligncenter">
                                    <p class="lead"><strong>Vincent Austin Jr</strong></p>
                                    <p>
                                        CEO - Founder
                </p>
                                    <p>
                                        <a href="#"><i class="icon-facebook icon-circled icon-bglight active"></i></a>
                                        <a href="#"><i class="icon-twitter icon-circled icon-bglight active"></i></a>
                                        <a href="#"><i class="icon-linkedin icon-circled icon-bglight active"></i></a>
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div class="span3">
                            <div class="team-box">
                                <a href="#" class="thumbnail"><img src="img/dummies/team2.jpg" alt="" /></a>
                                <div class="roles aligncenter">
                                    <p class="lead"><strong>Tommy Laugher</strong></p>
                                    <p>
                                        Lead designer
                </p>
                                    <p>
                                        <a href="#"><i class="icon-facebook icon-circled icon-bglight active"></i></a>
                                        <a href="#"><i class="icon-twitter icon-circled icon-bglight active"></i></a>
                                        <a href="#"><i class="icon-linkedin icon-circled icon-bglight active"></i></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="span3">
                            <div class="team-box">
                                <a href="#" class="thumbnail"><img src="img/dummies/team3.jpg" alt="" /></a>
                                <div class="roles aligncenter">
                                    <p class="lead"><strong>Gabirelle Borowski</strong></p>
                                    <p>
                                        Customer support
                </p>
                                    <p>
                                        <a href="#"><i class="icon-facebook icon-circled icon-bglight active"></i></a>
                                        <a href="#"><i class="icon-twitter icon-circled icon-bglight active"></i></a>
                                        <a href="#"><i class="icon-linkedin icon-circled icon-bglight active"></i></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="span3">
                            <div class="team-box">
                                <a href="#" class="thumbnail"><img src="img/dummies/team4.jpg" alt="" /></a>
                                <div class="roles aligncenter">
                                    <p class="lead"><strong>Benny Strongton</strong></p>
                                    <p>
                                        Coffee maker
                </p>
                                    <p>
                                        <a href="#"><i class="icon-facebook icon-circled icon-bglight active"></i></a>
                                        <a href="#"><i class="icon-twitter icon-circled icon-bglight active"></i></a>
                                        <a href="#"><i class="icon-linkedin icon-circled icon-bglight active"></i></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default AboutJs;