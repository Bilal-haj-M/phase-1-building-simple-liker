// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


document.addEventListener("DOMContentLoaded", function() {
  const likeButtons = document.querySelectorAll(".like");
  const modal = document.querySelector("modal");
  const modalMessage = document.querySelector("modal-message");
  
  likeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const hearts = button.querySelector(".like-glyph");
      if (hearts.textContent === EMPTY_HEART) {
        mimicServerCall()
        .then(function (response) {
          hearts.textContent = FULL_HEART
          hearts.classList.add("activated-heart")
        })
        .catch(function (error) {
          modalMessage.textContent = error;
          modal.classList.remove(".hidden");
        
        setTimeout(function () {
          modal.classList.add("hidden");
        }, 3000);
       });
      } else if (hearts.textContent === FULL_HEART) {
        hearts.textContent = EMPTY_HEART;
        hearts.classList.remove("activated-heart");
      }
    })
  })
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}


