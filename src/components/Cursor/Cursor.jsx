import React, {useEffect, useRef} from 'react';
import useMoussePosition from '../../useMoussePosition';

export default function Cursor() {
    const {pageX, pageY} = useMoussePosition();
    const cursorRef = useRef();
    
    useEffect(() => {
        cursorRef.current.setAttribute('style', `top: ${pageY - 15}px; left:${pageX - 15}px;`);
    }, [pageX, pageY])

    return <div ref={cursorRef} className="cursor"/>
}
