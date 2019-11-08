import React from 'react';
import "../assets/css/animate.css"
import "../assets/css/bootstrap-responsive.css"
import "../assets/css/bootstrap.css"
import "../assets/css/custom-fonts.css"
import "../assets/css/font-awesome-ie7.css"
import "../assets/css/font-awesome.css"
import "../assets/css/overwrite.css"
import "../assets/css/prettyPhoto.css"
import "../assets/css/shortcodes.css"
import "../assets/css/style.css"

function Header() {
    return (
        <header>
            <div className="top">
                <div className="container">
                    <div className="row">
                        <div className="span6">
                            <ul className="topmenu">
                                <li><a href={null}>Home</a> &#47;</li>
                                <li><a href={null}>Terms</a> &#47;</li>
                                <li><a href={null}>Privacy policy</a></li>
                            </ul>
                        </div>
                        <div className="span6">

                            <ul className="social-network">
                                <li><a href={null} data-placement="bottom" title="Facebook"><i className="icon-circled icon-bglight icon-facebook"></i></a></li>
                                <li><a href={null} data-placement="bottom" title="Twitter"><i className="icon-circled icon-bglight icon-twitter"></i></a></li>
                                <li><a href={null} data-placement="bottom" title="Linkedin"><i className="icon-circled icon-linkedin icon-bglight"></i></a></li>
                                <li><a href={null} data-placement="bottom" title="Pinterest"><i className="icon-circled icon-pinterest  icon-bglight"></i></a></li>
                                <li><a href={null} data-placement="bottom" title="Google +"><i className="icon-circled icon-google-plus icon-bglight"></i></a></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row nomargin">
                    <div className="span4">
                        <div className="logo">
                            <h1><a href="index.html"><i className="icon-tint"></i> Remember</a></h1>
                        </div>
                    </div>
                    <div className="span8">
                        <div className="navbar navbar-static-top">
                            <div className="navigation">
                                <nav>
                                    <ul className="nav topnav">
                                        <li><a href={null}>Home</a></li>
                                        <li className="dropdown">
                                            <a href={null}>Features <i className="icon-angle-down"></i></a>
                                            <ul className="dropdown-menu">
                                                <li><a href={null}>Typography</a></li>
                                                <li><a href={null}>Components</a></li>
                                                <li><a href={null}>Icons</a></li>
                                                <li><a href={null}>Icon variations</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a href={null}>Pages <i className="icon-angle-down"></i></a>
                                            <ul className="dropdown-menu">
                                                <li><a href={null}>About us</a></li>
                                                <li><a href={null}>Pricing boxes</a></li>
                                                <li><a href={null}>404</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a href={null}>Portfolio <i className="icon-angle-down"></i></a>
                                            <ul className="dropdown-menu">
                                                <li><a href={null}>Portfolio 2 columns</a></li>
                                                <li><a href={null}>Portfolio 3 columns</a></li>
                                                <li><a href={null}>Portfolio 4 columns</a></li>
                                                <li><a href={null}>Portfolio detail</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a href={null}>Blog <i className="icon-angle-down"></i></a>
                                            <ul className="dropdown-menu">
                                                <li><a href={null}>Blog left sidebar</a></li>
                                                <li><a href={null}>Blog right sidebar</a></li>
                                                <li><a href={null}>Post left sidebar</a></li>
                                                <li><a href={null}>Post right sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href={null}>Contact </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;



