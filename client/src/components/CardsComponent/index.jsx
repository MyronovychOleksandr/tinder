import React from 'react';
import ImageSwiper from "../base/Swiper";
import "./index.css"
import ActionsCardButtons from "../ActionsCardButtons";

const CardsComponent = ({
                            user,
                            onLikeButtonClick,
                            onCancelButtonClick
                        }) => {
    return (
        <div className={"cards-component-wrapper"}>
            <div className={"cards-component-container flex flex-col items-center"}>
                <div  style={{width: "300px", height: "450px"}} className={"mb-16 flex justify-center relative"}>
                    <ImageSwiper
                        images={user.images}
                    />
                    <div className={'absolute text-white bottom-0 left-0 p-4'}>
                        <p className={"text-3xl font-bold"}>{user.firstName} {user.age}</p>
                        {user.tags.map((item) => {
                           return <span className={"inline-block"}>{item.label} </span>
                        })}
                    </div>
                </div>
                <div className={"flex justify-center px-4"}>
                    <ActionsCardButtons
                        userId={user._id}
                        onLikeButtonClick={onLikeButtonClick}
                        onCancelButtonClick={onCancelButtonClick}
                    />
                </div>
            </div>
        </div>
    );
};

export default CardsComponent;