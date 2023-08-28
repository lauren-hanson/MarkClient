export const getMediaTypes = () => {
    return fetch("http://localhost:8000/mediaTypes"
        .then(response => response.json()))
}

export const getMediaTypeById = (id) => {
    return fetch(`http://localhost:8000/mediaTypes/${id}`).then((response) => response.json())
}