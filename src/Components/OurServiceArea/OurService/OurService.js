import { faBookmark, faCommentDots, faHeart, faPaperPlane, faWallet } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import OurServiceCol from '../OurServiceCol/OurServiceCol';

const OurService = () => {

    const Data = [
        { name: "Quality and Saving", service: "Comprehensive quality control and affordable prices", icon: faHeart, color: "#F20045" },
        { name: "Global Brands", service: "Buy you favorite items from your favorite global brands", icon: faBookmark, color: "#157AFF" },
        { name: "Fast Delivery", service: "Fast and convenient door to door delivery", icon: faPaperPlane, color: "#FF6600" },
        { name: "Secure Payment", service: "Different secure payment methods", icon: faWallet, color: "#515151" },
        { name: "Professional Service", service: "Efficient customer support from passionate team", icon: faCommentDots, color: "#00C663" },
    ];

    return (
        <div className="py-5">
            <div className="container">
                <div className="d-xl-flex d-lg-flex d-md-flex d-sm-flex d-block justify-content-between">
                    {
                        Data.map(data => <OurServiceCol info={data} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default OurService;