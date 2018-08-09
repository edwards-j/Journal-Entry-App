const formManager = require("./journalForm")
const dataManager = require("./dataManager")
const createEntryList = require("./entryList")
const $ = require("jquery")

$("#journalForm").html(formManager.renderEntryForm());
createEntryList();


$("#saveEntryButton").on("click", () => {
    // let d = new Date()
    // let day = d.getDate()
    // let month = d.getMonth() + 1
    // let year = d.getFullYear()

    // let minute = d.getMinutes()
    // let hour = d.getHours();

    // let fullTime = `${hour}:${minute}`
    // let fullDate = `${day}/${month}/${year}`

    // let datePlusTime = `${fullTime} on ${fullDate}`

    if (document.querySelector("#entryTitle").value === "" && document.querySelector("#entryContent").value === "") {
        alert("Please enter a title and journal entry")
    } else if (document.querySelector("#entryTitle").value === "") {
        alert("Please enter a title for this post")
    } else if (document.querySelector("#entryContent").value === "") {
        alert("Please write a post before submitting")
    } else {

        const newEntry = {
            title: $("#entryTitle").val(),
            content: $("#entryContent").val(),
            date: Date(Date.now())
        }

        $("#journalEntry").html("");

        dataManager.saveJournalEntry(newEntry)
            .then(() => formManager.clearForm())
            .then(() => createEntryList())
    }
})