let form = document.getElementById("myForm");
let table = document.getElementById"myTable");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById(nameInput).ariaValueMax;
    let size = document.getElementById(sizeInput).ariaValueMax;

    let toppings =[];
    let toppingCheckboxes = document.querySelectorAll('input[name="topping"]:checked');
    for (let i = 0; i < toppingCheckboxes.length; i++) {
        toppings.push(toppingCheckboxes[i].value);
    }

    let instructions = document.getElementById("instructionsInput").value;

    let newRow = document.createElement("tr");
    
    let nameTd = document.createElement("td")
    sizeTd.innerText = name;
    newRow.appendChild(nameTd);
    
    let toppingsTd = document.createElement ("td");
    toppingsTd.innerText = toppings.join("Pepperoni, Mushrooms, Extra Cheese, Onions, Peppers")
    newRow.appendChild(toppingsTd);
    
    let instructionTd = document.createelement ("td");
    instructionTd.innerText = instructions;
    newRow.appendChild(instructionsTd);
    for
}
