/*modal-add-to-basket*/

var bayButton = document.querySelectorAll(".buy-button");
var addToBasket = document.querySelector(".modal-add-to-basket");
var modalButton = addToBasket.querySelector(".modal-button");
var backButton = addToBasket.querySelector(".back-button");
var addToBasketClose = addToBasket.querySelector(".modal-close");

for (var i = 0; i < bayButton.length; i++) {
  bayButton[i].addEventListener("click", function(evt) {
  evt.preventDefault ();
  addToBasket.classList.add("modal-active");
  modalButton.focus();
  });
}

addToBasketClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  addToBasket.classList.remove("modal-active");
});

backButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  addToBasket.classList.remove("modal-active");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (addToBasket.classList.contains("modal-active")) {
      evt.preventDefault();
      addToBasket.classList.remove("modal-active");
    }
  }
});

/*modal-message*/

var messageButton = document.querySelector(".contacts .button");
var popupMessage = document.querySelector(".modal-message");
var closeMessage = document.querySelector(".modal-message .modal-close");
var userName = popupMessage.querySelector("[name=user]");
var userEmail = popupMessage.querySelector("[name=email]");
var form = popupMessage.querySelector(".message-form");
var overlay = document.querySelector(".overlay");

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

/*modal-map*/
var mapLink = document.querySelector(".contacts-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

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

/*slider-service*/
var deliveryButton = document.querySelector(".delivery-button");
var guaranteeButton = document.querySelector(".guarantee-button");
var creditButton = document.querySelector(".credit-button");

var sliderDelivery = document.querySelector(".service-delivery");
var sliderGuarantee = document.querySelector(".service-guarantee");
var sliderCredit = document.querySelector(".service-credit");

var serviceButton = document.querySelectorAll(".service-button");
var serviceSliderItem = document.querySelectorAll(".service-slider-item");

      deliveryButton.addEventListener("click", function (evt) {
      evt.preventDefault();
      for (var i = 0; i < serviceButton.length; i++) {
      serviceButton[i].classList.remove("active");
      serviceSliderItem[i].classList.add("visually-hidden");
    };
      deliveryButton.classList.add("active");
      sliderDelivery.classList.remove("visually-hidden");
  });

      guaranteeButton.addEventListener("click", function (evt) {
      evt.preventDefault();
      for (var i = 0; i < serviceButton.length; i++) {
      serviceButton[i].classList.remove("active");
      serviceSliderItem[i].classList.add("visually-hidden");
    };
      guaranteeButton.classList.add("active");
      sliderGuarantee.classList.remove("visually-hidden");
  });


   creditButton.addEventListener("click", function (evt) {
      evt.preventDefault();
      for (var i = 0; i < serviceButton.length; i++) {
      serviceButton[i].classList.remove("active");
      serviceSliderItem[i].classList.add("visually-hidden");
    };
      creditButton.classList.add("active");
      sliderCredit.classList.remove("visually-hidden");
  });


/*promo-slider*/

var controlsButtonBack = document.querySelector(".controls-button-back");
var controlsButtonNext = document.querySelector(".controls-button-next");
var sliderItems = document.querySelectorAll(".slider-item");
var sliderIndicators = document.querySelectorAll(".slider-indicator-item");
var b = 0;

  controlsButtonBack.addEventListener("click", function (evt) {
  evt.preventDefault();
  
  sliderItems[b].classList.remove("active");
  sliderIndicators[b].classList.remove("active");
  b = b - 1;
  if(b < 0){
    b = sliderItems.length - 1;
  }
  sliderItems[b].classList.add("active");
  sliderIndicators[b].classList.add("active");
});

  controlsButtonNext.addEventListener("click", function (evt) {
  evt.preventDefault();
  sliderItems[b].classList.remove("active");
  sliderIndicators[b].classList.remove("active");
  b = b + 1;
  if(b >= sliderItems.length){
    b = 0;
  }
  sliderItems[b].classList.add("active");
  sliderIndicators[b].classList.add("active");
});
