import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText}) => (
    <div className="info-box">
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn' >
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center 
        neo-brutalism-teal py-4 px-8 text-white mx-5 rounded-lg shadow-lg'>Bienvenido!!
        <br/>
        Mi nombre es <span className='font-semibold'>Alejandro</span> y soy un Ingeniero en Software.
        </h1>
    ),
    2: (
        <InfoBox 
            text="Actualmente vivo en Costa Rica y he tenido la oportunidad de ir 
            adquiriendo experiencia y habilidades durante mi desarrollo profesional."
            link="/about"
            btnText="Sobre mi"
        />
    ),
    3: (
        <InfoBox 
            text="He realizado varios proyectos durante mi carrera profesional, aqui podras ver algunos de ellos."
            link="/projects"
            btnText="Proyectos"
        />
    ),
    4: (
        <InfoBox 
            text="Si te gusto mi trabajo puedes ponerte en contacto conmigo aqui."
            link="/contact"
            btnText="Contacto"
        />
    )
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo