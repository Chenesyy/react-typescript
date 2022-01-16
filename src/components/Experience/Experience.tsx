import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
    return (
        <section id='expi'>
            <div className='expiTitle'>
                <span className='letter'>E</span>xperience
            </div>
            <div className='expiList'>
                <div className='expiContainer'>
                    <span className='expiPos'>Associate Back-end Software Engineer</span><br></br>
                    <span className='expiYears'>Aug 2021 - Present</span><br></br>
                    <span className='expiOrg'>Manulife IT Delivery Center Asia</span><br></br>
                    <span className='expiDetails'>Full-time</span><br></br>
                </div>
                <div className='expiContainer'>
                    <span className='expiPos'>Course Hero Tutor</span><br></br>
                    <span className='expiYears'>July 2021 - Aug 2021</span><br></br>
                    <span className='expiOrg'>Course Hero</span><br></br>
                    <span className='expiDetails'>Topics covered: Computer Science Fundamentals, Programming (Python & Java), Software Engineering Concepts</span><br></br>
                </div>
                <div className='expiContainer'>
                    <span className='expiPos'>Artificial Intelligence Research Apprentice</span><br></br>
                    <span className='expiYears'>Jul 2020 - Sep 2020</span><br></br>
                    <span className='expiOrg'>Senti Techlabs Inc.</span><br></br>
                    <span className='expiDetails'>Internship</span><br></br>
                </div>
            </div>
        </section>
    );
};

export default Experience;