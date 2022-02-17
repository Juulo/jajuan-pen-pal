import { getLetters } from "./dataAccess.js"
import { getTopics } from "./dataAccess.js"
// create a compenent that makes a string with our letter
const convertLetterToList = (letter) => {
    
    return `
    <div class="letterCard">
        <p class="forLetterWritten">
            ${letter.recepient.name}, ${letter.recepient.email}<br>
            ${letter.letter}<br>
            ${letter.author.name}, ${letter.author.email}<br>
            Sent on ${letter.timestamp}
        </p>
        <div class="forTopicType">
            <p>
                ${letter.topic.type}
            </p>
        </div>
    </div>
    `
}

// create a function
export const PenPal = () => {
    // set a variable to our function
    const letters = getLetters()

    return `<div>
                ${
                    letters.map(convertLetterToList).join("")
                }
            </div>
    `
}

