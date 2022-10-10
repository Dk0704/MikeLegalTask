import React, { useCallback, useEffect, useState } from 'react'
import { NavLinks } from './Navlinks';
import './navbar.css'
import { Link, useLocation } from 'react-router-dom'
import Nav from './Nav';

const Navbar = () => {
    // console.log(NavLinks)
    const [active, setActive] = useState(1);
    const location = useLocation();

    useEffect(() => {
        const current = location.pathname.split('/')[1]
        switch (current) {
            case 'helpdesk':
                setActive(2)
                return
            case 'mytasks':
                setActive(3)
                return
            case 'projects':
                setActive(4)
                return
            case 'clients':
                setActive(5)
                return
            case 'invoice':
                setActive(6)
                return
            case 'report':
                setActive(7)
                return
            case 'settings':
                setActive(8)
                return
            default:
                setActive(1)
                return
        }
    }, [location]);

    return (
        <div className='navs'>
            {NavLinks.map((link) => (
                <Nav link={link} key={link.id} active={active} setActive={setActive} />
            ))}
        </div>
    )
}

export default Navbar
