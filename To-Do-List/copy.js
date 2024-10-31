newNoteForm.addEventListener("submit", (event) =>
    {
        event.preventDefault();
        const taskNameCurrent = document.getElementById('taskname');
        const descriptionCurrent = document.getElementById('description');
        const echeanceCurrent = document.getElementById('echeance');
        const priorityCurrent = document.getElementById('priority');
        const statusCurrent = document.getElementById('status');
           
        let column;
        let ul = document.createElement('ul');
    
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