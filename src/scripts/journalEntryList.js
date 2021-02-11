import { entryForm } from "./form.js";
import { useEntries, getEntries, saveEntry} from './journalDataSource.js'
import { createSingleEntryFunction } from "./journalEntryObject.js";

document.querySelector("#view-entries-link").addEventListener("click", () => {
    console.log('hi');
    // invoke the function that prints the criminals
    document.querySelector('.entry-form-container').innerHTML = ''
    
    entriesList()
})

document.querySelector("#journal-entry-link").addEventListener("click", () => {
    console.log('hi');
    // invoke the function that prints the criminals
    document.querySelector('.entries-container').innerHTML = ''
    
    entryForm()
})

export const entriesList = () =>{

    const targetElement = document.querySelector('.entries-container')
    getEntries().then(() => {
        let htmlJournalString = '';
        targetElement.innerHTML='';
        let entries = useEntries()
        for (const currentEntry of entries){
        htmlJournalString += createSingleEntryFunction(currentEntry)
        
    }

    targetElement.innerHTML += `
        <article class="entry_list">
            ${htmlJournalString}
        </article>
    `
    })
}

let eventHub = document.querySelector('body')
// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    
    if (clickEvent.target.id === "saveNote") {
        // Make a new object representation of a note
        let newEntry = ''
        newEntry = {
            // Key/value pairs here
            concept:document.querySelector("#concept").value,
            date:document.querySelector('#date').value,
            entry:document.querySelector("#entry").value,
            moodId:document.querySelector('#mood').value,
            mood:{
                id:document.querySelector('#mood').value,
                label:document.getElementById('mood').options[document.getElementById('mood').selectedIndex].text
            }
            
            
        }
    
            console.log(newEntry);
        // Change API state and application state
        saveEntry(newEntry)
    }

})