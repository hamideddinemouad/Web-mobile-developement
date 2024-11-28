{/* <div class="dot">CDM</div> */}

function insertDots()
{
    let divs = document.querySelectorAll("section div");
    // console.log(divs);
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
    // console.log(mainHtml);
    let formationSection = document.createElement("section");
    formationSection.classList.add("formation");
    formationSection.innerHTML = ` 
            <div class="GK">${fillpositionrand("GK", jsonArrayFttd)}<div class="dot">GK</div></div>

            <div class="CBL">${fillpositionrand("CB", jsonArrayFttd)}<div class="dot">CBL</div></div>

            <div class="CBR">${fillpositionrand("CB", jsonArrayFttd)}<div class="dot">CBR</div></div>

            <div class="LB">${fillpositionrand("LB", jsonArrayFttd)} <div class="dot">LB</div></div>

            <div class="RB"> ${fillpositionrand("RB", jsonArrayFttd)}<div class="dot">RB</div></div>

            <div class="MDF">${fillpositionrand("CM", jsonArrayFttd)}<div class="dot">MDF</div></div>

            <div class="ML">${fillpositionrand("CM", jsonArrayFttd)}<div class="dot">ML</div></div>

            <div class="MR">${fillpositionrand("CM", jsonArrayFttd)}<div class="dot">MR</div></div>

            <div class="STM">${fillpositionrand("ST", jsonArrayFttd)}<div class="dot">STM</div></div>

            <div class="FWR">${fillpositionrand("RW", jsonArrayFttd)}<div class="dot">FWR</div></div>

            <div class="FWL">${fillpositionrand("LW", jsonArrayFttd)}<div class="dot">FWL</div></div> 
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
                console.log(player_found);
                break;
            }
        }
        console.log("from fillpositionrand() player_found =" + player_found);
        let playersBadge = 
        `
                <div class="playerCard">
                <div class="rating"> <span class="ratingnum">${player_found.rating}</span> <span class="position">${player_found.position}</span></div>
                <div class="ppicture"><img src="${player_found.photo}" alt=""></div>
                <div class="pname">${player_found.name}</div>
                <div class="PAC"> <span>PAC</span><span>${player_found.pace}</span></div>
                <div class="SHO">SHO${player_found.shooting}</div>
                <div class="PAS">PAS${player_found.passing}</div>
                <div class="DRI">DRI${player_found.dribbling}</div>
                <div class="DEF">DEF${player_found.defending}</div>
                <div class="PHY">PHY${player_found.physical}</div>
                <div class="logos">
                <div class="flag"><img  src="${player_found.flag}" alt=""></div>
                <div class="logo"><img class="logo" src="${player_found.logo}" alt=""></div>
                <div class="club"><img  src="${player_found.logo}" alt=""></div>
                </div>
            </div>
            `
        return (playersBadge)
        
}
async function Apicons() 
{
    let fetched = await fetch("http://localhost:3000/players")
    let converted = await fetched.json();
    return (converted);
}

async function main()
{
    
    // let jsonArray = await Apicons();
    let jsonArr =  await Apicons(); 
    console.log(jsonArr);
    fourThreeThreeDefault(jsonArr);
    // fillpositionrand("CB", jsonArray);
}
main();


