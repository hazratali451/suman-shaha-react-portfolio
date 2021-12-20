import React from 'react';
import './Header.css'
import logo from '../../../images/logo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate()

    return (
        <nav className="navbar navbar-expand-md">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img width='200px' src={logo} alt="" />
                </Link>

                <div className='d-flex  align-items-center'>
                    <button className="btn py-0 shadow-none border-0 joing-btn d-md-none" onClick={() => navigate('/join')} type="submit">Join</button>

                    <button className="navbar-toggler shadow-none mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
                    </button>
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <NavLink style={({ isActive }) => {
                                return {
                                    color: isActive ? "#9B00E5" : ""
                                };
                            }} className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink style={({ isActive }) => {
                                return {
                                    color: isActive ? '#9B00E5' : ''
                                }
                            }} className="nav-link" aria-current="page" to="/services">Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="https://sumanshaha.com/blog">Blog</a>
                        </li>

                        <li className="nav-item">
                            <NavLink style={({ isActive }) => {
                                return {
                                    color: isActive ? '#9B00E5' : ''
                                }
                            }} className="nav-link" aria-current="page" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <li className="nav-item list-style-none">
                            <NavLink style={({ isActive }) => {
                                return {
                                    color: isActive ? '#9B00E5' : ''
                                }
                            }} className="nav-link py-0 px-0 px-md-2" aria-current="page" to="/sign-in">Sign in</NavLink>
                        </li>
                        <button onClick={() => navigate('/join')} className="btn py-0 shadow-none border-0 joing-btn d-none d-md-inline-block" type="submit">Join</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;