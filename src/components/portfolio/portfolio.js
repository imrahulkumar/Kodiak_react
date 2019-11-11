import React from 'react';
function Portfolio() {
    return (
        <div>
            <section id="inner-headline">
                <div className="container">
                    <div className="row">
                        <div className="span4">
                            <div className="inner-heading">
                                <h2>Portfolio 2 cols</h2>
                            </div>
                        </div>
                        <div className="span8">
                            <ul className="breadcrumb">
                                <li><a href="index.html">Home</a> <i className="icon-angle-right"></i></li>
                                <li><a href="#">Portfolio</a> <i className="icon-angle-right"></i></li>
                                <li className="active">Portfolio 2 columns</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            <section id="content">
                <div className="container">
                    <div className="row">
                        <div className="span12">
                            <ul className="portfolio-categ filter">
                                <li className="all active"><a href="#">All</a></li>
                                <li className="web"><a href="#" title="">Web design</a></li>
                                <li className="icon"><a href="#" title="">Icons</a></li>
                                <li className="graphic"><a href="#" title="">Graphic design</a></li>
                            </ul>

                            <div className="clearfix"></div>
                            <div className="row">
                                <section id="projects">
                                    <ul id="thumbs" className="grid cs-style-3 portfolio">

                                        {/* Item Project and Filter Name  */}
                                        <li className="item-thumbs span6 design" data-id="id-0" data-type="web">
                                            <div className="item">
                                                <figure>
                                                    <div><img src="img/dummies/works/1.jpg" alt="" /></div>
                                                    <figcaption>
                                                        <h3>Portfolio name</h3>
                                                        <p>
                                                            <a href="img/dummies/works/big.png" data-pretty="prettyPhoto[gallery1]" title="Portfolio caption here"><i className="icon-zoom-in icon-circled icon-bglight icon-2x active"></i></a>
                                                            <a href="#"><i className="icon-file icon-circled icon-bglight icon-2x active"></i></a>
                                                        </p>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                        </li>
                                        {/* End Item Project  */}

                                        {/* Item Project and Filter Name  */}
                                        <li className="item-thumbs span6 design" data-id="id-1" data-type="icon">
                                            <div className="item">
                                                <figure>
                                                    <div><img src="img/dummies/works/2.jpg" alt="" /></div>
                                                    <figcaption>
                                                        <h3>Portfolio name</h3>
                                                        <p>
                                                            <a href="img/dummies/works/big.png" data-pretty="prettyPhoto[gallery1]" title="Portfolio caption here"><i className="icon-zoom-in icon-circled icon-bglight icon-2x active"></i></a>
                                                            <a href="#"><i className="icon-file icon-circled icon-bglight icon-2x active"></i></a>
                                                        </p>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                        </li>
                                        {/* End Item Project  */}

                                        {/* Item Project and Filter Name  */}
                                        <li className="item-thumbs span6 photography" data-id="id-2" data-type="graphic">
                                            <div className="item">
                                                <figure>
                                                    <div><img src="img/dummies/works/3.jpg" alt="" /></div>
                                                    <figcaption>
                                                        <h3>Portfolio name</h3>
                                                        <p>
                                                            <a href="img/dummies/works/big.png" data-pretty="prettyPhoto[gallery1]" title="Portfolio caption here"><i className="icon-zoom-in icon-circled icon-bglight icon-2x active"></i></a>
                                                            <a href="#"><i className="icon-file icon-circled icon-bglight icon-2x active"></i></a>
                                                        </p>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                        </li>
                                        {/* End Item Project  */}

                                        {/* Item Project and Filter Name  */}
                                        <li className="item-thumbs span6 design" data-id="id-0" data-type="web">
                                            <div className="item">
                                                <figure>
                                                    <div><img src="img/dummies/works/4.jpg" alt="" /></div>
                                                    <figcaption>
                                                        <h3>Portfolio name</h3>
                                                        <p>
                                                            <a href="img/dummies/works/big.png" data-pretty="prettyPhoto[gallery1]" title="Portfolio caption here"><i className="icon-zoom-in icon-circled icon-bglight icon-2x active"></i></a>
                                                            <a href="#"><i className="icon-file icon-circled icon-bglight icon-2x active"></i></a>
                                                        </p>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                        </li>
                                        {/* End Item Project  */}

                                        {/* Item Project and Filter Name  */}
                                        <li className="item-thumbs span6 photography" data-id="id-4" data-type="web">
                                            <div className="item">
                                                <figure>
                                                    <div><img src="img/dummies/works/5.jpg" alt="" /></div>
                                                    <figcaption>
                                                        <h3>Portfolio name</h3>
                                                        <p>
                                                            <a href="img/dummies/works/big.png" data-pretty="prettyPhoto[gallery1]" title="Portfolio caption here"><i className="icon-zoom-in icon-circled icon-bglight icon-2x active"></i></a>
                                                            <a href="#"><i className="icon-file icon-circled icon-bglight icon-2x active"></i></a>
                                                        </p>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                        </li>
                                        {/* End Item Project  */}

                                        {/* Item Project and Filter Name */}
                                        <li className="item-thumbs span6 photography" data-id="id-5" data-type="icon">
                                            <div className="item">
                                                <figure>
                                                    <div><img src="img/dummies/works/6.jpg" alt="" /></div>
                                                    <figcaption>
                                                        <h3>Portfolio name</h3>
                                                        <p>
                                                            <a href="img/dummies/works/big.png" data-pretty="prettyPhoto[gallery1]" title="Portfolio caption here"><i className="icon-zoom-in icon-circled icon-bglight icon-2x active"></i></a>
                                                            <a href="#"><i className="icon-file icon-circled icon-bglight icon-2x active"></i></a>
                                                        </p>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                        </li>
                                        {/* End Item Project  */}
                                    </ul>
                                </section>

                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    )
}

export default Portfolio;