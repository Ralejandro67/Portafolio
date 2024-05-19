import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>
            Si deseas saber mas sobre mi, <br className='max-sm:block hidden'/>
            puedes ver mis proyectos o contactarme.
        </p>
        <Link to='/contact' className='btn'>Contacto</Link>
    </section>
  )
}

export default CTA