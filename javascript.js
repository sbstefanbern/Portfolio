if (window.matchMedia("(min-width: 700px)").matches) {

  function toggleMobileMenu(){
    var menu = document.querySelector("#mobile-menu");
    if (menu.style.marginRight === "-200px"){
      menu.style.marginRight = "0";
    } else{
      menu.style.marginRight = "-200px";
    }
  }

  function buttonAnimation(x){
    x.classList.toggle("change");
  }

  var contactbox = document.getElementById('contactpopup');
  var btn = document.getElementById("contactform");
  var span = document.getElementsByClassName("close-popup")[0];
  btn.onclick = function() {
      contactbox.style.display = "block";
  }

  span.onclick = function() {
      contactbox.style.display = "none";
  }
  window.onclick = function(event) {
      if (event.target == contactbox) {
          contactbox.style.display = "none";
      }
  }
}
else {
  var contactbox = document.getElementById('contactpopup');
  var btn = document.getElementById("contactform");
  var span = document.getElementsByClassName("close-popup")[0];
  btn.onclick = function() {
      contactbox.style.display = "block";
  }

  span.onclick = function() {
      contactbox.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == contactbox) {
          contactbox.style.display = "none";
      }
  }

  function toggleMobileMenu(){
    var menu = document.querySelector("#mobile-menu");
    if (menu.style.marginRight === "-200px"){
      menu.style.marginRight = "0";
    } else{
      menu.style.marginRight = "-200px";
    }
  }

  function buttonAnimation(x){
    x.classList.toggle("change");
  }

  function value1(){
    var valueicon1 = document.querySelector("#value-icon-1");
    var valueicon2 = document.querySelector("#value-icon-2");
    var valueicon3 = document.querySelector("#value-icon-3");
    var value1 = document.querySelector("#value1");
    var value2 = document.querySelector("#value2");
    var value3 = document.querySelector("#value3");
    valueicon1.className = "values-icon icon-1";
    valueicon2.className = "values-icon-small icon-2-small";
    valueicon3.className = "values-icon-small icon-3-small";
    value1.style.opacity = "1";
    value2.style.opacity = "0";
    value3.style.opacity = "0";
  }
  function value2(){
    var valueicon1 = document.querySelector("#value-icon-1");
    var valueicon2 = document.querySelector("#value-icon-2");
    var valueicon3 = document.querySelector("#value-icon-3");
    var value1 = document.querySelector("#value1");
    var value2 = document.querySelector("#value2");
    var value3 = document.querySelector("#value3");
    valueicon1.className = "values-icon-small icon-1-small";
    valueicon2.className = "values-icon icon-2";
    valueicon3.className = "values-icon-small  icon-3-small";
    value1.style.opacity = "0";
    value2.style.opacity = "1";
    value3.style.opacity = "0";
  }
  function value3(){
    var valueicon1 = document.querySelector("#value-icon-1");
    var valueicon2 = document.querySelector("#value-icon-2");
    var valueicon3 = document.querySelector("#value-icon-3");
    var value1 = document.querySelector("#value1");
    var value2 = document.querySelector("#value2");
    var value3 = document.querySelector("#value3");
    valueicon1.className = "values-icon-small icon-1-small";
    valueicon2.className = "values-icon-small icon-2-small";
    valueicon3.className = "values-icon icon-3";
    value1.style.opacity = "0";
    value2.style.opacity = "0";
    value3.style.opacity = "1";
  }
}
