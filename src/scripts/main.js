const formManager = require("./journalForm")
const dataManager = require("./dataManager")
const createEntryList = require("./entryList")

document.querySelector("#journalForm").innerHTML = formManager.renderEntryForm();
createEntryList();

document.querySelector("#saveEntryButton").addEventListener("click", () => {
    let d = new Date()
    let day = d.getDate()
    let month = d.getMonth() + 1
    let year = d.getFullYear()

    let minute = d.getMinutes()
    let hour = d.getHours();

    let fullTime = `${hour}:${minute}`
    let fullDate = `${day}/${month}/${year}`

    let datePlusTime = `${fullTime} on ${fullDate}`

    const newEntry = {
        title: document.querySelector("#entryTitle").value,
        content: document.querySelector("#entryContent").value,
        date: datePlusTime
    }

    document.querySelector("#journalEntry").innerHTML = "";

    dataManager.saveJournalEntry(newEntry)
    .then(() => formManager.clearForm())
    .then(() => createEntryList())
})