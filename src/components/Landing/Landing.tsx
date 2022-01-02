import React from 'react';
import landingBG from '../../images/landing_bg.jpg';
import './Landing.css';
import Typewriter from 'typewriter-effect';
import About from '../About/About';

const Landing: React.FC = () => {
    return (
        <section id="landing">
            <h1 className="greetings">
                Hey there! I'm Chester Sy
            </h1>
            <h3 className="info">
                <Typewriter
                    options={{
                        strings: [
                            'Back-end Software Engineer', 
                            'an Aspiring Full Stack Software Engineer',
                            'BS Computer Science Graduate',
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 80,
                    }}
                />
            </h3>
            <div className="contact">
                <button className="button-28">Contact Me</button>
            </div>
        </section>
    );
};

export default Landing;

/**
 *               <img className="img-fluid" src={landingBG} alt="Landing Background" />
 */

//    max-width: 100%;
//height: auto;
//position: relative;
//z-index: 1;