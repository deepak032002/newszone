import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header w-full'>
            <div className="logo font-[Orbitron] font-bold">
                <i className="fa-solid fa-newspaper"></i> News Zone
            </div>

            <div className="menu">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header