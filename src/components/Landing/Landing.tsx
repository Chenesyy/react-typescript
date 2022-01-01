import React from 'react';
import landingBG from '../../images/landing_bg.jpg';
import './Landing.css';

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className="intro">Hi there! My name is Chester Sy and welcome to my portfolio!</h1>
            <img className="bg" src={landingBG} alt="Landing Background" />
        </div>
    );
};

export default Landing;

/**
 *         <div className="bg">
            <h1>Hi there! My name is Chester Sy and welcome to my portfolio!</h1>
            <img src={landingBG} alt="Landing Background" />
        </div>

                <div>
            <img src={landingBG} alt="" />
            <h2>A Movie in the Park:<br />Kung Fu Panda</h2>
        </div>

        <div className="HeroContainer">
            <div className="HeroBg">
                <div className="VideoBg">
                    <img src={landingBG} alt="Landing Background" />
                </div>
            </div>
            <div className="HeroContent">
                <div className="HeroH1">
                    Hi there! My name is Chester Sy and welcome to my portfolio!
                </div>
                <div className="HeroP">
                    Sample Paragraph
                </div>
            </div>
        </div>
 */

//    max-width: 100%;
//height: auto;
//position: relative;
//z-index: 1;