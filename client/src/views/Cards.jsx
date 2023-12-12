import React, {useEffect, useState} from 'react';
import CardsComponent from "../components/CardsComponent";
import {getAllUsers, likeUser} from "../services/users";
import {toast} from "react-toastify";
import Box from "@mui/material/Box";

const Cards = () => {
    const [user, setUser] = useState({})
    const [page, setPage] = useState(0)
    const [isFirstLoaded, setIsFirsLoaded] = useState(false)

    useEffect(() => {
        if (isFirstLoaded) return
        setIsFirsLoaded(() => true)
        handleGetUser()
    }, [isFirstLoaded])

    const handleGetUser = () => {
        const params = {
            pageSize: 1,
            page: page + 1
        }
        getAllUsers(params)
            .then(({data}) => {
                const {users, currentPage} = data.data
                setUser(users?.[0])
                setPage(currentPage)
            })
            .catch((e) => {
                toast.error(e.response.data.message)
            })
    }

    const handleLikeButtonClick = async (likedUserId) => {
        try {
            await likeUser(likedUserId)
            handleGetUser()
        } catch (e) {
            toast.error(e.response.data.message)
        }
    }

    const handleCancelButtonClick = () => {
        handleGetUser()
    }

    return (
        <div>
            {user?._id ?
                <CardsComponent
                    user={user}
                    onLikeButtonClick={handleLikeButtonClick}
                    onCancelButtonClick={handleCancelButtonClick}
                />
                :
                <Box>No user</Box>
            }
        </div>
    );
};

export default Cards;