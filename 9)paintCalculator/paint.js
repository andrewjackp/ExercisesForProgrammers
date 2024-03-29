document.addEventListener('DOMContentLoaded', function () {

const paintBtn = document.querySelector("#paintBtn");
paintBtn.addEventListener("click", calculatePaint);

const paintCalculated = document.getElementById("paintCalculated");

function calculatePaint(){
    const length = parseInt(document.getElementById("length").value, 10);
    const width = parseInt(document.getElementById("width").value, 10);
    const area = length * width;
    const gallon = 350;
    const paintNeeded = Math.ceil(area/gallon);
    paintCalculated.innerHTML = `you will need to purchase ${paintNeeded} gallons to 
    cover ${area} square feet`;
    console.log("area ", area)
    console.log("paintCalculated ", paintCalculated)
    
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


