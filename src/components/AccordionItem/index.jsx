import { useRef, useEffect } from "react";
import style from "./accordionItem.module.scss";
import { ChevronUp } from "../icons";
import PropTypes from 'prop-types';

export default function AccordionItem({ heading, content, isOpen, onClick }) {
  const contentHeight = useRef();
  console.log(contentHeight)
  useEffect(() => {
    console.log("isOpen changed: ", isOpen);
  }, [isOpen]);


  return (
    <div className={style.item__wrapper}>
      <button className={`${style.item__button} ${isOpen ? style.active : ""}`} onClick={onClick}>
        <p className={style.item__heading}>
          {heading}
          <span className={`${style.item__icon} ${isOpen ? style.chevronUp : style.chevronDown}`}>
            <ChevronUp/>
          </span>
        </p>
      </button>
      <div
          className={style.item__contentContainer}
          ref={contentHeight}
          style={
            isOpen
              ? { height: contentHeight.current.scrollHeight }
              : { height: "0px" }
          }
        >
          <p className={style.item__content}>{content}</p>
        </div>
    </div>
  );
}


AccordionItem.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};