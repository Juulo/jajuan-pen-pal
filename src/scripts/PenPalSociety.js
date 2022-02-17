import { Authors } from "./Authors.js";
import { PenPal } from "./PenPal.js";
import { PenPalLetterForm } from "./PenPalForm.js";
import { Recepients } from "./Recepients.js";
import { Topics } from "./Topics.js"

export const PenPalSociety = () => {
    return `
    <section class="penPalForm">
        ${PenPalLetterForm()}
    </section>
    <section class="penPal">
        <h2>Letters</h2>
        ${PenPal()}
    </section>
    `
}


