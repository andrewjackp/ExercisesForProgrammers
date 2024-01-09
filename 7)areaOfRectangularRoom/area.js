document.addEventListener('DOMContentLoaded', function (){
    const displayFeet = document.getElementById("squareFeet");
    const displaySqMeter = document.getElementById("squareMeters");
    const askLength = document.getElementById("askLength");
    const askWidth = document.getElementById("askWidth");

    const areaBtn = document.querySelector("#areaBtn");
    areaBtn.addEventListener("click", getArea);
    
    function getArea(){
        const length = parseInt(document.getElementById("length").value, 10);
        const width = parseInt(document.getElementById("width").value, 10);
        const area = length * width;
        const squareMeter = area * 0.09290304;
        askLength.innerHTML =  `What is the length of the room in feet? ${length}`
        askWidth.innerHTML = `What is the width of the room in feet? ${width}`
        displayFeet.innerHTML = ` the area is ${area} square feet`;
        displaySqMeter.innerHTML = `${squareMeter.toFixed(2)} square meters`; 

        console.log(length, width)
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
});

