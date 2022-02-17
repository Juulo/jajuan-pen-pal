import { Authors } from "./Authors.js"
import { setPals } from "./dataAccess.js"
import { Recepients } from "./Recepients.js"
import { Topics } from "./Topics.js"
// create an event to store our user inputed data to the json file
const mainContainer = document.querySelector("#container")
// tie this event listener to operate when we click our send button
mainContainer.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "submitLetter") {
            const userAuthor = document.querySelector("select[name='userAuthor']").value
            const userLetter = document.querySelector("textarea[name='userLetter']").value
            const userTopic = document.querySelector("input[name='userTopics']:checked").id
            const userRecepient = document.querySelector("select[name='userRecepient']").value
            
            let today = new Date(Date.now())
            today = `${today.getMonth()}/${today.getDate()}/${today.getFullYear()}`

            const sendInfoToAPI = {
                letter: userLetter,
                authorId: parseInt(userAuthor),
                recepientId: parseInt(userRecepient),
                topicId: parseInt(userTopic),
                timestamp: today
            }

            setPals(sendInfoToAPI)
        }
    }
)
// create a component that exports our form in html to our main module
// form should be split by type
// need mostly text types with some radio buttons as well as an option type
export const PenPalLetterForm = () => {
    return `
    <div>
        ${Authors()}
    </div>
    <div>
        <label class="label" for="userLetter">Letter</label>
        <textarea type="text" name="userLetter" class="letterInput"></textarea>
    </div>
    <div>
        ${Topics()}
    </div>
    <div>
        ${Recepients()}
    </div>
    <button class="letterButton" id=submitLetter>Send Letter</button>
    `
}