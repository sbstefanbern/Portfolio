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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

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
var btnfooter = document.getElementById("contactform-footer");
var span = document.getElementsByClassName("close-popup")[0];

btn.onclick = function() {
  contactbox.style.display = "block";
}

btnfooter.onclick = function() {
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

var serviceicon1 = document.querySelector("#service-icon-1");
var serviceicon2 = document.querySelector("#service-icon-2");
var serviceicon3 = document.querySelector("#service-icon-3");
var serviceicon4 = document.querySelector("#service-icon-4");
var serviceicon5 = document.querySelector("#service-icon-5");
var serviceicon6 = document.querySelector("#service-icon-6");
var servicetext1 = document.querySelector("#service-text-1");
var servicetext2 = document.querySelector("#service-text-2");
var servicetext3 = document.querySelector("#service-text-3");
var servicetext4 = document.querySelector("#service-text-4");
var servicetext5 = document.querySelector("#service-text-5");
var servicetext6 = document.querySelector("#service-text-6");

function service1(){
  serviceicon1.classList.add("service-active");
  serviceicon2.classList.remove("service-active");
  serviceicon3.classList.remove("service-active");
  serviceicon4.classList.remove("service-active");
  serviceicon5.classList.remove("service-active");
  serviceicon6.classList.remove("service-active");
  servicetext1.style.opacity = "1";
  servicetext2.style.opacity = "0";
  servicetext3.style.opacity = "0";
  servicetext4.style.opacity = "0";
  servicetext5.style.opacity = "0";
  servicetext6.style.opacity = "0";
}

function service2(){
  serviceicon1.classList.remove("service-active");
  serviceicon2.classList.add("service-active");
  serviceicon3.classList.remove("service-active");
  serviceicon4.classList.remove("service-active");
  serviceicon5.classList.remove("service-active");
  serviceicon6.classList.remove("service-active");
  servicetext1.style.opacity = "0";
  servicetext2.style.opacity = "1";
  servicetext3.style.opacity = "0";
  servicetext4.style.opacity = "0";
  servicetext5.style.opacity = "0";
  servicetext6.style.opacity = "0";
}

function service3(){
  serviceicon1.classList.remove("service-active");
  serviceicon2.classList.remove("service-active");
  serviceicon3.classList.add("service-active");
  serviceicon4.classList.remove("service-active");
  serviceicon5.classList.remove("service-active");
  serviceicon6.classList.remove("service-active");
  servicetext1.style.opacity = "0";
  servicetext2.style.opacity = "0";
  servicetext3.style.opacity = "1";
  servicetext4.style.opacity = "0";
  servicetext5.style.opacity = "0";
  servicetext6.style.opacity = "0";
}
function service4(){
  serviceicon1.classList.remove("service-active");
  serviceicon2.classList.remove("service-active");
  serviceicon3.classList.remove("service-active");
  serviceicon4.classList.add("service-active");
  serviceicon5.classList.remove("service-active");
  serviceicon6.classList.remove("service-active");
  servicetext1.style.opacity = "0";
  servicetext2.style.opacity = "0";
  servicetext3.style.opacity = "0";
  servicetext4.style.opacity = "1";
  servicetext5.style.opacity = "0";
  servicetext6.style.opacity = "0";
}
function service5(){
  serviceicon1.classList.remove("service-active");
  serviceicon2.classList.remove("service-active");
  serviceicon3.classList.remove("service-active");
  serviceicon4.classList.remove("service-active");
  serviceicon5.classList.add("service-active");
  serviceicon6.classList.remove("service-active");
  servicetext1.style.opacity = "0";
  servicetext2.style.opacity = "0";
  servicetext3.style.opacity = "0";
  servicetext4.style.opacity = "0";
  servicetext5.style.opacity = "1";
  servicetext6.style.opacity = "0";
}
function service6(){
  serviceicon1.classList.remove("service-active");
  serviceicon2.classList.remove("service-active");
  serviceicon3.classList.remove("service-active");
  serviceicon4.classList.remove("service-active");
  serviceicon5.classList.remove("service-active");
  serviceicon6.classList.add("service-active");
  servicetext1.style.opacity = "0";
  servicetext2.style.opacity = "0";
  servicetext3.style.opacity = "0";
  servicetext4.style.opacity = "0";
  servicetext5.style.opacity = "0";
  servicetext6.style.opacity = "1";
}

function value1(){
  var valueicon1 = document.querySelector("#value-icon-1");
  var valueicon2 = document.querySelector("#value-icon-2");
  var valueicon3 = document.querySelector("#value-icon-3");
  var value1 = document.querySelector("#value-text-1");
  var value2 = document.querySelector("#value-text-2");
  var value3 = document.querySelector("#value-text-3");
  valueicon1.classList.add("value-active");
  valueicon2.classList.remove("value-active");
  valueicon3.classList.remove("value-active");
  value1.style.opacity = "1";
  value2.style.opacity = "0";
  value3.style.opacity = "0";
}

function value2(){
  var valueicon1 = document.querySelector("#value-icon-1");
  var valueicon2 = document.querySelector("#value-icon-2");
  var valueicon3 = document.querySelector("#value-icon-3");
  var value1 = document.querySelector("#value-text-1");
  var value2 = document.querySelector("#value-text-2");
  var value3 = document.querySelector("#value-text-3");
  valueicon1.classList.remove("value-active");
  valueicon2.classList.add("value-active");
  valueicon3.classList.remove("value-active");
  value1.style.opacity = "0";
  value2.style.opacity = "1";
  value3.style.opacity = "0";
}

function value3(){
  var valueicon1 = document.querySelector("#value-icon-1");
  var valueicon2 = document.querySelector("#value-icon-2");
  var valueicon3 = document.querySelector("#value-icon-3");
  var value1 = document.querySelector("#value-text-1");
  var value2 = document.querySelector("#value-text-2");
  var value3 = document.querySelector("#value-text-3");
  valueicon1.classList.remove("value-active");
  valueicon2.classList.remove("value-active");
  valueicon3.classList.add("value-active");
  value1.style.opacity = "0";
  value2.style.opacity = "0";
  value3.style.opacity = "1";
}
