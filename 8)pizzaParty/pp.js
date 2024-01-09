document.addEventListener('DOMContentLoaded', function () {
    const partyBtn = document.querySelector("#partyBtn");
    partyBtn.addEventListener("click", addPizzas);
    
    const pizzaParty = document.getElementById("pizzaParty");
    
    function addPizzas(){
    const numOfPpl = parseInt(document.getElementById("people").value, 10);
    const numOfPizzas = parseInt(document.getElementById("pizzas").value, 10);
    const numOfSlices = parseInt(document.getElementById("slices").value, 10);
    const slicePerPerson = Math.trunc(numOfSlices / numOfPpl);
    const leftover = numOfSlices % numOfPpl;
    
    pizzaParty.innerHTML = `How many people? ${numOfPpl}`+  "<br/>" +
     `How many pizzas do you have? ${numOfPizzas}` + "<br/>" +
     `${numOfPpl} people with ${numOfPizzas} pizzas` + "<br/>" +
     `Each person gets ${slicePerPerson} pieces of pizza` + "<br/>" +
      `There are ${leftover} leftover pieces`
    console.log("leftover: ", leftover);
    if(slicePerPerson === 1){
        pizzaParty.innerHTML = 
        `How many people? ${numOfPpl}`+  "<br/>" +
     `How many pizzas do you have? ${numOfPizzas}` + "<br/>" +
     `${numOfPpl} people with ${numOfPizzas} pizzas` + "<br/>" +
        `Each person gets ${slicePerPerson} piece of pizza`+ "<br/>" +
        `There are ${leftover} leftover pieces`
    } else if (slicePerPerson === 0){
        pizzaParty.innerHTML = "No one gets pizza"
    }
    }
    async function includeHTML() {
        const includes = document.getElementsByTagName('include');
        [].forEach.call(includes, include => {
          let filePath = include.getAttribute('src');
          fetch(filePath).then((file) => {
            file.text().then((content) => {
              include.insertAdjacentHTML('afterend', content);
              include.remove();
            });
          });
        });
      };
    
      includeHTML();
})

