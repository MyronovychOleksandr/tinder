import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';

const ActionsCardButtons = ({
                                userId,
                                onLikeButtonClick,
                                onCancelButtonClick
                            }) => {
    return (
        <div>
            <button
                className="w-16 h-16 bg-red-400 text-white rounded-full mx-8"
                onClick={() => onLikeButtonClick(userId)}
            >
                <FavoriteIcon className="w-16 h-16"/>
            </button>
            <button
                className="w-16 h-16 bg-red-400 text-white rounded-full mx-8"
                onClick={onCancelButtonClick}
            >
                <CloseIcon className="w-16 h-16"/>
            </button>
        </div>
    );
};

export default ActionsCardButtons;