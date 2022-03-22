import React, {useState} from "react";
import {IAccordionItem} from "../models/i-accordion-item";


const Accordion: React.FC<{ items: IAccordionItem[] }> = ({items}) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const titleClickHandler = (index: number) => {
        setActiveIndex(index);
    }
    const renderedItems = items.map((item, idx) => (
        <React.Fragment key={item.title}>
            <div
                className={`title${idx === activeIndex ? ' active' : ''}`}
                onClick={(event) => {
                    titleClickHandler(idx)
                }}
            >
                <i className="dropdown icon"/>
                {item.title}
            </div>
            <div className={`content${idx === activeIndex ? ' active' : ''}`}>
                {item.content}
            </div>
        </React.Fragment>
    ));
    return (
        <div className='ui styled accordion'>
            {renderedItems}
        </div>
    )
}

export default Accordion;