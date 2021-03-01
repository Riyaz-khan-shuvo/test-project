import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Footer.css'
import footerImg from '../../Image/footer/footer.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHeadphones, faPaperPlane, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import img1 from '../../Image/footer/payment-1.png'
import img2 from '../../Image/footer/payment-2.png'
import img3 from '../../Image/footer/payment-3.png'
import img4 from '../../Image/footer/payment-4.png'
import img5 from '../../Image/footer/payment-5.png'




const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const Footer = () => {

    const classes = useStyles();
    return (
        <div className="footer-area">
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={footerImg} className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <div className="h1 text-secondary text-center">
                                    <a href="" className="text-secondary pl-3">
                                        <FontAwesomeIcon className="pl-3" icon={faFacebook} />
                                    </a>
                                    <a href="" className="text-secondary pl-3">
                                        <FontAwesomeIcon className="pl-3" icon={faTwitter} />
                                    </a>
                                    <a href="" className="text-secondary pl-3">
                                        <FontAwesomeIcon className="pl-3" icon={faLinkedin} />
                                    </a>
                                    <a href="" className="text-secondary pl-3">
                                        <FontAwesomeIcon className="pl-3" icon={faInstagram} />
                                    </a>
                                    <a href="" className="text-secondary pl-3">
                                        <FontAwesomeIcon className="pl-3" icon={faYoutube} />
                                    </a>

                                </div>
                            </div>

                            <div>
                                <div>
                                    <h3>SUBSCRIBE</h3>
                                    <p>Get the latest news from zDrop</p>

                                    <form className={classes.root} noValidate autoComplete="off">
                                        <div className="forms">
                                            <TextField id="standard-basic" label="E-mail Address" />
                                            <div className="icons">
                                                <FontAwesomeIcon icon={faPaperPlane} />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="mt-5">
                                    <a href="#" className="mr-3 text-dark" >About zDrop</a>
                                    <a href="#" className="mr-3 text-dark" >FAQ & Support</a>
                                    <a href="#" className="mr-3 text-dark" >Terms & Conditions</a>
                                    <a href="#" className="mr-3 text-dark" >Privacy Policy</a>
                                </div>
                            </div>

                            <div className="mt-5 text-center">
                                <div className="d-xl-fle d-lg-flex d-md-flex">
                                    <div>
                                        <img src={img1} className="img-fluid mr-5" alt="" />
                                    </div>
                                    <div>
                                        <img src={img2} className="img-fluid mr-5" alt="" />
                                    </div>
                                    <div>
                                        <img src={img3} className="img-fluid mr-5" alt="" />
                                    </div>
                                    <div>
                                        <img src={img4} className="img-fluid mr-5" alt="" />
                                    </div>
                                    <div>
                                        <img src={img5} className="img-fluid" alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <div>
                                <h5>CONTACT US</h5>
                                <div className="d-flex">
                                    <FontAwesomeIcon icon={faHeadphones} />
                                    <h6 className="ml-3"> Hotline : </h6>
                                </div>
                                <div>
                                    <p className="ml-3">+8801929459195 (10am-10pm/Sat-Thur)</p>
                                </div>

                                <div className="d-flex">
                                    <FontAwesomeIcon icon={faPhoneAlt} />
                                    <h6 className="ml-3"> Whole Sales : </h6>
                                </div>
                                <div>
                                    <p className="ml-3">01929459195 (10am-12pm)</p>
                                </div>

                                <div className="d-flex">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <h6 className="ml-3"> Email : </h6>
                                </div>
                                <div>
                                    <p className="ml-3">support.example@gmail.com</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;