import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./Blog.css";
import carousel1 from '../../Image/carousel/1.png'
import carousel2 from '../../Image/carousel/2.png'
import carousel3 from '../../Image/carousel/3.png'
import carousel4 from '../../Image/carousel/4.png'
import carousel5 from '../../Image/carousel/1.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";



const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];
const Blog = () => {
    return (
        <div>
            <div className="blog-area py-3">
                <div>
                    <div className="text-center my-5">
                        <h3>LATEST <span className="text-success"> BLOGS</span> </h3>
                        <p>
                            <b>
                                This is a place devoted to giving you deeper insight into the news,
                                trends, people and technology behind Bing.
                            </b>
                        </p>
                    </div>
                    <div className="container">
                        <Carousel breakPoints={breakPoints}>

                            <Item> <img src={carousel1} alt="" />  </Item>
                            
                            <Item> <img src={carousel2} alt="" /> </Item>

                            <Item> <img src={carousel3} alt="" /> </Item>

                            <Item> <img src={carousel4} alt="" /> </Item>

                            <Item> <img src={carousel5} alt="" /> </Item>

                            <Item> <img src={carousel1} alt="" /> </Item>

                            <Item> <img src={carousel2} alt="" /> </Item>

                            <Item> <img src={carousel3} alt="" /> </Item>

                            <Item> <img src={carousel1} alt="" /> </Item>

                            <Item> <img src={carousel2} alt="" /> </Item>

                            <Item> <img src={carousel3} alt="" /> </Item>

                            <Item> <img src={carousel5} alt="" /> </Item>


                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;