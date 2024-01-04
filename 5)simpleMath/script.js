document.addEventListener('DOMContentLoaded', function () {
   
const result = document.querySelector("#result");
const addBtn = document.querySelector("#addBtn");
const subBtn = document.getElementById("subBtn");
const multBtn = document.getElementById("multBtn");
const divBtn = document.getElementById("divBtn");

addBtn.addEventListener("click", addNums, false);
subBtn.addEventListener("click", subNums, false);
multBtn.addEventListener("click", multiplyNums, false);
divBtn.addEventListener("click", divNums, false);

    function addNums(){
        const firstNum = parseInt(document.getElementById("firstNumber").value, 10);
        const secNum = parseInt(document.querySelector("#secNumber").value, 10);
        let sum = 0;
        sum += firstNum + secNum;
        result.innerHTML = sum;
        console.log("sum", firstNum, secNum)
        if(firstNum < 0 && secNum <0){
            result.innerHTML = "not a number";
        }
        gsap.from("#result", { 
            x: 400,
            y: 800
          }, console.log("gsap"));
    }

    function subNums(){
        const firstNum = parseInt(document.getElementById("firstNumber").value, 10);
        const secNum = parseInt(document.querySelector("#secNumber").value, 10);
        let diff = 0;
        diff += firstNum - secNum;
        result.innerHTML = diff;
        console.log("diff", diff);
        if(firstNum < 0 && secNum <0){
            result.innerHTML = "not a number";
        }
        gsap.from("#result", { 
            x: 400,
            y: 800
          }, console.log("gsap"));
    }
    function multiplyNums(){
        const firstNum = parseInt(document.getElementById("firstNumber").value, 10);
        const secNum = parseInt(document.querySelector("#secNumber").value, 10);
        let ans = 0;
        ans += firstNum * secNum;
        result.innerHTML = ans;
        console.log("ans", ans);
        if(firstNum < 0 && secNum < 0){
            result.innerHTML = "not a number";
        }
        gsap.from("#result", { 
            x: 400,
            y: 800
          }, console.log("gsap"));
    }
    function divNums(){
        const firstNum = parseInt(document.getElementById("firstNumber").value, 10);
        const secNum = parseInt(document.querySelector("#secNumber").value, 10);
        let quotient = 0;
        quotient += firstNum / secNum;
        result.innerHTML = quotient;
        console.log("quotient", quotient);
        if(firstNum < 0 && secNum < 0){
            result.innerHTML = "not a number";
        }
        gsap.from("#result", { 
            x: 400,
            y: 800
          }, console.log("gsap"));
    }
    
})