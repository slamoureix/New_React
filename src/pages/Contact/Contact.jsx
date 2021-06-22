import React from 'react';

export default function Contact() {
    const ref = React.createRef()
    return (
        
        <div className="Contact" ref={ref}>
            
            <p className="Contact_content"> 
            Et si on discutait de votre projet ?
            <br/>
            <span>
                c.&#8239;&gt;&#8239;<a className= "link" href ="mailto:lamoureixs@gmail.com">lamoureixs@gmail.com</a>
            </span>
            </p>
        </div>
    )
}
