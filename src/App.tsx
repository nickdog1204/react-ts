import React, {useState} from "react";
import Accordion from "./components/Accordion";
import {IAccordionItem} from "./models/i-accordion-item";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import {IDropdownItem} from "./models/dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import NavHeader from "./components/NavHeader";

const items: IAccordionItem[] = [
    {title: '什麼是React', content: 'React是一個用Javascript建構成的前端框架'},
    {title: '為何要使用React', content: '因為React是開發者最愛的JS庫'},
    {title: '如何使用React', content: '我們可以創造元件來使用React的各種功能'},
]
const dropdownItems: IDropdownItem[] = [
    {label: '紅色', value: 'red'},
    {label: '綠色', value: 'green'},
    {label: '藍色', value: 'blue'}
];
const showAccordion = () => {
    if (window.location.pathname === '/') {
        return <Accordion items={items}/>
    }
}
const showSearch = () => {
    if (window.location.pathname === '/list') {
        return <Search/>
    }
}
const showDropdown = () => {
    if (window.location.pathname === '/dropdown') {
        return <Dropdown dropdownItems={dropdownItems} selectedDropdownItem={dropdownItems[0]}
                         onSelectedDropdownItemChanged={() => {
                         }}
                         labelText="選擇選擇選擇1顏色"/>
    }
}
const showTranslate = () => {
    if (window.location.pathname === '/translate') {
        return <Translate/>
    }
}

const App = () => {
    const [selectedDropdownItem, setSelectedDropdownItem] = useState<IDropdownItem>(dropdownItems[0])
    return (
        <div>
            <NavHeader/>
            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/list">
                <Search/>
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    dropdownItems={dropdownItems}
                    selectedDropdownItem={selectedDropdownItem}
                    onSelectedDropdownItemChanged={setSelectedDropdownItem} labelText="請輸入顏色"/>
            </Route>
            <Route path="/translate">
                <Translate/>
            </Route>
        </div>
    )
}
export default App;