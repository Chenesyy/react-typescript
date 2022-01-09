import React from 'react';
import './About.css';
import profilePic from '../../assets/Pic.jpg';

const About: React.FC = () => {
    return (
        <section id='about'>
            <img className='profile' src={profilePic} alt='Profile Picture' />
            <div className='title'>
                <span className='letter'>A</span>bout <span className='letter'>M</span>e
            </div>
            <div className='aboutMe'>
                <p className='summary'>
                    Hi! My name is Chester Sy and I am a Software Engineer based in the 
                    Philippines. I graduated from the Pontifical and Royal, Catholic 
                    University of the Philippines, University of Santo Tomas, with a degree 
                    in BS Computer Science. I am determined and highly driven to take 
                    challenges and diligent in completing assigned tasks. I have significant 
                    interests in software development, machine learning, and data science.
                    <br></br><br></br>
                    Aside from programming, I like to play the drums, play basketball, watch 
                    MMA, play online games with friends, cook, eat, and more. It will be 
                    awesome if we have something in common from the things that I mentioned 
                    above!
                </p>
            </div>
        </section>
    );
};

export default About;

/**
 * profile {
 *     -moz-box-shadow: 10px 10px 5px #ccc;
    -webkit-box-shadow: 10px 10px 5px #ccc;
    -khtml-box-shadow: 10px 10px 5px #ccc;
 * }
 */