// accordion
const init_accordion = () => {
    var accordion = document.getElementsByClassName("accordion");

    for (var acc of accordion) {        
        acc.addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            panel.style.maxHeight = (panel.style.maxHeight) ? null:panel.scrollHeight + "px";
        });
    }
}

init_accordion();

// Tab
$('.tablinks').on('click',function(evt){
    var cityName = $(this).attr("data-href"); 
    var tab, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (tab of tabcontent)  tab.style.display = "none"; 
    tablinks = document.getElementsByClassName("tablinks");

    for (tab of tablinks) tab.className = tab.className.replace(" active", "");
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
});   

// Top Responseive Nav
$("header nav .topnav #sandwich-icon").on('click',function(){
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
});