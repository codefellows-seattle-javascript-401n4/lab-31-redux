import React from 'react';
import {Link} from 'react-router-dom'

class Navbar extends React.Component {
    render() {

        return (
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/categoris">Categories</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;