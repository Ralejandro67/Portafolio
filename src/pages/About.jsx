import React from 'react';
import { skills, experiences, university } from '../constants';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Link } from 'react-router-dom';
import { tealarrow } from '../assets/icons';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>Hola, mi nombre es <span className='blue-gradient_text font-semibold drop-shadow'>Alejandro Rosales</span></h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Soy un Ingeniero en Software de 25 años de nacionalidad Salvadoreña que vive en 
          Costa Rica, soy un desarrollador Full Stack con dominio en distintos lenguajes de programacion, 
          Back End y Front End frameworks y bases de datos locales y en la nube. Me apasiona el solucionador 
          problemas, y disfruto los desafíos al momento de programar.
        </p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>Mis habilidades incluyen:</h3>
        <div className='mt-16 flex flex-wrap gap-11'>
          {skills.map((skill) => (
            <div key={skill.name} className='block-container w-20 h-20 group'>
              <div className='btn-back rounded-xl'/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
              <span className='absolute w-[100%] bottom-0 transform translate-y-full text-center text-black text-xs pt-2 px-2 rounded opacity-0 justify-end group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className='py-16'>
        <h3 className='subhead-text'>Experiencia Laboral:</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            He tenido la oportunidad de trabajar en distintas empresas, en donde, he desarrollado 
            un conjunto de habilidades, permitiendome destacar en areas como gestión de proyectos
            iniciativa en liderazgo, trabajo en equipo y optimización de procesos.
          </p>
        </div>
        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement 
                key={experience.title} 
                date={experience.date} 
                icon={
                <div className='flex justify-center items-center w-full h-full'>
                  <img 
                    src={experience.icon}
                    alt={experience.company_name}
                    className='w-[60%] h-[60%] object-contain'
                  />
                </div>}
                iconStyle={{
                  background: experience.iconBg
                }}
                contentStyle={{ 
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  borderShadow: 'none'
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                    {experience.company_name}
                  </p>
                </div>
                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className='text-slate-500 font-normal pl-1 text-sm'>
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <div className='pt-6'>
        <h3 className='subhead-text'>Educación y Certificaciones:</h3>
        <div className='flex flex-wrap mb-20 mt-12 gap-16'>
          {university.map((prep) => (
            <div className='lg:w-[400px] w-full' key={prep.name}>
              <div className='block-container w-12 h-12'>
                <div className={`btn-back rounded-xl ${prep.theme}`}/>
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={prep.iconUrl}
                    alt="Project Icon"
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
              <div className='mt-5 flex flex-col'>
                <h4 className='text-2xl font-poppins font-semibold'>
                  {prep.name}
                </h4>
                <p className='text-slate-500'>
                  {prep.description}<br/>{prep.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    <hr className='border-slate-200'/>
    <CTA/>
    </section>
  )
}

export default About