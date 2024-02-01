document.addEventListener('DOMContentLoaded', function () {
  
    document.querySelector(".quoteBtn").addEventListener("click", getQuote);
    function getQuote(){
        let name = document.querySelector(".author").value;
        let authorQuote = document.querySelector(".quote").value;
        document.querySelector(".charInput").innerHTML = `${name} says, "${authorQuote}"`;
        if(name == "" || 0){
          document.querySelector(".charInput").innerHTML = ` ... says, "${authorQuote}"`
        } else if (authorQuote == "" || 0){
            `${name} says, ...`
        }
    }
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