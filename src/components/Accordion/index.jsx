import AccordionItem from "../AccordionItem";
import data from "./data.js";
import { useState } from "react";
import style from "./accordion.module.scss";

export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className={style.accordion}>
        <div className={style.accordion__container}>
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            heading={item.heading}
            content={item.content}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
      </div>
    );
  }