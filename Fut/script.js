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

function fourThreeThree()
{
    let mainHtml = document.querySelector("main");
    // console.log(mainHtml);
    let formationSection = document.createElement("section");
    formationSection.classList.add("formation");
    formationSection.innerHTML = ` 
            <div class="GK"><div class="dot">GK</div></div>

            <div class="CBL"><div class="dot">CBL</div></div>

            <div class="CBR"><div class="dot">CBR</div></div>

            <div class="LB"> <div class="dot">LB</div></div>

            <div class="RB"> <div class="dot">RB</div></div>

            <div class="MDF"><div class="dot">MDF</div></div>

            <div class="ML"><div class="dot">ML</div></div>

            <div class="MR"><div class="dot">MR</div></div>

            <div class="STM"><div class="dot">STM</div></div>

            <div class="FWR"><div class="dot">FWR</div></div>

            <div class="FWL"><div class="dot">FWL</div></div> 
            `
    mainHtml.appendChild(formationSection);
}

async function Apicons() 
{
    let fetched = await fetch("http://localhost:3000/players")
    let converted = await fetched.json();
    return (converted);
}

function createCard()
{
    
}
function main()
{
    let jsonArray = Apicons();
    fourThreeThree();
}
main();


