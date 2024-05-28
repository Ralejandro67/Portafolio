import { NavLink } from "react-router-dom"
import { useTranslation } from 'react-i18next';
import Spain from "../assets/images/Spain.png";
import Uk from "../assets/images/Uk.png";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className="blue-gradient_text">AR</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-teal' : 'text-black'}>{t('about')}</NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-teal' : 'text-black'}>{t('projects')}</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-teal' : 'text-black'}>{t('contact')}</NavLink>
            <button
              onClick={toggleLanguage}
              className="w-7 h-7 rounded-full bg-center bg-cover"
              style={{
                backgroundImage: `url(${i18n.language === 'es' ? Spain : Uk})`
              }}
            >
            </button>
        </nav>
    </header>
  )
}

export default Navbar