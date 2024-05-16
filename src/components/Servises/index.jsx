import style from './servises.module.scss';
import fields from './fields.js';

export default function Servises() {

    return (
        <>
        <section id="servises" className={style.servises}>
            <div className={style.servises__container}>
                <div className={style.servises__content}>
                    <h2 className={style.servises__title}>Види натяжних стель</h2>
                    <p className={style.servises__text}>Залежно від матеріалу натяжні стелі діляться на дві великі групи – плівкові і тканинні. Плівкові натяжні стелі являють собою ПВХ плівку завтовшки 0,17-0,3 мм. По фактурі бувають глянсовими, сатиновими і матовими.</p>
                    <div className={style.servises__list}>
                    {fields.map((field, index) => (
                        <div key={index} className={style.servises__block}>
                        <div className={style.servises__blockImg}>
                            <img src={field.imgSrc} alt={field.title} />
                        </div>
                        <div className={style.servises__blockInfo}>
                            <h3 className={style.servises__blockInfoTitle}>{field.title}</h3>
                            <p className={style.servises__blockInfoText}>{field.text}</p>
                        </div>
                    </div>
                    ))}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}