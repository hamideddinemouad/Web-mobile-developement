function showAllPos (posStr, jsonArrSap)
{
    let arrplayers = [];
    for (let player of jsonArrSap)
    {
        if (player.position === posStr && checkIfPlayerInFormation(player, jsonArrSap))
        {
            arrplayers.push(player);
        }
    }
    return (arrplayers);
}
function checkIfPlayerInFormation (player, array)
{
    if (player in array)
    {
        console.log("player in array");
        return false;
    }
    console.log("not in arr");
    return true;
}