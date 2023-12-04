/* alert("Hello Class!"); */

var mainNav = document.querySelector("#mainNav");
var signInUpButtons = document.querySelector("#sign-in-up-buttons");
var burgerBtn = document.querySelector("#burger-container button")
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
    }else{
        console.log("hide menu");
        //this will remove the class of showMainNav to the id mainNav
        mainNav.classList.remove("showMainNav");
        canYouSeeMainNav = false;

        signInUpButtons.classList.remove("showSignIn");
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
