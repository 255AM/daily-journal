console.log("Welcome to the main module")

let diary = [];
let newEntry = {}

function addEntry(){
    console.log('working')
    newEntry = {
        date:document.getElementById('date').value,
        concepts:document.getElementById('concepts').value,
        jentry: document.getElementById('jentry').value
    }
    console.log(newEntry)
    diary.push(newEntry)
    
}


addEntry()
var inputs = document.getElementById("my-form").elements;
console.log(inputs)