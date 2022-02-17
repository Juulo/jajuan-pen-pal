import { fetchLetters, fetchAuthors, fetchRecepients, fetchTopics } from "./dataAccess.js";
import { PenPalSociety } from "./PenPalSociety.js";

// create a variable to assign our queryselector for state change
const mainContainer = document.querySelector("#container")

// create a render function to show our pals in html

// 
const renderPals = () => {
    fetchLetters()
    .then(fetchAuthors)
    .then(fetchRecepients)
    .then(fetchTopics)
    .then (
        () => {
            mainContainer.innerHTML = PenPalSociety()
        }
    )
}

mainContainer.addEventListener("stateChanged",
    () => {
        console.log("State of data changed...")
        renderPals()
    }
)

renderPals()



