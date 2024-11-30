{/* <div class="dot">CDM</div> */}

// let arrayOfPlayerforFormation = [];
// insertDots();
// function playerInMatch(localFormationArray, playerName)
// {
//     localFormationArray.push(playerName);
//     return(localFormationArray);
// }
function checkIfPlayerInArray(localFormationArray, playerName)
{
    // console.log(localFormationArray);
    if (localFormationArray.includes(playerName))
    {
        return false;
    }
    return true;
}
function fourThreeThreeDefault(jsonArrayFttd)
{
    let mainHtml = document.querySelector("main");
    let formationSection = document.createElement("section");
    formationSection.classList.add("formation");
    let fttdPlayerArray = [];
    function playerInMatch(player)
    {
        fttdPlayerArray.push(player);
    }
    const func = playerInMatch;

    formationSection.innerHTML = `
            <div class="GK">${(fillpositionrand("GK", jsonArrayFttd, fttdPlayerArray, func))}</div>
            
            <div class="CBL">${fillpositionrand("CB", jsonArrayFttd, fttdPlayerArray, func)}</div>

            <div class="CBR">${fillpositionrand("CB", jsonArrayFttd, fttdPlayerArray, func)}</div>

            <div class="LB">${fillpositionrand("LB", jsonArrayFttd, fttdPlayerArray, func)} </div>

            <div class="RB"> ${fillpositionrand("RB", jsonArrayFttd, fttdPlayerArray, func)}</div>

            <div class="MDF">${fillpositionrand("CM", jsonArrayFttd, fttdPlayerArray, func)}</div>

            <div class="ML">${fillpositionrand("CM", jsonArrayFttd, fttdPlayerArray, func)}</div>

            <div class="MR">${fillpositionrand("CM", jsonArrayFttd, fttdPlayerArray, func)}</div>

            <div class="STM">${fillpositionrand("ST", jsonArrayFttd, fttdPlayerArray, func)}</div>

            <div class="FWR">${fillpositionrand("RW", jsonArrayFttd, fttdPlayerArray, func)}</div>

            <div class="FWL">${fillpositionrand("LW", jsonArrayFttd, fttdPlayerArray, func)}</div>


            `
    mainHtml.appendChild(formationSection);
    return fttdPlayerArray;
}


function fillpositionrand(posStr, jsonArrayFpr, alreadyInMatchArr, theFunc)
{
        let player_found;
        for (let player of jsonArrayFpr)
        {
            if (player.position === posStr && !(alreadyInMatchArr.some(playInArr => playInArr.name === player.name)))
            {
                player_found = player;
                theFunc(player_found);
                break;
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
                <div class="logo"><img class="logo" src="${player_found.logo}" alt=""></div>
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
function renderPlayerModal (arrplayersRpm, pos)
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
            <div class="logo"><img class="logo" src="${player.logo}" alt=""></div>
            <div class="club"><img  src="${player.logo}" alt=""></div>
            </div>
            </div>
            <div id="${player.name}-dot" class="dot">${player.position}</div>
        `

        // playerinmodal = querySelector(".modal ")
        modal.appendChild(playersBadge);
    }
    main.appendChild(modal);
    setUpListeners(pos ,modal);
}
function setUpListeners (pos, formationArr)
{
    let dots = document.querySelectorAll(".modal .dot");
    dots = Array.from(dots);
    function insidemodalevent (dot)
    {
        function outsidemodalevent (dot)
        {
            let formationSection = document.querySelector(".formation");
            formationSection.style.display = "none";
    
            positionDot = dot.innerText;
    
            renderPlayerModal(showAllPos(positionDot, jsonArr, fttdPlayerArray), dot.parentElement.className);
    
        }
        let formationSection = document.querySelector(".formation");
            let modal = document.querySelector(".modal");

            let playerInFormation = document.querySelector(`.formation .${pos}`);
            playerInFormation.remove();     
            let formation = document.querySelector(`.formation`);
            formation.appendChild(dot.parentElement);
            console.log("modal is below");
            console.log(modal);
            modal.remove();
            formationSection.style.display = "grid";
            dot.removeEventListener("click", () => insidemodalevent());
            dot.addEventListener("click", () => outsidemodalevent(dot));
    }

    for (let dot of dots)
    {
        dot.addEventListener("click", () => insidemodalevent(dot));
    }

    }
            //     let formationSection = document.querySelector(".formation");
        //     let modal = document.querySelector(".modal");
           
        //     console.log(dot.id);
        //     let playerInFormation = document.querySelector(`.formation .${pos}`);
        //     playerInFormation.remove();
        //     // let karim = document.querySelector('#Karim Benzema')
        //     // console.log();
        //     // let playerReplaceQ = document.querySelector(`#${playerReplace}`);
        //     // console.log("player replace q" + playerReplaceQ);
        //     // formationSection.appendChild(playerReplaceQ);
            
        //     let formation = document.querySelector(`.formation`);
        //     // console.log(dot);
        //     formation.appendChild(dot.parentElement);
        //     console.log("modal is below")
        //     console.log(modal);
        //     modal.remove();
        //     formationSection.style.display = "grid";
        //     dot.removeEventListener();
        //     dot.addEventListener("click", ()=>
        //         {
        //             let formationSection = document.querySelector(".formation")
        //             // let modal = document.querySelector(".modal");
        //             formationSection.style.display = "none";
        //             // modal.style.display = "flex";
        //             positionDot = dot.innerText;
        //             // console.log("doty parent" + doty.parentElement.className);
        //             // console.log(doty.id);
        //             // console.log(doty.parentElement.className);
        //             // console.log("event 2 ran");
        //             renderPlayerModal(showAllPos(positionDot, jsonArr, fttdPlayerArray), dot.parentElement.className);
        //             // showAllPos(positionDot, jsonArr);
        //             // console.log(positionDot);
        //             // console.log(formationSection);
        //         })

            
        //     // modal.remove();
            
            
            
        //     // console.log(playerInFormation);
        //     // console.log(`.formation #${dot.id}`);
        // })      

function showAllPos (posStr, jsonArrSap, fttdPlayerArray)
{
    let arrplayers = [];
    for (let player of jsonArrSap)
    {
        if (player.position === posStr && !fttdPlayerArray.some(playerInArr => playerInArr.name === player.name))
        {
            arrplayers.push(player);
        }
    }
    return (arrplayers);
}

async function main()
{
    // let jsonArray = await Apicons();
    let jsonArr =  await Apicons();
    let positionDot;
    // genRandPlayers(jsonArr);
    let fttdPlayerArray = fourThreeThreeDefault(jsonArr);
    let dot = document.querySelectorAll(".dot");
    let test = 0;
    Array.from(dot).forEach(doty => 
        {
            doty.addEventListener("click", ()=>
            {
                let formationSection = document.querySelector(".formation")
                // let modal = document.querySelector(".modal");
                formationSection.style.display = "none";
                // modal.style.display = "flex";
                positionDot = doty.innerText;
                // console.log("doty parent" + doty.parentElement.className);
                // console.log(doty.id);
                // console.log(doty.parentElement.className);
                renderPlayerModal(showAllPos(positionDot, jsonArr, fttdPlayerArray), doty.parentElement.className);
                // showAllPos(positionDot, jsonArr);
                // console.log(positionDot);
                // console.log(formationSection);
            })
        }
        )
    
    
    // fillpositionrand("CB", jsonArray);

}
// the_f();
main();


