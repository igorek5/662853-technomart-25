var messageButton = document.querySelector(".contacts .button");
var popupMessage = document.querySelector(".modal-message");
var closeMessage = document.querySelector(".modal-message .modal-close");
var userName = popupMessage.querySelector("[name=user]");
var userEmail = popupMessage.querySelector("[name=email]");
var form = popupMessage.querySelector(".message-form");
var overlay = document.querySelector(".overlay");

var mapLink = document.querySelector(".contacts-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("userName");
} catch (err) {
  isStorageSupport = false;
}

messageButton.addEventListener("click", function(evt) {
  evt.preventDefault ();
  popupMessage.classList.add("modal-show");
  overlay.classList.add("active");
  userName.focus();
  if (storage) {
    userName.value = storage;
    userEmail.focus();
  } else {
    userName.focus();
  }
});

closeMessage.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMessage.classList.remove("modal-show");
  popupMessage.classList.remove("modal-error");
  overlay.classList.remove("active");
});

form.addEventListener("submit", function(evt) {
  if (!userName.value || !userEmail.value) {
    evt.preventDefault();
    popupMessage.classList.remove("modal-error");
    popupMessage.offsetWidth = popupMessage.offsetWidth;
    popupMessage.classList.add("modal-error");                
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupMessage.classList.contains("modal-show")) {
      evt.preventDefault();
      popupMessage.classList.remove("modal-show");
      popupMessage.classList.remove("modal-error");
      overlay.classList.remove("active");
    }
  }
});

/*map*/

mapLink.addEventListener("click", function(evt) {
  evt.preventDefault ();
  mapPopup.classList.add("modal-active");
  mapClose.focus();
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-active");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-active")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-active");
    }
  }
});

/*modal-add-to-basket*/




