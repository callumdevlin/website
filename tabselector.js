var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");
function opentab(name){
    for(tablink of tablinks){
        tablink.classList.remove("active-tab-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab-content");
    }
    event.currentTarget.classList.add("active-tab-link")
    document.getElementById(name).classList.add("active-tab-content")
}