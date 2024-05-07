import style from './banner.module.scss';

export default function Banner() {

    return (
        <>
        <section id="home" className={style.banner}>
            <div className={style.banner__container}>
                <div className={style.banner__content}>
                    <h2 className={style.banner__title}>Натяжні стелі від виробника за найкращими цінами</h2>
                    <p className={style.banner__text}>Виготовлення та монтаж</p>
                    <p className={style.banner__text}>Встановлення стель будь-якої складності</p>
                    <button className={style.banner__btn}>Залишити заявку</button>
                </div>
            </div>
        </section>
        </>
    )
}