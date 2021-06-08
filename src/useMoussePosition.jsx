import { useEffect, useState } from "react"

export default function useMoussePosition_2() {
    // on instencie un état local qui a pour valeur init 0.
        const [position, setPosition] = useState({clientX : 0, clientY : 0})
    
        const updatePosition = e => {
            //creation de deux variables qui prenne les valeurs e.pageX et e.pageY (e => event lié à mousemove)
            const {pageX, pageY} = e
            setPosition({pageX, pageY})
        }
    
        useEffect(() => {
            document.addEventListener("mousemove", updatePosition, false)
            document.addEventListener("mouseenter", updatePosition, false)
            
            return () => {
                document.removeEventListener("mousemove", updatePosition, false)
                document.removeEventListener("mouseenter", updatePosition, false)
            }
        }, [])

        return position ;
}

