import React from "react";
import Accordion from "./components/Accordion";
import {IAccordionItem} from "./models/i-accordion-item";
import Search from "./components/Search";

const items: IAccordionItem[] = [
    {title: '什麼是React', content: 'React是一個用Javascript建構成的前端框架'},
    {title: '為何要使用React', content: '因為React是開發者最愛的JS庫'},
    {title: '如何使用React', content: '我們可以創造元件來使用React的各種功能'},
]

const App = () => {
    return (
        <div>
            {/*<Accordion items={items}/>*/}
            <Search/>
        </div>
    )
}
export default App;