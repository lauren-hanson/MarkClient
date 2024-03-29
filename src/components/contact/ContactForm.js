import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { addNewForm } from "../../managers/FormManager"
import "./Contact.css"

export const ContactForm = () => {

    const navigate = useNavigate()

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

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = {
            name: newForm.name,
            email: newForm.email,
            phone: newForm.phone,
            description: newForm.description,

        }
        addNewForm(form)
            .then(response => {
                alert('Email sent!')
            }).then(navigate('/'))
            .catch(error => {
                alert('Error sending email')
            })
    }



    return (
        <>
            {/* <h2>Contact Form</h2> */}
            <form className="contactForm" action="lohanson33@gmail.com" method="post" enctype="text/plain" onSubmit={handleSubmit}>
            <div className="contactParagraph">
                <p >
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                </p>
            </div>
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
                <div>
                    <button type="submit" className="submitButton">Send</button>
                </div>
            </form ></>)
}