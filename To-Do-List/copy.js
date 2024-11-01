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
    