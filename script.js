var mainContainer = document.getElementById('main-container');
// console.log(mainContainer)
// document.addEventListener('scroll', changeColor);

document.addEventListener('scroll', changeColor);

function changeColor(e) {
    var html = document.documentElement; //html the whole document;
    var levelToTriggerData = 200;


    var hasReachedBottom = html.clientHeight >= html.scrollHeight - html.scrollTop-levelToTriggerData;
    if(hasReachedBottom) {
        console.log("change the color")
        // GET request from DB
        mainContainer.style.backgroundColor = "green";
    }     
    else {
        mainContainer.style.backgroundColor = "yellow";
    }
}

