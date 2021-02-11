let entries = []
export const useEntries = () => {
    entries.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
        
    )
    return entries.slice()
}

export const getEntries = () => {
    return fetch('http://localhost:8088/entries?_expand=mood')
        .then(response => response.json())
        .then(parsedEntries => {
            entries = parsedEntries
            console.log(entries);
        })
}

export const saveEntry = entry => {
    return fetch('http://localhost:8088/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
}

export const copyOfSortedJournalFunction = () => {
    //sorts entries into descending order
    const sortedByDate = entries.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    console.log(sortedByDate);
    return sortedByDate
    //returns all jpournal entries in sorted order of dates
}
let moods = []
export const getMoods = () =>{
    return fetch('http://localhost:8088/moods')
    .then(response => response.json())
        .then(parsedMoods => {
            moods = parsedMoods
            console.log(moods);
        })

}

export const useMoods = () =>{
    return moods.slice()
}