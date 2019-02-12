
/* Header Top Bar */
function headerTopBar() {
    var x = document.getElementById("topnavbar"); 
    if (x.className === "w3-top") {
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
    x.previousElementSibling.className += " w3-theme";
  } else { 
    x.className = x.className.replace(" w3-show", "");
    x.previousElementSibling.className = 
    x.previousElementSibling.className.replace(" w3-theme", "");
  }
}

function leftsidenav_dropdown_func() {
  var x = document.getElementById("morelinkdrop");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    //x.previousElementSibling.className += " w3-green";
  } else { 
    x.className = x.className.replace(" w3-show", "");
    //x.previousElementSibling.className = 
    //x.previousElementSibling.className.replace(" w3-green", "");
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
    document.getElementById("rightsideslidebar").style.width = "350px";
   // document.getElementById("main").style.marginRight = "250px";
}
function rightsideslidebar_close() {
    //document.getElementById("rightsideslidebar").style.display = "none";
    document.getElementById("rightsideslidebar").style.width = "0px";    
    //document.getElementById("main").style.marginRight= "0px";
}

/* Main Footer Bot Bar */
function mainfooterBar() {
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

// Right panel accordion
function rightPanelAccordion(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";    
    //x.previousElementSibling.className = x.previousElementSibling.className.replace("w3-black", "w3-red");
  } else { 
    x.className = x.className.replace(" w3-show", "");    
    //x.previousElementSibling.className = x.previousElementSibling.className.replace("w3-red", "w3-black");
  }
}

// main tab
function maintabnav(evt,continer,tablink, tabName){
  var i, x, tablinks;
  x = document.getElementsByClassName(continer);
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName(tablink);
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("w3-theme", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " w3-theme";
}

// leftmenufilter
function leftmenufilter() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("leftmenufilterinput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("leftmenufilterUl");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    txtValue = li[i].textContent || li[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

window.onload = function() { 
  var x = document.getElementById("snackbar");  
  x.classList += " show";
  setTimeout(function(){ x.classList.toggle("show", ""); }, 3000);
}

// filer cards

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "w3-show");
    
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "w3-show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}