const quotesURL = chrome.runtime.getURL('quotes.json');
var quotes;
fetch(quotesURL).then((response) => response.json())
    .then((json) => {
        quotes = json;
    })
    .catch((error) => console.log(error, error.message));
    
var div = document.createElement("div");
var imgPath = chrome.extension.getURL('img/mohawk.jpg');
div.innerHTML = `
      <div id="clippy"></div>
          <img id="clippyImg" src=${imgPath} />
      `;
document.body.appendChild(div);