const products = [
    {
        img: "img/Cream Pomeranian.jpeg",
        name: 'Cream Pomeranian puppy',
        price: 450
    },
    {
        img: "img/Cavachon.jpeg",
        name: "Cavachon puppy",
        price: 360
    },
    {
        img: "img/American.jpeg",
        name: "American Puppy",
        price: 200
    },
    {
        img: "img/cute little.jpeg",
        name: "C-Little Puppy",
        price: 200
    },
    {
        img: "img/Golden.jpeg",
        name: "Golden Puppy",
        price: 180
    },
    {
        img: "img/maltese dog.jpeg",
        name: "Maltese Puppy",
        price: 200
    },
    {
        img: "img/maltese.jpeg",
        name: "Maltese Puppy",
        price: 200 
    },
    {
        img: "img/Maltese2.jpeg",
        name: "Maltese Puppy",
        price: 200
    },
    {
        img: "img/Red puppies.jpeg",
        name: "Red Puppy",
        price: 250
    },
    {
        img: "img/Yorkie.jpeg",
        name: "Yorkie Puppy",
        price: 300
    },
    {
        img: "img/pomeranian j.jpeg",
        name: "Pomeranian Puppy",
        price: 500
    },
    {
        img: "img/dog-team.jpeg",
        name: "Dog-team Puppy",
        price: 400
    }

]
// loop over the array
products.forEach(dog=>{
    // creates a div element node
const div = document.createElement('div');
// sets its class
div.className = "row-4 col-md-4 col-lg-4 ms-auto pt-5";
// sets an html template for the dogs data
    const html = `
    <img class="img-2 h-75"src="${dog.img}" alt="${dog.name}">
    <h4>${dog.name}</h4>
    <h5>$${dog.price.toFixed(2)}</h5>
    `;
div.innerHTML = html;
// appends the template to the DOM
document.getElementById("products").appendChild(div)
    
})