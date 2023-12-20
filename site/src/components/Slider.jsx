import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src="https://www.instyle.com/thmb/jTcVf0e5XzN6LZMYptqrJ8TZP5E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-places-to-shop-for-clothes-online-tout-0a9b2b31e08d44dcabfe2fa899698213.jpg" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="https://static.independent.co.uk/2022/06/29/14/online%20shops%20who%20do%20next%20day%20delivery%20copy.jpg?quality=75&width=640&crop=3%3A2%2Csmart&auto=webp" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="https://miro.medium.com/v2/resize:fit:1200/1*BTuQxTHukvXq7noT9-UMcg.jpeg" alt="First slide" />
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider