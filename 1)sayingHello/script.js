document.addEventListener('DOMContentLoaded', function () {

const nameForm = document.getElementById("nameForm");

nameForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let greet = "hello ";
  let secondGreet = name + ", nice to meet you!"
  
  console.log(name);

  if(name = "" || name == 0){
    document.querySelector("p").innerHTML = greet;
  } else {
    document.querySelector("p").innerHTML = greet + secondGreet;
      document.querySelector(".ask-button").style.backgroundColor = "teal";
  }
  gsap.from("p", { 
      x: 200,
      y: 100
    });
})

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
