const formManager = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#entryTitle").value = ""
            document.querySelector("#entryContent").value = ""
        }
    },
    renderEntryForm: {
        value: () => {
            return `
            <fieldset class="has-text-centered">
                <label for="entryTitle">Title:</label><br>
                <input required type="text" id="entryTitle"><br>
                <label for="entryContent">Deep Thoughts</label><br>
                <textarea id="entryContent" cols="50" rows="8" placeholder="Write journal entry here"></textarea><br>
                <button id="saveEntryButton">Save</button><br>
            </fieldset>
            `
        }
    }
})

module.exports = formManager