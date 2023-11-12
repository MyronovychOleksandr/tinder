import React from 'react';
import ImageSwiper from "../components/base/Swiper";

const images = [
    "https://images.theconversation.com/files/305837/original/file-20191209-90562-nsnsun.jpg?ixlib=rb-1.1.0&rect=284%2C696%2C1934%2C965&q=45&auto=format&w=1356&h=668&fit=crop",
    "https://defenders.org/sites/default/files/styles/meta_image/public/2023-07/2017.03.22%20-%20Expansive%20Forest%20-%20Nantahala%20National%20Forest%20-%20Blue%20Ridge%20Mountains%20-%20North%20Carolina%20-%20Bill%20Lea.jpg?itok=HiDuRqNl"
]

const Cards = () => {
    return (
        <div>
            <h1>Cards</h1>
            <ImageSwiper
                images={images}
            />
        </div>
    );
};

export default Cards;