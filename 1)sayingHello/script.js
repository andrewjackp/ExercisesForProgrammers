
function askName(){
    let name = prompt("Please enter your name", "");
    let greet = "hello ";
    let secondGreet = name + ", nice to meet you!"
    

    let para = document.getElementById("paragraph");
    if(name != null){
        para.innerHTML = greet + secondGreet;
        document.getElementById("button-test").style.backgroundColor = "teal";
    }
    gsap.from("#paragraph", { 
        x: 200,
        y: 100
      });
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
