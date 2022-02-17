const API = "http://localhost:8088"

const mainContainer = document.querySelector("#container")
// create a function to export our pals from our database
export const fetchLetters = () => {
    return fetch(`${API}/letters?_expand=author&_expand=recepient&_expand=topic`)
    .then(res => res.json())
    .then(
        (letter) => {
            applicationState.letters = letter
        }
    )
}

export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
    .then(res => res.json())
    .then(
        (author) => {
            applicationState.authors = author
        }
    )
}

export const fetchTopics = () => {
    return fetch(`${API}/topics`)
    .then(res => res.json())
    .then(
        (topic) => {
            applicationState.topics = topic
        }
    )
}

export const fetchRecepients = () => {
    return fetch(`${API}/recepients`)
    .then(res => res.json())
    .then(
        (recepient) => {
            applicationState.recepients = recepient
        }
    )
}

// create a function to take our pals and send them to the database
export const setPals = (userLetters) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userLetters)
    }
    return fetch(`${API}/letters`, fetchOptions)
        .then(res => res.json)
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

// create a fuction to delete pals from the database (will need a seperate button for this)
export const deleteLetters = (id) => {
    return fetch(`${API}/letters/${id}`, { method: "DELETE"})
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}
// create an object that holds an array with our penpal objects
const applicationState = {
    letters: [],
    topics: [],
    recepients: [],
    authors: []
}

// create getter function to get our data from the array
export const getLetters = () => {
    return applicationState.letters.map(letter => ({...letter}))
}

export const getTopics = () => {
    return applicationState.topics.map(topic => ({...topic}))
}

export const getRecepients = () => {
    return applicationState.recepients.map(recepient => ({...recepient}))
}

export const getAuthors = () => {
    return applicationState.authors.map(author => ({...author}))
}
