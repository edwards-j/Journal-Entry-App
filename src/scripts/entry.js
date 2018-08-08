let createJournalEntry = (entry) => {
    return `
        <div style="border: 2px solid gray" id="div--${entry.id}">
            <h2>${entry.title}</h2>
            <p>${entry.content}</p>
            <p>Date Posted: ${entry.date}</p>
            <button class= "button" id="btn--${entry.id}">Delete me!</button>
        </div>
    `
}

module.exports = createJournalEntry