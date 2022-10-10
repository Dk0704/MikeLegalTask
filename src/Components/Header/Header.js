import React from 'react'
import { Avatar } from '@mui/material';
import './header.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CircleIcon from '@mui/icons-material/Circle';

const Header = () => {
    return (
        <div className='head'>
            <h1>CRM Dash</h1>
            <div className='head-end'>
                <div>
                    <NotificationsNoneIcon />
                    <CircleIcon className='status' id='status'/>
                </div>
                <div className="user">
                    <Avatar sx={{ bgcolor: 'orange' }}>J</Avatar>
                    {/* <Avatar/> */}
                    <p>Jenni Thompson</p>
                    <KeyboardArrowDownIcon />
                </div>
            </div>
        </div>
    )
}

export default Header
