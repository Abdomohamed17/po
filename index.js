let home=document.getElementsByClassName("home")[0];
let about=document.getElementsByClassName("about-me")[0];
let service=document.getElementsByClassName("service")[0];
let skills=document.getElementsByClassName("skills")[0];
let contact=document.getElementsByClassName("contact")[0];



about.onclick = function() {
    window.scroll({left:0, top:520
     , behavior:"smooth"});
} ; 

contact.onclick = function() {
    window.scroll({left:0, top:116
     , behavior:"smooth"});
} ; 

skills.onclick = function() {
    window.scroll({left:0, top:651
     , behavior:"smooth"});
} ;

service.onclick = function() {
    window.scroll({left:0, top:651
     , behavior:"smooth"});
}

