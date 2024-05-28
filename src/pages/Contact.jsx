import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber';
import Duck from '../models/Duck';
import Loader from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LinkedIn from "../assets/images/linkedin.png";
import Github from "../assets/images/github.png";

const Contact = () => {
  const { t } = useTranslation();
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
      showAlert({ show: true, text: t('contactPage_AlertF'), type: 'danger' });

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
      showAlert({ show: true, text: t('contactPage_AlertS'), type: 'success' });

      setTimeout(() => {
        hideAlert();
        setcurrentAnimation('idle')
        setForm({ name: '', email: '', message: '' });
      }, 3000);

    }).catch((error) => {
      setIsLoading(false);
      showAlert({ show: true, text: t('contactPage_AlertE'), type: 'danger' });
      setcurrentAnimation('idle');
    })
  };

  const handleFocus = () => setcurrentAnimation('walk');
  const handleBlur = () => setcurrentAnimation('idle');

  const toggleLinkedIn = () => {
    window.location.href='https://www.linkedin.com/in/rafael-alejandro-rosales-muñoz-8665b1186/';
  };

  const toggleGithub = () => {
    window.location.href='https://github.com/Ralejandro67';
  };
  

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {alert.show && <Alert{...alert} />}
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>{t('contactPage_Title')}</h1>
        <form className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}
        >
          <label className='text-black-500 font-semibold'>
            {t('contactPage_Name')}
            <input 
              type='text' 
              className='input' 
              name='name' 
              placeholder={t('contactPage_NameP')}
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            {t('contactPage_Email')}
            <input 
              type='email' 
              className='input' 
              name='email' 
              placeholder={t('contactPage_EmailP')}
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            {t('contactPage_Message')}
            <textarea 
              className='textarea'
              rows={4} 
              name='message' 
              placeholder={t('contactPage_MessageP')}
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
            {isLoading ? t('contactPage_Btn1') : t('contactPage_Btn2')}
          </button>
        </form>
        <div className='flex pt-8 w-full justify-center items-center'>
            <button 
              onClick={toggleLinkedIn} 
              className='w-12 h-12 rounded-full bg-center bg-cover mx-2'
              style={{ backgroundImage: `url(${LinkedIn})`}}
            >
            </button>
            <button 
              onClick={toggleGithub} 
              className='w-12 h-12 rounded-full bg-center bg-cover mx-2'
              style={{ backgroundImage: `url(${Github})`}}
            >
            </button>
          </div>
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