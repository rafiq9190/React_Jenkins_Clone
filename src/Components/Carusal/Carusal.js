import React from 'react';
import {Carousel} from 'react-bootstrap';
import Slider1 from '../Images/slider1.jpg';
import Slider2 from '../Images/slider2.jpg';
import Slider3 from '../Images/slider3.jpg';
import Slider4 from '../Images/slider4.jpg';


const Carusal = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Slider1}
                    alt=""
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Slider2}
                    alt=""
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Slider3}
                    alt=""
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Slider4}
                    alt=""
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Carusal
