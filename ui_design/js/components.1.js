
/* Header Top Bar */
function headerTopBar() {
    var x = document.getElementById("topnavbar"); //topnav
    if (x.className === "w3-top") {//w3-bar
      x.className += " responsive";
    } else {
      x.className = "w3-top";
    }
  }

/** Left Side bar menu links */
function leftsidenav_accordion_func() {
  var x = document.getElementById("leftsidenav_accordion_content");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className += " w3-green";
  } else { 
    x.className = x.className.replace(" w3-show", "");
    x.previousElementSibling.className = 
    x.previousElementSibling.className.replace(" w3-green", "");
  }
}

function leftsidenav_dropdown_func() {
  var x = document.getElementById("demoDrop");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className += " w3-green";
  } else { 
    x.className = x.className.replace(" w3-show", "");
    x.previousElementSibling.className = 
    x.previousElementSibling.className.replace(" w3-green", "");
  }
}

  /* Left Side Slide Bar */
function leftsideslidebar_open() {
    document.getElementById("leftsideslidebar").style.display = "block";
}
function leftsideslidebar_close() {
    document.getElementById("leftsideslidebar").style.display = "none";
}


/* Left Side Slide Bar */
function rightsideslidebar_open() {
//    document.getElementById("rightsideslidebar").style.display = "block";
    document.getElementById("rightsideslidebar").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
}
function rightsideslidebar_close() {
    //document.getElementById("rightsideslidebar").style.display = "none";
    document.getElementById("rightsideslidebar").style.width = "0px";    
    document.getElementById("main").style.marginRight= "0px";
}

/* Main Footer Bot Bar */
function footerbotBar() {
  var x = document.getElementById("mainfooternavbar");
  if (x.className === "w3-bar") {
    x.className += " responsive";
  } else {
    x.className = "w3-bar";
  }
}

// Tree
var toggler = document.getElementsByClassName("caret");
for (var i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}