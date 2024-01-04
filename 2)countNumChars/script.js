// function getInput() {
//     let name = prompt("enter something");
//     let charInput = document.getElementById("charInput");
//     let submitForm = document.getElementById("submitForm");
//     let input = document.getElementById("charInput");

//     if(name.length > 0){
//         charInput.innerHTML = `What is the input string? ${name}, ${name} has ${name.replace(/\s/g, "").length} characters`;
//         document.getElementById("button-test").style.backgroundColor = "teal";
//     } else if (name.length == 0){
//         para.innerHTML = "user must enter something"
//     }
//     gsap.from("#paragraph", { 
//         x: 200,
//         y: 100
//       });
      
// }
let myLeads = [];
document.addEventListener('DOMContentLoaded', function () {
    const messageEle = document.getElementById('message');
    const counterEle = document.getElementById('counter');
    const btnEle = document.getElementById('button-test');
    const deleteBtn = document.getElementById('delete-btn');
    //const maxLength = messageEle.getAttribute('maxlength');
 
    messageEle.addEventListener('input', function (e) {

        const target = e.target;
        const current = target.value
        const currentLength = target.value.length;
        // let charInput = document.getElementById("charInput");
        // charInput.innerHTML = current;
        
        btnEle.addEventListener("click", () => {
          myLeads.push(current.value)
          charInput.innerHTML = current; 
          if(currentLength === 0){
            charInput.innerHTML = "enter something greater than 0";
          } else if (currentLength > 1){
            charInput.innerHTML = `${current} is ${current.replace(/\s/g, "").length} characters`;
           
          } else if(currentLength == 1){
            charInput.innerHTML = `${current} is ${current.replace(/\s/g, "").length} character`;
          }
        })
        deleteBtn.addEventListener("click", () => {
          localStorage.clear()
          charInput.innerHTML = ""; 
        })
        if(currentLength === 0){
          counterEle.innerHTML = "enter something greater than 0";
        } else if (currentLength > 1){
          counterEle.innerHTML = `${current} is ${current.replace(/\s/g, "").length} characters`;
         
        } else if(currentLength == 1){
          counterEle.innerHTML = `${current} is ${current.replace(/\s/g, "").length} character`;
        }
  
    });
 
    gsap.from("#counter", { 
      x: 200,
      y: 500
    });
});