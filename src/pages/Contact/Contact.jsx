import {useRef, useState} from 'react';
import emailjs from 'emailjs-com';
import Field from './Field'
import { Transition } from 'react-transition-group';
import { easingMaterial, tl } from '../../scripts/gsap';
import ReCAPTCHA from 'react-google-recaptcha';
import { ReCaptchaKey } from '../../config';



export default function Contact() {
    const initialFormState = {
        name : '',
        objet : '',
        email : '',
        message: '',
        rgpd: false,
    }

    const transitionsStyles = {
        entering: {
            opacity: 1,
        },
        entered: {
            opacity: 1
        },
        exiting: {
            opacity: 0
        },
        exited: {
            opacity: 0
        },
    }

    const [formState, setForm] = useState(initialFormState)

    const nameRef = useRef(null)
    const objRef = useRef(null)
    const errorMail = useRef(null)
    const emailRef = useRef(null)
    const sendRefMessage = useRef(null)
    const sendedRefMessage = useRef(null)
    const messageRef = useRef(null)
    const recaptchaRef = useRef(null)

    const [showError, setShowError] = useState(false)
    const [sendMail, setSendMail] = useState(false)

    const regex = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const handleSubmit = e => {
        e.preventDefault();

        tl.to(sendRefMessage.current, {
            y: -50,
            x: 50,
            opacity: 0,
            ease: easingMaterial
        })

        emailjs.sendForm('service_mvjasgg', 'template_chldx8a', e.target, 'user_ljGHNtCr1WXh4Sr1eH07W')
        .then(() => {
            setTimeout(() => {
                setForm(initialFormState)
                setSendMail(true)
                tl.fromTo(sendedRefMessage.current, {
                    y: -50,
                    opacity: 0
                }, {
                    y: 0,
                    x: 0,
                    opacity: 1
                })

                setTimeout(() => {
                    tl.to(sendedRefMessage.current, {
                        y: -50,
                        x: 50,
                        opacity: 0
                    })

                    setTimeout(() => {
                        setSendMail(false)
                        tl.fromTo(sendRefMessage.current, {
                            x: 50,
                            opacity: 0
                        }, {
                            opacity: 1,
                            x: 0,
                            y: 0
                        })
                        recaptchaRef.current.reset()
                    }, 500)

                }, 1500)

            }, 400)
            
        }, (error) => {console.log(error.text)})
    }

    const verifingEmail = (value) => {
        const isValidEmail = regex.test(value)

        if (value === '' || isValidEmail) {
            setShowError(false)
            return value
        }
        if (!isValidEmail && !showError) {
            setShowError(true)
            return value
        }
        return value
    }

    const handlechangeInput = event => {
        const value = () => {
            switch (event.target.type) {
                case 'checkbox': return event.target.checked
                case 'email' : return verifingEmail(event.target.value)
                default: return event.target.value
        }}
        setForm({...formState, [event.target.name]: value()})
    }

    return (
        <section className="Contact__project_container">
            <div className="row">
            <div className = "Contact_content">
            <p>Et si on discutait de votre projet &#8239;?</p>
            <br/>
            <p><span>*</span>&#8239;: Champs obligatoire</p>
            </div>

            <div className="form_box">
            <form onSubmit = {handleSubmit} className="form_content">
                <div className="form_box_item">
                    <Field  name='name' label="Nom" onChange={e => handlechangeInput(e)} 
                            ref={nameRef} requiredValue={true} type="text" value={formState.name} />
                </div>

                <div className="form_box_item">
                    <Field  name='objet' label="Objet" onChange={e => handlechangeInput(e)} 
                            ref={objRef} requiredValue={false} type="text" value={formState.objet} />
                </div>

                <div className="form_box_item">
                
                    <Field  name='email' label="Courriel" 
                        type="email" ref={emailRef}
                        onChange={e => handlechangeInput(e)} 
                        requiredValue={true} 
                        value={formState.email} />

                        <Transition 
                        in={showError} 
                        timeout={300}
                        nodeRef = {errorMail}
                        >
                        {state => (<div ref={errorMail} className= "emailError" style={{...transitionsStyles[state]}}> Votre courriel n'est pas valide&#8239;!</div>)}
                        </Transition>
                </div>

                <div className="form_box_item">
                    <label htmlFor="message">Message<span>*</span>&#8239;:</label>
                    <textarea name="message" id="message" required={true} ref={messageRef} rows="5" value={formState.message} onChange={e => handlechangeInput(e)}/>
                </div>

                <div className="form_box_item">
                    <input type="checkbox" id="Rgpd" name="rgpd" required={true} value="yes" checked={formState.rgpd} onChange={e => handlechangeInput(e)}/>
                    <label htmlFor="Rgpd">
                        <span>*</span>&#8239;
                        En soumettant ce formulaire, j'accepte que les informations saisies soient exploitées dans le cadre de la relation commerciale qui peut en découler.
                        Pour connaître et exercer vos droits notamment de retrait de votre consentement à l'utilisation des données collectées par ce formulaire, veuillez consulter la page politique de confidentialité.
                    </label>
                </div>
                <ReCAPTCHA
                sitekey = {ReCaptchaKey}
                ref={recaptchaRef}
                />

                <button type="submit" value="Envoyer"> 
                { !sendMail ? <p ref={sendRefMessage}>Envoyer</p>: 
                <p ref={sendedRefMessage}> votre message est envoyé</p> 
                } 
                </button>

            </form>

            </div>

            </div>
        </section>
    )
}


