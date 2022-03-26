// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, {useState} from "react";
import {IDropdownItem} from "../models/dropdown";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const languages: IDropdownItem[] = [
    {label: '非洲語', value: 'af'},
    {label: '阿拉伯語', value: 'ar'},
    {label: '梵文', value: 'hi'},
    {label: '繁體中文', value: 'zh-TW'},
]


const Translate: React.FC = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<IDropdownItem>(languages[0])
    const [textToTranslate, setTextToTranslate] = useState<string>('')
    return (
        <div>
            <div className="ui form">
                <label htmlFor="textToTranslate" className="labels">輸入想要翻譯的文字</label>
                <input id="textToTranslate" type="text" value={textToTranslate}
                       onChange={e => setTextToTranslate(e.target.value)}/>
            </div>
            <Dropdown dropdownItems={languages} selectedDropdownItem={selectedLanguage}
                      onSelectedDropdownItemChanged={setSelectedLanguage} labelText="請選擇語言"/>
            <hr/>
            <h3 className="ui header">翻譯後的文字</h3>
            <Convert targetLanguage={selectedLanguage.value} textToTranslate={textToTranslate}/>
        </div>
    )
}
export default Translate;