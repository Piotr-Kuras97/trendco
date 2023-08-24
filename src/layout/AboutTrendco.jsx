import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import aboutImage from '../assets/images/aboutimage.jpg'

function AboutTrendco() {
    useEffect(() => {
        AOS.init();
      }, [])

    return ( 
       <main className="about">
            <div className="about__text-container">
                <h2 className="about__title" data-aos="fade-right" data-aos-once="true">Nasza misja</h2>
                <p className="about__text-description" data-aos="fade-right" data-aos-once="true">
                    <strong>TRENDCO.</strong> to platforma dla ludzi, którzy chcą robić to co kochają najbardziej, to czym się na co dzień fascynują, <strong>to co kreuje ich własny świat.</strong> </p>
                <p className="about__text-description" data-aos="fade-right" data-aos-once="true">
                    <strong>Wierzymy</strong>, że dzięki naszej platformie pomożemy Wam stworzyć idealne podwaliny do budowania swojej marki.
                </p> 
                <p className="about__text-description" data-aos="fade-right" data-aos-once="true">
                    <strong>Chcemy</strong>, aby każdy z Was mógł się rozwijać w odpowiednim tempie.
                    <br />
                    <strong>Chcemy</strong>, aby każdy z Was żył wedle własnych zasad i przekonań.
                </p> 
                <p className="about__text-description" data-aos="fade-right" data-aos-once="true">
                    <strong>Jako TRENDCO. pomożemy</strong> znaleźć freelancer’om potencjalnych klientów oraz poszukującym idealnych wykonawców ich zadań.
                </p> 
                <p className="about__text-description" data-aos="fade-right" data-aos-once="true">
                    <strong>Łączmy się wszyscy i twórzmy rzeczy na pozór niemożliwe!</strong>
                </p> 
                <p className="about__text-description" data-aos="fade-right" data-aos-once="true"><strong>TRENDCO. Team</strong></p>  
            </div>
            <div className="about__image-container">
                <img src={aboutImage} alt="" />
            </div>
       </main>
    );
}

export default AboutTrendco;