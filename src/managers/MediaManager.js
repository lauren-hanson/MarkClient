export const getMedias = () => {
    return fetch("http://localhost:8000/medias")
        .then(response => response.json())
}

export const getMediaById = (id) => {
    return fetch(`http://localhost:8000/medias/${id}`).then((response) => response.json())
}