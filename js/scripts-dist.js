var mainNav=document.querySelector("#mainNav"),signInUpButtons=document.querySelector("#sign-in-up-buttons"),burgerBtn=document.querySelector("#burger-container button"),burgerBars=document.querySelector("#burger-bars"),burgerX=document.querySelector("#burger-x"),canYouSeeMainNav=!1;function showNav(){0==canYouSeeMainNav?(console.log("show menu"),mainNav.classList.add("showMainNav"),canYouSeeMainNav=!0,signInUpButtons.classList.add("showSignIn"),canYouSeeMainNav=!0,burgerBars.classList.add("hide-burger-bars"),burgerX.classList.remove("hide-burger-x")):(console.log("hide menu"),mainNav.classList.remove("showMainNav"),canYouSeeMainNav=!1,signInUpButtons.classList.remove("showSignIn"),burgerBars.classList.remove("hide-burger-bars"),burgerX.classList.add("hide-burger-x"),canYouSeeMainNav=!1)}burgerBtn.addEventListener("click",showNav);var signInBtn=document.querySelector("#sign-in-btn"),signInContainer=document.querySelector("#sign-in-container"),closeSignUpModalBtn=document.querySelector("#close-sign-up-modal-btn");function showSignInModal(){signInContainer.classList.add("show-signIn-container"),mainNav.classList.remove("showMainNav")}function hideSignInModal(){signInContainer.classList.remove("show-signIn-container")}signInBtn.addEventListener("click",showSignInModal),closeSignUpModalBtn.addEventListener("click",hideSignInModal),signInContainer.addEventListener("click",hideSignInModal);