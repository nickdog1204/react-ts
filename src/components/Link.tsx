import React from "react";


const Link: React.FC<{ className: string; href: string }> = ({className, href, children}) => {
    return (
        <a onClick={(event => {
            event.preventDefault();
            window.history.pushState({}, '', href)

            const navEvent = new PopStateEvent('locationChanged');
            window.dispatchEvent(navEvent);
        })}
           className={className}
           href={href}>{children}</a>
    )

}

export default Link;