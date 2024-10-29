const myButton = document.getElementById('myButton');
const options = document.getElementById('options');
const newNoteButton = document.getElementById('newNoteButton');
const newNoteForm = document.getElementById('newNote');
const cancel = document.getElementById('cancel');
console.log(myButton);
console.log(options);
console.log(newNoteButton);
console.log(newNoteForm);

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
    