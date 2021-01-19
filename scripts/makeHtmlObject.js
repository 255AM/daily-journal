export const createSingleEntryFunction = (entry) => {
    return `
        <section class="entry_card">
            <div class="entry_id">${entry.id}</div>
            <div class="entry_date">${entry.date}</div>
            <div class="entry_entry">${entry.entry}</div>
            <div class="entry_mood">${entry.mood}</div>
        </section>
    `
}

