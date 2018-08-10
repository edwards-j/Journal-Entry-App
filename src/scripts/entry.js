let createJournalEntry = (entry) => {
    return `
        <div class="entry animated bounceIn rounded" id="div--${entry.id}">
            <h2 class="is-size-5 entry-header">${entry.title}</h2>
            <p>${entry.content}</p>
            <hr>
            <p><strong>Date Posted:</strong> ${entry.date}</p>
            <button class= "button" id="btn--${entry.id}">Delete me!</button>
        </div>
    `
}

module.exports = createJournalEntry