

const myButton = document.getElementById('myButton');
const options = document.getElementById('options');
const newNoteButton = document.getElementById('newNoteButton');
const newNoteForm = document.getElementById('newNote');
const cancel = document.getElementById('cancel');

// let liElements = document.querySelectorAll("#doneTasks ul li");

// liElements.forEach(li => {
//     li.addEventListener("click", () => {
//         console.log("ran");
//         liElements.forEach(item => {
//             item.classList.toggle("hidden");
//         });
//     });
// });


// NOW YOURE STUCK FIGURING OUT HOW TO SHOW HIDDEN LI'S 
//and when to add event listener+



// myButton.addEventListener("click",() => 
//     {
//         // alert('buttonclicked');
//         options.classList.toggle("hidden");
//     });
    
// let firstchild = doingColumn.children;
// console.log("firstchild = " + firstchild);
// console.log("firstchild = " + firstchild.innerText);
//i'm here struggling to know whats selected
//select the element to hover over



if (localStorage.getItem("notes"))
{
    stored = JSON.parse(localStorage.getItem("notes"));

    // console.log(stored);
    // console.log(stored[0].taskNameStorage);
    for (let opened of stored)
    {
            // console.log("opened = " + opened.taskNameStorage);
            let column;
            let ul = document.createElement('ul');
        
            let liDelete = document.createElement('li');
            let buttonDelete = document.createElement('button');
            buttonDelete.textContent = "Delete";
            liDelete.appendChild(buttonDelete);
            liDelete.classList.add("hidden");

            let liStatus = document.createElement('li');
            liStatus.innerText = opened.statusStorage;
            liStatus.classList.add("hidden");
        
            let liPriority = document.createElement('li');
            liPriority.innerText = opened.priorityStorage;
            liPriority.classList.add("hidden");
        
            
            let liName = document.createElement('li');
            liName.innerText = opened.taskNameStorage;

            let liModify = document.createElement('li');
            let toDoModify = document.createElement('button');
            toDoModify.textContent = "To Do";
            let doingModify = document.createElement('button');
            doingModify.textContent = "Doing";
            let doneModify = document.createElement('button');
            doneModify.textContent = "Done ";
        
            liModify.appendChild(toDoModify);
            liModify.appendChild(doingModify);
            liModify.appendChild(doneModify);
            liModify.classList.add("flex", "justify-between", "hidden");

            toDoModify.addEventListener("click", () => {
                noteTitle = toDoModify.parentElement;
                for (let i = 0; i < 6; i++)
                {
                    noteTitle = noteTitle.previousElementSibling;
                    // console.log("element = " + noteTitle.textContent);
                }
                // // console.log("element = " + noteTitle.textContent);
                noteTitle = noteTitle.textContent;
                data = JSON.parse(localStorage.getItem("notes"));
                let index = 0;
                for (let opened of data)
                {
                //     //i was trying to access the name storage to delete it from database
                    if (opened.taskNameStorage === noteTitle)
                    {
                        opened.statusStorage = "todo"
                        // data.splice(index, 1);
                        break;
                    }
                    index++;
                }
                localStorage.setItem("notes", JSON.stringify(data));
                location.reload();
            })
        
            doingModify.addEventListener("click", () => {
                noteTitle = doingModify.parentElement;
                for (let i = 0; i < 6; i++)
                {
                    noteTitle = noteTitle.previousElementSibling;
                    // console.log("element = " + noteTitle.textContent);
                }
                // // console.log("element = " + noteTitle.textContent);
                noteTitle = noteTitle.textContent;
                data = JSON.parse(localStorage.getItem("notes"));
                let index = 0;
                for (let opened of data)
                {
                //     //i was trying to access the name storage to delete it from database
                    if (opened.taskNameStorage === noteTitle)
                    {
                        opened.statusStorage = "doing"
                        // data.splice(index, 1);
                        break;
                    }
                    index++;
                }
                localStorage.setItem("notes", JSON.stringify(data));
                location.reload();
            })
            doneModify.addEventListener("click", () => {
                noteTitle = doneModify.parentElement;
                for (let i = 0; i < 6; i++)
                {
                    noteTitle = noteTitle.previousElementSibling;
                    // console.log("element = " + noteTitle.textContent);
                }
                // // console.log("element = " + noteTitle.textContent);
                noteTitle = noteTitle.textContent;
                data = JSON.parse(localStorage.getItem("notes"));
                let index = 0;
                for (let opened of data)
                {
                //     //i was trying to access the name storage to delete it from database
                    if (opened.taskNameStorage === noteTitle)
                    {
                        opened.statusStorage = "done";
                        // data.splice(index, 1);
                        break;
                    }
                    index++;
                }
                localStorage.setItem("notes", JSON.stringify(data));
                location.reload();
            })
            
            if (liPriority.innerText === "p1")
            {
                liName.style.color = "#da2c38";
            }
            else if(liPriority.innerText === "p2")
            {
                liName.style.color = "#43291f";
            }
            else if (liPriority.innerText === "p3")
            {
                liName.style.color = "#226f54";
            }
    
            let liDescripton = document.createElement('li');
            liDescripton.innerText = opened.descriptionStorage;
            liDescripton.classList.add("hidden");
        
            let liEcheance = document.createElement('li');
            liEcheance.innerText = opened.echeanceStorage;
            liEcheance.classList.add("hidden");
        
            liName.addEventListener("click", () => 
            {
                liEcheance.classList.toggle("hidden");
                liDescripton.classList.toggle("hidden");
                liPriority.classList.toggle("hidden");
                liDelete.classList.toggle("hidden");
                liModify.classList.toggle("hidden");
            })
        
            ul.appendChild(liName);
            ul.appendChild(liStatus);
            ul.appendChild(liPriority);
            ul.appendChild(liDescripton);
            ul.appendChild(liEcheance);
            ul.appendChild(liDelete);
            ul.appendChild(liModify);
        
            if (liStatus.innerText === "todo")
                {
                    column = document.getElementById('toDoTasks');
                    column.appendChild(ul);
                }
            else if (liStatus.innerText === "doing")
                {
                    column = document.getElementById("doingTasks");
                    column.appendChild(ul);
                }
            else if (liStatus.innerText === "done")
                {
                    column = document.getElementById("doneTasks");
                    column.appendChild(ul);
                }
            liDelete.addEventListener("click", () => {
                    noteTitle = liDelete;
                    for (let i = 0; i < 5; i++)
                    {
                        noteTitle = noteTitle.previousElementSibling;
                        // console.log("element = " + noteTitle.textContent);
                    }
                    // console.log("element = " + noteTitle.textContent);
                    noteTitle = noteTitle.textContent;
                    data = JSON.parse(localStorage.getItem("notes"));
                    let index = 0;
                    for (let opened of data)
                    {
                        //i was trying to access the name storage to delete it from database
                        if (opened.taskNameStorage === noteTitle)
                        {
                            data.splice(index, 1);
                            break;
                        }
                        index++;
                    }
                    localStorage.setItem("notes", JSON.stringify(data));
                    location.reload();
            })
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
    // create a ul and append it to to do tasks
    // when you want to show on click it will show all infos toggle hidden like before



    let column;
    let ul = document.createElement('ul');

    let liDelete = document.createElement('li');
    let buttonDelete = document.createElement('button');
    buttonDelete.textContent = "Delete";
    liDelete.appendChild(buttonDelete);
    liDelete.classList.add("hidden");

    let liModify = document.createElement('li');
    let toDoModify = document.createElement('button');
    toDoModify.textContent = "To Do";
    let doingModify = document.createElement('button');
    doingModify.textContent = "Doing";
    let doneModify = document.createElement('button');
    doneModify.textContent = "Done ";

    liModify.appendChild(toDoModify);
    liModify.appendChild(doingModify);
    liModify.appendChild(doneModify);
    liModify.classList.add("flex", "justify-between", "hidden")

    toDoModify.addEventListener("click", () => {
        noteTitle = toDoModify.parentElement;
        for (let i = 0; i < 6; i++)
        {
            noteTitle = noteTitle.previousElementSibling;
            // console.log("element = " + noteTitle.textContent);
        }
        // // console.log("element = " + noteTitle.textContent);
        noteTitle = noteTitle.textContent;
        data = JSON.parse(localStorage.getItem("notes"));
        let index = 0;
        for (let opened of data)
        {
        //     //i was trying to access the name storage to delete it from database
            if (opened.taskNameStorage === noteTitle)
            {
                opened.statusStorage = "todo"
                // data.splice(index, 1);
                break;
            }
            index++;
        }
        localStorage.setItem("notes", JSON.stringify(data));
        location.reload();
    })

    doingModify.addEventListener("click", () => {
        noteTitle = doingModify.parentElement;
        for (let i = 0; i < 6; i++)
        {
            noteTitle = noteTitle.previousElementSibling;
            // console.log("element = " + noteTitle.textContent);
        }
        // // console.log("element = " + noteTitle.textContent);
        noteTitle = noteTitle.textContent;
        data = JSON.parse(localStorage.getItem("notes"));
        let index = 0;
        for (let opened of data)
        {
        //     //i was trying to access the name storage to delete it from database
            if (opened.taskNameStorage === noteTitle)
            {
                opened.statusStorage = "doing"
                // data.splice(index, 1);
                break;
            }
            index++;
        }
        localStorage.setItem("notes", JSON.stringify(data));
        location.reload();
    })
    doneModify.addEventListener("click", () => {
        noteTitle = doneModify.parentElement;
        for (let i = 0; i < 6; i++)
        {
            noteTitle = noteTitle.previousElementSibling;
            // console.log("element = " + noteTitle.textContent);
        }
        // // console.log("element = " + noteTitle.textContent);
        noteTitle = noteTitle.textContent;
        data = JSON.parse(localStorage.getItem("notes"));
        let index = 0;
        for (let opened of data)
        {
        //     //i was trying to access the name storage to delete it from database
            if (opened.taskNameStorage === noteTitle)
            {
                opened.statusStorage = "done";
                // data.splice(index, 1);
                break;
            }
            index++;
        }
        localStorage.setItem("notes", JSON.stringify(data));
        location.reload();
    })

    //thebutton is created it needs an event listener
    //use previous sibling to find the taskname

    let liStatus = document.createElement('li');
    liStatus.innerText = statusCurrent.value;
    liStatus.classList.add("hidden");

    let liPriority = document.createElement('li');
    liPriority.innerText = priorityCurrent.value;
    liPriority.classList.add("hidden");

    
    let liName = document.createElement('li');
    liName.innerText = taskNameCurrent.value;
    if (liPriority.innerText === "p1")
    {
        liName.style.color = "#da2c38";
    }
    else if(liPriority.innerText === "p2")
    {
        liName.style.color = "#43291f";
    }
    else if (liPriority.innerText === "p3")
    {
        liName.style.color = "#226f54";
    }
    //when li name is created i want it to have an event listener when clicked

    let liDescripton = document.createElement('li');
    liDescripton.innerText = descriptionCurrent.value;
    liDescripton.classList.add("hidden");

    let liEcheance = document.createElement('li');
    liEcheance.innerText = echeanceCurrent.value;
    liEcheance.classList.add("hidden");

    liName.addEventListener("click", () => 
    {
        liEcheance.classList.toggle("hidden");
        liDescripton.classList.toggle("hidden");
        liPriority.classList.toggle("hidden");
        liDelete.classList.toggle("hidden");
        liModify.classList.toggle("hidden");
        // liStatus.classList.toggle("hidden");
    })

    ul.appendChild(liName);
    ul.appendChild(liStatus);
    ul.appendChild(liPriority);
    ul.appendChild(liDescripton);
    ul.appendChild(liEcheance);
    ul.appendChild(liDelete);
    ul.appendChild(liModify);

    if (liStatus.innerText === "todo")
        {
            column = document.getElementById('toDoTasks');
            column.appendChild(ul);
        }
    else if (liStatus.innerText === "doing")
        {
            column = document.getElementById("doingTasks");
            column.appendChild(ul);
        }
    else if (liStatus.innerText === "done")
        {
            column = document.getElementById("doneTasks");
            column.appendChild(ul);
        }

    liDelete.addEventListener("click", () => {
        noteTitle = liDelete;
        for (let i = 0; i < 5; i++)
        {
            noteTitle = noteTitle.previousElementSibling;
            // console.log("element = " + noteTitle.textContent);
        }
        // console.log("element = " + noteTitle.textContent);
        noteTitle = noteTitle.textContent;
        data = JSON.parse(localStorage.getItem("notes"));
        let index = 0;
        for (let opened of data)
        {
            //i was trying to access the name storage to delete it from database
            if (opened.taskNameStorage === noteTitle)
            {
                data.splice(index, 1);
                break;
            }
            index++;
        }
        localStorage.setItem("notes", JSON.stringify(data));
        location.reload();
})

    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push({
        taskNameStorage : taskNameCurrent.value,
        descriptionStorage : descriptionCurrent.value,
        echeanceStorage : echeanceCurrent.value,
        priorityStorage : priorityCurrent.value,
        statusStorage : statusCurrent.value,
    });
    localStorage.setItem('notes', JSON.stringify(notes));
})