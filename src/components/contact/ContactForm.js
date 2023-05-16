import { useState } from "react"
import { addNewForm } from "../../managers/FormManager"
import "./Contact.css"

export const ContactForm = () => {


    const [newForm, setNewForm] = useState({
        name: "",
        email: "",
        phone: "",
        description: ""
    })

    const changeFormState = (event) => {
        const copy = { ...newForm }
        copy[event.target.name] = event.target.value
        setNewForm(copy)
    }


    return (
        <>
            {/* <h2>Contact Form</h2> */}
            <div className="contactForm">
                <div>
                    <fieldset className="formItem">
                        <label htmlFor="name">Name: </label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={newForm.name}
                            onChange={changeFormState} />
                    </fieldset>
                </div>
                <div>
                    <fieldset className="formItem">
                        <label>Email: </label>
                        <input
                            type="text"
                            name="email"
                            required
                            value={newForm.email}
                            onChange={changeFormState} />
                    </fieldset>
                </div>
                <div>
                    <fieldset className="formItem">
                        <label>Phone #: </label>
                        <input
                            type="text"
                            name="phone"
                            required
                            value={newForm.phone}
                            onChange={changeFormState} />
                    </fieldset>
                </div>
                <div>
                    <fieldset className="formItem">
                        <label>Project Description: </label>
                        <textarea
                            type="text"
                            name="description"
                            required
                            value={newForm.description}
                            onChange={changeFormState}
                            rows='10' cols='50'
                        />
                    </fieldset>
                </div>
                <button type="submit"
                    onClick={evt => {
                        evt.preventDefault()

                        const form = {
                            name: newForm.name,
                            email: newForm.email,
                            phone: newForm.phone,
                            description: newForm.description,

                        }

                        // Send POST request to your API
                        addNewForm(form).then(
                            window.alert('Your info has been sent!')
                        )
                    }}
                    className="btn gameButton">Submit Form</button>
            </div ></>)
}