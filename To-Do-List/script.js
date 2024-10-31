

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
    stored = JSON.parse(localStorage.getItem("notes"))
    
    // console.log(stored);
    // console.log(stored[0].taskNameStorage);
    for (let opened of stored)
    {
            // console.log("opened = " + opened.taskNameStorage);
            let column;
            let ul = document.createElement('ul');
        
            let liStatus = document.createElement('li');
            liStatus.innerText = opened.statusStorage;
            liStatus.classList.add("hidden");
        
            let liPriority = document.createElement('li');
            liPriority.innerText = opened.priorityStorage;
            liPriority.classList.add("hidden");
        
            
            let liName = document.createElement('li');
            liName.innerText = opened.taskNameStorage;
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
            })
        
            ul.appendChild(liName);
            ul.appendChild(liStatus);
            ul.appendChild(liPriority);
            ul.appendChild(liDescripton);
            ul.appendChild(liEcheance);
        
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
        // liStatus.classList.toggle("hidden");
    })

    ul.appendChild(liName);
    ul.appendChild(liStatus);
    ul.appendChild(liPriority);
    ul.appendChild(liDescripton);
    ul.appendChild(liEcheance);
    ul.appendChild(liDelete);

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
    // location.reload()

    //ok it's stored but now how to retrieve it well i know how to retrieve it lol
    // i'm thinking i already incorporated local storage why not incorporate it fully
    // i just have to repeat what i've done for the task for each task i retrieve and put it in it's place
    // but i'm thinking of the styling come on that's the easy part you can always add it later

    // changing status and deleting let's say you put an icon for delete first it gotta go dynamically meaning
    // the icon should be added when the ul is (in my opinion make a new li that will show when note is clicked
    //let's say you put the icon in it's correct place when
    //clicked it gotta delete the ul and update database and to do so you gotta look for it in the database
    //find it delete it and theeeen update
    //how about status when the change status button clicked you gotta ask user to give you what new status
    //then when user chooses you go update the corresponding li of the task then something gotta trigger the
    //change of position according to the new status or i can make a copy of the element change it's status
    //delete the previous place the new one in database and the one will trigger all this is the button
    //that submits the new user modification
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