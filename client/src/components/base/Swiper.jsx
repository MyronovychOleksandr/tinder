import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSwiper = ({images}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div style={{width: "300px", height: "450px"}}>
            <Slider {...settings}>
                {images?.map((image, index) => (
                    <div key={index} className={"w-full h-0 pb-[150%] overflow-hidden relative rounded"}>
                        <img
                            src={image} alt={`Slide ${index + 1}`}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSwiper;