import React, {Fragment, useEffect, useState} from "react";

const Route: React.FC<{ path: string }> = ({path, children}) => {
    const [myPathName, setMyPathName] = useState<string>(window.location.pathname);
    useEffect(() => {
        const listener = (event: Event) => {
            setMyPathName(window.location.pathname);
        }
        window.addEventListener('locationChanged', listener);

        return () => {
            window.removeEventListener('locationChanged', listener);
        }

    }, []);
    if (path === myPathName) {
        return <Fragment>
            {children}
        </Fragment>
    }
    return null
}
export default Route;