import { createSingleEntryFunction } from './makeHtmlObject.js'
import { copyOfSortedJournalFunction } from './journalDataSource.js'


export const htmlJournalStringFunction = () =>{

    const targetElement = document.querySelector('#journal_entries')
    const entries = copyOfSortedJournalFunction()

    let htmlJournalString = '';
    for (const currentEntry of entries){
        htmlJournalString += createSingleEntryFunction(currentEntry)
        console.log(htmlJournalString);
    }

    targetElement.innerHTML += `
        <article class="entry_list">
            ${htmlJournalString}
        </article>
    `

}