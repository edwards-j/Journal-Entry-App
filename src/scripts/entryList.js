const dataManager = require("./dataManager")
const createJournalEntry = require("./entry")

let createEntryList = () => {
    dataManager.getAllEntries()
    .then((entries) => {
        entries.forEach(entry => {
            document.querySelector("#journalEntry").innerHTML += createJournalEntry(entry)
        }
    )})
    .then(() => {
        let buttons = document.querySelectorAll(".button")
        buttons.forEach(button => button.addEventListener("click", (event) => {
            let div = document.querySelector("section div")
            buttonId = event.target.id.split("--")[1]

            if (buttonId === div.id.split("--")[1]) {
                div.remove();
                dataManager.removeJournalEntry(div.id.split("--")[1]);
            }
        })
    )})
}

module.exports = createEntryList