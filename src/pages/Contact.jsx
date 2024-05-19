import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber';
import Duck from '../models/Duck';
import Loader from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setcurrentAnimation] = useState('idle')

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setcurrentAnimation('walk');

    if (!form.name || !form.email || !form.message) {
      setIsLoading(false);
      showAlert({ show: true, text: 'Por favor, completa todos los campos.', type: 'danger' });

      setTimeout(() => {
        hideAlert();
        setcurrentAnimation('idle')
      }, 3000);
      return;
  }

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Alejandro',
        from_email: form.email,
        to_email: 'ralejandro20067@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      showAlert({ show: true, text: 'Mensaje enviado correctamente.', type: 'success' });

      setTimeout(() => {
        hideAlert();
        setcurrentAnimation('idle')
        setForm({ name: '', email: '', message: '' });
      }, 3000);

    }).catch((error) => {
      setIsLoading(false);
      showAlert({ show: true, text: 'Error al mandar el mensaje.', type: 'danger' });
      setcurrentAnimation('idle');
    })
  };

  const handleFocus = () => setcurrentAnimation('walk');
  const handleBlur = () => setcurrentAnimation('idle');
  

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {alert.show && <Alert{...alert} />}
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Ponte en contacto</h1>
        <form className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}
        >
          <label className='text-black-500 font-semibold'>
            Nombre
            <input 
              type='text' 
              className='input' 
              name='name' 
              placeholder='Tu nombre...'  
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Correo Electrónico
            <input 
              type='email' 
              className='input' 
              name='email' 
              placeholder='ejemplo@mail.com' 
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Mensaje
            <textarea 
              className='textarea'
              rows={4} 
              name='message' 
              placeholder='En que puedo ayudarte?...' 
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button 
            className='btn' 
            type='submit'
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas camera={{
          position: [0, 0, 5],
          fov: 75,
          near: 0.1,
          far: 1000
        }}>
          <directionalLight intensity={2.5} position={[0, 0, 1]}/>
          <ambientLight intensity={0.5}/>
          <Suspense fallback={<Loader/>}>
            <Duck
              currentAnimation={currentAnimation}
              position={[0.5, -1.8, -4]}
              rotation={[12.9, -0.5, 0]}
              scale={[2.5, 2.5, 2.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact