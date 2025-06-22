import React from 'react'; 
import './styles/Hero.css';
import Button from '@/components/ui/Button';

const Hero = () => {
    return (
        <section className='hero'>
            <div className='content'>
                <h3>La aventura vale la pena</h3>
                <p>Descubre nuevos lugares con nosotros, la aventura te espera</p>
                <Button type='button'>Descubre Mas</Button>
            </div>

            <div className='video-container'>
                <video src='/videos/vid-1.mp4' id='video-slider' loop autoPlay muted></video>
            </div>
        </section>
    );
};

export default Hero;