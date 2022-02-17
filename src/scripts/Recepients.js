
import { getRecepients } from "./dataAccess.js";

// create a function that loops through our mapped array and returns a dropdown of all recepients

export const Recepients = () => {
    const recepients = getRecepients()

    return `
    <label class="label" for="userRecepient">Recepients</label>
    <select class="recepientDropdown" name="userRecepient" id="recepient">
    <option value="0">Choose a recepient...</option>
    ${recepients.map(recepient => {
        return `<option value="${recepient.id}">${recepient.name}</option>`
    }).join("")}
    </select>
    `
}