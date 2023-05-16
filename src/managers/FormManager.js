export const getForms = () => {
    return fetch("http://localhost:8000/forms"
        .then(response => response.json()))
}

export const getFormById = (id) => {
    return fetch(`http://localhost:8000/forms/${id}`).then((response) => response.json())
}

export const addNewForm = (post) => {
    return fetch("http://localhost:8000/forms", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify(post),
    })
}

export const updateForm = (id, form) => {
    return fetch(`http://localhost:8000/forms/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
    });
};

export const deleteForm = (id) => {
    return fetch(`http://localhost:8000/forms/${id}`, {
        method: "DELETE"
    })
}