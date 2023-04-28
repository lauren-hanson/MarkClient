import "./Contact.css"

export const ContactForm = () => {

    return (
        <>
            <h2>Contact Form</h2>

            <div className="contactForm">
                <fieldset className="input">
                    <label>Name</label>
                    <input
                        type="text" />
                </fieldset>
                <fieldset className="input">
                    <label>Email</label>
                    <input
                        type="email" />
                </fieldset>
                <fieldset className="input">
                    <label>Phone #</label>
                    <input
                        type="phone #" />
                </fieldset>
                <fieldset className="input">
                    <label>Project Description</label>
                    <textarea
                        type="project Description" 
                        rows='100' cols='100'
                        />
                </fieldset>
                <button class="button is-small">
                    Submit
                </button>
            </div></>)
}