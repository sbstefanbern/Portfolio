function dropDown() {
    document.querySelector("#dropdown-li").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-button')) {

    var dropdowns = document.querySelector(".dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


var bannerCurrent = 1;
var bannerTime = 4500;

window.onload = function() {
    bannerRun();
}

var startBanner = setInterval(function() {
    bannerRun();
}, bannerTime);

document.querySelector(".banner").onmouseenter = function() {
    clearInterval(startBanner);
}

document.querySelector(".banner").onmouseleave = function() {
    startBanner = setInterval(function() {
        bannerRun();
    }, bannerTime);
}

document.querySelector("#bannerbuttonl").onclick = function() {
    if (bannerCurrent === 1) {
        bannerCurrent = 2;
    }
    else if (bannerCurrent === 2) {
        bannerCurrent = 3;
    }
    else if (bannerCurrent === 3) {
        bannerCurrent = 1;
    }
    bannerRun2();
}

document.querySelector("#bannerbuttonr").onclick = function() {
    bannerRun();
}

function bannerRun() {
  if (bannerCurrent === 1) {
    document.querySelector("#bannerimg2").style.opacity = "0";
    setTimeout(function() {
      document.querySelector("#bannerimg1").style.right = "0px";
      document.querySelector("#bannerimg1").style.zIndex = "50";
      document.querySelector("#bannerimg2").style.right = "-100%";
      document.querySelector("#bannerimg2").style.zIndex = "60";
      document.querySelector("#bannerimg3").style.right = "100%";
      document.querySelector("#bannerimg3").style.zIndex = "40";
    }, 500);
    setTimeout(function() {
      document.querySelector("#bannerimg2").style.opacity = "1";
    }, 1000);
    bannerCurrent = 2;
  }
  else if (bannerCurrent === 2) {
    document.querySelector("#bannerimg3").style.opacity = "0";
    setTimeout(function() {
      document.querySelector("#bannerimg2").style.right = "0px";
      document.querySelector("#bannerimg2").style.zIndex = "50";
      document.querySelector("#bannerimg3").style.right = "-100%";
      document.querySelector("#bannerimg3").style.zIndex = "60";
      document.querySelector("#bannerimg1").style.right = "100%";
      document.querySelector("#bannerimg1").style.zIndex = "40";
    }, 500);
    setTimeout(function() {
      document.querySelector("#bannerimg3").style.opacity = "1";
    }, 1000);
    bannerCurrent = 3;
  }
  else if (bannerCurrent === 3) {
    document.querySelector("#bannerimg1").style.opacity = "0";
    setTimeout(function() {
      document.querySelector("#bannerimg3").style.right = "0px";
      document.querySelector("#bannerimg3").style.zIndex = "50";
      document.querySelector("#bannerimg1").style.right = "-100%";
      document.querySelector("#bannerimg1").style.zIndex = "60";
      document.querySelector("#bannerimg2").style.right = "100%";
      document.querySelector("#bannerimg2").style.zIndex = "40";
    }, 500);
    setTimeout(function() {
      document.querySelector("#bannerimg1").style.opacity = "1";
    }, 1000);
    bannerCurrent = 1;
  }
}

function bannerRun2() {
  if (bannerCurrent === 1) {
    document.querySelector("#bannerimg3").style.opacity = "0";
    setTimeout(function() {
      document.querySelector("#bannerimg1").style.right = "0px";
      document.querySelector("#bannerimg1").style.zIndex = "50";
      document.querySelector("#bannerimg3").style.right = "100%";
      document.querySelector("#bannerimg3").style.zIndex = "60";
      document.querySelector("#bannerimg2").style.right = "-100%";
      document.querySelector("#bannerimg2").style.zIndex = "40";
    }, 500);
    setTimeout(function() {
      document.querySelector("#bannerimg3").style.opacity = "1";
    }, 1000);
    bannerCurrent = 2;
  }
  else if (bannerCurrent === 2) {
    document.querySelector("#bannerimg1").style.opacity = "0";
    setTimeout(function() {
      document.querySelector("#bannerimg1").style.right = "100%";
      document.querySelector("#bannerimg1").style.zIndex = "50";
      document.querySelector("#bannerimg2").style.right = "0px";
      document.querySelector("#bannerimg2").style.zIndex = "60";
      document.querySelector("#bannerimg3").style.right = "-100%";
      document.querySelector("#bannerimg3").style.zIndex = "40";
    }, 500);
    setTimeout(function() {
      document.querySelector("#bannerimg1").style.opacity = "1";
    }, 1000);
    bannerCurrent = 3;
  }
  else if (bannerCurrent === 3) {
    document.querySelector("#bannerimg2").style.opacity = "0";
    setTimeout(function() {
      document.querySelector("#bannerimg3").style.right = "0px";
      document.querySelector("#bannerimg3").style.zIndex = "50";
      document.querySelector("#bannerimg1").style.right = "-100%";
      document.querySelector("#bannerimg1").style.zIndex = "60";
      document.querySelector("#bannerimg2").style.right = "100%";
      document.querySelector("#bannerimg2").style.zIndex = "40";
    }, 500);
    setTimeout(function() {
      document.querySelector("#bannerimg2").style.opacity = "1";
    }, 1000);
    bannerCurrent = 1;
  }
}
