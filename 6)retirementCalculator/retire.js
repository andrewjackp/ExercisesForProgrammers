document.addEventListener('DOMContentLoaded', function () {

    const retireBtn = document.querySelector("#retireBtn");
    retireBtn.addEventListener("click", getRetirementAge);

    const retireCalc = document.querySelector("#retireCalc");

    function getRetirementAge(){
        const currentAge = parseInt(document.getElementById("currentAge").value, 10) || "";
        console.log(currentAge);
        const retiredAge = parseInt(document.getElementById("retiredAge").value, 10) || "";
        const today = new Date();
        const currentYear = today.getFullYear();

        const yearsTilRetirement = retiredAge - currentAge;
        console.log(currentYear, 'years til retirement', yearsTilRetirement);

        const retirementYear = currentYear + yearsTilRetirement;
        console.log(retirementYear);

        retireCalc.innerHTML = `What is your current age? ${currentAge}.
            At what age would you like to retire? ${retiredAge}.
            It's ${currentYear}, so you can retire in ${retirementYear}.`
        
            if (yearsTilRetirement < 0){
            retireCalc.innerHTML = `What is your current age? ${currentAge}.
            At what age would you like to retire? ${retiredAge}.
            It's ${currentYear}, so you could have retired in ${retirementYear}.` 
        }  else if (currentAge == ""){
            retireCalc.innerHTML = "please enter both current age and retirement age"
        }   if (retiredAge == ""){
            retireCalc.innerHTML = "please enter both current age and retirement age"
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


