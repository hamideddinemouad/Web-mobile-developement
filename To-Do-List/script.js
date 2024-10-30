const myButton = document.getElementById('myButton');
const options = document.getElementById('options');
const newNoteButton = document.getElementById('newNoteButton');
const newNoteForm = document.getElementById('newNote');
const cancel = document.getElementById('cancel');
// console.log(myButton);
// console.log(options);
// console.log(newNoteButton);
// console.log(newNoteForm);

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
    const taskname = document.getElementById('taskname');
    const description = document.getElementById('description');
    const echeance = document.getElementById('echeance');
    const priority = document.getElementById('priority');
    const status = document.getElementById('status');
    // console.log("taskname.value = " + taskname.value);
    const li = document.createElement('li');
    // console.log("BEFORE li = " + li);
    // console.log("BEFORE li.inner = " + li.innerHTML);
    li.innerHTML = taskname.value;
    // console.log("AFTER li = " + li);
    // console.log("AFTER li.inner = " + li.innerHTML);
    const toDoTasks = document.getElementById('toDoTasks');;
    toDoTasks.appendChild(li);
    newNoteForm.classList.toggle("hidden");
    // console.log(taskname.value);
    // console.log(description.value);
    // console.log(echeance.value);
    // console.log(priority.value);
    // console.log(status.value);
})

