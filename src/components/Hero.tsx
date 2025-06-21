import React from 'react'; 
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section className='hero'>
            <div className='content'>
                <h3>La aventura vale la pena</h3>
                <p>Descrube nuevos lugares con nosotros, la aventura te espera</p>
                <a href="#" className='btn'>Descubre mas</a>
            </div>

            <div className='video-container'>
                <video src='/videos/vid-3.mp4' id='video-slider' loop autoPlay muted></video>
            </div>
        </section>
    );
};

export default Hero;