import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import { useTranslation } from 'react-i18next';

const InfoBox = ({ text, link, btnText}) => (
    <div className="info-box">
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn' >
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const HomeInfo = ({ currentStage }) => {
    const { t } = useTranslation();

    const renderContent = {
        1: (
            <h1 className='sm:text-xl sm:leading-snug text-center font-medium 
            neo-brutalism-teal py-4 px-8 text-white mx-5 rounded-lg shadow-lg'>{t('welcome_message')}
            <br/>
            {t('introduction1')}<span className='font-semibold'>Alejandro</span>{t('introduction2')}
            <br/>
            {t('interaction_note')}
            </h1>
        ),
        2: (
            <InfoBox 
                text={t('about_text')}
                link="/about"
                btnText={t('about')}
            />
        ),
        3: (
            <InfoBox 
                text={t('projects_text')}
                link="/projects"
                btnText={t('projects')}
            />
        ),
        4: (
            <InfoBox 
                text={t('contact_text')}
                link="/contact"
                btnText={t('contact_button')}
            />
        )
    }

    return renderContent[currentStage] || null;
}

export default HomeInfo