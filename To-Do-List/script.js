const myButton = document.getElementById('myButton');
const options = document.getElementById('options');
const newNoteButton = document.getElementById('newNoteButton');
const newNoteForm = document.getElementById('newNote');
const cancel = document.getElementById('cancel');



if (localStorage.getItem("notes"))
{
    stored = JSON.parse(localStorage.getItem("notes"))
    // console.log(stored);
    // console.log(stored[0].taskNameStorage);
    for (let opened of stored)
    {
        // console.log("opened = " + opened.taskNameStorage);
        const li = document.createElement('li');
        li.innerHTML = opened.taskNameStorage;
        const toDoTasks = document.getElementById('toDoTasks');
        toDoTasks.appendChild(li);
    }
    // const li = document.createElement('li');
    // li.innertext = taskname.value;
    // const toDoTasks = document.getElementById('toDoTasks');
    // toDoTasks.appendChild(li);
}
//just created local database next thing is the doing and done part and put tasks accordingly
//and the color of the of the priority  keep in mind status change later
//i think you should create functions to organize code more
//you should figure out a way to show the informations of each note
//you should add options to modify and 
//total of tasks
// myButton.addEventListener("mouseenter", ()=>{
//     document.body.style.backgroundColor = "green"
// })
myButton.addEventListener("click",() => 
{
    // alert('buttonclicked');
    options.classList.toggle("hidden");
});

newNoteButton.addEventListener("click", () =>
{
    newNoteForm.classList.toggle("hidden");
})

cancel.addEventListener("click", () =>
{
        newNoteForm.classList.toggle("hidden");
})
newNoteForm.addEventListener("submit", (event) =>
{
    event.preventDefault();
    const taskNameCurrent = document.getElementById('taskname');
    const descriptionCurrent = document.getElementById('description');
    const echeanceCurrent = document.getElementById('echeance');
    const priorityCurrent = document.getElementById('priority');
    const statusCurrent = document.getElementById('status');

    //now i want the info to show but where to store it and how to
    //retrieve it because this function will end and i my storage
    //will be deleted with it i think i should store it in html
    // and not show it
    const li = document.createElement('li');
    li.innerHTML = taskname.value;
    const toDoTasks = document.getElementById('toDoTasks');
    toDoTasks.appendChild(li);



    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push({
        taskNameStorage : taskNameCurrent.value,
        descriptionStorage : descriptionCurrent.value,
        echeanceStorage : echeanceCurrent.value,
        priorityStorage : priorityCurrent.value,
        statusStorage : statusCurrent.value,
    })
    localStorage.setItem('notes', JSON.stringify(notes));




    // console.log("notes.length = " +notes.length);
    // console.log(notes);
    // console.log(notes[0].taskNameStorage);
    //ok it's stored but now how to retrieve it well i know how to retrieve it lol
    // i'm thinking i already incorporated local storage why not incorporate it fully
    // i just have to repeat what i've done for the task for each task i retrieve and put it in it's place
    // but i'm thinking of the styling come on that's the easy part you can always add it later
    // console.log(noteData.taskNameStorage);
    // console.log(noteData);
    // 
})

// const userData = {
//     username: 'JohnDoe',
//     age: 30,
//     email: 'john@example.com'
// };
// localStorage.setItem('user', JSON.stringify(userData));
// const retrievedData = JSON.parse(localStorage.getItem('user'));
// console.log(retrievedData.username); // Output: JohnDoe
// console.log(retrievedData.age);      // Output: 30
// console.log(retrievedData.email);    // Output: john@example.com