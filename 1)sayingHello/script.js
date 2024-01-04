
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

