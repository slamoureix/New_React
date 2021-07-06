import React from 'react'
/* syntaxe pour faire passer la ref dans un composant enfant via un comp d'ordre sup */
const Field = React.forwardRef((props, ref) => {
    return  <>
            <label htmlFor={props.name}>{props.label}{props.requiredValue ?<><span>*</span>&#8239;:</>:<>&#8239;:</>}</label>
            <input 
            id={props.name} 
            ref={ref} 
            type={props.type} 
            required = {props.requiredValue ? true : false} 
            name={props.name} 
            onChange={props.onChange} 
            onBlur={props.onBlur}
            value={props.value} />
            </>
})

export default Field

