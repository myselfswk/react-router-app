import React from 'react';
import { Link } from 'react-router-dom';

const Navigations = () => {
    return (
        <nav>
            <ul>
                <li><Link to={'/'} >Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/contactus'}>Contact Us</Link></li>
                <li>
                    <Link to={'/dashboard'}>Dashboard</Link>
                    <ul>
                        <li><Link to={'/dashboard/invoices'}>Invoices</Link></li>
                        <li><Link to={'/dashboard/users'}>Users</Link></li>
                    </ul>
                </li>
                <li><Link to={'/goaway'}>Go Away</Link></li>
            </ul>
        </nav>
    )
}

export default Navigations;