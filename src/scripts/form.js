import { getMoods, useMoods } from "./journalDataSource.js";

const contentTarget = document.querySelector(".entry-form-container")

export const entryForm = () => {
    getMoods().then(() =>{
        let moods=useMoods()
        contentTarget.innerHTML = `
            <label for='concept'>Concept Studied</label>
            <input type="text" name='concept' id="concept">
            <label for='entry'>Entry</label>
            <input type="text" name='entry' id="entry">
            <select class='dropdown' id='mood'>
            <option value="0">Please Select</option>
            ${
                moods.map(current => {
                    return `<option value='${current.id}'>${current.label}</option>`
                    
                })
            }
            </select>
            <label for="date">date:</label>
            <input type="date" id="date"
            name="date" value=""
            </div>
           
            

            
            <button type='button' id="saveNote" >Save Note</button>
        `
        })
            
}
    
