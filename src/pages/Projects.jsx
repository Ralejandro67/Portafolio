import React from 'react'
import { projects } from '../constants';
import { Link } from 'react-router-dom';
import { tealarrow } from '../assets/icons';
import CTA from '../components/CTA';

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>Mis <span className='blue-gradient_text font-semibold drop-shadow'>Proyectos</span></h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          He realizado una gran variedad de proyectos, que van desde el desarrollo de aplicaciones 
          web hasta la creación de videojuegos. Aqui te mostraré algunos de los proyectos que he realizado.
          Cada uno de los proyectos que podras ver a continuación, se enfoca en un area diferente del desarrollo 
          de software.
        </p>
      </div>
      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`}/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='text-slate-500'>
                {project.description}
              </p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link to={project.link} target='_blank' rel='noopener noreferrer' className='font-semibold text-teal-600'>
                  Ver Proyecto
                </Link>
                <img
                  src={tealarrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className='border-slate-200'/>
      <CTA/>
    </section>
  )
}

export default Projects