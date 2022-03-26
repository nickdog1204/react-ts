import React, {useEffect, useRef, useState} from "react";
import {IDropdownItem} from "../models/dropdown";

interface IDropdownProps {
    dropdownItems: IDropdownItem[];
    selectedDropdownItem: IDropdownItem;
    onSelectedDropdownItemChanged: (item: IDropdownItem) => void;
    labelText: string;
}


const Dropdown: React.FC<IDropdownProps> =
    ({
         dropdownItems,
         selectedDropdownItem,
         onSelectedDropdownItemChanged,
         labelText
     }) => {
        const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
        const ref = useRef<HTMLDivElement>(null);
        const toggleHandler = () => {
            setIsMenuOpen(prevState => !prevState);
        }
        useEffect(() => {
            const listener = (event: MouseEvent) => {

                if (!ref.current!.contains((event.target as HTMLElement))) {
                    setIsMenuOpen(false);
                }
            }
            document.body.addEventListener('click', listener, {capture: true})
            return () => {
                document.body.removeEventListener('click', listener, {capture: true})
            }
        }, [])


        const renderedOptions = dropdownItems
            .filter(dropdownItem => dropdownItem.value !== selectedDropdownItem.value)
            .map(dropdownItem => {
                return (
                    <div
                        key={dropdownItem.value}
                        className="item"
                        onClick={(event) => {
                            onSelectedDropdownItemChanged(dropdownItem);
                            console.log('ITEM CLICK')
                        }}
                    >
                        {dropdownItem.label}
                    </div>
                )
            })

        return (
            <div className="ui form">
                <div className="field">
                    <label htmlFor='dropdownList' className="label">{labelText}</label>
                    <div ref={ref} className={`ui selection dropdown${isMenuOpen ? " visible active" : ''}`}
                         onClick={() => {
                             toggleHandler();
                             console.log('DROPDOWN CLICK')
                         }}>
                        <i className="icon dropdown"/>
                        <div className="text">{selectedDropdownItem.label}</div>
                        <div className={`menu${isMenuOpen ? " visible transition" : ''}`}>
                            {renderedOptions}
                        </div>
                    </div>

                </div>
            </div>
        )
    };
export default Dropdown;