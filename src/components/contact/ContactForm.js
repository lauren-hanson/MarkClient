import "./Contact.css"

export const ContactForm = () => {

    return (
        <>
            {/* <h2>Contact Form</h2> */}
            <div className="contactForm">
                <div>
                    <fieldset className="formItem">
                        <label htmlFor="name">Name: </label>
                        <input
                            type="text" />
                    </fieldset>
                </div>
                <div>
                    <fieldset className="formItem">
                        <label>Email: </label>
                        <input
                            type="text" />
                    </fieldset>
                </div>
                <div>
                    <fieldset className="formItem">
                        <label>Phone #: </label>
                        <input
                            type="text" />
                    </fieldset>
                </div>
                <div>
                    <fieldset className="formItem">
                        <label>Project Description: </label>
                        <textarea
                            type="text"
                            rows='10' cols='50'
                        />
                    </fieldset>
                </div>
                <button class="button is-small">
                    Submit
                </button>
            </div ></>)
}