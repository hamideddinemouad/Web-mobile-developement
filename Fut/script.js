
function checkIfPlayerInArray(localFormationArray, playerName)
{
    // console.log(localFormationArray);
    if (localFormationArray.includes(playerName))
    {
        return false;
    }
    return true;
}
function fourThreeThreeDefault(jsonArrayFttd, fttdPlayerArray = [])
{
    // console.log("fttdplayerarray"+ fttdPlayerArray);
    let storedFormation = JSON.parse(localStorage.getItem("fourfourthree"));
    if (storedFormation)
    {
        fttdPlayerArray = storedFormation;
    }
    let mainHtml = document.querySelector("main");
    let formationSection = document.createElement("section");
    formationSection.classList.add("formation");
    function playerInMatch(player, operation)
    {
        if (operation > 0)
        {
            // console.log("operation")
            fttdPlayerArray.push(player);
            // console.log(fttdPlayerArray);
            return
        }
        fttdPlayerArray = fttdPlayerArray.filter(playerinarr => playerinarr !== player);
    }
    const func = playerInMatch;
    let playerAddedArr = []
    function playerAdded(player)
    {
        playerAddedArr.push(player);
    }
    const funcDupli = playerAdded;
    formationSection.innerHTML = `
            <div class="GK">${(fillpositionrand("GK", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli))}</div>
            
            <div class="CBL">${fillpositionrand("CB", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli)}</div>

            <div class="CBR">${fillpositionrand("CB", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli)}</div>

            <div class="LB">${fillpositionrand("LB", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli)} </div>

            <div class="RB"> ${fillpositionrand("RB", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli)}</div>

            <div class="MDF">${fillpositionrand("CDM", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli)}</div>

            <div class="ML">${fillpositionrand("CML", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli)}</div>

            <div class="MR">${fillpositionrand("CMR", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli)}</div>

            <div class="STM">${fillpositionrand("ST", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli)}</div>

            <div class="FWR">${fillpositionrand("RW", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli)}</div>

            <div class="FWL">${fillpositionrand("LW", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli)}</div>

            `
            localStorage.setItem("fourfourthree", JSON.stringify(fttdPlayerArray));
    mainHtml.appendChild(formationSection);
    let dot = document.querySelectorAll(".dot");
    Array.from(dot).forEach(doty => 
        {
            doty.addEventListener("click", ()=>
            {
    //dot clicked -takes you to players - player clicked change it in the array of the formation
    //rerender the formation array again
    //show all players with that pos
    //pos clicked change it with formation
    //update formation
    //rerender it
                formationSection.style.display = "none";
                let positionDot = doty.innerText;
                // console.log(positionDot);
                renderPlayerModal(showAllPos(positionDot, jsonArrayFttd, fttdPlayerArray), doty.parentElement.className)
                let dotsInModal = document.querySelectorAll(".modal .dot");
                document.querySelector(".modal").scrollIntoView({
                    behavior: 'smooth', block: 'start'})
                Array.from(dotsInModal).forEach(dotyModal =>
                {
                    dotyModal.addEventListener("click", ()=>
                    {
                        // console.log("clicked");
                        let playerNameInFormation = doty.id.replace("-dot", "");
                        // console.log(playerName);
                        fttdPlayerArray = fttdPlayerArray.filter(obj => obj.name !== playerNameInFormation);
                        let PlayerNameInModal = dotyModal.id.replace("-dot", "");
                        // console.log(fttdPlayerArray);
                        let objtofind= jsonArrayFttd.find(objJson => objJson.name === PlayerNameInModal)
                        // console.log(objtofind);
                        fttdPlayerArray.push(objtofind);
                        document.querySelector(".modal").remove();

                        // console.log(fttdPlayerArray);
                        formationSection.remove();
                        localStorage.setItem("fourfourthree", JSON.stringify(fttdPlayerArray));
                        fourThreeThreeDefault(jsonArrayFttd, fttdPlayerArray);
                        // console.log(doty.id);
                    })
                }
                )
            })
        }
        )
    return fttdPlayerArray;
}
function checkIfPlayerInArray(localFormationArray, playerName)
{
    // console.log(localFormationArray);
    if (localFormationArray.includes(playerName))
    {
        return false;
    }
    return true;
}



function fillpositionrand(posStr, jsonArrayFpr, alreadyInMatchArr, theFunc, playersArrDup, funcDuplicate)
{
        let player_found;
        let addedplayers = 0;
        if (alreadyInMatchArr.length !== 11)
        {
            for (let player of jsonArrayFpr)
            {
                if (player.position === posStr && !(alreadyInMatchArr.some(playInArr => playInArr.name === player.name)))
                {
                    player_found = player;
                    theFunc(player_found, 1);
                    // console.log("pushedplayer")
                    // console.log(player_found);
                    break;
            }
            // console.log("condition not met");
        }
        }
        else
        {
            for (let player of alreadyInMatchArr)
            {
                // console.log(alreadyInMatchArr);
                // let  playerinmatch = document.querySelector(`.formation`)
                // console.log(playerinmatch);
                if (posStr === player.position && !(playersArrDup.some(playerInArr => player.name === playerInArr.name)))
                {
                    // console.log("condition met")
                    player_found = player;
                    funcDuplicate(player_found);
                    break;
                }
            }
        }
        let playersBadge = 
        `
                <div id="${player_found.name}" class="playerCard">
                <div class="rating"> <span class="ratingnum">${player_found.rating}</span> <span class="position">${player_found.position}</span></div>
                <div class="ppicture"><img src="${player_found.photo}" alt=""></div>
                <div class="pname">${player_found.name}</div>
                <div class="PAC">PAC ${player_found.pace}</span></div>
                <div class="SHO">SHO ${player_found.shooting}</div>
                <div class="PAS">PAS ${player_found.passing}</div>
                <div class="DRI">DRI ${player_found.dribbling}</div>
                <div class="DEF">DEF ${player_found.defending}</div>
                <div class="PHY">PHY ${player_found.physical}</div>
                <div class="logos">
                <div class="flag"><img  src="${player_found.flag}" alt=""></div>
                <div class="club"><img  src="${player_found.logo}" alt=""></div>
                </div>
            </div>
            <div id="${player_found.name}-dot" class="dot">${player_found.position}</div>
            `
        return (playersBadge);
        
}

async function Apicons() 
{
    let fetched = await fetch("http://localhost:3000/players")
    let converted = await fetched.json();
    return (converted);
}
function renderPlayerModal (arrplayersRpm, pos, jsonArr, fttdPlayerArray)
{
    let main = document.querySelector("main");
    let modal = document.createElement("div");
    modal.className = "modal";
    for (let player of arrplayersRpm)
    {
        let playersBadge = document.createElement("div");
        playersBadge.classList.add(pos)
        playersBadge.innerHTML =
        `
            <div id="${player.name}" class="playerCard">
            <div class="rating"> <span class="ratingnum">${player.rating}</span> <span class="position">${player.position}</span></div>
            <div class="ppicture"><img src="${player.photo}" alt=""></div>
            <div class="pname">${player.name}</div>
            <div class="PAC">PAC ${player.pace}</span></div>
            <div class="SHO">SHO ${player.shooting}</div>
            <div class="PAS">PAS ${player.passing}</div>
            <div class="DRI">DRI ${player.dribbling}</div>
            <div class="DEF">DEF ${player.defending}</div>
            <div class="PHY">PHY ${player.physical}</div>
            <div class="logos">
            <div class="flag"><img  src="${player.flag}" alt=""></div>
            <div class="club"><img  src="${player.logo}" alt=""></div>
            </div>
            </div>
            <div id="${player.name}-dot" class="dot">${player.position}</div>
        `
        // playerinmodal = querySelector(".modal ")
        modal.appendChild(playersBadge);
    }
    let quit = document.createElement("button");
    quit.className = "quit";
    quit.innerText = "BACK"
    quit.addEventListener("click", () =>
    {
        modal.remove();
        document.querySelector(".formation").style.display = "grid";
    })
    modal.appendChild(quit);
    main.appendChild(modal);

}
function showAllPos (posStr, jsonArrSap, fttdPlayerArray)
{
    let arrplayers = [];
    for (let player of jsonArrSap)
    {
        if (player.position === posStr && !fttdPlayerArray.some(playerInArr => playerInArr.name === player.name))
        {
            // console.log("ran");
            arrplayers.push(player);
        }
    }
    return (arrplayers);
}

function fourfourtwo(jsonArrayFttd, fttdPlayerArray = [])
{
    // console.log("fttdplayerarray"+ fttdPlayerArray);
    let storedFormation = JSON.parse(localStorage.getItem("fourfourtwo"));
    if (storedFormation)
    {
        fttdPlayerArray = storedFormation;
    }
    let mainHtml = document.querySelector("main");
    let formationSection = document.createElement("section");
    formationSection.classList.add("formation");
    function playerInMatch(player, operation)
    {
        if (operation > 0)
        {
            // console.log("operation")
            fttdPlayerArray.push(player);
            // console.log(fttdPlayerArray);
            return
        }
        fttdPlayerArray = fttdPlayerArray.filter(playerinarr => playerinarr !== player);
    }
    const func = playerInMatch;
    let playerAddedArr = []
    function playerAdded(player)
    {
        playerAddedArr.push(player);
    }
    const funcDupli = playerAdded;
    formationSection.innerHTML = `
            <div class="GK">${(fillpositionrand("GK", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli))}</div>
            
            <div class="CBL">${fillpositionrand("CB", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli)}</div>

            <div class="CBR">${fillpositionrand("CB", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli)}</div>

            <div class="LB">${fillpositionrand("LB", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli)} </div>

            <div class="RB"> ${fillpositionrand("RB", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli)}</div>

            <div class="MDF">${fillpositionrand("CDM", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli)}</div>

            <div class="CMR">${fillpositionrand("CDM", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli)}</div>

            <div class="CML">${fillpositionrand("CDM", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli)}</div>

            <div class="ML">${fillpositionrand("CML", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli)}</div>

            <div class="MR">${fillpositionrand("CMR", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli)}</div>

            <div class="STM">${fillpositionrand("ST", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli)}</div>

            `
            localStorage.setItem("fourfourtwo", JSON.stringify(fttdPlayerArray));
    mainHtml.appendChild(formationSection);
    let dot = document.querySelectorAll(".dot");
    Array.from(dot).forEach(doty => 
        {
            doty.addEventListener("click", ()=>
            {
                formationSection.style.display = "none";
                let panelMenu = document.querySelector(".control-panel");
                // panelMenu.style.display = "none";
                let positionDot = doty.innerText;
                // console.log(positionDot);
                renderPlayerModal(showAllPos(positionDot, jsonArrayFttd, fttdPlayerArray), doty.parentElement.className)
                let dotsInModal = document.querySelectorAll(".modal .dot");
                document.querySelector(".modal").scrollIntoView({
                    behavior: 'smooth', block: 'start'})
                Array.from(dotsInModal).forEach(dotyModal =>
                {
                    dotyModal.addEventListener("click", ()=>
                    {
                        // console.log("clicked");
                        let playerNameInFormation = doty.id.replace("-dot", "");
                        // console.log(playerName);
                        fttdPlayerArray = fttdPlayerArray.filter(obj => obj.name !== playerNameInFormation);
                        let PlayerNameInModal = dotyModal.id.replace("-dot", "");
                        // console.log(fttdPlayerArray);
                        let objtofind= jsonArrayFttd.find(objJson => objJson.name === PlayerNameInModal)
                        // console.log(objtofind);
                        fttdPlayerArray.push(objtofind);
                        document.querySelector(".modal").remove();

                        // console.log(fttdPlayerArray);
                        let panelMenu = document.querySelector(".control-panel");
                        
                        formationSection.remove();
                        panelMenu.style.display = "block";
                        localStorage.setItem("fourfourtwo", JSON.stringify(fttdPlayerArray));
                        fourfourtwo(jsonArrayFttd, fttdPlayerArray);
                        // console.log(doty.id);
                    })
                }
                )
            })
        }
        )
    return fttdPlayerArray;
}
function threefourthree(jsonArrayFttd, fttdPlayerArray = [])
{
    // console.log("fttdplayerarray"+ fttdPlayerArray);
    let storedFormation = JSON.parse(localStorage.getItem("threethreefour"));
    if (storedFormation)
    {
        fttdPlayerArray = storedFormation;
    }
    let mainHtml = document.querySelector("main");
    let formationSection = document.createElement("section");
    formationSection.classList.add("formation");
    function playerInMatch(player, operation)
    {
        if (operation > 0)
        {
            // console.log("operation")
            fttdPlayerArray.push(player);
            // console.log(fttdPlayerArray);
            return
        }
        fttdPlayerArray = fttdPlayerArray.filter(playerinarr => playerinarr !== player);
    }
    const func = playerInMatch;
    let playerAddedArr = []
    function playerAdded(player)
    {
        playerAddedArr.push(player);
    }
    const funcDupli = playerAdded;
    formationSection.innerHTML = `
            <div class="GK">${(fillpositionrand("GK", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli))}</div>
            
            <div class="CBC">${fillpositionrand("CB", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli)}</div>

            <div class="LB">${fillpositionrand("LB", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli)} </div>

            <div class="RB"> ${fillpositionrand("RB", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli)}</div>

            <div class="MDF">${fillpositionrand("CDM", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli)}</div>

            <div class="CML">${fillpositionrand("CML", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli)}</div>

            <div class="CMR">${fillpositionrand("CMR", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli)}</div>

            <div class="STL">${fillpositionrand("ST", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli)}</div>

            <div class="STR">${fillpositionrand("ST", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli)}</div>

            <div class="FWR">${fillpositionrand("RW", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli)}</div>

            <div class="FWL">${fillpositionrand("LW", jsonArrayFttd, fttdPlayerArray, func, playerAddedArr, funcDupli)}</div>

            `
            localStorage.setItem("threethreefour", JSON.stringify(fttdPlayerArray));
    mainHtml.appendChild(formationSection);
    let dot = document.querySelectorAll(".dot");
    Array.from(dot).forEach(doty => 
        {
            doty.addEventListener("click", ()=>
            {
                formationSection.style.display = "none";
                let panelMenu = document.querySelector(".control-panel");
                // panelMenu.style.display = "none";
                let positionDot = doty.innerText;
                // console.log(positionDot);
                renderPlayerModal(showAllPos(positionDot, jsonArrayFttd, fttdPlayerArray), doty.parentElement.className)
                let dotsInModal = document.querySelectorAll(".modal .dot");
                document.querySelector(".modal").scrollIntoView({
                    behavior: 'smooth', block: 'start'})
                Array.from(dotsInModal).forEach(dotyModal =>
                {
                    dotyModal.addEventListener("click", ()=>
                    {
                        // console.log("clicked");
                        let playerNameInFormation = doty.id.replace("-dot", "");
                        // console.log(playerName);
                        fttdPlayerArray = fttdPlayerArray.filter(obj => obj.name !== playerNameInFormation);
                        let PlayerNameInModal = dotyModal.id.replace("-dot", "");
                        // console.log(fttdPlayerArray);
                        let objtofind= jsonArrayFttd.find(objJson => objJson.name === PlayerNameInModal)
                        // console.log(objtofind);
                        fttdPlayerArray.push(objtofind);
                        document.querySelector(".modal").remove();

                        // console.log(fttdPlayerArray);
                        let panelMenu = document.querySelector(".control-panel");
                        
                        formationSection.remove();
                        panelMenu.style.display = "block";
                        localStorage.setItem("threethreefour", JSON.stringify(fttdPlayerArray));
                        threefourthree(jsonArrayFttd, fttdPlayerArray);
                        // console.log(doty.id);
                    })
                }
                )
            })
        }
        )
    return fttdPlayerArray;
}
async function main()
{
    let jsonArr;
    let database = JSON.parse(localStorage.getItem("Database"))
    if (!database)
    {
        jsonArr = await Apicons();
        localStorage.setItem("Database", JSON.stringify(jsonArr));
    }
    else
    {
        jsonArr = database;
    }
    // console.log(database);
    // fourThreeThreeDefault(jsonArr);
    let fft = document.querySelector("#fft");
    fft.addEventListener("click", () =>{
        let formationsection = document.querySelector(".formation");
        if (formationsection)
        {
            formationsection.remove();
        }
        fourfourtwo(jsonArr);
    })
    let ftt = document.querySelector("#ftt");
    ftt.addEventListener("click", () =>{
        let formationsection = document.querySelector(".formation");
        if (formationsection)
        {
            formationsection.remove();
        }
        fourThreeThreeDefault(jsonArr);
    })
    document.getElementById("the-form").addEventListener("submit", (normalSub) => {
        normalSub.preventDefault();
        let playerData = {
            name: document.querySelector("#player-name").value,
            position: document.querySelector("#player-position").value,
            club: document.querySelector("#player-club").value,
            nationality: document.querySelector("#player-nationality").value,
            rating: document.querySelector("#player-rating").value,
            pace: document.querySelector("#player-pace").value,
            dribbling: document.querySelector("#player-dribbling").value,
            shooting: document.querySelector("#player-shooting").value,
            passing: document.querySelector("#player-passing").value,
            defending: document.querySelector("#player-defending").value,
            physical: document.querySelector("#player-physical").value,
            photo: document.querySelector("#player-photo").value,
            flag: document.querySelector("#player-flag").value,
            logo: document.querySelector("#player-logo").value,
          };
          database.push(playerData);
          localStorage.setItem("Database", JSON.stringify(database));
          alert("saved!");
        });
        let addpButton = document.querySelector("#custom");
        addpButton.addEventListener("click", ()=>
        {
            document.querySelector("#the-form").scrollIntoView({
                behavior: 'smooth', block: 'start'
            })
            // document.querySelector(".control-panel").style.display = "none";
        })
        let tft = document.querySelector("#tft");
        tft.addEventListener("click", () =>{
            let formationsection = document.querySelector(".formation");
            if (formationsection)
            {
                formationsection.remove();
            }
            threefourthree(jsonArr);
        })
}
main();