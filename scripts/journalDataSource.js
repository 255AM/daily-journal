/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
export const journal = [
    {
        id: 1,
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },
    {
        id: 2,
        date: "07/26/2025",
        concept: "Complex Flexbox",
        entry: "I tried to have an element in my Flexbox layout also be another Flexbox layout. It hurt my brain. I hate Steve.",
        mood: "Sad"
    },
    {
        id: 3,
        date: "07/26/2025",
        concept: "Modules",
        entry: "Modules make me sad",
        mood: "Sad"
    },
    {
        id: 4,
        date: "07/29/2025",
        concept: "Git and Github nav",
        entry: "Makes me sad too",
        mood: "Sad"
    },
    {
        id: 5,
        date: "08/17/2025",
        concept: "loops",
        entry: "Less say, really",
        mood: "Sad"
    },
    {
        id: 6,
        date: "08/25/2025",
        concept: "Jobs",
        entry: "Got a job at google. still sad",
        mood: "Sad"
    },
    {
        id: 7,
        date: "08/27/2025",
        concept: "Fixed the world",
        entry: "no reason to be sad, really",
        mood: "Sad"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    //sorts entries into descending order
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
    //returns all jpournal entries in sorted order of dates
}