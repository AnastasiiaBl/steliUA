import style from './advantages.module.scss';
import { Measuring, Variety, Safety, Wallet } from '../icons';

export default function Advantages() {

    return (
        <>
        <section className={style.advantages}>
            <div className={style.advantages__container}>
                <ul className={style.advantages__list}>
                    <li className={style.advantages__item}>
                        <div className={style.advantages__img}> <Measuring/> </div>
                        <div className={style.advantages__itemInfo}>
                            <h3 className={style.advantages__itemTitle}>Безкоштовний виїзд на замір</h3>
                            <p className={style.advantages__itemText}>Ми докладно розповімо вам про всі процеси, матеріали, ціни. Прибуваємо на замір в обумовлений час.</p>
                        </div>
                    </li>
                    <li className={style.advantages__item}>
                        <div className={style.advantages__img}> <Variety/> </div>
                        <div className={style.advantages__itemInfo}>
                            <h3 className={style.advantages__itemTitle}>Широкий асортимент</h3>
                            <p className={style.advantages__itemText}>Ми пропонуємо клієнтам товари та послуги перевіреної якості. Маємо різноманітний ассортимент товарів на складі.</p>
                        </div>
                    </li>
                    <li className={style.advantages__item}>
                        <div className={style.advantages__img}> <Safety/> </div>
                        <div className={style.advantages__itemInfo}>
                            <h3 className={style.advantages__itemTitle}>Надійність та досвід</h3>
                            <p className={style.advantages__itemText}>В нашій команді працюють досвідчені майстри, кожен з яких має багаторічний досвід роботи у сфері встановлення натяжних стель.</p>
                        </div>
                    </li>
                    <li className={style.advantages__item}>
                        <div className={style.advantages__img}> <Wallet/> </div>
                        <div className={style.advantages__itemInfo}>
                            <h3 className={style.advantages__itemTitle}>Доступні ціни</h3>
                            <p className={style.advantages__itemText}>Ціни на товари та послуги завжди є доступними, а якість роботи на найвищому рівні. </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        </>
    )
}