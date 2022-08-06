import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header w-full flex justify-between items-center px-4 py-4 text-gray-600'>
            <div className="logo font-[Orbitron] font-bold">
                <i className="fa-solid fa-newspaper"></i> News Zone
            </div>

            <div className="menu">
                <ul className='flex gap-8'>
                    <li>
                        <Link to="/" className="text-blue-500 font-bold">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>

            <div className="btns">
                <button className='bg-blue-500 px-6 py-1 rounded text-white hover:bg-blue-600'>Login</button>
            </div>
        </div>
    )
}

export default Header