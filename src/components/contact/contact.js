import React from 'react';
function Contact() {
    return (
        <div>
            <section id="inner-headline">
                <div className="container">
                    <div className="row">
                        <div className="span4">
                            <div className="inner-heading">
                                <h2>Get in touch</h2>
                            </div>
                        </div>
                        <div className="span8">
                            <ul className="breadcrumb">
                                <li><a href="index.html">Home</a> <i className="icon-angle-right"></i></li>
                                <li className="active">Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="content">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.892427392686!2d77.21718531508259!3d28.63298598241769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37ebbdf4af%3A0x2be7eefccedf4b84!2sRajiv%20Chowk!5e0!3m2!1sen!2sin!4v1573474726698!5m2!1sen!2sin" width="100%" height="380" frameborder="0" style={{ border: 0 }} allowfullscreen=""></iframe>

                <div className="container">
                    <div className="row">
                        <div className="span8">
                            <h4>Get in touch with us by filling contact form below</h4>



                            <form id="contactform" action="" method="post" role="form" className="contactForm">

                                <div id="sendmessage">Your message has been sent. Thank you!</div>
                                <div id="errormessage"></div>

                                <div className="row">
                                    <div className="span4 field form-group">
                                        <input type="text" name="name" placeholder="* Enter your full name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        <div className="validation"></div>
                                    </div>
                                    <div className="span4 field form-group">
                                        <input type="text" name="email" placeholder="* Enter your email address" data-rule="email" data-msg="Please enter a valid email" />
                                        <div className="validation"></div>
                                    </div>
                                    <div className="span8 margintop10 field form-group">
                                        <input type="text" name="subject" placeholder="Enter your subject" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        <div className="validation"></div>
                                    </div>
                                    <div className="span8 margintop10 field form-group">
                                        <textarea rows="12" name="message" className="input-block-level" placeholder="* Your message here..." data-rule="required" data-msg="Please write something"></textarea>
                                        <div className="validation"></div>

                                        <p>
                                            <button className="btn btn-color margintop10 pull-left" type="submit">Send message</button>
                                            <span className="pull-right margintop20">* Please fill all required form field, thanks!</span>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="span4">
                            <div className="clearfix"></div>
                            <aside className="right-sidebar">

                                <div className="widget">
                                    <h5 className="widgetheading">Contact information<span></span></h5>

                                    <ul className="contact-info">
                                        <li><label>Address :</label> NEW dELHI<br /> INDIA</li>
                                        <li><label>Phone :</label>+00 000 000 00 / +00 000 000 00</li>
                                        <li><label>Fax : </label>+00 000 000 00 / +00 000 000 00</li>
                                        <li><label>Email : </label> info@yourdomain.com</li>
                                    </ul>

                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Contact;