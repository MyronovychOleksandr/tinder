import React, {useState} from 'react';
import {Avatar} from '@mui/material';
import {NavLink} from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Popover from '@mui/material/Popover';
import {logout} from "../../services/auth";
import Cookies from "js-cookie";
import {useAuth} from "../../contexts/AuthContext";

const AvatarComponent = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const {updateToken} = useAuth();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleLogout = () => {
        logout()
            .then(() => {
                Cookies.set('token', "");
                updateToken(null)
                handleClose()
            })
    }

    return (
        <NavLink to={"/create-account"}>
            <div
                className={"flex items-center justify-between mb-4 rounded-3xl hover:bg-red-500 p-2 cursor-pointer relative"}>
                <div className={"flex items-center"}>
                    <Avatar
                        src={"https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg"}
                        className={"mr-2"}
                    />
                    <div>Account</div>
                </div>
                <div aria-describedby={id} onClick={handleClick}>
                    <KeyboardArrowDownIcon/>
                </div>


                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <div className={"px-4 py-2 cursor-pointer"} onClick={handleLogout}>
                        Log out
                    </div>
                </Popover>
            </div>

        </NavLink>
    );
};

export default AvatarComponent;