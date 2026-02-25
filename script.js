const menu = document.getElementById("menu");

function toggleMenu(){
  menu.classList.toggle("active");
}

document.addEventListener("click", function(e){
  if(menu.classList.contains("active") &&
     !menu.contains(e.target) &&
     !e.target.closest(".logo")){
    menu.classList.remove("active");
  }
});
