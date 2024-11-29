{/* <div class="dot">CDM</div> */}

function insertDots()
{
    let divs = document.querySelectorAll("section div");

    // let dot = document.createElement('div');
    let dot = `<div class="dot">CDM</div>`
    divs.forEach(div => (div.innerHTML = dot + 1));
}
// insertDots();
function isFormation(formation)
{
    if (!formation)
    {
        console.error("isFormation() !formation");
        return (false);
    }
    if (typeof(formation) !== "string")
    {
        console.error("isFormation() formation !== string");
        return (false);
    }
    if (formation.length !== 3)
    {
        console.error("isFormation() formation.length !== 3")
        return (false);
    }
    let numbers = formation.split('').map(Number)
    let totalPlayers = numbers.reduce((x, y) => x + y, 0);
    if (totalPlayers != 10)
    {
        console.error(`invalidformation totalPlayers = ${totalPlayers}`);
        return(false);
    }
    return (true);
}

function insertFormation(formation)
{
    if (!isFormation(formation))
    {
        console.error("insertFormation() isFormation() = false")
        return(false);
    }
}

function fourThreeThreeDefault(jsonArrayFttd)
{
    let mainHtml = document.querySelector("main");
    let formationSection = document.createElement("section");
    formationSection.classList.add("formation");
    formationSection.innerHTML = `
            <div class="GK">${fillpositionrand("GK", jsonArrayFttd)}<div class="dot">GK</div></div>

            <div class="CBL">${fillpositionrand("CB", jsonArrayFttd)}<div class="dot">CB</div></div>

            <div class="CBR">${fillpositionrand("CB", jsonArrayFttd)}<div class="dot">CB</div></div>

            <div class="LB">${fillpositionrand("LB", jsonArrayFttd)} <div class="dot">LB</div></div>

            <div class="RB"> ${fillpositionrand("RB", jsonArrayFttd)}<div class="dot">RB</div></div>

            <div class="MDF">${fillpositionrand("CM", jsonArrayFttd)}<div class="dot">CM</div></div>

            <div class="ML">${fillpositionrand("CM", jsonArrayFttd)}<div class="dot">CM</div></div>

            <div class="MR">${fillpositionrand("CM", jsonArrayFttd)}<div class="dot">CM</div></div>

            <div class="STM">${fillpositionrand("ST", jsonArrayFttd)}<div class="dot">ST</div></div>

            <div class="FWR">${fillpositionrand("RW", jsonArrayFttd)}<div class="dot">RW</div></div>

            <div class="FWL">${fillpositionrand("LW", jsonArrayFttd)}<div class="dot">LW</div></div>
            

            `
    mainHtml.appendChild(formationSection);
}


function fillpositionrand(posStr, jsonArrayFpr)
{
        let player_found;
        for (let player of jsonArrayFpr)
        {
            if (player.position === posStr)
            {
                player_found = player;
                
                break;
            }
        }
        let playersBadge = 
        `
                <div class="playerCard">
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
            `
        return (playersBadge);
        
}

function checkdot ()
{
    console.log(positionDot);
}
async function Apicons() 
{
    let fetched = await fetch("http://localhost:3000/players")
    let converted = await fetched.json();
    return (converted);
}
function renderPlayerModal (arrplayersRpm, pos)
{
    let modal = document.querySelector(".modal");
    for (let player of arrplayersRpm)
    {
        let playersBadge = document.createElement("div");
        playersBadge.classList.add(pos)
        playersBadge.innerHTML =
        `
            <div class="playerCard">
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
            <div class="dotm">${player.position}</div>
        `

        // playerinmodal = querySelector(".modal ")
        modal.appendChild(playersBadge);
    }

    let dotinmodal = document.querySelectorAll(".dotm");
    Array.from(dotinmodal).forEach(dot => 
    {
        dot.addEventListener("click", () =>
        {
            // element.parentNode.removeChild(element);
            let formationSection = document.querySelector(".formation");
            let captured = document.querySelector(`.formation .${pos}`)
    //         // console.log("captured below")
            // captured.parentNode.removeChild(captured);
    //         // console.log(captured);
          
            captured.remove();
            let modal = document.querySelector(".modal")
            let cardInModal = document.querySelector(`.modal .${pos}`);
    //         console.log("cardinModal" +cardInModal);
    //         // console.log("cardinModal" + cardInModal);
            formationSection.appendChild(cardInModal);
            formationSection.style.display = "grid";
            modal.style.display = "none";
            dot.className = "dot"
        })})
    }
        //     let dot = document.querySelectorAll(".dot");
        //     Array.from(dot).forEach(doty => 
        //         {
        //             doty.addEventListener("click", ()=>
        //             {
        //                 let formationSection = document.querySelector(".formation")
        //                 let modal = document.querySelector(".modal");
        //                 formationSection.style.display = "none";
        //                 modal.style.display = "flex";
        //                 positionDot = doty.innerText;
        //                 // console.log("doty parent" + doty.parentElement.className);
        //                 renderPlayerModal(showAllPos(positionDot, arrplayersRpm), doty.parentElement.className);
        //                 // showAllPos(positionDot, jsonArr);
        //                 // console.log(positionDot);
        //                 // console.log(formationSection);
        //             })
        //         }
        //         )
        // }
    // )
//     })
// })}

function showAllPos (posStr, jsonArrSap)
{
    let arrplayers = [];
    for (let player of jsonArrSap)
    {
        if (player.position === posStr)
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
    fourThreeThreeDefault(jsonArr);
    let dot = document.querySelectorAll(".dot");
    Array.from(dot).forEach(doty => 
        {
            doty.addEventListener("click", ()=>
            {
                let formationSection = document.querySelector(".formation")
                let modal = document.querySelector(".modal");
                formationSection.style.display = "none";
                modal.style.display = "flex";
                positionDot = doty.innerText;
                // console.log("doty parent" + doty.parentElement.className);
                renderPlayerModal(showAllPos(positionDot, jsonArr), doty.parentElement.className);
                // showAllPos(positionDot, jsonArr);
                // console.log(positionDot);
                // console.log(formationSection);
            })
        }
        )
    
    
    // fillpositionrand("CB", jsonArray);

}
main();


