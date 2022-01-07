
import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers'

function ContactForm() {


    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
          setFormState({ [e.target.name]: e.target.value });
          console.log('Form', formState);
        }
      };



    function handleChange(e) {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            console.log(isValid)

            if (!isValid) {
                setErrorMessage('Your email SUCKS')
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }

            }
            if (!errorMessage) {
                setFormState({ ...formState, [e.target.name]: e.target.value });
            }
            console.log('errorMessage', errorMessage);
        }
      
    }
    

  
    return (
        <section>
            <h1> Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name"></label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
                </div>
                <div>
                    <textarea name="message" defaultValue={message} rows="5" onBlur={handleChange} />
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                </div>
                <button type="submit"> Submit to me</button>
            </form>
        </section>
    )

}

export default ContactForm;