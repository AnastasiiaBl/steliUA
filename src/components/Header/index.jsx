import style from './header.module.scss';
import { useState, useEffect } from "react";
// import { scrollToTop } from "../../utils";
// import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { NavPhone, HeaderPhone } from '../icons';


export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const isDesktop = useMediaQuery({ minWidth: 768 });

    function toggleBurgerMenu() {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        function handleScroll() {
          if (window.scrollY > 0) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        }
    
        window.addEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!isDesktop && isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
    }, [isDesktop, isOpen]);

    return (
    <>
    <header className={style.header}>
      <div className={`${style.header__wrapper} ${scrolled && style.header__scrolled}`}>
        <div className={`${style.header__container} ${scrolled && style.header__container_scrolled}`}>
          <div className={style.header__logo}>
            <h1 className={style.header__logoTitle}>SteliUA</h1>
          </div>
          <div className={style.header__nav}>
          <nav className={`${style.nav} ${isOpen && style.active}`}>
            <ul className={style.nav__list}>
              <li className={style.nav__item}> <a href="">Головна</a> </li>
              <li className={style.nav__item}><a href="">Про нас</a></li>
              <li className={style.nav__item}><a href="">Галерея</a></li>
              <li className={style.nav__item}><a href="">Контакти</a></li>
            </ul>
            {!isDesktop && (
              <div className={style.nav__phone}> 
                <NavPhone/>
                <div className={style.nav__phoneNumber}>
                  <a href="tel:+380676039349">+38 067 603 93 49</a>
                  <a href="tel:+380677959654">+38 067 795 96 54</a>
                </div>
              </div>
            )}
          </nav>
          {isDesktop && (
            <div className={`${style.nav__phone}`}> 
              <HeaderPhone/>
              <div className={style.nav__phoneNumber}>
                <a href="tel:+380676039349">+38 067 603 93 49</a>
                <a href="tel:+380677959654">+38 067 795 96 54</a>
              </div>
            </div>
          )}
          </div>
          <button type="button" className={`${style.nav__burger} ${isOpen ? style.active : ''}`} onClick={toggleBurgerMenu}> </button>
        </div>
      </div>
    </header>
    </>
    );
}