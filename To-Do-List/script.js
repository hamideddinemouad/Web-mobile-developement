const myButton = document.getElementById('myButton');
const options = document.getElementById('options');
console.log(myButton);
console.log(options);

myButton.addEventListener("click",() => 
{
    // alert('buttonclicked');
    options.classList.toggle("hidden");
});