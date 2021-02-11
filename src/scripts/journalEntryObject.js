export const createSingleEntryFunction = (entry) => {
    console.log(entry);
    return `
        <div class=class='col-md-3 card mb-4 bg-light'>
            <div class="concept">Concept: ${entry.concept}</div>
            <div class="date">Date: ${entry.date}</div>
            <div class="entry">Entry: ${entry.entry}</div>
            <div class="mood">Mood: ${entry.mood.label}</div>
            <br>
        </div>
    `
}

