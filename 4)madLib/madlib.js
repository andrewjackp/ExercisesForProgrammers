document.addEventListener('DOMContentLoaded', function () {
let noun = document.querySelector("#noun")
const adjective = document.querySelector("#adjective");
const verb = document.querySelector("#verb");
const adverb = document.querySelector("#adverb");
const hours = document.querySelector("#hours");
const launch = document.querySelector("#launch");
launch.addEventListener("click", tellMadLib, false);

const getRid = document.querySelector("#delete");
getRid.addEventListener("click", deleteMadLib);

const sentence = document.querySelector("#sentence");

function tellMadLib(){
    let madLib = "";
    madLib += `Do you ${verb.value} `;
    madLib += `your ${adjective.value} `
    madLib += `${noun.value} `
    madLib +=  ` for ${hours.value} hours a day `
    madLib += `${adverb.value}? That's hilarious!`;
    sentence.innerHTML = madLib;
    gsap.from("#sentence", { 
        x: 300,
        y: 700
      });
}
});

function deleteMadLib(){
    sentence.innerHTML = "";
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

