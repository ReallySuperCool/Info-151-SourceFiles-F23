Fancybox.bind()

AOS.init();

/* const container = document.getElementById("myCarousel"); */
const container = document.querySelector("#myCarousel");

const options = { infinite: false };

new Carousel(container, options);


/* alert("Hello Class!"); */

var mainNav = document.querySelector("#mainNav");
var signInUpButtons = document.querySelector("#sign-in-up-buttons");
var burgerBtn = document.querySelector("#burger-container button");

var burgerBars = document.querySelector("#burger-bars");
var burgerX = document.querySelector("#burger-x");
/* console.log(burgerBtn); */

var canYouSeeMainNav = false;

/* console.log(mainNav); */

/* var sectionTags = document.querySelectorAll(".myClass"); */



function showNav(){

    if(canYouSeeMainNav == false){
        console.log("show menu");
        //this will add the class of showMainNav to the id mainNav
        mainNav.classList.add("showMainNav");
        canYouSeeMainNav = true;

        signInUpButtons.classList.add("showSignIn");
        canYouSeeMainNav = true;

        // hide burger
        burgerBars.classList.add("hide-burger-bars");

        //show burger x
        burgerX.classList.remove("hide-burger-x");
    }else{
        console.log("hide menu");
        //this will remove the class of showMainNav to the id mainNav
        mainNav.classList.remove("showMainNav");
        canYouSeeMainNav = false;

        signInUpButtons.classList.remove("showSignIn");

        // show* burger
        burgerBars.classList.remove("hide-burger-bars");

        //hide burger x
        burgerX.classList.add("hide-burger-x");

        canYouSeeMainNav = false;


    }

}


// add a event listener to the button

burgerBtn.addEventListener("click", showNav);

// will call a function with the name of showNav
/* showNav(); */



/* Sign In */
var signInBtn = document.querySelector("#sign-in-btn");

var signInContainer = document.querySelector("#sign-in-container");

var closeSignUpModalBtn = document.querySelector("#close-sign-up-modal-btn");


function showSignInModal() {
/*     console.log("show modal now"); */

    signInContainer.classList.add("show-signIn-container");

    mainNav.classList.remove("showMainNav");

}
function hideSignInModal(){
    signInContainer.classList.remove("show-signIn-container");
}

signInBtn.addEventListener("click", showSignInModal);

closeSignUpModalBtn.addEventListener("click", hideSignInModal);
signInContainer.addEventListener("click", hideSignInModal);
