const dataManager = Object.create(null, {

    getAllEntries: {
        value: () => fetch("http://localhost:8088/entries?_order=desc&_sort=id")
            .then(response => response.json())

    },
    saveJournalEntry: {
        value: (entry) => {
            return fetch("http://localhost:8088/entries", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(entry)
            }).then(response => response.json())
        }
    },
    removeJournalEntry: {
        value: (IDnumber) => {
            return fetch(`http://localhost:8088/entries/${IDnumber}`, {
                method: "DELETE",
            }).then(response => response.json())
        }
    },
    editJournalEntry: {
        value: (entry) => {
            return fetch("http://localhost:8088/entries", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(entry)
            }).then(response => response.json())
        }
    }
})

module.exports = dataManager