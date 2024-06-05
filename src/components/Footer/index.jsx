import style from "./footer.module.scss";
import { LogoUA, Instagram } from "../icons";

function Footer() {
  return (
    <footer id="footer" className={style.footer}>
      <div className={style.footer__container}>
        <div className={style.footer__logoSection}>
          <a className={style.footer__logo}>
            <LogoUA />
            <span className={style.footer__title}>SteliUA</span>
          </a>
          <p className={style.footer__subtitle}>Кременчук, Світловодськ, Горішні плавні</p>
          <p className={style.footer__subtitle}>Ми на зв&apos;язку: Пн-Сб, з 9:00-18:00</p>
        </div>
        <nav className={style.footer__menu}>
          <div className={style.footer__info}>
            <h3 className={style.footer__menuTitle}>INFO</h3>
            <ul className={style.footer__menuList}>
              <li className={style.footer__infoItem}><a href="#home">Головна</a></li>
              <li className={style.footer__infoItem}><a href="#servises">Види послуг</a></li>
              <li className={style.footer__infoItem}><a href="#works">Наші роботи</a></li>
            </ul>
          </div>
          <div className={style.footer__social}>
            <h3 className={style.footer__menuTitle}>Контакти</h3>
            <ul className={style.footer__menuList}>
              <li className={style.footer__socialItem}>
                <a href="tel:+380676039349" className={style.footer__socialLink}>+38 067 603 93 49</a>
              </li>
              <li className={style.footer__socialItem}>
                <a href="tel:+380677959654" className={style.footer__socialLink}>+38 067 795 96 54</a>
              </li>
              <li className={style.footer__socialItem}>
                <a
                  href='#'
                  className={style.footer__socialLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram/>
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className={style.footer__devInfo}>
          <span>SteliUA © 2024 </span>
          <span>&nbsp; All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
