import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';
import './navbar.css'

const Nav = ({ link, active, setActive }) => {
    return (
        <div className='nav'>
            <Link to={link.link} key={link.id} id='navtab' className='tab' onClick={() => setActive(link.id)}>
                <div style={{ color: active === link.id ? 'blue' : '' , display: 'flex'}}>
                    <link.icon />
                    <p>{link.name}</p>
                </div>
                {active === link.id ? <CircleIcon style={{fontSize: '8px', color: 'blue'}}/> : ''}
            </Link>
        </div>
    )
}

export default Nav
