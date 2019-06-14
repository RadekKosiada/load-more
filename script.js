var mainContainer = document.getElementById('main-container');
// console.log(mainContainer)
// document.addEventListener('scroll', changeColor);

document.addEventListener('scroll', changeColor);

function changeColor(e) {
    console.log("fjghf", document.pageY, document.pageYOffset, document.scrollTop);
    
    var hasReachedBottom = $(document).scrollTop() + $(window).height() >=$(document).height()-100;

    if(hasReachedBottom) {
        console.log("reached bottom");
        callMoreData();
    } else {
        setTimeout(checkscrollPosition, 500);
    }
    // if(e.pageYOffset > e.pageY/2) {
    //     console.log("Yay1")
    //     mainContainer.style.backgroundColor = "green";
    // } else {
    //     mainContainer.style.backgroundColor = "yellow";
    // }
}
    
