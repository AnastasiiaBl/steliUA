import style from './advertising.module.scss';

export default function Advertising() {

    return (
        <>
        <section id="advertising" className={style.advertising}>
            <div className={style.advertising__container}>
                <div className={style.advertising__content}>
                    <h2 className={style.advertising__title}>11 років досвіду в натяжних стелях</h2>
                    <p className={style.advertising__text}>Натяжні стелі - це найпопулярніший вид стельової обробки. У нашому активі вже більше 10 000 задоволених клієнтів. Ми пропонуємо повний спектр послуг від розкрою до установки.</p>
                    <p className={style.advertising__text}>Залишити заявку по телефону: <br />+38 067 603 93 49 <br />+38 067 795 96 54 </p>
                </div>
            </div>
        </section>
        </>
    )
}