// get our authors from our getter function
import { getAuthors } from "./dataAccess.js";
// set a variable to our getter function for use
// create a compenent that display a drop down for our authors so the user can select one
// using a map method iterate through the array of authors and make a copy of that array to show in a dropdown
export const Authors = () => {
    const authors = getAuthors()

    return `
    <label class="label" for="userAuthor">Authors</label>
    <select class="authorDropdown" name="userAuthor" id="author">
    <option value="0">Choose an author...</option>
    ${authors.map(author => {
        return `<option value="${author.id}">${author.name}</option>`
    }).join("")}
    </select>
    `
}