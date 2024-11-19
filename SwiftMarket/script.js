//freeButton : this function scrolls into main section of the page by clicking
//             onto take away your free clothes button
function freeButton()
{
    const button = document.querySelector('#free');
    const mainContent = document.querySelector('main');

    button.addEventListener("click", () =>
    {
        mainContent.scrollIntoView({behavior: "smooth"});
    })
}
//main : entry of the script
function main()
{
    freeButton();
}

main();