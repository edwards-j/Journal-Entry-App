const dataManager = require("./dataManager")
const createJournalEntry = require("./entry")

let createEntryList = () => {
    dataManager.getAllEntries()
        .then((entries) => {
            entries.forEach(entry => {
                document.querySelector("#journalEntry").innerHTML += createJournalEntry(entry)
            }
            )
        })
        .then(() => {
            let buttons = document.querySelectorAll(".button")
            buttons.forEach(button => button.addEventListener("click", (event) => {
                let divs = document.querySelectorAll("section div")
                divs.forEach(div => {

                let divID = div.id.split("--")[1]
                let buttonId = event.target.id.split("--")[1]

                if (buttonId === divID) {
                    div.classList.add("bounceOut");
                    dataManager.removeJournalEntry(divID);
                    window.setTimeout(delayRemove, 1000);
                }
                function delayRemove () {
                    div.remove()
                }
            })
            })
        )})
}


module.exports = createEntryList