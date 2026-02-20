window.addEventListener("scroll", function(){
let sections = document.querySelectorAll("section");

sections.forEach(function(sec){
let position = sec.getBoundingClientRect().top;

if(position < window.innerHeight - 100){
sec.classList.add("show");
}
});
});