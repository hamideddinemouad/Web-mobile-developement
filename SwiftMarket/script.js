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


//apiCons : async function  consumes api
//returns : jsonobject if success false if error
async function apiCons()
{
    try
    {
    let response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok)
    {
        throw new Error ("respone not ok");
    }
    let products = await response.json();
    return products;
    }
    catch (error)
    {
        console.error("error:", error.message)
        return (false);
    }
}


//gen Index: generates random index
//@maxIndex : maxIndex to not exceed
//returns :always a number
function genIndex(maxIndex)
{
    let index = Math.floor(Math.random() * maxIndex);
    return (index);
}



//genProduct: selects random product
//@jsonObject: needs jsonObject
//return: jsonObject[random]; 
function genProduct(jsonObject)
{
    if (!jsonObject)
    {
        console.error("genProduct function failed");
        return (-1);
    }
    //added 1 to not eliminate last index with Math.random()
    let genratedIndex = genIndex(jsonObject.length);
    let generatedObject = jsonObject[genratedIndex];
    return (generatedObject);
}

//isProduct: checks if product is valid
//@takes in js object
//returns: false if not price in prodocut or product is null 
//         True if not null and price  key in product
function isProduct(product) 
{
     if (product !== null)
     {
        if (typeof(product) === 'object')
        {
            if ('price' in product)
                {
                    return (true);
                } 
        }
     }
     return(false);
}


function insertTemplate(object)
{
    //why undefined when it's just an object within my function
    if (!isProduct(object))
    {
        console.error("insert Template function failed, parametre object = " + object);
        return (-1);
    }
    let productdiv = document.querySelector('main section div')
    let template = document.createElement('div');
    template.id = "product-div";
    template.innerHTML= `
                    <article><img id="product-img" src="${object.image}" alt="product image"></article>
                    <p id="title" >${object.title}</p>
                    <p id="description">${object.description}</p>
                    <p id="price">Free</p>
                    <p><button>Add to cart</button></p>
                `
    productdiv.appendChild(template);
}


//insertProduct: function insert template according to parametres
//@products: int number respresents how many times template is inserted
//@jsonResponse: parsed json response from api consumption
//return: Nothing + renders in webpage
function insertProduct(products, jsonResponse)
{
    for (let i = 0; i < products; i++)
    {
        let randomProduct = genProduct(jsonResponse)
        insertTemplate(randomProduct);
    }
}


//main : entry of the script
async function main()
{
    freeButton();
    let parsedResponse = await apiCons()
    insertProduct(6, parsedResponse);
}

main();