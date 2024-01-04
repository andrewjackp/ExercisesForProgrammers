
document.addEventListener('DOMContentLoaded', function () {
    const charInput = document.getElementById("charInput");
    const quote = document.getElementById("quote");
    const author = document.getElementById("author");
    const quoteBtn = document.getElementById("quoteBtn");

    quoteBtn.addEventListener("click", getQuote);
    
    function getQuote(){
        let name = author.value;
        let authorQuote = quote.value;
        charInput.innerHTML = `${name} says, "${authorQuote}"`;
        if(name == "" || 0){
            charInput.innerHTML = ` ... says, "${authorQuote}"`
        } else if (authorQuote == "" || 0){
            `${name} says, ...`
        }
    }

})