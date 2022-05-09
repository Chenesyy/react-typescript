import React from 'react';
import './Project.css';
import landingBG from '../../assets/landing_bg.jpg';

const Project: React.FC = () => {
    return (
        <section id='project'>
            <div className='projectTitle'>
                <span className='letter'>P</span>rojects
            </div>
            <div className='projectCard'>
                <div className="projCard">
                    <img className='projPic' src={landingBG} alt="Avatar" />
                    <h3 className='trial'>Placeholder</h3>
                    {/* <div className="projContainer">
                        <h4><b>John Doe</b></h4>
                        <p>Architect & Engineer</p>
                    </div> */}
                </div>
                <div className="projCard">
                    <img className='projPic' src={landingBG} alt="Avatar" />
                    {/* <div className="projContainer">
                        <h4><b>John Doe</b></h4>
                        <p>Architect & Engineer</p>
                    </div> */}
                </div>
                <div className="projCard">
                    <img className='projPic' src={landingBG} alt="Avatar" />
                    {/* <div className="projContainer">
                        <h4><b>John Doe</b></h4>
                        <p>Architect & Engineer</p>
                    </div> */}
                </div>
                <div className="projCard">
                    <img className='projPic' src={landingBG} alt="Avatar" />
                    {/* <div className="projContainer">
                        <h4><b>John Doe</b></h4>
                        <p>Architect & Engineer</p>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default Project;

/**
 * Projects:
 * - Compiler
 * - Thesis
 * - SE
 * - GWA (?)
 */