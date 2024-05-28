import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const CTA = () => {
  const { t } = useTranslation();

  return (
    <section className='cta'>
        <p className='cta-text'>{t('CTA_intro1')}<br className='max-sm:block hidden'/>{t('CTA_intro2')}</p>
        <Link to='/contact' className='btn'>{t('CTA_btn')}</Link>
    </section>
  )
}

export default CTA