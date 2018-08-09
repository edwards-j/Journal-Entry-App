const $ = require("jquery")

const formManager = Object.create(null, {
    clearForm: {
        value: () => {
            $("#entryTitle").val("")
            $("#entryContent").val("")
        }
    },
    renderEntryForm: {
        value: () => {
            return `
            <fieldset class="has-text-centered purple-bg has-text-white">
                <label for="entryTitle">Title:</label><br>
                <input required type="text" id="entryTitle"><br>
                <label for="entryContent">Deep Thoughts:</label><br>
                <textarea id="entryContent" cols="50" rows="8" placeholder="Write journal entry here"></textarea><br>
                <button id="saveEntryButton">Save</button><br>
            </fieldset>
            `
        }
    }
})

module.exports = formManager