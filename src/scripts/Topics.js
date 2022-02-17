import { getTopics } from "./dataAccess.js";

const convertTopicsToRadio = (topic) => {
    return `
        <input type="radio" value="${topic.id}" name="userTopics" id="${topic.id}"/>${topic.type}
    `
}

export const Topics = () => {
    const topics = getTopics()

    return `<label class="label" for="userTopics">Topics</label> 
    ${topics.map(convertTopicsToRadio).join("")}`
}