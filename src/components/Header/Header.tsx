import React from 'react';
import Landing from '../Landing/Landing';
import './Header.css';
import { animateScroll as scroll, Link } from 'react-scroll';
import BurgerMenu from '../../common/Menu';

const Header: React.FC = () => {
    return (
        <div id="header">
                <BurgerMenu />
        </div>
    );
};

export default Header;

/**
 * <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="about" smooth={true} duration={100}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="project" smooth={true} duration={100}>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="expi" smooth={true} duration={100}>Experience</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
 */